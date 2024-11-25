import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header: React.FC = () => {
	return (
		<header className="bg-primary text-white">
			<nav className="container mx-auto px-4 py-6 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					<div className="flex items-center space-x-2">
						<Image
							src="/logos/main_logo_white.png"
							alt="logo"
							width={30}
							height={30}
						/>
						<Image
							src="/logos/main_text_logo1_white.png"
							alt="logo"
							width={100}
							height={100}
						/>
					</div>
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
