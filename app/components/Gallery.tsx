
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
  src: "/images/gallery/curtains_15.jpg",
  category: "Blinds",
  alt: "Floral zebra blinds installed for a modern home window in Chennai",
},
{
  src: "/images/gallery/luxury-sheer-curtains-balcony-door-chennai.jpg",
  category: "Curtains",
  alt: "Luxury sheer and blackout curtains for a balcony door in Chennai",
},
{
  src: "/images/gallery/corner-window-curtain-installation-chennai.jpg",
  category: "Curtains",
  alt: "Corner window curtain installation with elegant fabric styling",
},
{
  src: "/images/gallery/cream-blackout-curtains-living-room.jpg",
  category: "Curtains",
  alt: "Cream blackout curtains installed for a premium living room",
},
{
  src: "/images/gallery/beige-sheer-curtain-combo-chennai.jpeg",
  category: "Curtains",
  alt: "Beige curtain and sheer combination for modern interiors in Chennai",
},
{
  src: "/images/gallery/soft-white-sheer-curtains-apartment.jpg",
  category: "Curtains",
  alt: "Soft white sheer curtains for a bright apartment living area",
},
{
  src: "/images/gallery/minimal-black-bedroom-curtains.jpg",
  category: "Curtains",
  alt: "Minimal black curtains installed for a modern bedroom window",
},
{
  src: "/images/gallery/floor-to-ceiling-sheer-curtains.jpg",
  category: "Curtains",
  alt: "Floor to ceiling sheer curtains for luxury living room interiors",
},
{
  src: "/images/gallery/beige-window-curtains-modern-home.jpg",
  category: "Curtains",
  alt: "Beige modern window curtains installed for a contemporary home",
},
{
  src: "/images/gallery/white-sheer-window-curtains-chennai.jpg",
  category: "Curtains",
  alt: "White sheer window curtains creating soft natural lighting",
},
{
  src: "/images/gallery/kitchen-window-curtain-installation.jpg",
  category: "Curtains",
  alt: "Compact kitchen window curtain installation with elegant finish",
},
{
  src: "/images/gallery/luxury-double-layer-curtains-chennai.jpg",
  category: "Curtains",
  alt: "Luxury double layer curtains with sheer and blackout combination",
},
{
  src: "/images/gallery/warm-tone-sheer-curtain-design.jpg",
  category: "Curtains",
  alt: "Warm tone curtain styling with sheer layers for modern homes",
},
{
  src: "/images/gallery/textured-beige-blackout-curtains.jpg",
  category: "Curtains",
  alt: "Textured beige blackout curtains with premium fabric finish",
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
