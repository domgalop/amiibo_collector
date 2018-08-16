import * as actionTypes from "../actions";

const initialState = {
  allAmiibos: [],
  collection: [],
  noAmiibos: false,
  wishList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_AMIIBOS:
      return {
        ...state,
        allAmiibos: action.amiibos.amiibo.filter(amiibo => amiibo)
      };
    case actionTypes.ADD_TO_COLLECTION:
      return {
        ...state,
        collection: state.allAmiibos.filter(
          amiibo => amiibo.tail === action.key
        ),
        allAmiibos: state.allAmiibos.filter(
          amiibo => amiibo.tail !== action.key
        )
      };
    case actionTypes.ADD_TO_WISH_LIST:
      return {
        ...state,
        wishList: state.allAmiibos.filter(amiibo => amiibo.tail === action.key),
        allAmiibos: state.allAmiibos.filter(
          amiibo => amiibo.tail !== action.key
        )
      };
    default:
      return state;
  }
};

export default reducer;
