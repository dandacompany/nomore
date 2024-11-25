import React from "react";
import Image from "next/image";
import marketingData from "../../public/data/copy.json";

const FranchiseMarketing: React.FC = () => {
	return (
		<div className="text-right relative">
			<Image
				src="/images/concept/tteokbokki.png"
				alt="marketing"
				width={600}
				height={600}
				className="absolute top-0 left-0"
			/>
			<p className="mt-4 text-lg leading-relaxed whitespace-pre-line">
				{marketingData.marketing}
			</p>
		</div>
	);
};

export default FranchiseMarketing;
