module.exports = function (req, res) {
   
    var products = [{
        id: 1,
        brand: "Apple",
        model: "IPhone 7",
        price: 750,
        available: true
    },
    {
        id: 2,
        brand: "Apple",
        model: "IPhone 6",
        price: 550,
        available: true
    },
    {
        id: 3,
        brand: "Apple",
        model: "IPhone 5S",
        price: 350,
        available: false
    }];

    res.status(200); //Ok
    res.json(products);

};