let express = require('express');

let defaultRouter = express.Router();


defaultRouter.get('/', function (req, res) {
    res.send("Blogs api");
});

defaultRouter.get('/health', function (req, res) {
    res.send("Up");
});

module.exports = defaultRouter;