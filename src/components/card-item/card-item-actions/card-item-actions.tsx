import { FC, ReactElement } from "react";
import styles from "./card-item-actions.module.scss";

interface ICardItemActions {
  btn: ReactElement;
}

export const CardItemActions: FC<ICardItemActions> = ({ btn }) => {
  return <div className={styles.actionsWrap}>{btn}</div>;
};
