/* //* Packages Imports */
import { ChangeEvent, useState } from "react";

/* //* Components Imports */
import CustomAutoComplete from "@Components/common/CustomAutoComplete";

/* //* Hooks Imports */
import useDebounce from "@Hooks/useDebounce";
import useStore from "@Hooks/useStore";

/* //* Data Imports */
import { TAGS_OPTIONS } from "@Data/homepageData";

/* //* Styles Imports */
import Styles from "@Styles/Homepage.module.scss";

const HeadingSection = ({
  handleChange,
}: {
  handleChange: (key: string, value?: string) => void;
}) => {
  const [tagsValue, setTagsValue] = useState<sortByOptionTypes>(
    TAGS_OPTIONS[0]
  );
  // Still searching for the type for this.
  const [addToSearch, previousSearches] = useStore((state: any) => [
    state.addToSearch,
    state.previousSearches,
  ]);

  const handleInputChange = (value: string) => {
    handleChange("query", value);
    if (value) addToSearch(value);
  };

  const onSortByChange = (option: sortByOptionTypes) => {
    setTagsValue(option);
    handleChange("tags", option.value);
  };

  return (
    <section>
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
            500
          )}
        />
        <div className={Styles.sortByContainer}>
          <CustomAutoComplete
            id="tags"
            label="Filter By Tags"
            name={"tags"}
            defaultValue={tagsValue}
            options={TAGS_OPTIONS}
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
    </section>
  );
};

export default HeadingSection;
