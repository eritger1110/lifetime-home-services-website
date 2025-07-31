import React, { useState, useEffect } from 'react';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showDropdown, setShowDropdown] = useState(null);
  const [expandedZips, setExpandedZips] = useState({});

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, currentBrand]);

  // Brand configurations with distinct identities
  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      logo: '/LifetimeHomeServicesLogo.png',
      colors: {
        primary: '#1e40af',
        secondary: '#1d4ed8',
        accent: '#f59e0b',
        text: '#1f2937',
        background: '#f8fafc'
      },
      heroImage: '/lifetime-hero-bg.jpg',
      services: ['FREE Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings'],
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005'
    },
    america: {
      name: 'America In-Home',
      tagline: 'Smart Home Technology Solutions',
      logo: '/AmericaIn-HomeLogo.jpg',
      colors: {
        primary: '#dc2626',
        secondary: '#b91c1c',
        accent: '#fbbf24',
        text: '#1f2937',
        background: '#fef2f2'
      },
      heroImage: '/america-hero-bg.jpg',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration'],
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005'
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Custom Organization Solutions',
      logo: '/ClosetConceptsLogo.png',
      colors: {
        primary: '#059669',
        secondary: '#047857',
        accent: '#f59e0b',
        text: '#1f2937',
        background: '#f0fdf4'
      },
      heroImage: '/closets-hero-bg.jpg',
      services: ['Walk-in Closets', 'Reach-in Closets', 'Pantry Organization', 'Garage Storage', 'Laundry Rooms', 'Mudrooms', 'Home Offices', 'Craft Rooms'],
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005'
    }
  };

  const currentBrandData = brands[currentBrand];

  // Wisconsin zip codes within 1 hour of Brookfield
  const wisconsinZipCodes = [
    '53005', '53008', '53012', '53018', '53022', '53029', '53031', '53032', '53045', '53051',
    '53056', '53058', '53066', '53072', '53089', '53092', '53097', '53122', '53129', '53130',
    '53132', '53140', '53141', '53142', '53146', '53149', '53150', '53151', '53154', '53156',
    '53158', '53168', '53186', '53188', '53189', '53190', '53201', '53202', '53203', '53204',
    '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214',
    '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224',
    '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53259', '53274',
    '53278', '53295'
  ];

  const handleBrandSwitch = (brand) => {
    setCurrentBrand(brand);
    setCurrentPage('home');
    setShowDropdown(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowDropdown(null);
  };

  const toggleZipExpansion = (state) => {
    setExpandedZips(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  // Dynamic styles based on current brand
  const brandStyles = {
    '--brand-primary': currentBrandData.colors.primary,
    '--brand-secondary': currentBrandData.colors.secondary,
    '--brand-accent': currentBrandData.colors.accent,
    '--brand-text': currentBrandData.colors.text,
    '--brand-background': currentBrandData.colors.background
  };

  return (
    <div className="app" style={brandStyles}>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Header with individual brand links */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-section">
            <img 
              src={currentBrandData.logo} 
              alt={currentBrandData.name}
              className="logo"
              onClick={() => handlePageChange('home')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Brand Navigation */}
          <nav className="brand-nav">
            <button 
              className={`brand-link ${currentBrand === 'lifetime' ? 'active' : ''}`}
              onClick={() => handleBrandSwitch('lifetime')}
            >
              Lifetime Home Services
            </button>
            <button 
              className={`brand-link ${currentBrand === 'america' ? 'active' : ''}`}
              onClick={() => handleBrandSwitch('america')}
            >
              America In-Home
            </button>
            <button 
              className={`brand-link ${currentBrand === 'closets' ? 'active' : ''}`}
              onClick={() => handleBrandSwitch('closets')}
            >
              Closet Concepts
            </button>
          </nav>

          {/* Main Navigation */}
          <nav className="main-nav">
            <div className="nav-item dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowDropdown(showDropdown === 'services' ? null : 'services')}
              >
                Services
              </button>
              {showDropdown === 'services' && (
                <div className="dropdown-menu">
                  {currentBrandData.services.map((service, index) => (
                    <button 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handlePageChange(`service-${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`)}
                    >
                      {service}
                    </button>
                  ))}
                  {currentBrand === 'lifetime' && (
                    <button 
                      className="dropdown-item"
                      onClick={() => handlePageChange('radon-education')}
                    >
                      Radon Education
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="nav-item dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowDropdown(showDropdown === 'areas' ? null : 'areas')}
              >
                Service Areas
              </button>
              {showDropdown === 'areas' && (
                <div className="dropdown-menu">
                  {currentBrand === 'lifetime' ? (
                    <>
                      <button className="dropdown-item" onClick={() => handlePageChange('wisconsin')}>Wisconsin</button>
                      <button className="dropdown-item" onClick={() => handlePageChange('illinois')}>Illinois</button>
                      <button className="dropdown-item" onClick={() => handlePageChange('minnesota')}>Minnesota</button>
                      <button className="dropdown-item" onClick={() => handlePageChange('colorado')}>Colorado</button>
                    </>
                  ) : (
                    <button className="dropdown-item" onClick={() => handlePageChange('wisconsin')}>Wisconsin</button>
                  )}
                </div>
              )}
            </div>

            <button 
              className="nav-button"
              onClick={() => handlePageChange('financing')}
            >
              Financing
            </button>

            <button 
              className="nav-button"
              onClick={() => handlePageChange('contact')}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="header-contact">
            <span className="phone">{currentBrandData.phone}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="main-content">
        {currentPage === 'home' && <HomePage brand={currentBrandData} />}
        {currentPage === 'radon-education' && currentBrand === 'lifetime' && <RadonEducationPage />}
        {currentPage === 'financing' && <FinancingPage />}
        {currentPage === 'contact' && <ContactPage brand={currentBrandData} />}
        {currentPage === 'wisconsin' && <StatePage state="Wisconsin" brand={currentBrandData} zipCodes={wisconsinZipCodes} />}
        {currentPage === 'illinois' && currentBrand === 'lifetime' && <StatePage state="Illinois" brand={currentBrandData} />}
        {currentPage === 'minnesota' && currentBrand === 'lifetime' && <StatePage state="Minnesota" brand={currentBrandData} />}
        {currentPage === 'colorado' && currentBrand === 'lifetime' && <StatePage state="Colorado" brand={currentBrandData} />}
        
        {/* Service Pages */}
        {currentPage.startsWith('service-') && <ServicePage serviceName={currentPage.replace('service-', '')} brand={currentBrandData} />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <img src={currentBrandData.logo} alt={currentBrandData.name} className="footer-logo" />
            <p className="footer-tagline">{currentBrandData.tagline}</p>
            {/* SEO Footer References */}
            {currentBrand === 'america' && (
              <p className="footer-seo-reference">formerly americainhome.com</p>
            )}
            {currentBrand === 'closets' && (
              <p className="footer-seo-reference">formerly closetconcepts.com</p>
            )}
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {currentBrandData.services.map((service, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => handlePageChange(`service-${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`)}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>{currentBrandData.phone}</p>
            <p>{currentBrandData.address}</p>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(currentBrandData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              Get Directions
            </a>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {currentBrandData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Homepage Component
function HomePage({ brand }) {
  return (
    <div className="homepage">
      {/* Hero Section - Crystal Clear Background */}
      <section className="hero-section" style={{
        backgroundImage: `url(${brand.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* NO OVERLAY - Crystal Clear Image */}
        <div className="hero-content">
          <h1 className="hero-title">{brand.name}</h1>
          <h2 className="hero-subtitle-special">{brand.tagline}</h2>
          <p className="hero-subtitle">
            Expert care for the spaces beneath, around, and within your home
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Get Free Estimate</button>
            <a 
              href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Financing Available
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {brand.services.map((service, index) => (
              <ServiceCard key={index} service={service} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">EPA Certified</div>
            <div className="trust-badge">Licensed & Insured</div>
            <div className="trust-badge">Lifetime Warranty</div>
            <div className="trust-badge">Free Estimates</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for your free consultation and estimate.</p>
          <div className="contact-info">
            <span className="phone-large">{brand.phone}</span>
            <button className="cta-button primary">Schedule Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, brand }) {
  const getServiceImage = (service) => {
    const serviceImages = {
      'FREE Radon Testing': '/airthings-corentium-pro.jpg',
      'Radon Mitigation': '/radon-mitigation-system.jpg',
      'Duct Cleaning & AeroSeal': '/duct-cleaning-professional.jpg',
      'Concrete Coatings': '/premium-garage-coating.jpg',
      'Smart Home Automation': '/america-smart-home-hero.jpg',
      'Security Systems': '/america-security-hero.jpg',
      'Control4 Integration': '/america-control4-hero.jpg',
      'Walk-in Closets': '/closets-luxury-hero.jpg',
      'Reach-in Closets': '/reach-in-closet-1.jpg',
      'Pantry Organization': '/closets-pantry-hero.jpg',
      'Garage Storage': '/organized-garage-storage.jpg',
      'Laundry Rooms': '/laundry-1.jpg',
      'Mudrooms': '/mudroom-1.jpg',
      'Home Offices': '/home-office-organization.jpg',
      'Craft Rooms': '/craft-room-organization.jpg'
    };
    return serviceImages[service] || '/placeholder-service.jpg';
  };

  const getServiceDescription = (service) => {
    const descriptions = {
      'FREE Radon Testing': 'Professional radon testing with fast results using EPA-approved methods.',
      'Radon Mitigation': 'Custom radon mitigation systems with lifetime warranty and guaranteed results.',
      'Duct Cleaning & AeroSeal': 'Professional duct cleaning and revolutionary AeroSeal duct sealing technology.',
      'Concrete Coatings': 'Premium garage floor coatings with decorative flakes and lifetime durability.',
      'Smart Home Automation': 'Complete home automation solutions using Control4 technology.',
      'Security Systems': 'Professional security system installation and monitoring services.',
      'Control4 Integration': 'Advanced Control4 home automation and smart home integration.',
      'Walk-in Closets': 'Custom walk-in closet systems with premium materials and professional installation.',
      'Reach-in Closets': 'Maximize storage in reach-in closets with custom shelving and organization.',
      'Pantry Organization': 'Custom pantry shelving with pull-out drawers and organizational systems.',
      'Garage Storage': 'Premium wood organization systems for clean, organized garages.',
      'Laundry Rooms': 'Efficient laundry room organization with custom shelving and storage.',
      'Mudrooms': 'Entry organization systems with cubbies, hooks, and storage solutions.',
      'Home Offices': 'Custom home office organization with built-in desks and storage.',
      'Craft Rooms': 'Specialized craft room organization with custom storage solutions.'
    };
    return descriptions[service] || 'Professional service with quality results.';
  };

  return (
    <div className="service-card">
      <div className="service-image-container">
        <img 
          src={getServiceImage(service)} 
          alt={service}
          className="service-image"
        />
        <div className="service-overlay">
          <div className="service-icon">🏠</div>
        </div>
      </div>
      <div className="service-content">
        <h3 className="service-title">{service}</h3>
        <p className="service-description">{getServiceDescription(service)}</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}

// Placeholder components for other pages
function RadonEducationPage() {
  return (
    <div className="radon-education-page">
      <div className="page-header">
        <h1>Radon Education</h1>
        <p>Learn about radon gas and how to protect your home and family</p>
      </div>
      <div className="container">
        <div className="education-section">
          <h2>What is Radon?</h2>
          <p>Radon is a naturally occurring radioactive gas that can accumulate in homes and buildings...</p>
        </div>
      </div>
    </div>
  );
}

function FinancingPage() {
  return (
    <div className="financing-page">
      <div className="page-header">
        <h1>Financing Options</h1>
        <p>Flexible financing solutions to fit your budget</p>
      </div>
      <div className="container">
        <div className="financing-section">
          <h2>0% Financing Available</h2>
          <p>Take advantage of our special financing offers...</p>
        </div>
      </div>
    </div>
  );
}

function ContactPage({ brand }) {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch for your free consultation</p>
      </div>
      <div className="container">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <h3>Phone</h3>
            <p>{brand.phone}</p>
          </div>
          <div className="contact-info-card">
            <h3>Address</h3>
            <p>{brand.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatePage({ state, brand, zipCodes }) {
  return (
    <div className="state-page">
      <div className="state-header">
        <h1>{state} Service Area</h1>
        <p>Professional services throughout {state}</p>
      </div>
      <div className="container">
        <div className="state-services">
          <h2>Services Available in {state}</h2>
          <div className="services-grid">
            {brand.services.map((service, index) => (
              <div key={index} className="service-card-state">
                <h3>{service}</h3>
                <p>Professional {service.toLowerCase()} services in {state}</p>
              </div>
            ))}
          </div>
        </div>
        {zipCodes && (
          <div className="service-areas">
            <h2>Zip Codes We Service</h2>
            <div className="zip-codes-container">
              <div className="zip-codes-grid">
                {zipCodes.slice(0, 20).map((zip, index) => (
                  <div key={index} className="zip-code">{zip}</div>
                ))}
              </div>
              <button className="expand-zips-btn">View All Zip Codes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ServicePage({ serviceName, brand }) {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1>{serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
        <p>Professional {serviceName.replace(/-/g, ' ')} services</p>
      </div>
      <div className="container">
        <div className="service-content">
          <div className="service-details">
            <h2>Service Details</h2>
            <p>Comprehensive information about our {serviceName.replace(/-/g, ' ')} services...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

