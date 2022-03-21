import express from 'express';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';


const PORT = 3000;
const app = express();
app.use(express.json());

const DB = [];

const createBookShape = yup.object().shape({
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
const updateBookShape = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  year: yup.number().positive(),
});

const validate = (schema) => (req, res, next) => {
  schema
    .validate(req.body, {})
    .then(function (value) {
      req.body = value;
      return next();
    })
    .catch(function (err) {
      return res.status(422).json({ message: err.message });
    });
};

app.post('', validate(createBookShape),(req, res) => {
  const book = req.body;
  book.title = req.body.title;

  const titleArr = book.title.split(" ");
  let new_str = "";

  titleArr.forEach((element) => {
    element = element.toLowerCase();
    element = element.trim().replace(/^\w/, (c) => c.toUpperCase());
    new_str += element + " ";
  });
  book.title = new_str.trim();

  const bookAlreadyExists = DB.some(element => element.title === book.title && element.author === book.author);

  if (bookAlreadyExists) {
    return res.status(422).json();
  }

  DB.push(book);
  return res.status(201).json(book);
});

app.get('', (req, res) => {
  return res.json(DB);
});

app.get('/:bookId', (req, res) => {
  const { bookId } = req.params;

  const bookIndex = DB.map((item) => item.uuid).indexOf(bookId);

  if (!!bookIndex) {
    return res.status(404).json();
  }

  return res.json(DB[bookIndex]);
});

app.put('/:bookId', validate(updateBookShape), (req, res) => {
  const { bookId } = req.params;

  const bookIndex = DB.map((item) => item.uuid).indexOf(bookId);

  if (!!bookIndex) {
    return res.status(404).json();
  }
  
  const book = req.body;

  book.createdOn = DB[bookIndex].createdOn;
  book.uuid = DB[bookIndex].uuid;

  book.title = req.body.title;
  const titleArr = book.title.split(" ");
  let new_str = "";

  titleArr.forEach((element) => {
    element = element.toLowerCase();
    element = element.trim().replace(/^\w/, (c) => c.toUpperCase());
    new_str += element + " ";
  });
  book.title = new_str.trim();
  
  DB.splice(bookIndex, 1, book);

  return res.json(DB[bookIndex]);
});

app.delete('/:bookId', (req, res) => {
  const { bookId } = req.params;

  const bookIndex = DB.map((item) => item.uuid).indexOf(bookId);

  if (!!bookIndex) {
    return res.status(404).json();
  }

  DB.splice(bookIndex, 1);
  return res.status(204).json();
});

app.listen(PORT, () => console.log(`App is running at ${PORT}`));

export default app;