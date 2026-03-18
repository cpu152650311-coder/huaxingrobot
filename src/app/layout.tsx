import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	metadataBase: new URL("https://aomanbot.com"),
	title: "AOMAN FUTURE - Humanoid & Smart Service Robots",
	description: "AOMAN FUTURE - Global leader in humanoid robots and intelligent service robots. Explore CADEBOT, CLEINBOT, CRUZR solutions.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "AOMAN FUTURE - Humanoid & Smart Service Robots",
		description: "AOMAN FUTURE - Global leader in humanoid robots and intelligent service robots. Explore CADEBOT, CLEINBOT, CRUZR solutions.",
		url: "/",
		siteName: "AOMAN FUTURE",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "AOMAN FUTURE - Humanoid & Smart Service Robots",
		description: "AOMAN FUTURE - Global leader in humanoid robots and intelligent service robots. Explore CADEBOT, CLEINBOT, CRUZR solutions.",
	},
	icons: [{ rel: "icon", url: "/favicon.png", type: "image/png" }],
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="bg-[#F8FAFB] overflow-x-hidden font-[Inter,sans-serif]">
				{children}
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}
