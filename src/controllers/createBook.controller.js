import createBookService from "../services/createBook.service";

const createBookController = (req, res) => {
    const book = createBookService(req.body);
  
    res.status(201).json(book);

  };

export default createBookController;