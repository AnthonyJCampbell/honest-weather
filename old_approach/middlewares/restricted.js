const restricted = function(req, res, next) {
    let { username, password } = req.headers

    if (username && password) {
        next()
    } else {
        res.status(400).json({ "message": "Please provide valid credentials" })
    }
}

module.exports = restricted