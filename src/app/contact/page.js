import React from "react";
import { forms , seo } from "@/data/data";

export const metadata = {
    title: `Contact Me | ${seo.title}`,
    description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
    keywords: "contact, get in touch, collaboration, email, message, web developer"
};

function Contact() {
    return (
        <div className="w-full max-w-[700px] mt-32 mx-auto px-4 sm:px-6 lg:px-8">
            <main className="flex flex-col gap-6">
                {/* Contact Form Card */}
                <div className="group p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-[1.02] transition-transform duration-200">
                    
                    {/* Title + Rotating Arrow */}
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-lg">Contact Me</h1>
                        <svg
                            focusable="false"
                            preserveAspectRatio="xMidYMid meet"
                            fill="currentColor"
                            width="16"
                            height="16"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            className="transform transition-transform duration-300 group-hover:rotate-45 ml-1"
                        >
                            <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                        </svg>
                    </div>

                    {/* Form */}
                    <form
                        action={forms.formspreeUrl}
                        method="POST"
                        className="flex flex-col gap-4 mt-3"
                    >
                        <label className="block uppercase text-sm text-base-content/70 font-medium">
                            Full Name
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/20 text-base-content/80 focus:shadow-outline"
                            />
                        </label>

                        <label className="block uppercase text-sm text-base-content/70 font-medium">
                            Email
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/20 text-base-content/80 focus:shadow-outline"
                            />
                        </label>

                        <label className="block uppercase text-sm text-base-content/70 font-medium">
                            Message
                            <textarea
                                name="message"
                                required
                                className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content/20 text-base-content/80 focus:shadow-outline"
                            ></textarea>
                        </label>

                        <button className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/95 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Contact;