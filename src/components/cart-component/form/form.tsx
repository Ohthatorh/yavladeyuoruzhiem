"use client";

import InputComponent from "@/components/input/input";
import styles from "./form.module.scss";
import { FC } from "react";
import { Button } from "@/components/button/button";
import Link from "next/link";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Dot } from "@/components/dot/dot";
import { priceWithSpaces } from "@/utils/func/price-with-spaces";
import { useAppDispatch } from "@/services/redux/hooks";
import { createOrder } from "@/services/redux/features/cartSlice";

interface IForm {}

export const Form: FC<IForm> = ({ cart, cartList }) => {
  const dispatch = useAppDispatch();
  const availableList = cartList.filter(
    (item) =>
      item.store?.map((store) => store.amount).reduce((a, b) => a + b, 0) +
        Number(item.quantity) >
      0
  );
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: "",
      tel: "",
      address: "",
    },
    validate(values) {
      const errors = {} as any;
      if (!values.name) {
        errors.name = "Не заполнено поле имя.";
        return toast.error(errors.name);
      }
      if (!values.tel) {
        errors.tel = "Не заполнено поле с телефоном.";
        return toast.error(errors.tel);
      }
      if (!values.address) {
        errors.address = "Не заполнено поле адрес.";
        return toast.error(errors.address);
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      const data = {
        ...values,
        cart: availableList.map((item) => ({
          ...item,
          quantity: cart.find((el) => el.id === item.id)?.quantity,
        })),
      };
      toast.success(
        "Заявка отправлена. Менеджер свяжется с вами в ближайшее время."
      );
      setSubmitting(false);
      // dispatch(createOrder({ data }));
    },
  });
  const countPrice = cart
    .map((cartItem) => {
      const item = availableList.find((item) => item.id === cartItem.id);
      if (!item) {
        return 0;
      }
      return item.price_discount * cartItem.quantity;
    })
    .reduce((a, b) => a + b, 0);
  const totalPrice = cart
    .map((cartItem) => {
      const item = availableList.find((item) => item.id === cartItem.id);
      if (!item) {
        return 0;
      }
      return item.price * cartItem.quantity;
    })
    .reduce((a, b) => a + b, 0);
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Оформление заказа</p>
      <div className={styles.dots}>
        <Dot
          prop={`Товары, ${availableList.length}`}
          value={priceWithSpaces(totalPrice)}
        />
        <Dot
          prop={`Скидка`}
          value={`-` + priceWithSpaces(totalPrice - countPrice)}
        />
        <Dot
          className={styles.dot}
          prop={`Итого`}
          value={priceWithSpaces(countPrice)}
        />
      </div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <InputComponent id={"name-input"} label={"Имя"}>
          <input
            className={styles.input}
            id={"name-input"}
            type="text"
            maxLength={50}
            placeholder=""
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="name"
            autoComplete="name-input"
          />
        </InputComponent>
        <InputComponent id={"tel-input"} label={"Телефон"}>
          <input
            className={styles.input}
            id={"tel-input"}
            type="text"
            maxLength={50}
            placeholder=""
            value={formik.values.tel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="tel"
            autoComplete="tel-input"
          />
        </InputComponent>
        <InputComponent id={"address-input"} label={"Адрес"}>
          <input
            className={styles.input}
            id={"address-input"}
            type="text"
            maxLength={50}
            placeholder=""
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="address"
            autoComplete="address-input"
          />
        </InputComponent>
        <Button
          id={"call-request-button"}
          type="submit"
          text={"Оформить заказ"}
          extraClass={styles.button}
          disabled={formik.isSubmitting}
        />
        <p className={styles.subtext}>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь с{" "}
          <Link className={styles.subtextLink} href={"/policy/"}>
            политикой конфиденциальности
          </Link>
        </p>
      </form>
    </div>
  );
};
