import { useState } from 'react';
import { Phone, Home, Zap, Shield, Wrench, Droplets, Layers, X, CheckCircle, ChevronDown, ArrowRight, Star, Clock, Users, Award, CreditCard, Menu, MapPin } from 'lucide-react'
import './App.css'

// Import actual professional images and branding from current site
import heroImage from './assets/actual_hero_house_image.jpeg';
import lifetimeLogo from './assets/LifetimeHomeServicesLogo.png';
import hvacImage from './assets/hvac_air_vent_professional.jpeg';
import electricalImage from './assets/electrical_panel_professional.jpeg';
import furnaceImage from './assets/furnace_repair_technician.jpeg';
import radonTestingDevice from './assets/radon_testing_device.jpg';
import radonMitigationSystem from './assets/radon_mitigation_house_new.jpg';
import concreteFloorCoating from './assets/concrete_floor_coating.jpg';
import aerosealLogo from './assets/aeroseal_logo.jpg';
import userTorginolFlakes1 from './assets/user_torginol_flakes_1.png';
import userTorginolFlakes2 from './assets/user_torginol_flakes_2.png';
import flakeTidalWave from './assets/flake_tidal_wave.jpg';
import flakeMixedBed from './assets/flake_mixed_bed.jpg';
import flakeOceanBlue from './assets/flake_ocean_blue.jpg';
import flakeDesertSand from './assets/flake_desert_sand.jpg';
import flakeStormGray from './assets/flake_storm_gray.jpg';
import torginolFlakePattern1 from './assets/torginol_flake_pattern_1.avif';
import torginolFlakePattern2 from './assets/torginol_flake_pattern_2.avif';
import torginolFlakePattern3 from './assets/torginol_flake_pattern_3.avif';
import torginolFlakePattern4 from './assets/torginol_flake_pattern_4.avif';
import electricalIcon from './assets/service_icons_electrical.svg';
import radonIcon from './assets/service_icons_radon.svg';

// Import new high-quality professional images
import hvacImageNew from './assets/hvac_professional_new.jpg';
import radonMitigationSystemNew from './assets/radon_mitigation_house_professional.jpeg';
import radonTestingDeviceNew from './assets/radon_testing_device_professional_new.jpg';
import concreteFloorCoatingNew from './assets/concrete_floor_coating_professional.jpg';

// Professional Header Component - Compact Horizontal Layout
function ProfessionalHeader({ openContactForm, handlePhoneClick, currentPage, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <header className="professional-header">
      <div className="header-container">
        {/* Logo and Company Name - Horizontal Layout */}
        <div className="brand-section" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('home'); }}>
          <img src={lifetimeLogo} alt="Lifetime Home Services" className="lifetime-logo-img" />
          <h1 className="company-name">Lifetime Home Services</h1>
        </div>
        
        {/* Desktop Navigation - Under Company Name */}
        <div className="navigation-section desktop-nav">
          <nav className="main-navigation">
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('home'); }} className={currentPage === 'home' ? 'active' : ''}>Home</a>
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); }} className={currentPage === 'radon-testing' ? 'active' : ''}>Free Radon Testing</a>
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-mitigation'); }} className={currentPage === 'radon-mitigation' ? 'active' : ''}>Mitigation</a>
            <div className="nav-dropdown">
              <a href="#" className="dropdown-trigger">
                Services
                <ChevronDown size={16} />
              </a>
              <div className="dropdown-menu">
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('concrete'); }} className={currentPage === 'concrete' ? 'active' : ''}>
                  Concrete Coatings
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); }} className={currentPage === 'hvac' ? 'active' : ''}>
                  HVAC & AeroSeal
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('handyman'); }} className={currentPage === 'handyman' ? 'active' : ''}>
                  Handyman Services
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('electrical'); }} className={currentPage === 'electrical' ? 'active' : ''}>
                  Electrical Services
                </a>
              </div>
            </div>
            <div className="nav-dropdown">
              <a href="#" className="dropdown-trigger">
                Coverage Areas
                <ChevronDown size={16} />
              </a>
              <div className="dropdown-menu">
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('wisconsin'); }} className={currentPage === 'wisconsin' ? 'active' : ''}>
                  <MapPin size={16} />
                  Wisconsin
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('illinois'); }} className={currentPage === 'illinois' ? 'active' : ''}>
                  <MapPin size={16} />
                  Illinois
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('minnesota'); }} className={currentPage === 'minnesota' ? 'active' : ''}>
                  <MapPin size={16} />
                  Minnesota
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('colorado'); }} className={currentPage === 'colorado' ? 'active' : ''}>
                  <MapPin size={16} />
                  Colorado
                </a>
              </div>
            </div>
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('about'); }} className={currentPage === 'about' ? 'active' : ''}>About</a>
            <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('contact'); }} className={currentPage === 'contact' ? 'active' : ''}>Contact</a>
            <a href="https://apply.syf.com/eapply/eapply.action?omniToken=DZAFT3zN" target="_blank" rel="noopener noreferrer" className="financing-link">Financing</a>
          </nav>
        </div>
        
        {/* Contact Section */}
        <div className="header-contact">
          <a href="tel:2629555701" className="phone-header mobile-only">
            <Phone size={20} />
            (262) 955-5701
          </a>
          <button onClick={handlePhoneClick} className="phone-header desktop-only">
            <Phone size={20} />
            (262) 955-5701
          </button>
          <button onClick={openContactForm} className="quote-btn-header">
            Contact Us
          </button>
          
          {/* Hamburger Menu Button - Mobile Only */}
          <button onClick={toggleMobileMenu} className="hamburger-menu-btn" aria-label="Open menu">
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
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('home'); closeMobileMenu(); }} className={currentPage === 'home' ? 'active' : ''}>
                <Home size={20} />
                Home
              </a>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); closeMobileMenu(); }} className={currentPage === 'radon-testing' ? 'active' : ''}>
                <Shield size={20} />
                FREE Testing
              </a>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-mitigation'); closeMobileMenu(); }} className={currentPage === 'radon-mitigation' ? 'active' : ''}>
                <Shield size={20} />
                Mitigation
              </a>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('concrete'); closeMobileMenu(); }} className={currentPage === 'concrete' ? 'active' : ''}>
                <Layers size={20} />
                Concrete
              </a>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); closeMobileMenu(); }} className={currentPage === 'hvac' ? 'active' : ''}>
                <Zap size={20} />
                HVAC
              </a>
              <div className="mobile-nav-section">
                <h4>Coverage Areas</h4>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('wisconsin'); closeMobileMenu(); }} className={currentPage === 'wisconsin' ? 'active' : ''}>
                  <MapPin size={20} />
                  Wisconsin
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('illinois'); closeMobileMenu(); }} className={currentPage === 'illinois' ? 'active' : ''}>
                  <MapPin size={20} />
                  Illinois
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('minnesota'); closeMobileMenu(); }} className={currentPage === 'minnesota' ? 'active' : ''}>
                  <MapPin size={20} />
                  Minnesota
                </a>
                <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('colorado'); closeMobileMenu(); }} className={currentPage === 'colorado' ? 'active' : ''}>
                  <MapPin size={20} />
                  Colorado
                </a>
              </div>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('about'); closeMobileMenu(); }} className={currentPage === 'about' ? 'active' : ''}>
                <Users size={20} />
                About
              </a>
              <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('contact'); closeMobileMenu(); }} className={currentPage === 'contact' ? 'active' : ''}>
                <Phone size={20} />
                Contact
              </a>
              <a href="https://apply.syf.com/eapply/eapply.action?omniToken=DZAFT3zN" target="_blank" rel="noopener noreferrer" className="financing-link-mobile">
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

