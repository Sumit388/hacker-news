"use client";
/* //* Packages Imports */
import { useEffect, useState, ChangeEvent } from "react";

/* //* Hooks Imports */
import useDebounce from "@Hooks/useDebounce";
import useStore from "@Hooks/useStore";

/* //* Styles Imports */
import Styles from "@Styles/Homepage.module.scss";
import "@Styles/global.css";

const page = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [addToSearch, previousSearches] = useStore((state: unknown) => [
    state.addToSearch,
    state.previousSearches,
  ]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value) addToSearch(value);
  };

  return (
    <div className={Styles.homepageContainer}>
      {" "}
      <h1>HACKER NEWS.</h1>
      <p>
        Your daily does of hacking new is all here. Do you want to know
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
        <input type="text" />
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
      <div className={Styles.borderLine}></div>
    </div>
  );
};

export default page;
