/* //* Packages Imports */
import { useState, useEffect, useRef } from "react";

/* //* Styles Imports */
import Styles from "@Styles/common/CustomAutoComplete.module.scss";

const CustomAutoComplete = (props: CustomAutoCompletePropsType) => {
  const menu = useRef(null);

  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
  const [value, setValue] = useState<object | undefined>(props?.defaultValue);
  const [searchedOptions, setSearchedOptions] = useState<Array<object>>(
    props?.options
  );
  const [inputValue, setInputValue] = useState<string>(
    props?.renederInputValue(props?.defaultValue)
  );

  const handleOptionSearch = (str: string) => {
    setSearchedOptions(
      props?.options?.filter((option: object) =>
        props.filterOption(option, str)
      )
    );
  };

  const handleOptionSelect = (entry: object) => {
    setValue(entry);
    setInputValue(props.renederInputValue(entry));
    setDropDownVisible(false);
    props.onChange(entry);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleOptionSearch(e.target.value);
  };

  const handleInputClear = () => {
    setValue({});
    setInputValue("");
  };

  const closeOpenMenus = (e: MouseEvent) => {
    const tempMenu = menu.current as unknown as Node;
    if (tempMenu && !dropDownVisible && !tempMenu.contains(e.target as Node)) {
      setDropDownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  }, []);

  useEffect(() => {
    setValue(props?.defaultValue);
    setInputValue(props?.renederInputValue(props?.defaultValue));
  }, [props?.defaultValue]);

  useEffect(() => {
    setSearchedOptions(props?.options);
  }, [props?.options]);

  return (
    <div
      className={Styles.autoCompleteContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        {...props.inputProps}
        id={props?.id || "customInput"}
        type={props.type || "text"}
        required
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        placeholder={props?.placeholder || ""}
        onFocus={() => setDropDownVisible(true)}
        name={props?.name}
      />

      <label htmlFor={props?.id || "customInput"} {...props.inputLabelProps}>
        {props?.label}
        <span className={Styles.inputAsterisk} />
      </label>
      {value && (
        <button className={Styles.clearButton} onClick={handleInputClear}>
          x
        </button>
      )}

      {dropDownVisible && (
        <div className={Styles.dropdownConatiner} ref={menu}>
          {searchedOptions.length ? (
            searchedOptions?.map((entry) => (
              <div
                className={Styles.dropdownEntry}
                onClick={() => handleOptionSelect(entry)}
                key={props?.renderOption(entry) as string}
              >
                {props?.renderOption(entry)}
              </div>
            ))
          ) : (
            <div className={Styles.dropdownEntry}>No Entries Found</div>
          )}
        </div>
      )}

      {props?.error && (
        <div className={Styles.errorContainer}>{props?.helperText}</div>
      )}
    </div>
  );
};

export default CustomAutoComplete;
