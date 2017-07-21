let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose=require('mongoose');

let blogsCtrl = require('./controllers/blogsCtrl');
let blogsRouter = require('./routers/blogsRouter');
let defaultRouter = require('./routers/defaultRouter');

let port = process.env.port | 3000;

app.listen(port, function () {
    console.log("server running on 3000");
});

mongoose.connect("mongodb://localhost/blogsDb");

app.use(bodyParser.json());

app.use('/', defaultRouter);

app.use('/blogs', blogsRouter);
