"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	const slides = [
		{ image: "/slide1.jpg", link: "/franchise" },
		{ image: "/slide2.jpg", link: "/franchise" },
		{ image: "/slide3.jpg", link: "/franchise" },
	];

	useEffect(() => {
		if (isPlaying) {
			const interval = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % slides.length);
			}, 5000);
			return () => clearInterval(interval);
		}
	}, [isPlaying]);

	return (
		<div className="relative w-full h-[500px]">
			{slides.map((slide, index) => (
				<Link href={slide.link} key={index}>
					<Image
						src={slide.image}
						alt={`Slide ${index + 1}`}
						layout="fill"
						objectFit="cover"
						className={`transition-opacity duration-500 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					/>
				</Link>
			))}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full mx-1 ${
							index === currentSlide ? "bg-white" : "bg-gray-400"
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
				<button
					className="ml-4 text-white"
					onClick={() => setIsPlaying(!isPlaying)}
				>
					{isPlaying ? "일시정지" : "재생"}
				</button>
			</div>
		</div>
	);
};

export default Carousel;
