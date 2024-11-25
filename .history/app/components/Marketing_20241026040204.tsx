"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ViewMoreButton from "./ViewMoreButton";
import videos from "../../public/data/videos.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Marketing: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

	const getYouTubeEmbedUrl = (url: string) => {
		const regExp =
			/^.*(youtu.be\/|v\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11
			? `https://www.youtube.com/embed/${match[2]}?enablejsapi=1`
			: null;
	};

	const handleSlideChange = (swiper: any) => {
		setActiveIndex(swiper.realIndex);
		videoRefs.current.forEach((video, index) => {
			if (video && index !== swiper.realIndex) {
				video.contentWindow?.postMessage(
					'{"event":"command","func":"pauseVideo","args":""}',
					"*"
				);
			}
		});
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
				<div className="absolute right-0">
					<ViewMoreButton href="/marketing" />
				</div>
			</div>
			<div className="relative overflow-visible my-[100px]">
				<Swiper
					modules={[Navigation, EffectCoverflow]}
					effect="coverflow"
					grabCursor={true}
					centeredSlides={true}
					slidesPerView="3"
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					loop={true}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					onSlideChange={handleSlideChange}
					className="flex items-center"
				>
					{videos.map((video, index) => {
						const embedUrl = getYouTubeEmbedUrl(video.url);
						return (
							<SwiperSlide
								key={index}
								className="flex-shrink-0 w-full aspect-video transition-transform duration-300 ease-in-out"
							>
								<iframe
									ref={(el) => (videoRefs.current[index] = el)}
									width="100%"
									height="100%"
									src={embedUrl}
									title={video.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className={`rounded-t-lg ${
										activeIndex === index ? "" : "pointer-events-none"
									}`}
								></iframe>
								<div className="bg-primary text-white p-4 rounded-b-lg relative">
									<p className="font-bold">{video.author}</p>
									<p className="text-sm truncate">{video.title}</p>
								</div>
							</SwiperSlide>
						);
					})}
					<div className="swiper-button-next bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-secondary-dark transition duration-300 ease-in-out">
						<FaArrowRight />
					</div>
					<div className="swiper-button-prev bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-secondary-dark transition duration-300 ease-in-out">
						<FaArrowLeft />
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default Marketing;
