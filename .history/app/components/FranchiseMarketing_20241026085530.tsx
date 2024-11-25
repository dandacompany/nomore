import React from "react";
import Image from "next/image";
import marketingData from "../../public/data/copy.json";

const FranchiseMarketing: React.FC = () => {
	return (
		<div className="text-right relative">
			<Image
				src="/images/concept/tteokbokki.png"
				alt="marketing"
				width={700}
				height={700}
				className="top-0 left-0 animate-fadeIn md:absolute"
			/>
			<h1 className="text-4xl font-bold text-primary">Bong Mae Tteok</h1>
			<p className="mt-4 text-lg leading-relaxed whitespace-pre-line">
				{marketingData.marketing.split("\n").map((line, index) => (
					<React.Fragment key={index}>
						{line}
						<br />
					</React.Fragment>
				))}
			</p>
		</div>
	);
};

export default FranchiseMarketing;
