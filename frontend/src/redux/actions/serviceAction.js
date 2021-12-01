import axios from "axios";

export const getAllService = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get("http://localhost:5000/api/service");
    dispatch({ type: "GET_ALL_SERVICE", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
