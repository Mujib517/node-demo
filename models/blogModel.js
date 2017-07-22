let mongoose = require('mongoose');

let blogModel = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    lastUpdated: { type: String, required: true,default:Date.now },
    published: Boolean
});

module.exports = mongoose.model('Blog', blogModel);