const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const Utilisateur = require('../model/Utilisateur');
const jwt = require('jsonwebtoken')

const utilisateurRoute = express.Router();


// Add Utilisateur
utilisateurRoute.route("/add-utilisateur").post((req, res, next) => {

  Utilisateur.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Utilisateur
utilisateurRoute.route("/").get((req, res) => {
  Utilisateur.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Utilisateur
utilisateurRoute.route("/read-utilisateur/:id").get((req, res) => {

  Utilisateur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Utilisateur
utilisateurRoute.route("/modifier/:id").put((req, res, next) => {
  Utilisateur.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Utilisateur updated successfully!");
      }
    }
  );
});

utilisateurRoute.route("/connexion").post((req, res) => {
  Utilisateur.findOne({ email: req.body.email})
      .then(Utilisateur => {
          if (!Utilisateur) {
              return res.status(200).json({ message: 'Mail ou mot de passe incorrect'});

          }
        /*   else{
            return res.status(200).json({ message: 'reussi'});
          } */

        bcrypt.compare(req.body.password, Utilisateur.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(200).json({ message: 'Mail ou mot de passe incorrect' });
                  }
                  res.status(200).json({
                      UtilisateurId: Utilisateur._id,
                      token: jwt.sign(
                          { UtilisateurId: Utilisateur._id},
                          'RANDOM_TOKEN_SECRET',
                      )
                  });
              })
              .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
});

module.exports = utilisateurRoute;
