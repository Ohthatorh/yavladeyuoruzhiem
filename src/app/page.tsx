import styles from "./page.module.scss";
import descriptionLabelsImage from "../assets/images/description-labels.png";
import descriptionPriceImage from "../assets/images/description-price.png";
import descriptionServiceImage from "../assets/images/description-service.png";
import descriptionShippingImage from "../assets/images/description-shipping.png";
import indexImage from "../assets/images/index-banner.webp";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import DescriptionItem from "@/components/index-page/description-item/description-item";
import { TagList } from "@/components/tag-list/tag-list";
import { AccordionFaq } from "@/components/accordion-faq/accordion-faq";
import { getPopularCategories } from "@/utils/api/home";

export default async function IndexPage() {
  const popularCategories = await getPopularCategories();
  const descriptionItems = [
    {
      name: "Всегда лучшие цены",
      img: descriptionPriceImage,
    },
    {
      name: "Более 70 пунктов самовывоза",
      img: descriptionLabelsImage,
    },
    {
      name: "Качественный сервис",
      img: descriptionServiceImage,
    },
    {
      name: "Бесплатная доставка",
      img: descriptionShippingImage,
    },
  ];
  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.banner}>
          <h1 className={styles.bannerTitle}>
            Магазин гражданского
            <br />
            <span>оружия</span>
          </h1>
          <p className={styles.bannerText}>
            На нашем сайте представлен только актуальный ассортимент и цены
            наших розничных партнеров, благодаря чему вы можете выбрать удобный
            магазин, найти интересующий вас товар и зарезервировать его онлайн
            без личного посещения и обзвона магазинов
          </p>
          <Link href={"/catalog/"} className={styles.bannerLink}>
            Перейти в каталог
          </Link>
          <Image className={styles.bannerImg} src={indexImage} alt="Оружие" />
          <ul className={styles.bannerDescription}>
            {descriptionItems.map((el) => {
              return (
                <DescriptionItem
                  key={uuidv4()}
                  srcImg={el.img}
                  name={el.name}
                />
              );
            })}
          </ul>
        </section>
      </div>
      <TagList tags={popularCategories.items} />
      <div className="container">
        <section className={styles.faq}>
          <h2 className={styles.faqTitle}>Ответы на частые вопросы</h2>
          <div className={styles.faqAccordionWrap}>
            <AccordionFaq />
          </div>
        </section>
      </div>
    </main>
  );
}
