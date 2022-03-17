import { parse_book_title } from "../utils/book.utils";
import { book_already_exists, out_of_index } from "../services/book.service";
import db from "../config/database";

export const create = (req, res) => {
  const book = req.body;
  book.title = parse_book_title(req.body.title);

  if (book_already_exists(book, db)) {
    return res.sendStatus(422);
  }

  db.push(book);
  res.status(201).json(book);
};

export const list = (req, res) => {
  return res.json(db);
};

export const retrieve = (req, res) => {
  const { book_id } = req.params;

  const book_index = db.map((item) => item.uuid).indexOf(book_id);

  if (out_of_index(book_index, db)) {
    return res.sendStatus(404);
  }

  res.json(db[book_index]);
};

export const update = (req, res) => {
  const { book_id } = req.params;

  const book_index = db.map((item) => item.uuid).indexOf(book_id);

  if (out_of_index(book_index, db)) {
    return res.sendStatus(404);
  }

  const book = req.body;
  book.title = parse_book_title(req.body.title);

  db.splice(book_index, 1, book);

  res.json(db[book_index]);
};

export const destroy = (req, res) => {
  const { book_id } = req.params;

  const book_index = db.map((item) => item.uuid).indexOf(book_id);

  if (out_of_index(book_index, db)) {
    return res.sendStatus(404);
  }

  db.splice(book_index, 1);
  res.sendStatus(204);
};
