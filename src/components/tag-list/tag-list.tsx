"use client";

import { v4 as uuidv4 } from "uuid";
import styles from "./tag-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

interface ITagList {
  className?: string;
  tags: ITag[];
}

interface ITag {
  name: string;
  url: string;
}

export const TagList: FC<ITagList> = ({ tags, className }) => {
  const tagListClassNames = classNames({
    [styles.tagList]: true,
    [className!]: className,
  });
  return (
    <div className={tagListClassNames}>
      <Swiper modules={[FreeMode]} slidesPerView={"auto"} spaceBetween={16}>
        {tags.map((tag) => {
          return (
            <SwiperSlide className={styles.tagItem} key={uuidv4()}>
              <Link className={styles.tagLink} href={`/catalog/${tag.code}`}>
                {tag.name}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
