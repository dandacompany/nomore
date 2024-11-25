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
				className="absolute top-0 left-0 transform transition-transform duration-1000 ease-in-out translate-x-full opacity-0 animate-slide-in"
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

// Tailwind CSS 추가
<style jsx global>{`
	@keyframes slide-in {
		0% {
			transform: translateX(100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	.animate-slide-in {
		animation: slide-in 1s forwards;
	}
`}</style>;
