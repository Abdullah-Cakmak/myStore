import classes from "./Appbar.module.css";
import LogoPNG from "./assets/logo2x.png"
import Search from "./Search";
import { ReactComponent as BasketSVG } from "./assets/basket.svg";
import { Link } from "react-router-dom";
import { ROUTE_PATH_BASKET, ROUTE_PATH_ITEM_LIST } from "../../constants";
import { useDispatch } from "react-redux";
import { searchUpdate } from "../../redux/actions";

export default function AppBar() {
    const dispatch = useDispatch();
    return (
        <header className={classes.appBar}>
            <div className={classes.appBarRow1}>
                <Link to={ROUTE_PATH_ITEM_LIST} onClick={() => dispatch(searchUpdate(""))}>
                    <div className={classes.appBarRow1ImageContainer}>
                        <img
                            className={classes.appBarRow1Image}
                            src={LogoPNG}
                            alt="LC WAIKIKI"
                        />
                    </div>
                </Link>
                <div className={classes.appBarRow1Search}>
                    <Search />
                </div>
                <Link to={ROUTE_PATH_BASKET}>
                    <div className={classes.appBarRow1Buttons}>
                        <BasketSVG style={{ marginBottom: -16, padding: 0 }} />
                        <p>Sepetim</p>
                    </div>
                </Link>
            </div>
        </header>
    );
}