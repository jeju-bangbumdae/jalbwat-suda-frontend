'use client';

import styled from 'styled-components';
import { Text } from '@vapor-ui/core';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import HomeIcon from '../icons/nav/HomeIcon';
import BookIcon from '../icons/nav/BookIcon';
import ProfileIcon from '../icons/nav/ProfileIcon';

export const BottomNav = () => {
	const pathname = usePathname();
	const router = useRouter();

	const isActive = (href: string) => pathname === href;

	const navItems = [
		{
			href: '/',
			label: '홈',
			icon: <HomeIcon color={isActive('/') ? 'var(--color-primary-orange)' : 'var(--color-gray-500)'} />,
		},
		{
			href: '/guestbook',
			label: '방명록',
			icon: <BookIcon color={isActive('/guestbook') ? 'var(--color-primary-orange)' : 'var(--color-gray-500)'} />,
		},
		{
			href: '/mypage',
			label: '내정보',
			icon: <ProfileIcon color={isActive('/mypage') ? 'var(--color-primary-orange)' : 'var(--color-gray-500)'} />,
		},
	];

	return (
		<NavWrapper>
			{/* <NavContainer> */}
				{navItems.map(({ href, label, icon }) => (
					<NavItem key={href} onClick={() => {
						router.push(href)
					}}>
						{icon}
						<Text aria-setsize={14} style={{
							color: isActive(href) ? 'var(--color-primary-orange)' : 'var(--color-gray-500)',
							fontWeight: isActive(href) ? '600' : 'normal'
						}}>{label}</Text>
					</NavItem>
				))}
			{/* </NavContainer> */}
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
  box-shadow: 0 -6px 12px rgba(141, 115, 88, 0.1);

  display: flex;
  justify-content: space-around;
  padding: 20px;
  z-index: 100;
`;

// const NavContainer = styled.div`
// 	background: #eee;
// 	border: 1px solid #000;
// 	border-radius: 50px;
// 	padding: 20px;
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// `;

const NavItem = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	width: 100%;
	gap: 8px;
	
	justify-content: center;
	align-items: center;
`;