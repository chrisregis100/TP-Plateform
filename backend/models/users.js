/* eslint-disable no-undef */
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  matricule: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  ismailVerified: { type: Boolean, required: true, default: false },
  emailToken: { type: String },
  role:{type:String, enum: ['admin', 'student', "teacher"], required:true}
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  }); 
  return token;
};

const User = mongoose.model("Users", userSchema);

module.exports = User;
