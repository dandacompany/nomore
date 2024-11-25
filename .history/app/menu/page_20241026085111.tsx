"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "../components/Layout";
import MenuTab from "../components/MenuTab";
import MenuCard from "../components/MenuCard";
import menuData from "../../public/data/menu.json";

const MenuPage: React.FC = () => {
	const searchParams = useSearchParams();
	const initialCategory = searchParams.get("category") || "전체메뉴";
	const [activeCategory, setActiveCategory] = useState(initialCategory);
	const [displayedMenus, setDisplayedMenus] = useState(
		menuData.flatMap((category) => category.menu)
	);

	useEffect(() => {
		if (activeCategory === "전체메뉴") {
			setDisplayedMenus(menuData.flatMap((category) => category.menu));
		} else {
			const filteredMenus =
				menuData.find((category) => category.category === activeCategory)
					?.menu || [];
			setDisplayedMenus(filteredMenus);
		}
	}, [activeCategory]);

	useEffect(() => {
		const category = searchParams.get("category");
		if (category) {
			setActiveCategory(category);
		}
	}, [searchParams]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Layout>
				<div className="container mx-auto px-4 py-8 flex flex-col gap-3 items-start">
					<h1 className="text-4xl font-bold mb-8 text-black text-left">
						{activeCategory}
					</h1>
					<MenuTab
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
						{displayedMenus.map((menu, index) => (
							<MenuCard key={index} menu={menu} />
						))}
					</div>
				</div>
			</Layout>
		</Suspense>
	);
};

export default MenuPage;