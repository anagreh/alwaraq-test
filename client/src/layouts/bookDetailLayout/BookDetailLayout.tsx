import BookDetail from "../../components/bookDetail/BookDetail";
import BooksRecommendation from "../../components/BooksRecommendation/BooksRecommendation";
import { Book } from "../../schema/bookSchema";
import styles from "./BookDetailLayout.module.css";

type Props = {
  book: Book;
};

const BookDetailLayout = ({ book }: Props) => {
  return (
    <div className={styles.container}>
      <section className={styles.bookDetailSection}>
        <BookDetail book={book} />
      </section>
      <aside className={styles.recommendationSection}>
        <BooksRecommendation />
      </aside>
    </div>
  );
};
export default BookDetailLayout;
