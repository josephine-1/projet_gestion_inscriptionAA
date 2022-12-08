const mongoose = require("mongoose");
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
      type: String,
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

module.exports = mongoose.model("utilisateur", Utilisateur);
