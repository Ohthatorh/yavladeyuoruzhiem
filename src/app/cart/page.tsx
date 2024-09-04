import { CartComponent } from "@/components/cart-component/cart-component";
import { Metadata } from "next";
import { metadata as defaultMetadata } from "@/app/layout";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Корзина — Интернет-магазин «ЯВладеюОружием»",
  description: "Корзина — Интернет-магазин «ЯВладеюОружием»",
  openGraph: {
    title: "Корзина — Интернет-магазин «ЯВладеюОружием»",
    description: "Корзина — Интернет-магазин «ЯВладеюОружием»",
  },
};

export default async function Cart() {
  return <CartComponent />;
}