// Professional Footer Component - Reusable across all pages
function ProfessionalFooter({ setCurrentPage }) {
  return (
    <footer className="professional-footer">
      <div className="footer-container">
        {/* Footer Slogan */}
        <div className="footer-slogan">
          <h2>Trusted Solutions. Lifetime Results.</h2>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>Phone: (262) 955-5701</p>
            <p>Toll Free: (833) 941-6888</p>
            <p>Email: info@lifetimehomeservices.com</p>
            <p>Address: 3485 N 124th St, Brookfield, WI 53005</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#" onClick={() => setCurrentPage('contact')}>Contact</a>
            <a href="https://apply.syf.com/eapply/eapply.action?omniToken=DZAFT3zN" target="_blank" rel="noopener noreferrer">Financing</a>
            <a href="#" onClick={() => setCurrentPage('about')}>About</a>
            <a href="#" onClick={() => setCurrentPage('radon-testing')}>Free Radon Testing</a>
            <a href="#" onClick={() => setCurrentPage('concrete')}>Concrete Coatings</a>
            <a href="#" onClick={() => setCurrentPage('hvac')}>HVAC & AeroSeal</a>
            <a href="#" onClick={() => setCurrentPage('privacy')}>Privacy Policy</a>
          </div>
          
          <div className="footer-section">
            <h3>Service Areas</h3>
            <p>Wisconsin (All Services)</p>
            <p>Illinois (HVAC & AeroSeal)</p>
            <p>Minnesota (FREE Radon Testing)</p>
            <p>Colorado (FREE Radon Testing)</p>
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
                <span>5-Star Rated on Google</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Geo-Targeted SEO Block */}
        <div className="footer-seo">
          <p className="seo-text">
            Proudly serving all of Wisconsin including Waukesha, Milwaukee, Madison, and Green Bay—plus licensed support in Illinois, Minnesota, and Colorado.
          </p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Lifetime Home Services. All rights reserved. Professional home services in Wisconsin, Illinois, Minnesota & Colorado.</p>
        </div>
      </div>
    </footer>
  );
}

// FREE Radon Testing Landing Page Component
function FreeRadonTestingPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="radon-testing"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Service-Specific Hero Section */}
      <section className="service-hero radon-testing-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>100% FREE • No Obligation • EPA Certified</span>
          </div>
          <h1>FREE RADON TESTING</h1>
          <h2>Wisconsin • Minnesota • Colorado</h2>
          <p className="hero-subtitle">
            Professional EPA-certified radon testing at no cost to you. Protect your family's health with accurate, reliable radon level detection.
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Schedule FREE Test
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose FREE Testing Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Get FREE Radon Testing?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Shield size={48} />
              <h3>Protect Your Family</h3>
              <p>Radon is the #2 cause of lung cancer. Early detection saves lives and protects your loved ones from this invisible threat.</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={48} />
              <h3>EPA Certified Testing</h3>
              <p>Our professional-grade equipment and certified technicians ensure accurate, reliable results you can trust.</p>
            </div>
            <div className="benefit-card">
              <Home size={48} />
              <h3>Increase Home Value</h3>
              <p>Documented safe radon levels increase your home's marketability and provide peace of mind for future buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas">
        <div className="container">
          <h2>FREE Testing Available In:</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin Service Area</h3>
              <p><strong>FREE Radon Testing</strong></p>
              <p>Complete radon services available</p>
              <ul>
                <li>✓ FREE Testing</li>
                <li>✓ Professional Mitigation</li>
                <li>✓ System Maintenance</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Minnesota</h3>
              <p><strong>FREE Radon Testing</strong></p>
              <p>Testing services available</p>
              <ul>
                <li>✓ FREE Testing</li>
                <li>✓ Professional Reports</li>
                <li>✓ Mitigation Referrals</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Colorado</h3>
              <p><strong>FREE Radon Testing</strong></p>
              <p>Testing services available</p>
              <ul>
                <li>✓ FREE Testing</li>
                <li>✓ Professional Reports</li>
                <li>✓ Mitigation Referrals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="testing-process">
        <div className="container">
          <h2>Our Professional Testing Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Schedule Your FREE Test</h3>
              <p>Call us or fill out our form to schedule your complimentary radon test at your convenience.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Professional Installation</h3>
              <p>Our EPA-certified technicians place professional-grade testing equipment in your home.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>48-Hour Testing Period</h3>
              <p>Equipment monitors radon levels continuously for accurate, reliable measurements.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Detailed Results Report</h3>
              <p>Receive comprehensive results with recommendations and next steps if mitigation is needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready for Your FREE Radon Test?</h2>
          <p>Don't wait - protect your family's health with professional radon testing at no cost to you.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Schedule FREE Test Online
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Radon Mitigation Landing Page Component
function RadonMitigationPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="radon-mitigation"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Service-Specific Hero Section */}
      <section className="service-hero radon-mitigation-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>All States • EPA Certified • Guaranteed Results</span>
          </div>
          <h1>RADON MITIGATION SYSTEMS</h1>
          <h2>Professional Installation • All States</h2>
          <p className="hero-subtitle">
            Custom radon mitigation systems designed to reduce dangerous radon levels in your home. EPA-certified installation with guaranteed results.
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Contact Us
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200" target="_blank" rel="noopener noreferrer" className="btn-financing">
              <CreditCard size={20} />
              Apply for Financing
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Professional Mitigation */}
      <section className="service-benefits">
        <div className="container">
          <h2 className="centered-title">Why Choose Professional Radon Mitigation?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Shield size={48} />
              <h3>Guaranteed Results</h3>
              <p>Our EPA-certified systems are guaranteed to reduce radon levels below 4.0 pCi/L, protecting your family's health.</p>
            </div>
            <div className="benefit-card">
              <Award size={48} />
              <h3>EPA Certified Installation</h3>
              <p>Professional installation by EPA-certified technicians following all industry standards and local building codes.</p>
            </div>
            <div className="benefit-card">
              <Home size={48} />
              <h3>Custom System Design</h3>
              <p>Each system is custom-designed for your home's unique foundation and layout for maximum effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2 className="centered-title">Radon Mitigation Available In All States</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin - Complete Services</h3>
              <p><strong>Complete Radon Services</strong></p>
              <ul>
                <li>✓ FREE Testing</li>
                <li>✓ Professional Mitigation</li>
                <li>✓ System Maintenance</li>
                <li>✓ Follow-up Testing</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>All Other States</h3>
              <p><strong>Professional Mitigation</strong></p>
              <ul>
                <li>✓ Custom System Design</li>
                <li>✓ EPA Certified Installation</li>
                <li>✓ Guaranteed Results</li>
                <li>✓ Warranty Coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mitigation Process */}
      <section className="testing-process">
        <div className="container">
          <h2 className="centered-title">Our Professional Mitigation Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Home Assessment</h3>
              <p>Comprehensive evaluation of your home's foundation, layout, and radon levels to design the optimal system.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Custom System Design</h3>
              <p>EPA-certified design tailored to your home's specific needs for maximum radon reduction effectiveness.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Professional Installation</h3>
              <p>Expert installation by certified technicians following all EPA guidelines and local building codes.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing & Verification</h3>
              <p>Post-installation testing to verify radon levels are below 4.0 pCi/L with guaranteed results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Protect Your Family?</h2>
          <p>Don't wait - get professional radon mitigation with guaranteed results.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Concrete Floor Coatings Landing Page Component
