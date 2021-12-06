import axios from "axios";
import { Navigate } from "react-router-dom";
import { message } from "antd";

export const addToCart = (reqobj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  

try{
  const {data} = await axios.get("http://localhost:5000/api/favourite/getallfavourite")
  data.map((x)=>async()=>{
    if(x.id!==reqobj.id){
      await axios.post("http://localhost:5000/api/favourite/addfavourite", reqobj)
      console.log(reqobj)
      dispatch({ type: "LOADING", payload: false });
      message.success("Added to favourite")
    }else{
      dispatch({ type: "LOADING", payload: false });
      message.success("already there to favourite")
    }
  })
  // await axios.post("http://localhost:5000/api/favourite/addfavourite", reqobj)
  // console.log(reqobj)
  // dispatch({ type: "LOADING", payload: false });
  // message.success("Added to favourite")
}catch(error){
  console.log(error);
    dispatch({ type: "LOADING", payload: false });
  message.error("Something went wrong , please try later");
}
}



export const removeFromCart= (id) => async (dispatch, getState) =>{
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:id
    })
    localStorage.setItem("gomax-cart", JSON.stringify(getState().cart.cartItems))
}