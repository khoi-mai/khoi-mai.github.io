"use client";

import { forms, seo } from "@/data/data";

export const metadata = {
  title: `Contact Me | ${seo.title}`,
  description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
  keywords: "contact, get in touch, collaboration, email, message, web developer"
};

function Contact() {
  return (
    <div className="md:w-[700px] w-[100%] mt-5 p-4">
      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
          Contact Me
        </h1>

        {/* Contact form as a project card */}
        <div className="group p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-102 transition-transform duration-200">
          <form
            action={forms.formspreeUrl}
            method="POST"
            className="flex flex-col gap-3"
          >
            <div>
              <label className="uppercase text-sm text-base-content/80 font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label className="uppercase text-sm text-base-content/80 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label className="uppercase text-sm text-base-content/80 font-bold">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80 focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/95 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Contact;