import { useState } from "react";
import styles from "./SearchForm.module.css";

type Props = {
  handleOnSubmit: (searchInputValue: string) => void;
};
const SearchForm = ({ handleOnSubmit }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleOnSubmit(searchInput);
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <select id="search-select" className={styles.selectInput}>
          <option value="تصفح المكتبة الرقمية">تصفح المكتبة الرقمية</option>
        </select>
        <div className={styles.inputWrapper}>
          <input
            className={styles.textInput}
            type="text"
            name="search"
            id="search"
            placeholder="نص البحث"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="29.485"
            height="29.486"
            viewBox="0 0 29.485 29.486"
          >
            <g
              id="Group_9225"
              data-name="Group 9225"
              transform="translate(2 2)"
            >
              <circle
                id="Ellipse_86"
                data-name="Ellipse 86"
                cx="10.814"
                cy="10.814"
                r="10.814"
                fill="none"
                stroke="#147bfc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <line
                id="Line_5"
                data-name="Line 5"
                x2="5.371"
                y2="5.371"
                transform="translate(19.286 19.286)"
                fill="none"
                stroke="#147bfc"
                stroke-linecap="round"
                stroke-width="4"
              />
            </g>
          </svg>
        </div>

        <button className={styles.submitInput} type="submit">
          بحث متقدم
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
