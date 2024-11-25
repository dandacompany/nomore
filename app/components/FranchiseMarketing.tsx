import React, { useState } from "react";
import Image from "next/image";
import marketingData from "../../public/data/marketing.json";
import copyData from "../../public/data/copy.json";

const FranchiseMarketing: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < Math.ceil(marketingData.length / itemsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = marketingData.slice(indexOfFirstItem, indexOfLastItem);

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
				<table className="w-full mt-4 text-left border-collapse">
					<tr>
						<th className="border-b-2 border-gray-300 py-2" colSpan={3}>
							봉막에서 진행하고 있는 마케팅을 확인해보세요.
						</th>
					</tr>
					<tbody>
						{currentItems.map((item, index) => (
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
					<button
						onClick={handlePreviousPage}
						className="px-3 py-1 mx-1 text-gray-500 bg-white border border-gray-300 rounded"
						aria-label="Previous Page"
					>
						&lt;
					</button>
					{Array.from(
						{ length: Math.ceil(marketingData.length / itemsPerPage) },
						(_, i) => (
							<button
								key={i}
								onClick={() => handlePageChange(i + 1)}
								className={`px-3 py-1 mx-1 ${
									currentPage === i + 1
										? "text-white bg-gray-500"
										: "text-gray-500 bg-white"
								} border border-gray-300 rounded`}
								aria-label={`Page ${i + 1}`}
							>
								{i + 1}
							</button>
						)
					)}
					<button
						onClick={handleNextPage}
						className="px-3 py-1 mx-1 text-gray-500 bg-white border border-gray-300 rounded"
						aria-label="Next Page"
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	);
};

export default FranchiseMarketing;
