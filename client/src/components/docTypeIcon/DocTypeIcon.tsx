import styles from "./DocTypeIcon.module.css";
import docTypes from "./const";

type Props = {
  docType: "thesis" | "books";
};

const DocTypeIcon = ({ docType }: Props) => {
  const docTypeInfo = docTypes.find(({ id }) => id === docType);

  return (
    <div
      className={styles.docType}
      style={{ backgroundColor: docTypeInfo?.color }}
    >
      <img src={docTypeInfo?.iconURL} className={styles.icon}></img>
      {docTypeInfo?.type}
    </div>
  );
};
export default DocTypeIcon;
