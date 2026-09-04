import { useState, useEffect } from "react";
import { X, Award, TrendingUp, Users, Star } from "lucide-react";
import { Button } from "./ui/button";

interface ModernPortfolioProps {
  onClose: () => void;
}

export function ModernPortfolio({ onClose }: ModernPortfolioProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    const container = document.getElementById('modern-portfolio-container');
    
    const handleScroll = () => {
      if (container) {
        setScrolled(container.scrollTop > 50);
      }
    };

    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('scroll', handleReveal);
      handleReveal(); // Initial check
    }

    return () => {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = '';
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('scroll', handleReveal);
      }
    };
  }, []);

  return (
    <div 
      id="modern-portfolio-container"
      className="fixed inset-0 z-[100] bg-white overflow-auto"
    >
      <style>{`
        /* Custom scrollbar */
        #modern-portfolio-container::-webkit-scrollbar {
          width: 10px;
        }
        #modern-portfolio-container::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        #modern-portfolio-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #2563EB, #7C3AED);
          border-radius: 5px;
        }
        
        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        
        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Fade in animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        
        /* Scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Nav link underline animation */
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563EB, #7C3AED);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        /* Gradient button */
        .btn-gradient {
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #1d4ed8, #6d28d9);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
        }
        
        /* Card hover effect */
        .card-hover {
          transition: all 0.4s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        /* Mobile menu */
        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }
        
        .mobile-menu.active {
          transform: translateX(0);
        }

        /* Progress bar animation */
        @keyframes progressBar {
          from { width: 0; }
        }

        .progress-bar {
          animation: progressBar 2s ease-out forwards;
        }

        /* Particles background */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.3), transparent);
          border-radius: 50%;
          animation: particleFloat 20s infinite;
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }
      `}</style>

      {/* Close Button */}
      <Button
        onClick={onClose}
        className="fixed top-6 right-6 z-[110] h-12 w-12 rounded-full p-0 bg-white shadow-xl hover:shadow-2xl border-2 border-gray-100"
        variant="outline"
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="modern-portfolio h-full">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <a href="#home" className="text-3xl font-bold gradient-text">Alex Chen</a>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-10">
                <a href="#home" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
                <a href="#services" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
                <a href="#projects" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors">Portfolio</a>
                <a href="#testimonials" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              </div>
              
              <div className="hidden md:block">
                <a href="#contact" className="btn-gradient text-white px-8 py-3 rounded-full font-semibold">
                  Hire Me
                </a>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu fixed top-0 right-0 w-80 h-full bg-white shadow-2xl md:hidden ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="p-6">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <div className="mt-16 flex flex-col space-y-6">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50">
          {/* Particles Background */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  '--tx': `${(Math.random() - 0.5) * 400}px`,
                  '--ty': `${-Math.random() * 800}px`
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6 fade-in-up delay-1">
                  <p className="text-blue-600 font-semibold text-sm">👋 Welcome to my portfolio</p>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 fade-in-up delay-2">
                  Hello, I'm <span className="gradient-text">Alex Chen</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-4 fade-in-up delay-3">
                  Full-Stack Developer & UI/UX Designer
                </p>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed fade-in-up delay-3">
                  I create stunning digital experiences that combine beautiful design with powerful functionality.
                </p>
                <div className="flex flex-wrap gap-4 fade-in-up delay-4">
                  <a href="#projects" className="btn-gradient text-white px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 text-lg">
                    View My Work
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                  <a href="#contact" className="px-10 py-4 rounded-full font-semibold border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-lg">
                    Get in Touch
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 fade-in-up delay-5">
                  <div className="text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">50+</p>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">30+</p>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">5+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Profile Image */}
              <div className="order-1 lg:order-2 flex justify-center fade-in-up delay-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc3VpdHxlbnwxfHx8fDE3NzA4MjQ0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Alex Chen - Professional Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 floating">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">5+ Years</p>
                        <p className="text-sm text-gray-500">Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="reveal">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                  <p className="text-blue-600 font-semibold text-sm">About Me</p>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Passionate About <span className="gradient-text">Creating Excellence</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Hi! I'm Alex Chen, a seasoned full-stack developer and UI/UX designer with over 5 years of experience in crafting beautiful, functional digital products that users love.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  My journey in web development started with a passion for creating seamless user experiences. Today, I specialize in building scalable applications using modern technologies while maintaining a strong focus on design aesthetics and usability.
                </p>

                {/* Skills Progress */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">Web Development</span>
                      <span className="text-blue-600 font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="progress-bar bg-gradient-to-r from-blue-500 to-violet-600 h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">UI/UX Design</span>
                      <span className="text-blue-600 font-semibold">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="progress-bar bg-gradient-to-r from-blue-500 to-violet-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">Mobile Development</span>
                      <span className="text-blue-600 font-semibold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="progress-bar bg-gradient-to-r from-blue-500 to-violet-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800">Brand Strategy</span>
                      <span className="text-blue-600 font-semibold">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="progress-bar bg-gradient-to-r from-blue-500 to-violet-600 h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Achievement Cards */}
              <div className="reveal grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl card-hover">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
                  <p className="text-gray-600">Successful Projects</p>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-2xl card-hover mt-8">
                  <div className="w-14 h-14 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">30+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl card-hover">
                  <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
                  <p className="text-gray-600">Awards Won</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl card-hover mt-8">
                  <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">5.0</h3>
                  <p className="text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 reveal">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <p className="text-blue-600 font-semibold text-sm">What I Offer</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                My <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to elevate your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="reveal bg-white p-10 rounded-3xl shadow-lg card-hover border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Custom websites and web applications built with cutting-edge technologies for optimal performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>SEO Optimization</span>
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="reveal bg-white p-10 rounded-3xl shadow-lg card-hover border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">UI/UX Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Beautiful, intuitive interfaces that create exceptional user experiences and drive engagement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>User Research</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Design Systems</span>
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="reveal bg-white p-10 rounded-3xl shadow-lg card-hover border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Mobile Apps</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cross-platform mobile applications that deliver native performance on iOS and Android.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>React Native</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>Native Performance</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span>App Store Publishing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 reveal">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <p className="text-blue-600 font-semibold text-sm">My Work</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A showcase of my recent work and creative endeavors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Project 1 */}
              <div className="reveal group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <svg className="w-20 h-20 mx-auto mb-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <h4 className="text-xl font-bold">E-Commerce Platform</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8">
                    <button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A modern online shopping experience with seamless checkout and inventory management
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">MongoDB</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="reveal group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-400 via-green-500 to-cyan-500 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <svg className="w-20 h-20 mx-auto mb-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                      <h4 className="text-xl font-bold">Fitness App</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8">
                    <button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Fitness Tracking App</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Track workouts, nutrition, and progress with beautiful data visualizations
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">React Native</span>
                  <span className="px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Firebase</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="reveal group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <svg className="w-20 h-20 mx-auto mb-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                      </svg>
                      <h4 className="text-xl font-bold">Music Streaming</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8">
                    <button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Music Streaming Service</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Stream millions of songs with personalized playlists and recommendations
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">GraphQL</span>
                  <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-violet-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 reveal">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <p className="text-blue-600 font-semibold text-sm">Testimonials</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take my word for it - hear from satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="reveal bg-white p-8 rounded-3xl shadow-lg card-hover">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Alex transformed our vision into reality with exceptional skill and professionalism. The website exceeded all our expectations!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-500">CEO, TechStart Inc</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="reveal bg-white p-8 rounded-3xl shadow-lg card-hover">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Working with Alex was a pleasure. His attention to detail and creative solutions made our project a huge success."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Sarah Miller</p>
                    <p className="text-sm text-gray-500">Designer, Creative Studio</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="reveal bg-white p-8 rounded-3xl shadow-lg card-hover">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Outstanding developer! Alex delivered a top-quality mobile app that our users absolutely love. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MJ
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Mike Johnson</p>
                    <p className="text-sm text-gray-500">Founder, FitLife App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's collaborate to bring your vision to life. I'm here to help you create something amazing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 reveal">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <p className="text-blue-600 font-semibold text-sm">Get In Touch</p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Let's Work <span className="gradient-text">Together</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's create something extraordinary.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="reveal space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Email</p>
                        <a href="mailto:hello@alexchen.com" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">hello@alexchen.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Phone</p>
                        <a href="tel:+15551234567" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">+1 (555) 123-4567</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Location</p>
                        <p className="text-lg font-semibold text-gray-800">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-200">
                  <h4 className="font-bold mb-6 text-gray-800 text-lg">Follow Me</h4>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="reveal">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gradient text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2024 Alex Chen. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
