import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function getWhatsAppLink(
  phoneNumber: string,
  message?: string
): string {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        "Hi, I'm interested in Nick Investments. Can we schedule a consultation?"
      );
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export function getTelLink(phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/\s/g, "")}`;
}
