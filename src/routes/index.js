import booksRoutes from "./books.routes";
import express from "express";

const routes = (app) => {
  app.use(express.json());
  booksRoutes(app);
};
export default routes;