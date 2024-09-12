require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const Book = require("./books/model");

// console.log(process.env.MY_WORD);

const app = express();

app.use(express.json());

connection();

//DB connection (Data Base) - This has been moved to a new js file in the same folder as the server file too (src folder)
// const connection = async () => {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("MongoDB is working");
// };

// connection();

//Book model - This has been moved to a new folder (books) in the model.js file
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     author:{
//         type: String,
//         required: true,
//     },
//     genre: {
//         type: String,
//     },
// });

//This adds it auto to mongooseDB using Capital first letter and links to url name you input yourself i.e (codenationweek7)
// const Book = mongoose.model("book", bookSchema);

// const fakeDB = [];

//This gets all books from the database
app.get("/books/getallbooks", async (request, response) => {
    const book = await Book.find({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    response.send({message: "success", getallbooks: book});
});

//This is a root "/" to pull/target the next page or section in it's arrays
app.get("/books/onebook", (request, response) => {
    response.send({message: "success"});
});

//Routes

//Post route This creates a post/book. This adds a book to the database.
app.post("/books/addbook", async (request, response) => {
    console.log("request.body", request.body.genre)
    
    const book = await Book.create({
        //Request is an Object, Body is an Object, title can be all 4 mainly key or strings. but can be any.
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    response.send({message: "success", book: book});
});

//Deletes a single book from the database
//Delete a book, Delete by title
app.delete("/books/deletebooktitle", async (request, response) => {
    const book = await Book.deleteOne({
        title: request.body.title
    });
    response.send({message: "success", deletebooktitle: book});
});

//This will show that server 5000 is available and currently in use when running.
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});


//Activity - Update a book author
//Updates a book author (filter by title)
app.put("/books/updatebookauthor", async (request, response) => {

    //Put code here
    const author = await Book.findOneAndUpdate({
        title: request.body.title}, 
        {author: request.body.author});
        response.send({message: "author is updated", updatebookauthor: author});

    //We will need

    //1. Filter object (filter by title)
    //2. Update object (author)
});


