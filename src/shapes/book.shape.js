import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

export const book_schema = yup.object().shape({
  uuid: yup.string().default(function () {
    return uuidv4();
  }),
  title: yup.string().required(),
  author: yup.string().required(),
  year: yup.number().positive(),

  createdOn: yup.date().default(function () {
    return new Date();
  }),
});
