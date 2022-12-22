import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import PageHeading from "../components/pageHeading/PageHeading";
import BookDetailLayout from "../layouts/bookDetailLayout/BookDetailLayout";

function BookDetailPage() {
  const param = useParams();

  return (
    <>
      <PageHeading forPage="book-detail" />
      <Breadcrumbs for="bookDetail" bookId={param["bookId"] ?? ""} />
      <BookDetailLayout />
    </>
  );
}

export default BookDetailPage;
