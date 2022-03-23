import { Router } from "express";
import createBookShape  from "../shapes/createBook.shape";
import validateShapesMiddleware from "../middlewares/validateShapes.middleware";

import createBookController from "../controllers/createBook.controller";
import listBooksController from "../controllers/listBooks.controller";
import retrieveBookController from "../controllers/retrieveBook.controller";
import updateBookController from "../controllers/updateBook.controller";
import checkBookExistenceMiddleware from "../middlewares/checkBookExistence.middleware";
import updateBookShape from "../shapes/updateBook.shape";
import destroyBookController from "../controllers/destroyBook.controller";
import bookAlreadyExistsMiddleware from "../middlewares/bookAlreadyExists.middleware";

const route = Router();

const booksRoutes = (app) => {
  route.post("", validateShapesMiddleware(createBookShape), bookAlreadyExistsMiddleware, createBookController);
  route.get("", listBooksController);
  route.get("/:bookId", checkBookExistenceMiddleware, retrieveBookController);
  route.put("/:bookId", validateShapesMiddleware(updateBookShape), checkBookExistenceMiddleware, updateBookController);
  route.delete("/:bookId", checkBookExistenceMiddleware, destroyBookController);

  app.use("", route);
};
export default booksRoutes;