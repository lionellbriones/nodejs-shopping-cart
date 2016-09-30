var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://dummyimage.com/315x400',
        title: 'Gothic',
        description: 'Awesome Game!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://dummyimage.com/315x400',
        title: 'Gothic 2',
        description: 'Awesome Game!!',
        price: 102
    }),
    new Product({
        imagePath: 'https://dummyimage.com/315x400',
        title: 'Gothic 3',
        description: 'Awesome Game!!',
        price: 103
    }),
    new Product({
        imagePath: 'https://dummyimage.com/315x400',
        title: 'Gothic 4',
        description: 'Awesome Game!!',
        price: 104
    }),
    new Product({
        imagePath: 'https://dummyimage.com/315x400',
        title: 'Gothic 5',
        description: 'Awesome Game!!',
        price: 105
    })
];

var done = 0;
for( var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
