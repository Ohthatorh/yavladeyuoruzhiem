import { TModalHeaderComponent } from "@/services/types/types";
import ModalClose from "../modal-close/modal-close";
import styles from "./modal-header.module.scss";
import { FC } from "react";

const ModalHeader: FC<TModalHeaderComponent> = ({ title, onClose }) => {
  return (
    <div className={styles.modalHeader}>
      <p className={styles.title}>{title}</p>
      <ModalClose onClose={onClose} />
    </div>
  );
};

export default ModalHeader;
