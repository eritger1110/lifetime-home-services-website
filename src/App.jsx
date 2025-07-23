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
      tagline: 'Lifetime Home Solutions. Trusted Solutions. Lifetime Results.',
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
          <h1 className="hero-title">{brand.tagline}</h1>
          <p className="hero-subtitle">
            {brand.name === 'Lifetime Home Services' && 'Radon • Duct Cleaning • Floor Coatings • AeroSeal • Smart Home & Security'}
            {brand.name === 'America In-Home' && 'Smart Home Automation • Security Systems • Control4 Integration'}
            {brand.name === 'Closet Concepts' && 'Custom Closets • Pantry Organization • Garage Storage • Home Organization'}
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
      'Home Offices': 'Custom built-in office solutions and workspace design.',
      'Craft Rooms': 'Creative space organization with custom storage for supplies and materials.'
    };
    return descriptions[service] || 'Professional service with expert installation.';
  };

  return (
    <div className="service-card">
      <div className="service-image-container">
        <img src={getServiceImage(service)} alt={service} className="service-image" />
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

// Radon Education Page Component
function RadonEducationPage() {
  return (
    <div className="radon-education-page">
      <div className="container">
        <header className="page-header">
          <h1>Radon Education: What Every Homeowner Should Know</h1>
        </header>

        <section className="education-section">
          <h2>What Is Radon?</h2>
          <p>
            Radon is a naturally occurring radioactive gas that forms when uranium breaks down in soil, rock, and water. 
            It's invisible, odorless, and tasteless, which means the only way to detect it is through testing. According to the{' '}
            <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA</a>, 
            radon is the <strong>second leading cause of lung cancer in the United States</strong>, responsible for over 20,000 deaths each year.
          </p>
        </section>

        <section className="education-section">
          <h2>Why Is Radon Dangerous?</h2>
          <p>
            Radon gas seeps into homes through foundation cracks, sump pumps, construction joints, and other small openings. 
            Once inside, it can accumulate to unsafe levels—especially in basements and lower levels. Long-term exposure to 
            elevated radon levels increases the risk of lung cancer, even for non-smokers.
          </p>
          <p>
            Learn more from the{' '}
            <a href="https://www.cdc.gov/radon/" target="_blank" rel="noopener noreferrer">CDC</a>.
          </p>
        </section>

        <section className="education-section">
          <h2>How Does Radon Enter Your Home?</h2>
          <h3>Common Entry Points:</h3>
          <ul>
            <li>Cracks in concrete floors and walls</li>
            <li>Gaps in suspended floors</li>
            <li>Crawlspaces</li>
            <li>Openings around pipes and utility lines</li>
            <li>Floor drains and sump pumps</li>
          </ul>
          <div className="diagram-container">
            <img 
              src="https://www.epa.gov/sites/default/files/2015-05/radon-entry-diagram.jpg" 
              alt="How Radon Enters Your Home" 
              className="education-diagram"
            />
          </div>
        </section>

        <section className="education-section">
          <h2>What Are Safe Radon Levels?</h2>
          <ul>
            <li><strong>Measured in picocuries per liter (pCi/L)</strong></li>
            <li>The EPA recommends <strong>mitigation at levels of 4.0 pCi/L or higher</strong></li>
            <li>Even levels between <strong>2.0 and 4.0 pCi/L</strong> can pose a risk and may be considered for reduction</li>
          </ul>
          <div className="diagram-container">
            <img 
              src="https://www.epa.gov/sites/default/files/2014-08/documents/riskchart.jpg" 
              alt="EPA Radon Risk Chart" 
              className="education-diagram"
            />
          </div>
        </section>

        <section className="education-section">
          <h2>Radon Testing: Your First Step</h2>
          <p>We offer <strong>FREE radon testing</strong> with fast results and expert follow-up.</p>
          <p>Testing is:</p>
          <ul>
            <li>Quick</li>
            <li>Non-invasive</li>
            <li>Essential for all homeowners—whether buying, selling, or simply ensuring peace of mind</li>
          </ul>
          <button className="cta-button primary">Schedule Your Free Test Now</button>
        </section>

        <section className="education-section">
          <h2>What If You Have High Radon Levels?</h2>
          <p><strong>Don't panic—radon mitigation is highly effective.</strong> Our team uses proven, code-compliant systems that lower radon levels quickly and permanently.</p>
          
          <h3>Before & After Mitigation Examples:</h3>
          <div className="before-after-container">
            <div className="before-after-item">
              <h4>Before:</h4>
              <img 
                src="https://www.epa.gov/sites/default/files/2020-01/images/radon-before.jpg" 
                alt="Before Mitigation" 
                className="education-diagram"
              />
            </div>
            <div className="before-after-item">
              <h4>After:</h4>
              <img 
                src="https://www.epa.gov/sites/default/files/2020-01/images/radon-after.jpg" 
                alt="After Mitigation" 
                className="education-diagram"
              />
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2>Radon Mitigation System Options</h2>
          <p>Depending on your home's construction and radon levels, we may recommend:</p>

          <div className="mitigation-system">
            <h3>1. Sub-Slab Depressurization (Most Common)</h3>
            <ul>
              <li>Ideal for homes with concrete slab foundations</li>
              <li>A PVC pipe is inserted through the basement floor into the soil beneath</li>
              <li>A fan draws radon gas up through the pipe and safely vents it above the roofline</li>
              <li>Effective in reducing radon from beneath the entire foundation</li>
            </ul>
            <img 
              src="https://www.epa.gov/sites/default/files/styles/medium/public/2020-01/images/radon-system.jpg" 
              alt="Sub-Slab System" 
              className="education-diagram"
            />
          </div>

          <div className="mitigation-system">
            <h3>2. Sump Pit Depressurization</h3>
            <ul>
              <li>Utilizes the existing sump pit as the suction point</li>
              <li>The pit is sealed with an airtight lid and connected to a vent pipe</li>
              <li>Cost-effective and efficient if the home already has a sump pump</li>
            </ul>
            <img 
              src="https://www.radon.com/images/sump-system.jpg" 
              alt="Sump Pit System" 
              className="education-diagram"
            />
          </div>

          <div className="mitigation-system">
            <h3>3. Drain Tile Depressurization</h3>
            <ul>
              <li>Works with homes that have drain tile systems installed under the slab</li>
              <li>Radon is collected and vented via the same tile system, reducing the need for drilling</li>
            </ul>
            <img 
              src="https://inspectapedia.com/radon/Drain-Tile-Radon-Mitigation.jpg" 
              alt="Drain Tile System" 
              className="education-diagram"
            />
          </div>

          <div className="mitigation-system">
            <h3>4. Crawl Space Encapsulation</h3>
            <ul>
              <li>Used in homes with crawlspaces or exposed soil</li>
              <li>Heavy-duty plastic sheeting is sealed over the soil</li>
              <li>A fan and piping system draw radon from below the membrane and vent it outside</li>
            </ul>
            <img 
              src="https://www.radonsystems.com/wp-content/uploads/2021/02/rs3.jpg" 
              alt="Crawl Space System" 
              className="education-diagram"
            />
          </div>
        </section>

        <section className="education-section">
          <h2>The Radon Fans We Trust</h2>
          <p>
            We exclusively install high-performance radon fans from{' '}
            <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a>, 
            a leading U.S. manufacturer known for durability, quiet operation, and maximum draw.
          </p>
          
          <h3>Our Preferred Models:</h3>
          <ul>
            <li><strong>Maverick Eagle</strong> – Ideal for standard sub-slab systems, quiet and efficient</li>
            <li><strong>Eagle Max</strong> – High-powered for homes with compacted subgrade or multiple suction points</li>
            <li><strong>Legends</strong> – Sleek, high-performance fans for visible exterior installs</li>
            <li><strong>Legends Max</strong> – Maximum air volume for challenging mitigation scenarios</li>
          </ul>
          <p>Each fan is selected based on your home's layout and mitigation needs, ensuring optimal airflow and long-term performance.</p>
        </section>

        <section className="education-section">
          <h2>Why Choose Lifetime Home Services?</h2>
          <ul>
            <li>Certified radon professionals</li>
            <li>Lifetime warranty on system components</li>
            <li>Transparent, upfront pricing</li>
            <li>Optional aesthetic fan covers and performance upgrades</li>
            <li>Discounts when bundled with AeroSeal duct sealing or floor coating services</li>
          </ul>
          <blockquote>
            <strong>Trusted Solutions. Lifetime Results.</strong>
          </blockquote>
        </section>

        <section className="education-section">
          <h2>Still Have Questions?</h2>
          <p>
            Check out the EPA's{' '}
            <a href="https://www.epa.gov/sites/default/files/2015-05/documents/hmbuygud.pdf" target="_blank" rel="noopener noreferrer">
              Home Buyer's and Seller's Guide to Radon
            </a>{' '}
            or call our team directly.
          </p>
          
          <div className="contact-info">
            <h3>Lifetime Home Services</h3>
            <p><strong>Trusted Solutions. Lifetime Results.</strong></p>
            <p>📞 <strong>(262) 955-5701</strong></p>
            <p>🌐 <a href="https://www.lifetimehomeservices.com/radon" target="_blank" rel="noopener noreferrer">Visit Our Radon Services</a></p>
          </div>
          
          <blockquote>
            <em>Radon is a risk you can't see—but it's one you can eliminate. Let us help you breathe easier.</em>
          </blockquote>
        </section>
      </div>
    </div>
  );
}

// Financing Page Component
function FinancingPage() {
  return (
    <div className="financing-page">
      <div className="container">
        <header className="page-header">
          <h1>Financing Options Available</h1>
          <p>Make your home improvement dreams a reality with flexible financing solutions.</p>
        </header>

        <section className="financing-section">
          <h2>Synchrony Financing</h2>
          <p>
            We've partnered with Synchrony to offer you flexible financing options for your home improvement projects. 
            Whether you're looking to install a radon mitigation system, upgrade your HVAC with AeroSeal, or apply premium 
            floor coatings, we have financing solutions to fit your budget.
          </p>

          <div className="financing-benefits">
            <h3>Benefits Include:</h3>
            <ul>
              <li>Quick and easy online application process</li>
              <li>Competitive interest rates</li>
              <li>Flexible payment terms</li>
              <li>No prepayment penalties</li>
              <li>Same-day approval decisions</li>
            </ul>
          </div>

          <div className="financing-cta">
            <h3>Ready to Apply?</h3>
            <p>Click the button below to apply for financing through our secure Synchrony portal.</p>
            <a 
              href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary large"
            >
              Apply for Financing
            </a>
          </div>
        </section>

        <section className="financing-section">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>What services qualify for financing?</h3>
            <p>All of our services qualify for financing, including radon testing and mitigation, duct cleaning and AeroSeal, concrete coatings, and smart home installations.</p>
          </div>

          <div className="faq-item">
            <h3>How quickly can I get approved?</h3>
            <p>Most applications receive a decision within minutes of submission. In some cases, additional verification may be required.</p>
          </div>

          <div className="faq-item">
            <h3>What information do I need to apply?</h3>
            <p>You'll need basic personal information, employment details, and financial information to complete the application.</p>
          </div>

          <div className="faq-item">
            <h3>Are there any prepayment penalties?</h3>
            <p>No, there are no prepayment penalties. You can pay off your balance early without any additional fees.</p>
          </div>
        </section>

        <section className="contact-section">
          <h2>Questions About Financing?</h2>
          <p>Our team is here to help you understand your financing options and find the best solution for your project.</p>
          <div className="contact-info">
            <span className="phone-large">(262) 955-5701</span>
            <button className="cta-button secondary">Contact Us</button>
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
        <header className="page-header">
          <h1>Contact {brand.name}</h1>
          <p>Ready to get started? We're here to help with all your home service needs.</p>
        </header>

        <section className="contact-section">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <h3>Phone</h3>
              <p className="phone-large">{brand.phone}</p>
            </div>

            <div className="contact-info-card">
              <h3>Address</h3>
              <p>{brand.address}</p>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(brand.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="maps-link"
              >
                Get Directions
              </a>
            </div>

            <div className="contact-info-card">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Get Your Free Estimate</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                {brand.services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project...</label>
              <textarea id="message" name="message" rows="5" placeholder="Please describe your project and any specific requirements..."></textarea>
            </div>

            <button type="submit" className="cta-button primary large">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
}

// State Page Component with Enhanced Design
function StatePage({ state, brand, zipCodes = [] }) {
  const [expandedZips, setExpandedZips] = useState(false);
  
  const displayZips = expandedZips ? zipCodes : zipCodes.slice(0, 20);
  const remainingCount = zipCodes.length - 20;

  // State-specific service information
  const getStateServices = (state, brand) => {
    if (brand.name === 'Lifetime Home Services') {
      switch (state) {
        case 'Wisconsin':
          return brand.services; // All services
        case 'Illinois':
          return ['Duct Cleaning & AeroSeal']; // HVAC only
        case 'Minnesota':
          return ['FREE Radon Testing']; // Free radon only
        case 'Colorado':
          return ['Radon Mitigation']; // Radon expertise
        default:
          return brand.services;
      }
    }
    // For America In-Home and Closet Concepts, only Wisconsin
    return brand.services;
  };

  const stateServices = getStateServices(state, brand);

  return (
    <div className="state-page" style={{
      backgroundImage: `url(/state-silhouette-${state.toLowerCase()}.svg)`,
      backgroundSize: '40%',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container">
        <header className="state-header">
          <h1>{state} Services</h1>
          <p>Professional home services throughout {state}</p>
          
          <div className="trust-badges-horizontal">
            <span className="trust-badge">EPA Certified</span>
            <span className="trust-badge">Licensed & Insured</span>
            <span className="trust-badge">Free Estimates</span>
            <span className="trust-badge">Lifetime Warranty</span>
          </div>
        </header>

        <section className="state-services">
          <h2>Services Available in {state}</h2>
          <div className="services-grid">
            {brand.services.map((service, index) => (
              <div key={index} className="service-card-state">
                <h3>{service}</h3>
                <p>Professional {service.toLowerCase()} services with expert installation and lifetime warranty.</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>
        </section>

        {zipCodes.length > 0 && (
          <section className="service-areas">
            <h2>Service Areas in {state}</h2>
            <p>We proudly serve the following zip codes in {state}:</p>
            
            <div className="zip-codes-container">
              <div className="zip-codes-grid">
                {displayZips.map((zip, index) => (
                  <span key={index} className="zip-code">{zip}</span>
                ))}
              </div>
              
              {!expandedZips && remainingCount > 0 && (
                <button 
                  className="expand-zips-btn"
                  onClick={() => setExpandedZips(true)}
                >
                  +{remainingCount} more
                </button>
              )}
            </div>
          </section>
        )}

        <section className="state-contact">
          <h2>Ready to Get Started in {state}?</h2>
          <p>Contact us today for your free consultation and estimate.</p>
          <div className="contact-info">
            <span className="phone-large">{brand.phone}</span>
            <button className="cta-button primary">Schedule Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
}

// Service Page Component with AIH Video Integration
function ServicePage({ serviceName, brand }) {
  const formatServiceName = (name) => {
    return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const getServiceContent = (serviceName, brand) => {
    if (brand.name === 'America In-Home') {
      if (serviceName === 'service-smart-home-automation') {
        return (
          <div className="service-content-enhanced">
            <div className="video-section">
              <h3>America In-Home Web Banner</h3>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/v8mkx8DbJg0"
                  title="America In-Home Web Banner"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="service-details-enhanced">
              <h2>Smart Home Automation with Control4</h2>
              <p>Transform your home into a smart, connected environment with our comprehensive automation solutions. We utilize Control4 technology to create seamless integration between all your home systems.</p>
              
              <div className="service-features">
                <h3>Our Smart Home Services Include:</h3>
                <ul>
                  <li><strong>Sonos Speaker Systems</strong> - Whole-home audio with wireless streaming</li>
                  <li><strong>Smart TV Integration</strong> - Seamless entertainment control</li>
                  <li><strong>Home WiFi Installation</strong> - Professional network setup and optimization</li>
                  <li><strong>Whole Home Wiring</strong> - Retrofit and new construction low voltage wiring</li>
                  <li><strong>Smart Window Blinds</strong> - Automated window treatments with low voltage control</li>
                  <li><strong>Control4 Integration</strong> - Centralized control of all home systems</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
      
      if (serviceName === 'service-security-systems') {
        return (
          <div className="service-content-enhanced">
            <div className="video-section">
              <h3>America In-Home Security Solutions</h3>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/46YkzyAUCR8"
                  title="America In-Home Security 25-Spot"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="service-details-enhanced">
              <h2>Professional Security Systems</h2>
              <p>Protect your home and family with our comprehensive security solutions. From cameras to monitoring, we provide complete peace of mind.</p>
              
              <div className="service-features">
                <h3>Security Services Include:</h3>
                <ul>
                  <li><strong>Security Camera Installation</strong> - Indoor and outdoor surveillance systems</li>
                  <li><strong>Smart Doorbell Systems</strong> - Video doorbells with mobile alerts</li>
                  <li><strong>Motion Detection</strong> - Advanced sensors and monitoring</li>
                  <li><strong>Access Control</strong> - Smart locks and entry systems</li>
                  <li><strong>24/7 Monitoring</strong> - Professional security monitoring services</li>
                  <li><strong>Mobile App Control</strong> - Monitor your home from anywhere</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
      
      if (serviceName === 'service-control4-integration') {
        return (
          <div className="service-content-enhanced">
            <div className="service-details-enhanced">
              <h2>Control4 Home Automation Integration</h2>
              <p>Experience the ultimate in home automation with Control4's award-winning smart home platform. Control4 provides a single, unified interface to control your entire home.</p>
              
              <div className="control4-features">
                <h3>Control4 Capabilities:</h3>
                <div className="features-grid">
                  <div className="feature-card">
                    <h4>Lighting Control</h4>
                    <p>Automated lighting scenes, dimming, and scheduling throughout your home</p>
                  </div>
                  <div className="feature-card">
                    <h4>Climate Management</h4>
                    <p>Intelligent HVAC control with scheduling and remote access</p>
                  </div>
                  <div className="feature-card">
                    <h4>Entertainment Systems</h4>
                    <p>Seamless control of TVs, audio systems, and streaming devices</p>
                  </div>
                  <div className="feature-card">
                    <h4>Security Integration</h4>
                    <p>Unified control of cameras, alarms, and access control systems</p>
                  </div>
                </div>
              </div>
              
              <div className="control4-benefits">
                <h3>Why Choose Control4?</h3>
                <ul>
                  <li><strong>Reliability</strong> - Professional-grade hardware and software</li>
                  <li><strong>Scalability</strong> - Start small and expand your system over time</li>
                  <li><strong>Integration</strong> - Works with over 13,500+ third-party devices</li>
                  <li><strong>Professional Installation</strong> - Certified Control4 dealers ensure optimal performance</li>
                  <li><strong>Ongoing Support</strong> - Local support and system updates</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
    }
    
    // Default service content for other services
    return (
      <div className="service-details">
        <h2>Professional {formatServiceName(serviceName.replace('service-', ''))}</h2>
        <p>
          Our expert team provides professional {formatServiceName(serviceName.replace('service-', '')).toLowerCase()} services 
          with the highest quality materials and installation techniques. We stand behind our work 
          with comprehensive warranties and ongoing support.
        </p>

        <div className="service-benefits">
          <h3>Benefits Include:</h3>
          <ul>
            <li>Professional installation by certified technicians</li>
            <li>High-quality materials and equipment</li>
            <li>Comprehensive warranty coverage</li>
            <li>Free estimates and consultations</li>
            <li>Ongoing customer support</li>
          </ul>
        </div>

        <div className="service-cta">
          <h3>Ready to Get Started?</h3>
          <p>Contact us today to schedule your free consultation and estimate.</p>
          <div className="contact-info">
            <span className="phone-large">{brand.phone}</span>
            <button className="cta-button primary">Get Free Estimate</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="service-page">
      <div className="container">
        <header className="service-header">
          <h1>{formatServiceName(serviceName.replace('service-', ''))}</h1>
          <p>Professional {formatServiceName(serviceName.replace('service-', '')).toLowerCase()} services with expert installation.</p>
        </header>

        <section className="service-content">
          {getServiceContent(serviceName, brand)}
        </section>
      </div>
    </div>
  );
}

export default App;

