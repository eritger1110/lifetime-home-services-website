import React, { useState, useEffect } from 'react';
import './App.css';
import { Phone, Mail, MapPin, Star, CheckCircle, Shield, Award, Clock, Users, Wrench, Home, Droplets, Zap, Hammer, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Import images
import lifetimeLogo from './assets/LifetimeHomeServicesLogo.png';
import heroImage from './assets/lifetime_hero_house_image.jpeg';
import radonTestingDevice from './assets/radon_testing_device_professional_new.jpg';
import concreteFloorCoating from './assets/concrete_floor_coating_professional.jpg';
import hvacProfessional from './assets/hvac_professional_premium.jpg';
import aerosealLogo from './assets/aeroseal_logo.jpg';

// Flake images
import flakeDesertSand from './assets/flake_desert_sand.jpg';
import flakeOceanBlue from './assets/flake_ocean_blue.jpg';
import flakeTidalWave from './assets/flake_tidal_wave.jpg';
import flakeStormGray from './assets/flake_storm_gray.jpg';
import flakeMixedBed from './assets/flake_mixed_bed.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCoverageDropdownOpen, setIsCoverageDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page) => {
    scrollToTop();
    setCurrentPage(page);
  };

  const PhoneButton = ({ isMobile = false, className = "" }) => {
    if (isMobile) {
      return (
        <a href="tel:2629555701" className={`phone-btn mobile-phone ${className}`}>
          <Phone size={16} />
          (262) 955-5701
        </a>
      );
    }
    
    return (
      <button 
        className={`phone-btn desktop-phone ${className}`}
        onClick={() => navigator.clipboard.writeText('(262) 955-5701')}
        title="Click to copy phone number"
      >
        <Phone size={16} />
        (262) 955-5701
      </button>
    );
  };

  const ContactModal = () => {
    if (!isContactModalOpen) return null;

    return (
      <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Request a Free Quote</h2>
            <button className="modal-close" onClick={() => setIsContactModalOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" required />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Service Needed *</label>
              <select required>
                <option value="">Select a service</option>
                <option value="radon-testing">Free Radon Testing</option>
                <option value="radon-mitigation">Radon Mitigation</option>
                <option value="concrete-coating">Concrete Floor Coating</option>
                <option value="hvac">HVAC Services</option>
                <option value="aeroseal">AeroSeal Duct Sealing</option>
                <option value="smart-home">Smart Home & Security</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea rows="4" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Request</button>
          </form>
        </div>
      </div>
    );
  };

  const Header = () => (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img 
            src={lifetimeLogo} 
            alt="Lifetime Home Services" 
            className="logo"
            onClick={() => navigateToPage('home')}
            style={{ cursor: 'pointer' }}
          />
          <div className="company-info">
            <h1 onClick={() => navigateToPage('home')} style={{ cursor: 'pointer' }}>
              Lifetime Home Services
            </h1>
          </div>
        </div>

        <nav className="desktop-nav">
          <button onClick={() => navigateToPage('home')} className={currentPage === 'home' ? 'active' : ''}>
            Home
          </button>
          
          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              Services <ChevronDown size={16} />
            </button>
            {isServicesDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => navigateToPage('radon-testing')}>Free Radon Testing</button>
                <button onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</button>
                <button onClick={() => navigateToPage('concrete')}>Concrete Floor Coating</button>
                <button onClick={() => navigateToPage('hvac')}>HVAC & AeroSeal</button>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => setIsCoverageDropdownOpen(!isCoverageDropdownOpen)}
            >
              Coverage Areas <ChevronDown size={16} />
            </button>
            {isCoverageDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => navigateToPage('wisconsin')}>Wisconsin</button>
                <button onClick={() => navigateToPage('illinois')}>Illinois</button>
                <button onClick={() => navigateToPage('minnesota')}>Minnesota</button>
                <button onClick={() => navigateToPage('colorado')}>Colorado</button>
              </div>
            )}
          </div>

          <a href="https://lifetimehomeservices.com/financing" className="nav-link">Financing</a>
          <PhoneButton />
        </nav>

        <div className="mobile-header">
          <PhoneButton isMobile={true} />
          <button className="mobile-menu-toggle" onClick={( ) => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => navigateToPage('home')}>Home</button>
          <button onClick={() => navigateToPage('radon-testing')}>Free Radon Testing</button>
          <button onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</button>
          <button onClick={() => navigateToPage('concrete')}>Concrete Floor Coating</button>
          <button onClick={() => navigateToPage('hvac')}>HVAC & AeroSeal</button>
          <button onClick={() => navigateToPage('wisconsin')}>Wisconsin</button>
          <button onClick={() => navigateToPage('illinois')}>Illinois</button>
          <button onClick={() => navigateToPage('minnesota')}>Minnesota</button>
          <button onClick={() => navigateToPage('colorado')}>Colorado</button>
          <a href="https://lifetimehomeservices.com/financing">Financing</a>
        </div>
       )}
    </header>
  );

  const HomePage = () => (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trusted Solutions. Lifetime Results.</h1>
            <p className="hero-subtitle">
              Radon • HVAC • Floor Coatings • Duct Sealing • Smart Home & Security<br />
              Serving Wisconsin, Illinois, Minnesota & Colorado
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary" />
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Professional home services" />
          </div>
        </div>
      </section>

      <section className="brand-summary">
        <div className="container">
          <div className="brand-content">
            <h2>Your Home's Health & Comfort Experts</h2>
            <p>From radon testing and mitigation to concrete coatings and HVAC services, we provide comprehensive solutions that protect your family and enhance your home's value. Licensed, insured, and trusted by thousands of homeowners across the Midwest.</p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Professional Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={radonTestingDevice} alt="Radon Testing" />
              <h3>Free Radon Testing</h3>
              <p>Professional radon testing with certified equipment. Protect your family from this invisible threat.</p>
              <button className="learn-more" onClick={() => navigateToPage('radon-testing')}>Learn More</button>
            </div>
            <div className="service-card">
              <img src={radonTestingDevice} alt="Radon Mitigation" />
              <h3>Radon Mitigation</h3>
              <p>Expert radon reduction systems installed by certified professionals. Guaranteed results.</p>
              <button className="learn-more" onClick={() => navigateToPage('radon-mitigation')}>Learn More</button>
            </div>
            <div className="service-card">
              <img src={concreteFloorCoating} alt="Concrete Floor Coating" />
              <h3>Concrete Floor Coating</h3>
              <p>Transform your garage or basement with durable, beautiful concrete coatings.</p>
              <button className="learn-more" onClick={() => navigateToPage('concrete')}>Learn More</button>
            </div>
            <div className="service-card">
              <img src={hvacProfessional} alt="HVAC Services" />
              <h3>HVAC & AeroSeal</h3>
              <p>Complete HVAC services and revolutionary duct sealing technology for maximum efficiency.</p>
              <button className="learn-more" onClick={() => navigateToPage('hvac')}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="professional-experience">
        <div className="container">
          <div className="watermark-section">
            <div className="watermark-text">LIFETIME</div>
            <div className="watermark-text">LIFETIME</div>
            <div className="watermark-text">LIFETIME</div>
          </div>
          <h2>Professional Experience You Can Trust</h2>
          <div className="experience-grid">
            <div className="experience-item">
              <Shield size={48} />
              <h3>Licensed & Insured</h3>
              <p>Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className="experience-item">
              <Award size={48} />
              <h3>Certified Experts</h3>
              <p>EPA certified radon professionals and factory-trained technicians for all services.</p>
            </div>
            <div className="experience-item">
              <Clock size={48} />
              <h3>Lifetime Warranty</h3>
              <p>We stand behind our work with industry-leading warranties and ongoing support.</p>
            </div>
            <div className="experience-item">
              <Users size={48} />
              <h3>Thousands Served</h3>
              <p>Trusted by homeowners across Wisconsin, Illinois, Minnesota, and Colorado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
              </div>
              <p>"Lifetime Home Services did an amazing job with our radon mitigation system. Professional, clean, and the results speak for themselves. Highly recommended!"</p>
              <cite>- Sarah M., Madison, WI</cite>
            </div>
            <div className="testimonial">
              <div className="stars">
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
              </div>
              <p>"The concrete coating in our garage looks incredible! The team was professional and finished ahead of schedule. Worth every penny."</p>
              <cite>- Mike R., Chicago, IL</cite>
            </div>
            <div className="testimonial">
              <div className="stars">
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
                <Star fill="#FFD700" color="#FFD700" size={20} />
              </div>
              <p>"AeroSeal duct sealing made a huge difference in our energy bills. The process was fascinating to watch and the results are amazing!"</p>
              <cite>- Jennifer L., Minneapolis, MN</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for your free consultation and quote</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
              Get Free Quote
            </button>
            <PhoneButton className="cta-button secondary" />
          </div>
        </div>
      </section>

      <section className="geo-seo">
        <div className="container">
          <h2>Serving the Midwest with Excellence</h2>
          <p>Lifetime Home Services proudly serves homeowners throughout Wisconsin, Illinois, Minnesota, and Colorado with professional radon testing, radon mitigation, concrete floor coatings, HVAC services, and AeroSeal duct sealing. Our certified technicians bring years of experience and industry-leading warranties to every project, ensuring your home's health, safety, and comfort for years to come.</p>
        </div>
      </section>
    </div>
  );

  const RadonTestingPage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Free Radon Testing</h1>
          <p>Professional radon testing with certified equipment to protect your family's health</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>What is Radon?</h2>
              <p>Radon is a colorless, odorless radioactive gas that occurs naturally from the decay of uranium in soil, rock, and water. It can enter your home through cracks in the foundation, gaps around pipes, and other openings.</p>
              
              <h3>Why Test for Radon?</h3>
              <ul>
                <li>Radon is the leading cause of lung cancer among non-smokers</li>
                <li>1 in 15 homes has elevated radon levels</li>
                <li>Testing is the only way to know your home's radon level</li>
                <li>EPA recommends testing every 2 years</li>
              </ul>

              <h3>Our Testing Process</h3>
              <p>We use professional-grade continuous radon monitors that provide accurate, real-time measurements. Our certified technicians will place the equipment in the lowest livable level of your home for 48-72 hours to get an accurate reading.</p>
            </div>
            <div className="content-image">
              <img src={radonTestingDevice} alt="Professional radon testing equipment" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Schedule Your Free Radon Test Today</h2>
          <p>Protect your family's health with professional radon testing</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
              Schedule Free Test
            </button>
            <PhoneButton className="cta-button secondary" />
          </div>
        </div>
      </section>
    </div>
  );

  const RadonMitigationPage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Radon Mitigation Systems</h1>
          <p>Expert radon reduction systems installed by certified professionals</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="mitigation-content">
            <h2>Why Choose Professional Radon Mitigation?</h2>
            
            <div className="mitigation-benefits">
              <div className="benefit-item">
                <CheckCircle size={32} color="#28a745" />
                <div>
                  <h3>EPA Certified Professionals</h3>
                  <p>Our technicians are certified by the EPA and trained in the latest mitigation techniques.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <CheckCircle size={32} color="#28a745" />
                <div>
                  <h3>Guaranteed Results</h3>
                  <p>We guarantee to reduce radon levels below 4.0 pCi/L or we'll modify the system at no charge.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <CheckCircle size={32} color="#28a745" />
                <div>
                  <h3>Lifetime Warranty</h3>
                  <p>Our systems come with a comprehensive lifetime warranty for your peace of mind.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <CheckCircle size={32} color="#28a745" />
                <div>
                  <h3>Professional Installation</h3>
                  <p>Clean, efficient installation with minimal disruption to your home and family.</p>
                </div>
              </div>
            </div>

            <h3>How Radon Mitigation Works</h3>
            <p>Our sub-slab depressurization systems create a vacuum beneath your home's foundation, preventing radon from entering your living space. The system includes a fan and vent pipe that safely removes radon gas from beneath your home and vents it above the roofline.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Your Radon Mitigation Quote</h2>
          <p>Protect your family with a professional radon mitigation system</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
              Get Free Quote
            </button>
            <PhoneButton className="cta-button secondary" />
          </div>
        </div>
      </section>
    </div>
  );

  const ConcretePage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Concrete Floor Coating</h1>
          <p>Transform your garage or basement with durable, beautiful concrete coatings</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Premium Concrete Coatings</h2>
              <p>Our professional-grade concrete coatings provide a durable, attractive finish that resists stains, chemicals, and wear. Perfect for garages, basements, workshops, and commercial spaces.</p>
              
              <h3>Benefits of Our Coating System</h3>
              <ul>
                <li>100x stronger than epoxy</li>
                <li>Chemical and stain resistant</li>
                <li>Easy to clean and maintain</li>
                <li>Slip-resistant texture options</li>
                <li>UV stable - won't yellow or fade</li>
                <li>Lifetime warranty</li>
              </ul>
            </div>
            <div className="content-image">
              <img src={concreteFloorCoating} alt="Professional concrete floor coating" />
            </div>
          </div>

          <div className="flake-samples">
            <h3>Decorative Flake Options</h3>
            <div className="flake-grid">
              <div className="flake-item">
                <img src={flakeDesertSand} alt="Desert Sand flake pattern" />
                <h4>Desert Sand</h4>
              </div>
              <div className="flake-item">
                <img src={flakeOceanBlue} alt="Ocean Blue flake pattern" />
                <h4>Ocean Blue</h4>
              </div>
              <div className="flake-item">
                <img src={flakeTidalWave} alt="Tidal Wave flake pattern" />
                <h4>Tidal Wave</h4>
              </div>
              <div className="flake-item">
                <img src={flakeStormGray} alt="Storm Gray flake pattern" />
                <h4>Storm Gray</h4>
              </div>
              <div className="flake-item">
                <img src={flakeMixedBed} alt="Mixed Bed flake pattern" />
                <h4>Mixed Bed</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Transform Your Concrete Floors</h2>
          <p>Get a free estimate for your concrete coating project</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
              Get Free Estimate
            </button>
            <PhoneButton className="cta-button secondary" />
          </div>
        </div>
      </section>
    </div>
  );

  const HVACPage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>HVAC & AeroSeal Duct Sealing</h1>
          <p>Complete HVAC services and revolutionary duct sealing technology</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Professional HVAC Services</h2>
              <p>From routine maintenance to complete system installations, our certified technicians provide comprehensive HVAC services to keep your home comfortable year-round.</p>
              
              <h3>Our HVAC Services Include</h3>
              <ul>
                <li>Heating and cooling system installation</li>
                <li>Regular maintenance and tune-ups</li>
                <li>Emergency repair services</li>
                <li>Indoor air quality solutions</li>
                <li>Energy efficiency upgrades</li>
                <li>Ductwork installation and repair</li>
              </ul>
            </div>
            <div className="content-image">
              <img src={hvacProfessional} alt="Professional HVAC technician" />
            </div>
          </div>

          <div className="aeroseal-section">
            <div className="aeroseal-header">
              <img src={aerosealLogo} alt="AeroSeal Logo" className="aeroseal-logo" />
              <h2>Revolutionary Duct Sealing Technology</h2>
            </div>
            
            <div className="aeroseal-features">
              <div className="feature-grid">
                <div className="feature-item">
                  <Zap size={32} color="#007bff" />
                  <h3>Reduce Energy Bills</h3>
                  <p>Seal ductwork leaks that waste up to 30% of your heating and cooling energy</p>
                </div>
                <div className="feature-item">
                  <Home size={32} color="#007bff" />
                  <h3>Improve Comfort</h3>
                  <p>Eliminate hot and cold spots by ensuring proper airflow to every room</p>
                </div>
                <div className="feature-item">
                  <Shield size={32} color="#007bff" />
                  <h3>Better Air Quality</h3>
                  <p>Prevent dust, allergens, and pollutants from entering through leaky ducts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Improve Your Home's Efficiency</h2>
          <p>Contact us for HVAC services and AeroSeal duct sealing</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
              Get Free Quote
            </button>
            <PhoneButton className="cta-button secondary" />
          </div>
        </div>
      </section>
    </div>
  );

  const StatePage = ({ state, description }) => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Serving {state}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Professional Home Services in {state}</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={radonTestingDevice} alt="Radon Testing" />
              <h3>Free Radon Testing</h3>
              <p>Professional radon testing throughout {state} with certified equipment.</p>
            </div>
            <div className="service-card">
              <img src={radonTestingDevice} alt="Radon Mitigation" />
              <h3>Radon Mitigation</h3>
              <p>Expert radon reduction systems installed by certified professionals.</p>
            </div>
            <div className="service-card">
              <img src={concreteFloorCoating} alt="Concrete Coating" />
              <h3>Concrete Floor Coating</h3>
              <p>Transform your garage or basement with durable concrete coatings.</p>
            </div>
            <div className="service-card">
              <img src={hvacProfessional} alt="HVAC Services" />
              <h3>HVAC & AeroSeal</h3>
              <p>Complete HVAC services and duct sealing technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="state-cta-section">
        <div className="container">
          <div className="state-cta-content">
            <h2>Ready to Get Started in {state}?</h2>
            <p>Contact us today for your free consultation and quote</p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={() => setIsContactModalOpen(true)}>
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProfessionalFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={lifetimeLogo} alt="Lifetime Home Services" className="footer-logo" />
            <h3>Lifetime Home Services</h3>
            <p className="footer-slogan">Trusted Solutions. Lifetime Results.</p>
            <div className="trust-badges">
              <div className="badge">
                <Shield size={20} />
                <span>EPA Certified</span>
              </div>
              <div className="badge">
                <Award size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="badge">
                <Star size={20} />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => navigateToPage('radon-testing')}>Free Radon Testing</button></li>
              <li><button onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</button></li>
              <li><button onClick={() => navigateToPage('concrete')}>Concrete Coating</button></li>
              <li><button onClick={() => navigateToPage('hvac')}>HVAC & AeroSeal</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li><button onClick={() => navigateToPage('wisconsin')}>Wisconsin</button></li>
              <li><button onClick={() => navigateToPage('illinois')}>Illinois</button></li>
              <li><button onClick={() => navigateToPage('minnesota')}>Minnesota</button></li>
              <li><button onClick={() => navigateToPage('colorado')}>Colorado</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>(262) 955-5701</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>(833) 941-6888</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@lifetimehomeservices.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Lifetime Home Services. All rights reserved.</p>
          <p>Professional radon testing, radon mitigation, concrete floor coatings, HVAC services, and AeroSeal duct sealing serving Wisconsin, Illinois, Minnesota, and Colorado.</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'radon-testing':
        return <RadonTestingPage />;
      case 'radon-mitigation':
        return <RadonMitigationPage />;
      case 'concrete':
        return <ConcretePage />;
      case 'hvac':
        return <HVACPage />;
      case 'wisconsin':
        return <StatePage state="Wisconsin" description="Professional home services throughout Wisconsin including radon testing, mitigation, concrete coatings, and HVAC services." />;
      case 'illinois':
        return <StatePage state="Illinois" description="Comprehensive home services across Illinois with certified professionals and lifetime warranties." />;
      case 'minnesota':
        return <StatePage state="Minnesota" description="Trusted home improvement services throughout Minnesota with expert installation and support." />;
      case 'colorado':
        return <StatePage state="Colorado" description="Professional home services across Colorado including radon solutions, concrete coatings, and HVAC expertise." />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header />
      {renderPage()}
      <ProfessionalFooter />
      <ContactModal />
    </div>
  );
}

export default App;

