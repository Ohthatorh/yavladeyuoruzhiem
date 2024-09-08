"use client";
import { FC, useState } from "react";
import styles from "./header-catalog.module.scss";
import { BurgerIcon } from "@/components/icon";
import { Catalog } from "@/components/catalog/catalog";

export const HeaderCatalog: FC = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button className={styles.hamburger} onClick={handleClick}>
        <BurgerIcon isActive={isOpen} />
        Каталог
      </button>
      <Catalog isOpen={isOpen} categories={categories} onClose={handleClick} />
    </>
  );
};
