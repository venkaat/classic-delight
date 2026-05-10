const trustItems = [
  "1000+ Homes Styled",
  "Premium Imported Fabrics",
  "Custom Stitching",
  "Professional Installation",
  "Serving Chennai",
];

export default function TrustBar() {
  return (
    <section className="relative z-20 border-y border-white/10 bg-black py-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f26522]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {trustItems.map((item) => (
            <div key={item}>
              <p className="text-white/80 text-sm md:text-base tracking-wide">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
