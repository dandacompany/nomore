"use client";

import React, { useState } from "react";
import faqData from "../../public/data/faq.json";

const FranchiseFAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
		}
	};

	return (
		<div className="max-w-2xl mx-auto">
			<h2 className="text-3xl font-bold mb-6 text-primary">자주 묻는 질문</h2>
			{faqData.map((faq, index) => (
				<div key={index} className="mb-4">
					<button
						className="flex justify-between items-center w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
						onClick={() => toggleFAQ(index)}
					>
						<span className="font-semibold">{faq.question}</span>
						<span className="text-xl">{openIndex === index ? "-" : "+"}</span>
					</button>
					{openIndex === index && (
						<div className="p-4 bg-white border border-gray-200">
							<p>{faq.answer}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default FranchiseFAQ;
