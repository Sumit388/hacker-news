/* //* Packages Imports */
import { Fragment } from "react";

/* //* Components Imports */
import Loader from "@Components/common/Loader";

/* //* Utils Imports */
import { formatDateTime } from "@Utils/utils";

/* //* Styles Imports */
import Styles from "@Styles/Homepage.module.scss";

const DataSection = ({
  loading,
  listingData,
}: {
  loading: boolean;
  listingData: ListingDataType;
}) => {
  const handleSourceArticleVisit = (link: any) => window.open(link, "_blank");

  const dummy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className={Styles.dataContainer}>
      {loading
        ? dummy.map((dummyEntry) => (
            <Fragment key={dummyEntry}>
              <Loader />
            </Fragment>
          ))
        : listingData?.hits?.map((entry) => (
            <a>
              <div className={Styles.dataEntry} key={entry?.story_id}>
                <h2>{entry?.title}</h2>
                <p>Author : {entry?.author}</p>
                <div className={Styles.utils}>
                  <span className={Styles.time}>
                    {formatDateTime(entry?.created_at)}
                  </span>
                  <button onClick={() => handleSourceArticleVisit(entry?.url)}>
                    Visit Article
                  </button>
                </div>
              </div>
            </a>
          ))}
    </div>
  );
};

export default DataSection;
