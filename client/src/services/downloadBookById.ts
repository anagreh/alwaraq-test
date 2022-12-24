export const downloadBookById = async (id: string) => {
  const resp = await fetch(`http://localhost:3000/pdf/${id}.pdf`, {
    method: "GET",
    headers: { "x-trusted": "1" },
  });

  if (resp.ok === false) throw new Error(resp.statusText);
};
