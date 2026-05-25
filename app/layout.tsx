import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Classic Delight",
      "description": "Premium custom curtains, blinds, zebra blinds, wooden blinds and mosquito nets in Chennai with free professional installation across Virugambakkam, Anna Nagar, KK Nagar and all Chennai areas.",
      "url": "https://www.classicdelight.in",
      "logo": "https://www.classicdelight.in/logo.png",
      "image": "https://www.classicdelight.in/images/hero.png",
      "telephone": "+919940699797",
      "email": "hello@classicdelight.in",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "16/49 Kattabomman Street, Gandhi Nagar",
        "addressLocality": "Virugambakkam",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600092",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0524,
        "longitude": 80.1954
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "100"
      },
      "areaServed": [
        { "@type": "City", "name": "Chennai" },
        { "@type": "Neighborhood", "name": "Virugambakkam" },
        { "@type": "Neighborhood", "name": "Anna Nagar" },
        { "@type": "Neighborhood", "name": "KK Nagar" },
        { "@type": "Neighborhood", "name": "Koyembedu" },
        { "@type": "Neighborhood", "name": "Vadapalani" },
        { "@type": "Neighborhood", "name": "Adyar" },
        { "@type": "Neighborhood", "name": "OMR" },
        { "@type": "Neighborhood", "name": "Porur" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Window Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Curtains Chennai",
              "description": "Premium custom-tailored curtains in cotton, linen, silk, blackout and sheer fabrics with free installation."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": "130",
              "unitText": "per meter"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blinds Chennai",
              "description": "Zebra blinds, wooden blinds, roller blinds and venetian blinds with professional installation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mosquito Nets Chennai",
              "description": "Custom-fit mosquito nets for windows and doors with seamless installation."
            }
          }
        ]
      },
      "sameAs": [
        "https://wa.me/919940699797",
        "https://maps.app.goo.gl/ghZRyT2CtCSy6SRw5"
      ]
    })
  }}
/>
 <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV7CG8KTT3"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-JV7CG8KTT3');
          `}
        </Script>



        {children}
        
      </body>
    </html>
  );
}
export const metadata: Metadata = {

  metadataBase: new URL("https://classicdelight.in"),
  title: {
    default: "Curtains in Chennai | Custom Curtains & Blinds | Classic Delight",
    template: "%s | Classic Delight",
  },
  description:
    "Premium curtains, blinds and mosquito nets in Chennai including Virugambakkam, Anna Nagar, Vadapalani and KK Nagar.",

    openGraph: {
    title: "Classic Delight Curtains & Blinds",
    description:
      "Premium curtains, blinds, and window solutions in Chennai.",
    images: "/og-image.jpg",
  },

  twitter: {
    card: "summary_large_image",
    images: "/og-image.jpg",
  },
};
