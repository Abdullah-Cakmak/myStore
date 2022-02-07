import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, addToFavorites, removeFromFavorites } from "../../../redux/actions";
import { ReactComponent as BasketSVG } from "./assets/basket.svg";
import classes from "./ItemContainer.module.css";
import { useAlert } from "react-alert";

export default function ItemContainer(props) {
    const { item } = props;
    const favoriteIDList = useSelector(state => state.favoriteIDList);
    const dispatch = useDispatch();
    const alert = useAlert();

    const isFavorite = useMemo(() => {
        return favoriteIDList.find(id => item.id === id) ? true : false;
    }, [item, favoriteIDList]);

    const handleFavoriteClick = useCallback(() => {
        if (isFavorite) {
            dispatch(removeFromFavorites(item.id));
            alert.info("Ürün favorilerden çıkarıldı.")
        } else {
            dispatch(addToFavorites(item.id));
            alert.info("Ürün favorilere eklendi.")
        }
    }, [isFavorite, dispatch, item, alert]);

    const handleBasketClick = useCallback(() => {
        dispatch(addToBasket(item.id));
        alert.info("Ürün sepete eklendi.")
    }, [dispatch, alert, item]);

    return (
        <div className={classes.container}>
            <div className={classes.imageContainer} style={{ backgroundImage: `url("${item.img}")` }}>
                <div className={classes.iconFavoriteContainer} onClick={handleFavoriteClick}>
                    <div className={classes.iconFavorite} style={{ backgroundImage: `url("assets/${isFavorite ? "" : "empty-"}favorite.png")` }} />
                </div>
            </div>
            <div className={classes.nameContainer}>
                {item.name}
            </div>
            <div className={classes.priceContainer}>
                {item.price + " TL"}
                <span className={classes.basketContainer} onClick={handleBasketClick}>
                    <span>
                        <BasketSVG />
                    </span>
                    <span>Sepete ekle</span>
                </span>
            </div>
            <div className={classes.colorOptionsContainer}>
                <span className={classes.blueDot}>
                    <span className={classes.orangeDot} />
                </span>
                <span className={classes.colorOptionsCount}>
                    {item.colorOptionCount} Renk
                </span>
            </div>
        </div>
    )
}