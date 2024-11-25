import React, { useState } from "react";

const FranchiseInquiry: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		area: "",
		budget: "",
		type: "",
		inquiry: "",
		agreement: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]:
				type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
		// Here you would typically send the data to your server
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-lg mx-auto">
			<div className="mb-4">
				<label htmlFor="name" className="block mb-2">
					성함*
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="w-full p-2 border rounded"
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="phone" className="block mb-2">
					연락처*
				</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					required
					className="w-full p-2 border rounded"
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="area" className="block mb-2">
					창업희망지역*
				</label>
				<input
					type="text"
					id="area"
					name="area"
					required
					className="w-full p-2 border rounded"
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="budget" className="block mb-2">
					창업예산*
				</label>
				<input
					type="text"
					id="budget"
					name="budget"
					required
					className="w-full p-2 border rounded"
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-2">창업형태*</label>
				<div>
					<label className="inline-flex items-center mr-4">
						<input
							type="radio"
							name="type"
							value="레스토랑형"
							onChange={handleChange}
							className="mr-2"
						/>
						레스토랑형
					</label>
					<label className="inline-flex items-center mr-4">
						<input
							type="radio"
							name="type"
							value="포장형"
							onChange={handleChange}
							className="mr-2"
						/>
						포장형
					</label>
					<label className="inline-flex items-center">
						<input
							type="radio"
							name="type"
							value="배달형"
							onChange={handleChange}
							className="mr-2"
						/>
						배달형
					</label>
				</div>
			</div>
			<div className="mb-4">
				<label htmlFor="inquiry" className="block mb-2">
					문의사항
				</label>
				<textarea
					id="inquiry"
					name="inquiry"
					className="w-full p-2 border rounded"
					rows={4}
					onChange={handleChange}
				></textarea>
			</div>
			<div className="mb-4">
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						name="agreement"
						onChange={handleChange}
						className="mr-2"
					/>
					개인정보 수집 및 이용에 동의합니다
				</label>
			</div>
			<button
				type="submit"
				className="w-full bg-primary text-white p-2 rounded"
			>
				제출하기
			</button>
		</form>
	);
};

export default FranchiseInquiry;
