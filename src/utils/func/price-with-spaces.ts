export const priceWithSpaces = (x: number | string | null) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
};
