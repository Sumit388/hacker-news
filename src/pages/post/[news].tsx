/* //* Packages Imports */
import { GetServerSideProps } from "next";
import axios from "axios";
import dynamic from "next/dynamic";

/* //* Components Imports */
import Layout from "@Components/layout";
import DetailsHeader from "@Components/detailsPage/DetailsHeader";

/* //* Utils Imports */
import { getDetailsData } from "@Utils/urls";

/* //* Styles Imports */
import Styles from "@Styles/DetailsPage.module.scss";

/* //* Dynamic Imports */
const DetailsComments = dynamic(
  () => import("@Components/detailsPage/DetailsComments"),
  {
    ssr: false,
  }
);

const news = ({ data }: { data: DetailsDataType }) => {
  return (
    <div className={Styles.detailPageContainer}>
      <DetailsHeader data={data} />
      <DetailsComments data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let detailsData = null;
  try {
    const data = await axios.get(getDetailsData(query.news as string));
    detailsData = data?.data;
  } catch (err: ErrorType) {
    console.error(err);
    if (err.response?.status === 404) {
      return {
        notFound: true,
      };
    }
  }
  return {
    props: { data: detailsData },
  };
};

export default Layout(news);
