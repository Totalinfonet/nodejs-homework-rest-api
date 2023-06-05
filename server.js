const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://total:FXNMpTCtGk5FpfzW@cluster0.jo2kxch.mongodb.net/contacts_db?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("DB connected successfully");
    console.log("Server running on port: 3000");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
