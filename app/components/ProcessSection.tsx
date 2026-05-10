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
    <section className="bg-[#f8f6f2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
              Our Process
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-[#111]">
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
                className="bg-white border border-black/5 rounded-[28px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <p className="text-[#f26522] text-sm mb-8">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-[#111]">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
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
