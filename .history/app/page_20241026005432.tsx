import Image from "next/image";
import Layout from "./components/Layout";
import Carousel from "./components/Carousel";
import SignatureMenu from "./components/SignatureMenu";
import SubMenuBox from "./components/SubMenuBox";
import Marketing from "./components/Marketing";

export default function Home() {
	return (
		<Layout>
			<div className="flex flex-col">
				{/* 섹션 1: 메인 커버 */}
				<section className="mb-12">
					<Carousel />
				</section>

				{/* 섹션 2: Signature 메뉴 */}
				<section className="mb-12">
					<SignatureMenu />
				</section>

				{/* 섹션 3: 서브메뉴박스 */}
				<section className="mb-12">
					<SubMenuBox />
				</section>

				{/* 섹션 4: Marketing */}
				<section className="mb-12">
					<Marketing />
				</section>
			</div>
		</Layout>
	);
}
