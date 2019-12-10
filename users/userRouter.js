const router = require('express').Router();

const Users = require('./userModel.js');
const restricted = require('../auth/restricted-middleware.js');
const checkDepartment = require('../auth/checkDepartment.js');

router.get('/', restricted, checkDepartment("math"), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
