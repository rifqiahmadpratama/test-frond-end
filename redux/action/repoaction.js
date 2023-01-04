import axios from "axios";
import { GET_REPO_FAILED, GET_REPO_PENDING, GET_REPO_SUCCESS } from "./types";

export const getRepo = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_REPO_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `https://api.github.com/users/rifqiahmadpratama/repos`
    );

    dispatch({
      type: GET_REPO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_REPO_FAILED,
      payload: error.message || "Internal Server Error",
    });
  }
};
