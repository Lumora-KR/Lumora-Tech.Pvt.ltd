// lib/email.ts
import emailjs from "emailjs-com";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function sendContactEmail(data: ContactPayload) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: data.name,
      email: data.email,
      company: data.company || "",
      message: data.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}
