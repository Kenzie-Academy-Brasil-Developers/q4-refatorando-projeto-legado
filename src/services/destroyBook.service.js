import db from "../config/database";

const destroyBookService = (bookId) => {  
    const bookIndex = db.findIndex(book => book.uuid === bookId);

    db.splice(bookIndex, 1);
  
};
export default destroyBookService;