import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between border-b border-border overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-tokyo.png" 
          alt="Kanso Coffee Tokyo Interior" 
          className="w-full h-full object-cover grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-12 h-full flex flex-col justify-between flex-grow">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mix-blend-difference leading-[0.9] tracking-tighter mb-6">
            PRECISION <br />
            IN EVERY <br />
            <span className="italic font-light">POUR.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-8 text-white mix-blend-difference">
          <div className="max-w-sm space-y-4">
            <p className="text-lg font-medium leading-relaxed">
              A minimalist sanctuary for coffee purists. 
              Sourcing rare single origins and roasting with 
              architectural precision in the heart of Shibuya.
            </p>
            <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black transition-colors uppercase font-mono tracking-widest">
              Explore The Menu
            </Button>
          </div>

          <div className="hidden md:flex flex-col items-center gap-2 animate-bounce">
            <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
