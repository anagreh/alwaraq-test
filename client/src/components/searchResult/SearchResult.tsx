import styles from "./SearchResult.module.css";
import { Link } from "react-router-dom";
import { Book } from "../../schema/bookSchema";
import React from "react";
import DocTypeIcon from "../docTypeIcon/DocTypeIcon";

type Props = {
  result: Book[];
  isLoading: boolean;
};
const SearchResult = ({ result }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.searchHeader}>
        <div>
          <h2>{result.length} نتيجة</h2>
          <div>
            <input type="checkbox" name="selectAll" id="selectAll" />
            <label htmlFor="selectAll">اختيار/إزالة الكل</label>
          </div>
        </div>

        <div className={styles.optionsWrapper}>
          <button className={styles.btnSearchTask}>
            <svg
              id="Group_8870"
              data-name="Group 8870"
              xmlns="http://www.w3.org/2000/svg"
              width="25.13"
              height="30.395"
              viewBox="0 0 25.13 30.395"
            >
              <rect
                id="Rectangle_323"
                data-name="Rectangle 323"
                width="20.382"
                height="25.647"
                rx="3"
                transform="translate(0 4.748)"
                fill="#147bfc"
                opacity="0.33"
              />
              <rect
                id="Rectangle_324"
                data-name="Rectangle 324"
                width="20.382"
                height="25.647"
                rx="3"
                transform="translate(4.748)"
                fill="#147bfc"
              />
              <g
                id="Group_8869"
                data-name="Group 8869"
                transform="translate(10.191 7.618)"
              >
                <line
                  id="Line_20"
                  data-name="Line 20"
                  x2="9.7"
                  transform="translate(0 4.727)"
                  fill="none"
                  stroke="#e2efff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  id="Line_21"
                  data-name="Line 21"
                  x2="9.7"
                  fill="none"
                  stroke="#e2efff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  id="Line_22"
                  data-name="Line 22"
                  x2="4.411"
                  transform="translate(0 9.454)"
                  fill="none"
                  stroke="#e2efff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            نسخ رابط البحث
          </button>
          <button className={styles.btnSearchTask}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.555"
              height="27.789"
              viewBox="0 0 41.555 27.789"
            >
              <g
                id="Group_8874"
                data-name="Group 8874"
                transform="translate(1 1)"
              >
                <rect
                  id="Rectangle_326"
                  data-name="Rectangle 326"
                  width="25.555"
                  height="25.932"
                  rx="1.852"
                  transform="translate(14.999 0.857)"
                  fill="#36bc9c"
                />
                <g
                  id="Group_8872"
                  data-name="Group 8872"
                  transform="translate(20.131 6.219)"
                >
                  <path
                    id="Path_9501"
                    data-name="Path 9501"
                    d="M761.2,838.97l10.968,14.543a.33.33,0,0,0,.265.133h3.658a.333.333,0,0,0,.266-.532l-10.968-14.543a.331.331,0,0,0-.266-.133h-3.658A.332.332,0,0,0,761.2,838.97Z"
                    transform="translate(-761.13 -838.438)"
                    fill="#fff"
                  />
                  <path
                    id="Path_9502"
                    data-name="Path 9502"
                    d="M776.354,838.97l-10.968,14.543a.331.331,0,0,1-.266.133h-3.658a.332.332,0,0,1-.265-.532l10.968-14.543a.33.33,0,0,1,.265-.133h3.658A.333.333,0,0,1,776.354,838.97Z"
                    transform="translate(-761.13 -838.438)"
                    fill="#fff"
                  />
                </g>
                <g id="Group_8873" data-name="Group 8873" opacity="0.5">
                  <path
                    id="Path_9503"
                    data-name="Path 9503"
                    d="M744.181,840.381v3.164a5.234,5.234,0,0,0,5.235,5.234h4.847"
                    transform="translate(-744.181 -840.381)"
                    fill="none"
                    stroke="#36bc9c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M751.061,852.819l4.04-4.04-4.04-4.04"
                    transform="translate(-744.181 -840.381)"
                    fill="none"
                    stroke="#36bc9c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>
            تصدير إلى إكسل
          </button>

          <div className={styles.sortByWrapper}>
            <label htmlFor="sort-by">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.687"
                height="14.872"
                viewBox="0 0 19.687 14.872"
              >
                <g
                  id="Group_9212"
                  data-name="Group 9212"
                  transform="translate(1.414 1)"
                >
                  <g id="arrow-right" transform="translate(8.933 0)">
                    <line
                      id="Line_3"
                      data-name="Line 3"
                      y1="12.575"
                      transform="translate(3.963 0.297)"
                      fill="none"
                      stroke="#87a2be"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M251.991,489.261l-3.963-3.963-3.963,3.963"
                      transform="translate(-244.066 -485.298)"
                      fill="none"
                      stroke="#87a2be"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                  <g
                    id="arrow-right-2"
                    data-name="arrow-right"
                    transform="translate(0)"
                  >
                    <line
                      id="Line_3-2"
                      data-name="Line 3"
                      y1="12.575"
                      transform="translate(3.963)"
                      fill="none"
                      stroke="#87a2be"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_3-2"
                      data-name="Path 3"
                      d="M231.881,497.45l3.963,3.963,3.963-3.963"
                      transform="translate(-231.881 -488.541)"
                      fill="none"
                      stroke="#87a2be"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
              ترتيب حسب:
            </label>
            <select name="sort-by" id="sort-by" className={styles.sortBySelect}>
              <option value="date"> تاريخ النشر</option>
            </select>
          </div>
        </div>
      </header>

      {result.map((book) => (
        <React.Fragment key={book.id}>
          <div className={styles.bookSearchResult}>
            <div className={styles.start}>
              <div className={styles.bookCover}>
                <input
                  className={styles.selectBookCheckbox}
                  type="checkbox"
                  name="select-book-checkbox"
                  id="select-book-checkbox"
                />
                <img
                  src={import.meta.env.VITE_SERVER_URL + "/" + book.cover_url}
                  alt=""
                />
              </div>
              <button className={styles.btn}>اقرأ الوثيقة</button>
            </div>

            <div className={styles.bookInfo}>
              <h3 className={styles.bookTitle}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </h3>
              <div className={styles.metaDataWrapper}>
                <p className={styles.author}>
                  تاليف:
                  <Link to={"./"} className={styles.dataValue}>
                    {book.authors.map((author) => (
                      <span>{author.name},</span>
                    ))}
                  </Link>
                </p>
                <p className={styles.date}>
                  تاريخ النشر :
                  <Link to={"./"} className={styles.dataValue}>
                    {book.year_of_publication}
                  </Link>
                </p>
                <p className={styles.publisher}>
                  الناشر :
                  <Link to={"./"} className={styles.dataValue}>
                    {book.publisher.name}
                  </Link>
                </p>
                <p className={styles.isbn}>
                  ISBN:{" "}
                  <Link to={"./"} className={styles.dataValue}>
                    {book.id}
                  </Link>
                </p>
                <p className={styles.subjects}>
                  المواضيع الرئيسية :
                  <Link to={"./"} className={styles.dataValue}>
                    {book.subjects.map((sub) => (
                      <span>{sub.title} ,</span>
                    ))}
                  </Link>
                </p>
                <div className={styles.metaData + " " + styles.tags}>
                  الوسوم:
                  <ul className={styles.tagList}>
                    <li>
                      <Link to={"./"} className={styles.tagValue}>
                        وصف
                      </Link>
                    </li>
                    <li>
                      <Link to={"./"} className={styles.tagValue}>
                        وصف
                      </Link>
                    </li>
                    <li>
                      <Link to={"./"} className={styles.tagValue}>
                        وصف
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.end}>
              <DocTypeIcon
                docType={book.id === "000001" ? "thesis" : "books"}
              />
              <div className={styles.extra}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                >
                  <g
                    id="Group_8833"
                    data-name="Group 8833"
                    transform="translate(1 1.273)"
                  >
                    <g id="Group_111" data-name="Group 111">
                      <circle
                        id="Ellipse_28"
                        data-name="Ellipse 28"
                        cx="13.5"
                        cy="13.5"
                        r="13.5"
                        transform="translate(0 -0.273)"
                        fill="none"
                        stroke="#727c89"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                    <g
                      id="Group_112"
                      data-name="Group 112"
                      transform="translate(10.216 6.652)"
                    >
                      <ellipse
                        id="Ellipse_29"
                        data-name="Ellipse 29"
                        cx="1.65"
                        cy="1.553"
                        rx="1.65"
                        ry="1.553"
                        transform="translate(2.665)"
                        fill="#727c89"
                      />
                      <path
                        id="Path_3385"
                        data-name="Path 3385"
                        d="M992.8,717.719c-.013.283.295,1.18,1.892.686a.115.115,0,0,1,.145.142l-.093.34a.38.38,0,0,1-.229.256,8.211,8.211,0,0,1-2.623.578,1.757,1.757,0,0,1-1.942-1.551c-.006-.055-.01-.11-.011-.165.2-1.776,1.108-4.757,1.119-5.313.006-.283-.294-1.179-1.891-.686a.115.115,0,0,1-.144-.078.11.11,0,0,1,0-.065l.093-.339a.38.38,0,0,1,.229-.256,8.207,8.207,0,0,1,2.623-.578,1.763,1.763,0,0,1,1.943,1.561c.005.051.009.1.01.155C993.922,714.138,992.857,716.538,992.8,717.719Z"
                        transform="translate(-989.021 -706.092)"
                        fill="#727c89"
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.755"
                  height="25.007"
                  viewBox="0 0 27.755 25.007"
                >
                  <g
                    id="Group_8837"
                    data-name="Group 8837"
                    transform="translate(1 1)"
                  >
                    <rect
                      id="Rectangle_308"
                      data-name="Rectangle 308"
                      width="20.507"
                      height="18.288"
                      rx="2"
                      transform="translate(5.248 0)"
                      fill="none"
                      stroke="#727c89"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_9498"
                      data-name="Path 9498"
                      d="M905.659,829.358v14.807a3.149,3.149,0,0,0,3.149,3.15h17.475"
                      transform="translate(-905.659 -824.307)"
                      fill="none"
                      stroke="#727c89"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <g
                      id="Group_8836"
                      data-name="Group 8836"
                      transform="translate(9.881 3.522)"
                    >
                      <line
                        id="Line_16"
                        data-name="Line 16"
                        y2="11.243"
                        transform="translate(5.621 0)"
                        fill="none"
                        stroke="#727c89"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_17"
                        data-name="Line 17"
                        x1="11.243"
                        transform="translate(0 5.621)"
                        fill="none"
                        stroke="#727c89"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.755"
                  height="27.97"
                  viewBox="0 0 27.755 27.97"
                >
                  <g
                    id="Group_8834"
                    data-name="Group 8834"
                    transform="translate(1 1)"
                  >
                    <g id="arrow-right" transform="translate(8.246 0)">
                      <line
                        id="Line_3"
                        data-name="Line 3"
                        y1="13.43"
                        transform="translate(4.632)"
                        fill="none"
                        stroke="#727c89"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M1052.97,712.107l4.632,5.489,4.632-5.489Z"
                        transform="translate(-1052.97 -699.267)"
                        fill="#727c89"
                        stroke="#727c89"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                    <path
                      id="Path_9497"
                      data-name="Path 9497"
                      d="M1039.233,717.879v3.781a4.875,4.875,0,0,0,4.875,4.875h16a4.875,4.875,0,0,0,4.875-4.875v-3.781"
                      transform="translate(-1039.233 -700.566)"
                      fill="none"
                      stroke="#727c89"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.701"
                  height="28.664"
                  viewBox="0 0 28.701 28.664"
                >
                  <g
                    id="Group_8832"
                    data-name="Group 8832"
                    transform="translate(1 1.026)"
                  >
                    <path
                      id="Path_9495"
                      data-name="Path 9495"
                      d="M937.98,693.32l-7.484-7.772a.863.863,0,0,0-1.485.6v3.742h-.288A11.239,11.239,0,0,0,917.5,701.115v1.727a.851.851,0,0,0,.672.825.832.832,0,0,0,.19.023.891.891,0,0,0,.789-.49,9.445,9.445,0,0,1,8.495-5.251h1.368v3.742a.863.863,0,0,0,1.485.6l7.484-7.772A.863.863,0,0,0,937.98,693.32Z"
                      transform="translate(-911.622 -685.283)"
                      fill="none"
                      stroke="#727c89"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_9496"
                      data-name="Path 9496"
                      d="M910.642,696.657H907.96a2.3,2.3,0,0,0-2.3,2.3v16.39a2.3,2.3,0,0,0,2.3,2.3h21a2.3,2.3,0,0,0,2.3-2.3v-7.2"
                      transform="translate(-905.659 -691.012)"
                      fill="none"
                      stroke="#727c89"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          ;
        </React.Fragment>
      ))}
    </div>
  );
};
export default SearchResult;
