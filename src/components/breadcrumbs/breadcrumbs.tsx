import { FC } from "react";
import styles from "./breadcrumbs.module.scss";
import { Crumb } from "./crumb/crumb";
import classNames from "classnames";

export const Breadcrumbs: FC<any> = ({ breadcrumbs, className }) => {
  const navClassnames = classNames({
    [className]: className,
    [styles.nav]: true,
  });
  return (
    <nav className={navClassnames}>
      <ul
        className={styles.list}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <Crumb text={"Главная"} link={"/"} isLast={false} index={"0"} />
        {breadcrumbs.map((crumb: any, index: number) => {
          return (
            <Crumb
              key={index}
              text={crumb.text}
              link={crumb.link}
              isLast={crumb.isLast}
              index={`${++index}`}
            />
          );
        })}
      </ul>
    </nav>
  );
};
