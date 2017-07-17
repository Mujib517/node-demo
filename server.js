var http = require('http');  //import 

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

var server = http.createServer(HandleRequests);

server.listen(3000);

console.log('Server is running on 3000');


