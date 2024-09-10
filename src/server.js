const express = require("express");

const app = express();

app.use(express.json());

const fakeDB = [];

//Get all books
app.get("/books/allbooks", (request, response) => {
    response.send({message: "success", books: fakeDB});
});

//This is a root "/" to pull/target the next page or section it in arrays
app.get("/books", (request, response) => {
    
     const book = {
        title: "book 1",
        author: "suzie",
        genre: "comedy",
     }
    response.send({message: "success", book: book});
});

//Post route
app.post("/books", (request, response) => {
    fakeDB.push(request.body);
    response.send({message: `${request.body.title} has been added.`})
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
