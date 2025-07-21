import { useState, useRef, useEffect } from 'react';
import { Phone, Home, Zap, Shield, Wrench, Droplets, Layers, X, CheckCircle, ChevronDown, ArrowRight, Star, Clock, Users, Award, CreditCard, Menu, MapPin, Play, Building2, Sparkles, Lock, Wifi, Camera, Volume2, Palette } from 'lucide-react'
import './App.css'

// Import images
import lifetimeLogo from './assets/LifetimeHomeServicesLogo.png';
import heroImage from './assets/actual_hero_house_image.jpeg';
import radonTestingDevice from './assets/radon_testing_device_professional_new.jpg';
import concreteFloorCoating from './assets/concrete_floor_coating_professional.jpg';
import hvacProfessional from './assets/hvac_professional_new.jpg';
import aerosealLogo from './assets/aeroseal_logo.jpg';

// Flake images - Updated Torginol flakes
import flakeDesertSand from './assets/flake_desert_sand.jpg';
import flakeOceanBlue from './assets/flake_ocean_blue.jpg';
import flakeTidalWave from './assets/flake_tidal_wave.jpg';
import flakeStormGray from './assets/flake_storm_gray.jpg';
import flakeMixedBed from './assets/flake_mixed_bed.jpg';

// Multi-Brand Header Component with Brand Switcher
function MultiBrandHeader({ openContactForm, handlePhoneClick, currentPage, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand }) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [brandSwitcherOpen, setBrandSwitcherOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const areasDropdownRef = useRef(null);
  const brandSwitcherRef = useRef(null);

  // Brand configurations
  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      logo: lifetimeLogo,
      colors: { primary: '#1e40af', secondary: '#fbbf24' },
      phone: '(262) 955-5701',
      tollFree: '(833) 941-6888',
      services: ['Free Radon Testing', 'Radon Mitigation', 'Concrete Coatings', 'HVAC & AeroSeal', 'Handyman Services', 'Electrical Services']
    },
    america: {
      name: 'America In-Home',
      tagline: 'All Your Home Needs, Under One Roof',
      logo: lifetimeLogo, // Will be replaced with America In-Home logo
      colors: { primary: '#dc2626', secondary: '#1e40af' },
      phone: '(262) 790-4050',
      tollFree: '(833) 941-6888',
      services: ['Smart Homes', 'Security Systems', 'Entertainment', 'Central Vacuums', 'Custom Aquariums', 'Window Treatments']
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Custom Storage Solutions',
      logo: lifetimeLogo, // Will be replaced with Closet Concepts logo
      colors: { primary: '#059669', secondary: '#f59e0b' },
      phone: '(262) 955-5701',
      tollFree: '(833) 941-6888',
      services: ['Custom Closets', 'Storage Solutions', 'Garage Organization', 'Pantry Systems', 'Office Organization', 'Laundry Rooms']
    }
  };

  const currentBrandConfig = brands[currentBrand];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(event.target)) {
        setAreasDropdownOpen(false);
      }
      if (brandSwitcherRef.current && !brandSwitcherRef.current.contains(event.target)) {
        setBrandSwitcherOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`professional-header ${currentBrand}-brand`}>
      {/* Brand Switcher Bar */}
      <div className="brand-switcher-bar">
        <div className="brand-switcher-container">
          <div className="brand-switcher" ref={brandSwitcherRef}>
            <button 
              className="brand-switcher-trigger"
              onClick={() => setBrandSwitcherOpen(!brandSwitcherOpen)}
            >
              <Building2 size={16} />
              {currentBrandConfig.name}
              <ChevronDown size={14} className={brandSwitcherOpen ? 'rotated' : ''} />
            </button>
            {brandSwitcherOpen && (
              <div className="brand-switcher-menu">
                <button 
                  className={`brand-option ${currentBrand === 'lifetime' ? 'active' : ''}`}
                  onClick={() => { setCurrentBrand('lifetime'); setBrandSwitcherOpen(false); setCurrentPage('home'); }}
                >
                  <Home size={16} />
                  <div>
                    <strong>Lifetime Home Services</strong>
                    <span>Radon • HVAC • Floor Coatings</span>
                  </div>
                </button>
                <button 
                  className={`brand-option ${currentBrand === 'america' ? 'active' : ''}`}
                  onClick={() => { setCurrentBrand('america'); setBrandSwitcherOpen(false); setCurrentPage('home'); }}
                >
                  <Sparkles size={16} />
                  <div>
                    <strong>America In-Home</strong>
                    <span>Smart Homes • Security • Entertainment</span>
                  </div>
                </button>
                <button 
                  className={`brand-option ${currentBrand === 'closets' ? 'active' : ''}`}
                  onClick={() => { setCurrentBrand('closets'); setBrandSwitcherOpen(false); setCurrentPage('home'); }}
                >
                  <Layers size={16} />
                  <div>
                    <strong>Closet Concepts</strong>
                    <span>Custom Closets • Storage Solutions</span>
                  </div>
                </button>
              </div>
            )}
          </div>
          <div className="brand-switcher-info">
            <span>Serving Wisconsin, Illinois, Minnesota & Colorado</span>
          </div>
        </div>
      </div>

      <div className="header-container">
        {/* Logo and Company Name - Enhanced Size */}
        <div className="brand-section" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('home'); }}>
          <img src={currentBrandConfig.logo} alt={currentBrandConfig.name} className="lifetime-logo-enhanced" />
          <div className="company-info">
            <h1 className="company-name-enhanced">{currentBrandConfig.name}</h1>
            <p className="company-tagline">{currentBrandConfig.tagline}</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navigation-section desktop-nav">
          <nav className="main-navigation">
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('home'); }} className={currentPage === 'home' ? 'active' : ''}>Home</a>
            
            {/* Brand-specific navigation */}
            {currentBrand === 'lifetime' && (
              <>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); }} className={currentPage === 'radon-testing' ? 'active' : ''}>Free Radon Testing</a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-mitigation'); }} className={currentPage === 'radon-mitigation' ? 'active' : ''}>Radon Mitigation</a>
              </>
            )}
            
            {/* Services Dropdown with Brand-specific Services */}
            <div className="nav-dropdown" ref={servicesDropdownRef}>
              <a 
                href="#" 
                className="dropdown-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setAreasDropdownOpen(false);
                }}
              >
                Services
                <ChevronDown size={16} className={servicesDropdownOpen ? 'rotated' : ''} />
              </a>
              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  {currentBrand === 'lifetime' && (
                    <>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('concrete'); setServicesDropdownOpen(false); }}>
                        Concrete Coatings
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); setServicesDropdownOpen(false); }}>
                        HVAC & AeroSeal
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('handyman'); setServicesDropdownOpen(false); }}>
                        Handyman Services
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('electrical'); setServicesDropdownOpen(false); }}>
                        Electrical Services
                      </a>
                    </>
                  )}
                  {currentBrand === 'america' && (
                    <>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('smart-homes'); setServicesDropdownOpen(false); }}>
                        Smart Homes
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('security-systems'); setServicesDropdownOpen(false); }}>
                        Security Systems
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('entertainment'); setServicesDropdownOpen(false); }}>
                        Entertainment
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('central-vacuums'); setServicesDropdownOpen(false); }}>
                        Central Vacuums
                      </a>
                    </>
                  )}
                  {currentBrand === 'closets' && (
                    <>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('custom-closets'); setServicesDropdownOpen(false); }}>
                        Custom Closets
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('storage-solutions'); setServicesDropdownOpen(false); }}>
                        Storage Solutions
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('garage-organization'); setServicesDropdownOpen(false); }}>
                        Garage Organization
                      </a>
                      <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('pantry-systems'); setServicesDropdownOpen(false); }}>
                        Pantry Systems
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
            
            {/* Coverage Areas Dropdown */}
            <div className="nav-dropdown" ref={areasDropdownRef}>
              <a 
                href="#" 
                className="dropdown-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  setAreasDropdownOpen(!areasDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
              >
                Coverage Areas
                <ChevronDown size={16} className={areasDropdownOpen ? 'rotated' : ''} />
              </a>
              {areasDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('wisconsin'); setAreasDropdownOpen(false); }}>
                    <MapPin size={16} />
                    Wisconsin
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('illinois'); setAreasDropdownOpen(false); }}>
                    <MapPin size={16} />
                    Illinois
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('minnesota'); setAreasDropdownOpen(false); }}>
                    <MapPin size={16} />
                    Minnesota
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('colorado'); setAreasDropdownOpen(false); }}>
                    <MapPin size={16} />
                    Colorado
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('about'); }} className={currentPage === 'about' ? 'active' : ''}>About</a>
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('contact'); }} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="financing-link">Financing</a>
          </nav>
        </div>
        
        {/* Contact Section with Brand-specific Phone Numbers */}
        <div className="header-contact">
          <div className="phone-numbers">
            <a href={`tel:${currentBrandConfig.phone.replace(/[^\d]/g, '')}`} className="phone-header mobile-only">
              <Phone size={20} />
              {currentBrandConfig.phone}
            </a>
            <button onClick={handlePhoneClick} className="phone-header desktop-only">
              <Phone size={20} />
              {currentBrandConfig.phone}
            </button>
            <div className="toll-free-number">
              <span className="toll-free-label">Toll Free:</span>
              <a href={`tel:${currentBrandConfig.tollFree.replace(/[^\d]/g, '')}`} className="mobile-only">{currentBrandConfig.tollFree}</a>
              <button onClick={handlePhoneClick} className="desktop-only">{currentBrandConfig.tollFree}</button>
            </div>
          </div>
          <button onClick={openContactForm} className="quote-btn-header">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button className="hamburger-menu-btn mobile-only" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}>
          <nav className="mobile-navigation" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <h3>Menu</h3>
              <button onClick={closeMobileMenu} className="close-mobile-nav">
                <X size={24} />
              </button>
            </div>
            <div className="mobile-nav-links">
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('home'); closeMobileMenu(); }}>
                <Home size={20} />
                Home
              </a>
              {currentBrand === 'lifetime' && (
                <>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); closeMobileMenu(); }}>
                    <Shield size={20} />
                    Free Radon Testing
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-mitigation'); closeMobileMenu(); }}>
                    <Shield size={20} />
                    Radon Mitigation
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('concrete'); closeMobileMenu(); }}>
                    <Layers size={20} />
                    Concrete Coatings
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); closeMobileMenu(); }}>
                    <Zap size={20} />
                    HVAC & AeroSeal
                  </a>
                </>
              )}
              {currentBrand === 'america' && (
                <>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('smart-homes'); closeMobileMenu(); }}>
                    <Wifi size={20} />
                    Smart Homes
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('security-systems'); closeMobileMenu(); }}>
                    <Lock size={20} />
                    Security Systems
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('entertainment'); closeMobileMenu(); }}>
                    <Volume2 size={20} />
                    Entertainment
                  </a>
                </>
              )}
              {currentBrand === 'closets' && (
                <>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('custom-closets'); closeMobileMenu(); }}>
                    <Layers size={20} />
                    Custom Closets
                  </a>
                  <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('storage-solutions'); closeMobileMenu(); }}>
                    <Home size={20} />
                    Storage Solutions
                  </a>
                </>
              )}
              <div className="mobile-nav-section">
                <h4>Coverage Areas</h4>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('wisconsin'); closeMobileMenu(); }}>
                  <MapPin size={20} />
                  Wisconsin
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('illinois'); closeMobileMenu(); }}>
                  <MapPin size={20} />
                  Illinois
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('minnesota'); closeMobileMenu(); }}>
                  <MapPin size={20} />
                  Minnesota
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('colorado'); closeMobileMenu(); }}>
                  <MapPin size={20} />
                  Colorado
                </a>
              </div>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('about'); closeMobileMenu(); }}>
                <Users size={20} />
                About
              </a>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('contact'); closeMobileMenu(); }}>
                <Phone size={20} />
                Contact
              </a>
              <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="financing-link-mobile">
                <CreditCard size={20} />
                Financing
              </a>
            </div>
            <div className="mobile-nav-footer">
              <button onClick={() => { openContactForm(); closeMobileMenu(); }} className="mobile-contact-btn">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// Brand-specific Hero Components
