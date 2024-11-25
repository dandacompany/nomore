"use client";

import React, { useState, useEffect, useRef } from "react";
import ViewMoreButton from "./ViewMoreButton";
import videos from "../../public/data/videos.json";

const Marketing: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const videoArray = videos;
	const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

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
			/^.*(youtu.be\/|v\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11
			? `https://www.youtube.com/embed/${match[2]}?enablejsapi=1`
			: null;
	};

	useEffect(() => {
		iframeRefs.current.forEach((iframe, index) => {
			if (iframe) {
				const player = iframe.contentWindow;
				if (index === currentSlide) {
					player?.postMessage(
						'{"event":"command","func":"playVideo","args":""}',
						"*"
					);
				} else {
					player?.postMessage(
						'{"event":"command","func":"pauseVideo","args":""}',
						"*"
					);
				}
			}
		});
	}, [currentSlide]);

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
				<div className="absolute right-0">
					<ViewMoreButton href="/marketing" />
				</div>
			</div>
			<div className="relative overflow-visible my-[100px]">
				<div
					className="flex items-center transition-transform duration-300 space-x-4"
					style={{ transform: `translateX(-${(currentSlide - 1) * 33.33}%)` }}
				>
					{videoArray.map((video, index) => {
						const embedUrl = getYouTubeEmbedUrl(video.url);
						const isCurrent = index === currentSlide;
						return (
							<div
								key={index}
								className={`min-w-1/3 flex-shrink-0 w-1/3 aspect-video transition-transform duration-300 ${
									isCurrent
										? "z-10 scale-125 opacity-100"
										: "scale-100 opacity-50"
								} ${isCurrent ? "relative -top-4" : ""}`}
							>
								<iframe
									ref={(el) => (iframeRefs.current[index] = el)}
									width="100%"
									height="100%" // 16:9 aspect ratio
									src={embedUrl}
									title={video.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="rounded-t-lg"
									style={{ pointerEvents: isCurrent ? "auto" : "none" }}
								></iframe>
								<div className="bg-primary text-white p-4 rounded-b-lg relative">
									<p className="font-bold">{video.author}</p>
									<p className="text-sm truncate">{video.title}</p>
								</div>
								{isCurrent && (
									<>
										<button
											onClick={prevSlide}
											className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary text-primary p-2 rounded-r-lg"
										>
											&#10094;
										</button>
										<button
											onClick={nextSlide}
											className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-primary p-2 rounded-l-lg"
										>
											&#10095;
										</button>
									</>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Marketing;
