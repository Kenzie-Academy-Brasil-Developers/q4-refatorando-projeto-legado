import * as yup from "yup";
import { parseBookTitle } from "../utils/book.utils";

const updateBookShape = yup.object().shape({
  title: yup.string().required().transform((title) => parseBookTitle(title)),
  author: yup.string().required(),
  year: yup.number().positive(),
});

export default updateBookShape;