//################# LIBS #####################
import localFont from 'next/font/local';

//################# STYLES ###################
// import { Golos_Text, Arimo } from 'next/font/google';
import '../styles/globals.css';

const golos = localFont({
  src: [
    { path: '../vendor/fonts/golos-text_demibold.woff2', weight: '600' },
    { path: '../vendor/fonts/golos-text_demibold.woff', weight: '600' },
    { path: '../vendor/fonts/Golos-Text_DemiBold.ttf', weight: '600' },
    { path: '../vendor/fonts/golos-text_medium.woff2', weight: '500' },
    { path: '../vendor/fonts/golos-text_medium.woff', weight: '500' },
    { path: '../vendor/fonts/Golos-Text_Medium.ttf', weight: '500' },
  ],
  // subsets: ['cyrillic', 'latin'],
  // weight: ['500', '600'],
  variable: '--font-family__h',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

const arimo = localFont({
  src: [
    { path: '../vendor/fonts/Arimo-Regular.woff2' },
    { path: '../vendor/fonts/Arimo-Regular.woff' },
    { path: '../vendor/fonts/Arimo-Regular.ttf' },
  ],
  // subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-family__p',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={golos.variable + ' ' + arimo.variable}>{children}</body>
    </html>
  );
}
