const mongoose = require("mongoose");

//Book model
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author:{
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
});

//This adds it auto to mongooseDB using Capital first letter and links to url name you input yourself i.e (codenationweek7)
const Book = mongoose.model("book", bookSchema);

module.exports = Book;