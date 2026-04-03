// src/app/contact/page.js
import { seo } from "@/data/data";
import ContactForm from "./ContactForm";

export const metadata = {
  title: `Contact Me | ${seo.title}`,
  description:
    "Get in touch with me to discuss projects, collaborations, or just to say hello.",
  keywords:
    "contact, get in touch, collaboration, email, message, web developer",
};

export default function ContactPage() {
  return (
    <div className="max-w-[700px] mx-auto mt-5 px-4">
      <ContactForm />
    </div>
  );
}