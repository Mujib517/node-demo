var express=require('express');
var productCtrl=require('./../productCtrl');

var productRouter=express.Router();

productRouter.get('/products',productCtrl);

productRouter.post('/products',function(req,res){
    //2xx == Success  200, 201, 204
    //3xx == Redirects 
    //4xx == Client errors  401, 404
    //5xx == Server Errors 500,
    
    res.status(201); //Created
    res.send("Data saved successfully");
});

// productRouter.put('/products',productCtrl);
// productRouter.delete('/products',productCtrl);

module.exports=productRouter;