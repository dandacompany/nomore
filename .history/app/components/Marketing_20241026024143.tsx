import React from "react";
import Image from "next/image";
import Link from "next/link";

const Marketing: React.FC = () => {
	const marketingImages = [
		"/marketing1.jpg",
		"/marketing2.jpg",
		"/marketing3.jpg",
	];

	return (
		<div className="container mx-auto px-4 relative">
			<div className="flex justify-between items-center mb-6">
				<div>
					<h2 className="text-6xl font-bold mb-2 text-center py-3 text-primary">
						Marketing
					</h2>
					<p className="text-xl">
						봉천동매운떡볶이에서 진행하고 있는 마케팅을 확인해보세요!
					</p>
				</div>
				<Link
					href="/marketing"
					className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
				>
					더보기
				</Link>
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
