"use client";

import styles from "./photos.module.scss";
import "./styles.scss";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";

export const Photos = ({ photos, name }: { photos: any; name: string }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const currentPhotos = photos && photos.length ? photos : [];
  return (
    <div className={styles.wrap}>
      <div className={styles.miniSlider}>
        {currentPhotos.length > 0 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-thumbs"
          >
            {currentPhotos.map((photo, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    alt={name}
                    src={`https://ohotaktiv.ru${photo}`}
                    width={500}
                    height={500}
                    className={styles.miniImg}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={16}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs]}
        >
          {currentPhotos.length ? (
            currentPhotos.map((photo, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    alt={name}
                    src={`https://ohotaktiv.ru${photo}`}
                    width={500}
                    height={500}
                    data-fancybox="gallery"
                    className={styles.img}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <SwiperSlide>
              <Image
                alt={name}
                src={
                  "http://147.45.153.80/wp-content/uploads/2024/08/no_photo.png"
                }
                width={500}
                height={500}
                className={styles.img}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};
