let express = require('express');
let userCtrl = require('./../controllers/userCtrl');

let userRouter = express.Router();

userRouter.post('/login', userCtrl.login);
userRouter.post('/register', userCtrl.register);


module.exports = userRouter;