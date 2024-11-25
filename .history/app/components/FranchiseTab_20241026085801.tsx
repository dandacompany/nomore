import React from "react";

interface FranchiseTabProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

const FranchiseTab: React.FC<FranchiseTabProps> = ({
	activeTab,
	setActiveTab,
}) => {
	const tabs = [
		"창업문의",
		"창업절차",
		"창업비용 및 혜택",
		"마케팅 및 스페셜",
		"창업 FAQ",
	];

	return (
		<div className="flex justify-start space-x-4">
			{tabs.map((tab) => (
				<button
					key={tab}
					className={`px-4 py-2 rounded-full transition-colors ${
						activeTab === tab
							? "bg-secondary text-primary"
							: "bg-white text-black hover:bg-gray-100"
					}`}
					onClick={() => setActiveTab(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	);
};

export default FranchiseTab;
