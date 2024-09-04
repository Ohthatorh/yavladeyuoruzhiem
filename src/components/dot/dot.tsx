import { FC } from "react";
import styles from "./dot.module.scss";
import classNames from "classnames";

export const Dot: FC<{
  prop: string;
  value: string;
  link?: string;
  className?: string;
}> = ({ prop, value, link, className }) => {
  const dotClassnames = classNames({
    [styles.dot]: true,
    [className!]: className,
  });
  return (
    <div className={dotClassnames}>
      <p className={styles.dotProp}>
        <span className={styles.dotPropSpan}>{prop}</span>
      </p>
      <p className={styles.dotValue}>
        {link ? (
          <a className={styles.dotLink} href={link}>
            {value}
          </a>
        ) : (
          <span className={styles.dotText}>{value}</span>
        )}
      </p>
    </div>
  );
};
