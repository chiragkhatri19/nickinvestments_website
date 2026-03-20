export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  investment: string;
  message?: string;
}

export async function submitContactForm(data: ContactFormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true, message: "Thank you! We will contact you shortly." };
}
