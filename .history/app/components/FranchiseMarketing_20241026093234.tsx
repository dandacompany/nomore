import React from "react";
import Image from "next/image";
import marketingData from "../../public/data/marketing.json";
import copyData from "../../public/data/copy.json";
const FranchiseMarketing: React.FC = () => {
	return (
		<div className="flex flex-col">
			<div className="text-right xl:relative">
				<Image
					src="/images/concept/tteokbokki.png"
					alt="marketing"
					width={700}
					height={700}
					className="top-0 left-0 animate-fadeIn xl:absolute"
				/>
				<h1 className="text-4xl font-bold text-primary">Bong Mae Tteok</h1>
				<p className="mt-4 text-lg leading-relaxed whitespace-pre-line">
					{copyData.marketing.split("\n").map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br />
						</React.Fragment>
					))}
				</p>
			</div>
			<div className="mt-8">
				<h2 className="text-4xl font-bold text-primary py-4">Marketing</h2>
				<p className="text-gray-600">
					봉막에서 진행하고 있는 마케팅을 확인해보세요.
				</p>
				<table className="w-full mt-4 text-left border-collapse">
					<thead></thead>
					<tbody>
						{marketingData.map((item, index) => (
							<tr key={index} className="hover:bg-gray-100">
								<td className="border-b border-gray-200 py-2">{item.title}</td>
								<td className="border-b border-gray-200 py-2">
									{item.description}
								</td>
								<td className="border-b border-gray-200 py-2">{item.date}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex justify-center mt-4">
					<button className="px-3 py-1 mx-1 text-white bg-gray-500 rounded">
						1
					</button>
					<button className="px-3 py-1 mx-1 text-gray-500 bg-white border border-gray-300 rounded">
						2
					</button>
					<button className="px-3 py-1 mx-1 text-gray-500 bg-white border border-gray-300 rounded">
						3
					</button>
					<button className="px-3 py-1 mx-1 text-gray-500 bg-white border border-gray-300 rounded">
						4
					</button>
				</div>
			</div>
		</div>
	);
};

export default FranchiseMarketing;
