import styles from "./FilterResult.module.css";
import upArrow from "../../assets/icons/up-arrow.svg";
import { useEffect, useState } from "react";

type option = {
  id: string;
  title: string;
  bookNum?: number;
  checked: boolean;
};

//TODO: make that tha all option is inside option value
const optionsValue: option[] = [...new Array(30)].map((_, i) => ({
  id: i.toString(),
  title: "الموضوع الأول",
  bookNum: Math.floor(Math.random() * 1000),
  checked: false,
}));

type Props = {};
const FilterResult = (props: Props) => {
  const [shown, setShown] = useState(false);
  const [checkAllOption, setCheckAllOption] = useState(false);
  const [options, setOptions] = useState(optionsValue);

  const handleCheckChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setOptions((optionsState) => {
      return optionsState.map((option) => {
        if (e.target.id == option.id) {
          return { ...option, checked: !option.checked };
        }
        return option;
      });
    });
  };

  const handleCheckAll = () => {
    setOptions(
      options.map((option) => ({ ...option, checked: checkAllOption })),
    );
    setCheckAllOption((value) => !value);
  };

  useEffect(() => {
    setOptions(
      options.map((option) => ({ ...option, checked: checkAllOption })),
    );
  }, [checkAllOption]);

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
          option={{ id: "all", checked: checkAllOption, title: "الكل" }}
          handleCheckChange={handleCheckAll}
        />
        {options.map((option) => (
          <OptionCheckBox
            option={option}
            handleCheckChange={handleCheckChange}
            key={option.id}
          />
        ))}
      </div>
    </div>
  );
};

type OptionCheckBoxProps = {
  option: option;
  handleCheckChange: React.ChangeEventHandler<HTMLInputElement>;
};
function OptionCheckBox({
  option: { id, bookNum, title, checked },
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
      {bookNum && <span>({bookNum})</span>}
    </div>
  );
}
export default FilterResult;
