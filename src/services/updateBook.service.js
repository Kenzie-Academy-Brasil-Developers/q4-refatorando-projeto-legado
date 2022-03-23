import db from "../config/database";

const updateBookService = (body, bookId) => {  
    const bookIndex = db.findIndex(book => book.uuid === bookId);

    const updatedInfoBook = body;

    updatedInfoBook.createdOn = db[bookIndex].createdOn;
    updatedInfoBook.uuid = db[bookIndex].uuid;

    db.splice(bookIndex, 1, updatedInfoBook);
  
    return updatedInfoBook;
};
export default updateBookService;