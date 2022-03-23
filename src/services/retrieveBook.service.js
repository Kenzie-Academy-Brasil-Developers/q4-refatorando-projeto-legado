import db from "../config/database";

const retrieveBookService = (bookId) => {
    const book = db.find(book => book.uuid === bookId);
    return book;

};
export default retrieveBookService;