import { Router } from "express";
import { book_schema } from "../shapes/book.shape";
import { validate } from "../middlewares/validate.middleware";
import {
  create,
  list,
  retrieve,
  update,
  destroy,
} from "../controllers/books.controller";

const route = Router();

export const booksRoutes = (app) => {
  route.post("", validate(book_schema), create);
  route.get("", list);
  route.get("/:book_id", retrieve);
  route.put("/:book_id", validate(book_schema), update);
  route.delete("/:book_id", destroy);

  app.use("/books", route);
};
