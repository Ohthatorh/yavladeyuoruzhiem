import { IIconComponent } from "@/services/types/types";
import { FC } from "react";

export const SearchIcon: FC<IIconComponent> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <g>
          <g>
            <circle
              cx="10.6666"
              cy="11.1666"
              r="5.66689"
              stroke="#1D1D1D"
              strokeWidth="2"
            />
            <path
              d="M14.8337 15.3337L19.0003 19.5003"
              stroke="#1D1D1D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
