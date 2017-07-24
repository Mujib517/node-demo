let User = require('./../models/userModel');
let jwt = require('jsonwebtoken');

let userCtrl = function () {

    let login = function (req, res) {
        let email = req.body.email;
        let password = req.body.password;

        //select username from User where username=name and password=pwd
        User.findOne({ email: email, password: password }, function (err, user) {
            if (!user) res.status(401).send("Invalid Username or password");
            else {
                var token = jwt.sign({ user: user.email }, 'mypassword', {
                    expiresIn: '5m'
                });
                let userInfo = {
                    email: user.email,
                    token: token
                };
                res.status(200).json(userInfo);
            }
        });
    };

    let register = function (req, res) {

        let user = new User(req.body);

        user.save(function (err, user) {
            if (!err)
                res.status(201).send(user);
            else res.status(500).send(err);
        });
    }

    return {
        login: login,
        register: register
    }
};

module.exports = userCtrl();