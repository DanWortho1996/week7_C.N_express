//Controllers is a standard name for functions to be used

const Book = require("./model");

//This will post/add a book to the collection
const addBook = async (request, response) => {
    console.log("request.body", request.body.genre)
    
    const book = await Book.create({
        //Request is an Object, Body is an Object, title can be all 4 mainly key or strings. but can be any.
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    response.send({message: "success", addBook: book});
};

//This gets all the books from  the collection
const getAllBooks = async (request, response) => {
    const book = await Book.find({});
    response.send({message: "success", getAllBooks: book});
};

//Stretch goal COMPLETED to auto update once requested/clicked and displays the new update using {new: true}
//Stretch goal COMPLETED - This updates the author of the book (filtered/searched by title)
//This code will now also updates the author on first click/request using (new: true)
const updateBookAuthor = async (request, response) => {
    const author = await Book.findOneAndUpdate({title: request.body.title}, {author: request.body.author}, {genre: request.body.genre}, {new: true});
        response.send({message: "author is updated", updateBookAuthor: author});
};

//Delete a book - This deletes the last book added to the page/collection
const deleteBookTitle = async (request, response) => {
    const book = await Book.deleteOne({
        title: request.body.title
    });
    response.send({message: "success, the last book in the collection has now been deleted", deleteBookTitle: book});
};

//Stretch goal - COMPLETED - To delete all books in the collection
//Delete all books - This will remove all books from the collection.
const deleteAllBookTitle = async (request, response) => {
    const book = await Book.deleteMany({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    response.send({message: "success, all books have been deleted", deleteAllBookTitle: book});
};


module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBookTitle: deleteBookTitle,
    updateBookAuthor: updateBookAuthor,
    deleteAllBookTitle: deleteAllBookTitle,
};