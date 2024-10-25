"use client";
import classes from "./layout.module.css";
import localFont from "next/font/local";
import { Layout } from "antd";
import "./globals.css"; 
import NavBar from "@/components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";


const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const { Content } = Layout; 

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AntdRegistry>
					<Layout className={classes.layout}>
						<NavBar />
						<Content className={classes.content}>{children}</Content>
					</Layout>
				</AntdRegistry>
			</body>
		</html>
	);
}
