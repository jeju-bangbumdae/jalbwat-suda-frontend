import { CommonIconProps } from "@/types/commonProps";
import React from "react";

const BookIcon: React.FC<CommonIconProps> = ({
	color = "var(--color-gray-400)",
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
		<path d="M8.55957 3C10.9686 3 13.0453 4.42029 14 6.46875C14.9547 4.42029 17.0314 3 19.4404 3H25L25.1543 3.00391C26.7393 3.08434 28 4.39498 28 6V22L27.9951 22.2061C27.8879 24.3194 26.1399 25.9999 24 26H4C1.86008 25.9999 0.112111 24.3194 0.00488281 22.2061L0 22V6C3.43261e-07 4.39498 1.26067 3.08434 2.8457 3.00391L3 3H8.55957ZM3 4.2998C2.06123 4.29994 1.29981 5.0612 1.2998 6V22C1.2998 23.4911 2.50894 24.7001 4 24.7002H13.2598V9C13.2598 6.40426 11.1553 4.2998 8.55957 4.2998H3ZM19.4404 4.2998C16.8447 4.2998 14.7402 6.40426 14.7402 9V24.7002H24C25.4911 24.7001 26.7002 23.4911 26.7002 22V6C26.7002 5.0612 25.9388 4.29994 25 4.2998H19.4404Z"
			fill={color} />
	</svg>
);

export default BookIcon;
