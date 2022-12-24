export type Book = {
  id: string;
  title: string;
  year_of_publication: string;
  publisherId: string;
  cover_url: string;
  pdf_url: string;
  authors: Author[];
  publisher: Publisher;
  subjects: Subject[];
};

type Publisher = {
  id: string;
  name: string;
};

type Subject = {
  id: string;
  title: string;
};

type Author = { id: string; name: string };
