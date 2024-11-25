import React from "react";
import Image from "next/image";
const FranchiseMarketing: React.FC = () => {
	return (
		<div className="text-right">
			<Image
				src="/images/marketing.png"
				alt="marketing"
				width={1000}
				height={1000}
			/>
		</div>
	);
};

export default FranchiseMarketing;