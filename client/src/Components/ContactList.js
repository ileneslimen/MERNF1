import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_contacts } from "../redux/actions/contactActions";
import ContactCard from "./ContactCard";
function ContactList() {
  const contacts = useSelector((state) => state.ContactReducer.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_contacts());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      {contacts.map((contact) => (
        <ContactCard contact={contact}></ContactCard>
      ))}
    </div>
  );
}

export default ContactList;
