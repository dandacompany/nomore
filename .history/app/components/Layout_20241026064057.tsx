import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow pt-[98px]">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
