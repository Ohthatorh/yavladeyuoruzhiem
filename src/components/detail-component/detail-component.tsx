"use client";

import styles from "./detail-component.module.scss";
import { v4 as uuidv4 } from "uuid";
import { SelectComponent } from "../../components/select-component/select-component";
import { FC, useState } from "react";
import { Filter } from "../filter/filter";
import { Accordion } from "@szhsin/react-accordion";
import { CardItem } from "../card-item/card-item";
import { useSearchParams } from "next/navigation";
import classNames from "classnames";

export const CatalogDetailPage: FC = ({ catalogList, filtersList }) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
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
  const filtersClassnames = classNames({
    [styles.filters]: true,
    [styles.filters_opened]: isOpenFilters,
  });
  return (
    <section className={styles.section}>
      <div className={styles.catalogWrap}>
        <div className={filtersClassnames}>
          <div className={styles.filtersOptions}>
            <p className={styles.filtersTitle}>Фильтры</p>
            <button
              className={styles.filtersButton}
              onClick={() => setIsOpenFilters(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
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
            <button
              className={styles.filtersButton}
              onClick={() => setIsOpenFilters(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="21" x2="14" y1="4" y2="4" />
                <line x1="10" x2="3" y1="4" y2="4" />
                <line x1="21" x2="12" y1="12" y2="12" />
                <line x1="8" x2="3" y1="12" y2="12" />
                <line x1="21" x2="16" y1="20" y2="20" />
                <line x1="12" x2="3" y1="20" y2="20" />
                <line x1="14" x2="14" y1="2" y2="6" />
                <line x1="8" x2="8" y1="10" y2="14" />
                <line x1="16" x2="16" y1="18" y2="22" />
              </svg>
            </button>
            <SelectComponent
              placeholder={"Сортировка"}
              sortOptions={sortOptions}
            />
          </div>
          <div className={styles.cards}>
            {catalogList.map((item) => (
              <CardItem className={styles.card} item={item} key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
