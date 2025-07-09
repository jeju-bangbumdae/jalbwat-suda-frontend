'use client';
import { usePathname } from 'next/navigation';
import { QRCodeCanvas } from 'qrcode.react';

export default function Page() {
  const pathname = usePathname();
  return (
    <div>
      <QRCodeCanvas value={pathname + '?key=qr'} size={300} fgColor={'#000'} />
    </div>
  );
}
