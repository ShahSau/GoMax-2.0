import axios from "axios";
import { message } from "antd";


export const userLogin = (reqObj) => async (dispatch) => {
  // let navigate = useNavigate();

  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("http://localhost:5000/api/login", reqObj);
    localStorage.setItem("gomax-user", JSON.stringify(response.data));
    message.success("Login success");
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("http://localhost:5000/api/users/register", reqObj);
    message.success("Registration successfull");
    setTimeout(() => {}, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
