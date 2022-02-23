import {
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../types/contactTypes";
import axios from "axios";
export const get_contacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/contact");

    dispatch({ type: GET_CONTACTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const add_contact = (data) => async (dispatch) => {
  try {
    await axios.post("/contact", data);
    dispatch(get_contacts());
  } catch (error) {
    console.log(error);
  }
};

export const delete_contact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/contact/${id}`);
    dispatch(get_contacts());
  } catch (error) {
    console.log(error);
  }
};

export const edit_contact = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/contact/${id}`, data);
    dispatch(get_contacts());
  } catch (error) {
    console.log(error);
  }
};

export const get_contact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggle_true = () => {
  return { type: TOGGLE_TRUE };
};

export const toggle_false = () => {
  return { type: TOGGLE_FALSE };
};
