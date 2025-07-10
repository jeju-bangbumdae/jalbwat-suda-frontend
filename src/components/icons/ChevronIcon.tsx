import { CommonIconProps } from "@/types/commonProps";
import React from "react";

const ChevronIcon: React.FC<CommonIconProps> = ({
	color = "var(--color-black)",
	width = "28",
	height = "28",
	style = {}, // 기본값을 빈 객체로 설정
	...props
}: CommonIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 28 28"
		fill="none"
		style={style} // 전달된 style 적용
		{...props}
	>
		<path d="M17.5 5.5L9 14L17.5 22.5" strokeWidth="2.5" stroke={color} />
	</svg>
);

export default ChevronIcon;