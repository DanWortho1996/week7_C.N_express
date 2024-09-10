const express = require("express");

const app = express();

app.use(express.json());

// const fakeDB = [];

//Get all books
app.get("/books/allbooks", (request, response) => {
    response.send({message: "success"});
});

//This is a root "/" to pull/target the next page or section it in arrays
app.get("/books", (request, response) => {
    response.send({message: "success"});
});

//Post route
app.post("/books", (request, response) => {
    response.send({message: "success"})
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
