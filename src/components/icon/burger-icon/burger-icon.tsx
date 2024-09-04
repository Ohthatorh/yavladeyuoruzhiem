import { FC } from "react";

export const BurgerIcon: FC<{ isActive: boolean }> = ({ isActive }) => {
  return isActive ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.22517 4.81108C5.83465 4.42056 5.20148 4.42056 4.81096 4.81108C4.42044 5.20161 4.42044 5.83477 4.81096 6.2253L10.5857 12L4.81102 17.7747C4.4205 18.1652 4.42049 18.7984 4.81102 19.1889C5.20154 19.5794 5.83471 19.5794 6.22523 19.1889L11.9999 13.4142L17.7746 19.1889C18.1651 19.5794 18.7983 19.5794 19.1888 19.1889C19.5793 18.7984 19.5793 18.1652 19.1888 17.7747L13.4141 12L19.1889 6.2253C19.5794 5.83477 19.5794 5.20161 19.1889 4.81108C18.7983 4.42056 18.1652 4.42056 17.7746 4.81108L11.9999 10.5858L6.22517 4.81108Z"
        fill="#ffffff"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
        fill="#ffffff"
      />
      <path
        d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
        fill="#ffffff"
      />
      <path
        d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
        fill="#ffffff"
      />
    </svg>
  );
};
