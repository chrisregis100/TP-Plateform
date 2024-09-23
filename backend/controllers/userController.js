/* eslint-disable no-undef */
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateWebToken");
const crypto = require("crypto");
const Sendmail = require("./Sendmail");
const jwt = require("jsonwebtoken");

require("dotenv").config();
/* eslint-disable no-undef */
module.exports.SetPostUsers = async (req, res) => {
  try {
    const { nom, prenom, matricule, email, password } = req.body;

    //verification existence de l'utilisateur
    const existingUsers = await User.findOne({ matricule });
    if (existingUsers) {
      return res.status(400).json({ error: "l'utilisateur existe déja" });
    }

    if (nom === "" && prenom === "") {
      res
        .status(400)
        .json({
          error:
            "les champs ne doivent pas etre vide! veuilez renseigner vos informations",
        });
    }

    if (matricule.length < 6) {
      return res
        .status(400)
        .json({ error: "le matricule doit avoir au moins 6 caratères" });
    }
    if (password.length < 6) {
      res
        .status(400)
        .json({ error: "le mot de passe doit contenir au moins 6 caractères" });
    }

    const role = validRole(matricule, email)
    console.log(role);
    
    
    //token généré
    const tokenMail = crypto.randomBytes(32).toString("hex");

    //hasher le mot de passe
    const salt = bcrypt.genSaltSync(10);
    const passHashed = bcrypt.hashSync(password, salt);

    //Enregistrer un nouvel utilisateur

    const savedUser = await User.create({
      nom,
      prenom,
      matricule,
      email,
      password: passHashed,
      emailToken: tokenMail,
      role:role,
    });
    console.log(savedUser);

    savedUser.save()

    if (!savedUser) {
      res
        .status(400)
        .json({ error: "une erreur est survenu lors de l'enregistrement" });
    } else {
      //generer un token
      const token = generateToken(savedUser._id, res);

      res
        .status(200)
        .json({
          message: "inscription reussi",
          MailMessage: "verifiez votre mail",
          user: { savedUser },
          token,
        });

      const url = `${process.env.BASE_URL}/users/${savedUser._id}/verify/${tokenMail}`;

      await Sendmail(email, "Vérifier votre mail", url);
    }
  } catch (error) {
    console.log(error);

    res.status(404).json({ error: error });
  }
};

// Méthode pour gérer la connexion
module.exports.SetConnexion = async (req, res) => {
  try {
    const { matricule, email, password } = req.body;

    // Recherche de l'utilisateur par matricule
    const user = await User.findOne({ matricule });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Le matricule ou l'email n'existe pas" });
    }

    // Comparaison du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    const passToken = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    if (!user.ismailVerified) {
      let token = await User.findOne({ userId: user._id });
      if (!token) {
        token = crypto.randomBytes(32).toString("hex");
        user.emailToken = token;
      }

      const url = `${process.env.BASE_URL}/users/${user.id}/verify/${token}`;
      await Sendmail(email, "verify mail", url);

      return res.status(400).send({
        message: "Un email est envoyé sur votre compte. veuillez verifier",
        url,
      });
    }

    const token = user.generateAuthToken();
    return res.status(200).json({ data: token, message: "connexion reussi" , passToken});
  } catch (error) {
    console.log(error);
  }
};

module.exports.setVerifyMail = async (req, res) => {
  try {
    console.log(req.params);

    const user = await User.findOne({
      _id: req.params.id,
      emailToken: req.params.token,
    });

    console.log(user);

    if (!user) {
      return res.status(400).send({ message: "Invalid link" });
    }
    const updatemail = (user.ismailVerified = true);

    await User.updateOne({ ismailVerified: updatemail });

    user.emailToken = null;

    user.save();
    console.log(user);
    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
};



function validRole(matricule, email) {
  const regexMatriculeStudent = /^\d{8}$/;
  const regexMatriculeTeacher = /^AF\d{4}$/;
  const regexMatriculeAdmin = /^RG\d{4}$/;
  const regexEmailTeacher = /^[a-zA-Z0-9._%+-]+@uac\.bj$/;
  let role = null;

  if (
    regexMatriculeAdmin.test(matricule) &&
    email === "chrisregiskiki@gmail.com"
  ) {
    role = "admin";
  } else if (regexMatriculeStudent.test(matricule)) {
    role = "student";
  } else if (
    regexMatriculeTeacher.test(matricule) &&
    regexEmailTeacher.test(email)
  ) {
    role = "teacher";
  }

  console.log(role);
  return role;
}
