import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Philosophy = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative aspect-square overflow-hidden">
             <img 
              src="/images/beans-macro.png" 
              alt="Roasted Beans" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay Text */}
            <div className="absolute top-4 left-4 font-mono text-xs border border-white/20 px-2 py-1">
              FIG. 03: TEXTURE
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <span className="font-mono text-xs tracking-[0.2em] text-white/60 uppercase">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              KANSO (簡素) <br />
              <span className="text-white/50">SIMPLICITY</span> <br />
              ELIMINATING <br />
              THE CLUTTER.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              We believe that true luxury lies in the absence of the unnecessary. 
              By stripping away the excess, we allow the intrinsic quality of 
              the coffee to speak for itself. No syrups, no distractions. 
              Just bean, water, and time.
            </p>
            
            <Button className="rounded-none bg-white text-black hover:bg-white/90 group">
              READ THE JOURNAL
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
