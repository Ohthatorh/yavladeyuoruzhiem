import classNames from "classnames";
import styles from "./radio.module.scss";
import { FC } from "react";

interface IRadio {
  text: string;
  value: string;
  name: string;
}

export const Radio: FC<IRadio> = ({ text, value, name }) => {
  const radioClassnames = classNames({
    [styles.radio]: true,
    "visually-hidden": true,
  });
  return (
    <div>
      <label className={styles.radioLabel}>
        {text}
        <input
          type="radio"
          className={radioClassnames}
          value={value}
          name={name}
        />
        <span className={styles.radioSpan}></span>
      </label>
    </div>
  );
};
