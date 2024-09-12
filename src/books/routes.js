//This allows us to create a routing system so it is not just all in one file
const {Router} = require("express");

const bookRouter = Router();

const {addBook, deleteBookTitle, getAllBooks, updateBookAuthor} = require("./controllers");

//This has been moved to controller.js
// const Book = require("./model");

//Post - This has been moved to controllers.js 
//Post route This creates a post/book. This adds a book to the database.
// bookRouter.post("/books/addbook", async (request, response) => {
//     console.log("request.body", request.body.genre)
    
//     const book = await Book.create({
//         //Request is an Object, Body is an Object, title can be all 4 mainly key or strings. but can be any.
//         title: request.body.title,
//         author: request.body.author,
//         genre: request.body.genre,
//     });
//     response.send({message: "success", book: book});
// });

//This adds a book becasue it is .post to upload a new book - COMPLETE in controllers.js
bookRouter.post("/books/addbook", addBook);

//This will get all the books in the collection - COMPLETE in controllers.js
bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.put("/books/updatebookauthor", updateBookAuthor);

//This will delete the last book title in the collection - COMPLETE in controllers.js
bookRouter.delete("/books/deletebooktitle", deleteBookTitle);

//This works by module being an object and exports is a key value in object of module to bookRouter, bookRouter = file
module.exports = bookRouter;
