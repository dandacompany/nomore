import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-secondary py-10">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					{/* 로고 및 회사 정보 */}
					<div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col gap-4 items-start">
						<Link href="/" className="flex flex-col gap-4 items-center">
							<Image
								src="/logos/main_logo_white.png"
								alt="봉천동 매운떡볶이 로고"
								width={100}
								height={100}
							/>
							<Image
								src="/logos/main_text_logo1_white.png"
								alt="봉천동 매운떡볶이 로고"
								width={200}
								height={200}
							/>
						</Link>
						<p className="mt-4 leading-[2.5]">
							사업자 등록번호: 792-81-01859
							<br />
							(주)스파이시즘 \ 대표이사 강병양
							<br />
							서울특별시 중구 동호로14길 19, 4층 426호
							<br />
							TEL: 02-542-3417
						</p>
					</div>
					<div className="w-full md:w-2/3 py-10 pl flex flex-row gap-10 justify-between ">
						{/* 메뉴 링크 */}
						<div className="w-full mb-6 md:mb-0 p-6">
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
						<div className="w-full mb-6 md:mb-0 p-6">
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
						<div className="w-full mb-6 md:mb-0 p-6">
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
						<div className="w-full mb-6 md:mb-0 p-6">
							<h3 className="text-lg font-semibold mb-4">BRAND</h3>
							<ul>
								<li>
									<Link href="/about">브랜드 소개</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* 저작권 정보 */}
				<div className="mt-8 pt-8 border-t border-gradient-to-l from-secondary to-transparent text-center">
					<p>&copy; 2024 봉천동 매운떡볶이. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
