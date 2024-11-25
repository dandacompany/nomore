import Image from "next/image";
import Layout from "./components/Layout";

export default function Home() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-12">
				<section className="mb-12">
					<h1 className="text-4xl font-bold text-primary mb-4">
						봉천동 매운떡볶이에 오신 것을 환영합니다
					</h1>
					<p className="text-xl">
						맛있고 건강한 떡볶이로 여러분의 입맛을 사로잡겠습니다.
					</p>
				</section>

				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-4">대표 메뉴</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* 메뉴 아이템 추가 */}
						<div className="bg-white shadow-md rounded-lg overflow-hidden">
							<Image
								src="/menu1.jpg"
								alt="떡볶이"
								width={400}
								height={300}
								className="w-full"
							/>
							<div className="p-4">
								<h3 className="text-xl font-semibold mb-2">매운 떡볶이</h3>
								<p>매콤한 맛이 일품인 우리의 시그니처 떡볶이</p>
							</div>
						</div>
						{/* 추가 메뉴 아이템 */}
					</div>
				</section>

				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-4">창업 안내</h2>
					<p className="text-xl mb-4">
						봉천동 매운떡볶이와 함께 성공적인 창업을 시작하세요.
					</p>
					<a
						href="/franchise"
						className="bg-primary text-white px-6 py-3 rounded-full inline-block hover:bg-opacity-90 transition duration-300"
					>
						창업 안내 보기
					</a>
				</section>

				<section>
					<h2 className="text-3xl font-bold mb-4">매장 찾기</h2>
					{/* 지도 컴포넌트 추가 */}
					<div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
						지도 컴포넌트가 들어갈 자리
					</div>
				</section>
			</div>
		</Layout>
	);
}
