export const setUrlFromSelectedFilters = (
  router: any,
  choosedSort?: string
) => {
  const url: any = typeof window !== "undefined" && window.location;
  const checkboxes = document.querySelectorAll(".checkbox:checked");
  let choosedFilters: any = {};
  checkboxes.forEach((checkbox: any) => {
    if (!choosedFilters[checkbox.getAttribute("data-filter")]) {
      choosedFilters[checkbox.getAttribute("data-filter")] = [];
    }
    choosedFilters[checkbox.getAttribute("data-filter")].push(checkbox.value);
  });
  if (choosedSort) {
    choosedFilters["sortby"] = [];
    choosedFilters["sortby"].push(choosedSort);
  }
  const neededUrl = `${url.pathname}${
    Object.keys(choosedFilters).length > 0 ? `?` : ``
  }${Object.keys(choosedFilters)
    .map((k) => `${k}=${choosedFilters[k].map((v: any) => v).join("-")}`)
    .join("&")}`;
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return router.push(neededUrl, undefined, { shallow: true, scroll: false });
};
