import "normalize.css";
import "../styles/global.scss";
import type { Metadata, Viewport } from "next";
import { AppFooter } from "@/components/app-footer/app-footer";
import { AppHeader } from "@/components/app-header/app-header";
import { Notification } from "@/components/notification/notification";
import { Providers } from "@/services/providers/provider";
import NextTopLoader from "nextjs-toploader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title:
    "Интернет-магазин «ЯВладеюОружием» — купить огнестрельное оружие, экипировку и эксклюзивные товары для охоты в Москве",
  description:
    "Интернет-магазин «ЯВладеюОружием» осуществляет продажу товаров для охоты, рыбалки и туризма в Москве. Заказывайте огнестрельное охотничье оружие онлайн или по телефону 8(800)700-82-56.",
  openGraph: {
    title:
      "Интернет-магазин «ЯВладеюОружием» — купить огнестрельное оружие, экипировку и эксклюзивные товары для охоты в Москве",
    description:
      "Интернет-магазин «ЯВладеюОружием» осуществляет продажу товаров для охоты, рыбалки и туризма в Москве. Заказывайте огнестрельное охотничье оружие онлайн или по телефону 8(800)700-82-56.",
    locale: "ru_RU",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.ico",
    shortcut: {
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <NextTopLoader />
        <Providers>
          <AppHeader />
          {children}
          <AppFooter />
          <div id="modals"></div>
          <Notification />
        </Providers>
      </body>
    </html>
  );
}
