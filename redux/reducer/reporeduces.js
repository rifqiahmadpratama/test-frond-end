import {
  GET_REPO_FAILED,
  GET_REPO_PENDING,
  GET_REPO_SUCCESS,
} from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  repo: [],
  error: null,
  empty: false,
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO_PENDING:
      return { ...state, isLoading: true };
    case GET_REPO_SUCCESS:
      return {
        ...state,
        repo: action.payload,
        empty: action.payload.length === 0,
      };
    case GET_REPO_FAILED:
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

export default repoReducer;
