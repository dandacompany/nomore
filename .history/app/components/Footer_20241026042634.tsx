import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-white py-10">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					{/* 로고 및 회사 정보 */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
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
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-4">MENU</h3>
						<ul>
							<li>
								<Link href="/menu">메뉴 소개</Link>
							</li>
							<li>
								<Link href="/franchise">창업 안내</Link>
							</li>
							<li>
								<Link href="/stores">매장 찾기</Link>
							</li>
							<li>
								<Link href="/about">회사 소개</Link>
							</li>
						</ul>
					</div>

					{/* 고객 지원 */}
					<div className="w-full md:w-1/4 mb-6 md:mb-0">
						<h3 className="text-lg font-semibold mb-4">고객 지원</h3>
						<ul>
							<li>
								<Link href="/faq">자주 묻는 질문</Link>
							</li>
							<li>
								<Link href="/contact">문의하기</Link>
							</li>
							<li>
								<Link href="/privacy">개인정보처리방침</Link>
							</li>
							<li>
								<Link href="/terms">이용약관</Link>
							</li>
						</ul>
					</div>

					{/* 소셜 미디어 */}
					<div className="w-full md:w-1/4">
						<h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/icons/facebook.png"
									alt="Facebook"
									width={24}
									height={24}
								/>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/icons/instagram.png"
									alt="Instagram"
									width={24}
									height={24}
								/>
							</a>
							<a
								href="https://youtube.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/icons/youtube.png"
									alt="YouTube"
									width={24}
									height={24}
								/>
							</a>
						</div>
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
