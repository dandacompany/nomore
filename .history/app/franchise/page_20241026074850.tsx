"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import FranchiseTab from "../components/FranchiseTab";
import FranchiseInquiry from "../components/FranchiseInquiry";
import FranchiseProcess from "../components/FranchiseProcess";
import FranchiseCost from "../components/FranchiseCost";
import FranchiseMarketing from "../components/FranchiseMarketing";
import FranchiseFAQ from "../components/FranchiseFAQ";

const FranchisePage: React.FC = () => {
	const [activeTab, setActiveTab] = useState("창업문의");

	const renderContent = () => {
		switch (activeTab) {
			case "창업문의":
				return <FranchiseInquiry />;
			case "창업절차":
				return <FranchiseProcess />;
			case "창업비용 및 혜택":
				return <FranchiseCost />;
			case "마케팅 및 스페셜":
				return <FranchiseMarketing />;
			case "창업 FAQ":
				return <FranchiseFAQ />;
			default:
				return null;
		}
	};

	return (
		<Layout>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-center mb-8 text-primary">
					{activeTab}
				</h1>
				<FranchiseTab activeTab={activeTab} setActiveTab={setActiveTab} />
				<div className="mt-8">{renderContent()}</div>
			</div>
		</Layout>
	);
};

export default FranchisePage;
