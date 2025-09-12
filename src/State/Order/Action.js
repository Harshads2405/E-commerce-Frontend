import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "./../../config/apiConfig";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post(`/api/orders/`, reqData);
    console.log("✅ created order:", data);

    const orderData = data?.order ? data.order : data;

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: orderData });
    return orderData; 
  } catch (error) {
    console.error("❌ createOrder error:", error);
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    return null;
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  if (!orderId) {
    console.error("❌ getOrderById called with null/undefined orderId");
    return;
  }

  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("📦 order by id:", data);

    const orderData = data?.order ? data.order : data;

    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: orderData });
  } catch (error) {
    console.error("❌ getOrderById error:", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
