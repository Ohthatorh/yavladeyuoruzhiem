import { FC } from "react";
import { Checkbox } from "../checkbox/checkbox";
import { Radio } from "../radio/radio";
import styles from "./filter.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Accordion } from "@szhsin/react-accordion";
import { AccordionItem } from "../accordion-item/accordion-item";
import { setUrlFromSelectedFilters } from "@/utils/func/set-url-from-selected-filters";
import { useRouter, useSearchParams } from "next/navigation";

interface IFilter {
  key: string;
  values: string[];
}

export const Filter: FC<IFilter> = ({ filter }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <div className={styles.filterWrap}>
      <AccordionItem
        header={filter.name}
        contentProps={{ className: styles.itemContent }}
      >
        <div className={styles.accordionPanel}>
          {filter.items.map((filterValue: any, index: number) => (
            <Checkbox
              key={index}
              text={filterValue.name}
              value={filterValue.code}
              name={filter.name}
              codeName={filter.code}
              onClick={() => setUrlFromSelectedFilters(router)}
              isChecked={searchParams
                .get(filter.code)
                ?.split("-")
                .find((item) => item === filterValue.code)}
            />
          ))}
        </div>
      </AccordionItem>
    </div>
  );
};
