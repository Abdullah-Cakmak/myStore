import classes from "./DeleteDialog.module.css";

export default function DeleteDialog(props) {
    const {open, onClose, onDeleteClick, onFavoriteDeleteClick } = props;

    return (
        <div className={classes.modal} style={{display: open ? "block" : "none"}}>
            <div className={classes.modalContent}>
                <div className={classes.iconButtonContainer}>
                    <div className={classes.iconButton} style={{ backgroundImage: `url("assets/close.png")` }} onClick={onClose}/>
                </div>
                <div className={classes.modalText}>
                    Ürünü sepetinizden sildikten sonra favorilerinizde saklamak ister misiniz?
                </div>
                <div className={classes.actionButtons}>
                    <button type="button" className={classes.deleteButton} onClick={onDeleteClick}>Sil</button>
                    <button type="button" className={classes.deleteAndAddFavoriteButton} onClick={onFavoriteDeleteClick}>Sil ve favorilere ekle</button>
                </div>
            </div>
        </div>
    )
}