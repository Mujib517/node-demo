var middlewares = {
    isAuthenticated: function (req, res, next) {
        res.send("Unauthorized");
    }
};

module.exports=middlewares;