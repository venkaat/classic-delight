
"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



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
{
  src: "/images/gallery/Curtains-091.jpg",
  category: "Curtains",
  alt: "Luxury sheer curtains with soft natural light styling",
},
{
  src: "/images/gallery/Curtains-092.jpg",
  category: "Curtains",
  alt: "Elegant living room curtains with modern fabric texture",
},
{
  src: "/images/gallery/Curtains-093.jpg",
  category: "Curtains",
  alt: "Custom stitched curtains for contemporary home interiors",
},
{
  src: "/images/gallery/Curtains-094.jpg",
  category: "Curtains",
  alt: "Modern window curtains with premium blackout fabric",
},
{
  src: "/images/gallery/Curtains-095.jpg",
  category: "Curtains",
  alt: "Double layer sheer and blackout curtains for luxury spaces",
},
{
  src: "/images/gallery/Curtains-096.jpg",
  category: "Curtains",
  alt: "Minimal modern curtains installed for bright apartment interiors",
},
{
  src: "/images/gallery/Curtains-097.jpg",
  category: "Curtains",
  alt: "Tailor made curtains with elegant pleated finish",
},
{
  src: "/images/gallery/Curtains-098.jpg",
  category: "Curtains",
  alt: "Premium bedroom curtains with soft fabric draping",
},
{
  src: "/images/gallery/Curtains-099.jpg",
  category: "Curtains",
  alt: "Luxury custom curtains for modern residential interiors",
},
{
  src: "/images/gallery/Curtains-100.jpg",
  category: "Curtains",
  alt: "Contemporary sheer curtains for spacious living rooms",
},
{
  src: "/images/gallery/Curtains-101.jpg",
  category: "Curtains",
  alt: "Elegant blackout curtains with premium stitching detail",
},
{
  src: "/images/gallery/Curtains-102.jpg",
  category: "Curtains",
  alt: "Soft neutral tone curtains for luxury apartment styling",
},
{
  src: "/images/gallery/Curtains-102.jpg",
  category: "Curtains",
  alt: "Soft neutral tone curtains for luxury apartment styling",
},
{
  src: "/images/gallery/Curtains-103.jpg",
  category: "Curtains",
  alt: "Elegant sheer curtains with premium pleated detailing",
},
{
  src: "/images/gallery/Curtains-104.jpg",
  category: "Curtains",
  alt: "Modern blackout curtains for stylish bedroom interiors",
},
{
  src: "/images/gallery/Curtains-105.jpg",
  category: "Curtains",
  alt: "Luxury window curtains with soft fabric draping finish",
},
{
  src: "/images/gallery/Curtains-106.jpg",
  category: "Curtains",
  alt: "Premium custom curtains installed for contemporary homes",
},
{
  src: "/images/gallery/Curtains-107.jpg",
  category: "Curtains",
  alt: "Minimal modern curtains with elegant floor length styling",
},
{
  src: "/images/gallery/Curtains-108.jpg",
  category: "Curtains",
  alt: "Designer sheer curtains creating bright natural interiors",
},
{
  src: "/images/gallery/Curtains-109.jpg",
  category: "Curtains",
  alt: "Double layer curtains with blackout and sheer combination",
},
{
  src: "/images/gallery/Curtains-110.jpg",
  category: "Curtains",
  alt: "Premium pleated curtains with luxury fabric texture",
},
{
  src: "/images/gallery/Curtains-111.jpg",
  category: "Curtains",
  alt: "Modern living room curtains with elegant neutral tones",
},
{
  src: "/images/gallery/Curtains-112.jpg",
  category: "Curtains",
  alt: "Tailor made curtains for spacious residential interiors",
},
{
  src: "/images/gallery/Curtains-113.jpg",
  category: "Curtains",
  alt: "Soft white sheer curtains for premium apartment windows",
},
{
  src: "/images/gallery/Curtains-114.jpg",
  category: "Curtains",
  alt: "Luxury blackout curtains with premium stitching detail",
},
{
  src: "/images/gallery/Curtains-115.jpg",
  category: "Curtains",
  alt: "Elegant floor to ceiling curtains for modern homes",
},
{
  src: "/images/gallery/Curtains-116.jpg",
  category: "Curtains",
  alt: "Custom designer curtains with soft pleated finish",
},
{
  src: "/images/gallery/Curtains-117.jpg",
  category: "Curtains",
  alt: "Premium sheer curtain styling for bright living spaces",
},
{
  src: "/images/gallery/Curtains-118.jpg",
  category: "Curtains",
  alt: "Modern textured curtains installed for luxury interiors",
},
{
  src: "/images/gallery/Curtains-119.jpg",
  category: "Curtains",
  alt: "Elegant blackout curtains with contemporary fabric design",
},
{
  src: "/images/gallery/Curtains-120.jpg",
  category: "Curtains",
  alt: "Luxury apartment curtains with sheer layered styling",
},
{
  src: "/images/gallery/Curtains-121.jpg",
  category: "Curtains",
  alt: "Soft neutral curtains with premium custom tailoring",
},
{
  src: "/images/gallery/Curtains-122.jpg",
  category: "Curtains",
  alt: "Modern pleated curtains for stylish bedroom interiors",
},
{
  src: "/images/gallery/Curtains-123.jpg",
  category: "Curtains",
  alt: "Premium custom window curtains with elegant finish",
},
{
  src: "/images/gallery/Curtains-124.jpg",
  category: "Curtains",
  alt: "Designer sheer and blackout curtains for luxury homes",
},
{
  src: "/images/gallery/Curtains-125.jpg",
  category: "Curtains",
  alt: "Minimal curtain styling for modern residential interiors",
},
{
  src: "/images/gallery/Curtains-126.jpg",
  category: "Curtains",
  alt: "Luxury floor length curtains with premium fabric texture",
},
{
  src: "/images/gallery/Curtains-127.jpg",
  category: "Curtains",
  alt: "Tailor made blackout curtains with elegant pleat detailing",
},
{
  src: "/images/gallery/Curtains-128.jpg",
  category: "Curtains",
  alt: "Bright white sheer curtains for modern apartment windows",
},
{
  src: "/images/gallery/Curtains-129.jpg",
  category: "Curtains",
  alt: "Premium neutral tone curtains for spacious interiors",
},
{
  src: "/images/gallery/Curtains-130.jpg",
  category: "Curtains",
  alt: "Modern luxury curtains with layered sheer combination",
},
{
  src: "/images/gallery/Curtains-131.jpg",
  category: "Curtains",
  alt: "Elegant pleated curtains installed for contemporary homes",
},
{
  src: "/images/gallery/Curtains-132.jpg",
  category: "Curtains",
  alt: "Designer bedroom curtains with premium blackout fabric",
},
{
  src: "/images/gallery/Curtains-133.jpg",
  category: "Curtains",
  alt: "Custom stitched curtains with modern luxury styling",
},
{
  src: "/images/gallery/Curtains-134.jpg",
  category: "Curtains",
  alt: "Soft sheer curtains for elegant daylight interiors",
},
{
  src: "/images/gallery/Curtains-135.jpg",
  category: "Curtains",
  alt: "Luxury modern curtains with premium fabric draping",
},
{
  src: "/images/gallery/Curtains-136.jpg",
  category: "Curtains",
  alt: "Elegant living room curtains with custom tailored finish",
},
{
  src: "/images/gallery/Curtains-137.jpg",
  category: "Curtains",
  alt: "Premium blackout curtains for stylish modern bedrooms",
},
{
  src: "/images/gallery/Curtains-138.jpg",
  category: "Curtains",
  alt: "Modern sheer curtain installation for luxury apartments",
},
{
  src: "/images/gallery/Curtains-139.jpg",
  category: "Curtains",
  alt: "Soft neutral curtains with elegant layered styling",
},
{
  src: "/images/gallery/Curtains-140.jpg",
  category: "Curtains",
  alt: "Luxury pleated curtains with premium residential finish",
},
{
  src: "/images/gallery/Curtains-140.jpg",
  category: "Curtains",
  alt: "Luxury pleated curtains with premium residential finish",
},
{
  src: "/images/gallery/Curtains-141.jpg",
  category: "Curtains",
  alt: "Elegant modern curtains with soft neutral fabric styling",
},
{
  src: "/images/gallery/Curtains-142.jpg",
  category: "Curtains",
  alt: "Premium blackout curtains for stylish contemporary bedrooms",
},
{
  src: "/images/gallery/Curtains-143.jpg",
  category: "Curtains",
  alt: "Custom sheer curtains with elegant natural light finish",
},
{
  src: "/images/gallery/Curtains-144.jpg",
  category: "Curtains",
  alt: "Modern floor length curtains with luxury fabric texture",
},
{
  src: "/images/gallery/Curtains-145.jpg",
  category: "Curtains",
  alt: "Tailor made curtains with premium pleated detailing",
},
{
  src: "/images/gallery/Curtains-146.jpg",
  category: "Curtains",
  alt: "Soft white sheer curtains for spacious apartment interiors",
},
{
  src: "/images/gallery/Curtains-147.jpg",
  category: "Curtains",
  alt: "Elegant living room curtains with modern layered styling",
},
{
  src: "/images/gallery/Curtains-148.jpg",
  category: "Curtains",
  alt: "Luxury blackout curtains with premium stitching finish",
},
{
  src: "/images/gallery/Curtains-149.jpg",
  category: "Curtains",
  alt: "Designer curtains installed for contemporary residential interiors",
},
{
  src: "/images/gallery/Curtains-150.jpg",
  category: "Curtains",
  alt: "Minimal modern curtains with elegant soft draping",
},
{
  src: "/images/gallery/Curtains-151.jpg",
  category: "Curtains",
  alt: "Premium sheer curtain installation for bright modern homes",
},
{
  src: "/images/gallery/Curtains-152.jpg",
  category: "Curtains",
  alt: "Double layer curtains with blackout and sheer combination styling",
},
{
  src: "/images/gallery/Curtains-153.jpg",
  category: "Curtains",
  alt: "Luxury custom curtains with soft neutral tone finish",
},
{
  src: "/images/gallery/Curtains-154.jpg",
  category: "Curtains",
  alt: "Modern pleated curtains for elegant bedroom interiors",
},
{
  src: "/images/gallery/Curtains-155.jpeg",
  category: "Curtains",
  alt: "Premium residential curtains with contemporary styling",
},
{
  src: "/images/gallery/Curtains-156.jpeg",
  category: "Curtains",
  alt: "Elegant sheer curtains creating bright luxury interiors",
},
{
  src: "/images/gallery/Curtains-157.jpg",
  category: "Curtains",
  alt: "Designer blackout curtains with premium fabric texture",
},
{
  src: "/images/gallery/Curtains-158.jpg",
  category: "Curtains",
  alt: "Luxury apartment curtains with elegant layered finish",
},
{
  src: "/images/gallery/Curtains-159.jpeg",
  category: "Curtains",
  alt: "Modern custom curtains with soft premium draping",
},

