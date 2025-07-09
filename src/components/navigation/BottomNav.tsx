'use client';

import styled from 'styled-components';
import { Text } from '@vapor-ui/core';
import { usePathname } from 'next/navigation';
import MapIcon from '../icons/MapIcon';
import { useRouter } from 'next/navigation';

export const BottomNav = () => {
	const pathname = usePathname();
	const router = useRouter();

	const isActive = (href: string) => pathname === href;

	const navItems = [
		{
			href: '/',
			label: '홈',
			icon: <MapIcon color={isActive('/') ? '#0000ff' : '#000'} />,
		},
		{
			href: '/map',
			label: '지도',
			icon: <MapIcon color={isActive('/map') ? '#0000ff' : '#000'} />,
		},
		{
			href: '/mypage',
			label: '내정보',
			icon: <MapIcon color={isActive('/mypage') ? '#0000ff' : '#000'} />,
		},
	];

	return (
		<NavWrapper>
			<NavContainer>
				{navItems.map(({ href, label, icon }) => (
					<NavItem key={href} onClick={() => {
						router.push(href)
					}}>
						{icon}
						<Text foreground={isActive(href) ? 'primary' : 'normal'}>{label}</Text>
					</NavItem>
				))}
			</NavContainer>
		</NavWrapper >
	);
};

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  z-index: 100;
`;

const NavContainer = styled.div`
	background: #eee;
	border: 1px solid #000;
	border-radius: 50px;
	padding: 20px;
	width: 100%;
	height: 100%;
	display: flex;
`;

const NavItem = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	width: 100%;
	gap: 4px;
	
	justify-content: center;
	align-items: center;
`;