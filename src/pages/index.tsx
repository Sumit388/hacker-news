/* //* Packages Imports */
import { GetServerSideProps } from "next";
import axios from "axios";

/* //* Components Imports */
import Layout from "@Components/layout";
import HomePage from "@Components/homepage/HomePage";

/* //* Utils Imports */
import { getListingData } from "@Utils/urls";

const page = ({
  data,
  queryString,
}: {
  data: ListingDataType;
  queryString: string;
}) => <HomePage data={data} queryString={queryString} />;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryString = Object.keys(query)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`
    )
    .join("&");

  let listingData = null;
  try {
    const data = await axios.get(getListingData(queryString));
    listingData = data?.data;
  } catch (err) {
    console.error(err);
  }
  return {
    props: { data: listingData, queryString: queryString },
  };
};

export default Layout(page);
