"use client";

import React from "react";
import { forms } from "@/data/data";

export default function ContactForm() {
  return (
    <div className="group p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-102 transition-transform duration-200 bg-base-100 dark:bg-black">
      <form
        action={forms.formspreeUrl}
        method="POST"
        className="flex flex-col gap-4"
      >
        {/* Full Name */}
        <div>
          <label className="uppercase text-sm text-base-content/80 font-bold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80 focus:outline-none focus:shadow-outline bg-base-100 dark:bg-black dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="uppercase text-sm text-base-content/80 font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80 focus:outline-none focus:shadow-outline bg-base-100 dark:bg-black dark:text-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="uppercase text-sm text-base-content/80 font-bold">
            Message
          </label>
          <textarea
            name="message"
            required
            className="w-full mt-1 p-3 rounded-lg border border-base-content text-base-content/80 focus:outline-none focus:shadow-outline bg-base-100 dark:bg-black dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/95 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}