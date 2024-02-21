import React from "react";
import PaginationProps from "@Types/Pagination";
import Style from "@Styles/common/Pagination.module.scss";

const Pagination = (props: PaginationProps) => {
  const { url, totalCount, pageSize, currentPage = 1, onClick } = props;

  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages < 2) return null;

  const listItems = () => {
    if (totalPages < 8) {
      let count = 0;
      return (
        <>
          {new Array(totalPages).fill(true).map(() => (
            <li key={`pagination-l8-${count}`}>
              <a
                href={currentPage !== ++count ? url + count : undefined}
                className={
                  currentPage === count ? Style.paginationContainerActive : ""
                }
                onClick={currentPage === count ? onClick : undefined}
              >
                {count}
              </a>
            </li>
          ))}
        </>
      );
    }

    if (currentPage < 5) {
      let count = 0;
      return (
        <>
          {new Array(5).fill(true).map(() => (
            <li key={`pagination-l5-${count}`}>
              <a
                href={currentPage !== ++count ? url + count : undefined}
                className={
                  currentPage === count ? Style.paginationContainerActive : ""
                }
                onClick={onClick}
              >
                {count}
              </a>
            </li>
          ))}
          <li>
            <span>..</span>
          </li>
          <li>
            <a href={url + totalPages} onClick={onClick}>
              {totalPages}
            </a>
          </li>
        </>
      );
    }

    if (currentPage > totalPages - 4) {
      let count = 4;
      return (
        <>
          <li>
            <a href={url + 1} onClick={onClick}>
              {1}
            </a>
          </li>
          <li>
            <span>..</span>
          </li>
          {new Array(5).fill(true).map(() => (
            <li key={`pagination-r5-${--count}`}>
              <a
                href={
                  currentPage !== totalPages - count
                    ? url + (totalPages - count)
                    : undefined
                }
                className={
                  currentPage === totalPages - count
                    ? Style.paginationContainerActive
                    : ""
                }
                onClick={onClick}
              >
                {totalPages - count}
              </a>
            </li>
          ))}
        </>
      );
    }

    return (
      <>
        <li key={`pagination-center-1`}>
          <a href={url + 1} onClick={onClick}>
            {1}
          </a>
        </li>
        <li>
          <span>..</span>
        </li>
        <li key={`pagination-center-${currentPage - 1}`}>
          <a href={url + (currentPage - 1)} onClick={onClick}>
            {currentPage - 1}
          </a>
        </li>
        <li key={`pagination-center-${currentPage}`}>
          <a
            href={url + currentPage}
            className={Style.paginationContainerActive}
            onClick={onClick}
          >
            {currentPage}
          </a>
        </li>
        <li key={`pagination-center-${currentPage + 1}`}>
          <a href={url + (currentPage + 1)} onClick={onClick}>
            {currentPage + 1}
          </a>
        </li>
        <li>
          <span>..</span>
        </li>
        <li key={`pagination-center-${totalPages}`}>
          <a href={url + totalPages} onClick={onClick}>
            {totalPages}
          </a>
        </li>
      </>
    );
  };

  return (
    <div className={Style.paginationContainer}>
      <ul>
        {currentPage !== 1 ? (
          <li>
            <a
              className={Style.paginationContainerPrev}
              href={url + (currentPage - 1)}
              onClick={onClick}
              style={{
                marginRight: "auto",
              }}
            >
              {`Prev`}
            </a>
          </li>
        ) : (
          <li />
        )}
        {listItems()}
        {currentPage < totalPages ? (
          <li>
            <a
              className={Style.paginationContainerNext}
              style={{
                marginLeft: "auto",
              }}
              href={url + (currentPage + 1)}
              onClick={onClick}
            >
              {`Next`}
            </a>
          </li>
        ) : (
          <li />
        )}
      </ul>
    </div>
  );
};

export default Pagination;
