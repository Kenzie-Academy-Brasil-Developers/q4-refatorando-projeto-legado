import destroyBookService from "../services/destroyBook.service";
import updateBookService from "../services/updateBook.service";

const destroyBookController = (req, res) => {
    destroyBookService(req.params.bookId);
    res.status(204).json('');
};

export default destroyBookController;