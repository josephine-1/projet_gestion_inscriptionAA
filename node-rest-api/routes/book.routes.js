const express = require("express");
multer = require('multer')
const app = express();
const dir = './image/img'


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

const utilisateurRoute = express.Router();
let Utilisateur = require("../model/Utilisateur");

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

// Delete Utilisateur
utilisateurRoute.route("/delete-utilisateur/:id").delete((req, res, next) => {
  Utilisateur.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = utilisateurRoute;