{
  src: "/images/gallery/Curtains-161.jpg",
  category: "Curtains",
  alt: "Premium sheer curtains with elegant daylight styling",
},


];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = showAll ? data : data.slice(0, 8);

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
    <section className="relative py-24 bg-black overflow-hidden">

      {/* GLOW */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >

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

        </motion.div>

        {/* GALLERY GRID */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={img.src}
                onClick={() => openImage(img, index)}
                className="group relative overflow-hidden rounded-[32px] cursor-pointer aspect-[4/5] bg-white/5 border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={70}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Maximize2 size={16} className="text-[#f26522]" />
                    <span>View Project</span>
                  </div>
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[32px]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SHOW MORE */}
        {data.length > 8 && (

          <div className="flex justify-center mt-14">

            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl hover:border-[#f26522]/50 transition duration-500"
            >
              <span className="relative z-10 font-medium">
              {showAll ? "Show Less" : "View More"}
              </span>
            </button>

          </div>

        )}

      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full z-[10000]"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white/30 hover:text-[#f26522] transition-all p-3 bg-white/5 rounded-full z-[10000]"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full h-full max-w-6xl max-h-[80vh]"
            >
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white/60 text-sm tracking-widest uppercase">
                  Installation {currentIndex + 1} of {data.length}
                </p>
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white/30 hover:text-[#f26522] transition-all p-3 bg-white/5 rounded-full z-[10000]"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
