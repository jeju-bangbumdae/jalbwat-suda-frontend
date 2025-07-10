'use client';

import { LayoutContainer } from '@/components/LayoutContainer';
import { BottomNav } from '@/components/navigation/BottomNav';

export default function NavPageLayout({ children }: { children: React.ReactNode }) {

	return (<>
		<LayoutContainer>{children}</LayoutContainer>
		<BottomNav />
	</>
	);
}