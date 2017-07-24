let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');


let blogsRouter = require('./routers/blogsRouter');
let userRouter = require('./routers/userRouter');
let defaultRouter = require('./routers/defaultRouter');

let isAuthenticated = require('./middlewares/auth');


let port = process.env.port | 3000;

app.listen(port, function () {
    console.log("server running on 3000");
});

mongoose.connect("mongodb://localhost/blogsDb", { useMongoClient: true });

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/user', userRouter);

//check for authentication token
app.use(isAuthenticated);

app.use('/blogs', blogsRouter);