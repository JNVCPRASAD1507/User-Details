const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  mobile: String,
  address: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

