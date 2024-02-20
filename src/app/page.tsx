"use client";
/* //* Packages Imports */
import { useEffect, useState, ChangeEvent, useRef } from "react";

/* //* Components Imports */
import CustomAutoComplete from "@Components/common/CustomAutoComplete";
import Pagination from "@Components/common/Pagination";

/* //* Hooks Imports */
import useDebounce from "@Hooks/useDebounce";
import useStore from "@Hooks/useStore";

/* //* Utils Imports */
import { formatDateTime } from "@Utils/utils";

/* //* Data Imports */
import { SORTBY_OPTIONS } from "@Data/homepageData";
import { json_sample } from "@Data/sampleData";

/* //* Styles Imports */
import Styles from "@Styles/Homepage.module.scss";
import "@Styles/global.css";
import styles from "./globals.css";

const page = () => {
  const searchParams = useRef(new URLSearchParams(""));
  const [inputValue, setInputValue] = useState<string>("");
  const [addToSearch, previousSearches] = useStore((state: unknown) => [
    state.addToSearch,
    state.previousSearches,
  ]);
  const [sortByValue, setSortByValue] = useState<sortByOptionTypes>(
    SORTBY_OPTIONS[0]
  );

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value) addToSearch(value);
  };

  const onSortByChange = (option: sortByOptionTypes) => setSortByValue(option);

  const handleSourceArticleVisit = (link: any) => window.open(link, "_blank");

  return (
    <div className={Styles.homepageContainer}>
      {" "}
      <h1>HACKER NEWS.</h1>
      <p>
        Your daily dose of hacking news is all here. Do you want to know
        something? Just type your query in the search box and get all the
        information that you have been looking for.
      </p>
      <div className={Styles.filterContainer}>
        <input
          type="text"
          className={Styles.searchField}
          placeholder="Type here to search"
          onChange={useDebounce(
            (e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e.target.value),
            3000
          )}
        />
        <div className={Styles.sortByContainer}>
          <CustomAutoComplete
            id="SortBy"
            label="Sort By"
            name={"Sort By"}
            defaultValue={sortByValue}
            options={SORTBY_OPTIONS}
            onChange={onSortByChange}
            renderOption={(option: sortByOptionTypes) => (
              <div>{option?.label}</div>
            )}
            renederInputValue={(option: sortByOptionTypes) => option?.label}
            filterOption={(option: sortByOptionTypes, str: string) =>
              option?.label?.indexOf(str) !== -1 ||
              option?.value?.indexOf(str) !== -1
            }
          />
        </div>
      </div>
      <div className={Styles.recentSearchesConatiner}>
        <h2>Your Recent Searches</h2>
        <div className={Styles.recentEntries}>
          {previousSearches.map((val: string, index: string) => (
            <button
              className={Styles.recentEntry}
              title={val}
              key={val + index}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
      <div className={Styles.borderLine} />
      <div className={Styles.dataContainer}>
        {json_sample?.hits?.map((entry) => (
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
      <Pagination
        pageSize={20}
        totalCount={20 * json_sample?.nbPages}
        onClick={() => {}}
        url={(() => {
          const params = new URLSearchParams(searchParams.current);
          params.delete("page");
          return "localhost:3000" + "?" + params + "page=";
        })()}
      />
    </div>
  );
};

export default page;
