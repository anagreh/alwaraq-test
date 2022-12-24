import thesisIcon from "../../assets/icons/thesis.svg";
import bookIcon from "../../assets/icons/book.svg";

const docTypes = [
  {
    id: "thesis",
    type: "رسالة",
    iconURL: thesisIcon,
    color: "#1FC0CE",
  },
  {
    id: "books",
    type: "كتاب",
    iconURL: bookIcon,
    color: "#6A359D",
  },
] as const;

export default docTypes;
