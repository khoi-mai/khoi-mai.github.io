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
    <div className="md:w-[700px] w-[100%] mt-5 p-4">
      <ContactForm />
    </div>
  );
}