"use client";

import styles from "./detail-component.module.scss";
import { v4 as uuidv4 } from "uuid";
import { SelectComponent } from "../../components/select-component/select-component";
import { FC } from "react";
import { Filter } from "../filter/filter";
import { Accordion } from "@szhsin/react-accordion";
import { CardItem } from "../card-item/card-item";
import { useSearchParams } from "next/navigation";

export const CatalogDetailPage: FC = ({ catalogList, filtersList }) => {
  const searchParams = useSearchParams();
  const sortOptions = [
    {
      value: "popularity",
      label: "Популярные",
      isChoosed: searchParams?.get("sortby") === "popularity",
    },
    {
      value: "priceasc",
      label: "Дешевле",
      isChoosed: searchParams?.get("sortby") === "priceasc",
    },
    {
      value: "pricedesc",
      label: "Дороже",
      isChoosed: searchParams?.get("sortby") === "pricedesc",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.catalogWrap}>
        <div className={styles.filters}>
          <Accordion
            className={styles.accordion}
            transition
            transitionTimeout={250}
          >
            {filtersList.map((filter, index) => {
              return <Filter key={index} filter={filter} />;
            })}
          </Accordion>
        </div>
        <div className={styles.catalog}>
          <div className={styles.catalogOptions}>
            <SelectComponent
              placeholder={"Сортировка"}
              sortOptions={sortOptions}
            />
          </div>
          <div className={styles.cards}>
            {catalogList.map((item) => (
              <CardItem item={item} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
