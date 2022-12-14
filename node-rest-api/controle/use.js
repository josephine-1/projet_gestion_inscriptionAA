const bcrypt = require('bcrypt');
const Utilisateur = require('../model/Utilisateur');
const jwt = require('jsonwebtoken')
// const bcrypt = require("bcryptjs");

const utilisateur = require('../model/Utilisateur');


exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then((hash) =>{ 
    const utilisateur = new utilisateur({

        email: req.body.email,
        password: hash,
    });
    utilisateur.save()
    .then(() => res.status(201).json({message: 'Utilisateur cree !'}))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Utilisateur.findOne({ email: req.body.email })
        .then(Utilisateur => {
            if (!Utilisateur) {
                return res.status(401).json({ message: ''});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: '' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };