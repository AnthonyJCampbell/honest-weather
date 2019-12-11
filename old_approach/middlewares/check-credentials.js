const check_credentials = (req, res, next) => {
    let {username, password} = req.body
  
    if (username && password) {
      next()
    } else {
      res.status(400).json({"message": "Please provide valid credentials"})
    }
}

module.exports = check_credentials