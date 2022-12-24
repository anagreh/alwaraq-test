import styles from "./PageHeading.module.css";

type Props = {
  forPage: "search-result" | "book-detail";
};

const PageHeading = ({ forPage }: Props) => {
  const containerClassName =
    forPage === "search-result" ? styles.searchResult : styles.bookDetail;

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <div className={styles.headingContainer}>
        <div className={styles.horizontalLine}></div>
        <h1 className={styles.heading}>نتائج البحث</h1>
      </div>
    </div>
  );
};
export default PageHeading;
