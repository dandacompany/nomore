import React from "react";
import Image from "next/image";
import stepData from "../../public/data/step.json";

const FranchiseProcess: React.FC = () => {
	return (
		<div className="flex flex-wrap justify-center">
			{stepData.map((step, index) => (
				<React.Fragment key={step.step}>
					<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center transform transition-transform duration-300 hover:scale-105">
						<div
							className="bg-white p-6 rounded-lg shadow-lg"
							style={{ width: "300px", height: "400px" }}
						>
							<div className="mb-4 inline-block text-white p-2 rounded">
								<Image
									src={`/images/open/step${step.step}.png`}
									alt={`Step ${step.step}`}
									width={100}
									height={100}
								/>
								<p className="mt-2 font-bold">STEP {step.step}</p>
							</div>
							<h3 className="text-xl font-bold mb-2 text-primary">
								{step.title}
							</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					</div>
					{index < stepData.length - 1 && (
						<div className="hidden md:block self-center p-4">
							<svg
								className="w-6 h-6 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

export default FranchiseProcess;
