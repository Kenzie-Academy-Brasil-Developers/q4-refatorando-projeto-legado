import db from "../config/database";
const bookAlreadyExistsMiddleware = (req, res, next) => {
    const { title, author } = req.body;

    for (let i in db) {
        if ((db[i].title === title) && (db[i].author === author)) {
            return res.status(422).json({ message: "Book already registered." });

        }
    }
    return next();
}
export default bookAlreadyExistsMiddleware;