import { Metadata } from "next";
import styles from "./page.module.scss";
import { metadata } from "@/app/layout";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { CatalogDetailPage } from "@/components/detail-component/detail-component";
import { notFound } from "next/navigation";
import {
  getCatalogFilters,
  getCatalogInfo,
  getCatalogItems,
} from "@/utils/api/catalog";

export async function generateMetadata({ params }): Promise<Metadata> {
  const section = params.section;
  const catalogInfo = await getCatalogInfo(section);
  return {
    ...metadata,
    title: catalogInfo.items.info.name + " — Интернет-магазин «ЯВладеюОружием»",
    description:
      catalogInfo.items.info.name + " — Интернет-магазин «ЯВладеюОружием»",
    openGraph: {
      title:
        catalogInfo.items.info.name + " — Интернет-магазин «ЯВладеюОружием»",
      description:
        catalogInfo.items.info.name + " — Интернет-магазин «ЯВладеюОружием»",
    },
  };
}

const defaultFilters = ["sortby", "page", "price_from", "price_to", "stock"];

export default async function PageCatalog({ params, searchParams }: any) {
  const code = params.section;
  const section =
    Object.keys(searchParams).length > 0
      ? `${code}&${Object.keys(searchParams)
          .map((param) => {
            if (defaultFilters.includes(param)) {
              return `${param}=${searchParams[param]}`;
            } else if (typeof searchParams[param] === "string") {
              return searchParams[param]
                .split("-")
                .map((el) => {
                  return `filter[${param}][]=${el}`;
                })
                .join("&");
            }
          })
          .join("&")}`
      : code;
  const catalogInfo = await getCatalogInfo(section);
  const catalogList = await getCatalogItems(section);
  const filtersList = await getCatalogFilters(code);
  const breadcrumbs = [
    {
      text: "Каталог",
      link: "/catalog/",
      isLast: false,
    },
    {
      text: catalogInfo.items.info.name,
      link: `/catalog/${params.section}/`,
      isLast: true,
    },
  ];
  return (
    <main className={styles.main}>
      <div className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className={styles.title}>{catalogInfo.items.info.name}</h1>
        <CatalogDetailPage
          catalogList={catalogList.items?.items}
          filtersList={filtersList.items}
        />
      </div>
    </main>
  );
}
