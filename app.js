//FXNMpTCtGk5FpfzW

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://total:FXNMpTCtGk5FpfzW@cluster0.jo2kxch.mongodb.net/contacts_db?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.log(error.message));

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
