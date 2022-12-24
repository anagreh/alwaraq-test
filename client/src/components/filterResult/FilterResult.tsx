import styles from "./FilterResult.module.css";
import upArrow from "../../assets/icons/up-arrow.svg";
import { useEffect, useState } from "react";
import { Subject } from "../../schema/bookSchema";
import { HandleSelectedSubjectsChange } from "../../pages/SearchResultPage";

type Props = {
  subjects: Subject[];
  isLoading: boolean;
  selectedSubjects: string[];
  handleSelectedSubjectsChange: HandleSelectedSubjectsChange;
};
const FilterResult = ({
  subjects,
  selectedSubjects,
  handleSelectedSubjectsChange,
}: Props) => {
  const [shown, setShown] = useState(false);
  const [checkAllOption, setCheckAllOption] = useState(false);

  const handleCheckChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      handleSelectedSubjectsChange({ type: "add", payload: e.target.name });
    } else {
      handleSelectedSubjectsChange({ type: "remove", payload: e.target.name });

      setCheckAllOption(false);
    }
  };

  const handleCheckAll = () => {
    if (!checkAllOption) {
      handleSelectedSubjectsChange({ type: "all" });
      setCheckAllOption(true);
    } else {
      handleSelectedSubjectsChange({ type: "none" });
      setCheckAllOption(false);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.heading + " " + (shown ? styles.shown : "")}
        role="button"
        onClick={() => setShown(!shown)}
      >
        المواضيع
        <img src={upArrow} alt="" />
      </div>

      <div className={styles.options + " " + (shown ? styles.shown : "")}>
        <OptionCheckBox
          id="all"
          checked={checkAllOption}
          name="all"
          title="الكل"
          handleCheckChange={handleCheckAll}
        />
        {subjects.map((subject) => (
          <OptionCheckBox
            id={subject.id}
            checked={selectedSubjects.includes(subject.id)}
            name={subject.id}
            title={subject.title}
            handleCheckChange={handleCheckChange}
            key={subject.id}
          />
        ))}
      </div>
    </div>
  );
};

type OptionCheckBoxProps = {
  name: string;
  id: string;
  checked: boolean;
  title: string;
  handleCheckChange: React.ChangeEventHandler<HTMLInputElement>;
};

function OptionCheckBox({
  id,
  title,
  checked,
  handleCheckChange,
}: OptionCheckBoxProps) {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={checked}
        onChange={handleCheckChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
export default FilterResult;
