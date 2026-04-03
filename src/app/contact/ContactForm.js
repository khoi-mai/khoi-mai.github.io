"use client";

import { forms } from "@/data/data";

export default function ContactForm() {
  return (
    <div className="group p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-[1.02] transition-all duration-200">
      <form
        action={forms.formspreeUrl}
        method="POST"
        className="flex flex-col gap-3"
      >
        {/* Title (matches project card spacing) */}
        <h1 className="text-lg font-semibold">Contact Me</h1>

        {/* Full Name */}
        <div>
          <span className="uppercase text-xs text-base-content/70 font-medium">
            Full Name
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 p-3 rounded-lg border border-base-content/30 bg-transparent text-base-content focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <span className="uppercase text-xs text-base-content/70 font-medium">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 p-3 rounded-lg border border-base-content/30 bg-transparent text-base-content focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <span className="uppercase text-xs text-base-content/70 font-medium">
            Message
          </span>
          <textarea
            name="message"
            required
            className="w-full mt-1 p-3 rounded-lg border border-base-content/30 bg-transparent text-base-content focus:outline-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 text-sm font-semibold bg-base-content text-base-100 py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}