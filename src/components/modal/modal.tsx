import { createPortal } from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from "./modal.module.scss";
import { useEffect, FC } from "react";
import ModalHeader from "./modal-header/modal-header";
import { IModalComponent } from "@/services/types/types";
import { AnimatePresence, motion } from "framer-motion";

const Modal: FC<IModalComponent> = ({ isOpen, children, title, onClose }) => {
  const modalRoot = document.getElementById("modals");
  const dropIn = {
    hidden: {
      top: "48%",
      opacity: 0,
    },
    visible: {
      top: "50%",
      opacity: 1,
    },
    exit: {
      top: "48%",
      opacity: 0,
    },
  };

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line
  }, []);
  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <ModalOverlay onClose={onClose} />
            <motion.div
              key="modal"
              className={styles.modal}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader title={title} onClose={onClose} />
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    modalRoot!
  );
};

export default Modal;
