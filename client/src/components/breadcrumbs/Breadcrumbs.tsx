import styles from "./Breadcrumbs.module.css";
import homeIcon from "../../assets/icons/home.svg";
import { Link, useLocation } from "react-router-dom";

type Props =
  | {
      for: "bookDetail";
      bookId: string;
    }
  | {
      for: "searchResult";
    };

const Breadcrumbs = (props: Props) => {
  if (props.for === "searchResult")
    return (
      <nav className={styles.container}>
        <Link to="/" className={styles.pageTitle}>
          <img src={homeIcon} alt="homeIcon" /> الرئيسية
        </Link>

        <span className={styles.divider}>/</span>

        <Link to="./" className={`${styles.pageTitle} ${styles.currentPage}`}>
          نتائج البحث
        </Link>
      </nav>
    );
  if (props.for === "bookDetail")
    return (
      <nav className={styles.container}>
        <Link to="/" className={styles.pageTitle}>
          <img src={homeIcon} alt="homeIcon" /> الرئيسية
        </Link>

        <span className={styles.divider}>/</span>

        <Link to="./" className={`${styles.pageTitle} ${styles.currentPage}`}>
          كتب
        </Link>

        <span className={styles.divider}>/</span>

        <Link to="./" className={`${styles.pageTitle} ${styles.currentPage}`}>
          {props.bookId}
        </Link>
      </nav>
    );

  return <></>;
};
export default Breadcrumbs;
