import classNames from "classnames";
import { FC } from "react";
import styles from "./input.module.scss";

const InputComponent: FC<any> = ({
  children,
  icon,
  label,
  required,
  id,
  className,
}) => {
  const inputWrapClassnames = classNames({
    [styles.wrap]: true,
    [className]: className,
  });
  return (
    <div className={inputWrapClassnames}>
      {children}
      {icon && icon}
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && "*"}
      </label>
    </div>
  );
};

export default InputComponent;
