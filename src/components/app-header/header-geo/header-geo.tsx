"use client";

import styles from "./header-geo.module.scss";
import { GeoIcon } from "@/components/icon";
import { FC, useEffect, useState } from "react";
import { GeoPopup } from "@/components/popups";
import { useOpenModal } from "@/services/hooks/useOpenModal";
import { useAppSelector } from "@/services/redux/hooks";
import { getCity } from "@/services/redux/features/citySlice";

export const HeaderGeo: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [showModal, handleOpenModal, handleCloseModal] = useOpenModal();
  const choosedCity = useAppSelector(getCity);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {showModal && <GeoPopup isOpen={showModal} onClose={handleCloseModal} />}
      <div className={styles.geo}>
        <GeoIcon />
        <button className={styles.button} onClick={handleOpenModal}>
          {isClient ? choosedCity.city : "Москва"}
        </button>
      </div>
    </>
  );
};
