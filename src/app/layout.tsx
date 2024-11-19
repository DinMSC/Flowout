import type { Metadata } from 'next';

import './globals.css';
import QueryWrapper from '@/wrappers/QueryWrapper';

export const metadata: Metadata = {
  title: 'Flowout',
  description: 'Flowout React task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  );
}
