import { createRef, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as SortSVG } from "./assets/sort.svg";
import ItemContainer from "./ItemContainer";
import classes from "./ItemListPage.module.css";

export default function ItemListPage() {
  const itemList = useSelector((state) => state.itemList);
  const searchString = useSelector((state) => state.searchString);
  const [sortByDescendingPrice, setSortByDescendingPrice] = useState(false);
  const [sortByAscendingPrice, setSortByAscendingPrice] = useState(false);
  const [filteredItemList, setFilteredItemList] = useState([]);
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const containerRef = createRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenSortMenu(false);
      }
    },
    [containerRef, setOpenSortMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  //filter by searchString and order by price
  useEffect(() => {
    let result = [...itemList];
    if (searchString && searchString.trim()) {
      let searchStringLower = searchString.toLocaleLowerCase();
      result = result.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchStringLower)
      );
    }
    if (sortByAscendingPrice) {
      result.sort((item1, item2) => item1.price - item2.price);
    } else if (sortByDescendingPrice) {
      result.sort((item1, item2) => item2.price - item1.price);
    }
    setFilteredItemList(result);
  }, [itemList, searchString, sortByAscendingPrice, sortByDescendingPrice]);

  return (
    <div className={classes.ItemListPage}>
      <div className={classes.itemListHeaderRow}>
        <div className={classes.itemListProductCount}>
          {searchString ? (
            <p>
              <b>"{searchString}"</b> ile ilgili <b>{filteredItemList.length}</b>{" "}
              ürün bulduk
            </p>
          ) : (
            <p>
              <b>{filteredItemList.length}</b> ürün
            </p>
          )}
        </div>
        <div
          className={classes.itemListSortContainer}
          onClick={(e) => setOpenSortMenu(!openSortMenu)}
          ref={containerRef}
        >
          <SortSVG />
          <b>Sırala</b>
          {openSortMenu ? (
            <div className={classes.dropdown}>
              <ul>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortByAscendingPrice(true);
                    setSortByDescendingPrice(false);
                    setOpenSortMenu(false);
                  }}
                >
                  Artan Fiyat{" "}
                  {sortByAscendingPrice ? <i className="fa fa-check"></i> : null}
                </li>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortByAscendingPrice(false);
                    setSortByDescendingPrice(true);
                    setOpenSortMenu(false);
                  }}
                >
                  Azalan Fiyat{" "}
                  {sortByDescendingPrice ? <i className="fa fa-check"></i> : null}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.itemListContainer}>
        {filteredItemList.map((item) => {
          return <ItemContainer key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
