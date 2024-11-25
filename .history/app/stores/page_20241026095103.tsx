"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import StoreList from "../components/StoreList";
import GoogleMap from "../components/GoogleMap";
import storeData from "../../public/data/store.json";

const StorePage: React.FC = () => {
	const [selectedStore, setSelectedStore] = useState(storeData[0]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredStores, setFilteredStores] = useState(storeData);

	useEffect(() => {
		const filtered = storeData.filter(
			(store) =>
				store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				store.address.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredStores(filtered);
	}, [searchTerm]);

	return (
		<Layout>
			<div className="flex flex-col md:flex-row h-[calc(100vh-98px)]">
				<div className="w-full md:w-1/5 p-4 overflow-y-auto">
					<h1 className="text-2xl font-bold mb-4">매장 찾기</h1>
					<input
						type="text"
						placeholder="매장명 또는 주소 검색"
						className="w-full p-2 border rounded mb-4"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<StoreList
						stores={filteredStores}
						selectedStore={selectedStore}
						onSelectStore={setSelectedStore}
					/>
				</div>
				<div className="w-full md:w-4/5">
					<GoogleMap selectedStore={selectedStore} stores={filteredStores} />
				</div>
			</div>
		</Layout>
	);
};

export default StorePage;
