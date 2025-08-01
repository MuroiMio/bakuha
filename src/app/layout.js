import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://bakuha.pages.dev/'),
  title: {
    default: 'バクハ - ストレス解消アプリ | 今の気持ちを爆破しよう',
    template: '%s | バクハ - ストレス解消アプリ'
  },
  description: "ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。音響効果と視覚効果でスッキリ感を体験できます。無料で今すぐお試しください。",
  keywords: ["ストレス解消", "バクハ", "爆破", "リラックス", "メンタルヘルス", "ストレス発散", "無料アプリ", "癒し", "気分転換", "ストレスケア"],
  authors: [{ name: 'バクハアプリ開発チーム' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  openGraph: {
    title: 'バクハ - ストレス解消アプリ | 今の気持ちを爆破しよう',
    description: 'ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。音響効果と視覚効果でスッキリ感を体験できます。',
    url: 'https://bakuha.pages.dev/',
    siteName: 'バクハ - ストレス解消アプリ',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'バクハ - ストレス解消アプリ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バクハ - ストレス解消アプリ',
    description: 'ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。',
    images: ['/ogp.png'],
    creator: '@mio_muroi',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  alternates: {
    canonical: 'https://bakuha.pages.dev/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "バクハ - ストレス解消アプリ",
              "description": "ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。音響効果と視覚効果でスッキリ感を体験できます。",
              "url": "https://bakuha.pages.dev/",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "JPY"
              },
              "creator": {
                "@type": "Organization",
                "name": "バクハアプリ開発チーム"
              },
              "inLanguage": "ja",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "1000"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
