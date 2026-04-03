import { about, socials } from "@/data/data";
import LinkedInIcon from "./icons/LinkedInIcon";
import IMDBIcon from "./icons/IMDBIcon";
import VimeoIcon from "./icons/VimeoIcon";

export default function Profile() {
    return (
        <>
            <img
                src="https://i.imgur.com/zjGPTRC.jpeg"
                className="w-[70px] h-[70px] rounded-[50%] object-cover object-center"
                alt={`${about.name}'s profile`}
            />
            <div className="flex gap-[5px] items-center mt-1">
                <h1 className="text-2xl font-semibold">{about.name}</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                >
                    <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
                <p className="text-base text-base-content/60">{about.role} // </p>
                <p className="underline cursor-pointer text-base-content/90">Solo</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center mt-3 gap-3">
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="w-5 h-5 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" />
                </a>
                <a href={socials.imdb} target="_blank" rel="noopener noreferrer">
                    <IMDBIcon className="w-5 h-5 text-gray-800 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 cursor-pointer" />
                </a>
                <a href={socials.vimeo} target="_blank" rel="noopener noreferrer">
                    <VimeoIcon className="w-5 h-5 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer" />
                </a>
            </div>
        </>
    );
}