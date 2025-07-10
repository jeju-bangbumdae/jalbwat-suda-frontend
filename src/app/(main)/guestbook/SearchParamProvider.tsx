'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchParamProvider({
  onParams,
}: {
  onParams: (params: { category?: string; storeId?: string }) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category') ?? undefined;
    const storeId = searchParams.get('storeId') ?? undefined;
    onParams({ category, storeId });
  }, [searchParams]);

  return null;
}
