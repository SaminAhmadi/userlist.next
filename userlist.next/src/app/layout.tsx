// Main
import { ReactNode } from 'react';
import 'assets/index.scss';
// Component
import MainLayout from 'views/layout/main_layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
