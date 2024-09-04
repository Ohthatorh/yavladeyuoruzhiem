"use client";

import Link from "next/link";
import styles from "./cart-component.module.scss";
import { FC, useEffect, useState } from "react";
import { ArrowRightIcon } from "../icon";
import { CardList } from "./card-list/card-list";
import { Form } from "./form/form";
import { useAppSelector } from "@/services/redux/hooks";
import { getCart } from "@/services/redux/features/cartSlice";
import { getIdsList } from "@/app/api/catalog";
import { LoadingComponent } from "../loading/loading";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import {
  getProductsForCart,
  getProductsWithUnavailable,
} from "@/utils/api/catalog";

interface ICartComponent {}

export const CartComponent: FC<ICartComponent> = () => {
  const cart = useAppSelector(getCart);
  const [isLoading, setIsLoading] = useState(false);
  const [cartList, setCartList] = useState([]);
  const breadcrumbs = [{ text: "Корзина", link: "/cart/", isLast: true }];
  useEffect(() => {
    if (cart.length !== 0) {
      setIsLoading(true);
      const idsToFetch = cart.map((item) => item.id).join(",");
      getProductsForCart(idsToFetch).then((res) => {
        setCartList(res.items.items);
        setIsLoading(false);
      });
    }
  }, []);
  return (
    <main className={styles.wrap}>
      <div className="container">
        <section className={styles.cart}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Link className={styles.backLink} href="/catalog">
            <ArrowRightIcon />
            Вернуться к покупкам
          </Link>
          <h1 className={styles.title}>Корзина</h1>
          {isLoading && <LoadingComponent />}
          {cart.length > 0 && !isLoading && cartList.length > 0 ? (
            <div className={styles.content}>
              <CardList cart={cart} cartList={cartList} />
              <Form cart={cart} cartList={cartList} />
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.text}>Список корзины пуст</p>
              <Link className={styles.link} href={"/catalog/"}>
                Перейти в каталог
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};
