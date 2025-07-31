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
  title: "バクハ - ストレス解消アプリ | 今の気持ちを爆破しよう",
  description: "ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。音響効果と視覚効果でスッキリ感を体験できます。無料で今すぐお試しください。",
  keywords: "ストレス解消,バクハ,爆破,リラックス,メンタルヘルス,ストレス発散,無料アプリ,癒し",
  author: "バクハアプリ開発チーム",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  "theme-color": "#ff6600",
  openGraph: {
    title: "バクハ - ストレス解消アプリ",
    description: "ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。音響効果と視覚効果でスッキリ感を体験できます。",
    type: "website",
    locale: "ja_JP",
    siteName: "バクハ - ストレス解消アプリ",
  },
  twitter: {
    card: "summary_large_image",
    title: "バクハ - ストレス解消アプリ",
    description: "ストレスの原因を入力して爆破！簡単で楽しいストレス解消アプリ。",
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
              "url": "https://bakuha.vercel.app",
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
