export const getBookById = async (id: string) => {
  const resp = await fetch(`http://localhost:3000/books/${id}`, {
    method: "GET",
  });

  if (resp.ok === false) throw new Error(resp.statusText);

  const book = await resp.json();

  return book;
};
