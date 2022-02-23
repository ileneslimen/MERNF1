const express = require("express");
const {
  AddContact,
  GetContacts,
  DeleteContact,
  UpdateContact,
  GetOneContact,
} = require("../controllers/contact");

const ContactRoutes = express.Router();
// method post to create
// req.body
ContactRoutes.post("/", AddContact);
//method get
ContactRoutes.get("/", GetContacts);
//method delete
// req.params

ContactRoutes.delete("/:id", DeleteContact);

// method put
// req.params req.body

ContactRoutes.put("/:id", UpdateContact);

// method get
// req.params

ContactRoutes.get("/:id", GetOneContact);

module.exports = ContactRoutes;
