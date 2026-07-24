import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'VaultIQ — Premium Finance OS',
    template: '%s | VaultIQ',
  },
  description:
    'AI-powered personal finance operating system for wealth management professionals. Experience clarity, control, and precision.',
  keywords: [
    'personal finance',
    'wealth management',
    'AI finance',
    'budgeting',
    'expense tracking',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
