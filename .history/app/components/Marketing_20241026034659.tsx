"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ViewMoreButton from "./ViewMoreButton";
import videos from "../../public/data/videos.json";

const Marketing: React.FC = () => {
	const getYouTubeEmbedUrl = (url: string) => {
		const regExp =
			/^.*(youtu.be\/|v\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11
			? `https://www.youtube.com/embed/${match[2]}?enablejsapi=1`
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
				<div className="absolute right-0">
					<ViewMoreButton href="/marketing" />
				</div>
			</div>
			<div className="relative overflow-visible my-[100px]">
				<Swiper
					modules={[Navigation]}
					spaceBetween={30}
					slidesPerView={2.5} // 슬라이드를 3개씩 보여주도록 설정
					navigation
					pagination={{ clickable: true }}
					className="flex items-center"
				>
					{videos.map((video, index) => {
						const embedUrl = getYouTubeEmbedUrl(video.url);
						return (
							<SwiperSlide key={index} className="flex-shrink-0 w-full">
								<iframe
									width="100%"
									height="100%"
									src={embedUrl}
									title={video.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="rounded-t-lg"
								></iframe>
								<div className="bg-primary text-white p-4 rounded-b-lg relative">
									<p className="font-bold">{video.author}</p>
									<p className="text-sm truncate">{video.title}</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default Marketing;
