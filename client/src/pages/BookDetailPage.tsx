import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import PageHeading from "../components/pageHeading/PageHeading";
import BookDetailLayout from "../layouts/bookDetailLayout/BookDetailLayout";
import { useQuery } from "react-query";
import { getBookById } from "../services/getBookById";
import { Book } from "../schema/bookSchema";
import ReactLoading from "react-loading";

function BookDetailPage() {
  const param = useParams();

  const bookId = param["bookId"] ?? "";
  const { data, isLoading } = useQuery<Book>(["books", bookId], () =>
    getBookById(bookId),
  );

  return (
    <>
      <PageHeading forPage="book-detail" />
      <Breadcrumbs for="bookDetail" bookTitle={data?.title || bookId} />
      {isLoading ? (
        <ReactLoading type="balls" />
      ) : (
        data && <BookDetailLayout book={data} />
      )}
    </>
  );
}

export default BookDetailPage;
