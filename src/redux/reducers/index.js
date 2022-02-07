import { STORAGE_KEY_BASKET_ID_LIST, STORAGE_KEY_FAVORITE_ID_LIST } from "../../constants";
import { saveObjectToLocalStorage } from "../../helper";
import { ADD_TO_BASKET, ADD_TO_FAVORITES, REMOVE_FROM_BASKET, REMOVE_FROM_FAVORITES, SEARCH_UPDATE } from "../actions";
import initialState from "./initialState";

const handleAddToBasket = (state, action) => {
    const basketIDList =  [...state.basketIDList, action.data]
    saveObjectToLocalStorage(STORAGE_KEY_BASKET_ID_LIST, basketIDList);
    return {...state, basketIDList}
}

const handleRemoveFromBasket = (state, action) => {
    const {itemID, count} = action.data;
    const basketIDList = [...state.basketIDList];
    for(let i = 0; i < count; i++) {
      const index = basketIDList.findIndex(id => id === itemID);
      if (index > -1) {
        basketIDList.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    saveObjectToLocalStorage(STORAGE_KEY_BASKET_ID_LIST, basketIDList);
    return {...state, basketIDList};
}

const handleAddToFavorites = (state, action) => {
    const favoriteIDList =  [...state.favoriteIDList, action.data]
    saveObjectToLocalStorage(STORAGE_KEY_FAVORITE_ID_LIST, favoriteIDList);
    return {...state, favoriteIDList}
}

const handleRemoveFromFavorites = (state, action) => {
    const favoriteIDList = state.favoriteIDList.filter(id => id !== action.data)
    saveObjectToLocalStorage(STORAGE_KEY_FAVORITE_ID_LIST, favoriteIDList);
    return {...state, favoriteIDList}
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_UPDATE: {
        return {...state, searchString: action.data}
      }
      case ADD_TO_BASKET: {
        return handleAddToBasket(state, action);
      }
      case REMOVE_FROM_BASKET: {
        return handleRemoveFromBasket(state, action);
      }
      case ADD_TO_FAVORITES: {
        return handleAddToFavorites(state, action);
      }
      case REMOVE_FROM_FAVORITES: {
        return handleRemoveFromFavorites(state, action);
      }
      default: {
        return state;
      }
    }
}

const rootReducer = (state, action) => {
    const latestState = appReducer(state, action);
    console.log("Latest redux state:", latestState);
    return latestState;
  };
  
  export default rootReducer;