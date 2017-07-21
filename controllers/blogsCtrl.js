var Blog = require('./../models/blogModel');

let blogsCtrl = function () {

    let get = function (req, res) {
        Blog.find(function (err, blogs) {
            if (!err) {
                res.status(200);
                res.json(blogs);
            }
            else {
                res.status(500);
                res.send("Internal Server Error");
            }
        });
    };

    let post = function (req, res) {

        let blog = new Blog(req.body);

        blog.save(function (err, result) {
            if (!err) {
                res.status(201);
                res.send(result);
            }
            else {
                console.log(err); //logged 
                res.status(500);
                res.send("Internal Server Error");
            }
        });
    };

    let getById = function (req, res) {
        let id = req.params.id;

        Blog.findById(id, function (err, blog) {
            if (blog) {
                res.status(200);
                res.json(blog);
            }
            else {
                res.status(404);
                res.send("Not found");
            }
        });
    };

    let remove = function (req, res) {
        Blog.findByIdAndRemove(req.params.id, function (err) {
            if (!err) {
                res.status(204);
                res.send("Deleted");
            }
            else {
                res.status(500);
                res.send("Failed to delete");
            }
        });
    };

    return {
        get: get,
        post: post,
        getById: getById,
        remove: remove
    }
};

module.exports = blogsCtrl();


// var obj={};

// var obj=function MyObj(){this.id=1};

// var obj=Object.create()