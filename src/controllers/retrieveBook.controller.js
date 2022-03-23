import retrieveBookService from "../services/retrieveBook.service";

const retrieveBookController = (req, res) => {
    const { bookId } = req.params;
    const book = retrieveBookService(bookId);
    res.json(book);
};
export default retrieveBookController;