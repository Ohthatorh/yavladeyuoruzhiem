"use client";

import { useAppSelector } from "@/services/redux/hooks";
import styles from "./favourites-component.module.scss";
import { FC, useEffect, useState } from "react";
import { getFavourites } from "@/services/redux/features/favouritesSlice";
import { LoadingComponent } from "../loading/loading";
import Link from "next/link";
import { CardItem } from "../card-item/card-item";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { getProductsWithUnavailable } from "@/utils/api/catalog";

interface IFavouritesComponent {}

export const FavouritesComponent: FC<IFavouritesComponent> = () => {
  const favourites = useAppSelector(getFavourites);
  const [isLoading, setIsLoading] = useState(false);
  const [favouritesList, setFavouritesList] = useState([]);
  const breadcrumbs = [
    { text: "Избранное", link: "/favourites/", isLast: true },
  ];
  useEffect(() => {
    if (favourites.length !== 0) {
      setIsLoading(true);
      const idsToFetch = favourites.map((item) => item).join(",");
      getProductsWithUnavailable(idsToFetch).then((res) => {
        setFavouritesList(res.items.items);
        setIsLoading(false);
      });
    }
  }, []);
  return (
    <main>
      <div className="container">
        <section>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1 className={styles.title}>Избранное</h1>
          {isLoading && <LoadingComponent />}
          {favourites.length > 0 && !isLoading && favouritesList.length > 0 ? (
            <div className={styles.list}>
              {favourites.map((id) => {
                const item = favouritesList.find((item) => item.id === id);
                return <CardItem key={id} item={item} />;
              })}
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.text}>Список избранных пуст</p>
              <Link className={styles.link} href={"/catalog/"}>
                Перейти в каталог
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};
