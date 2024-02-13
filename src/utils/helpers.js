export const formatNumber = (number) =>
  new Intl.NumberFormat("fa-IR").format(number);

export const formatDate = (date) =>
  new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

export const getTokenDuration = () => {
  const expiration = localStorage.getItem("expiration");
  if (!expiration) return null;

  const expirationDate = new Date(expiration);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
};
