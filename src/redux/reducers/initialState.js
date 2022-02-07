import { STORAGE_KEY_BASKET_ID_LIST, STORAGE_KEY_FAVORITE_ID_LIST, STORAGE_KEY_ITEM_LIST } from "../../constants";
import { getObjectFromLocalStorage, saveObjectToLocalStorage } from "../../helper";
import { v4 as uuidv4 } from "uuid";

const defaultItemList = [
  {
    id: uuidv4(),
    name: "Kapüşonlu Uzun Kollu Baskılı Kalın Erkek Sweatshirt",
    img: "assets/asset1.png",
    colorOptionCount: 2,
    price: 119.99
  },
  {
    id: uuidv4(),
    name: "Kapüşonlu Uzun Kollu Baskılı Kalın Erkek Sweatshirt",
    img: "assets/asset2.png",
    colorOptionCount: 2,
    price: 119.99
  },
  {
    id: uuidv4(),
    name: "LCW CASUAL Kapüşonlu Uzun Kollu Baskılı Erkek Sweatshirt",
    img: "assets/asset3.png",
    colorOptionCount: 2,
    price: 119.99
  },
  {
    id: uuidv4(),
    name: "Atatürk Baskılı Kapüşonlu Sweatshirt",
    img: "assets/asset4.png",
    colorOptionCount: 2,
    price: 119.99
  },
  {
    id: uuidv4(),
    name: "LCW BASIC Kapüşonlu Uzun Kollu Fermuarlı Erkek Sweatshirt",
    img: "assets/asset5.png",
    colorOptionCount: 2,
    price: 109.99
  },
  {
    id: uuidv4(),
    name: "LCW CASUAL Kapüşonlu Uzun Kollu Baskılı Erkek Sweatshirt",
    img: "assets/asset6.png",
    colorOptionCount: 2,
    price: 119.99
  },
  {
    id: uuidv4(),
    name: "LCW BASIC Kapüşonlu Uzun Kollu Fermuarlı Erkek Sweatshirt",
    img: "assets/asset7.png",
    colorOptionCount: 2,
    price: 119.99
  },
  {
    id: uuidv4(),
    name: "LCW CASUAL Bisiklet Yaka Uzun Kollu Erkek Sweatshirt",
    img: "assets/asset8.png",
    colorOptionCount: 2,
    price: 69.99
  },
  {
    id: uuidv4(),
    name: "LCW CASUAL Kapüşonlu Fermuarlı Erkek Sweatshirt",
    img: "assets/asset9.png",
    colorOptionCount: 2,
    price: 109.99
  },
  {
    id: uuidv4(),
    name: "LCW BASIC Bisiklet Yaka Uzun Kollu Kalın Erkek Sweatshirt",
    img: "assets/asset10.png",
    colorOptionCount: 2,
    price: 89.99
  },
  {
    id: uuidv4(),
    name: "Kapüşonlu Baskılı İnce Sweatshirt Baba Oğul Kombini",
    img: "assets/asset11.png",
    colorOptionCount: 2,
    price: 99.99
  },
  {
    id: uuidv4(),
    name: "Scooby Doo Baskılı Sweatshirt",
    img: "assets/asset12.png",
    colorOptionCount: 2,
    price: 119.99
  }
]

const itemList = getObjectFromLocalStorage(STORAGE_KEY_ITEM_LIST) || defaultItemList;
saveObjectToLocalStorage(STORAGE_KEY_ITEM_LIST, itemList);

const basketIDList = getObjectFromLocalStorage(STORAGE_KEY_BASKET_ID_LIST) || [];
const favoriteIDList = getObjectFromLocalStorage(STORAGE_KEY_FAVORITE_ID_LIST) || [];

const initialState = {
  itemList : itemList,
  basketIDList : basketIDList,
  favoriteIDList : favoriteIDList,
  searchString : ""
};

export default initialState;
