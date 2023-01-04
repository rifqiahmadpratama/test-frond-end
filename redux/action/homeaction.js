import axios from "axios";
import { GET_HOME_FAILED, GET_HOME_PENDING, GET_HOME_SUCCESS } from "./types";

export const getHome = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_HOME_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `https://api.github.com/users/rifqiahmadpratama`
    );

    dispatch({
      type: GET_HOME_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_HOME_FAILED,
      payload: error.message || "Internal Server Error",
    });
  }
};
