import { FC } from "react";
import styles from "./header-info.module.scss";
import HeaderCallRequest from "../header-call-request/header-call-request";

export const HeaderInfo: FC = () => {
  return (
    <div className={styles.infoWrap}>
      <p className={styles.text}>7:00-22:00</p>
      <HeaderCallRequest />
    </div>
  );
};
