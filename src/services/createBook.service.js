import db from "../config/database";

const createBookService = (body) => {
    const book = {
        ...body
    };
    db.push(book);
    return book;
};

export default createBookService;