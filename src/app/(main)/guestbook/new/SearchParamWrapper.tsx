// ✅ SearchParamWrapper.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchParamWrapper({ onFetch }: { onFetch: (storeId: string) => void }) {
  const searchParams = useSearchParams();
  const storeId = searchParams.get('storeId');

  useEffect(() => {
    if (storeId) {
      onFetch(storeId);
    }
  }, [storeId]);

  return null;
}
