import { Link } from "react-router-dom";
import { Book } from "../../schema/bookSchema";
import DocTypeIcon from "../docTypeIcon/DocTypeIcon";
import styles from "./BookDetail.module.css";

type Props = {
  book: Book;
};
function BookDetail({ book }: Props) {
  return (
    <div className={styles.container}>
      <img
        src={import.meta.env.VITE_SERVER_URL + "/" + book.cover_url}
        className={styles.bookCover}
      />
      <div className={styles.bookInfo}>
        <div className={styles.top}>
          <DocTypeIcon docType="books" />
          <button className={styles.btnTask}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="43.062"
              height="27.292"
              viewBox="0 0 43.062 27.292"
            >
              <g
                id="Group_9391"
                data-name="Group 9391"
                transform="translate(-342.766 -553.024)"
              >
                <g
                  id="Group_8874"
                  data-name="Group 8874"
                  transform="translate(343.766 554.233)"
                >
                  <g id="Group_8873" data-name="Group 8873" opacity="0.5">
                    <path
                      id="Path_9503"
                      data-name="Path 9503"
                      d="M744.181,840.381v3.164a5.234,5.234,0,0,0,5.235,5.234h4.847"
                      transform="translate(-744.181 -840.381)"
                      fill="none"
                      stroke="#147bfc"
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
                      stroke="#147bfc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
                <g
                  id="Group_9038"
                  data-name="Group 9038"
                  transform="translate(365.186 554.024)"
                >
                  <path
                    id="Path_9582"
                    data-name="Path 9582"
                    d="M483.315-2007.13h12.9a1.437,1.437,0,0,1,1.436,1.437v22.42a1.437,1.437,0,0,1-1.436,1.436h-16.77a1.437,1.437,0,0,1-1.436-1.436v-18.3"
                    transform="translate(-478.01 2007.13)"
                    fill="none"
                    stroke="#147bfc"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_9583"
                    data-name="Path 9583"
                    d="M478.01-2001.575l5.305-5.555v4.124a1.433,1.433,0,0,1-1.436,1.431H478.01"
                    transform="translate(-478.01 2007.13)"
                    fill="none"
                    stroke="#147bfc"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>
            تصدير إلى مارك
          </button>
        </div>
        <h2>{book.title} </h2>
        <p>
          تأليف :{" "}
          <span>
            {book.authors.map((a) => (
              <span>{a.name} , </span>
            ))}
          </span>
        </p>
        <p>
          الناشر : <span>{book.publisher.name}</span>
        </p>
        <p>
          المواضيع الرئيسية :{" "}
          <span>
            {book.subjects.map((s) => (
              <span>{s.title} , </span>
            ))}
          </span>
        </p>
        <p>
          عدد الصفحات: <span></span>
        </p>
        <p>
          تاريخ النشر : <span>{book.year_of_publication}</span>
        </p>
        <p>
          ISBN: <span>{book.id}</span>
        </p>
        <p>
          لغة الوثيقة: <span></span>
        </p>
        <p className={styles.tags}>
          <span>الوسوم: </span>
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
        </p>

        <div className={styles.extraOption}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            اقرأ الوثيقة
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.054"
              height="23.487"
              viewBox="0 0 26.054 23.487"
            >
              <g
                id="Group_9234"
                data-name="Group 9234"
                transform="translate(-776.059 -811.115)"
              >
                <g
                  id="Group_8837"
                  data-name="Group 8837"
                  transform="translate(777.059 812.115)"
                >
                  <rect
                    id="Rectangle_308"
                    data-name="Rectangle 308"
                    width="19.152"
                    height="17.079"
                    rx="2"
                    transform="translate(4.902)"
                    fill="none"
                    stroke="#147bfc"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_9498"
                    data-name="Path 9498"
                    d="M905.659,829.358v13.829a2.941,2.941,0,0,0,2.941,2.941h16.321"
                    transform="translate(-905.659 -824.641)"
                    fill="none"
                    stroke="#147bfc"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <g
                    id="Group_8836"
                    data-name="Group 8836"
                    transform="translate(9.228 3.29)"
                  >
                    <line
                      id="Line_16"
                      data-name="Line 16"
                      y2="10.5"
                      transform="translate(5.25 0)"
                      fill="none"
                      stroke="#147bfc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      id="Line_17"
                      data-name="Line 17"
                      x1="10.5"
                      transform="translate(0 5.25)"
                      fill="none"
                      stroke="#147bfc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </g>
            </svg>{" "}
            مشاركة
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.719"
              height="26.925"
              viewBox="0 0 26.719 26.925"
            >
              <g
                id="Group_9235"
                data-name="Group 9235"
                transform="translate(-833.059 -810.115)"
              >
                <g
                  id="Group_8834"
                  data-name="Group 8834"
                  transform="translate(834.059 811.115)"
                >
                  <g id="arrow-right" transform="translate(7.914 0)">
                    <line
                      id="Line_3"
                      data-name="Line 3"
                      y1="12.89"
                      transform="translate(4.446)"
                      fill="none"
                      stroke="#147bfc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M1052.97,712.107l4.446,5.268,4.446-5.268Z"
                      transform="translate(-1052.97 -699.784)"
                      fill="#147bfc"
                      stroke="#147bfc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                  <path
                    id="Path_9497"
                    data-name="Path 9497"
                    d="M1039.233,717.879v3.629a4.679,4.679,0,0,0,4.679,4.679h15.361a4.679,4.679,0,0,0,4.679-4.679v-3.629"
                    transform="translate(-1039.233 -701.262)"
                    fill="none"
                    stroke="#147bfc"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>{" "}
            تحميل
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27.35"
              height="27.312"
              viewBox="0 0 27.35 27.312"
            >
              <g
                id="Group_9236"
                data-name="Group 9236"
                transform="translate(1 1.025)"
              >
                <path
                  id="Path_9495"
                  data-name="Path 9495"
                  d="M936.941,692.912l-7.1-7.377a.819.819,0,0,0-1.41.568v3.552h-.273A10.669,10.669,0,0,0,917.5,700.312v1.639a.808.808,0,0,0,.638.784.789.789,0,0,0,.18.022.846.846,0,0,0,.749-.466,8.966,8.966,0,0,1,8.064-4.985h1.3v3.552a.819.819,0,0,0,1.41.569l7.1-7.377A.819.819,0,0,0,936.941,692.912Z"
                  transform="translate(-911.92 -685.283)"
                  fill="none"
                  stroke="#147bfc"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_9496"
                  data-name="Path 9496"
                  d="M910.389,696.657h-2.546a2.184,2.184,0,0,0-2.185,2.185V714.4a2.185,2.185,0,0,0,2.185,2.185h19.934a2.185,2.185,0,0,0,2.185-2.185v-6.831"
                  transform="translate(-905.659 -691.298)"
                  fill="none"
                  stroke="#147bfc"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>{" "}
            مشاركة
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookDetail;
