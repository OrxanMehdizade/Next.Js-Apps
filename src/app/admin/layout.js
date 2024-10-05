"use client";

import SideMenuBar from "@/components/SideMenu";
import "./../../app/globals.css";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-gray-900 text-white">
                <div className="flex h-screen">
                    <SideMenuBar />
                    <main className="flex-grow p-6 bg-gray-800">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
