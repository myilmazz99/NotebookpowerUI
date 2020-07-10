const numberFormat = (number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "TRY",
  }).format(number);

export default numberFormat;
