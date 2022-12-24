import styles from "./SearchResultLayout.module.css";

type Props = {
  filterOptionsSection: React.ReactNode;
  resultSection: React.ReactNode;
};
const SearchResultLayout = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterOptionSection}>
        <h2>تصفية النائج</h2>
        {props.filterOptionsSection}
      </div>
      <div className={styles.resultSection}>{props.resultSection}</div>
    </div>
  );
};
export default SearchResultLayout;
