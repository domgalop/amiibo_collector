import * as actionTypes from "../actions";

const initialState = {
  collection: [],
  wishList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_AMIIBO:
      return state;
    case actionTypes.MOVE_AMIIBO_TO_COL:
      return {
        ...state,
        wishList: state.collection.filter(amiibo => amiibo.tail === action.key),
        collection: state.collection.filter(
          amiibo => amiibo.tail !== action.key
        )
      };
    case actionTypes.MOVE_AMIIBO_TO_WIS:
      return state;
    default:
      return state;
  }
};

export default reducer;
