import {
  GET_HOME_FAILED,
  GET_HOME_PENDING,
  GET_HOME_SUCCESS,
} from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  home: [],
  error: null,
  empty: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_PENDING:
      return { ...state, isLoading: true };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        home: action.payload,
        empty: action.payload.length === 0,
      };
    case GET_HOME_FAILED:
      return {
        ...state,
        isError: true,
        error: action.payload,
        empty: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
