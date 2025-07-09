import React from "react";

interface IconProps {
	color?: string;
	width?: string | number;
	height?: string | number;
	style?: React.CSSProperties;
}

const MapIcon: React.FC<IconProps> = ({
	color = "#000",
	width = "24",
	height = "24",
	style = {}, // 기본값을 빈 객체로 설정
	...props
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={style} // 전달된 style 적용
		{...props}
	>
		<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
		<line x1="8" y1="2" x2="8" y2="18"></line>
		<line x1="16" y1="6" x2="16" y2="22"></line>
	</svg>
);

export default MapIcon;