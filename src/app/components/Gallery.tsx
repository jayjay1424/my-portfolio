import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { ZoomIn, Eye, Heart, ExternalLink } from "lucide-react";
import { ModernPortfolio } from "./ModernPortfolio";
import { MaisonWebsite } from "./MaisonWebsite";

// Import graphic design works
import jordanPoster from "figma:asset/eaaaa9475f740a5c7afc8782bd1dadaf21c7aff7.png";
import jordanShoe from "figma:asset/173333c0e02a338ebcd55172f2152112cf1a06bd.png";
import velocityCars from "figma:asset/92ef44aaf02ccb3ee65a7c4db33b31f9a6dd71e8.png";
import maxVerstappen from "figma:asset/d03140679c59ba04987f4899a9ea201278e544f1.png";
import portfolioWebDesign from "figma:asset/1dff6284bcd270e6bd465d2814a27ab62d5211dd.png";
import maisonWebsiteMockup from "figma:asset/89f5364d9c07dfcaa318ad9d5bb91a22225974a4.png";

export function Gallery() {
  const [showModernPortfolio, setShowModernPortfolio] = useState(false);
  const [showMaisonWebsite, setShowMaisonWebsite] = useState(false);
  const [galleryStats, setGalleryStats] = useState([
    {
      src: portfolioWebDesign,
      alt: "Modern Portfolio - Responsive Web Design",
      category: "Web Design",
      views: 2145,
      likes: 156,
      isLiked: false,
      isWebProject: true,
      websiteType: "modern-portfolio"
    },
    {
      src: maisonWebsiteMockup,
      alt: "MAISON - Luxury Furniture E-Commerce",
      category: "Web Design",
      views: 1834,
      likes: 142,
      isLiked: false,
      isWebProject: true,
      websiteType: "maison"
    },
    {
      src: jordanPoster,
      alt: "Michael Jordan - Become Legendary Poster",
      category: "Graphic Design",
      views: 1247,
      likes: 89,
      isLiked: false,
      isWebProject: false
    },
    {
      src: jordanShoe,
      alt: "Jordan 23 - Legend Shoe Poster",
      category: "Graphic Design",
      views: 956,
      likes: 72,
      isLiked: false,
      isWebProject: false
    },
    {
      src: velocityCars,
      alt: "Velocity Unleashed - Automotive Design",
      category: "Graphic Design",
      views: 1532,
      likes: 103,
      isLiked: false,
      isWebProject: false
    },
    {
      src: maxVerstappen,
      alt: "Max Verstappen - Ignite The Competition",
      category: "Graphic Design",
      views: 1089,
      likes: 94,
      isLiked: false,
      isWebProject: false
    },
  ]);

  const handleImageOpen = (index: number) => {
    setGalleryStats(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], views: updated[index].views + 1 };
      return updated;
    });
  };

  const handleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryStats(prev => {
      const updated = [...prev];
      const current = updated[index];
      updated[index] = {
        ...current,
        isLiked: !current.isLiked,
        likes: current.isLiked ? current.likes - 1 : current.likes + 1
      };
      return updated;
    });
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      {/* Modern Portfolio Overlay */}
      {showModernPortfolio && (
        <ModernPortfolio onClose={() => setShowModernPortfolio(false)} />
      )}

      {/* Maison Website Overlay */}
      {showMaisonWebsite && (
        <MaisonWebsite onClose={() => setShowMaisonWebsite(false)} />
      )}

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">Gallery</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual collection of my prototypes, designs, and creative works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryStats.map((item, index) => (
            item.isWebProject ? (
              // Web Project - Opens full website
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => {
                  handleImageOpen(index);
                  if (item.websiteType === "modern-portfolio") {
                    setShowModernPortfolio(true);
                  } else if (item.websiteType === "maison") {
                    setShowMaisonWebsite(true);
                  }
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <ExternalLink className="text-white w-8 h-8 mb-2" />
                  <p className="text-white font-medium text-center">{item.alt}</p>
                  <span className="text-primary text-sm mt-1">{item.category}</span>
                  <span className="text-white text-xs mt-2 bg-primary/20 px-3 py-1 rounded-full">Click to view live site</span>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(index, e);
                    }}
                    className="flex items-center gap-1 text-white text-sm hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors ${item.isLiked ? 'fill-red-500 text-red-500' : ''}`}
                    />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Graphic Design - Opens in dialog
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                    onClick={() => handleImageOpen(index)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 pointer-events-none">
                      <ZoomIn className="text-white w-8 h-8 mb-2" />
                      <p className="text-white font-medium text-center">{item.alt}</p>
                      <span className="text-primary text-sm mt-1">{item.category}</span>
                    </div>
                    
                    {/* Stats overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between gap-3 pointer-events-none">
                      <div className="flex items-center gap-1 text-white text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(index, e);
                        }}
                        className="flex items-center gap-1 text-white text-sm hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
                      >
                        <Heart 
                          className={`w-4 h-4 transition-colors ${item.isLiked ? 'fill-red-500 text-red-500' : ''}`}
                        />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="max-w-none w-[98vw] p-0 bg-transparent border-none shadow-none">
                  <DialogTitle className="sr-only">{item.alt}</DialogTitle>
                  <DialogDescription className="sr-only">
                    Full size view of {item.alt}
                  </DialogDescription>
                  <div className="relative w-full h-[98vh] rounded-lg overflow-hidden flex items-center justify-center bg-black/50">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                    {/* Stats in enlarged view */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-lg mb-1">{item.alt}</p>
                        <p className="text-gray-300 text-sm">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-white">
                          <Eye className="w-5 h-5" />
                          <span className="font-medium">{item.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <Heart className={`w-5 h-5 ${item.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                          <span className="font-medium">{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          ))}
        </div>
      </div>
    </section>
  );
}