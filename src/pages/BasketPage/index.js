import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketItemContainer from "./BasketItemContainer";
import classes from "./BasketPage.module.css";

export default function BasketPage() {
    const basketIDList = useSelector(state => state.basketIDList);
    const itemList = useSelector(state => state.itemList);

    const totalPrice = useMemo(() => {
        let totalPrice = 0;
        basketIDList.forEach(id => {
            totalPrice = totalPrice + itemList.find(item => item.id === id).price
        });
        return totalPrice.toFixed(2);
    }, [itemList, basketIDList]);

    const renderIDList = useMemo(() => {
        let result = basketIDList.reduce((prev, next) => {
            if(prev.includes(next)) return prev; 
            else {
                prev.push(next);
                return prev;
            }
        }, [])
        result.sort();
        return result;
    }, [basketIDList]);

    return (
        <div className={classes.Content}>
            <div className={classes.Left}>
                <div className={classes.LeftHeadRow}>
                    <div className={classes.basketCount}>
                        <p>Sepetim ({basketIDList.length} ürün)</p>
                    </div>
                    <Link to="/">
                        <div className={classes.backToShopping}>
                            {"< Alışverişe devam et"}
                        </div>
                    </Link>
                </div>
                {renderIDList.map(id => {
                    return (
                        <BasketItemContainer key={id} itemId={id} />
                    )
                })}
            </div>
            <div className={classes.Right}>
                <div className={classes.RightHeader}>
                    Sipariş Özeti
                </div>
                <div className={classes.RightSubText}>
                    <span>Ürün toplam</span>
                    <span>{totalPrice} TL</span>
                </div>
                <div className={classes.RightSubText} style={{ fontWeight: "bold" }}>
                    <span>İndirimler</span>
                    <span>0 TL</span>
                </div>
                <div className={classes.RightSubText} style={{ fontWeight: "bold" }}>
                    <span>Kargo Ücreti</span>
                    <span>Bedava</span>
                </div>
                <div className={classes.RightTotalPrice} style={{ fontWeight: "bold" }}>
                    <span>Genel Toplam</span>
                    <span>{totalPrice} TL</span>
                </div>
            </div>
        </div>
    );


}