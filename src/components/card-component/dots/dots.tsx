import { Dot } from "@/components/dot/dot";
import styles from "./dots.module.scss";
import { FC } from "react";

interface IDots {}

export const Dots: FC<IDots> = ({ tags }) => {
  return (
    tags &&
    tags.length > 0 && (
      <div className={styles.dots}>
        <h2 className={styles.title}>Характеристики</h2>
        {tags.map((tag) => (
          <Dot key={tag.name} prop={tag.name} value={tag.value.name} />
        ))}
      </div>
    )
  );
};
