const testimonials = [
  {
    name: "Priya Raman",
    location: "Anna Nagar",
    text:
      "Excellent curtain quality and very professional installation. The team helped us choose the perfect fabric combination for our interiors.",
  },

  {
    name: "Karthik Subramanian",
    location: "Vadapalani",
    text:
      "Very impressed with the zebra blinds installation. Premium finish, clean fitting and timely completion.",
  },

  {
    name: "Divya Krishnan",
    location: "Virugambakkam",
    text:
      "The ripple fold curtains completely transformed our living room. Highly recommended for modern interiors.",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-[#f8f6f2] py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Google Reviews
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-[#111] leading-tight mb-8">
            Trusted By Homeowners
            Across Chennai
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Hundreds of homeowners trust Classic Delight for
            premium curtains, blinds and custom window solutions.
          </p>

          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

            <img
  src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
  alt="Google"
  className="w-6 h-6 opacity-70"
/>

            <div className="flex items-center gap-2">

              <span className="text-[#111] font-semibold text-lg">
                4.9
              </span>

              <span className="text-[#f26522]">
                ★★★★★
              </span>

            </div>

            <span className="text-gray-500">
              Based on customer reviews
            </span>

          </div>

        </div>

        {/* REVIEW GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group bg-white rounded-[36px] p-8 border border-black/5 shadow-[0_15px_60px_rgba(0,0,0,0.04)] hover:-translate-y-3 transition duration-700"
            >

              <div className="flex items-center justify-between mb-8">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-xl font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <p className="font-semibold text-[#111] text-lg">
                      {item.name}
                    </p>

                    <p className="text-gray-500 text-sm">
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

              <p className="text-gray-600 text-lg leading-relaxed">
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
            className="inline-flex items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-2xl hover:bg-black transition duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
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