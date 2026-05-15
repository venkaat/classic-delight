import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            AI Interior Assistant
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Talk to our AI Agent to get design advice, visualize room layouts, and find the perfect window solutions for your space.
          </p>
        </div>

        <iframe 
          src="https://ais-pre-rvcmuhsgnkvflyahhs6gvf-410534104855.asia-east1.run.app?embed=true" 
          style={{ width: '100%', height: '800px', border: 'none', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
          allow="camera; microphone"
        />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}