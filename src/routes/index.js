import { booksRoutes } from "./books.routes";
import express from "express";

export const routes = (app) => {
  app.use(express.json());
  booksRoutes(app);
};
