import { Fragment, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./BasketItemContainer.module.css"
import { useAlert } from "react-alert";
import { addToBasket, addToFavorites, removeFromBasket, removeFromFavorites } from "../../../redux/actions";
import DeleteDialog from "../DeleteDialog";

export default function BasketItemContainer(props) {
    const { itemId } = props;
    const favoriteIDList = useSelector(state => state.favoriteIDList);
    const basketIDList = useSelector(state => state.basketIDList);
    const itemList = useSelector(state => state.itemList);
    const alert = useAlert();
    const dispatch = useDispatch();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const item = useMemo(() => {
        return itemList.find(item => item.id === itemId);
    }, [itemList, itemId]);

    const count = useMemo(() => {
        let count = 0;
        basketIDList.forEach(id => {
            if (id === itemId) {
                count = count + 1;
            }
        });
        return count;
    }, [basketIDList, itemId]);

    const isFavorite = useMemo(() => {
        return favoriteIDList.find(id => itemId === id) ? true : false;
    }, [itemId, favoriteIDList]);

    const handleFavoriteClick = useCallback(() => {
        if (isFavorite) {
            dispatch(removeFromFavorites(itemId));
            alert.info("Ürün favorilerden çıkarıldı.")
        } else {
            dispatch(addToFavorites(itemId));
            alert.info("Ürün favorilere eklendi.")
        }
    }, [isFavorite, dispatch, itemId, alert]);

    const confirmDelete = useCallback((favorite) => {
        if (favorite === true) {
            dispatch(addToFavorites(itemId));
            alert.info("Ürün favori listesine eklendi.");
        }
        dispatch(removeFromBasket(itemId, count));
        alert.info("Ürün sepetinizden silindi.");
    }, [dispatch, alert, itemId, count])

    const onMinusClick = useCallback(() => {
        if(count === 1) alert.error("Ürün adedi 0'dan fazla olmalıdır.");
        else {
            dispatch(removeFromBasket(itemId, 1))
        }
    }, [count, alert, dispatch, itemId]);

    const onPlusClick = useCallback(() => {
        dispatch(addToBasket(itemId));
    }, [dispatch, itemId]);

    return (
        <Fragment>
            <DeleteDialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}
                onDeleteClick={confirmDelete} onFavoriteDeleteClick={() => confirmDelete(true)} />
            <div className={classes.Content}>
                <div className={classes.itemImage} style={{ backgroundImage: `url("${item.img}")` }} />
                <div className={classes.itemName}>
                    {item.name}
                </div>
                <div className={classes.itemRightSection}>
                    <div className={classes.itemPrice}>
                        {item.price} TL
                    </div>
                    <div className={classes.itemButtons}>
                        <div className={classes.iconButtonContainer} onClick={() => setOpenDeleteDialog(true)}>
                            <div className={classes.iconButton} style={{ backgroundImage: `url("assets/delete.png` }} />
                        </div>
                        <div className={classes.iconButtonContainer} onClick={handleFavoriteClick}>
                            <div className={classes.iconButton} style={{ backgroundImage: `url("assets/${isFavorite ? "" : "empty-"}favorite.png")` }} />
                        </div>
                    </div>
                    <div className={classes.counterContainer}>
                        <div className={classes.counterMinusPlus} onClick={onMinusClick}>
                            -
                        </div>
                        <div className={classes.counterValue}>
                            {count}
                        </div>
                        <div className={classes.counterMinusPlus} onClick={onPlusClick}>
                            +
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}