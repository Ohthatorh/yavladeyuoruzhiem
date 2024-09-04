import { Metadata } from "next";
import styles from "./page.module.scss";
import { metadata } from "@/app/layout";
import { CardComponent } from "@/components/card-component/card-component";
import { getCardInfo } from "@/utils/api/card";

export async function generateMetadata({ params }): Promise<Metadata> {
  const cardId = params.id;
  const card = await getCardInfo(cardId);
  return {
    ...metadata,
    title: card.item.name + " — Интернет-магазин «ЯВладеюОружием»",
    description: card.item.name + " — Интернет-магазин «ЯВладеюОружием»",
    openGraph: {
      title: card.item.name + " — Интернет-магазин «ЯВладеюОружием»",
      description: card.item.name + " — Интернет-магазин «ЯВладеюОружием»",
    },
  };
}

export default async function Card({ params: { id } }) {
  const card = await getCardInfo(id);
  return (
    <main className={styles.main}>
      <div className="container">
        <CardComponent card={card.item} />
      </div>
    </main>
  );
}
