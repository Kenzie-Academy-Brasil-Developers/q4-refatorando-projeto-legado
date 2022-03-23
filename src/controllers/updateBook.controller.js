import updateBookService from "../services/updateBook.service";

const updateBookController = (req, res) => {
    const updatedBook = updateBookService(req.body, req.params.bookId);
    res.json(updatedBook);
};

export default updateBookController;