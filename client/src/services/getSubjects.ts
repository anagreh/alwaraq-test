export const getSubjects = async () => {
  const resp = await fetch(`http://localhost:3000/subjects`, {
    method: "GET",
  });

  if (resp.ok === false) throw new Error(resp.statusText);

  const book = await resp.json();

  return book;
};
