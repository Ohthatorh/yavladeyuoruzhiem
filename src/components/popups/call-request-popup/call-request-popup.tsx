import styles from "./call-request-popup.module.scss";
import Modal from "../../modal/modal";
import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/button/button";
import InputComponent from "@/components/input/input";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const CallRequestPopup: FC<any> = ({ isOpen, onClose }) => {
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: "",
      tel: "",
      city: "",
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
      if (!values.city) {
        errors.city = "Не заполнено поле город.";
        return toast.error(errors.city);
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
      onClose();
      toast.success(
        "Заявка отправлена. Менеджер свяжется с вами в ближайшее время."
      );
    },
  });
  return (
    <Modal isOpen={isOpen} title={"Заказать звонок"} onClose={onClose}>
      <div className={styles.wrap}>
        <p className={styles.text}>
          Заполните форму, чтобы наш специалист связался с вами и ответил на
          ваши вопросы
        </p>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <InputComponent id={"call-request-name"} label={"Имя"}>
            <input
              id={"call-request-name"}
              type="text"
              maxLength={50}
              placeholder=""
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              autoComplete="call-request-name"
            />
          </InputComponent>
          <InputComponent id={"call-request-tel"} label={"Телефон"}>
            <input
              id={"call-request-tel"}
              type="text"
              maxLength={50}
              placeholder=""
              value={formik.values.tel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="tel"
              autoComplete="call-request-tel"
            />
          </InputComponent>
          <InputComponent id={"call-request-city"} label={"Город"}>
            <input
              id={"call-request-city"}
              type="text"
              maxLength={50}
              placeholder=""
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="city"
              autoComplete="call-request-city"
            />
          </InputComponent>
          <Button
            id={"call-request-button"}
            text={"Заказать звонок"}
            type="submit"
            extraClass={styles.button}
            isLoading={formik.isSubmitting}
          />
          <p className={styles.subtext}>
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь с{" "}
            <Link className={styles.subtextLink} href={"/"}>
              политикой конфиденциальности
            </Link>
          </p>
        </form>
      </div>
    </Modal>
  );
};
export default CallRequestPopup;
