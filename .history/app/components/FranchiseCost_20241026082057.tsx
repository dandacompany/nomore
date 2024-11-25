import React, { useState } from "react";
import billingData from "../../public/data/billing.json";
import billingCommonData from "../../public/data/billing-common.json";

const FranchiseCost: React.FC = () => {
	const [activeTab, setActiveTab] = useState(
		`${billingData[0].type} ${billingData[0].size}`
	);

	const renderTable = (data: (typeof billingData)[0]) => (
		<table className="w-full border-collapse border border-gray-300 mt-4 text-center">
			<thead>
				<tr className="bg-secondary text-primary">
					<th className="border border-gray-300 p-2">항목</th>
					<th className="border border-gray-300 p-2">비고</th>
					<th className="border border-gray-300 p-2">
						비용<span className="text-xs">(단위: 만원)</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{data.details.map((item, index) => (
					<tr key={index} className="text-black">
						<td className="border border-gray-300 p-2">{item.category}</td>
						<td className="border border-gray-300 p-2">{item.note}</td>
						<td className="border border-gray-300 p-2">
							{item.cost.toLocaleString()}만원
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);

	return (
		<div className="container mx-auto px-4">
			<div className="flex justify-center space-x-4 mb-6">
				{billingData.map((data, index) => (
					<button
						key={index}
						className={`px-4 py-2 rounded-full transition-colors ${
							activeTab === `${data.type} ${data.size}`
								? "bg-secondary text-primary"
								: "bg-primary text-white hover:bg-opacity-90"
						}`}
						onClick={() => setActiveTab(`${data.type} ${data.size}`)}
					>
						{data.type} {data.size}
					</button>
				))}
			</div>

			{billingData.map((data, index) => (
				<div
					key={index}
					className={
						activeTab === `${data.type} ${data.size}` ? "block" : "hidden"
					}
				>
					<h2 className="text-2xl font-bold mb-4">
						{data.type} ({data.size})
					</h2>
					{renderTable(data)}
				</div>
			))}

			<div className="mt-8 bg-gray-100 p-4 rounded-lg">
				<h3 className="text-xl font-bold mb-2">공통 사항</h3>
				<ul className="list-disc list-inside">
					{billingCommonData.map((item, index) => (
						<li key={index} className="mb-2">
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FranchiseCost;
