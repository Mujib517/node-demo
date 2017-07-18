function HandleRequests(req, res) {

    switch (req.url) {
        default:
        case '/':
            res.write("hello nodejs");
            res.end();
            break;
        case '/products':
            res.write("Showing products");
            res.end();
            break;
        case '/books':
            res.write("Showing books");
            res.end();
            break;
    }
}

module.exports=HandleRequests;