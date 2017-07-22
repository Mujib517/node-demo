var Blog = require('./../models/blogModel');
let moment = require('moment');

let blogsCtrl = function () {

    let get = function (req, res) {
        // Blog.find(function (err, blogs) {
        //     if (!err) {
        //         res.status(200);
        //         res.json(blogs);
        //     }
        //     else {
        //         res.status(500);
        //         res.send("Internal Server Error");
        //     }
        // });

        let pageIndex = req.params.pageIndex | 0;
        let pageSize = req.params.pageSize | 2;

        // if (!pageIndex) pageIndex = 0;  null, undefined, false , "",0
        // if (!pageSize) pageSize = 2;



        let count = 0;

        var queryCount = Blog.count().exec()
            .then(function (cnt) {
                count = cnt;
            });

        var query = Blog
            .find()
            .sort("lastUpdated")
            .limit(pageSize)
            .skip(pageIndex * pageSize);  //Deferred execution

        query.exec()
            .then(function (blogs) {
                res.status(200);
                let response = {
                    data: blogs,
                    metadata: {
                        count: count,
                        pages: Math.ceil(count / pageSize)
                    }
                };
                res.json(response);
            })
            .catch(function (err) {
                res.status(500);
                res.send("Internal Server Error");
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
                res.send(err);
            }
        });
    };

    let getById = function (req, res) {
        let id = req.params.id;

        Blog.findById(id, function (err, blog) {
            if (blog) {
                blog.updated = moment(blog.lastUpdated).format("MMM dd yyyy");
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