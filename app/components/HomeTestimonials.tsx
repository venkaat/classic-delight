const testimonials = [
  {
    name: "ranjith paramesh",
    location: "Virugambakkam",
    text:
      "Got a new curtains for my home from classic delight,Installation was very Professional and Good with their Quality of work and materials, thank you."

  },

  {
    name: "M.R. Kavitha",
    location: "Vadapalani",
    text:
      "New and elegant designs which is easy to clean and maintain.",
  },

  {
    name: "Bhagavathy thangaraj",
    location: "Virugambakkam",
    text:
      "I'm very much satisfied with your team work.... Curtains quality and installations are neatly done... Thank you for your service...",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-black py-28 overflow-hidden relative">
      {/* GLOW */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#f26522]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Google Reviews
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-white leading-tight mb-8">
            Trusted By Homeowners
            Across Chennai
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Hundreds of homeowners trust Classic Delight for
            premium curtains, blinds and custom window solutions.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-full">

            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              className="w-6 h-6 opacity-70"
            />

            <div className="flex items-center gap-2">

              <span className="text-white font-semibold text-lg">
                4.9
              </span>

              <span className="text-[#f26522]">
                ★★★★★
              </span>

            </div>

            <span className="text-white/50">
              Based on customer reviews
            </span>

          </div>

        </div>

        {/* REVIEW GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group bg-white/5 border border-white/10 rounded-[36px] p-8 hover:border-[#f26522]/30 hover:-translate-y-3 transition duration-700"
            >

              <div className="flex items-center justify-between mb-8">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-xl font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <p className="font-semibold text-white text-lg">
                      {item.name}
                    </p>

                    <p className="text-white/50 text-sm">
                      {item.location}
                    </p>

                  </div>

                </div>

                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                  alt="Google"
                  className="w-6 h-6 opacity-70"
                />

              </div>

              <div className="text-[#f26522] text-lg mb-6">
                ★★★★★
              </div>

              <p className="text-white/70 text-lg leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>

            </div>

          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <a
            href="https://maps.app.goo.gl/ghZRyT2CtCSy6SRw5"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-500"
          >

            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
              alt="Google"
              className="w-6 h-6 opacity-70"
            />

            View Google Reviews

          </a>

        </div>

      </div>

    </section>
  );
}