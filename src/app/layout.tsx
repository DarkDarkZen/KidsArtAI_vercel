import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import { cn } from "~/lib/utils";
import { CSPostHogProvider } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kids Art AI",
  description: "Kids Art AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
          onLoad={() => {
            // Initialize Telegram Web App
            if (typeof window !== "undefined" && window.Telegram?.WebApp) {
              window.Telegram.WebApp.ready();
            }
          }}
        />
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </body>
    </html>
  );
}
