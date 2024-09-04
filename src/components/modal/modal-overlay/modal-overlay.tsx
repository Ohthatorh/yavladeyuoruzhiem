import { TModalOverlayComponent } from "@/services/types/types";
import styles from "./modal-overlay.module.scss";
import { FC } from "react";
import { motion } from "framer-motion";

const ModalOverlay: FC<TModalOverlayComponent> = ({ onClose }) => {
  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    ></motion.div>
  );
};

export default ModalOverlay;
