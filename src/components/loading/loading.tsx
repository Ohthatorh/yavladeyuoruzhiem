import styles from "./loading.module.scss";
import { FC } from "react";

interface ILoading {}

export const LoadingComponent: FC<ILoading> = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}></div>
    </div>
  );
};
