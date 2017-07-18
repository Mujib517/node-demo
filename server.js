var request=require('request');

var result=request('https://jsonplaceholder.typicode.com/users');

result.on('data',function(data){
    console.log(data.toString());
});







// var http = require('http');  //import 

// var HandleRequests=require('./handler');

// var server = http.createServer(HandleRequests);

// server.listen(3000);

// console.log('Server is running on 3000');


// var os = require('os');

// console.log(os.cpus().length);
// console.log(os.hostname());

// var fs = require('fs');

// var data = fs.readFileSync('test.txt');

// console.log(data.toString());

// fs.writeFile('test.txt',"Append data to this file",function(){});





