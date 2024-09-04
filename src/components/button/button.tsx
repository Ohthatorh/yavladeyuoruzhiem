import { FC } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { Preloader } from "../loading/preloader";

interface IButton {}

export const Button: FC<any> = ({
  id,
  text,
  extraClass,
  onClick,
  icon,
  isLoading,
  disabled,
}) => {
  const buttonClassnames = classNames({
    [styles.button]: true,
    [extraClass]: extraClass,
  });
  return (
    <button
      id={id}
      className={buttonClassnames}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {text}
          {icon}
        </>
      )}
    </button>
  );
};
