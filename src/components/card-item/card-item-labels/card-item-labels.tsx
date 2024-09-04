import styles from "./card-item-labels.module.scss";
import { FC } from "react";

interface ICardItemLabels {
  labels: { [key: string]: string };
}

export const CardItemLabels: FC<ICardItemLabels> = ({ labels }) => {
  return (
    labels && (
      <div className={styles.wrap}>
        {Object.values(labels).map((label, index) => (
          <p key={index} className={styles.label}>
            {label}
          </p>
        ))}
      </div>
    )
  );
};
