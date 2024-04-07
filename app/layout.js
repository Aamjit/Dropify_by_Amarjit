import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
// import GlobalApi from "./_utils/GlobalApi";

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

// GlobalApi.useFetch();

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ scrollBehavior: "smooth" }}>
			<body>
				<Toaster
					position="top-center"
					reverseOrder={false}
					gutter={8}
					containerClassName=""
					toastOptions={{
						className: "",
						duration: 3000,
						style: {
							background: "#363636",
							color: "#fff",
						},
					}}
				/>
				<ClerkProvider
					signInUrl="/sign-in"
					supportEmail="amarjityanglem563@gmail.com"
				>
					{/* <SignedIn> */}
					{children}
					{/* </SignedIn> */}
				</ClerkProvider>
			</body>
		</html>
	);
}
