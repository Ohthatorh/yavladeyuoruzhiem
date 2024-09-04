import { IIconComponent } from "@/services/types/types";
import { FC } from "react";

export const GeoIcon: FC<IIconComponent> = ({ className }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <g>
          <path
            id="Ellipse 181"
            d="M19 10C19 13.0057 17.4887 15.7834 15.7366 17.8541C14.8676 18.8811 13.9648 19.7031 13.2158 20.26C12.8403 20.5392 12.518 20.741 12.2704 20.8679C12.1324 20.9387 12.0447 20.972 12 20.9875C11.9553 20.972 11.8676 20.9387 11.7296 20.8679C11.482 20.741 11.1597 20.5392 10.7842 20.26C10.0352 19.7031 9.13244 18.8811 8.26339 17.8541C6.51132 15.7834 5 13.0057 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z"
            stroke="#F6F6F6"
            strokeWidth="2"
          />
          <circle
            id="Ellipse 182"
            cx="12"
            cy="10"
            r="3"
            stroke="#F6F6F6"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};
