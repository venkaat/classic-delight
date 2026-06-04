import React from "react";

interface ChennaiLocalSchemaProps {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
}

export default function ChennaiLocalSchema({
  pageUrl,
  pageTitle,
  pageDescription,
}: ChennaiLocalSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Classic Delight Chennai - Custom Curtains & Blinds",
    "description": pageDescription,
    "url": `https://www.classicdelight.in${pageUrl}`,
    "logo": "https://www.classicdelight.in/logo.png",
    "image": "https://www.classicdelight.in/images/hero.png",
    "telephone": "+919940699797",
    "email": "hello@classicdelight.in",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer, Credit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16/49 Kattabomman Street, Gandhi Nagar",
      "addressLocality": "Virugambakkam, Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0489,
      "longitude": 80.1972
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Chennai" },
      { "@type": "Neighborhood", "name": "Virugambakkam" },
      { "@type": "Neighborhood", "name": "Anna Nagar" },
      { "@type": "Neighborhood", "name": "KK Nagar" },
      { "@type": "Neighborhood", "name": "Koyembedu" },
      { "@type": "Neighborhood", "name": "Vadapalani" },
      { "@type": "Neighborhood", "name": "Adyar" },
      { "@type": "Neighborhood", "name": "OMR" },
      { "@type": "Neighborhood", "name": "Porur" },
      { "@type": "Neighborhood", "name": "Velachery" },
      { "@type": "Neighborhood", "name": "ECR" },
      { "@type": "Neighborhood", "name": "T Nagar" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Window Design & Styling Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Curtains in Chennai",
            "description": "Custom-tailored blackout, sheer, linen, cotton, and motorized curtains with free installation in Chennai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Blinds in Chennai",
            "description": "Zebra blinds, wooden blinds, roller blinds, and motorized smart blinds with expert measurement and installation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mosquito Nets in Chennai",
            "description": "Custom-fit insect screening and invisible mosquito nets for windows and doors."
          }
        }
      ]
    },
    "sameAs": [
      "https://wa.me/919940699797",
      "https://maps.app.goo.gl/ghZRyT2CtCSy6SRw5"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
