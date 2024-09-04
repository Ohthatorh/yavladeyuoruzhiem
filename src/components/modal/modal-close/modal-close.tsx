import { TModalCloseComponent } from "@/services/types/types";
import styles from "./modal-close.module.scss";
import { FC } from "react";
import { CloseIcon } from "@/components/icon";

const ModalClose: FC<TModalCloseComponent> = ({ onClose }) => {
  return (
    <button onClick={onClose} className={styles.close}>
      <CloseIcon />
    </button>
  );
};

export default ModalClose;
