const express = require('express');
const router = express.Router();
const utilisateur = require('../controle/use');

router.post('/signup',utilisateur.signup);
router.post('/login',utilisateur.login);

module.exports = router;