import styles from "./PageHeading.module.css";

type Props = {};
const PageHeading = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.horizontalLine}></div>
        <h1 className={styles.heading}>نتائج البحث</h1>
      </div>
    </div>
  );
};
export default PageHeading;
