import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-serif tracking-tighter mb-6">KANSO.</h3>
            <p className="max-w-xs text-muted-foreground">
              Tokyo specialty coffee. <br />
              Global shipping available for beans and equipment.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest">Visit</h4>
            <address className="not-italic text-sm space-y-2 text-muted-foreground">
              <p>1-23-4 Jinnan, Shibuya-ku</p>
              <p>Tokyo, Japan 150-0041</p>
              <p>+81 3-1234-5678</p>
            </address>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest">Hours</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex justify-between max-w-[140px]">
                <span>Mon - Fri</span>
                <span>08:00 - 19:00</span>
              </li>
              <li className="flex justify-between max-w-[140px]">
                <span>Sat - Sun</span>
                <span>09:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-border pt-10 gap-6">
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
          
          <div className="text-xs font-mono text-muted-foreground text-right">
            <p>© {new Date().getFullYear()} KANSO COFFEE.</p>
            <p>DESIGNED IN TOKYO.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
