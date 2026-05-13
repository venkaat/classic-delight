
"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

interface GalleryItem {
  src: string;
  category: string;
  alt: string;
}

const data: GalleryItem[] = [
  {
  src: "/images/gallery/Curtains-001.jpeg",
  category: "Curtains",
  alt: "Luxury sheer curtains for modern balcony sliding door interiors in Chennai",
},
{
  src: "/images/gallery/Curtains-002.jpg",
  category: "Curtains",
  alt: "Premium blackout curtains for elegant living room interiors",
},

{
  src: "/images/gallery/Curtains-004.jpg",
  category: "Curtains",
  alt: "Custom window curtains for luxury apartment interiors in Chennai",
},
{
  src: "/images/gallery/Curtains-005.jpg",
  category: "Curtains",
  alt: "Soft white sheer curtains for bright modern home interiors",
},

{
  src: "/images/gallery/Curtains-007.jpg",
  category: "Curtains",
  alt: "Elegant beige curtains with sheer layer for contemporary homes",
},
{
  src: "/images/gallery/Curtains-008.jpg",
  category: "Curtains",
  alt: "Modern bedroom blackout curtains with premium fabric finish",
},

{
  src: "/images/gallery/Curtains-010.jpg",
  category: "Curtains",
  alt: "Custom made curtains for stylish modern home interiors",
},

{
  src: "/images/gallery/Curtains-012.jpg",
  category: "Curtains",
  alt: "Premium curtain installation for modern homes in Chennai",
},

{
  src: "/images/gallery/Curtains-014.jpg",
  category: "Curtains",
  alt: "Modern sheer window curtains for natural daylight interiors",
},


{
  src: "/images/gallery/Curtains-017.jpg",
  category: "Curtains",
  alt: "Custom designer curtains for modern villas and apartments",
},
{
  src: "/images/gallery/Curtains-018.jpg",
  category: "Curtains",
  alt: "Soft beige curtains with elegant pleated curtain styling",
},
{
  src: "/images/gallery/Curtains-019.jpg",
  category: "Curtains",
  alt: "Luxury sheer curtain installation for spacious home interiors",
},
{
  src: "/images/gallery/Curtains-020.jpg",
  category: "Curtains",
  alt: "Modern curtain design ideas for premium living room interiors",
},
{
  src: "/images/gallery/Curtains-021.jpg",
  category: "Curtains",
  alt: "Elegant custom curtains for modern apartment living rooms",
},
{
  src: "/images/gallery/Curtains-022.jpg",
  category: "Curtains",
  alt: "Premium sheer curtains for bright and airy home interiors",
},
{
  src: "/images/gallery/Curtains-023.jpg",
  category: "Curtains",
  alt: "Modern blackout curtains for stylish bedroom window designs",
},
{
  src: "/images/gallery/Curtains-024.jpg",
  category: "Curtains",
  alt: "Luxury double layer curtains with sheer fabric combination",
},
{
  src: "/images/gallery/Curtains-025.jpg",
  category: "Curtains",
  alt: "Designer living room curtains for contemporary home interiors",
},
{
  src: "/images/gallery/Curtains-026.jpg",
  category: "Curtains",
  alt: "Soft white curtains for elegant modern apartment interiors",
},
{
  src: "/images/gallery/Curtains-027.jpg",
  category: "Curtains",
  alt: "Custom made window curtains with premium fabric finish",
},
{
  src: "/images/gallery/Curtains-028.jpg",
  category: "Curtains",
  alt: "Floor to ceiling sheer curtains for luxury homes in Chennai",
},
{
  src: "/images/gallery/Curtains-029.jpg",
  category: "Curtains",
  alt: "Modern taupe curtains with soft sheer curtain layering",
},
{
  src: "/images/gallery/Curtains-030.jpg",
  category: "Curtains",
  alt: "Premium curtain installation services for luxury interiors",
},
{
  src: "/images/gallery/Curtains-031.jpg",
  category: "Curtains",
  alt: "Elegant beige blackout curtains for modern living spaces",
},
{
  src: "/images/gallery/Curtains-032.jpg",
  category: "Curtains",
  alt: "Stylish home curtains with contemporary interior curtain design",
},

{
  src: "/images/gallery/Curtains-043.jpg",
  category: "Curtains",
  alt: "Modern blackout curtains for stylish bedroom interiors",
},
{
  src: "/images/gallery/Curtains-044.jpg",
  category: "Curtains",
  alt: "Custom window curtain installation for luxury homes in Chennai",
},

{
  src: "/images/gallery/Curtains-046.jpg",
  category: "Curtains",
  alt: "Soft beige curtains for premium apartment interiors",
},
{
  src: "/images/gallery/Curtains-047.jpg",
  category: "Curtains",
  alt: "Designer curtains for contemporary living room interiors",
},
{
  src: "/images/gallery/Curtains-048.jpg",
  category: "Curtains",
  alt: "Luxury floor to ceiling curtains for modern home styling",
},
{
  src: "/images/gallery/Curtains-049.jpg",
  category: "Curtains",
  alt: "Modern sheer curtains for elegant window decoration",
},
{
  src: "/images/gallery/Curtains-050.jpg",
  category: "Curtains",
  alt: "Premium custom made curtains for stylish home interiors",
},


{
  src: "/images/gallery/Curtains-073.jpg",
  category: "Curtains",
  alt: "Soft white curtains with contemporary interior styling",
},
{
  src: "/images/gallery/Curtains-074.jpg",
  category: "Curtains",
  alt: "Elegant custom blackout curtains for bedroom interiors",
},
{
  src: "/images/gallery/Curtains-075.jpg",
  category: "Curtains",
  alt: "Luxury full length curtains for spacious modern homes",
},
{
  src: "/images/gallery/Curtains-076.jpg",
  category: "Curtains",
  alt: "Premium sheer curtain installation for elegant interiors",
},
{
  src: "/images/gallery/Curtains-077.jpg",
  category: "Curtains",
  alt: "Modern apartment curtains with stylish layered curtain design",
},
{
  src: "/images/gallery/Curtains-078.jpg",
  category: "Curtains",
  alt: "Designer taupe curtains for luxury living room interiors",
},
{
  src: "/images/gallery/Curtains-079.jpg",
  category: "Curtains",
  alt: "Custom made curtains for premium contemporary interiors",
},
{
  src: "/images/gallery/Curtains-080.jpg",
  category: "Curtains",
  alt: "Elegant modern curtains for stylish window decoration",
},
{
  src: "/images/gallery/Curtains-081.jpg",
  category: "Curtains",
  alt: "Luxury blackout curtains with soft sheer layering",
},
{
  src: "/images/gallery/Curtains-082.jpg",
  category: "Curtains",
  alt: "Premium curtain solutions for modern apartment interiors",
},
{
  src: "/images/gallery/Curtains-083.jpg",
  category: "Curtains",
  alt: "Modern sheer curtains with elegant natural lighting effect",
},
{
  src: "/images/gallery/Curtains-084.jpg",
  category: "Curtains",
  alt: "Designer living room curtain installation for luxury homes",
},
{
  src: "/images/gallery/Curtains-085.jpg",
  category: "Curtains",
  alt: "Soft beige blackout curtains for premium home interiors",
},
{
  src: "/images/gallery/Curtains-086.jpg",
  category: "Curtains",
  alt: "Elegant window curtains for modern luxury apartments",
},
{
  src: "/images/gallery/Curtains-087.jpg",
  category: "Curtains",
  alt: "Luxury sheer curtains for contemporary living room styling",
},
{
  src: "/images/gallery/Curtains-088.jpg",
  category: "Curtains",
  alt: "Modern custom curtains with premium pleated fabric finish",
},
{
  src: "/images/gallery/Curtains-089.jpg",
  category: "Curtains",
  alt: "Designer blackout curtains for elegant bedroom interiors",
},
{
  src: "/images/gallery/Curtains-090.jpg",
  category: "Curtains",
  alt: "Premium floor to ceiling curtains for stylish modern homes",
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