function LifetimeHero({ openContactForm, handlePhoneClick }) {
  return (
    <section className="premium-hero-homepage">
      <div className="hero-overlay-premium"></div>
      <div className="hero-content-homepage">
        <div className="hero-text-section">
          <div className="hero-badge-homepage">Wisconsin • Illinois • Minnesota & Colorado • Professional Excellence</div>
          <h1 className="hero-title-homepage">
            Trusted Solutions. <span className="hero-accent">Lifetime Results.</span>
          </h1>
          <p className="hero-subtitle-homepage">
            Radon • HVAC • Floor Coatings • Duct Sealing • Smart Home & Security<br />
            <strong>Serving Wisconsin, Illinois, Minnesota & Colorado</strong>
          </p>
          <div className="hero-buttons-homepage">
            <button onClick={handlePhoneClick} className="btn-primary-homepage">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary-homepage">
              Get Free Estimate
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="btn-financing-homepage">
              <CreditCard size={20} />
              Financing Available
            </a>
          </div>
        </div>
        <div className="hero-image-section">
          <img src={heroImage} alt="Professional Home Services" className="hero-image-large" />
        </div>
      </div>
    </section>
  );
}

function AmericaInHomeHero({ openContactForm, handlePhoneClick }) {
  return (
    <section className="premium-hero-homepage america-brand">
      <div className="hero-overlay-premium"></div>
      <div className="hero-content-homepage">
        <div className="hero-text-section">
          <div className="hero-badge-homepage">Smart Home Technology • Security Systems • Professional Excellence</div>
          <h1 className="hero-title-homepage">
            All Your Home Needs. <span className="hero-accent">Under One Roof.</span>
          </h1>
          <p className="hero-subtitle-homepage">
            Smart Homes • Security Systems • Entertainment • Central Vacuums<br />
            <strong>Control4 Certified • Over 25 Years Experience</strong>
          </p>
          <div className="hero-buttons-homepage">
            <button onClick={handlePhoneClick} className="btn-primary-homepage">
              <Phone size={20} />
              Call (262) 790-4050
            </button>
            <button onClick={openContactForm} className="btn-secondary-homepage">
              Schedule Consultation
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="btn-financing-homepage">
              <CreditCard size={20} />
              Financing Available
            </a>
          </div>
        </div>
        <div className="hero-image-section">
          <img src={heroImage} alt="Smart Home Technology" className="hero-image-large" />
        </div>
      </div>
    </section>
  );
}

