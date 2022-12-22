import styles from "./BooksRecommendation.module.css";

type Props = {};
const BooksRecommendation = (props: Props) => {
  return (
    <>
      <h2 className={styles.sectionHeading}>مصنفات ذات صلة بالموضوع</h2>
      <ul className={styles.recList}>
        <li>
          <img src="" alt="" className={styles.bookCover} />
          <p className={styles.bookTitle}>عـمـارة الـكــون الـوثّـاب</p>
          <p className={styles.author}>
            <span> المؤلف:</span> <span>محمد خليل</span>
          </p>
        </li>
        <li>
          <img src="" alt="" className={styles.bookCover} />
          <p className={styles.bookTitle}>عـمـارة الـكــون الـوثّـاب</p>
          <p className={styles.author}>
            <span> المؤلف:</span> <span>محمد خليل</span>
          </p>
        </li>
      </ul>
    </>
  );
};
export default BooksRecommendation;
