import db from "../config/database";

const listBooksController = (req, res) => res.json(db);

export default listBooksController;