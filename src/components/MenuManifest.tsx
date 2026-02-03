import { Separator } from "./ui/separator";

const menuItems = [
  {
    category: "POUR OVER",
    items: [
      { name: "ETHIOPIA GEDEB", process: "WASHED", notes: "JASMINE, PEACH, BERGAMOT", price: "¥800" },
      { name: "KENYA KIRINYAGA", process: "WASHED", notes: "BLACK CURRANT, TOMATO, COLA", price: "¥850" },
      { name: "COLOMBIA PINK BOURBON", process: "NATURAL", notes: "STRAWBERRY, GUAVA, CACAO", price: "¥900" },
    ]
  },
  {
    category: "ESPRESSO",
    items: [
      { name: "HOUSE BLEND 'TOKYO'", process: "WASHED/NATURAL", notes: "DARK CHOCOLATE, ALMOND, PLUM", price: "¥600" },
      { name: "SINGLE ORIGIN", process: "ROTATING", notes: "ASK BARISTA", price: "¥700" },
    ]
  }
];

const MenuManifest = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Section Header */}
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif tracking-tighter">
              THE <br />
              MANIFEST
            </h2>
            <p className="text-muted-foreground max-w-xs text-justify">
              Our menu is a living document, changing daily based on humidity, 
              barometric pressure, and the roast profile of our beans. 
              Served in handcrafted glassware.
            </p>
            <div className="aspect-[3/4] w-full bg-muted mt-8 overflow-hidden relative">
               <img 
                src="/images/glassware-pour.png" 
                alt="Precision Pour" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Menu List */}
          <div className="lg:w-2/3 pt-4">
            {menuItems.map((section, idx) => (
              <div key={section.category} className="mb-16">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-xs bg-foreground text-background px-2 py-1">0{idx + 1}</span>
                  <h3 className="text-2xl font-mono tracking-widest uppercase">{section.category}</h3>
                </div>
                
                <div className="space-y-0">
                  {section.items.map((item, itemIdx) => (
                    <div key={item.name} className="group border-t border-border py-6 hover:bg-muted/30 transition-colors cursor-default">
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
                        <h4 className="text-xl font-medium">{item.name}</h4>
                        <div className="flex-grow border-b border-dotted border-muted-foreground/30 hidden md:block mx-4"></div>
                        <span className="font-mono text-lg">{item.price}</span>
                      </div>
                      <div className="flex gap-4 mt-2 text-sm font-mono text-muted-foreground uppercase">
                        <span>[{item.process}]</span>
                        <span>/</span>
                        <span>{item.notes}</span>
                      </div>
                    </div>
                  ))}
                  <Separator className="bg-border" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuManifest;
