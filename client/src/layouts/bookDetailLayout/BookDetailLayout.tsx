import BookDetail from "../../components/bookDetail/BookDetail";
import BooksRecommendation from "../../components/BooksRecommendation/BooksRecommendation";
import styles from "./BookDetailLayout.module.css";

type Props = {};

const BookDetailLayout = (props: Props) => {
  return (
    <div className={styles.container}>
      <section className={styles.bookDetailSection}>
        <BookDetail />
      </section>
      <aside className={styles.recommendationSection}>
        <BooksRecommendation />
      </aside>
    </div>
  );
};
export default BookDetailLayout;
