import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUpdate } from "../../../redux/actions";
import classes from "./Search.module.css";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchTextChange = useCallback(
    (e) => {
      setSearchText(e.target.value);
    },
    [setSearchText]
  );

  const buttonClasses = useMemo(() => {
    const active =
      searchText.length >= "3" && searchText.trim()
        ? classes.searchButtonActive
        : "";
    return `${classes.searchButton} ${active}`;
  }, [searchText]);

  const handleSearchClick = useCallback(
    (e) => {
      //---dispatch to redux----
      dispatch(searchUpdate(searchText.trim()));
      //------------------------
      setSearchText("");
    },
    [setSearchText, dispatch, searchText]
  );

  return (
    <div>
      <div className={classes.searchBox}>
        <i className={"fa fa-search " + classes.searchIcon} />
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          value={searchText}
          type={"text"}
          className={classes.searchInput}
          placeholder="Tüm ürünlerde ara"
          onChange={handleSearchTextChange}
        />
      </div>
      <button
        type="button"
        disabled={searchText.length >= "3" ? false : true}
        onClick={handleSearchClick}
        className={buttonClasses}
      >
        Ara
      </button>
    </div>
  );
}
