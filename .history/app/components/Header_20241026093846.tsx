import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 left-0 right-0 bg-primary text-white z-50">
			<nav className="container mx-auto px-4 py-6 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					<div className="flex items-center space-x-2">
						<Image
							src="/logos/main_logo_white.png"
							alt="logo"
							width={50}
							height={50}
						/>
						<Image
							src="/logos/main_text_logo1_white.png"
							alt="logo"
							width={150}
							height={150}
						/>
					</div>
				</Link>
				<ul className="flex space-x-10 text-xl">
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
				</ul>
			</nav>
		</header>
	);
};

export default Header;
