import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

const initialState = {
  allAmiibos: [],
  missingAmiibos: [],
  collection: [],
  wishList: []
};

const reducer = (state = initialState, action) => {
  let shelf = "";
  switch (action.type) {
    case actionTypes.ALL_AMIIBOS:
      return {
        ...state,
        allAmiibos: action.amiibos.map(amiibo => {
          return { ...amiibo, shelf: "Missing Amiibo" };
        })
      };
    case actionTypes.ADD_TO_COLLECTION:
      return;
    case actionTypes.ADD_TO_WISH_LIST:
      return updateObject(state, {
        ...state,
        wishList: state.allAmiibos.filter(amiibo => {
          if (amiibo.tail === action.key) {
            amiibo.shelf = "Wish List";
            return { ...amiibo };
          }
        })
      });
    case actionTypes.DELETE_AMIIBO:
      return updateObject(state, {
        ...state,
        missingAmiibos: state.allAmiibos.filter(amiibo => {
          if (amiibo.tail === action.key) {
            return { ...amiibo, shelf: shelf };
          }
        })
      });
    default:
      return state;
  }
};

export default reducer;
