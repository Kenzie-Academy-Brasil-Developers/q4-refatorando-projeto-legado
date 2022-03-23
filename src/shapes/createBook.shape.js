import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { parseBookTitle } from "../utils/book.utils";

const createBookShape = yup.object().shape({
  uuid: yup.string().default(() => uuidv4()),
  title: yup.string().required().transform((title) => parseBookTitle(title)),
  author: yup.string().required(),
  year: yup.number().positive(),
  createdOn: yup.date().default(() => new Date()),
});

export default createBookShape;