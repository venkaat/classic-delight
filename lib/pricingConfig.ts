export const FABRICS = {
  Cotton: 400,
  Linen: 400,
  Polyester: 130,
  Blackout: 220,
  Silk: 300,
  "Poly Cotton": 400,
  "Custom Printed": 300,
  Sheer: 300,
};

export const fabricImages: Record<string, string> = {
  Cotton: "/images/fabrics/cotton.jpg",
  Linen: "/images/fabrics/linen.jpg",
  Polyester: "/images/fabrics/polyester.jpg",
  Blackout: "/images/fabrics/blackout.jpg",
  Silk: "/images/fabrics/silk.jpg",
  "Poly Cotton": "/images/fabrics/polycotton.jpg",
  "Custom Printed": "/images/fabrics/printed.jpg",
  Sheer: "/images/fabrics/sheer.jpg",
};

export const blueprintFabricColors: Record<string, string> = {
  Cotton: "#faf0e6", // Linen/cotton warm white
  Linen: "#d6c5b3", // Natural linen beige
  Polyester: "#708090", // Slate grey polyester
  Blackout: "#1c2321", // Deep charcoal blackout
  Silk: "#d4af37", // Silk gold
  "Poly Cotton": "#eae6df", // Off-white polycotton
  "Custom Printed": "#8b5a2b", // Rich printed patterned brown
  Sheer: "#f5f5f5", // Translucent white sheer
};

export const blueprintFabricOpacities: Record<string, number> = {
  Cotton: 0.8,
  Linen: 0.85,
  Polyester: 0.85,
  Blackout: 0.98,
  Silk: 0.9,
  "Poly Cotton": 0.8,
  "Custom Printed": 0.9,
  Sheer: 0.35,
};

export const curtainImages: Record<string, string> = {
  "Pleated Curtains": "/images/curtain-styles/pleated.jpg",
  "Ripple Curtains": "/images/curtain-styles/ripple.jpg",
  "Eyelet Curtains": "/images/curtain-styles/eyelet.png",
  "Hospital Curtains": "/images/curtain-styles/hospital.jpg",
};

// Base tailoring/installation rates
export const TAILORING_COST_BASE = 1250;
export const TRACK_COST_BASE = 1850;
export const FIXING_COST_BASE = 1000;
