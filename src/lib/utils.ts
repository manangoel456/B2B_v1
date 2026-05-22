export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function generateWhatsAppUrl(message: string, phone: string = "917027572757"): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
