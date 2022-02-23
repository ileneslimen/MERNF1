const express = require("express");
const connectDb = require("./config/connectDb");
const ContactRoutes = require("./routes/contact");
const app = express();
require("dotenv").config();
connectDb();
// to transale the data to json
app.use(express.json());
//routes
app.use("/api/contact", ContactRoutes);

app.listen(process.env.port, () =>
  console.log(`port is running on port ${process.env.port}`)
);
