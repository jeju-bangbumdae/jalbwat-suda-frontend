
"use client";
import CustomTextField from "@/components/common/Fields/CustomTextField";
import TopBar from "@/components/navigation/TopBar";
import { useState } from "react";

export default function Page() {
	const [input, setInput] = useState<string>("");
	return (
		<>
			<TopBar isBack title={"여기 가게 제목"} />
			<CustomTextField
				label={"여기 질문이 들어감요"}
				value={input}
				onChange={(value) => setInput(value)} />
		</>
	);
}
