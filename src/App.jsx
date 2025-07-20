import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Phone, Mail, MapPin, Star, CheckCircle, Shield, Award, Clock, Users, Wrench, Home, Droplets, Zap, Hammer, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Import images
import lifetimeLogo from './LifetimeHomeServicesLogo.png';
import heroImage from './lifetime_hero_house_image.jpeg';
import radonTestingDevice from './radon_testing_device_professional_new.jpg';
import concreteFloorCoating from './concrete_floor_coating_professional.jpg';
import hvacProfessional from './hvac_professional_premium.jpg';
import aerosealLogo from './aeroseal_logo.jpg';

// Flake images
import flakeDesertSand from './flake_desert_sand.jpg';
import flakeOceanBlue from './flake_ocean_blue.jpg';
import flakeTidalWave from './flake_tidal_wave.jpg';
import flakeStormGray from './flake_storm_gray.jpg';
import flakeMixedBed from './flake_mixed_bed.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCoverageDropdownOpen, setIsCoverageDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Refs for dropdown click-outside detection
  const coverageDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coverageDropdownRef.current && !coverageDropdownRef.current.contains(event.target)) {
        setIsCoverageDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const Header = () => (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img 
            src={lifetimeLogo} 
            alt="Lifetime Home Services" 
            className="logo"
            onClick={() => navigateToPage('home')}
          />
          <div className="company-info">
            <h1 onClick={() => navigateToPage('home')}>Lifetime Home Services</h1>
          </div>
        </div>
        
        <nav className="desktop-nav">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </a>
          
          <div className="dropdown" ref={servicesDropdownRef}>
            <button 
              className="dropdown-toggle"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              Services {isServicesDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isServicesDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('radon-testing'); setIsServicesDropdownOpen(false); }}>Free Radon Testing</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('radon-mitigation'); setIsServicesDropdownOpen(false); }}>Radon Mitigation</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('concrete'); setIsServicesDropdownOpen(false); }}>Concrete Coatings</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('hvac'); setIsServicesDropdownOpen(false); }}>HVAC & AeroSeal</a>
              </div>
            )}
          </div>

          <div className="dropdown" ref={coverageDropdownRef}>
            <button 
              className="dropdown-toggle"
              onClick={() => setIsCoverageDropdownOpen(!isCoverageDropdownOpen)}
            >
              Coverage Areas {isCoverageDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isCoverageDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('wisconsin'); setIsCoverageDropdownOpen(false); }}>Wisconsin</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('illinois'); setIsCoverageDropdownOpen(false); }}>Illinois</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('minnesota'); setIsCoverageDropdownOpen(false); }}>Minnesota</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('colorado'); setIsCoverageDropdownOpen(false); }}>Colorado</a>
              </div>
            )}
          </div>

          <a href="https://lifetimehomeservices.com/financing" target="_blank" rel="noopener noreferrer">
            Financing
          </a>
        </nav>

        <div className="header-right">
          <PhoneButton />
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('radon-testing'); }}>Free Radon Testing</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('radon-mitigation'); }}>Radon Mitigation</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('concrete'); }}>Concrete Coatings</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('hvac'); }}>HVAC & AeroSeal</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('wisconsin'); }}>Wisconsin</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('illinois'); }}>Illinois</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('minnesota'); }}>Minnesota</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('colorado'); }}>Colorado</a>
          <a href="https://lifetimehomeservices.com/financing" target="_blank" rel="noopener noreferrer">Financing</a>
          <PhoneButton isMobile={true} className="mobile-phone-header" />
        </div>
      )}
    </header>
  );

  const ContactModal = () => {
    if (!isContactModalOpen) return null;

    return (
      <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Get Your Free Quote</h2>
            <button 
              className="modal-close"
              onClick={() => setIsContactModalOpen(false)}
            >
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
            
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>State</label>
                <select>
                  <option value="">Select State</option>
                  <option value="WI">Wisconsin</option>
                  <option value="IL">Illinois</option>
                  <option value="MN">Minnesota</option>
                  <option value="CO">Colorado</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>Service Interested In</label>
              <select>
                <option value="">Select Service</option>
                <option value="radon-testing">Free Radon Testing</option>
                <option value="radon-mitigation">Radon Mitigation</option>
                <option value="concrete-coating">Concrete Floor Coating</option>
                <option value="hvac">HVAC Services</option>
                <option value="aeroseal">AeroSeal Duct Sealing</option>
                <option value="handyman">Handyman Services</option>
                <option value="electrical">Electrical Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Project Details</label>
              <textarea rows="4" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    );
  };

  const HomePage = () => (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Trusted Solutions.<br />Lifetime Results.</h1>
            <p className="hero-subtitle">
              Radon • HVAC • Floor Coatings • Duct Sealing • Smart Home & Security<br />
              Serving Wisconsin, Illinois, Minnesota & Colorado
            </p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary" />
            </div>
          </div>
          <div className="hero-image-container">
            <img src={heroImage} alt="Beautiful home exterior" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="brand-content">
        <div className="container">
          <h2>Your Home's Health & Comfort Experts</h2>
          <p>From radon testing and mitigation to concrete coatings and HVAC services, we provide comprehensive solutions that protect your family and enhance your home's value. With certified professionals and lifetime warranties, we're your trusted partner for all home improvement needs.</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Professional Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={radonTestingDevice} alt="Professional radon testing" />
              <h3>Free Radon Testing</h3>
              <p>Professional radon testing with certified equipment. Protect your family's health with accurate results.</p>
              <button 
                className="learn-more-btn"
                onClick={() => navigateToPage('radon-testing')}
              >
                Learn More
              </button>
            </div>
            
            <div className="service-card">
              <img src={concreteFloorCoating} alt="Concrete floor coating" />
              <h3>Concrete Floor Coatings</h3>
              <p>Transform your garage or basement with durable, beautiful epoxy floor coatings that last a lifetime.</p>
              <button 
                className="learn-more-btn"
                onClick={() => navigateToPage('concrete')}
              >
                Learn More
              </button>
            </div>
            
            <div className="service-card">
              <img src={hvacProfessional} alt="HVAC professional service" />
              <h3>HVAC & AeroSeal</h3>
              <p>Complete HVAC services and revolutionary AeroSeal duct sealing for maximum efficiency and comfort.</p>
              <button 
                className="learn-more-btn"
                onClick={() => navigateToPage('hvac')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="professional-experience">
        <div className="container">
          <div className="watermark-container">
            <div className="watermark-text">LIFETIME</div>
            <div className="watermark-text secondary">LIFETIME</div>
            <div className="watermark-text tertiary">LIFETIME</div>
          </div>
          <h2>Experience the Difference</h2>
          <div className="experience-grid">
            <div className="experience-item">
              <Shield className="experience-icon" />
              <h3>Licensed & Insured</h3>
              <p>Fully licensed professionals with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className="experience-item">
              <Award className="experience-icon" />
              <h3>Certified Experts</h3>
              <p>EPA-certified technicians and industry-trained specialists delivering exceptional results.</p>
            </div>
            <div className="experience-item">
              <Clock className="experience-icon" />
              <h3>Lifetime Warranties</h3>
              <p>We stand behind our work with comprehensive lifetime warranties on all major services.</p>
            </div>
            <div className="experience-item">
              <Users className="experience-icon" />
              <h3>5-Star Service</h3>
              <p>Consistently rated 5 stars by customers across Wisconsin, Illinois, Minnesota, and Colorado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <p>"Lifetime Home Services did an amazing job with our radon mitigation system. Professional, clean, and the results speak for themselves. Highly recommend!"</p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Madison, WI</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <p>"The concrete coating in our garage looks incredible! It's been two years and still looks brand new. Worth every penny."</p>
              <div className="testimonial-author">
                <strong>Mike R.</strong>
                <span>Milwaukee, WI</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <p>"AeroSeal duct sealing made a huge difference in our energy bills. The team was professional and explained everything clearly."</p>
              <div className="testimonial-author">
                <strong>Jennifer L.</strong>
                <span>Chicago, IL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for your free consultation and quote. Let's make your home healthier, safer, and more comfortable.</p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary large" />
            </div>
            <div className="contact-info">
              <p>Call us at <strong>(262) 955-5701</strong> or <strong>(833) 941-6888</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="geo-seo">
        <div className="container">
          <h2>Professional Home Services Across the Midwest</h2>
          <p>Lifetime Home Services proudly serves homeowners throughout Wisconsin, Illinois, Minnesota, and Colorado with comprehensive radon testing, mitigation, concrete coatings, HVAC services, and more. Our certified professionals bring decades of experience to every project, ensuring your home receives the highest quality care and attention. From Milwaukee to Madison, Chicago to Minneapolis, and Denver to Colorado Springs, we're your trusted local experts for all home improvement needs.</p>
        </div>
      </section>
    </div>
  );

  // Rest of the component pages remain the same...
  const RadonTestingPage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Free Professional Radon Testing</h1>
          <p>Protect your family with accurate, EPA-certified radon testing. Available in Wisconsin, Minnesota, and Colorado.</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>What is Radon?</h2>
              <p>Radon is a naturally occurring radioactive gas that can seep into homes through cracks in foundations, walls, and floors. It's the second leading cause of lung cancer in the United States, responsible for over 21,000 deaths annually.</p>
              
              <h3>Why Test for Radon?</h3>
              <ul>
                <li>Radon is invisible, odorless, and tasteless</li>
                <li>The only way to know if you have radon is to test</li>
                <li>EPA recommends testing every 2 years</li>
                <li>High radon levels can be effectively reduced</li>
              </ul>

              <h3>Our Testing Process</h3>
              <p>We use professional-grade continuous radon monitors that provide accurate readings over a 48-hour period. Our EPA-certified technicians will:</p>
              <ul>
                <li>Place monitors in the lowest livable level of your home</li>
                <li>Ensure proper testing conditions</li>
                <li>Provide detailed results and recommendations</li>
                <li>Offer mitigation solutions if needed</li>
              </ul>
            </div>
            
            <div className="content-image">
              <img src={radonTestingDevice} alt="Professional radon testing equipment" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content centered">
            <h2>Schedule Your Free Radon Test Today</h2>
            <p>Don't wait to protect your family's health. Contact us for professional radon testing.</p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Schedule Free Test
              </button>
              <PhoneButton className="cta-button secondary large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const RadonMitigationPage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Professional Radon Mitigation</h1>
          <p>Effective radon reduction systems installed by EPA-certified professionals. Serving all states with lifetime warranties.</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Why Choose Professional Radon Mitigation?</h2>
              <p>If your radon test shows levels of 4.0 pCi/L or higher, the EPA recommends immediate mitigation. Our certified professionals design and install custom radon reduction systems that effectively lower radon levels in your home.</p>
              
              <div className="centered-section">
                <h3>Why Choose Professional Radon Mitigation?</h3>
                <div className="feature-grid">
                  <div className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <h4>EPA Certified Installation</h4>
                    <p>All installations performed by EPA-certified professionals following strict guidelines.</p>
                  </div>
                  <div className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <h4>Custom System Design</h4>
                    <p>Each system is designed specifically for your home's unique foundation and layout.</p>
                  </div>
                  <div className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <h4>Lifetime Warranty</h4>
                    <p>We guarantee our work with comprehensive lifetime warranties on all systems.</p>
                  </div>
                  <div className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <h4>Post-Installation Testing</h4>
                    <p>Follow-up testing ensures your system is working effectively.</p>
                  </div>
                </div>
              </div>

              <h3>Our Mitigation Process</h3>
              <ol>
                <li><strong>Site Assessment:</strong> Thorough evaluation of your home's foundation and radon entry points</li>
                <li><strong>System Design:</strong> Custom design based on your home's specific needs</li>
                <li><strong>Professional Installation:</strong> Expert installation with minimal disruption to your home</li>
                <li><strong>Testing & Verification:</strong> Post-installation testing to ensure effectiveness</li>
                <li><strong>Ongoing Support:</strong> Lifetime warranty and maintenance support</li>
              </ol>
            </div>
            
            <div className="content-image">
              <img src={radonTestingDevice} alt="Radon mitigation system" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content centered">
            <h2>Get Your Radon Mitigation Quote</h2>
            <p>Protect your family with professional radon mitigation. Contact us for a free consultation.</p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ConcretePage = () => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Premium Concrete Floor Coatings</h1>
          <p>Transform your garage, basement, or commercial space with durable, beautiful epoxy floor coatings.</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Why Choose Epoxy Floor Coatings?</h2>
              <p>Our premium epoxy floor coatings provide a durable, attractive, and easy-to-maintain surface that will last for decades. Perfect for garages, basements, workshops, and commercial spaces.</p>
              
              <h3>Benefits of Our Coatings</h3>
              <ul>
                <li>Extremely durable and long-lasting</li>
                <li>Resistant to chemicals, stains, and impacts</li>
                <li>Easy to clean and maintain</li>
                <li>Slip-resistant surface options</li>
                <li>Increases property value</li>
                <li>Available in multiple colors and finishes</li>
              </ul>

              <h3>Our Installation Process</h3>
              <ol>
                <li><strong>Surface Preparation:</strong> Thorough cleaning and preparation of existing concrete</li>
                <li><strong>Crack Repair:</strong> Professional repair of any cracks or imperfections</li>
                <li><strong>Primer Application:</strong> High-quality primer for maximum adhesion</li>
                <li><strong>Base Coat:</strong> Professional application of base epoxy coating</li>
                <li><strong>Decorative Flakes:</strong> Optional decorative flakes for enhanced appearance</li>
                <li><strong>Top Coat:</strong> Protective clear coat for durability and shine</li>
              </ol>
            </div>
            
            <div className="content-image">
              <img src={concreteFloorCoating} alt="Professional concrete floor coating" />
            </div>
          </div>
        </div>
      </section>

      <section className="flake-samples">
        <div className="container">
          <h2>Decorative Flake Options</h2>
          <p>Choose from our selection of premium decorative flakes to customize your floor's appearance.</p>
          <div className="flake-grid">
            <div className="flake-item">
              <img src={flakeDesertSand} alt="Desert Sand flake pattern" />
              <h3>Desert Sand</h3>
            </div>
            <div className="flake-item">
              <img src={flakeOceanBlue} alt="Ocean Blue flake pattern" />
              <h3>Ocean Blue</h3>
            </div>
            <div className="flake-item">
              <img src={flakeTidalWave} alt="Tidal Wave flake pattern" />
              <h3>Tidal Wave</h3>
            </div>
            <div className="flake-item">
              <img src={flakeStormGray} alt="Storm Gray flake pattern" />
              <h3>Storm Gray</h3>
            </div>
            <div className="flake-item">
              <img src={flakeMixedBed} alt="Mixed Bed flake pattern" />
              <h3>Mixed Bed</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content centered">
            <h2>Transform Your Space Today</h2>
            <p>Ready to upgrade your floors? Contact us for a free consultation and quote.</p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary large" />
            </div>
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
          <p>Complete HVAC services and revolutionary AeroSeal technology for maximum comfort and efficiency.</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Complete HVAC Solutions</h2>
              <p>From installation and repair to maintenance and duct sealing, we provide comprehensive HVAC services to keep your home comfortable year-round.</p>
              
              <h3>Our HVAC Services</h3>
              <ul>
                <li>HVAC system installation and replacement</li>
                <li>Heating and cooling repair services</li>
                <li>Preventive maintenance programs</li>
                <li>Ductwork installation and repair</li>
                <li>Indoor air quality solutions</li>
                <li>Energy efficiency upgrades</li>
              </ul>
            </div>
            
            <div className="content-image">
              <img src={hvacProfessional} alt="HVAC professional service" />
            </div>
          </div>
        </div>
      </section>

      <section className="aeroseal-section">
        <div className="container">
          <div className="aeroseal-content">
            <div className="aeroseal-header">
              <img src={aerosealLogo} alt="AeroSeal Logo" className="aeroseal-logo" />
              <h2>Revolutionary AeroSeal Duct Sealing</h2>
            </div>
            
            <div className="feature-grid">
              <div className="feature-item">
                <Zap className="feature-icon" />
                <h3>Reduce Energy Costs</h3>
                <p>Seal ductwork leaks that waste up to 30% of your heating and cooling energy.</p>
              </div>
              <div className="feature-item">
                <Home className="feature-icon" />
                <h3>Improve Comfort</h3>
                <p>Eliminate hot and cold spots by ensuring proper airflow throughout your home.</p>
              </div>
              <div className="feature-item">
                <Shield className="feature-icon" />
                <h3>Better Air Quality</h3>
                <p>Prevent dust, allergens, and pollutants from entering through leaky ducts.</p>
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                <h3>Proven Technology</h3>
                <p>Computer-controlled sealing process with measurable before and after results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content centered">
            <h2>Improve Your Home's Comfort & Efficiency</h2>
            <p>Contact us today to learn more about our HVAC services and AeroSeal duct sealing.</p>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const StatePage = ({ state, description }) => (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Professional Home Services in {state}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="content-text">
            <h2>Serving {state} Homeowners</h2>
            <p>Lifetime Home Services is proud to serve homeowners throughout {state} with comprehensive home improvement solutions. Our certified professionals bring decades of experience to every project.</p>
            
            <h3>Available Services in {state}</h3>
            <div className="services-list">
              {state === 'Wisconsin' && (
                <ul>
                  <li>Free Radon Testing</li>
                  <li>Radon Mitigation Systems</li>
                  <li>Concrete Floor Coatings</li>
                  <li>HVAC Services</li>
                  <li>AeroSeal Duct Sealing</li>
                  <li>Handyman Services</li>
                  <li>Electrical Services</li>
                </ul>
              )}
              {state === 'Illinois' && (
                <ul>
                  <li>Radon Mitigation Systems</li>
                  <li>HVAC Services</li>
                  <li>AeroSeal Duct Sealing</li>
                </ul>
              )}
              {(state === 'Minnesota' || state === 'Colorado') && (
                <ul>
                  <li>Free Radon Testing</li>
                  <li>Radon Mitigation Systems</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content centered">
            <h2>Contact Us</h2>
            <div className="cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Free Quote
              </button>
              <PhoneButton className="cta-button secondary large" />
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
            <h3>Lifetime Home Services</h3>
            <p>Trusted Solutions. Lifetime Results.</p>
            <div className="contact-info">
              <p><Phone size={16} /> (262) 955-5701</p>
              <p><Phone size={16} /> (833) 941-6888</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('radon-testing'); }}>Free Radon Testing</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('radon-mitigation'); }}>Radon Mitigation</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('concrete'); }}>Concrete Coatings</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('hvac'); }}>HVAC & AeroSeal</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('wisconsin'); }}>Wisconsin</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('illinois'); }}>Illinois</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('minnesota'); }}>Minnesota</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('colorado'); }}>Colorado</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Trust Badges</h4>
            <div className="trust-badges">
              <div className="badge">
                <Shield size={20} />
                <span>EPA Certified</span>
              </div>
              <div className="badge">
                <CheckCircle size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="badge">
                <Star size={20} />
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Lifetime Home Services. All rights reserved.</p>
          <p>Professional home services across Wisconsin, Illinois, Minnesota & Colorado.</p>
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

