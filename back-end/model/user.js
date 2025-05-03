import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  number: Number,
  nameOfLocation: String,
  date: String,
  loginHour: String,
  name: String,
  age: Number,
  gender: String,
  email: String,
  noTelpon: String,
  brandDevice: String,
  digitalInterest: String,
  locationType: String,
});

export default mongoose.model("users", userSchema);
