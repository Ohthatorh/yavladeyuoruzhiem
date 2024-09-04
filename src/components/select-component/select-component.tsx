import { setUrlFromSelectedFilters } from "@/utils/func/set-url-from-selected-filters";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Select from "react-select";

export const SelectComponent: FC = ({ sortOptions, placeholder }) => {
  const router = useRouter();
  const colourStyles = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: "transparent",
      borderColor: "transparent",
    }),
    placeholder: (styles) => ({ ...styles, color: "white" }),
    singleValue: (styles) => ({ ...styles, color: "white" }),
    container: (styles) => ({ ...styles, backgroundColor: "transparent" }),
  };
  return (
    <Select
      placeholder={placeholder}
      options={sortOptions}
      styles={colourStyles}
      onChange={(item: any) => setUrlFromSelectedFilters(router, item.value)}
      defaultValue={sortOptions.find((item) => item.isChoosed)}
    />
  );
};
