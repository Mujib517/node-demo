let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cluster = require('cluster');

let jwt = require('jsonwebtoken');
let cors = require('cors');
let os = require('os');

let blogsRouter = require('./routers/blogsRouter');
let userRouter = require('./routers/userRouter');
let defaultRouter = require('./routers/defaultRouter');
let commentRouter = require('./routers/commentRouter');

let isAuthenticated = require('./middlewares/auth');


// if (cluster.isMaster) {
//     let cores = os.cpus().length;

//     for (var i = 0; i < cores; i++) {
//         cluster.fork();
//     }
// }
// else {
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("server running on " + port);
});
// }

// cluster.on('exit', function (worker) {
//     console.log('crashed ' + worked.id);
//     cluster.fork(); //continues avialablity
// });


//mongoose.connect("mongodb://localhost/blogsDb", { useMongoClient: true });
mongoose.connect("mongodb://admin:admin@ds125053.mlab.com:25053/blgsdb", { useMongoClient: true });

//allow reqs from diff origins
app.use(cors());

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/user', userRouter);

//check for authentication token
//app.use(isAuthenticated);

app.use('/blogs', blogsRouter);

app.use('/comments', commentRouter);

//not found page route
app.use('', function (req, res) {
    res.status(404);
    res.send("Not found");
});


//1. Uniform Interface
//GET  read
//POST add
//PUT updating data
//Delete deleting

//2. Stateless
// no sessions

//3.Cacheable

//4. layered system

//6. code on demand 