function ConcreteCoatingsPage({ openContactForm, handlePhoneClick, setCurrentPage }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="concrete"
        setCurrentPage={setCurrentPage}
      />

      {/* Service-Specific Hero Section */}
      <section className="service-hero concrete-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Wisconsin Only • Lifetime Warranty • Professional Installation</span>
          </div>
          <h1>CONCRETE FLOOR COATINGS</h1>
          <h2>Transform Your Garage & Basement Floors</h2>
          <p className="hero-subtitle">
            Professional epoxy and polyurea floor coatings that transform your concrete floors into beautiful, durable surfaces that last a lifetime.
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Get Free Estimate
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200" target="_blank" rel="noopener noreferrer" className="btn-financing">
              <CreditCard size={20} />
              Apply for Financing
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Choose Professional Floor Coatings?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Layers size={48} />
              <h3>Lifetime Durability</h3>
              <p>Our professional-grade coatings resist stains, chemicals, and wear for decades with minimal maintenance.</p>
            </div>
            <div className="benefit-card">
              <Star size={48} />
              <h3>Beautiful Finish</h3>
              <p>Transform ugly concrete into stunning floors with decorative flakes, colors, and high-gloss finishes.</p>
            </div>
            <div className="benefit-card">
              <Shield size={48} />
              <h3>Easy Maintenance</h3>
              <p>Sealed surfaces are easy to clean, resist oil stains, and maintain their beauty with simple mopping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>Serving Wisconsin Homeowners</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin Residential Services</h3>
              <p><strong>Complete Floor Coating Services</strong></p>
              <ul>
                <li>✓ Garage Floor Coatings</li>
                <li>✓ Basement Floor Coatings</li>
                <li>✓ Decorative Flake Systems</li>
                <li>✓ Lifetime Warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Flake Options */}
      <section className="flake-samples">
        <div className="container">
          <h2 className="centered-title">Choose Your Decorative Flake Style</h2>
          <p className="centered-description">Professional decorative flake systems provide beautiful, durable finishes with endless design possibilities.</p>
          
          {/* 9 Flake Pattern Grid - Clean Images Without Text Overlays */}
          <div className="flake-grid">
            <div className="flake-option">
              <img src={torginolFlakePattern1} alt="Granite Mix Flake Pattern" className="flake-image" />
              <h4>Granite Mix</h4>
            </div>
            <div className="flake-option">
              <img src={torginolFlakePattern2} alt="Coyote Flake Pattern" className="flake-image" />
              <h4>Coyote</h4>
            </div>
            <div className="flake-option">
              <img src={torginolFlakePattern3} alt="Granite Flake Pattern" className="flake-image" />
              <h4>Granite</h4>
            </div>
            <div className="flake-option">
              <img src={torginolFlakePattern4} alt="Shoreline Flake Pattern" className="flake-image" />
              <h4>Shoreline</h4>
            </div>
            <div className="flake-option">
              <img src={flakeTidalWave} alt="Tidal Wave Flake Pattern" className="flake-image" />
              <h4>Tidal Wave</h4>
            </div>
            <div className="flake-option">
              <img src={flakeMixedBed} alt="Mixed Bed Flake Pattern" className="flake-image" />
              <h4>Mixed Bed</h4>
            </div>
            <div className="flake-option">
              <img src={flakeOceanBlue} alt="Ocean Blue Flake Pattern" className="flake-image" />
              <h4>Ocean Blue</h4>
            </div>
            <div className="flake-option">
              <img src={flakeDesertSand} alt="Desert Sand Flake Pattern" className="flake-image" />
              <h4>Desert Sand</h4>
            </div>
            <div className="flake-option">
              <img src={flakeStormGray} alt="Storm Gray Flake Pattern" className="flake-image" />
              <h4>Storm Gray</h4>
            </div>
          </div>
          
          {/* Professional Benefits Section - Optimized Layout */}
          <div className="flake-benefits-section">
            <h3 className="centered-title">Premium Decorative Flake Systems</h3>
            <div className="benefits-grid-optimized">
              <div className="benefit-column">
                <ul>
                  <li>✓ 9 beautiful color combinations available</li>
                  <li>✓ Slip-resistant texture for safety</li>
                  <li>✓ Hides imperfections in concrete</li>
                </ul>
              </div>
              <div className="benefit-column">
                <ul>
                  <li>✓ Easy to clean and maintain</li>
                  <li>✓ Professional installation included</li>
                  <li>✓ Lifetime warranty coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="testing-process">
        <div className="container">
          <h2>Our Professional Installation Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Surface Preparation</h3>
              <p>Professional diamond grinding and cleaning to ensure perfect adhesion and long-lasting results.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Primer Application</h3>
              <p>High-quality primer system creates the foundation for superior coating adhesion and durability.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Decorative Coating</h3>
              <p>Professional application of your chosen coating system with decorative flakes and color options.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Protective Topcoat</h3>
              <p>Clear protective topcoat provides UV resistance, chemical protection, and beautiful high-gloss finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Floors?</h2>
          <p>Get a free estimate for professional concrete floor coatings with lifetime warranty.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// HVAC & AeroSeal Landing Page Component
