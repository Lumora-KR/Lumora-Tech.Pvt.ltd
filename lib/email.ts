// lib/email.ts
import emailjs from "emailjs-com";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function sendContactEmail(data: ContactPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS environment variables are missing. Please check your .env.local file and restart the dev server.");
    throw new Error("Missing EmailJS configuration");
  }

  // Initialize EmailJS with the public key (user ID)
  emailjs.init(publicKey);

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: data.name,
      email: data.email,
      company: data.company || "",
      message: data.message,
    },
    publicKey
  );
}
