const testimonials = [
  {
    name: "Neha Sharma",
    text: "The curtains transformed our living room. The finish feels premium and the fitting was perfect.",
  },
  {
    name: "Ankit Verma",
    text: "Very professional from measurement to installation. Clean work and excellent fabric suggestions.",
  },
  {
    name: "Pooja Mehta",
    text: "Loved the variety and the customization. The team made the whole process easy.",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
            Testimonials
          </p>
          <h2 className="text-5xl font-semibold text-[#111]">
            What Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[28px] bg-[#f8f6f2] p-8 border border-black/5"
            >
              <div className="text-[#f26522] mb-5">★★★★★</div>
              <p className="text-gray-600 leading-relaxed mb-8">
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="font-semibold text-[#111]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
