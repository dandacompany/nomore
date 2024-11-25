import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-100 text-gray-600">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-wrap justify-between">
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-2">봉천동 매운떡볶이</h3>
						<p>주소: 서울특별시 관악구 봉천동 123-45</p>
						<p>전화: 02-123-4567</p>
					</div>
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-2">빠른 링크</h3>
						<ul>
							<li>
								<Link href="/about">회사소개</Link>
							</li>
							<li>
								<Link href="/franchise">창업안내</Link>
							</li>
							<li>
								<Link href="/stores">매장찾기</Link>
							</li>
							<li>
								<Link href="/contact">문의하기</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3">
						<h3 className="text-lg font-semibold mb-2">소셜 미디어</h3>
						<div className="flex space-x-4">
							{/* 소셜 미디어 아이콘 추가 */}
						</div>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>&copy; 2024 봉천동 매운떡볶이. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
