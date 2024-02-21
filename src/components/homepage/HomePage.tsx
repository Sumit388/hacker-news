/* //* Packages Imports */
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

/* //* Components Imports */
import Pagination from "@Components/common/Pagination";
import DataSection from "@Components/homepage/DataSection";

/* //* Utils Imports */
import { getListingData, HOST_URL } from "@Utils/urls";

/* //* Styles Imports */
import Styles from "@Styles/Homepage.module.scss";

/* //* Dynamic Imports */
const HeadingSection = dynamic(
  () => import("@Components/homepage/HeadingSection"),
  {
    ssr: false,
  }
);

const HomePage = ({
  data,
  queryString,
}: {
  data: ListingDataType;
  queryString: string;
}) => {
  const searchParams = useRef(new URLSearchParams(queryString));
  const [listingData, setListingData] = useState<ListingDataType>(data);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await axios.get(
        getListingData(searchParams.current.toString())
      );
      setListingData(data?.data);
    } catch (error: ErrorType) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          " Some error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key: string, value?: string) => {
    if (!value && !searchParams.current.has(key)) return;
    if (!value && searchParams.current.has(key)) {
      searchParams.current.delete(key);
    } else if (value) {
      searchParams.current.set(key, value);
    }

    // remove page=1 from query, and redirect to page 1 on any filter change
    if ((key === "page" && value === "1") || key !== "page") {
      searchParams.current.delete("page");
    }

    const currentUrl = searchParams?.current?.toString()
      ? `${HOST_URL}?${searchParams.current}`
      : HOST_URL;

    getData();
    window.history.pushState({}, "", currentUrl);
  };

  const handlePageChange = (event: MouseEvent | any) => {
    event.preventDefault();
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
    const params = new URLSearchParams(event.target.search);
    if (params.get("page") !== searchParams.current.get("page")) {
      searchParams.current.delete("page");
      handleChange("page", params.get("page") as string);
    }
  };

  return (
    <div className={Styles.homepageContainer}>
      {" "}
      <div className={Styles.headingSection}>
        <HeadingSection handleChange={handleChange} />
      </div>
      <DataSection loading={loading} listingData={listingData} />
      {listingData.hits.length > 0 && (
        <Pagination
          pageSize={20}
          totalCount={Math.min(20 * listingData?.nbPages, 500)}
          onClick={handlePageChange}
          currentPage={
            searchParams.current.has("page")
              ? Number(searchParams.current.get("page"))
              : 1
          }
          url={(() => {
            const params = new URLSearchParams(searchParams.current);
            params.delete("page");
            return HOST_URL + "?" + params + "&page=";
          })()}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default HomePage;
