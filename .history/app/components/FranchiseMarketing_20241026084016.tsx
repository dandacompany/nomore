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
				className="absolute top-0 left-0 animate-fadeIn"
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
// tailwind.config.js 파일에 아래의 코드를 추가하여 애니메이션을 정의합니다.
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0, transform: 'translateY(-20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         fadeIn: 'fadeIn 1s ease-out forwards',
//       },
//     },
//   },
//   plugins: [],
// }
