import prisma from '../db/client';
import { Prisma } from '@prisma/client';

class BooksService {
  findAll = async (title?: string, subjectsId?: string | string[]) => {
    const filter: Prisma.BookWhereInput = {};

    if (title) {
      filter.title = { contains: title };
    }

    if (subjectsId) {
      // const notSelectedSubject = await prisma.subject.findMany({
      //   where: { NOT: { id: { in: subjectsId } } },
      // });

      // const notSelectedSubjectId = notSelectedSubject.map((sub) => sub.id);

      filter.subjects = { some: { id: { in: subjectsId } } };
    }
    const books = await prisma.book.findMany({
      where: filter,
      include: { authors: true, publisher: true, subjects: true },
    });

    // const filteredBooks = books.filter((book) => {
    //   const bookSubjectsId = book.subjects.map((sub) => sub.id);

    //   if (Array.isArray(subjectsId)) {
    //     const diff = subjectsId.find(
    //       (subId) => !bookSubjectsId?.includes(subId),
    //     );
    //     return diff == undefined;
    //   }

    //   return true;
    // });

    return books;
  };

  findOne = async (id: string) => {
    return prisma.book.findUnique({
      where: { id },
      include: { authors: true, publisher: true, subjects: true },
    });
  };

  create = async (createUserDto: Prisma.BookCreateArgs) => {
    const book = prisma.book.create(createUserDto);
    return book;
  };

  update = async (id: string, updateUserDto: Prisma.BookUpdateArgs) => {
    const book = prisma.book.update(updateUserDto);

    return book;
  };

  remove = (id: string) => {
    return `this will remove ${id} user`;
  };
}

export const booksService = new BooksService();
