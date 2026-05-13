
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
    src: "/images/gallery/curtains_1.jpg",
    category: "Curtains",
    alt: "Custom living room curtains installed by Classic Delight in Chennai",
  },
  {
    src: "/images/gallery/Blinds_1.jpg",
    category: "Blinds",
    alt: "Modern window blinds installed for a Chennai home",
  },
  {
    src: "/images/gallery/Blinds_3.jpg",
    category: "Blinds",
    alt: "Premium blinds fitted for a contemporary Chennai interior",
  },
  {
    src: "/images/gallery/curtains_2.jpg",
    category: "Curtains",
    alt: "Elegant full length curtains for a modern Chennai apartment",
  },
  {
    src: "/images/gallery/curtains_4.jpg",
    category: "Curtains",
    alt: "Designer curtain installation with premium fabric finish",
  },
  {
    src: "/images/gallery/curtains_5.jpg",
    category: "Curtains",
    alt: "Soft curtain styling for a bright residential window",
  },
  {
    src: "/images/gallery/curtains_6.jpg",
    category: "Curtains",
    alt: "Classic Delight curtain project with tailored measurements",
  },
  {
    src: "/images/gallery/curtains_7.jpg",
    category: "Curtains",
    alt: "Luxury curtains installed for a Chennai living space",
  },
  {
    src: "/images/gallery/curtains_9.jpg",
    category: "Curtains",
    alt: "Premium curtain fabric and installation for home interiors",
  },
  {
    src: "/images/gallery/curtains_10.jpg",
    category: "Curtains",
    alt: "Custom curtain design for a modern bedroom window",
  },
  {
    src: "/images/gallery/curtains_11.jpg",
    category: "Curtains",
    alt: "Elegant curtains with professional fitting and finishing",
  },
  {
    src: "/images/gallery/curtains_12.jpg",
    category: "Curtains",
    alt: "Classic Delight recent curtain installation in Chennai",
  },
  {
    src: "/images/gallery/curtains_13.jpg",
    category: "Curtains",
    alt: "Tailor made curtains for a premium residential interior",
  },
  {
    src: "/images/gallery/curtains_14.jpg",
    category: "Curtains",
    alt: "Luxury window curtain styling for a Chennai home",
  },
  {
    src: "/images/gallery/curtains_15.jpg",
    category: "Curtains",
    alt: "Finished custom curtains with neat installation detail",
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
              className="group relative overflow-hidden rounded-[28px] cursor-pointer"
            >

              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={280}
                quality={60}
                priority={index === 0}
                style={{ height: 'auto' }}
                className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-700"
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
