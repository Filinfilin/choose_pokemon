import React, { useId, useRef, useEffect } from "react";
import $ from "./index.module.scss";
import { localStorageService } from "../../api/services/localStorageService";

const Dropdown = ({
  searchResult,
  openDropdown,
  dropDownOnClick,
  inputData,
  setFilter,
}) => {
  useEffect(() => {
    if (localStorageService.getMovieName() && localStorageService.getMovieUrl()){
      setFilter({
        filter: "movie",
        selection: localStorageService.getMovieName() || "",
        url: localStorageService.getMovieUrl() || "",
      });
    }
  }, []);

  const ref = useRef();
  const itemKey = useId();
  return (
    <div>
      <div className={$.dropdown} ref={ref}>
        <button
          className={$.button}
          onClick={() => {
            dropDownOnClick(openDropdown ? { movie: false } : { movie: true });
          }}
        >
          {"Filter By Movie"} &#9662;
        </button>
        <div className={[`${$.dropdownContent} ${openDropdown && $.show}`]}>
          <input
            type="text"
            className={$.input}
            placeholder="Search by name"
            {...inputData}
            value={inputData.value}
          />
          {searchResult.map((item, index) => (
            <button
              className={$.button}
              onClick={() =>
                setFilter({
                  selection: item["name"],
                  url: item["url"],
                })
              }
              key={`${itemKey}-${index}`}
            >
              {item["name"]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dropdown);
