import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  delete_contact,
  get_contact,
  toggle_true,
} from "../redux/actions/contactActions";
function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("are you sure?")) {
      dispatch(delete_contact(contact._id));
    }
  };
  const handleEdit = () => {
    dispatch(toggle_true());
    dispatch(get_contact(contact._id));
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={contact.image} />
      <Card.Body>
        <Card.Title> {contact.name} </Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Link to={`/edit/${contact._id}`}>
          {" "}
          <Button variant="info" onClick={handleEdit}>
            Edit
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
