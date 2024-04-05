import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Dropify | Your next file sharing platform",
	applicationName: "Dropify",
	referrer: "origin-when-cross-origin",
	icons: {
		icon: ["/favicon.png?v=4"],
		apple: ["/apple-touch-icon.png"],
		windows: "/favicon.png?v=4",
	},
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en" style={{ scrollBehavior: "smooth" }}>
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}
