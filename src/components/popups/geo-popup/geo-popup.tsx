import styles from "./geo-popup.module.scss";
import Modal from "../../modal/modal";
import { v4 as uuidv4 } from "uuid";
import { FC } from "react";
import InputComponent from "../../input/input";
import { SearchIcon } from "@/components/icon";
import { useAppDispatch } from "@/services/redux/hooks";
import { setCity } from "@/services/redux/features/citySlice";

export const GeoPopup: FC<any> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const defaultCities = [
    { name: "Москва", code: "moskva" },
    { name: "Санкт-Петербург", code: "sankt-peterburg" },
    { name: "Волгоград", code: "volgograd" },
    { name: "Екатеринбург", code: "ekaterinburg" },
    { name: "Иркутск", code: "irkutsk" },
    { name: "Казань", code: "kazan" },
    { name: "Краснодар", code: "krasnodar" },
    { name: "Красноярск", code: "krasnoyarsk" },
    { name: "Нижний Новгород", code: "nizhniy-novgorod" },
    { name: "Новосибирск", code: "novosibirsk" },
    { name: "Пермь", code: "perm" },
    { name: "Ростов-на-Дону", code: "rostov-na-donu" },
    { name: "Саратов", code: "saratov" },
    { name: "Самара", code: "samara" },
    { name: "Сочи", code: "sochi" },
    { name: "Хабаровск", code: "khabarovsk" },
    { name: "Челябинск", code: "chelyabinsk" },
  ];
  const handleChooseCity = (el) => {
    dispatch(setCity({ name: el.name, code: el.code }));
    onClose();
  };
  return (
    <Modal isOpen={isOpen} title={"Выберите свой город"} onClose={onClose}>
      <div className={styles.wrap}>
        <div className={styles.defaultCitiesList}>
          {defaultCities.map((el) => {
            return (
              <button
                key={uuidv4()}
                className={styles.defaultCitiesButton}
                onClick={() => handleChooseCity(el)}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
