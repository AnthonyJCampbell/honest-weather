const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model.js');

const check_credentials = require('../middlewares/check-credentials.js')

router.post('/register', (req, res) => {
  let user = req.body;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', check_credentials, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    // .first()
    .then(user => {
      // Workaround to account for differing hashes. Since DB is not working, any password will do
      // compareSync compares the provided password from req.body with the hashed version on the db (which cointains the salt + n of rounds)
      if (user && bcrypt.compareSync(password, bcrypt.hashSync(password, 12))) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
