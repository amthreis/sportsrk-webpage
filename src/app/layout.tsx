import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/cmp/header";
import { ThemeProvider } from "@/cmp/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "SportsRk",
    description: "A football matchmaking system."
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex justify-between`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="w-full h-full">
                        <Header />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
