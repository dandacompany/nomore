import React from "react";
import Link from "next/link";
import Image from "next/image";
const SubMenuBox: React.FC = () => {
	const subMenus = [
		{
			title: "매장찾기",
			description: "봉천동매운떡볶이 매장을 찾아보세요",
			link: "/stores",
		},
		{
			title: "브랜드 소개",
			description: "봉천동매운떡볶이를 소개합니다.",
			link: "/about",
		},
		{
			title: "창업문의",
			description: "봉천동매운떡볶이와 함께 할\n점주님을 모집합니다.",
			link: "/franchise",
		},
	];

	return (
		<div className="flex flex-wrap justify-center text-center items-center h-[500px]">
			{subMenus.map((menu, index) => (
				<Link
					href={menu.link}
					key={index}
					className="flex-1 bg-secondary text-primary p-6 hover:bg-opacity-90 transition duration-300 flex flex-col justify-center items-center border-r border-tertiary-300 h-full gap-3"
				>
					<Image src="/logos/main_logo.png" alt="logo" width={50} height={50} />
					<h3 className="text-4xl font-bold py-3">{menu.title}</h3>
					<p className="text-xl text-black whitespace-pre-line">
						{menu.description}
					</p>
				</Link>
			))}
		</div>
	);
};

export default SubMenuBox;
