import db from "../config/database";
const checkBookExistenceMiddleware = (req, res, next) => {
    const { bookId } = req.params;

    const book = db.find(book => book.uuid === bookId);

    if (!book) {
        return res.json({message: "Book not found."});
    }
    return next();
}
export default checkBookExistenceMiddleware;