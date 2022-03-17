export const parse_book_title = (title) => {
  const titleArr = title.split(" ");
  let new_str = "";
  titleArr.forEach((element) => {
    element = element.toLowerCase();
    element = element.trim().replace(/^\w/, (c) => c.toUpperCase());
    new_str += element + " ";
  });
  return new_str.trim();
};
