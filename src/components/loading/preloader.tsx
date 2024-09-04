import classNames from "classnames";
import styles from "./loading.module.scss";
import { FC } from "react";

export const Preloader: FC<{ className?: string }> = ({ className }) => {
  const preloaderClassNames = classNames({
    [className]: className,
    [styles.preloaderWrap]: true,
  });
  return (
    <div className={preloaderClassNames}>
      <div className={styles.loader}></div>
    </div>
  );
};
