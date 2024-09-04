import { IIconComponent } from "@/services/types/types";
import { FC } from "react";

export const ArrowRightIcon: FC<IIconComponent> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M8.96218 6.34326L10.3731 7.76078L7.10285 11.0157L20.7079 11.0294L20.7059 13.0294L7.13811 13.0158L10.3533 16.246L8.93574 17.6569L3.29211 11.9869L8.96218 6.34326Z"
        fill="url(#paint0_linear_11552_22649)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11552_22649"
          x1="2.2395"
          y1="15.3523"
          x2="20.7367"
          y2="13.3939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE2B47" />
          <stop offset="0.3052" stopColor="#FF5348" />
          <stop offset="0.659572" stopColor="#F67453" />
          <stop offset="1" stopColor="#E12943" />
        </linearGradient>
      </defs>
    </svg>
  );
};
