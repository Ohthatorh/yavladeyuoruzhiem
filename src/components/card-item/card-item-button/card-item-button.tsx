"use client";

import { Button } from "@/components/button/button";
import styles from "./card-item-button.module.scss";
import { FC, useEffect, useState } from "react";
import { CartIcon } from "@/components/icon";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import { addToCart, getCart } from "@/services/redux/features/cartSlice";

interface ICardItemButton {
  id: string;
  stock: boolean;
  name: string;
}

export const CardItemButton: FC<ICardItemButton> = ({ id, stock, name }) => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart);
  const isInCart = cart.some((item) => item.id === id);
  const onClick = () => {
    if (!stock || isInCart) return;
    dispatch(addToCart({ id, name }));
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Button
      id={id}
      extraClass={
        stock
          ? isClient
            ? isInCart
              ? styles.button
              : undefined
            : undefined
          : styles.button
      }
      icon={stock ? <CartIcon /> : null}
      onClick={onClick}
    />
  );
};
