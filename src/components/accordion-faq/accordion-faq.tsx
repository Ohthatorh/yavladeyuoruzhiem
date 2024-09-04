"use client";
import { Accordion } from "@szhsin/react-accordion";
import styles from "./accordion-faq.module.scss";
import { v4 as uuidv4 } from "uuid";
import { AccordionItem } from "../accordion-item/accordion-item";

export const AccordionFaq = () => {
  const faqItems = [
    {
      title: "Вопрос 1",
      text: "Ответ 1",
    },
    {
      title: "Вопрос 2",
      text: "Ответ 2",
    },
    {
      title: "Вопрос 3",
      text: "Ответ 3",
    },
    {
      title: "Вопрос 4",
      text: "Ответ 4",
    },
    {
      title: "Вопрос 5",
      text: "Ответ 5",
    },
    {
      title: "Вопрос 6",
      text: "Ответ 6",
    },
  ];
  return (
    <Accordion className={styles.accordion} transition transitionTimeout={250}>
      {faqItems.map((item) => {
        return (
          <AccordionItem
            key={uuidv4()}
            header={item.title}
            contentProps={{ className: styles.itemContent }}
          >
            <div className={styles.accordionPanel}>
              <p className={styles.accordionPanelText}>{item.text}</p>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
