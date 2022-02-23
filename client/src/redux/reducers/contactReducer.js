import {
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../types/contactTypes";

const initialState = {
  contacts: [],
  contact: {},
  edit: false,
};

const ContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: payload.contacts };
    case GET_CONTACT:
      return { ...state, contact: payload.contact };
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    default:
      return state;
  }
};

export default ContactReducer;
