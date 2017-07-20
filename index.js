//SRP 

const express = require('express');
const mongoose=require('mongoose');  //ODM 

let productCtrl = require('./productCtrl');
const middlewares=require('./middlewares');
const productRouter=require('./routers/productRouter');

let app = express();

app.listen(3000, function () {
    console.log("Server running on 3000");
});

mongoose.connect("mongodb://localhost:moviesDb",function(){
    console.log('Connected');
});


//public routes
app.get('/', function (req, res) {
    res.send("Hello NodeJs");
});

//app.use(middlewares.isAuthenticated); //middleware
//private routes


app.use('/',productRouter);
















// function add(a,b){
//     a++;
//     b++;
//     return a+b;
// }

// function addAsync(a,b,done){
//     setTimeout(function(){
//         var result= a+b;
//         done(result);
//     },2000);  //IO operation
// }


// //console.log(add(2,3));
// var callback=function(result){
//     console.log(result);
// };

// addAsync(2,3,callback);