function HVACPage({ openContactForm, handlePhoneClick, setCurrentPage }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="hvac"
        setCurrentPage={setCurrentPage}
      />

      {/* Service-Specific Hero Section */}
      <section className="service-hero hvac-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Wisconsin & Illinois • 24/7 Emergency • Energy Efficient</span>
          </div>
          <h1>HVAC & AEROSEAL SERVICES</h1>
          <h2>Heating, Cooling & Duct Sealing Solutions</h2>
          <p className="hero-subtitle">
            Complete HVAC services including furnace repair, AC installation, and revolutionary AeroSeal duct sealing technology for maximum energy efficiency.
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Schedule Service
            </button>
            <a href="https://www.synchrony.com/mmc/S6229146200" target="_blank" rel="noopener noreferrer" className="btn-financing">
              <CreditCard size={20} />
              Apply for Financing
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Choose Our HVAC Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Clock size={48} />
              <h3>24/7 Emergency Service</h3>
              <p>When your heating or cooling fails, we're here 24/7 to restore comfort to your home quickly and professionally.</p>
            </div>
            <div className="benefit-card">
              <Zap size={48} />
              <h3>Energy Efficiency</h3>
              <p>Our AeroSeal duct sealing and high-efficiency equipment reduce energy costs and improve home comfort.</p>
            </div>
            <div className="benefit-card">
              <Award size={48} />
              <h3>Licensed Professionals</h3>
              <p>Fully licensed and insured HVAC technicians with years of experience and ongoing training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>HVAC Services Available In:</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin - Complete HVAC</h3>
              <p><strong>Complete HVAC Services</strong></p>
              <ul>
                <li>✓ Furnace Repair & Installation</li>
                <li>✓ AC Repair & Installation</li>
                <li>✓ AeroSeal Duct Sealing</li>
                <li>✓ 24/7 Emergency Service</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Illinois</h3>
              <p><strong>HVAC & AeroSeal Services</strong></p>
              <ul>
                <li>✓ Furnace Services</li>
                <li>✓ AC Services</li>
                <li>✓ AeroSeal Duct Sealing</li>
                <li>✓ Energy Efficiency Upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AeroSeal Certification */}
      <section className="aeroseal-certification">
        <div className="container">
          <div className="certification-header">
            <h2>AeroSeal Certified Partner</h2>
            <div className="certification-logo-header">
              <img src={aerosealLogo} alt="AeroSeal Certified Partner" className="aeroseal-logo-centered" />
            </div>
          </div>
          <div className="certification-content">
            <div className="certification-text-full">
              <p>We are proud to be certified AeroSeal partners, bringing you the most advanced duct sealing technology available. AeroSeal can improve your home's energy efficiency by up to 30% while improving indoor air quality.</p>
              <div className="certification-features">
                <div className="feature-row">
                  <div className="feature-item">✓ Certified AeroSeal installation</div>
                  <div className="feature-item">✓ Advanced duct sealing technology</div>
                </div>
                <div className="feature-row">
                  <div className="feature-item">✓ Up to 30% energy savings</div>
                  <div className="feature-item">✓ Improved indoor air quality</div>
                </div>
                <div className="feature-row">
                  <div className="feature-item">✓ Professional warranty coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="testing-process">
        <div className="container">
          <h2>Our HVAC Services</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">🔥</div>
              <h3>Furnace Services</h3>
              <p>Repair, maintenance, and installation of all furnace types with energy-efficient options available.</p>
            </div>
            <div className="step">
              <div className="step-number">1</div>
              <h3>Air Conditioning</h3>
              <p>AC repair, maintenance, and installation with high-efficiency systems for maximum comfort and savings.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AeroSeal Duct Sealing</h3>
              <p>Revolutionary technology that seals ductwork from the inside, improving efficiency by up to 30%.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Energy Efficiency</h3>
              <p>Comprehensive energy audits and upgrades to reduce utility costs and improve home comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Need HVAC Service Today?</h2>
          <p>Call now for 24/7 emergency service or schedule your AeroSeal duct sealing consultation.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Schedule Service
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Handyman Services Landing Page Component
function HandymanPage({ openContactForm, handlePhoneClick, setCurrentPage }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="handyman"
        setCurrentPage={setCurrentPage}
      />

      {/* Service-Specific Hero Section */}
      <section className="service-hero handyman-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Wisconsin Only • Licensed Professionals • Quality Workmanship</span>
          </div>
          <h1>HANDYMAN SERVICES</h1>
          <h2>Professional Home Repairs & Maintenance</h2>
          <p className="hero-subtitle">
            Reliable handyman services for all your home repair and maintenance needs. Licensed professionals delivering quality workmanship you can trust.
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Request Service
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Choose Our Handyman Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Users size={48} />
              <h3>Licensed Professionals</h3>
              <p>All our handyman technicians are licensed, insured, and experienced in a wide range of home repairs.</p>
            </div>
            <div className="benefit-card">
              <Star size={48} />
              <h3>Quality Workmanship</h3>
              <p>We take pride in delivering high-quality repairs and installations that stand the test of time.</p>
            </div>
            <div className="benefit-card">
              <Clock size={48} />
              <h3>Reliable Service</h3>
              <p>On-time service with clear communication and fair pricing for all your home maintenance needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>Serving Wisconsin Homeowners</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin Residential Services</h3>
              <p><strong>Complete Handyman Services</strong></p>
              <ul>
                <li>✓ Home Repairs</li>
                <li>✓ Maintenance Services</li>
                <li>✓ Installation Services</li>
                <li>✓ Quality Guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="testing-process">
        <div className="container">
          <h2>Our Handyman Services</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">🔨</div>
              <h3>Home Repairs</h3>
              <p>Drywall repair, painting, trim work, and general home repairs to keep your home in perfect condition.</p>
            </div>
            <div className="step">
              <div className="step-number">🔧</div>
              <h3>Installation Services</h3>
              <p>Fixture installation, shelving, hardware installation, and assembly services for your convenience.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Maintenance</h3>
              <p>Regular maintenance services to prevent problems and keep your home functioning smoothly.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Small Projects</h3>
              <p>Those small projects that need professional attention - we handle them all with care and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Your Projects Done?</h2>
          <p>Call now to schedule reliable handyman services for your home repair and maintenance needs.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Request Service
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Electrical Services Landing Page Component
function ElectricalPage({ openContactForm, handlePhoneClick, setCurrentPage }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="electrical"
        setCurrentPage={setCurrentPage}
      />

      {/* Service-Specific Hero Section */}
      <section className="service-hero electrical-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Wisconsin Only • Licensed Electricians • Code Compliance</span>
          </div>
          <h1>ELECTRICAL SERVICES</h1>
          <h2>Licensed Electrical Contractor</h2>
          <p className="hero-subtitle">
            Professional electrical services for your home. Licensed electricians providing safe, code-compliant electrical work you can trust.
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Request Service
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Choose Our Electrical Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Shield size={48} />
              <h3>Licensed & Insured</h3>
              <p>Fully licensed electrical contractors with comprehensive insurance for your protection and peace of mind.</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={48} />
              <h3>Code Compliance</h3>
              <p>All work performed to current electrical codes and standards with proper permits and inspections.</p>
            </div>
            <div className="benefit-card">
              <Zap size={48} />
              <h3>Safety First</h3>
              <p>Safety is our top priority with proper procedures and equipment for every electrical project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>Serving Wisconsin Homeowners</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin Residential Services</h3>
              <p><strong>Licensed Electrical Services</strong></p>
              <ul>
                <li>✓ Electrical Repairs</li>
                <li>✓ Panel Upgrades</li>
                <li>✓ Safety Inspections</li>
                <li>✓ Code Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="testing-process">
        <div className="container">
          <h2>Our Electrical Services</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Electrical Repairs</h3>
              <p>Professional repair of outlets, switches, fixtures, and electrical problems throughout your home.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Panel Upgrades</h3>
              <p>Electrical panel upgrades and service increases to meet your home's growing electrical needs.</p>
            </div>
            <div className="step">
              <div className="step-number">🔍</div>
              <h3>Safety Inspections</h3>
              <p>Comprehensive electrical safety inspections to identify and resolve potential hazards.</p>
            </div>
            <div className="step">
              <div className="step-number">✅</div>
              <h3>Code Compliance</h3>
              <p>Bringing older electrical systems up to current code standards for safety and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Professional Electrical Work?</h2>
          <p>Call now for licensed electrical services with guaranteed code compliance and safety.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Request Service
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// About Us Page Component
function AboutPage({ openContactForm, handlePhoneClick, setCurrentPage }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="about"
        setCurrentPage={setCurrentPage}
      />

      {/* About Hero Section */}
      <section className="service-hero about-hero">
        <div className="hero-content">
          <h1>ABOUT LIFETIME HOME SERVICES</h1>
          <h2>Professional Home Solutions Since Day One</h2>
          <p className="hero-subtitle">
            We're dedicated to providing homeowners with professional, reliable home services that improve comfort, safety, and value. From radon testing to HVAC services, we're your trusted partner for all home improvement needs.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="service-benefits">
        <div className="container">
          <h2>Why Homeowners Choose Lifetime Home Services</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Award size={48} />
              <h3>Professional Excellence</h3>
              <p>EPA-certified technicians, licensed professionals, and quality workmanship in every service we provide.</p>
            </div>
            <div className="benefit-card">
              <Users size={48} />
              <h3>Customer-Focused</h3>
              <p>We prioritize your satisfaction with clear communication, fair pricing, and reliable service you can trust.</p>
            </div>
            <div className="benefit-card">
              <Shield size={48} />
              <h3>Comprehensive Services</h3>
              <p>From FREE radon testing to complete HVAC solutions, we're your one-stop shop for home services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>Proudly Serving Multiple States</h2>
          <div className="areas-grid">
            <div className="area-card featured">
              <h3>Wisconsin - Complete Services</h3>
              <p><strong>Complete Home Services</strong></p>
              <ul>
                <li>✓ FREE Radon Testing</li>
                <li>✓ Radon Mitigation</li>
                <li>✓ Concrete Floor Coatings</li>
                <li>✓ HVAC & AeroSeal</li>
                <li>✓ Handyman Services</li>
                <li>✓ Electrical Services</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Illinois</h3>
              <p><strong>HVAC & AeroSeal Services</strong></p>
              <ul>
                <li>✓ Furnace Services</li>
                <li>✓ AC Services</li>
                <li>✓ AeroSeal Duct Sealing</li>
                <li>✓ Energy Efficiency</li>
              </ul>
            </div>
            <div className="area-card">
              <h3>Minnesota & Colorado</h3>
              <p><strong>FREE Radon Testing</strong></p>
              <ul>
                <li>✓ FREE Radon Testing</li>
                <li>✓ Professional Reports</li>
                <li>✓ Mitigation Referrals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Experience Professional Service?</h2>
          <p>Contact us today to learn how we can help improve your home's comfort, safety, and value.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              Call (262) 955-5701 Now
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Contact Page Component
function ContactPage({ openContactForm, handlePhoneClick, setCurrentPage }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="contact"
        setCurrentPage={setCurrentPage}
      />

      {/* Contact Hero Section */}
      <section className="service-hero contact-hero">
        <div className="hero-content">
          <h1>CONTACT LIFETIME HOME SERVICES</h1>
          <h2>Get Professional Service Today</h2>
          <p className="hero-subtitle">
            Ready to improve your home? Contact us for FREE radon testing, professional mitigation, HVAC services, and more. We're here to help!
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="service-benefits">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Phone size={48} />
              <h3>Call Us</h3>
              <p><strong>(262) 955-5701</strong></p>
              <p>Available for emergency HVAC service and all your home service needs.</p>
            </div>
            <div className="benefit-card">
              <Home size={48} />
              <h3>Visit Us</h3>
              <p><strong>805 Wells St</strong></p>
              <p>Delafield, WI 53018</p>
              <p>Professional home services headquarters</p>
            </div>
            <div className="benefit-card">
              <CheckCircle size={48} />
              <h3>Service Areas</h3>
              <p><strong>Wisconsin:</strong> All Services</p>
              <p><strong>Illinois:</strong> HVAC & AeroSeal</p>
              <p><strong>MN & CO:</strong> FREE Radon Testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="service-areas">
        <div className="container">
          <h2 className="services-title">Our Professional Services</h2>
          <div className="areas-grid">
            <div className="area-card" onClick={() => setCurrentPage('radon-testing')} style={{cursor: 'pointer'}}>
              <h3>FREE Radon Testing</h3>
              <p>Wisconsin, Minnesota & Colorado</p>
              <p>Professional EPA-certified testing at no cost</p>
            </div>
            <div className="area-card" onClick={() => setCurrentPage('radon-mitigation')} style={{cursor: 'pointer'}}>
              <h3>Radon Mitigation</h3>
              <p>All States Available</p>
              <p>Custom systems with guaranteed results</p>
            </div>
            <div className="area-card" onClick={() => setCurrentPage('concrete')} style={{cursor: 'pointer'}}>
              <h3>Concrete Coatings</h3>
              <p>Wisconsin Only</p>
              <p>Professional floor coatings with lifetime warranty</p>
            </div>
            <div className="area-card" onClick={() => setCurrentPage('hvac')} style={{cursor: 'pointer'}}>
              <h3>HVAC & AeroSeal</h3>
              <p>Wisconsin & Illinois</p>
              <p>Complete heating, cooling, and duct sealing</p>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Wisconsin State Page Component
function WisconsinPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="wisconsin"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Wisconsin State Hero Section */}
      <section className="service-hero wisconsin-hero">
        <div className="hero-content">
          <div className="hero-badge">
            Wisconsin • Complete Home Services • Professional Solutions
          </div>
          <h1>WISCONSIN HOME SERVICES</h1>
          <h2>Complete Professional Solutions</h2>
          <p className="hero-subtitle">
            ALL SERVICES AVAILABLE: Radon Testing & Mitigation, Concrete Floor Coatings, HVAC & AeroSeal, Handyman & Electrical Services
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

      {/* Wisconsin Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Wisconsin Professional Services</h2>
          <div className="services-grid">
            <div className="service-card premium" onClick={() => setCurrentPage('radon-testing')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Shield size={48} />
              </div>
              <h3>FREE Radon Testing</h3>
              <p>Professional EPA-certified radon testing and mitigation for safer indoor air</p>
              <ul>
                <li>✓ FREE Testing: Wisconsin, Minnesota, Colorado</li>
                <li>✓ Mitigation: All States</li>
                <li>✓ EPA Certified</li>
                <li>✓ Professional Equipment</li>
                <li>✓ Quick Results</li>
                <li>✓ Completely FREE</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="service-card premium" onClick={() => setCurrentPage('concrete')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Layers size={48} />
              </div>
              <h3>Concrete Floor Coatings</h3>
              <p>Transform your garage or basement with professional epoxy coatings</p>
              <ul>
                <li>✓ Wisconsin Only</li>
                <li>✓ Epoxy Coatings</li>
                <li>✓ Durable Finish</li>
                <li>✓ Easy to Clean</li>
                <li>✓ Professional Installation</li>
                <li>✓ Lifetime Warranty</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('concrete'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="service-card premium" onClick={() => setCurrentPage('hvac')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Zap size={48} />
              </div>
              <h3>HVAC & AeroSeal</h3>
              <p>Complete heating, cooling, and duct sealing services</p>
              <ul>
                <li>✓ Wisconsin & Illinois</li>
                <li>✓ Complete HVAC Services</li>
                <li>✓ AeroSeal Duct Sealing</li>
                <li>✓ Energy Efficiency</li>
                <li>✓ Professional Installation</li>
                <li>✓ 24/7 Emergency Service</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="service-card premium" onClick={() => setCurrentPage('handyman')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Wrench size={48} />
              </div>
              <h3>Handyman Services</h3>
              <p>Professional home repair and maintenance services</p>
              <ul>
                <li>✓ Wisconsin Only</li>
                <li>✓ Home Repairs</li>
                <li>✓ Maintenance Services</li>
                <li>✓ Professional Technicians</li>
                <li>✓ Quality Guaranteed</li>
                <li>✓ Licensed & Insured</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('handyman'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="service-card premium" onClick={() => setCurrentPage('electrical')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Zap size={48} />
              </div>
              <h3>Electrical Services</h3>
              <p>Licensed electrical work with guaranteed code compliance</p>
              <ul>
                <li>✓ Wisconsin Only</li>
                <li>✓ Licensed Electricians</li>
                <li>✓ Code Compliance</li>
                <li>✓ Safety Guaranteed</li>
                <li>✓ Professional Installation</li>
                <li>✓ Emergency Service</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('electrical'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisconsin Service Areas */}
      <section className="service-benefits">
        <div className="container">
          <h2>Wisconsin Service Areas</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <MapPin size={48} />
              <h3>Milwaukee Metro</h3>
              <p>Complete home services throughout the Milwaukee metropolitan area</p>
            </div>
            <div className="benefit-card">
              <MapPin size={48} />
              <h3>Madison Area</h3>
              <p>Professional services for Madison and surrounding communities</p>
            </div>
            <div className="benefit-card">
              <MapPin size={48} />
              <h3>Statewide Coverage</h3>
              <p>Serving all of Wisconsin with professional home services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready for Professional Wisconsin Home Services?</h2>
          <p>Contact us today for all your home service needs throughout Wisconsin.</p>
          <div className="state-contact-section">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              CALL (262) 955-5701 NOW
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              GET FREE ESTIMATE
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Illinois State Page Component
function IllinoisPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="illinois"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Illinois State Hero Section */}
      <section className="service-hero illinois-hero">
        <div className="hero-content">
          <div className="hero-badge">
            Illinois • HVAC & AeroSeal Services • Professional Solutions
          </div>
          <h1>ILLINOIS HVAC SERVICES</h1>
          <h2>Complete Heating & Cooling Solutions</h2>
          <p className="hero-subtitle">
            HVAC & AEROSEAL DUCT SEALING SERVICES THROUGHOUT ILLINOIS
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

      {/* Illinois Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Illinois Professional Services</h2>
          <div className="services-grid">
            <div className="service-card premium" onClick={() => setCurrentPage('hvac')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Zap size={48} />
              </div>
              <h3>HVAC Services</h3>
              <p>Complete heating, cooling, and ventilation services</p>
              <ul>
                <li>✓ Illinois Service Area</li>
                <li>✓ Complete HVAC Services</li>
                <li>✓ Professional Installation</li>
                <li>✓ Energy Efficiency</li>
                <li>✓ 24/7 Emergency Service</li>
                <li>✓ Licensed & Insured</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="service-card premium" onClick={() => setCurrentPage('hvac')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Droplets size={48} />
              </div>
              <h3>AeroSeal Duct Sealing</h3>
              <p>Advanced duct sealing technology for improved efficiency</p>
              <ul>
                <li>✓ Illinois Service Area</li>
                <li>✓ Advanced Technology</li>
                <li>✓ Energy Savings</li>
                <li>✓ Improved Air Quality</li>
                <li>✓ Professional Installation</li>
                <li>✓ Guaranteed Results</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('hvac'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Need HVAC Service in Illinois?</h2>
          <p>Contact us today for professional HVAC and AeroSeal services throughout Illinois.</p>
          <div className="state-contact-section">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              CALL (262) 955-5701 NOW
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              SCHEDULE SERVICE
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Minnesota State Page Component
function MinnesotaPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="minnesota"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Minnesota State Hero Section */}
      <section className="service-hero minnesota-hero">
        <div className="hero-content">
          <div className="hero-badge">
            Minnesota • FREE Radon Testing • Professional Solutions
          </div>
          <h1>MINNESOTA RADON TESTING</h1>
          <h2>FREE Professional Testing</h2>
          <p className="hero-subtitle">
            FREE EPA-CERTIFIED RADON TESTING THROUGHOUT MINNESOTA
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Get FREE Testing
            </button>
          </div>
        </div>
      </section>

      {/* Minnesota Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Minnesota Professional Services</h2>
          <div className="services-grid">
            <div className="service-card premium" onClick={() => setCurrentPage('radon-testing')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Shield size={48} />
              </div>
              <h3>FREE Radon Testing</h3>
              <p>Professional EPA-certified radon testing at no cost</p>
              <ul>
                <li>✓ Minnesota Service Area</li>
                <li>✓ Completely FREE Testing</li>
                <li>✓ EPA Certified</li>
                <li>✓ Professional Equipment</li>
                <li>✓ Quick Results</li>
                <li>✓ Expert Analysis</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Get FREE Radon Testing in Minnesota</h2>
          <p>Contact us today for completely free, professional radon testing throughout Minnesota.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              CALL (262) 955-5701 NOW
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              GET FREE TESTING
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Colorado State Page Component
function ColoradoPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <div className="page-container">
      <ProfessionalHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="colorado"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Colorado State Hero Section */}
      <section className="service-hero colorado-hero">
        <div className="hero-content">
          <div className="hero-badge">
            Colorado • FREE Radon Testing • Professional Solutions
          </div>
          <h1>COLORADO RADON TESTING</h1>
          <h2>FREE Professional Testing</h2>
          <p className="hero-subtitle">
            FREE EPA-CERTIFIED RADON TESTING THROUGHOUT COLORADO
          </p>
          <div className="hero-buttons">
            <button onClick={handlePhoneClick} className="btn-primary">
              <Phone size={20} />
              Call (262) 955-5701
            </button>
            <button onClick={openContactForm} className="btn-secondary">
              Get FREE Testing
            </button>
          </div>
        </div>
      </section>

      {/* Colorado Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Colorado Professional Services</h2>
          <div className="services-grid">
            <div className="service-card premium" onClick={() => setCurrentPage('radon-testing')} style={{cursor: 'pointer'}}>
              <div className="service-icon">
                <Shield size={48} />
              </div>
              <h3>FREE Radon Testing</h3>
              <p>Professional EPA-certified radon testing at no cost</p>
              <ul>
                <li>✓ Colorado Service Area</li>
                <li>✓ Completely FREE Testing</li>
                <li>✓ EPA Certified</li>
                <li>✓ Professional Equipment</li>
                <li>✓ Quick Results</li>
                <li>✓ Expert Analysis</li>
              </ul>
              <div className="service-buttons">
                <button onClick={(e) => { e.stopPropagation(); handlePhoneClick(); }} className="btn-primary">
                  <Phone size={20} />
                  Contact Us
                </button>
                <button onClick={(e) => { e.stopPropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); setCurrentPage('radon-testing'); }} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Get FREE Radon Testing in Colorado</h2>
          <p>Contact us today for completely free, professional radon testing throughout Colorado.</p>
          <div className="cta-buttons">
            <button onClick={handlePhoneClick} className="btn-primary large">
              <Phone size={24} />
              CALL (262) 955-5701 NOW
            </button>
            <button onClick={openContactForm} className="btn-secondary large">
              GET FREE TESTING
            </button>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} />
    </div>
  );
}

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openContactForm = () => setShowContactModal(true);
  const closeContactForm = () => setShowContactModal(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Handle click-to-call functionality
  const handlePhoneClick = () => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, directly initiate call
      window.location.href = 'tel:+12629555701';
    } else {
      // On desktop, show popup with phone number
      setShowPhonePopup(true);
    }
  };

  const closePhonePopup = () => setShowPhonePopup(false);

  // Professional Services Data - Priority Order as Requested
  const services = [
    {
      id: 'radon-testing',
      title: 'FREE Radon Testing',
      subtitle: 'Professional FREE radon testing in Wisconsin, Minnesota & Colorado',
      description: 'Professional radon testing and mitigation for safer indoor air',
      features: [
        'FREE Testing: Wisconsin, Minnesota, Colorado',
        'Mitigation: All States',
        'EPA Certified',
        'Professional Equipment',
        'Quick Results',
        'Completely FREE'
      ],
      image: radonTestingDevice,
      icon: radonIcon,
      priority: 1,
      color: 'teal'
    },
    {
      id: 'radon-mitigation',
      title: 'Radon Mitigation',
      subtitle: 'Professional radon mitigation systems for all states',
      description: 'Custom radon mitigation systems to reduce dangerous radon levels',
      features: [
        'Mitigation: All States',
        'Custom Systems',
        'Guaranteed Results',
        'Follow-up Testing',
        'EPA Certified',
        'Professional Installation'
      ],
      image: radonMitigationSystem,
      icon: radonIcon,
      priority: 2,
      color: 'blue'
    },
    {
      id: 'concrete-coatings',
      title: 'Concrete Floor Coatings',
      subtitle: 'Professional concrete floor coatings in Wisconsin',
      description: 'Transform your garage or basement with professional epoxy coatings',
      features: [
        'Wisconsin Only',
        'Epoxy Coatings',
        'Durable Finish',
        'Easy to Clean',
        'Professional Installation',
        'Lifetime Warranty'
      ],
      image: concreteFloorCoating,
      priority: 3,
      color: 'purple'
    },
    {
      id: 'hvac-aeroseal',
      title: 'HVAC & AeroSeal Services',
      subtitle: 'Professional heating, cooling, and ventilation solutions',
      description: 'Complete HVAC services including AeroSeal duct sealing',
      features: [
        'Wisconsin & Illinois',
        'Furnace Repair',
        'AC Installation',
        'AeroSeal Duct Sealing',
        'Energy Efficient',
        '24/7 Emergency Service'
      ],
      image: hvacImage,
      priority: 4,
      color: 'red'
    },
    {
      id: 'handyman',
      title: 'Handyman Services',
      subtitle: 'Professional handyman services in Wisconsin',
      description: 'Reliable handyman services for all your home repair needs',
      features: [
        'Wisconsin Only',
        'Home Repairs',
        'Maintenance',
        'Installation Services',
        'Licensed Professionals',
        'Quality Workmanship'
      ],
      image: furnaceImage,
      priority: 5,
      color: 'green'
    },
    {
      id: 'electrical',
      title: 'Electrical Services',
      subtitle: 'Licensed electrical contractor in Wisconsin',
      description: 'Professional electrical services for your home',
      features: [
        'Wisconsin Only',
        'Licensed Electricians',
        'Electrical Repairs',
        'Panel Upgrades',
        'Safety Inspections',
        'Code Compliance'
      ],
      image: electricalImage,
      icon: electricalIcon,
      priority: 6,
      color: 'yellow'
    }
  ];

  // Render the appropriate page based on currentPage state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'radon-testing':
        return <FreeRadonTestingPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'radon-mitigation':
        return <RadonMitigationPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'concrete':
        return <ConcreteCoatingsPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'hvac':
        return <HVACPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'handyman':
        return <HandymanPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'electrical':
        return <ElectricalPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'wisconsin':
        return <WisconsinPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'illinois':
        return <IllinoisPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'minnesota':
        return <MinnesotaPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'colorado':
        return <ColoradoPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'about':
        return <AboutPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      case 'contact':
        return <ContactPage openContactForm={openContactForm} handlePhoneClick={handlePhoneClick} setCurrentPage={setCurrentPage} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />;
      default:
        return (
          <div className="App">
            <ProfessionalHeader 
              openContactForm={openContactForm} 
              handlePhoneClick={handlePhoneClick} 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              closeMobileMenu={closeMobileMenu}
            />

            {/* Premium Hero Section - Inspired by Lifetime Renovation */}
            <section className="professional-hero">
              <div className="hero-content">
                <div className="hero-badge">
                  Wisconsin • Illinois • Minnesota & Colorado • Professional Home Solutions
                </div>
                <h1>Trusted Solutions. Lifetime Results.</h1>
                <p className="hero-subtitle">
                  Radon • HVAC • Floor Coatings • Duct Sealing • Smart Home & Security<br />
                  Serving Wisconsin, Illinois, Minnesota & Colorado
                </p>
                <div className="hero-buttons">
                  <a href="tel:2629555701" className="btn-primary mobile-only">
                    <Phone size={20} />
                    Call (262) 955-5701
                  </a>
                  <button onClick={handlePhoneClick} className="btn-primary desktop-only">
                    <Phone size={20} />
                    Call (262) 955-5701
                  </button>
                  <button onClick={openContactForm} className="btn-secondary">
                    Contact Us
                  </button>
                  <a href="https://www.synchrony.com/mmc/S6229146200" target="_blank" rel="noopener noreferrer" className="btn-financing">
                    <CreditCard size={20} />
                    Apply for Financing
                  </a>
                </div>
              </div>
            </section>

            {/* Brand Summary Section */}
            <section className="brand-summary-section">
              <div className="brand-summary-container">
                <p className="brand-summary-text">
                  Lifetime Home Services is your one-stop provider for expert radon mitigation, HVAC optimization, concrete coatings, and whole-home comfort upgrades—serving homeowners across WI, IL, MN & CO.
                </p>
              </div>
            </section>

            {/* Professional Services Section */}
            <section className="services-section">
              <div className="services-container">
                <div className="section-header">
                  <h2 className="services-title">Our Professional Services</h2>
                  <p>Professional home services you can trust, delivered by experienced technicians throughout Wisconsin and beyond.</p>
                </div>
                
                <div className="services-grid">
                  {services.map((service) => (
                    <div key={service.id} className="service-card">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="service-image"
                      />
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <ul className="service-features">
                          {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <div className="service-buttons">
                          <button onClick={openContactForm} className="btn-service btn-quote">
                            Contact Us
                          </button>
                          <button 
                            className="btn-service btn-learn"
                            onClick={() => {
                              // Scroll to top first
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              
                              // Then navigate to the page
                              if (service.id === 'radon-testing') setCurrentPage('radon-testing');
                              else if (service.id === 'radon-mitigation') setCurrentPage('radon-mitigation');
                              else if (service.id === 'concrete-coatings') setCurrentPage('concrete');
                              else if (service.id === 'hvac-aeroseal') setCurrentPage('hvac');
                              else if (service.id === 'handyman') setCurrentPage('handyman');
                              else if (service.id === 'electrical') setCurrentPage('electrical');
                            }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
              <div className="testimonials-container">
                <h2 className="testimonials-title">What Our Customers Say</h2>
                <div className="testimonials-grid">
                  <div className="testimonial-card">
                    <div className="testimonial-stars">
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    </div>
                    <p className="testimonial-text">
                      "The Lifetime team made everything so easy. The radon test was free and gave us peace of mind."
                    </p>
                    <div className="testimonial-author">
                      <strong>Katie H.</strong>
                      <span>Brookfield, WI</span>
                    </div>
                  </div>
                  
                  <div className="testimonial-card">
                    <div className="testimonial-stars">
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    </div>
                    <p className="testimonial-text">
                      "From scheduling to install, the crew was amazing. My garage floor looks brand new."
                    </p>
                    <div className="testimonial-author">
                      <strong>Jason T.</strong>
                      <span>Madison, WI</span>
                    </div>
                  </div>
                  
                  <div className="testimonial-card">
                    <div className="testimonial-stars">
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                      <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    </div>
                    <p className="testimonial-text">
                      "Professional service from start to finish. Our HVAC system runs so much better now."
                    </p>
                    <div className="testimonial-author">
                      <strong>Sarah M.</strong>
                      <span>Milwaukee, WI</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Premium Logo Silhouette Section */}
            <section className="logo-silhouette-section">
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
              <div className="floating-element floating-element-3"></div>
              
              <div className="logo-silhouette-content">
                <h2 className="premium-heading">Professional Excellence</h2>
                <p>
                  For over a decade, Lifetime Home Services has been the trusted choice for homeowners across Wisconsin, Illinois, Minnesota, and Colorado. 
                  Our commitment to excellence, professional expertise, and customer satisfaction sets us apart in the home services industry.
                </p>
                <button className="btn-premium" onClick={openContactForm}>
                  Experience the Difference
                </button>
              </div>
            </section>

            {/* Enhanced Logo Silhouette Section with Multiple LIFETIME Watermarks */}
            <section className="logo-silhouette-section">
              <div className="lifetime-watermarks">
                <span className="watermark-text watermark-1">LIFETIME</span>
                <span className="watermark-text watermark-2">LIFETIME</span>
                <span className="watermark-text watermark-3">LIFETIME</span>
              </div>
              <div className="logo-silhouette-content">
                <h2>WHY HOMEOWNERS CHOOSE LIFETIME HOME SERVICES</h2>
                <p>
                  Homeowners throughout Wisconsin and beyond trust Lifetime Home Services because we combine expertise with exceptional customer care. 
                  From furnace repair and HVAC maintenance to professional electrical work, we're here to ensure your home stays 
                  comfortable, functional, and safe year-round.
                </p>
                <div className="cta-buttons">
                  <button onClick={handlePhoneClick} className="btn-primary">
                    Contact Us
                    <Phone size={20} />
                    Call 262.955.5701
                  </button>
                  <a href="https://apply.syf.com/eapply/eapply.action?omniToken=DZAFT3zN" target="_blank" rel="noopener noreferrer" className="btn-financing">
                    Apply For Financing
                  </a>
                </div>
              </div>
            </section>

            <ProfessionalFooter setCurrentPage={setCurrentPage} />
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}

      {/* Enhanced Contact Modal with Cross-Selling */}
      {showContactModal && (
        <div className="modal-overlay" onClick={closeContactForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Request Your Free Quote</h3>
              <button onClick={closeContactForm} className="close-btn">
                <X size={24} />
              </button>
            </div>
            
            <form>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input type="text" className="form-input" placeholder="Your full name" required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-input" placeholder="(262) 555-0123" required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your.email@example.com" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Primary Service Needed</label>
                <select className="form-select">
                  <option value="">Select your primary service</option>
                  <option value="radon-testing">Free Radon Testing (WI, MN, CO)</option>
                  <option value="radon-mitigation">Radon Mitigation (All States)</option>
                  <option value="concrete">Concrete Floor Coatings (WI)</option>
                  <option value="hvac">HVAC Services (WI, IL)</option>
                  <option value="aeroseal">AeroSeal Duct Sealing (WI, IL)</option>
                  <option value="handyman">Handyman Services (WI)</option>
                  <option value="electrical">Electrical Services (WI)</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Location (City, State)</label>
                <input type="text" className="form-input" placeholder="Milwaukee, WI" />
              </div>
              
              {/* Cross-Selling Section - Clean Design */}
              <div className="cross-sell-section">
                <h4 className="cross-sell-title">Additional Services We Offer</h4>
                <p className="cross-sell-description">
                  We also provide these premium home improvement services. Check any you'd like to learn more about:
                </p>
                <div className="checkbox-grid">
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Window Blinds & Treatments</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Custom Closet Systems</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Smart Home Audio/Visual</span>
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Project Details</label>
                <textarea 
                  className="form-textarea project-details-textarea" 
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send My Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Phone Popup Modal for Desktop */}
      {showPhonePopup && (
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
                <span className="large-phone-number">(262) 955-5701</span>
              </div>
              <p className="phone-popup-text">
                Call us now for immediate assistance with your home service needs!
              </p>
              <div className="phone-popup-buttons">
                <button onClick={closePhonePopup} className="btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
