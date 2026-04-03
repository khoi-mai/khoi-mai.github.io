import "./globals.css";
import Navbar from "./components/Navbar";
import { seo } from "@/data/data";

export const metadata = {
    title: `${seo.title}`,
    icons: {
        icon: [{ url: "/favicon.ico" }],
    },
    description: `${seo.description}`,
    keywords: `${seo.keywords}`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased overflow-auto">
                {/* Navbar: sticky at top, offset right, with top margin */}
                <div className="w-full fixed top-0 z-50 flex justify-end mt-4 pr-4">
                    <div className="w-[700px]">
                        <Navbar />
                    </div>
                </div>

                {/* Main content container: max width 1200px, centered, with padding */}
                <div className="max-w-[1200px] mx-auto px-4 mt-24">
                    {children}
                </div>
            </body>
        </html>
    );
}