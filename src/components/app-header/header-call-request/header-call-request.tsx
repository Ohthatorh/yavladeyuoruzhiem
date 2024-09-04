"use client";

import { FC } from "react";
import styles from "./header-call-request.module.scss";
import CallRequestPopup from "../../popups/call-request-popup/call-request-popup";
import { TelIcon } from "@/components/icon";
import { useOpenModal } from "@/services/hooks/useOpenModal";

const HeaderCallRequest: FC = () => {
  const [showModal, handleOpenModal, handleCloseModal] = useOpenModal();
  return (
    <>
      {showModal && (
        <CallRequestPopup isOpen={showModal} onClose={handleCloseModal} />
      )}
      <button onClick={handleOpenModal} className={styles.button}>
        <TelIcon />
        Заказать звонок
      </button>
    </>
  );
};
export default HeaderCallRequest;
