const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Utilisateur = require('../model/Utilisateur');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const utilisateurRoute = express.Router();

// Multer File upload settings
const DIR = './../src/assets/'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-')
    cb(null, fileName)
  },
})

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  },
})



// POST User
utilisateurRoute.post('/create-user', upload.single('avatar'), (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const user = new Utilisateur({
    prenom: req.body.prenom,
    nom: req.body.nom,
    email: req.body.email,
    password: req.body.password,
    role:req.body.role,
    matricule: req.body.matricule,
    etat: req.body.etat,
    date_d_inscription: req.body.date_d_inscription,
    avatar: "../../assets/" + req.file.filename,
  })
  user
    .save()
    .then((result) => {
      console.log(result)
      res.status(201).json({
        message: 'User registered successfully!',
        userCreated: {
          _id: result._id,
          prenom: result.prenom,
          nom: result.nom,
          email: result.email,
          password: result.password,
          role:result.role,
          matricule: result.matricule,
          avatar: result.avatar,
          etat: result.etat,
          date_d_inscription: result.date_d_inscription,
        },
      })
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        })
    })
})

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
              return res.status(200).json({ message: "Ce compte n'existe pas", permis: false});

          }
        /*   else{
            return res.status(200).json({ message: 'reussi'});
          } */

        bcrypt.compare(req.body.password, Utilisateur.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(200).json({ message: 'Le mot de passe est incorrect', permis: false });
                  }
                  if(Utilisateur.etat == false){
                    return res.status(200).json({ message: "Ce compte n'existe plus", permis: false });
                  }
                  res.status(200).json({
                      UtilisateurId: Utilisateur._id,
                      prenom:Utilisateur.prenom,
                      nom:Utilisateur.nom,
                      email:Utilisateur.email,
                      matricule:Utilisateur.matricule,
                      permis:true,
                      role:Utilisateur.role,
                      avatar:Utilisateur.avatar,
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
