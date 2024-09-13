//Controllers is a standard name for functions to be used

const Book = require("./model");

//This will post/add a book to the collection
const addBook = async (request, response) => {
    const book = await Book.create({
        //Request is an Object, Body is an Object, title can be all 4 mainly key or strings. but can be any.
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
    response.send({message: "success, a new book was added to the collection", addBook: book});
};

//This gets all the books from  the collection
const getAllBooks = async (request, response) => {
    const book = await Book.find({});
    response.send({message: "success", getAllBooks: book});
};

//Please Note: to use and see these stretch goals in action please use the updatebookauthor url and seperate them i.e, do title first to find the book with book info, to update input author and enter a new author name for it to change once submitted.
//Stretch goal 1 COMPLETED - To auto update once requested/clicked and displays the new update using {new: true}
//Stretch goal 2 COMPLETED - This also updates the author of the book (filtered/searched by title)
//Stretch goal 3 COMPLETED - To search a boon by title (search/filter by title) 
//This code will now also updates the author on first click/request using (new: true)
const updateBookAuthor = async (request, response) => {
    const author = await Book.findOneAndUpdate({title: request.body.title}, {author: request.body.author}, {genre: request.body.genre}, {new: true});
        response.send({message: "success, the author has updated", updateBookAuthor: author});
};

//Delete a book - This deletes the last book added to the page/collection
const deleteBookTitle = async (request, response) => {
    const book = await Book.deleteOne({
        title: request.body.title
    });
    response.send({message: "success, the last book in the collection has now been deleted", deleteBookTitle: book});
};

//Stretch goal 4 COMPLETED - To delete all books in the collection
//Delete all books - This will remove all books from the collection by using await Book.deleteMany({deleteAllBookTitle}). To target all deletion in the collection
const deleteAllBookTitle = async (request, response) => {
    const book = await Book.deleteMany({});
    response.send({message: "success, all books have been deleted from the colection", deleteAllBookTitle: book});
};


module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBookTitle: deleteBookTitle,
    updateBookAuthor: updateBookAuthor,
    deleteAllBookTitle: deleteAllBookTitle,
};