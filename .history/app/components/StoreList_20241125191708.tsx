import React from "react";
import { Store } from "../types/store";

interface StoreListProps {
	stores: Store[];
	selectedStore: Store;
	onSelectStore: (store: Store) => void;
}

const StoreList: React.FC<StoreListProps> = ({
	stores,
	selectedStore,
	onSelectStore,
}) => {
	return (
		<div>
			<p className="mb-2">검색결과: {stores.length}개</p>
			{stores.map((store, index) => (
				<div
					key={index}
					className={`p-4 cursor-pointer ${
						selectedStore.name === store.name ? "bg-gray-100" : ""
					}`}
					onClick={() => onSelectStore(store)}
				>
					<h2 className="font-bold">{store.name}</h2>
					<p>{store.address}</p>
					<p>{store.phone}</p>
					<p>{store.hours}</p>
					<hr className="my-2" />
				</div>
			))}
		</div>
	);
};

export default StoreList;
