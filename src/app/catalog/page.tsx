import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import styles from "./page.module.scss";
import { Metadata } from "next";
import { metadata as defaultMetadata } from "../layout";
import { CatalogItem } from "@/components/catalog/catalog-item/catalog-item";
import { v4 as uuidv4 } from "uuid";
import { getCategories } from "@/utils/api/catalog";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Каталог — Интернет-магазин «ЯВладеюОружием»",
  description: "Каталог — Интернет-магазин «ЯВладеюОружием»",
  openGraph: {
    title: "Каталог — Интернет-магазин «ЯВладеюОружием»",
    description: "Каталог — Интернет-магазин «ЯВладеюОружием»",
  },
};

export default async function PageCatalog() {
  const categories = await getCategories();
  const breadcrumbs = [
    {
      text: "Каталог",
      link: "/catalog/",
      isLast: true,
    },
  ];
  return (
    <main>
      <div className="container">
        <section className={styles.catalog}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1 className={styles.title}>Каталог</h1>
          <ul className={styles.list}>
            {categories.items.map(
              (el: any) =>
                el.code !== "comission" && (
                  <CatalogItem key={uuidv4()} item={el} />
                )
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}
