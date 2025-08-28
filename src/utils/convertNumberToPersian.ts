export const convertNumberToPersian = (input: string | number): string => {
  return String(input).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
};
