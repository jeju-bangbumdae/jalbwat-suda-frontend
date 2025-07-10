'use client';

import { LayoutContainer } from '@/components/LayoutContainer';

export default function AppLayout({ children }: { children: React.ReactNode }) {

	return (<>
		<LayoutContainer>{children}</LayoutContainer>
	</>
	);
}