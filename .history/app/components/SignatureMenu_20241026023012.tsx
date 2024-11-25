import React from "react";
import Image from "next/image";

const SignatureMenu: React.FC = () => {
	const menus = [
		{ name: "봉매떡볶이", image: "/images/menu1.png" },
		{ name: "로제떡볶이", image: "/images/menu2.png" },
		{ name: "바질크림떡볶이", image: "/images/menu3.png" },
		{ name: "버터밀크떡볶이", image: "/images/menu4.png" },
	];

	return (
		<div className="container mx-auto px-4">
			<h2 className="text-6xl font-bold mb-2 text-center py-3 text-primary">
				Signature
			</h2>
			<p className="text-2xl mb-6 text-center pb-5">
				봉천동 매운 떡볶이에서 소개하는 시그니처 메뉴를 만나보세요
			</p>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
				{menus.map((menu, index) => (
					<div
						key={index}
						className="text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
					>
						<Image
							src={menu.image}
							alt={menu.name}
							width={200}
							height={200}
							className="rounded-lg mb-2"
						/>
						<p className="font-semibold">{menu.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SignatureMenu;
