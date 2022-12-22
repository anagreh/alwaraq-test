import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import PageHeading from "../components/pageHeading/PageHeading";
import BookDetailLayout from "../layouts/bookDetailLayout/BookDetailLayout";

function BookDetailPage() {
  return (
    <>
      <PageHeading forPage="book-detail" />
      <Breadcrumbs />
      <BookDetailLayout />
    </>
  );
}

export default BookDetailPage;
