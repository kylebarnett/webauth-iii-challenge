const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const Users = require('../users/userModel.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'you shall not pass.' })
      } else {
        req.decodedJwt = decodedToken
        console.log(req.decodedJwt)
        next()
      }
    })
  } else {
    res.status(401).json({ message: "can't touch that" })
  }
};
