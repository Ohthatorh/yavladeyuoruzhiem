import { FavouritesComponent } from "@/components/favourites-component/favourites-component";
import { Metadata } from "next";
import { metadata as defaultMetadata } from "@/app/layout";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Избранное — Интернет-магазин «ЯВладеюОружием»",
  description: "Избранное — Интернет-магазин «ЯВладеюОружием»",
  openGraph: {
    title: "Избранное — Интернет-магазин «ЯВладеюОружием»",
    description: "Избранное — Интернет-магазин «ЯВладеюОружием»",
  },
};

export default function FavouritesPage() {
  return <FavouritesComponent />;
}
