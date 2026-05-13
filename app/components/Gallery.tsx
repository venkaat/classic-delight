
"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  category: string;
  alt: string;
}

const data: GalleryItem[] = [
  {
    src: "/images/gallery/floral-zebra-window-blinds-chennai.jpg",
    category: "Blinds",
    alt: "Floral zebra blinds installed for a modern home window in Chennai",
  },
  {
    src: "/images/gallery/Blinds_3.jpg",
    category: "Blinds",
    alt: "Patterned zebra roller blinds with floral motif for a home office window",
  },
  {
    src: "/images/gallery/beige-sheer-curtain-combo-chennai.jpeg",
    category: "Curtains",
    alt: "Beige blackout curtains with white sheer combination on ceiling-mounted track",
  },
  {
    src: "/images/gallery/corner-window-curtain-installation-chennai.jpg",
    category: "Curtains",
    alt: "Corner window curtain installation with beige sheer and blackout drapes",
  },
  {
    src: "/images/gallery/cream-blackout-curtains-living-room.jpg",
    category: "Curtains",
    alt: "Cream blackout curtains installed for a premium living room",
  },
  {
    src: "/images/gallery/curtains_4.jpg",
    category: "Curtains",
    alt: "White pinch pleat sheer curtains for a bright apartment living area",
  },
  {
    src: "/images/gallery/curtains_5.jpg",
    category: "Curtains",
    alt: "Brown pinch pleat curtains with white sheer layer for a balcony door",
  },
  {
    src: "/images/gallery/curtains_6.jpg",
    category: "Curtains",
    alt: "Corner window installation with dark curtains and vertical blinds panel",
  },
  {
    src: "/images/gallery/curtains_7.jpg",
    category: "Curtains",
    alt: "Cream pinch pleat blackout curtains for a modern bedroom with false ceiling",
  },
  {
    src: "/images/gallery/curtains_10.jpg",
    category: "Curtains",
    alt: "Brown textured curtains with white sheer combination on dual track rod",
  },
  {
    src: "/images/gallery/curtains_15.jpg",
    category: "Curtains",
    alt: "Black ceiling-mounted curtains with dramatic drape for a dark-themed bedroom",
  },
  {
    src: "/images/gallery/custom-tailored-curtains-chennai.jpeg",
    category: "Curtains",
    alt: "Custom tailored pinch pleat curtains recessed in wooden frame niche",
  },
  {
    src: "/images/gallery/elegant-full-length-apartment-curtains.jpg",
    category: "Curtains",
    alt: "Elegant full-length taupe curtains with white sheer for a luxury apartment",
  },
  {
    src: "/images/gallery/finished-custom-curtain-detail.jpeg",
    category: "Curtains",
    alt: "Finished custom curtain installation with taupe fabric and centre tieback detail",
  },
    {
    src: "/images/gallery/floral-zebra-window-blinds-chennai.jpg",
    category: "Blinds",
    alt: "Floral zebra blinds installed for a modern home window in Chennai",
  },
  {
    src: "/images/gallery/Blinds_3.jpg",
    category: "Blinds",
    alt: "Patterned zebra roller blinds with floral motif for a home office window",
  },
  {
    src: "/images/gallery/modern-window-blinds-installation-chennai.jpg",
    category: "Blinds",
    alt: "Dark woven roller blinds installed across a wide window in Chennai",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_00_21_PM.jpeg",
    category: "Blinds",
    alt: "Cream and black Roman blinds installed for a modern kitchen window",
  },
  {
    src: "/images/gallery/beige-sheer-curtain-combo-chennai.jpeg",
    category: "Curtains",
    alt: "Beige blackout curtains with white sheer combination on ceiling-mounted track",
  },
  {
    src: "/images/gallery/corner-window-curtain-installation-chennai.jpg",
    category: "Curtains",
    alt: "Corner window curtain installation with beige sheer and blackout drapes",
  },
  {
    src: "/images/gallery/cream-blackout-curtains-living-room.jpg",
    category: "Curtains",
    alt: "Cream blackout curtains installed for a premium living room",
  },
  {
    src: "/images/gallery/curtains_4.jpg",
    category: "Curtains",
    alt: "White pinch pleat sheer curtains for a bright apartment living area",
  },
  {
    src: "/images/gallery/curtains_5.jpg",
    category: "Curtains",
    alt: "Brown pinch pleat curtains with white sheer layer for a balcony door",
  },
  {
    src: "/images/gallery/curtains_6.jpg",
    category: "Curtains",
    alt: "Corner window installation with dark curtains and vertical blinds panel",
  },
  {
    src: "/images/gallery/curtains_7.jpg",
    category: "Curtains",
    alt: "Cream pinch pleat blackout curtains for a modern bedroom with false ceiling",
  },
  {
    src: "/images/gallery/curtains_10.jpg",
    category: "Curtains",
    alt: "Brown textured curtains with white sheer combination on dual track rod",
  },
  {
    src: "/images/gallery/curtains_15.jpg",
    category: "Curtains",
    alt: "Black ceiling-mounted curtains with dramatic drape for a dark-themed bedroom",
  },
  {
    src: "/images/gallery/custom-tailored-curtains-chennai.jpeg",
    category: "Curtains",
    alt: "Custom tailored pinch pleat curtains recessed in wooden frame niche",
  },
  {
    src: "/images/gallery/elegant-full-length-apartment-curtains.jpg",
    category: "Curtains",
    alt: "Elegant full-length taupe curtains with white sheer for a luxury apartment",
  },
  {
    src: "/images/gallery/finished-custom-curtain-detail.jpeg",
    category: "Curtains",
    alt: "Finished custom curtain installation with taupe fabric and centre tieback detail",
  },
  {
    src: "/images/gallery/premium-curtain-fabric-installation.jpeg",
    category: "Curtains",
    alt: "Premium taupe curtains with white sheer layer for a spacious living room",
  },
  {
    src: "/images/gallery/professional-curtain-fitting-finish.jpeg",
    category: "Curtains",
    alt: "Professional curtain fitting with sheer and blackout combination in a bedroom",
  },
  {
    src: "/images/gallery/soft-sheer-curtains-styling.jpg",
    category: "Curtains",
    alt: "Soft white sheer curtains tied back on large glass windows with garden view",
  },
  {
    src: "/images/gallery/soft-white-sheer-curtains-apartment.jpg",
    category: "Curtains",
    alt: "Soft white sheer curtains on a high-rise apartment window with city view",
  },
  {
    src: "/images/gallery/tailor-made-premium-residential-curtains.jpeg",
    category: "Curtains",
    alt: "Tailor-made taupe curtains with sheer across multiple windows in a luxury residence",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_00_23_PM.jpeg",
    category: "Curtains",
    alt: "Dark green and beige dual-layer curtains with sheer for a classic bedroom",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_00_26_PM.jpeg",
    category: "Curtains",
    alt: "Grey pinch pleat curtains with white sheer and tieback for a modern room",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_00_58_PM.jpeg",
    category: "Curtains",
    alt: "Grey curtains with white sheer combination under a dark false ceiling",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_00_59_PM.jpeg",
    category: "Curtains",
    alt: "Taupe and beige striped curtains with sheer layer for a premium bedroom",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_01_00_PM.jpeg",
    category: "Curtains",
    alt: "Brown damask curtains with teal patterned sheer for a tall staircase window",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_01_02_PM__1_.jpeg",
    category: "Curtains",
    alt: "Close view of brown damask curtains layered with teal printed sheer near staircase",
  },
  {
    src: "/images/gallery/WhatsApp_Image_2026-05-12_at_12_01_02_PM__2_.jpeg",
    category: "Curtains",
    alt: "Detail of brown damask curtain fabric with teal motif sheer tieback finish",
  },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = showAll ? data : data.slice(0, 4);

  const openImage = (item: GalleryItem, index: number) => {
    setSelectedImage(item.src);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(data[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(data[prevIndex].src);
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* GLOW */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Our Installations
          </p>

          <h2 className="text-white text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
            Crafted Spaces
            <br />
            & Elegant Interiors
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            Explore premium curtain, blinds and mosquito net
            installations designed for modern homes.
          </p>

        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

         {visibleImages.map((img, index) => (
  <div
    key={index}
    onClick={() => openImage(img, index)}
    className="group relative overflow-hidden rounded-[28px] cursor-pointer h-[280px]"
  >
    <Image
      src={img.src}
      alt={img.alt}
      fill
      quality={60}
      priority={index === 0}
      className="object-cover group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
  </div>
))}

        </div>

        {/* SHOW MORE */}
        {data.length > 4 && (

          <div className="flex justify-center mt-14">

            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/15 transition duration-500"
            >
              {showAll ? "Show Less" : "View More"}
            </button>

          </div>

        )}

      </div>

      {/* LIGHTBOX */}
      {selectedImage && (

        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-6">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-6xl leading-none z-[10000]"
          >
            &times;
          </button>

          {/* PREVIOUS */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-6xl z-[10000] hover:text-[#f26522] transition"
          >
            &#8249;
          </button>

          {/* IMAGE */}
          <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain rounded-[30px]"
              priority
            />
          </div>

          {/* NEXT */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-6xl z-[10000] hover:text-[#f26522] transition"
          >
            &#8250;
          </button>

        </div>

      )}

    </section>
  );
}
