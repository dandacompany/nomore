import React from "react";
import Link from "next/link";

interface ViewMoreButtonProps {
	href: string;
	text?: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
	href,
	text = "더보기",
}) => {
	return (
		<Link
			href={href}
			className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300 inline-block"
		>
			{text}
		</Link>
	);
};

export default ViewMoreButton;
