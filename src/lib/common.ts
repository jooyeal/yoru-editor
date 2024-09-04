export const isEmpty = (value: any) => {
  if (value === undefined || value === null || value === "") return true;
  return false;
};

export const isNumber = (value: any): value is number => {
  return typeof value === "number" && !isNaN(value);
};
