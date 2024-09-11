require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// console.log(process.env.MY_WORD);

const app = express();

app.use(express.json());

//DB connection
const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is working");
};

connection();

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

// const fakeDB = [];

//Get all books
app.get("/books/getallbooks", (request, response) => {
    response.send({message: "success"});
});


app.put("/books/updatebookauthor",
    //Put code here

    //We will need

    //1. Filter object (filter by title)
    //2. Update object (author)
)

//This is a root "/" to pull/target the next page or section it in arrays
app.get("/books/onebook", (request, response) => {
    response.send({message: "success"});
});

//Routes

//Post route
app.post("/books/addbook", async (request, response) => {
    console.log("request.body", request.body.genre)
    
    const book = await Book.create({
        //Request is an Obejct, Body is an Object, title can be all 4 mainly key or strings. but can be any.
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    response.send({message: "success", book: book});
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
