const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.jwt;

    jwt.verify(token, "mysecretkey", (err, user) => {
        if (err) {
            return res.status(403).json("Token is not valid");
        }

        req.user = user;
        next();
    });
}