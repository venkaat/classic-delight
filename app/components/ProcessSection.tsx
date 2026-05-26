const steps = [
  {
    title: "Measure",
    text: "We visit, understand the space, and take precise window measurements.",
  },
  {
    title: "Select",
    text: "Choose fabrics, finishes, blind styles, and mesh systems with expert guidance.",
  },
  {
    title: "Install",
    text: "Our team fits everything neatly with a premium, ready-to-use finish.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* GLOWS */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#f26522]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
              Our Process
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
              Simple,
              <br />
              Precise,
              <br />
              Beautifully Done
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl hover:border-[#f26522]/30 transition duration-500"
              >
                <p className="text-[#f26522] text-sm mb-8">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
