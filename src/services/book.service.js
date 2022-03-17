export const book_already_exists = (book, db) => {
  const same_book = (element) =>
    element.title === book.title && element.author === book.author;
  return db.some(same_book);
};

export const out_of_index = (index, db) => {
  return index > db.length;
};
