import React from "react";

interface MenuTabProps {
	activeCategory: string;
	setActiveCategory: (category: string) => void;
}

const MenuTab: React.FC<MenuTabProps> = ({
	activeCategory,
	setActiveCategory,
}) => {
	const categories = ["전체메뉴", "떡볶이", "사이드", "토핑", "세트"];

	return (
		<div className="flex justify-center space-x-4">
			{categories.map((category) => (
				<button
					key={category}
					className={`px-4 py-2 rounded-full transition-colors ${
						activeCategory === category
							? "bg-secondary text-primary"
							: "bg-white text-black hover:bg-gray-100"
					}`}
					onClick={() => setActiveCategory(category)}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default MenuTab;
