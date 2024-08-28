export function formatPrice(price: string) {
  const numPrice = Number(price);
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(numPrice);
  return formatted;
}
