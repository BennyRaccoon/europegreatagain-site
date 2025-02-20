import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata = {
  title: "Make Europe Great Again - Official MEGA Merch",
  description: "Official MEGA Store - Make Europe Great Again with high-quality apparel and accessories.",
  keywords: "MEGA, Make Europe Great Again, European apparel, historical merch, crusader merch",
  author: "The Bun Cult",
  siteUrl: "https://europegreatagain.net", // Update with your actual domain
  socialImage: "/mega-store-banner.jpg", // Update with your OG image
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={metadata.siteUrl} />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.siteUrl + metadata.socialImage} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.siteUrl + metadata.socialImage} />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Bun Cult",
            "url": metadata.siteUrl,
            "logo": metadata.siteUrl + "/images/logo.png",
            "sameAs": [
              "https://www.instagram.com/thebuncult",
              "https://twitter.com/thebuncult",
              "https://www.tiktok.com/@thebuncult"
            ]
          })
        }} />
      </Head>
      <body className={ebGaramond.variable}>
        {children}
      </body>
    </html>
  );
}
