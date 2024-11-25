import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="bg-primary text-white">
			<nav className="container mx-auto px-4 py-6 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					봉천동 매운떡볶이
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link href="/menu">메뉴</Link>
					</li>
					<li>
						<Link href="/franchise">창업안내</Link>
					</li>
					<li>
						<Link href="/stores">매장안내</Link>
					</li>
					<li>
						<Link href="/media">미디어</Link>
					</li>
					<li>
						<Link href="/contact">문의</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
