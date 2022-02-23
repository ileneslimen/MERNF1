import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add_contact, edit_contact } from "../redux/actions/contactActions";
import { useNavigate } from "react-router-dom";
function AddEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edit = useSelector((state) => state.ContactReducer.edit);
  const contact = useSelector((state) => state.ContactReducer.contact);

  useEffect(() => {
    if (edit) {
      setName(contact.name);
      setEmail(contact.email);
      setImage(contact.image);
    }
  }, [contact]);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(add_contact({ name, email, image }));
    navigate("/list");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edit_contact(contact._id, { name, email, image }));
    navigate("/list");
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>image</Form.Label>
        <Form.Control
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          placeholder="Enter image "
        />
      </Form.Group>
      {edit ? (
        <Button variant="primary" type="submit" onClick={handleEdit}>
          edit
        </Button>
      ) : (
        <Button variant="primary" type="submit" onClick={handleAdd}>
          Add
        </Button>
      )}
    </Form>
  );
}

export default AddEdit;
