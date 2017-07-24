var jwt = require('jsonwebtoken');

module.exports = function isAuthenticated(req, res, next) {
    if (!req.headers["authorization"]) res.status(401).send("Unauthorized");
    else {
        jwt.verify(req.headers["authorization"], 'mypassword', function (err) {
            if (err) res.status(401).send("Unauthorized");
            else next();
        });
    }
};
