import classNames from "classnames";
import styles from "./checkbox.module.scss";
import { FC } from "react";

interface ICheckbox {
  text: string;
  value: string;
  name: string;
  onClick: () => void;
  codeName: string;
  isChecked?: string | undefined;
}

export const Checkbox: FC<ICheckbox> = ({
  text,
  value,
  name,
  codeName,
  onClick,
  isChecked,
}) => {
  const checkboxClassnames = classNames({
    ["checkbox"]: true,
    [styles.checkbox]: true,
    "visually-hidden": true,
  });
  return (
    <label className={styles.checkboxLabel} onClick={onClick}>
      {text}
      <input
        type="checkbox"
        className={checkboxClassnames}
        value={value}
        name={name}
        data-filter={codeName}
        defaultChecked={isChecked ? true : false}
      />
      <span className={styles.checkboxSpan}></span>
    </label>
  );
};
