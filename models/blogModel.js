let mongoose = require('mongoose');

let blogModel = mongoose.Schema({
    title: String,
    content: String,
    lastUpdated: Date,
    published: Boolean
});

module.exports = mongoose.model('Blog', blogModel);