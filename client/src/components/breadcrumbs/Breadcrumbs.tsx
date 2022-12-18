import styles from "./Breadcrumbs.module.css";
import homeIcon from "../../assets/icons/home.svg";
import { Link } from "react-router-dom";

type Props = {};
const Breadcrumbs = (props: Props) => {
  return (
    <div className={styles.container}>
      <Link to="./" className={styles.pageTitle}>
        <img src={homeIcon} alt="homeIcon" /> الرئيسية
      </Link>

      <p className={styles.divider}>/</p>

      <Link to="./" className={`${styles.pageTitle} ${styles.currentPage}`}>
        نتائج البحث
      </Link>
    </div>
  );
};
export default Breadcrumbs;