function ClosetConceptsHero({ openContactForm, handlePhoneClick }) {
  return (
    <section className="premium-hero-homepage closets-brand">
      <div className="hero-overlay-premium"></div>
      <div className="hero-content-homepage">
        <div className="hero-text-section">
          <div className="hero-badge-homepage">Custom Storage Solutions • Professional Design • Expert Installation</div>
          <h1 className="hero-title-homepage">
            Custom Storage. <span className="hero-accent">Organized Living.</span>
          </h1>
          <p className="hero-subtitle-homepage">
            Custom Closets • Storage Solutions • Garage Organization • Pantry Systems<br />
            <strong>Transform Your Space with Professional Organization</strong>
          </p>
          <div className="hero-buttons-homepage">
            <button onClick={handlePhoneClick} className="btn-primary-homepage">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary-homepage">
              Free Design Consultation
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="btn-financing-homepage">
              <CreditCard size={20} />
              Financing Available
            </a>
          </div>
        </div>
        <div className="hero-image-section">
          <img src={heroImage} alt="Custom Storage Solutions" className="hero-image-large" />
        </div>
      </div>
    </section>
  );
}

// Cross-Brand Services Component
function CrossBrandServices({ currentBrand, setCurrentBrand, setCurrentPage }) {
  const otherBrands = {
    lifetime: ['america', 'closets'],
    america: ['lifetime', 'closets'],
    closets: ['lifetime', 'america']
  };

  const brandInfo = {
    lifetime: {
      name: 'Lifetime Home Services',
      description: 'Professional radon testing & mitigation, HVAC services, and premium concrete coatings',
      services: ['Free Radon Testing', 'Radon Mitigation', 'HVAC & AeroSeal', 'Concrete Coatings'],
      icon: <Home size={32} />,
      color: 'lifetime'
    },
    america: {
      name: 'America In-Home',
      description: 'Smart home technology, security systems, and entertainment solutions',
      services: ['Smart Homes (Control4)', 'Security Systems', 'Entertainment', 'Central Vacuums'],
      icon: <Sparkles size={32} />,
      color: 'america'
    },
    closets: {
      name: 'Closet Concepts',
      description: 'Custom storage solutions and professional organization systems',
      services: ['Custom Closets', 'Storage Solutions', 'Garage Organization', 'Pantry Systems'],
      icon: <Layers size={32} />,
      color: 'closets'
    }
  };

  return (
    <section className="cross-brand-services">
      <div className="container">
        <h2>Explore Our Complete Family of Brands</h2>
        <p>
          From home services to smart technology to custom storage - we have everything you need under one roof. 
          Switch between our brands to discover all the ways we can enhance your home.
        </p>
        
        <div className="brand-services-grid">
          {otherBrands[currentBrand].map((brandKey) => {
            const brand = brandInfo[brandKey];
            return (
              <div key={brandKey} className={`brand-service-card ${brand.color}`}>
                <div className="brand-service-icon">
                  {brand.icon}
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <ul className="brand-service-list">
                  {brand.services.map((service, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      {service}
                    </li>
                  ))}
                </ul>
                <button 
                  className="brand-switch-btn"
                  onClick={() => {
                    setCurrentBrand(brandKey);
                    setCurrentPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Explore {brand.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Enhanced Professional Footer Component
function ProfessionalFooter({ setCurrentPage, currentBrand }) {
  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      phone: '(262) 955-5701',
      services: ['Free Radon Testing', 'Radon Mitigation', 'Concrete Coatings', 'HVAC & AeroSeal']
    },
    america: {
      name: 'America In-Home',
      phone: '(262) 790-4050',
      services: ['Smart Homes', 'Security Systems', 'Entertainment', 'Central Vacuums']
    },
    closets: {
      name: 'Closet Concepts',
      phone: '(262) 955-5701',
      services: ['Custom Closets', 'Storage Solutions', 'Garage Organization', 'Pantry Systems']
    }
  };

  const currentBrandInfo = brands[currentBrand] || brands.lifetime;

  return (
    <footer className="professional-footer">
      <div className="footer-container">
        {/* Footer Slogan */}
        <div className="footer-slogan">
          <img src={lifetimeLogo} alt={currentBrandInfo.name} className="footer-logo" />
          <h2>{currentBrandInfo.name}</h2>
          <p className="footer-slogan-text">Professional services across Wisconsin, Illinois, Minnesota & Colorado</p>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>Phone: {currentBrandInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>Toll Free: (833) 941-6888</span>
              </div>
              <div className="contact-item">
                <span>Email: info@lifetimehomeservices.com</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Our Services</h3>
            {currentBrandInfo.services.map((service, index) => (
              <a key={index} href="#" onClick={() => setCurrentPage(service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, ''))}>
                {service}
              </a>
            ))}
          </div>
          
          <div className="footer-section">
            <h3>Service Areas</h3>
            <p><strong>Wisconsin:</strong> All Services</p>
            <p><strong>Illinois:</strong> HVAC & Smart Homes</p>
            <p><strong>Minnesota:</strong> Free Radon Testing</p>
            <p><strong>Colorado:</strong> Free Radon Testing</p>
          </div>
          
          <div className="footer-section">
            <h3>Trust Badges</h3>
            <div className="trust-badges">
              <div className="trust-badge">
                <CheckCircle size={20} />
                <span>EPA Certified</span>
              </div>
              <div className="trust-badge">
                <Shield size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="trust-badge">
                <Star size={20} />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {currentBrandInfo.name}. All rights reserved. Professional services in Wisconsin, Illinois, Minnesota & Colorado.</p>
        </div>
      </div>
    </footer>
  );
}

// Enhanced Radon Mitigation Page with Premium Content
function RadonMitigationPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand }) {
  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="radon-mitigation"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      {/* Premium Hero Section */}
      <section className="premium-hero radon-mitigation-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-premium">
          <div className="hero-badge-premium">
            <span>EPA Certified • All States • Guaranteed Results</span>
          </div>
          <h1 className="hero-title-premium">Professional Radon Mitigation</h1>
          <h2 className="hero-subtitle-premium">Custom Systems. Guaranteed Results.</h2>
          <p className="hero-description-premium">
            Protect your family with professional radon mitigation systems designed specifically for your home. 
            EPA-certified installation with guaranteed results below 4.0 pCi/L.
          </p>
          <div className="hero-buttons-premium">
            <button onClick={handlePhoneClick} className="btn-primary-premium">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary-premium">
              Get Free Estimate
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="btn-financing-premium">
              <CreditCard size={20} />
              Financing Available
            </a>
          </div>
        </div>
        <div className="hero-image-premium">
          <img src={radonTestingDevice} alt="Professional Radon Mitigation" />
        </div>
      </section>

      {/* Why Choose Professional Mitigation */}
      <section className="benefits-section-premium">
        <div className="container">
          <h2 className="section-title-premium">Why Choose Professional Radon Mitigation?</h2>
          <div className="benefits-grid-premium">
            <div className="benefit-card-premium">
              <div className="benefit-icon">
                <Shield size={48} />
              </div>
              <h3>Guaranteed Results</h3>
              <p>Our EPA-certified systems are guaranteed to reduce radon levels below 4.0 pCi/L, protecting your family's health and meeting all safety standards.</p>
            </div>
            <div className="benefit-card-premium">
              <div className="benefit-icon">
                <Award size={48} />
              </div>
              <h3>EPA Certified Installation</h3>
              <p>Professional installation by EPA-certified technicians following all industry standards, local building codes, and manufacturer specifications.</p>
            </div>
            <div className="benefit-card-premium">
              <div className="benefit-icon">
                <Home size={48} />
              </div>
              <h3>Custom System Design</h3>
              <p>Each system is custom-designed for your home's unique foundation, layout, and radon levels for maximum effectiveness and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-premium">
        <div className="container">
          <h2>Ready to Protect Your Family?</h2>
          <p>Don't wait - get professional radon mitigation with guaranteed results and comprehensive warranty coverage.</p>
          <div className="cta-buttons-premium">
            <button onClick={handlePhoneClick} className="btn-primary-large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary-large">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// Enhanced HVAC Page with AeroSeal Videos and Duct Cleaning
function HVACPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand }) {
  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="hvac"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      {/* Premium Hero Section */}
      <section className="premium-hero hvac-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-premium">
          <div className="hero-badge-premium">
            <span>Wisconsin & Illinois • 24/7 Emergency • AeroSeal Certified</span>
          </div>
          <h1 className="hero-title-premium">HVAC & AeroSeal Services</h1>
          <h2 className="hero-subtitle-premium">Complete Comfort Solutions</h2>
          <p className="hero-description-premium">
            Professional HVAC services including heating, cooling, duct cleaning, and revolutionary AeroSeal duct sealing technology 
            for maximum energy efficiency and indoor air quality.
          </p>
          <div className="hero-buttons-premium">
            <button onClick={handlePhoneClick} className="btn-primary-premium">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary-premium">
              Schedule Service
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="btn-financing-premium">
              <CreditCard size={20} />
              Financing Available
            </a>
          </div>
        </div>
        <div className="hero-image-premium">
          <img src={hvacProfessional} alt="Professional HVAC Services" />
        </div>
      </section>

      {/* AeroSeal Technology Section with Videos */}
      <section className="aeroseal-section-premium">
        <div className="container">
          <div className="aeroseal-header">
            <img src={aerosealLogo} alt="AeroSeal Certified Partner" className="aeroseal-logo-large" />
            <h2 className="section-title-premium">Revolutionary AeroSeal Duct Sealing</h2>
            <p className="section-description">
              We're proud AeroSeal certified partners, bringing you the most advanced duct sealing technology available. 
              AeroSeal can improve your home's energy efficiency by up to 30% while dramatically improving indoor air quality.
            </p>
          </div>

          {/* AeroSeal Videos */}
          <div className="aeroseal-videos">
            <h3>See AeroSeal Technology in Action</h3>
            <div className="video-grid">
              <div className="video-container">
                <h4>AeroSeal Process Overview</h4>
                <div className="video-wrapper">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/K3JAR0dCNhc" 
                    title="AeroSeal Duct Sealing Process" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <p>Learn how AeroSeal technology seals your ducts from the inside out</p>
              </div>
              <div className="video-container">
                <h4>AeroSeal Benefits & Results</h4>
                <div className="video-wrapper">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/r9KtxItnR84" 
                    title="AeroSeal Benefits and Results" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <p>Discover the energy savings and comfort improvements AeroSeal provides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// Enhanced Concrete Coatings Page with Updated Torginol Flakes
function ConcreteCoatingsPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand }) {
  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="concrete"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      {/* Premium Hero Section */}
      <section className="premium-hero concrete-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-premium">
          <div className="hero-badge-premium">
            <span>Wisconsin Only • Lifetime Warranty • Professional Installation</span>
          </div>
          <h1 className="hero-title-premium">Premium Concrete Floor Coatings</h1>
          <h2 className="hero-subtitle-premium">Transform Your Floors Forever</h2>
          <p className="hero-description-premium">
            Professional Torginol epoxy and polyurea floor coatings that transform your concrete floors into beautiful, 
            durable surfaces with lifetime warranty protection.
          </p>
          <div className="hero-buttons-premium">
            <button onClick={handlePhoneClick} className="btn-primary-premium">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary-premium">
              Get Free Estimate
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="btn-financing-premium">
              <CreditCard size={20} />
              Financing Available
            </a>
          </div>
        </div>
        <div className="hero-image-premium">
          <img src={concreteFloorCoating} alt="Premium Concrete Floor Coatings" />
        </div>
      </section>

      {/* Updated Torginol Flake Options */}
      <section className="flake-samples-premium">
        <div className="container">
          <h2 className="section-title-premium">Premium Torginol Decorative Flakes</h2>
          <p className="section-description">
            Choose from our extensive collection of professional Torginol decorative flake systems. Each blend is carefully designed 
            to provide beautiful, durable finishes with superior performance and lasting beauty.
          </p>
          
          {/* Updated Flake Grid with New Torginol Options */}
          <div className="flake-grid-premium">
            <div className="flake-option-premium">
              <img src={flakeDesertSand} alt="Desert Sand Flake Pattern" className="flake-image-premium" />
              <div className="flake-info">
                <h4>Desert Sand</h4>
                <p>Warm earth tones with natural stone appearance</p>
              </div>
            </div>
            <div className="flake-option-premium">
              <img src={flakeOceanBlue} alt="Ocean Blue Flake Pattern" className="flake-image-premium" />
              <div className="flake-info">
                <h4>Ocean Blue</h4>
                <p>Cool blue tones with sophisticated depth</p>
              </div>
            </div>
            <div className="flake-option-premium">
              <img src={flakeTidalWave} alt="Tidal Wave Flake Pattern" className="flake-image-premium" />
              <div className="flake-info">
                <h4>Tidal Wave</h4>
                <p>Dynamic blue-gray blend with movement</p>
              </div>
            </div>
            <div className="flake-option-premium">
              <img src={flakeStormGray} alt="Storm Gray Flake Pattern" className="flake-image-premium" />
              <div className="flake-info">
                <h4>Storm Gray</h4>
                <p>Modern gray tones with contemporary appeal</p>
              </div>
            </div>
            <div className="flake-option-premium">
              <img src={flakeMixedBed} alt="Mixed Bed Flake Pattern" className="flake-image-premium" />
              <div className="flake-info">
                <h4>Mixed Bed</h4>
                <p>Multi-color blend with rich texture variation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// State-specific SEO Pages
function WisconsinPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand }) {
  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="wisconsin"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      <section className="state-page-hero">
        <div className="container">
          <h1>Professional Home Services in Wisconsin</h1>
          <p>Complete home services throughout Wisconsin including Milwaukee, Madison, Green Bay, Kenosha, Racine, Appleton, Waukesha, Eau Claire, Oshkosh, Janesville, West Allis, La Crosse, Sheboygan, Wauwatosa, Fond du Lac, New Berlin, Wausau, Brookfield, Greenfield, Beloit, and surrounding areas.</p>
          
          <div className="wisconsin-services">
            <h2>Available Services in Wisconsin</h2>
            <div className="service-grid">
              <div className="service-item">
                <Shield size={32} />
                <h3>FREE Radon Testing</h3>
                <p>Professional radon testing available throughout Wisconsin</p>
              </div>
              <div className="service-item">
                <Shield size={32} />
                <h3>Radon Mitigation</h3>
                <p>EPA-certified radon mitigation systems with guaranteed results</p>
              </div>
              <div className="service-item">
                <Layers size={32} />
                <h3>Concrete Floor Coatings</h3>
                <p>Premium Torginol floor coatings with lifetime warranty</p>
              </div>
              <div className="service-item">
                <Zap size={32} />
                <h3>HVAC & AeroSeal</h3>
                <p>Complete HVAC services and revolutionary duct sealing</p>
              </div>
              <div className="service-item">
                <Wrench size={32} />
                <h3>Handyman Services</h3>
                <p>Professional handyman services for all your home needs</p>
              </div>
              <div className="service-item">
                <Zap size={32} />
                <h3>Electrical Services</h3>
                <p>Licensed electrical services and installations</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for professional home services throughout Wisconsin</p>
            <div className="cta-buttons">
              <button onClick={handlePhoneClick} className="btn-primary-large">
                <Phone size={24} />
                Call (262) 955-5701
              </button>
              <button onClick={openContactForm} className="btn-secondary-large">
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// Main App Component with Multi-Brand Support
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openContactForm = () => setIsContactModalOpen(true);
  const closeContactForm = () => setIsContactModalOpen(false);
  const handlePhoneClick = () => setIsPhonePopupOpen(true);
  const closePhonePopup = () => setIsPhonePopupOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Brand-specific content rendering
  const renderHeroSection = () => {
    switch (currentBrand) {
      case 'america':
        return <AmericaInHomeHero openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} />;
      case 'closets':
        return <ClosetConceptsHero openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} />;
      default:
        return <LifetimeHero openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} />;
    }
  };

  const renderBrandSummary = () => {
    const brandContent = {
      lifetime: {
        title: "Your Complete Home Solutions Partner",
        description: "Lifetime Home Services is your trusted provider for expert radon testing & mitigation, professional HVAC optimization, premium concrete coatings, and comprehensive home comfort upgrades. We serve homeowners across Wisconsin, Illinois, Minnesota & Colorado with professional excellence and guaranteed results."
      },
      america: {
        title: "Your Smart Home Technology Partner",
        description: "America In-Home transforms everyday living with luxury smart home and security solutions—seamlessly integrating lighting, audio, video, climate, surveillance, and more through whole-home automation powered by Control4. With over 25 years of experience, we deliver personalized technology that enhances comfort, convenience, and control."
      },
      closets: {
        title: "Your Custom Storage Solutions Partner",
        description: "Closet Concepts specializes in creating beautiful, functional storage solutions that transform your home. From custom walk-in closets to complete garage organization systems, we design and install premium storage solutions that maximize space and enhance your daily living experience."
      }
    };

    const content = brandContent[currentBrand];

    return (
      <section className="brand-summary-section-premium">
        <div className="brand-summary-container">
          <h2>{content.title}</h2>
          <p className="brand-summary-text">{content.description}</p>
        </div>
      </section>
    );
  };

  // Render pages based on currentPage state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'radon-mitigation':
        return <RadonMitigationPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} currentBrand={currentBrand} setCurrentBrand={setCurrentBrand} />;
      case 'hvac':
        return <HVACPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} currentBrand={currentBrand} setCurrentBrand={setCurrentBrand} />;
      case 'concrete':
        return <ConcreteCoatingsPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} currentBrand={currentBrand} setCurrentBrand={setCurrentBrand} />;
      case 'wisconsin':
        return <WisconsinPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} currentBrand={currentBrand} setCurrentBrand={setCurrentBrand} />;
      default:
        return (
          <div className="App">
            <MultiBrandHeader 
              openContactForm={openContactForm}
              handlePhoneClick={handlePhoneClick}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              closeMobileMenu={closeMobileMenu}
              currentBrand={currentBrand}
              setCurrentBrand={setCurrentBrand}
            />

            {renderHeroSection()}
            {renderBrandSummary()}
            
            {/* Enhanced Radon Mitigation Section - Only for Lifetime brand */}
            {currentBrand === 'lifetime' && (
              <section className="radon-mitigation-homepage">
                <div className="container">
                  <div className="radon-content">
                    <div className="radon-text">
                      <h2>Professional Radon Mitigation</h2>
                      <p className="section-description">
                        Protect your family with professional radon mitigation systems. We provide both FREE radon testing and 
                        custom mitigation solutions designed specifically for your home.
                      </p>
                      <div className="radon-services">
                        <div className="radon-service">
                          <Shield size={32} />
                          <div>
                            <h4>FREE Radon Testing</h4>
                            <p>Available in Wisconsin, Minnesota & Colorado</p>
                          </div>
                        </div>
                        <div className="radon-service">
                          <CheckCircle size={32} />
                          <div>
                            <h4>Professional Mitigation</h4>
                            <p>Custom systems available in all states</p>
                          </div>
                        </div>
                        <div className="radon-service">
                          <Award size={32} />
                          <div>
                            <h4>EPA Certified</h4>
                            <p>Guaranteed results below 4.0 pCi/L</p>
                          </div>
                        </div>
                      </div>
                      <div className="radon-buttons">
                        <button onClick={() => setCurrentPage('radon-testing')} className="btn-primary">
                          Get FREE Testing
                        </button>
                        <button onClick={() => setCurrentPage('radon-mitigation')} className="btn-secondary">
                          Learn About Mitigation
                        </button>
                      </div>
                    </div>
                    <div className="radon-image">
                      <img src={radonTestingDevice} alt="Professional Radon Services" />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Brand-specific Services Grid */}
            {currentBrand === 'lifetime' && (
              <section className="services-section-premium">
                <div className="container">
                  <h2 className="section-title-premium">Our Professional Services</h2>
                  <p className="section-description">
                    Professional home services you can trust, delivered by experienced technicians throughout Wisconsin and beyond.
                  </p>
                  
                  <div className="services-grid-premium">
                    <div className="service-card-premium" onClick={() => setCurrentPage('concrete')}>
                      <img src={concreteFloorCoating} alt="Concrete Floor Coatings" className="service-image-premium" />
                      <div className="service-content-premium">
                        <h3>Premium Floor Coatings</h3>
                        <p>Transform your garage and basement floors with professional Torginol coatings</p>
                        <ul>
                          <li>✓ Wisconsin Service Area</li>
                          <li>✓ Lifetime Warranty</li>
                          <li>✓ Professional Installation</li>
                          <li>✓ Multiple Flake Options</li>
                        </ul>
                        <button className="service-btn">Learn More</button>
                      </div>
                    </div>

                    <div className="service-card-premium" onClick={() => setCurrentPage('hvac')}>
                      <img src={hvacProfessional} alt="HVAC & AeroSeal Services" className="service-image-premium" />
                      <div className="service-content-premium">
                        <h3>HVAC & AeroSeal</h3>
                        <p>Complete heating, cooling, duct cleaning, and revolutionary AeroSeal duct sealing</p>
                        <ul>
                          <li>✓ Wisconsin & Illinois</li>
                          <li>✓ 24/7 Emergency Service</li>
                          <li>✓ AeroSeal Certified</li>
                          <li>✓ Up to 30% Energy Savings</li>
                        </ul>
                        <button className="service-btn">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* America In-Home Services */}
            {currentBrand === 'america' && (
              <section className="services-section-premium">
                <div className="container">
                  <h2 className="section-title-premium">Smart Home & Technology Services</h2>
                  <p className="section-description">
                    Transform your home with cutting-edge technology and professional installation services.
                  </p>
                  
                  <div className="services-grid-premium">
                    <div className="service-card-premium">
                      <div className="service-icon-large">
                        <Wifi size={64} />
                      </div>
                      <div className="service-content-premium">
                        <h3>Smart Home Automation</h3>
                        <p>Control4 certified smart home systems for lighting, climate, audio, and more</p>
                        <ul>
                          <li>✓ Control4 Certified</li>
                          <li>✓ Whole-Home Integration</li>
                          <li>✓ Professional Installation</li>
                          <li>✓ 25+ Years Experience</li>
                        </ul>
                        <button className="service-btn">Learn More</button>
                      </div>
                    </div>

                    <div className="service-card-premium">
                      <div className="service-icon-large">
                        <Lock size={64} />
                      </div>
                      <div className="service-content-premium">
                        <h3>Security Systems</h3>
                        <p>Advanced security systems with surveillance, monitoring, and smart integration</p>
                        <ul>
                          <li>✓ 24/7 Monitoring Available</li>
                          <li>✓ Smart Integration</li>
                          <li>✓ Professional Installation</li>
                          <li>✓ Custom Solutions</li>
                        </ul>
                        <button className="service-btn">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Closet Concepts Services */}
            {currentBrand === 'closets' && (
              <section className="services-section-premium">
                <div className="container">
                  <h2 className="section-title-premium">Custom Storage Solutions</h2>
                  <p className="section-description">
                    Transform your space with beautiful, functional storage solutions designed for your lifestyle.
                  </p>
                  
                  <div className="services-grid-premium">
                    <div className="service-card-premium">
                      <div className="service-icon-large">
                        <Layers size={64} />
                      </div>
                      <div className="service-content-premium">
                        <h3>Custom Closets</h3>
                        <p>Walk-in and reach-in closets designed to maximize space and organization</p>
                        <ul>
                          <li>✓ Custom Design</li>
                          <li>✓ Professional Installation</li>
                          <li>✓ Premium Materials</li>
                          <li>✓ Lifetime Warranty</li>
                        </ul>
                        <button className="service-btn">Learn More</button>
                      </div>
                    </div>

                    <div className="service-card-premium">
                      <div className="service-icon-large">
                        <Home size={64} />
                      </div>
                      <div className="service-content-premium">
                        <h3>Garage Organization</h3>
                        <p>Complete garage storage systems with cabinets, shelving, and organization</p>
                        <ul>
                          <li>✓ Custom Solutions</li>
                          <li>✓ Durable Materials</li>
                          <li>✓ Professional Design</li>
                          <li>✓ Expert Installation</li>
                        </ul>
                        <button className="service-btn">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Cross-Brand Services */}
            <CrossBrandServices 
              currentBrand={currentBrand} 
              setCurrentBrand={setCurrentBrand} 
              setCurrentPage={setCurrentPage} 
            />

            {/* Testimonials Section */}
            <section className="testimonials-section-premium">
              <div className="container">
                <h2 className="section-title-premium">What Our Customers Say</h2>
                <div className="testimonials-grid-premium">
                  <div className="testimonial-card-premium">
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <p className="testimonial-text">
                      "The Lifetime team made everything so easy. The radon test was completely free and gave us peace of mind about our family's safety."
                    </p>
                    <div className="testimonial-author">
                      <strong>Katie H.</strong>
                      <span>Brookfield, WI</span>
                    </div>
                  </div>
                  
                  <div className="testimonial-card-premium">
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <p className="testimonial-text">
                      "From scheduling to installation, the crew was amazing. My garage floor looks absolutely brand new and the warranty gives me confidence."
                    </p>
                    <div className="testimonial-author">
                      <strong>Jason T.</strong>
                      <span>Madison, WI</span>
                    </div>
                  </div>
                  
                  <div className="testimonial-card-premium">
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <p className="testimonial-text">
                      "Professional service from start to finish. The AeroSeal duct sealing has made such a difference in our energy bills and comfort."
                    </p>
                    <div className="testimonial-author">
                      <strong>Sarah M.</strong>
                      <span>Milwaukee, WI</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="cta-section-premium-homepage">
              <div className="container">
                <h2>Ready to Experience Professional Excellence?</h2>
                <p>Contact us today for your free estimate and discover why homeowners across four states trust our family of brands.</p>
                <div className="cta-buttons-homepage">
                  <button onClick={handlePhoneClick} className="btn-primary-large">
                    <Phone size={24} />
                    Call Now
                  </button>
                  <button onClick={openContactForm} className="btn-secondary-large">
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </section>

            <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}

      {/* Enhanced Contact Modal */}
      {isContactModalOpen && (
        <div className="modal-overlay" onClick={closeContactForm}>
          <div className="modal-content-premium" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-premium">
              <h3 className="modal-title">Request Your Free Estimate</h3>
              <button onClick={closeContactForm} className="close-btn-premium">
                <X size={24} />
              </button>
            </div>
            
            <form className="contact-form-premium">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-input" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="(262) 555-0123" required />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your.email@example.com" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Primary Service Needed</label>
                  <select className="form-select">
                    <option value="">Select your primary service</option>
                    {currentBrand === 'lifetime' && (
                      <>
                        <option value="radon-testing">Free Radon Testing (WI, MN, CO)</option>
                        <option value="radon-mitigation">Radon Mitigation (All States)</option>
                        <option value="concrete">Concrete Floor Coatings (WI)</option>
                        <option value="hvac">HVAC Services (WI, IL)</option>
                        <option value="aeroseal">AeroSeal Duct Sealing (WI, IL)</option>
                      </>
                    )}
                    {currentBrand === 'america' && (
                      <>
                        <option value="smart-homes">Smart Home Automation</option>
                        <option value="security-systems">Security Systems</option>
                        <option value="entertainment">Entertainment Systems</option>
                        <option value="central-vacuums">Central Vacuums</option>
                      </>
                    )}
                    {currentBrand === 'closets' && (
                      <>
                        <option value="custom-closets">Custom Closets</option>
                        <option value="storage-solutions">Storage Solutions</option>
                        <option value="garage-organization">Garage Organization</option>
                        <option value="pantry-systems">Pantry Systems</option>
                      </>
                    )}
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Location (City, State)</label>
                  <input type="text" className="form-input" placeholder="Milwaukee, WI" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Project Details</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn-premium">
                Send My Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Phone Popup Modal */}
      {isPhonePopupOpen && (
        <div className="modal-overlay" onClick={closePhonePopup}>
          <div className="phone-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="phone-popup-header">
              <h3>Call Us Now</h3>
              <button onClick={closePhonePopup} className="close-btn">
                <X size={24} />
              </button>
            </div>
            <div className="phone-popup-body">
              <div className="phone-number-display">
                <Phone size={32} />
                <span className="large-phone-number">
                  {currentBrand === 'america' ? '(262) 790-4050' : '(262) 955-5701'}
                </span>
              </div>
              <div className="phone-number-display">
                <Phone size={32} />
                <span className="large-phone-number">(833) 941-6888</span>
                <span className="toll-free-label">Toll Free</span>
              </div>
              <p className="phone-popup-text">
                Call us now for immediate assistance with your home service needs!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App

