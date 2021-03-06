const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('./users-model.js');

const check_credentials = require('../middlewares/check-credentials.js')
const restricted = require('../middlewares/restricted')

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post('/register', check_credentials, (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 12)

  user.password = hash;
  
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/hash', (req, res) => {
  const password = req.headers.authorization;

  const hash = bcrypt.hashSync(password, 12)

  res.status(200).json({hash})
})


module.exports = router;
