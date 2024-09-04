"use client";

import { FC } from "react";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import styles from "./card-component.module.scss";
import { Photos } from "./photos/photos";
import { Info } from "./info/info";
import { Description } from "./description/description";
import { Dots } from "./dots/dots";

export const CardComponent: FC = ({ card }) => {
  const breadcrumbs = [
    {
      text: "Каталог",
      link: "/catalog/",
      isLast: false,
    },
    {
      text: card.breadcrumb[0].name,
      link: `/catalog/${card.breadcrumb[0].code}/`,
      isLast: false,
    },
    {
      text: card.name,
      isLast: true,
    },
  ];
  return (
    <section className={styles.wrap}>
      <Breadcrumbs className={styles.nav} breadcrumbs={breadcrumbs} />
      <div className={styles.columns}>
        <div className={styles.left}>
          <Photos photos={card.more_pic} name={card.name} />
          <Description text={card.description} />
          <Dots tags={card.properties} />
        </div>
        <Info card={card} />
      </div>
    </section>
  );
};
