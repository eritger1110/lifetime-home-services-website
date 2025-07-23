import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServiceAreasDropdown, setShowServiceAreasDropdown] = useState(false);

  // Brand configurations
  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      logo: '/LifetimeHomeServicesLogo.png',
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005',
      primaryColor: '#1e40af',
      secondaryColor: '#3b82f6',
      accentColor: '#fbbf24',
      services: ['FREE Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings'],
      heroImage: '/lifetime-hero-house.jpg',
      tagline: 'Lifetime Home Solutions. Trusted Solutions. Lifetime Results.',
      serviceAreas: ['Wisconsin', 'Illinois', 'Minnesota', 'Colorado']
    },
    america: {
      name: 'America In-Home',
      logo: '/AmericaIn-HomeLogo3.png',
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005',
      primaryColor: '#dc2626',
      secondaryColor: '#ef4444',
      accentColor: '#1e40af',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration'],
      heroImage: '/america-smart-home-hero.jpg',
      tagline: 'Luxury Living. Seamlessly Connected.',
      serviceAreas: ['Wisconsin'],
      videos: {
        'Smart Home Automation': 'https://player.vimeo.com/video/1035717050?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        'Security Systems': 'https://player.vimeo.com/video/1035717050?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
      }
    },
    closets: {
      name: 'Closet Concepts',
      logo: '/NewClosetConceptsLogo.png',
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005',
      primaryColor: '#059669',
      secondaryColor: '#10b981',
      accentColor: '#f59e0b',
      services: ['Walk-in Closets', 'Reach-in Closets', 'Pantry Organization', 'Garage Storage', 'Laundry Rooms', 'Mudrooms', 'Home Offices', 'Craft Rooms'],
      heroImage: '/closets-luxury-hero.jpg',
      tagline: 'Organized Living. Elevated Style.',
      serviceAreas: ['Wisconsin']
    }
  };

  const currentBrandData = brands[currentBrand];

  // Navigation functions with proper functionality
  const navigateToPage = (page, brand = null) => {
    if (brand && brand !== currentBrand) {
      setCurrentBrand(brand);
    }
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowServiceAreasDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToService = (serviceName) => {
    const serviceSlug = serviceName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    setCurrentPage(`service-${serviceSlug}`);
    setShowServicesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToState = (state) => {
    setCurrentPage(`state-${state.toLowerCase()}`);
    setShowServiceAreasDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetFreeEstimate = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinancing = () => {
    setCurrentPage('financing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScheduleConsultation = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set CSS variables for current brand
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', currentBrandData.primaryColor);
    root.style.setProperty('--brand-secondary', currentBrandData.secondaryColor);
    root.style.setProperty('--brand-accent', currentBrandData.accentColor);
  }, [currentBrand, currentBrandData]);

  return (
    <div className="app" style={{
      '--brand-primary': currentBrandData.primaryColor,
      '--brand-secondary': currentBrandData.secondaryColor,
      '--brand-accent': currentBrandData.accentColor
    }}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo-section">
              <img 
                src={currentBrandData.logo} 
                alt={currentBrandData.name}
                className="logo"
                onClick={() => navigateToPage('home')}
                style={{ cursor: 'pointer' }}
              />
            </div>

            {/* Navigation */}
            <nav className="nav-section">
              {/* Brand Links */}
              <div className="brand-links">
                <button 
                  className={`brand-link ${currentBrand === 'lifetime' ? 'active' : ''}`}
                  onClick={() => navigateToPage('home', 'lifetime')}
                >
                  Lifetime Home Services
                </button>
                <button 
                  className={`brand-link ${currentBrand === 'america' ? 'active' : ''}`}
                  onClick={() => navigateToPage('home', 'america')}
                >
                  America In-Home
                </button>
                <button 
                  className={`brand-link ${currentBrand === 'closets' ? 'active' : ''}`}
                  onClick={() => navigateToPage('home', 'closets')}
                >
                  Closet Concepts
                </button>
              </div>

              {/* Main Navigation */}
              <div className="main-nav">
                {/* Services Dropdown */}
                <div className="nav-dropdown">
                  <button 
                    className="nav-link"
                    onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  >
                    Services ▼
                  </button>
                  {showServicesDropdown && (
                    <div className="dropdown-menu">
                      {currentBrandData.services.map((service, index) => (
                        <button
                          key={index}
                          className="dropdown-item"
                          onClick={() => navigateToService(service)}
                        >
                          {service}
                        </button>
                      ))}
                      {currentBrand === 'lifetime' && (
                        <button
                          className="dropdown-item"
                          onClick={() => navigateToPage('radon-education')}
                        >
                          Radon Education
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Service Areas Dropdown */}
                <div className="nav-dropdown">
                  <button 
                    className="nav-link"
                    onClick={() => setShowServiceAreasDropdown(!showServiceAreasDropdown)}
                  >
                    Service Areas ▼
                  </button>
                  {showServiceAreasDropdown && (
                    <div className="dropdown-menu">
                      {currentBrandData.serviceAreas.map((area, index) => (
                        <button
                          key={index}
                          className="dropdown-item"
                          onClick={() => navigateToState(area)}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button className="nav-link" onClick={() => navigateToPage('financing')}>
                  Financing
                </button>
                <button className="nav-link" onClick={() => navigateToPage('contact')}>
                  Contact
                </button>
              </div>
            </nav>

            {/* Contact Info */}
            <div className="contact-section">
              <span className="phone-number">{currentBrandData.phone}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {currentPage === 'home' && <HomePage brand={currentBrandData} onNavigateToService={navigateToService} onGetFreeEstimate={handleGetFreeEstimate} onFinancing={handleFinancing} onScheduleConsultation={handleScheduleConsultation} />}
        {currentPage.startsWith('service-') && <ServicePage serviceName={currentPage} brand={currentBrandData} onGetFreeEstimate={handleGetFreeEstimate} />}
        {currentPage === 'radon-education' && <RadonEducationPage brand={currentBrandData} onGetFreeEstimate={handleGetFreeEstimate} />}
        {currentPage.startsWith('state-') && <StatePage state={currentPage.replace('state-', '')} brand={currentBrandData} onScheduleConsultation={handleScheduleConsultation} />}
        {currentPage === 'financing' && <FinancingPage brand={currentBrandData} />}
        {currentPage === 'contact' && <ContactPage brand={currentBrandData} />}
      </main>
    </div>
  );
}

// HomePage Component with Image-Heavy Design
function HomePage({ brand, onNavigateToService, onGetFreeEstimate, onFinancing, onScheduleConsultation }) {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: `url(${brand.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{brand.tagline}</h1>
              <p className="hero-subtitle">
                {brand.services.join(' • ')}
              </p>
              <div className="hero-buttons">
                <button className="cta-button primary" onClick={onGetFreeEstimate}>
                  Get Free Estimate
                </button>
                <button className="cta-button secondary" onClick={onFinancing}>
                  Financing Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Image Heavy */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid-large">
            {brand.services.map((service, index) => (
              <div key={index} className="service-card-large">
                <div className="service-image-container">
                  <img 
                    src={getServiceImage(service, brand.name)} 
                    alt={service}
                    className="service-image-large"
                  />
                </div>
                <div className="service-content-large">
                  <h3>{service}</h3>
                  <p>{getServiceDescription(service, brand.name)}</p>
                  <button 
                    className="learn-more-button"
                    onClick={() => onNavigateToService(service)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for your free consultation and estimate.</p>
            <div className="cta-buttons">
              <span className="phone-large">{brand.phone}</span>
              <button className="cta-button primary large" onClick={onScheduleConsultation}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper functions for service images and descriptions
function getServiceImage(service, brandName) {
  const serviceImages = {
    'FREE Radon Testing': '/radon-testing-device.jpg',
    'Radon Mitigation': '/radon-mitigation-system.jpg',
    'Duct Cleaning & AeroSeal': '/aeroseal-logo.png',
    'Concrete Coatings': '/organized-garage-storage.jpg',
    'Smart Home Automation': '/america-smart-home-hero.jpg',
    'Security Systems': '/america-smart-home-hero.jpg',
    'Control4 Integration': '/america-smart-home-hero.jpg',
    'Walk-in Closets': '/closets-luxury-hero.jpg',
    'Reach-in Closets': '/closets-luxury-hero.jpg',
    'Pantry Organization': '/home-office-organization.jpg',
    'Garage Storage': '/organized-garage-storage.jpg',
    'Laundry Rooms': '/home-office-organization.jpg',
    'Mudrooms': '/home-office-organization.jpg',
    'Home Offices': '/home-office-organization.jpg',
    'Craft Rooms': '/home-office-organization.jpg'
  };
  
  return serviceImages[service] || '/lifetime-hero-house.jpg';
}

function getServiceDescription(service, brandName) {
  const descriptions = {
    'FREE Radon Testing': 'Professional radon testing with fast results using EPA-approved methods.',
    'Radon Mitigation': 'Custom radon mitigation systems with lifetime warranty and guaranteed results.',
    'Duct Cleaning & AeroSeal': 'Professional duct cleaning and revolutionary AeroSeal duct sealing technology.',
    'Concrete Coatings': 'Durable concrete floor coatings for garages, basements, and commercial spaces.',
    'Smart Home Automation': 'Complete home automation solutions using Control4 technology.',
    'Security Systems': 'Professional security system installation and monitoring services.',
    'Control4 Integration': 'Advanced Control4 home automation and smart home integration.',
    'Walk-in Closets': 'Custom walk-in closet systems with premium materials and professional installation.',
    'Reach-in Closets': 'Maximize storage in reach-in closets with custom shelving and organization.',
    'Pantry Organization': 'Custom pantry shelving with pull-out drawers and organizational systems.',
    'Garage Storage': 'Professional garage organization with custom storage solutions.',
    'Laundry Rooms': 'Efficient laundry room organization with custom shelving and storage.',
    'Mudrooms': 'Custom mudroom organization for busy families and active lifestyles.',
    'Home Offices': 'Professional home office organization for maximum productivity.',
    'Craft Rooms': 'Custom craft room storage and organization for creative spaces.'
  };
  
  return descriptions[service] || `Professional ${service.toLowerCase()} services with expert installation.`;
}

// Service Page Component with Enhanced Content and Video Integration
function ServicePage({ serviceName, brand, onGetFreeEstimate }) {
  const service = serviceName.replace('service-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const hasVideo = brand.videos && brand.videos[service];
  
  return (
    <div className="service-page">
      <div className="container">
        <header className="service-header">
          <h1>{service}</h1>
          <p>Professional {service.toLowerCase()} services with expert installation.</p>
        </header>

        <section className="service-content">
          {/* Video Section for America In-Home */}
          {hasVideo && (
            <div className="service-video-section">
              <h2>See {service} in Action</h2>
              <div className="video-container">
                <iframe 
                  src={brand.videos[service]}
                  width="100%" 
                  height="400" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title={`${service} Video`}
                ></iframe>
              </div>
            </div>
          )}

          <div className="service-details">
            <h2>Professional {service}</h2>
            <p>
              Our expert team provides professional {service.toLowerCase()} services 
              with the highest quality materials and installation techniques. We stand behind our work 
              with comprehensive warranties and ongoing support.
            </p>

            {/* Enhanced content based on service type */}
            {getEnhancedServiceContent(service, brand)}

            <div className="service-benefits">
              <h3>Benefits Include:</h3>
              <ul>
                <li>Professional installation by certified technicians</li>
                <li>High-quality materials and equipment</li>
                <li>Comprehensive warranty coverage</li>
                <li>Free estimates and consultations</li>
                <li>Ongoing customer support</li>
                {brand.name === 'America In-Home' && <li>Control4 certified installation</li>}
                {brand.name === 'Closet Concepts' && <li>Custom design consultation</li>}
                {brand.name === 'Lifetime Home Services' && <li>EPA certified professionals</li>}
              </ul>
            </div>

            <div className="service-cta">
              <h3>Ready to Get Started?</h3>
              <p>Contact us today to schedule your free consultation and estimate.</p>
              <div className="contact-info">
                <span className="phone-large">{brand.phone}</span>
                <button className="cta-button primary" onClick={onGetFreeEstimate}>
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Enhanced service content function
function getEnhancedServiceContent(service, brand) {
  const content = {
    'Smart Home Automation': (
      <div className="enhanced-content">
        <h3>Complete Home Automation Solutions</h3>
        <p>Transform your home with intelligent automation that learns your lifestyle and preferences. 
        Our Control4 certified technicians design and install comprehensive smart home systems that 
        integrate lighting, climate, security, entertainment, and more.</p>
        <div className="feature-grid">
          <div className="feature-item">
            <h4>Lighting Control</h4>
            <p>Automated lighting scenes and schedules</p>
          </div>
          <div className="feature-item">
            <h4>Climate Management</h4>
            <p>Intelligent temperature control and energy savings</p>
          </div>
          <div className="feature-item">
            <h4>Entertainment Integration</h4>
            <p>Whole-home audio and video distribution</p>
          </div>
          <div className="feature-item">
            <h4>Voice Control</h4>
            <p>Amazon Alexa and Google Assistant integration</p>
          </div>
        </div>
      </div>
    ),
    'Security Systems': (
      <div className="enhanced-content">
        <h3>Advanced Security Solutions</h3>
        <p>Protect your family and property with state-of-the-art security systems featuring 
        24/7 monitoring, mobile alerts, and professional installation.</p>
        <div className="feature-grid">
          <div className="feature-item">
            <h4>Video Surveillance</h4>
            <p>HD cameras with remote viewing capabilities</p>
          </div>
          <div className="feature-item">
            <h4>Access Control</h4>
            <p>Smart locks and keyless entry systems</p>
          </div>
          <div className="feature-item">
            <h4>24/7 Monitoring</h4>
            <p>Professional monitoring and emergency response</p>
          </div>
          <div className="feature-item">
            <h4>Mobile Integration</h4>
            <p>Control and monitor from anywhere</p>
          </div>
        </div>
      </div>
    ),
    'Walk-in Closets': (
      <div className="enhanced-content">
        <h3>Luxury Walk-in Closet Design</h3>
        <p>Create your dream walk-in closet with custom storage solutions, premium materials, 
        and professional design that maximizes space and style.</p>
        <div className="feature-grid">
          <div className="feature-item">
            <h4>Custom Shelving</h4>
            <p>Adjustable shelves for maximum flexibility</p>
          </div>
          <div className="feature-item">
            <h4>Premium Materials</h4>
            <p>High-quality wood finishes and hardware</p>
          </div>
          <div className="feature-item">
            <h4>Lighting Design</h4>
            <p>LED lighting for optimal visibility</p>
          </div>
          <div className="feature-item">
            <h4>Accessory Storage</h4>
            <p>Specialized storage for shoes, jewelry, and accessories</p>
          </div>
        </div>
      </div>
    )
  };

  return content[service] || null;
}

// Comprehensive Radon Education Page
function RadonEducationPage({ brand, onGetFreeEstimate }) {
  return (
    <div className="radon-education-page">
      <div className="container">
        <header className="education-header">
          <h1>Comprehensive Radon Education</h1>
          <p>Everything you need to know about radon testing and mitigation</p>
        </header>

        <section className="education-content">
          <div className="education-section">
            <h2>What is Radon?</h2>
            <p>
              Radon is a naturally occurring radioactive gas that comes from the decay of uranium in soil, rock, and water. 
              It's colorless, odorless, and tasteless, making it impossible to detect without proper testing equipment.
            </p>
          </div>

          <div className="education-section">
            <h2>Health Risks</h2>
            <p>
              Radon is the second leading cause of lung cancer in the United States, responsible for about 21,000 deaths annually. 
              The EPA recommends taking action if radon levels are 4 pCi/L or higher.
            </p>
          </div>

          <div className="education-section">
            <h2>Radon Mitigation Systems</h2>
            
            <div className="mitigation-system">
              <h3>1. Sub-Slab Depressurization (Most Common)</h3>
              <ul>
                <li>Ideal for homes with concrete slab foundations</li>
                <li>A PVC pipe is inserted through the basement floor into the soil beneath</li>
                <li>A fan draws radon gas up through the pipe and safely vents it above the roofline</li>
                <li>Effective in reducing radon from beneath the entire foundation</li>
              </ul>
            </div>

            <div className="mitigation-system">
              <h3>2. Sump Pit Depressurization</h3>
              <ul>
                <li>Utilizes the existing sump pit as the suction point</li>
                <li>The pit is sealed with an airtight lid and connected to a vent pipe</li>
                <li>Cost-effective and efficient if the home already has a sump pump</li>
              </ul>
            </div>

            <div className="mitigation-system">
              <h3>3. Drain Tile Depressurization</h3>
              <ul>
                <li>Works with homes that have drain tile systems installed under the slab</li>
                <li>Radon is collected and vented via the same tile system, reducing the need for drilling</li>
              </ul>
            </div>

            <div className="mitigation-system">
              <h3>4. Block Wall Depressurization</h3>
              <ul>
                <li>Used for homes with hollow block foundation walls</li>
                <li>Suction is applied to the hollow cores of the block walls</li>
                <li>Effective for reducing radon entry through foundation walls</li>
              </ul>
            </div>
          </div>

          <div className="education-cta">
            <h2>Professional Radon Services</h2>
            <p>
              Our EPA-certified technicians provide comprehensive radon testing and mitigation services 
              with guaranteed results and lifetime warranties.
            </p>
            <div className="cta-buttons">
              <span className="phone-large">{brand.phone}</span>
              <button className="cta-button primary" onClick={onGetFreeEstimate}>
                Schedule Free Testing
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// State Page Component with SEO-Optimized Content
function StatePage({ state, brand, onScheduleConsultation }) {
  const stateData = getStateData(state, brand);
  
  return (
    <div className="state-page">
      <div className="container">
        <header className="state-header">
          <h1>{state} Services</h1>
          <p>Professional home services throughout {state}</p>
        </header>

        <section className="state-services">
          <h2>Services Available in {state}</h2>
          <div className="services-grid">
            {stateData.services.map((service, index) => (
              <div key={index} className="service-card-state">
                <h3>{service}</h3>
                <p>Professional {service.toLowerCase()} services with expert installation and lifetime warranty.</p>
                <button className="learn-more-btn" onClick={onScheduleConsultation}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="service-areas">
          <h2>Service Areas in {state}</h2>
          <p>We proudly serve the following areas and zip codes in {state}:</p>
          
          <div className="area-codes-section">
            <h3>Area Codes Served:</h3>
            <div className="area-codes-grid">
              {stateData.areaCodes.map((code, index) => (
                <span key={index} className="area-code">{code}</span>
              ))}
            </div>
          </div>

          <div className="zip-codes-section">
            <h3>Zip Codes Served:</h3>
            <div className="zip-codes-grid">
              {stateData.zipCodes.map((zip, index) => (
                <span key={index} className="zip-code">{zip}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="state-contact">
          <h2>Ready to Get Started in {state}?</h2>
          <p>Contact us today for your free consultation and estimate.</p>
          <div className="contact-info">
            <span className="phone-large">{brand.phone}</span>
            <button className="cta-button primary" onClick={onScheduleConsultation}>
              Schedule Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper function for state data with comprehensive SEO coverage
function getStateData(state, brand) {
  const stateInfo = {
    wisconsin: {
      services: brand.services,
      areaCodes: ['262', '414', '608', '715', '920'],
      zipCodes: [
        '53005', '53012', '53018', '53022', '53029', '53033', '53045', '53051', '53056', '53066',
        '53072', '53089', '53092', '53097', '53108', '53122', '53129', '53130', '53132', '53140',
        '53142', '53146', '53149', '53150', '53151', '53154', '53158', '53168', '53172', '53186',
        '53188', '53189', '53190', '53201', '53202', '53203', '53204', '53205', '53206', '53207',
        '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217',
        '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227',
        '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53274', '53278', '53295'
      ]
    },
    illinois: {
      services: ['Duct Cleaning & AeroSeal'],
      areaCodes: ['224', '312', '331', '630', '708', '773', '815', '847', '872'],
      zipCodes: [
        '60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013',
        '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025',
        '60026', '60029', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039',
        '60040', '60041', '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60049'
      ]
    },
    minnesota: {
      services: ['FREE Radon Testing'],
      areaCodes: ['218', '320', '507', '612', '651', '763', '952'],
      zipCodes: [
        '55001', '55003', '55009', '55014', '55016', '55024', '55025', '55033', '55038', '55042',
        '55043', '55044', '55055', '55056', '55057', '55068', '55069', '55071', '55075', '55076',
        '55077', '55082', '55089', '55090', '55101', '55102', '55103', '55104', '55105', '55106',
        '55107', '55108', '55109', '55110', '55111', '55112', '55113', '55114', '55115', '55116'
      ]
    },
    colorado: {
      services: ['Radon Mitigation'],
      areaCodes: ['303', '719', '720', '970'],
      zipCodes: [
        '80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013',
        '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023',
        '80024', '80025', '80026', '80027', '80030', '80031', '80033', '80034', '80035', '80036',
        '80037', '80038', '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108'
      ]
    }
  };

  return stateInfo[state.toLowerCase()] || { services: [], areaCodes: [], zipCodes: [] };
}

// Financing Page Component
function FinancingPage({ brand }) {
  return (
    <div className="financing-page">
      <div className="container">
        <header className="financing-header">
          <h1>Financing Options</h1>
          <p>Flexible financing solutions for your home improvement projects</p>
        </header>

        <section className="financing-content">
          <div className="financing-details">
            <h2>Synchrony Financing Available</h2>
            <p>
              We partner with Synchrony to offer flexible financing options for qualified customers. 
              Get the home improvements you need today with convenient monthly payments.
            </p>

            <div className="financing-benefits">
              <h3>Financing Benefits:</h3>
              <ul>
                <li>Quick and easy application process</li>
                <li>Competitive interest rates</li>
                <li>Flexible payment terms</li>
                <li>No prepayment penalties</li>
                <li>Same-day approval available</li>
              </ul>
            </div>

            <div className="financing-cta">
              <h3>Apply for Financing</h3>
              <p>Contact us today to learn more about our financing options and get pre-approved.</p>
              <div className="contact-info">
                <span className="phone-large">{brand.phone}</span>
                <button className="cta-button primary">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage({ brand }) {
  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch for your free consultation and estimate</p>
        </header>

        <section className="contact-content">
          <div className="contact-info-grid">
            <div className="contact-item">
              <h3>Phone</h3>
              <p className="phone-large">{brand.phone}</p>
            </div>
            
            <div className="contact-item">
              <h3>Address</h3>
              <p>{brand.address}</p>
            </div>
            
            <div className="contact-item">
              <h3>Hours</h3>
              <p>
                Monday-Friday: 9am-5pm<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="contact-cta">
            <h2>Ready to Get Started?</h2>
            <p>Call us today to schedule your free consultation and estimate.</p>
            <button className="cta-button primary large">
              Call {brand.phone}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

