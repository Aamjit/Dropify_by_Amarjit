import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dropify | Your next file sharing platform",
  applicationName: "Dropify",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ['/apple-touch-icon.png'],
    windows: "/favicon.ico?v=4",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <title>Dropify | Your next file sharing platform</title>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body>
          <Toaster position="top-center" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
