"use client";

import React, { useState } from "react";
import ViewMoreButton from "./ViewMoreButton";
import videos from "../../public/data/videos.json";

const Marketing: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const videoArray = videos;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % videoArray.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + videoArray.length) % videoArray.length
		);
	};

	const getYouTubeEmbedUrl = (url: string) => {
		const regExp =
			/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11
			? `https://www.youtube.com/embed/${match[2]}`
			: null;
	};

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
			<div className="relative h-[400px] overflow-hidden">
				<div
					className="flex transition-transform duration-300"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{videoArray.map((video, index) => {
						const embedUrl = getYouTubeEmbedUrl(video.url);
						return (
							<div key={index} className="min-w-full flex-shrink-0">
								<iframe
									width="100%"
									height="56.25%" // 16:9 aspect ratio
									src={embedUrl}
									title={video.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="rounded-t-lg"
								></iframe>
								<div className="bg-primary text-white p-4 rounded-b-lg">
									<p className="font-bold">{video.author}</p>
									<p className="text-sm truncate">{video.title}</p>
								</div>
							</div>
						);
					})}
				</div>
				<button
					onClick={prevSlide}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-r-lg"
				>
					&#10094;
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-l-lg"
				>
					&#10095;
				</button>
			</div>
		</div>
	);
};

export default Marketing;
