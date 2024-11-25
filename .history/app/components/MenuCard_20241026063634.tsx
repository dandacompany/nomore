import React from "react";
import Image from "next/image";

interface MenuCardProps {
	menu: {
		title: string;
		description: string;
		price: number;
		image: string;
		signature?: boolean;
	};
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
			<div className="relative">
				<Image
					src={menu.image}
					alt={menu.title}
					width={300}
					height={200}
					layout="responsive"
					className="object-cover"
				/>
				{menu.signature && (
					<div className="absolute top-2 left-2 bg-primary text-secondary px-2 py-1 rounded-full text-sm font-bold">
						시그니처
					</div>
				)}
			</div>
			<div className="p-4 text-center">
				<h3 className="text-xl font-bold mb-2">{menu.title}</h3>
				<p className="text-gray-600 mb-2">{menu.description}</p>
				<p className="text-primary font-bold">
					{menu.price.toLocaleString()}원
				</p>
			</div>
		</div>
	);
};

export default MenuCard;
