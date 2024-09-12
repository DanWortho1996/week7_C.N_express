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

const updateBookAuthor = async (request, response) => {
    const author = await Book.findOneAndUpdate({title: request.body.title}, {author: request.body.author});
        response.send({message: "author is updated", updateBookAuthor: author});
};

//Delete a book - This deletes the last book added to the page/collection
const deleteBookTitle = async (request, response) => {
    const book = await Book.deleteOne({
        title: request.body.title
    });
    response.send({message: "success", deleteBookTitle: book});
};


module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBookTitle: deleteBookTitle,
    updateBookAuthor: updateBookAuthor,
};