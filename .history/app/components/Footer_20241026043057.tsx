import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-white py-10">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					{/* 로고 및 회사 정보 */}
					<div className="w-full md:w-1/5 mb-6 md:mb-0">
						<Link href="/">
							<Image
								src="/logos/main_logo_white.png"
								alt="봉천동 매운떡볶이 로고"
								width={100}
								height={100}
							/>
						</Link>
						<p className="mt-4">
							주소: 서울특별시 관악구 봉천동 123-45
							<br />
							대표: 홍길동
							<br />
							사업자등록번호: 123-45-67890
						</p>
					</div>

					{/* 메뉴 링크 */}
					<div className="w-full md:w-1/5 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-4">MENU</h3>
						<ul>
							<li>
								<Link href="/menu">전체메뉴</Link>
							</li>
							<li>
								<Link href="/menu#tteokbokki">떡볶이</Link>
							</li>
							<li>
								<Link href="/menu#side">사이드</Link>
							</li>
							<li>
								<Link href="/menu#topping">토핑</Link>
							</li>
							<li>
								<Link href="/menu#set">세트</Link>
							</li>
						</ul>
					</div>
					{/* 고객 지원 */}
					<div className="w-full md:w-1/5 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-4">STORE</h3>
						<ul>
							<li>
								<Link href="/stores#area">지역명</Link>
							</li>
							<li>
								<Link href="/stores#store">매장명</Link>
							</li>
							<li>
								<Link href="/stores#location">현위치</Link>
							</li>
						</ul>
					</div>

					{/* 가맹점 지원 */}
					<div className="w-full md:w-1/5 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-4">FRANCHISE</h3>
						<ul>
							<li>
								<Link href="/faq">창업문의</Link>
							</li>
							<li>
								<Link href="/contact">창업절차</Link>
							</li>
							<li>
								<Link href="/privacy">창업비용 및 혜택</Link>
							</li>
							<li>
								<Link href="/terms">마케팅 및 스페셜</Link>
							</li>
						</ul>
					</div>

					{/* 브랜드 소개 */}
					<div className="w-full md:w-1/5 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-4">BRAND</h3>
						<ul>
							<li>
								<Link href="/about">브랜드 소개</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* 저작권 정보 */}
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p>&copy; 2024 봉천동 매운떡볶이. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
