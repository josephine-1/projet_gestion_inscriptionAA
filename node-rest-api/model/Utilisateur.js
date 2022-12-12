const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

let Utilisateur = new Schema(
  {
    prenom: {
      type: String,
    },
    nom: {
      type: String,
    },
    email: {
      type: String, require: true, unique: true
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    matricule: {
      type: String,
    },
    etat: {
      type: Boolean,
    },
  },
  {
    collection: "utilisateur",
  }

);
Utilisateur.plugin(uniqueValidator);


module.exports = mongoose.model("utilisateur", Utilisateur);
