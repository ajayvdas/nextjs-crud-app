import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Next JS CRUD App",
    description: "A CRUD application built with Next JS App Router",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="min-h-screen bg-gray-50">
                    <header className="bg-white shadow-sm border-b">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center py-6">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    <Link href="/" className="hover:text-blue-600 transition-colors">
                                        Posts CRUD App
                                    </Link>
                                </h1>
                                <a
                                    href="/posts/new"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Create New Post
                                </a>
                            </div>
                        </div>
                    </header>

                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>

                    <footer className="bg-white border-t mt-16">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <p className="text-center text-gray-600">
                                Built with Next.js App Router and JSONPlaceholder API
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
