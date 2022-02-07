export const SEARCH_UPDATE = "SEARCH_UPDATE";
export function searchUpdate(searchString) {
  return function (dispatch) {
    return dispatch({
      type: SEARCH_UPDATE,
      data: searchString
    });
  }
}


export const ADD_TO_BASKET = "ADD_TO_BASKET";
export function addToBasket(item) {
  return function(dispatch) {
    return dispatch({
      type: ADD_TO_BASKET,
      data: item
    })
  }
}

export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET"
export function removeFromBasket(itemID, count) {
  return function(dispatch) {
    return dispatch({
      type: REMOVE_FROM_BASKET,
      data: {itemID, count}
    })
  }
}

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export function addToFavorites(itemID) {
  return function(dispatch) {
    return dispatch({
      type: ADD_TO_FAVORITES,
      data: itemID
    })
  }
}

export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
export function removeFromFavorites(itemID) {
  return function(dispatch) {
    return dispatch({
      type: REMOVE_FROM_FAVORITES,
      data: itemID
    })
  }
}




