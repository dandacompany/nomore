import React from "react";
import Image from "next/image";
import ViewMoreButton from "./ViewMoreButton";

const Marketing: React.FC = () => {
	const marketingImages = [
		"/marketing1.jpg",
		"/marketing2.jpg",
		"/marketing3.jpg",
	];

	return (
		<div className="container mx-auto px-4 relative">
			<div className="mb-6">
				<div className="text-center">
					<h2 className="text-6xl font-bold mb-2 py-3 text-primary">
						Marketing
					</h2>
					<p className="text-xl">
						봉천동매운떡볶이에서 진행하고 있는 마케팅을 확인해보세요!
					</p>
				</div>
				<div className="text-right">
					<ViewMoreButton href="/marketing" />
				</div>
			</div>
			<div className="relative h-[400px]">
				<Image
					src={marketingImages[0]}
					alt="Marketing 1"
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
				<Image
					src={marketingImages[1]}
					alt="Marketing 2"
					layout="fill"
					objectFit="cover"
					className="rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3"
				/>
				<Image
					src={marketingImages[2]}
					alt="Marketing 3"
					layout="fill"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
		</div>
	);
};

export default Marketing;
