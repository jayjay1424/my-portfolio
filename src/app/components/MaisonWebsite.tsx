import { useState, useEffect } from "react";
import { X, Search, Heart, ShoppingCart, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "figma:asset/3eed1be4f4e0c5323e2e9ccd5f39e73b4b730afd.png";

interface MaisonWebsiteProps {
  onClose: () => void;
}

export function MaisonWebsite({ onClose }: MaisonWebsiteProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    const container = document.getElementById('maison-container');
    
    const handleScroll = () => {
      if (container) {
        setScrolled(container.scrollTop > 50);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = '';
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div 
      id="maison-container"
      className="fixed inset-0 z-[100] bg-white overflow-auto"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

        #maison-container h1, 
        #maison-container h2, 
        #maison-container h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        #maison-container::-webkit-scrollbar {
          width: 10px;
        }
        #maison-container::-webkit-scrollbar-track {
          background: #f8f5f2;
        }
        #maison-container::-webkit-scrollbar-thumb {
          background: #a67c52;
          border-radius: 5px;
        }

        .maison-category-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3/4;
          cursor: pointer;
        }

        .maison-category-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .maison-category-card:hover img {
          transform: scale(1.08);
        }

        .maison-category-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 2.5rem;
          color: white;
          transition: all 0.4s;
        }

        .maison-category-card:hover .maison-category-overlay {
          background: linear-gradient(to top, rgba(139,90,43,0.75) 0%, transparent 60%);
        }
      `}</style>

      {/* Close Button */}
      <Button
        onClick={onClose}
        className="fixed top-6 right-6 z-[110] h-12 w-12 rounded-full p-0 bg-[#1a1a1a] shadow-xl hover:shadow-2xl border-2 border-[#a67c52] hover:bg-[#a67c52] transition-colors duration-300"
        variant="outline"
      >
        <X className="h-6 w-6 text-white" />
      </Button>

      {/* Header / Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          scrolled 
            ? 'bg-white/92 backdrop-blur-xl border-b border-[#c8b496]/20 shadow-md' 
            : 'bg-white/92 backdrop-blur-xl border-b border-[#c8b496]/20'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-[5%]">
          <nav className="flex justify-between items-center h-[90px]">
            <div 
              className="text-[2.1rem] font-semibold tracking-wider"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#a67c52'
              }}
            >
              MAISON
            </div>
            
            <ul className="hidden md:flex gap-12 list-none">
              <li>
                <a 
                  href="#home" 
                  className="text-[#2d2d2d] no-underline font-medium transition-colors hover:text-[#a67c52]"
                >
                  HOME
                </a>
              </li>
              <li>
                <a 
                  href="#shop" 
                  className="text-[#2d2d2d] no-underline font-medium transition-colors hover:text-[#a67c52]"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-[#2d2d2d] no-underline font-medium transition-colors hover:text-[#a67c52]"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-[#2d2d2d] no-underline font-medium transition-colors hover:text-[#a67c52]"
                >
                  CONTACT
                </a>
              </li>
            </ul>

            <div className="flex gap-7 text-xl">
              <a href="#search" className="text-[#2d2d2d] transition-colors hover:text-[#a67c52]">
                <Search className="h-5 w-5" />
              </a>
              <a href="#favorites" className="text-[#2d2d2d] transition-colors hover:text-[#a67c52]">
                <Heart className="h-5 w-5" />
              </a>
              <a href="#cart" className="text-[#2d2d2d] transition-colors hover:text-[#a67c52]">
                <ShoppingCart className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home"
        className="relative flex items-center bg-[#f8f5f2] pt-24"
        style={{ minHeight: '700px' }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
            opacity: 0.88
          }}
        />

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.65) 60%, #ffffff 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-[5%] py-20">
          <div className="max-w-[680px]">
            <div 
              className="text-[#a67c52] text-sm tracking-[3px] uppercase mb-4"
            >
              ESTABLISHED 2010
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 text-[#1a1a1a]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Timeless Furniture Crafted for Modern Living
            </h1>
            
            <p className="text-base md:text-lg max-w-[480px] mb-8 text-[#444]">
              Discover handcrafted pieces that blend heritage artistry with contemporary elegance.
            </p>
            
            <a 
              href="#shop"
              className="inline-block bg-[#a67c52] text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-400 border border-[#a67c52] hover:bg-transparent hover:text-[#a67c52] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(166,124,82,0.22)]"
            >
              SHOP COLLECTION →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section id="shop" className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-[5%]">
          <h2 
            className="text-3xl md:text-4xl text-center mb-12 text-[#222]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Living Room */}
            <div className="maison-category-card">
              <img 
                src="https://www.premium-sofas.com/cdn/shop/files/Lifestyle-PhoenixLG-Modern-Leather_4.jpg?v=1768919008" 
                alt="Living Room"
              />
              <div className="maison-category-overlay">
                <h3 className="text-2xl font-medium">Living Room</h3>
              </div>
            </div>

            {/* Bedroom */}
            <div className="maison-category-card">
              <img 
                src="https://thumbs.dreamstime.com/b/elegant-modern-penthouse-living-room-features-large-sectional-sofa-brown-leather-chairs-arranged-around-coffee-tables-dining-area-403946537.jpg" 
                alt="Bedroom"
              />
              <div className="maison-category-overlay">
                <h3 className="text-2xl font-medium">Bedroom</h3>
              </div>
            </div>

            {/* Dining */}
            <div className="maison-category-card">
              <img 
                src="http://www.loewendesignstudios.com/cdn/shop/articles/why-is-walnut-the-best-choice-for-your-table-579626.jpg?v=1649900048" 
                alt="Dining"
              />
              <div className="maison-category-overlay">
                <h3 className="text-2xl font-medium">Dining</h3>
              </div>
            </div>

            {/* Office */}
            <div className="maison-category-card">
              <img 
                src="https://www.decorilla.com/online-decorating/wp-content/uploads/2024/08/Modern-dining-room-with-sculptural-trending-dining-table-by-DECORILLA-1024x683.jpg" 
                alt="Office"
              />
              <div className="maison-category-overlay">
                <h3 className="text-2xl font-medium">Office</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f8f5f2]">
        <div className="max-w-[1200px] mx-auto px-[5%] text-center">
          <h2 
            className="text-3xl md:text-4xl mb-6 text-[#222]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Craftsmanship Meets Elegance
          </h2>
          <p className="text-base md:text-lg text-[#555] max-w-[800px] mx-auto leading-relaxed mb-6">
            Since 2010, MAISON has been dedicated to creating timeless furniture pieces that transform houses into homes. 
            Each piece is meticulously handcrafted by skilled artisans using premium materials, ensuring both beauty and durability.
          </p>
          <p className="text-base md:text-lg text-[#555] max-w-[800px] mx-auto leading-relaxed">
            Our commitment to sustainability and quality craftsmanship means you're investing in furniture that will be cherished for generations.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-[5%] text-center">
          <h2 
            className="text-3xl md:text-4xl mb-4 text-[#222]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Join Our Community
          </h2>
          <p className="text-[#666] mb-8 text-base md:text-lg">
            Subscribe to receive exclusive offers, design inspiration, and updates on new collections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto">
            <input 
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 border-2 border-[#e0d5c7] focus:outline-none focus:border-[#a67c52] transition-colors"
            />
            <button className="bg-[#a67c52] text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-400 border border-[#a67c52] hover:bg-transparent hover:text-[#a67c52] hover:-translate-y-1">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#f8f5f2] py-20 text-center text-[#555]">
        <div className="max-w-[1440px] mx-auto px-[5%]">
          <div 
            className="text-[2.5rem] font-semibold mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#a67c52'
            }}
          >
            MAISON
          </div>
          
          <p className="mb-6 text-lg">© 2026 MAISON. All rights reserved.</p>
          
          <div className="flex justify-center gap-9 mb-6">
            <a href="#privacy" className="text-[#666] no-underline transition-colors hover:text-[#a67c52]">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#666] no-underline transition-colors hover:text-[#a67c52]">
              Terms of Service
            </a>
            <a href="#shipping" className="text-[#666] no-underline transition-colors hover:text-[#a67c52]">
              Shipping & Returns
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#facebook" className="text-[#a67c52] transition-transform hover:scale-110">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#instagram" className="text-[#a67c52] transition-transform hover:scale-110">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#pinterest" className="text-[#a67c52] transition-transform hover:scale-110">
              <Send className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}