import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Shield, Layers, Zap, Wrench, ChevronDown, X, Menu, Star, CheckCircle, Award, Home, Users, Clock, ThumbsUp } from 'lucide-react';
import { WisconsinPage, IllinoisPage, MinnesotaPage, ColoradoPage } from './StatePages.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [statesDropdownOpen, setStatesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [brandSwitcherOpen, setBrandSwitcherOpen] = useState(false);

  const openContactForm = () => setIsContactModalOpen(true);
  const closeContactForm = () => setIsContactModalOpen(false);
  const handlePhoneClick = () => setIsPhonePopupOpen(true);
  const closePhonePopup = () => setIsPhonePopupOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      phone: '(262) 955-5701',
      description: 'Complete home services including radon testing, HVAC, electrical, handyman, and premium floor coatings.',
      services: ['Radon Testing & Mitigation', 'HVAC & AeroSeal', 'Premium Floor Coatings', 'Licensed Electrical', 'Professional Handyman', 'Air Quality Services']
    },
    america: {
      name: 'America In-Home',
      tagline: 'Smart Homes. Secure Living.',
      phone: '(262) 955-5701',
      description: 'Advanced smart home automation, security systems, and Control4 integration for modern living.',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration', 'Audio/Video Systems', 'Home Networking', 'Smart Lighting']
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Organized Living. Custom Solutions.',
      phone: '(262) 955-5701',
      description: 'Custom storage solutions and organization systems for every room in your home.',
      services: ['Custom Closets', 'Pantry Organization', 'Garage Storage', 'Home Office Solutions', 'Laundry Room Storage', 'Entertainment Centers']
    }
  };

  const currentBrandData = brands[currentBrand];

  // Multi-Brand Header Component
  function MultiBrandHeader({ openContactForm, handlePhoneClick, currentPage, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand }) {
    return (
      <header className={`professional-header ${currentBrand}-brand`}>
        {/* Brand Switcher Bar */}
        <div className="brand-switcher-bar">
          <div className="brand-switcher-container">
            <div className="brand-switcher">
              <button 
                className="brand-switcher-trigger"
                onClick={() => setBrandSwitcherOpen(!brandSwitcherOpen)}
              >
                <span>Our Brands</span>
                <ChevronDown size={16} className={brandSwitcherOpen ? 'rotated' : ''} />
              </button>
              
              {brandSwitcherOpen && (
                <div className="brand-switcher-menu">
                  {Object.entries(brands).map(([key, brand]) => (
                    <button
                      key={key}
                      className={`brand-option ${currentBrand === key ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentBrand(key);
                        setBrandSwitcherOpen(false);
                        setCurrentPage('home');
                      }}
                    >
                      <div>
                        <strong>{brand.name}</strong>
                        <span>{brand.tagline}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="brand-switcher-info">
              Switch between our family of brands for specialized services
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="header-container">
          <div className="brand-section" onClick={() => setCurrentPage('home')}>
            <img 
              src="/LifetimeHomeServicesLogo.png" 
              alt={currentBrandData.name}
              className="lifetime-logo-enhanced"
            />
            <div className="company-info">
              <h1 className="company-name-enhanced">{currentBrandData.name}</h1>
              <p className="company-tagline">{currentBrandData.tagline}</p>
            </div>
          </div>

          <nav className="navigation-section desktop-only">
            <div className="main-navigation">
              <a 
                href="#home" 
                className={currentPage === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Home
              </a>
              
              <div className="nav-dropdown">
                <div 
                  className="dropdown-trigger"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={servicesDropdownOpen ? 'rotated' : ''} />
                </div>
                {servicesDropdownOpen && (
                  <div className="dropdown-menu">
                    {currentBrand === 'lifetime' && (
                      <>
                        <a href="#radon-testing" onClick={(e) => { e.preventDefault(); setCurrentPage('radon-testing'); setServicesDropdownOpen(false); }}>
                          <Shield size={16} />
                          FREE Radon Testing
                        </a>
                        <a href="#radon-mitigation" onClick={(e) => { e.preventDefault(); setCurrentPage('radon-mitigation'); setServicesDropdownOpen(false); }}>
                          <Shield size={16} />
                          Radon Mitigation
                        </a>
                        <a href="#hvac" onClick={(e) => { e.preventDefault(); setCurrentPage('hvac'); setServicesDropdownOpen(false); }}>
                          <Zap size={16} />
                          HVAC & AeroSeal
                        </a>
                        <a href="#concrete" onClick={(e) => { e.preventDefault(); setCurrentPage('concrete'); setServicesDropdownOpen(false); }}>
                          <Layers size={16} />
                          Concrete Coatings
                        </a>
                        <a href="#electrical" onClick={(e) => { e.preventDefault(); setCurrentPage('electrical'); setServicesDropdownOpen(false); }}>
                          <Zap size={16} />
                          Licensed Electrical
                        </a>
                        <a href="#handyman" onClick={(e) => { e.preventDefault(); setCurrentPage('handyman'); setServicesDropdownOpen(false); }}>
                          <Wrench size={16} />
                          Professional Handyman
                        </a>
                      </>
                    )}
                    {currentBrand === 'america' && (
                      <>
                        <a href="#smart-home" onClick={(e) => { e.preventDefault(); setCurrentPage('smart-home'); setServicesDropdownOpen(false); }}>
                          <Home size={16} />
                          Smart Home Automation
                        </a>
                        <a href="#security" onClick={(e) => { e.preventDefault(); setCurrentPage('security'); setServicesDropdownOpen(false); }}>
                          <Shield size={16} />
                          Security Systems
                        </a>
                        <a href="#control4" onClick={(e) => { e.preventDefault(); setCurrentPage('control4'); setServicesDropdownOpen(false); }}>
                          <Zap size={16} />
                          Control4 Integration
                        </a>
                      </>
                    )}
                    {currentBrand === 'closets' && (
                      <>
                        <a href="#custom-closets" onClick={(e) => { e.preventDefault(); setCurrentPage('custom-closets'); setServicesDropdownOpen(false); }}>
                          <Home size={16} />
                          Custom Closets
                        </a>
                        <a href="#pantry" onClick={(e) => { e.preventDefault(); setCurrentPage('pantry'); setServicesDropdownOpen(false); }}>
                          <Layers size={16} />
                          Pantry Organization
                        </a>
                        <a href="#garage" onClick={(e) => { e.preventDefault(); setCurrentPage('garage'); setServicesDropdownOpen(false); }}>
                          <Wrench size={16} />
                          Garage Storage
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="nav-dropdown">
                <div 
                  className="dropdown-trigger"
                  onClick={() => setStatesDropdownOpen(!statesDropdownOpen)}
                >
                  <span>Service Areas</span>
                  <ChevronDown size={16} className={statesDropdownOpen ? 'rotated' : ''} />
                </div>
                {statesDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="#wisconsin" onClick={(e) => { e.preventDefault(); setCurrentPage('wisconsin'); setStatesDropdownOpen(false); }}>
                      <MapPin size={16} />
                      Wisconsin
                    </a>
                    <a href="#illinois" onClick={(e) => { e.preventDefault(); setCurrentPage('illinois'); setStatesDropdownOpen(false); }}>
                      <MapPin size={16} />
                      Illinois
                    </a>
                    <a href="#minnesota" onClick={(e) => { e.preventDefault(); setCurrentPage('minnesota'); setStatesDropdownOpen(false); }}>
                      <MapPin size={16} />
                      Minnesota
                    </a>
                    <a href="#colorado" onClick={(e) => { e.preventDefault(); setCurrentPage('colorado'); setStatesDropdownOpen(false); }}>
                      <MapPin size={16} />
                      Colorado
                    </a>
                  </div>
                )}
              </div>

              <a 
                href="https://www.synchrony.com/mysynchrony/apply/apply.html?market=14&channel=PLCRD&returnUrl=https%3A%2F%2Fwww.synchrony.com%2Fmysynchrony%2Fapply%2Fapplyresults.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Financing
              </a>
            </div>
          </nav>

          <div className="header-contact desktop-only">
            <div className="phone-numbers">
              <button onClick={handlePhoneClick} className="phone-header">
                <Phone size={20} />
                {currentBrandData.phone}
              </button>
              <div className="toll-free-number">
                <span className="toll-free-label">Call Now for Service</span>
              </div>
            </div>
            <button onClick={openContactForm} className="quote-btn-header">
              Get Free Estimate
            </button>
          </div>

          <button className="hamburger-menu-btn mobile-only" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-overlay" onClick={closeMobileMenu}>
            <div className="mobile-navigation" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-nav-header">
                <h3>{currentBrandData.name}</h3>
                <button onClick={closeMobileMenu} className="close-mobile-nav">
                  <X size={24} />
                </button>
              </div>
              
              <div className="mobile-nav-links">
                <div className="mobile-nav-section">
                  <h4>Navigation</h4>
                  <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); closeMobileMenu(); }}>
                    <Home size={20} />
                    Home
                  </a>
                </div>

                <div className="mobile-nav-section">
                  <h4>Services</h4>
                  {currentBrandData.services.map((service, index) => (
                    <a key={index} href="#" onClick={(e) => { e.preventDefault(); closeMobileMenu(); }}>
                      <CheckCircle size={20} />
                      {service}
                    </a>
                  ))}
                </div>

                <div className="mobile-nav-section">
                  <h4>Service Areas</h4>
                  <a href="#wisconsin" onClick={(e) => { e.preventDefault(); setCurrentPage('wisconsin'); closeMobileMenu(); }}>
                    <MapPin size={20} />
                    Wisconsin
                  </a>
                  <a href="#illinois" onClick={(e) => { e.preventDefault(); setCurrentPage('illinois'); closeMobileMenu(); }}>
                    <MapPin size={20} />
                    Illinois
                  </a>
                  <a href="#minnesota" onClick={(e) => { e.preventDefault(); setCurrentPage('minnesota'); closeMobileMenu(); }}>
                    <MapPin size={20} />
                    Minnesota
                  </a>
                  <a href="#colorado" onClick={(e) => { e.preventDefault(); setCurrentPage('colorado'); closeMobileMenu(); }}>
                    <MapPin size={20} />
                    Colorado
                  </a>
                </div>
              </div>

              <div className="mobile-nav-footer">
                <button onClick={() => { handlePhoneClick(); closeMobileMenu(); }} className="mobile-contact-btn">
                  <Phone size={20} />
                  Call {currentBrandData.phone}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }

  // Professional Footer Component
  function ProfessionalFooter({ setCurrentPage, currentBrand }) {
    const currentBrandData = brands[currentBrand];
    
    return (
      <footer className="professional-footer">
        <div className="footer-container">
          <div className="footer-slogan">
            <img 
              src="/LifetimeHomeServicesLogo.png" 
              alt={currentBrandData.name}
              className="footer-logo"
            />
            <h2>{currentBrandData.name}</h2>
            <p className="footer-slogan-text">{currentBrandData.tagline}</p>
          </div>

          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={16} />
                  <span>{currentBrandData.phone}</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>info@lifetimehomeservices.com</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Serving WI, IL, MN, CO</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Our Services</h3>
              {currentBrandData.services.map((service, index) => (
                <a key={index} href="#" onClick={(e) => e.preventDefault()}>
                  {service}
                </a>
              ))}
            </div>

            <div className="footer-section">
              <h3>Service Areas</h3>
              <a href="#wisconsin" onClick={(e) => { e.preventDefault(); setCurrentPage('wisconsin'); }}>Wisconsin</a>
              <a href="#illinois" onClick={(e) => { e.preventDefault(); setCurrentPage('illinois'); }}>Illinois</a>
              <a href="#minnesota" onClick={(e) => { e.preventDefault(); setCurrentPage('minnesota'); }}>Minnesota</a>
              <a href="#colorado" onClick={(e) => { e.preventDefault(); setCurrentPage('colorado'); }}>Colorado</a>
            </div>

            <div className="footer-section">
              <h3>Trust & Quality</h3>
              <div className="trust-badges">
                <div className="trust-badge">
                  <CheckCircle size={16} />
                  <span>Licensed & Insured</span>
                </div>
                <div className="trust-badge">
                  <Award size={16} />
                  <span>EPA Certified</span>
                </div>
                <div className="trust-badge">
                  <Star size={16} />
                  <span>5-Star Rated</span>
                </div>
                <div className="trust-badge">
                  <Shield size={16} />
                  <span>Lifetime Warranties</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 {currentBrandData.name}. All rights reserved. Professional home services in Wisconsin, Illinois, Minnesota, and Colorado.</p>
          </div>
        </div>
      </footer>
    );
  }

  // Homepage Component
  function Homepage() {
    return (
      <div className="page-container">
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

        {/* Premium Hero Section */}
        <section className={`premium-hero-homepage ${currentBrand}-brand`}>
          <div className="hero-overlay-premium"></div>
          <div className="hero-content-homepage">
            <div className="hero-text-section">
              <div className="hero-badge-homepage">
                {currentBrand === 'lifetime' && 'Wisconsin\'s Premier Home Services'}
                {currentBrand === 'america' && 'Smart Home Technology Leaders'}
                {currentBrand === 'closets' && 'Custom Storage Specialists'}
              </div>
              <h1 className="hero-title-homepage">
                {currentBrand === 'lifetime' && (
                  <>Professional Home Services with <span className="hero-accent">Lifetime Results</span></>
                )}
                {currentBrand === 'america' && (
                  <>Smart Home Automation & <span className="hero-accent">Security Solutions</span></>
                )}
                {currentBrand === 'closets' && (
                  <>Custom Storage Solutions for <span className="hero-accent">Organized Living</span></>
                )}
              </h1>
              <p className="hero-subtitle-homepage">
                {currentBrandData.description}
              </p>
              <div className="hero-buttons-homepage">
                <button onClick={openContactForm} className="btn-primary-homepage">
                  <CheckCircle size={24} />
                  Get Free Estimate
                </button>
                <button onClick={handlePhoneClick} className="btn-secondary-homepage">
                  <Phone size={24} />
                  Call {currentBrandData.phone}
                </button>
                <a 
                  href="https://www.synchrony.com/mysynchrony/apply/apply.html?market=14&channel=PLCRD&returnUrl=https%3A%2F%2Fwww.synchrony.com%2Fmysynchrony%2Fapply%2Fapplyresults.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-financing-homepage"
                >
                  <Star size={24} />
                  Financing Available
                </a>
              </div>
            </div>
            <div className="hero-image-section">
              <img 
                src="/hero-house.jpg" 
                alt="Professional Home Services"
                className="hero-image-large"
              />
            </div>
          </div>
        </section>

        {/* Brand Summary Section */}
        <section className="brand-summary-section-premium">
          <div className="brand-summary-container">
            <h2>Why Choose {currentBrandData.name}?</h2>
            <p className="brand-summary-text">
              {currentBrand === 'lifetime' && 
                'We are Wisconsin\'s most trusted home services company, providing comprehensive solutions from FREE radon testing to premium concrete coatings. Our EPA-certified professionals, licensed electricians, and skilled technicians deliver exceptional results with lifetime warranties. Serving Wisconsin, Illinois, Minnesota, and Colorado with over 25 years of experience.'
              }
              {currentBrand === 'america' && 
                'Transform your home into a smart, secure, and connected living space with our advanced automation and security solutions. Our certified Control4 dealers and security specialists design custom systems that enhance your lifestyle while providing peace of mind. From smart lighting to comprehensive security systems, we make technology work seamlessly for you.'
              }
              {currentBrand === 'closets' && 
                'Create organized, beautiful spaces with our custom storage solutions designed specifically for your lifestyle. Our professional designers work with you to maximize every inch of space in your closets, pantries, garages, and home offices. Quality materials, expert installation, and lifetime warranties ensure your investment lasts for years to come.'
              }
            </p>
          </div>
        </section>

        {/* Cross-Brand Services Section */}
        <section className="cross-brand-services">
          <div className="container">
            <h2>Explore Our Family of Brands</h2>
            <p>Comprehensive solutions for every aspect of your home - from essential services to smart technology and organization.</p>
            
            <div className="brand-services-grid">
              <div className={`brand-service-card lifetime ${currentBrand === 'lifetime' ? 'active' : ''}`}>
                <div className="brand-service-icon">
                  <Shield size={40} />
                </div>
                <h3>Lifetime Home Services</h3>
                <p>Complete home services with professional expertise and lifetime warranties.</p>
                <ul className="brand-service-list">
                  <li><CheckCircle size={16} /> FREE Radon Testing</li>
                  <li><CheckCircle size={16} /> HVAC & AeroSeal</li>
                  <li><CheckCircle size={16} /> Premium Floor Coatings</li>
                  <li><CheckCircle size={16} /> Licensed Electrical</li>
                  <li><CheckCircle size={16} /> Professional Handyman</li>
                </ul>
                {currentBrand !== 'lifetime' && (
                  <button 
                    className="brand-switch-btn"
                    onClick={() => setCurrentBrand('lifetime')}
                  >
                    Explore Services
                  </button>
                )}
              </div>

              <div className={`brand-service-card america ${currentBrand === 'america' ? 'active' : ''}`}>
                <div className="brand-service-icon">
                  <Home size={40} />
                </div>
                <h3>America In-Home</h3>
                <p>Smart home automation and security systems for modern living.</p>
                <ul className="brand-service-list">
                  <li><CheckCircle size={16} /> Smart Home Automation</li>
                  <li><CheckCircle size={16} /> Security Systems</li>
                  <li><CheckCircle size={16} /> Control4 Integration</li>
                  <li><CheckCircle size={16} /> Audio/Video Systems</li>
                  <li><CheckCircle size={16} /> Home Networking</li>
                </ul>
                {currentBrand !== 'america' && (
                  <button 
                    className="brand-switch-btn"
                    onClick={() => setCurrentBrand('america')}
                  >
                    Explore Technology
                  </button>
                )}
              </div>

              <div className={`brand-service-card closets ${currentBrand === 'closets' ? 'active' : ''}`}>
                <div className="brand-service-icon">
                  <Layers size={40} />
                </div>
                <h3>Closet Concepts</h3>
                <p>Custom storage solutions and organization systems for every room.</p>
                <ul className="brand-service-list">
                  <li><CheckCircle size={16} /> Custom Closets</li>
                  <li><CheckCircle size={16} /> Pantry Organization</li>
                  <li><CheckCircle size={16} /> Garage Storage</li>
                  <li><CheckCircle size={16} /> Home Office Solutions</li>
                  <li><CheckCircle size={16} /> Laundry Room Storage</li>
                </ul>
                {currentBrand !== 'closets' && (
                  <button 
                    className="brand-switch-btn"
                    onClick={() => setCurrentBrand('closets')}
                  >
                    Explore Storage
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section-premium">
          <div className="container">
            <h2 className="section-title-premium">{currentBrandData.name} Services</h2>
            <p className="section-description">
              Professional {currentBrand === 'lifetime' ? 'home services' : currentBrand === 'america' ? 'smart home solutions' : 'storage solutions'} with expert installation and comprehensive warranties.
            </p>
            
            <div className="services-grid-premium">
              {currentBrand === 'lifetime' && (
                <>
                  <div className="service-card-premium" onClick={() => setCurrentPage('radon-testing')}>
                    <div className="service-icon-large">
                      <Shield size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>FREE Radon Testing</h3>
                      <p>Professional radon testing at no cost with no obligation. EPA-certified professionals provide accurate results and comprehensive reports.</p>
                      <ul>
                        <li>• 100% FREE testing - no hidden costs</li>
                        <li>• EPA-certified professionals</li>
                        <li>• Fast, accurate results</li>
                        <li>• Comprehensive reporting</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>

                  <div className="service-card-premium" onClick={() => setCurrentPage('hvac')}>
                    <div className="service-icon-large">
                      <Zap size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>HVAC & AeroSeal</h3>
                      <p>Complete heating and cooling services plus revolutionary AeroSeal duct sealing technology for maximum efficiency.</p>
                      <ul>
                        <li>• 24/7 emergency service</li>
                        <li>• AeroSeal duct sealing</li>
                        <li>• System installation & repair</li>
                        <li>• Energy efficiency upgrades</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>

                  <div className="service-card-premium" onClick={() => setCurrentPage('concrete')}>
                    <div className="service-icon-large">
                      <Layers size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Premium Floor Coatings</h3>
                      <p>Professional Torginol concrete coatings with lifetime warranties. Transform your garage, basement, or commercial space.</p>
                      <ul>
                        <li>• Lifetime warranty protection</li>
                        <li>• Professional Torginol products</li>
                        <li>• Custom color options</li>
                        <li>• Expert installation</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>
                </>
              )}

              {currentBrand === 'america' && (
                <>
                  <div className="service-card-premium">
                    <div className="service-icon-large">
                      <Home size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Smart Home Automation</h3>
                      <p>Complete home automation systems that learn your preferences and adapt to your lifestyle for ultimate convenience.</p>
                      <ul>
                        <li>• Automated lighting control</li>
                        <li>• Climate management</li>
                        <li>• Smart locks and access</li>
                        <li>• Voice control integration</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>

                  <div className="service-card-premium">
                    <div className="service-icon-large">
                      <Shield size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Security Systems</h3>
                      <p>Advanced security solutions with 24/7 monitoring, smart cameras, and mobile app control for complete peace of mind.</p>
                      <ul>
                        <li>• 24/7 professional monitoring</li>
                        <li>• Smart camera systems</li>
                        <li>• Mobile app control</li>
                        <li>• Emergency response</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>

                  <div className="service-card-premium">
                    <div className="service-icon-large">
                      <Zap size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Control4 Integration</h3>
                      <p>Seamless integration of all your smart home devices through the industry-leading Control4 platform.</p>
                      <ul>
                        <li>• Unified device control</li>
                        <li>• Custom programming</li>
                        <li>• Professional installation</li>
                        <li>• Ongoing support</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>
                </>
              )}

              {currentBrand === 'closets' && (
                <>
                  <div className="service-card-premium">
                    <div className="service-icon-large">
                      <Home size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Custom Closets</h3>
                      <p>Personalized closet systems designed to maximize space and organization with premium materials and finishes.</p>
                      <ul>
                        <li>• Custom design consultation</li>
                        <li>• Premium materials</li>
                        <li>• Professional installation</li>
                        <li>• Lifetime warranty</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>

                  <div className="service-card-premium">
                    <div className="service-icon-large">
                      <Layers size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Pantry Organization</h3>
                      <p>Transform your pantry into an organized, efficient space with custom shelving and storage solutions.</p>
                      <ul>
                        <li>• Custom shelving systems</li>
                        <li>• Pull-out drawers</li>
                        <li>• Adjustable components</li>
                        <li>• Easy access design</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>

                  <div className="service-card-premium">
                    <div className="service-icon-large">
                      <Wrench size={80} />
                    </div>
                    <div className="service-content-premium">
                      <h3>Garage Storage</h3>
                      <p>Complete garage organization systems that create functional storage while maintaining vehicle space.</p>
                      <ul>
                        <li>• Wall-mounted systems</li>
                        <li>• Overhead storage</li>
                        <li>• Workbench solutions</li>
                        <li>• Tool organization</li>
                      </ul>
                      <button className="service-btn">Learn More</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section-premium">
          <div className="container">
            <h2 className="section-title-premium">What Our Customers Say</h2>
            <p className="section-description">
              Real experiences from satisfied customers across Wisconsin, Illinois, Minnesota, and Colorado.
            </p>
            
            <div className="testimonials-grid-premium">
              <div className="testimonial-card-premium">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "Lifetime Home Services provided excellent radon mitigation for our home. Professional, timely, and the results were exactly as promised. Highly recommend!"
                </p>
                <div className="testimonial-author">
                  <strong>Sarah M.</strong>
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
                  "The AeroSeal duct sealing made a huge difference in our energy bills. The team was professional and explained everything clearly."
                </p>
                <div className="testimonial-author">
                  <strong>Mike R.</strong>
                  <span>Chicago, IL</span>
                </div>
              </div>

              <div className="testimonial-card-premium">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "Outstanding concrete coating work! Our garage floor looks amazing and the lifetime warranty gives us peace of mind."
                </p>
                <div className="testimonial-author">
                  <strong>Jennifer L.</strong>
                  <span>Milwaukee, WI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section-premium-homepage">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact {currentBrandData.name} today for professional {currentBrand === 'lifetime' ? 'home services' : currentBrand === 'america' ? 'smart home solutions' : 'storage solutions'} with guaranteed results.
            </p>
            <div className="cta-buttons-homepage">
              <button onClick={openContactForm} className="btn-primary-homepage">
                <CheckCircle size={24} />
                Get Free Estimate
              </button>
              <button onClick={handlePhoneClick} className="btn-secondary-homepage">
                <Phone size={24} />
                Call {currentBrandData.phone}
              </button>
            </div>
          </div>
        </section>

        <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
      </div>
    );
  }

  // Contact Modal Component
  function ContactModal() {
    if (!isContactModalOpen) return null;

    return (
      <div className="modal-overlay" onClick={closeContactForm}>
        <div className="modal-content-premium" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header-premium">
            <h2 className="modal-title">Get Your Free Estimate</h2>
            <button onClick={closeContactForm} className="close-btn-premium">
              <X size={24} />
            </button>
          </div>
          
          <form className="contact-form-premium">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-input" required />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Service Needed</label>
              <select className="form-select" required>
                <option value="">Select a service...</option>
                {currentBrandData.services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Project Details</label>
              <textarea className="form-textarea" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn-premium">
              Get Free Estimate
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Phone Popup Component
  function PhonePopup() {
    if (!isPhonePopupOpen) return null;

    return (
      <div className="modal-overlay" onClick={closePhonePopup}>
        <div className="phone-popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="phone-popup-header">
            <h3>Contact {currentBrandData.name}</h3>
            <button onClick={closePhonePopup} className="close-btn">
              <X size={20} />
            </button>
          </div>
          
          <div className="phone-popup-body">
            <div className="phone-number-display">
              <Phone size={32} color="#1e40af" />
              <div className="large-phone-number">{currentBrandData.phone}</div>
            </div>
            <p className="phone-popup-text">
              Call now to speak with our professional team about your {currentBrand === 'lifetime' ? 'home service' : currentBrand === 'america' ? 'smart home' : 'storage'} needs. 
              We're here to help with expert advice and free estimates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main App Render
  if (currentPage === 'wisconsin') {
    return <WisconsinPage 
      openContactForm={openContactForm} 
      handlePhoneClick={handlePhoneClick} 
      setCurrentPage={setCurrentPage}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
      closeMobileMenu={closeMobileMenu}
      currentBrand={currentBrand}
      setCurrentBrand={setCurrentBrand}
      MultiBrandHeader={MultiBrandHeader}
      ProfessionalFooter={ProfessionalFooter}
    />;
  }

  if (currentPage === 'illinois') {
    return <IllinoisPage 
      openContactForm={openContactForm} 
      handlePhoneClick={handlePhoneClick} 
      setCurrentPage={setCurrentPage}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
      closeMobileMenu={closeMobileMenu}
      currentBrand={currentBrand}
      setCurrentBrand={setCurrentBrand}
      MultiBrandHeader={MultiBrandHeader}
      ProfessionalFooter={ProfessionalFooter}
    />;
  }

  if (currentPage === 'minnesota') {
    return <MinnesotaPage 
      openContactForm={openContactForm} 
      handlePhoneClick={handlePhoneClick} 
      setCurrentPage={setCurrentPage}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
      closeMobileMenu={closeMobileMenu}
      currentBrand={currentBrand}
      setCurrentBrand={setCurrentBrand}
      MultiBrandHeader={MultiBrandHeader}
      ProfessionalFooter={ProfessionalFooter}
    />;
  }

  if (currentPage === 'colorado') {
    return <ColoradoPage 
      openContactForm={openContactForm} 
      handlePhoneClick={handlePhoneClick} 
      setCurrentPage={setCurrentPage}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
      closeMobileMenu={closeMobileMenu}
      currentBrand={currentBrand}
      setCurrentBrand={setCurrentBrand}
      MultiBrandHeader={MultiBrandHeader}
      ProfessionalFooter={ProfessionalFooter}
    />;
  }

  return (
    <div className="App">
      <Homepage />
      <ContactModal />
      <PhonePopup />
    </div>
  );
}

export default App;

