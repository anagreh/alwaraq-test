import objectToParams from "../utils/objectToParams";

interface GetBooksParams {
  search?: string;
  subjects?: string[] | string;
}

export const getBooks = async (searchParams?: GetBooksParams) => {
  let params = "";
  if (searchParams) {
    params = objectToParams({ ...searchParams });
  }

  const resp = await fetch("http://localhost:3000/books?" + params, {
    method: "GET",
  });

  if (resp.ok === false) throw new Error(resp.statusText);

  const books = await resp.json();

  return books;
};
