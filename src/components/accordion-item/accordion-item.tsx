import { AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./accordion-item.module.scss";
import { ChevronIcon } from "../icon";

export const AccordionItem = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <ChevronIcon className={styles.chevron} />
      </>
    }
    className={
      rest.className ? styles.item + " " + rest.className : styles.item
    }
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemButton} ${isEnter && styles.itemButtonOpened}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);
