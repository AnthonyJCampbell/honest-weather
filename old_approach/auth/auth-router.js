const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model.js');
const jwt = require('jsonwebtoken')

const check_credentials = require('../middlewares/check-credentials.js')

router.post('/register', check_credentials, (req, res) => {
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
        req.session.user = user;
        console.log('here')
        const token = generateToken(user)
        res.status(200).json({ 
          message: `Welcome ${user.username}!`,
          token: token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.json({ message:  "We couldn't log you out!"})
      } else {
        res.status(200).json({message: "Logged out successfully!"})
      }
    })
  } else {
    res.status(200).json({ message: "You were never here to begin with"})
  }
})

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const secret = process.env.JWT_SECRET || "supersecret"
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options)
}

module.exports = router;
