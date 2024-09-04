import { useAppDispatch } from "@/services/redux/hooks";
import styles from "./card-item-counter.module.scss";
import { FC } from "react";
import { toast } from "react-toastify";
import { changeQuantity } from "@/services/redux/features/cartSlice";

interface ICardItemCounter {
  id: string;
  quantity: number | undefined;
  maxCount: number;
  stock: boolean;
}

export const CardItemCounter: FC<ICardItemCounter> = ({
  id,
  quantity,
  maxCount,
  stock,
}) => {
  const dispatch = useAppDispatch();
  const handleChangeQuantity = (type: string) => {
    if (!stock) return;
    if (type === "append") {
      if (quantity === maxCount) {
        toast.error("Достигнуто максимальное количество товара.");
      } else {
        dispatch(changeQuantity({ id, action: type }));
      }
    } else if (type === "subtract") {
      if (quantity !== 1) {
        dispatch(changeQuantity({ id, action: type }));
      }
    }
  };
  return (
    <div className={styles.wrap}>
      <button
        className={styles.counter}
        onClick={() => handleChangeQuantity("subtract")}
      >
        -
      </button>
      <input
        className={styles.counterInput}
        type="number"
        readOnly
        value={quantity}
      />
      <button
        className={styles.counter}
        onClick={() => handleChangeQuantity("append")}
      >
        +
      </button>
    </div>
  );
};
