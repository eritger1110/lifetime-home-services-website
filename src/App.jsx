import React, { useState, useEffect } from 'react';
import './App.css';

// Icons (using Unicode symbols for better compatibility)
const ChevronDownIcon = () => <span className="chevron-icon">▼</span>;
const ChevronUpIcon = () => <span className="chevron-icon">▲</span>;
const PhoneIcon = () => <span className="icon">📞</span>;
const EmailIcon = () => <span className="icon">✉️</span>;
const LocationIcon = () => <span className="icon">📍</span>;
const CheckIcon = () => <span className="icon check-icon">✓</span>;
const StarIcon = () => <span className="icon star-icon">⭐</span>;
const MenuIcon = () => <span className="icon">☰</span>;
const CloseIcon = () => <span className="icon">✕</span>;
const HomeIcon = () => <span className="icon">🏠</span>;
const ShieldIcon = () => <span className="icon">🛡️</span>;
const SettingsIcon = () => <span className="icon">⚙️</span>;
const StorageIcon = () => <span className="icon">📦</span>;
const TestTubeIcon = () => <span className="icon">🧪</span>;
const WindIcon = () => <span className="icon">💨</span>;
const PaintBrushIcon = () => <span className="icon">🎨</span>;
const WrenchIcon = () => <span className="icon">🔧</span>;
const ZapIcon = () => <span className="icon">⚡</span>;

function App() {
  // State management
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [showBrandSwitcher, setShowBrandSwitcher] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServiceAreasDropdown, setShowServiceAreasDropdown] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [expandedZipCodes, setExpandedZipCodes] = useState({});

  // Brand configurations
  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      logo: '/LifetimeHomeServicesLogo.png',
      heroImage: '/lifetime-hero-bg.jpg',
      primaryColor: '#1e40af',
      secondaryColor: '#3b82f6',
      accentColor: '#fbbf24',
      services: [
        { id: 'radon-testing', name: 'FREE Radon Testing', icon: <TestTubeIcon />, description: 'Professional radon testing with EPA-certified professionals' },
        { id: 'radon-mitigation', name: 'Radon Mitigation', icon: <TestTubeIcon />, description: 'EPA-certified radon mitigation systems' },
        { id: 'duct-cleaning', name: 'Duct Cleaning & AeroSeal', icon: <WindIcon />, description: 'Professional duct cleaning and AeroSeal technology' },
        { id: 'concrete-coatings', name: 'Concrete Coatings', icon: <PaintBrushIcon />, description: 'Premium Torginol floor coating systems' },
        { id: 'electrical', name: 'Licensed Electrical', icon: <ZapIcon />, description: 'Professional electrical services and installations' },
        { id: 'handyman', name: 'Professional Handyman', icon: <WrenchIcon />, description: 'Licensed handyman services for home improvements' }
      ]
    },
    america: {
      name: 'America In-Home',
      tagline: 'Smart Homes. Secure Living.',
      logo: '/AmericaIn-HomeLogo.jpg',
      heroImage: '/america-hero-bg.jpg',
      primaryColor: '#10b981',
      secondaryColor: '#059669',
      accentColor: '#34d399',
      services: [
        { id: 'smart-home', name: 'Smart Home Automation', icon: <HomeIcon />, description: 'Complete home automation systems with Control4 integration' },
        { id: 'security', name: 'Security Systems', icon: <ShieldIcon />, description: 'Advanced security solutions with 24/7 monitoring' },
        { id: 'control4', name: 'Control4 Integration', icon: <SettingsIcon />, description: 'Professional Control4 smart home system installation' }
      ]
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Custom Organization Solutions.',
      logo: '/NewClosetConceptsLogo.pdf',
      heroImage: '/closets-hero-bg.jpg',
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      accentColor: '#fbbf24',
      services: [
        { id: 'custom-closets', name: 'Custom Closets', icon: <StorageIcon />, description: 'Personalized closet systems with premium materials' },
        { id: 'pantry-organization', name: 'Pantry Organization', icon: <StorageIcon />, description: 'Transform your pantry with custom shelving solutions' },
        { id: 'garage-storage', name: 'Garage Storage', icon: <StorageIcon />, description: 'Professional garage organization systems' },
        { id: 'home-office', name: 'Home Office Organization', icon: <StorageIcon />, description: 'Custom office storage and organization solutions' }
      ]
    }
  };

  // Service area data for Wisconsin (1-hour radius from Brookfield)
  const wisconsinServiceAreas = {
    'Milwaukee Metro': {
      description: 'Complete home services throughout the Milwaukee metropolitan area',
      areaCodes: ['414', '262'],
      zipCodes: ['53005', '53012', '53018', '53022', '53024', '53027', '53029', '53033', '53037', '53045', '53051', '53056', '53066', '53072', '53074', '53076', '53089', '53090', '53092', '53097', '53102', '53108', '53110', '53114', '53118', '53119', '53120', '53122', '53129', '53130', '53132', '53140', '53141', '53142', '53144', '53146', '53149', '53150', '53151', '53154', '53156', '53158', '53168', '53172', '53177', '53178', '53179', '53181', '53186', '53188', '53189', '53190', '53194', '53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53263', '53274', '53278', '53288', '53290', '53293', '53295']
    },
    'Waukesha County': {
      description: 'Professional services throughout Waukesha County communities',
      areaCodes: ['262'],
      zipCodes: ['53018', '53029', '53045', '53066', '53072', '53089', '53090', '53097', '53108', '53114', '53118', '53119', '53120', '53129', '53130', '53132', '53140', '53146', '53149', '53150', '53151', '53154', '53156', '53158', '53168', '53172', '53177', '53178', '53179', '53181', '53186', '53188', '53189', '53190', '53194']
    },
    'Jefferson County': {
      description: 'Serving Jefferson County with professional home services',
      areaCodes: ['920', '262'],
      zipCodes: ['53022', '53027', '53033', '53037', '53051', '53056', '53076', '53102', '53110', '53122', '53141', '53142', '53144']
    },
    'Dodge County': {
      description: 'Professional home services in Dodge County communities',
      areaCodes: ['920'],
      zipCodes: ['53012', '53024', '53074', '53092']
    }
  };

  // Sample reviews data
  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'Brookfield, WI',
      rating: 5,
      text: 'Exceptional service from start to finish. The radon mitigation system was installed professionally and our levels dropped significantly. Highly recommend!',
      date: '2 weeks ago',
      service: 'Radon Mitigation'
    },
    {
      name: 'Mike Chen',
      location: 'Waukesha, WI',
      rating: 5,
      text: 'The AeroSeal duct sealing made a huge difference in our home\'s energy efficiency. Professional team and great results.',
      date: '1 month ago',
      service: 'Duct Cleaning & AeroSeal'
    },
    {
      name: 'Jennifer Martinez',
      location: 'Milwaukee, WI',
      rating: 5,
      text: 'Beautiful concrete coating in our garage. Looks amazing and the team was professional throughout the entire process.',
      date: '3 weeks ago',
      service: 'Concrete Coatings'
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Handle brand switching
  const handleBrandSwitch = (brandKey) => {
    setCurrentBrand(brandKey);
    setShowBrandSwitcher(false);
    // Scroll to top when switching brands
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle service navigation
  const handleServiceClick = (serviceId) => {
    // Navigate to service page (scroll to top)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowServicesDropdown(false);
    setShowMobileNav(false);
  };

  // Handle state navigation
  const handleStateClick = (state) => {
    // Navigate to state page (scroll to top)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowServiceAreasDropdown(false);
    setShowMobileNav(false);
  };

  // Toggle zip code expansion
  const toggleZipCodes = (areaKey) => {
    setExpandedZipCodes(prev => ({
      ...prev,
      [areaKey]: !prev[areaKey]
    }));
  };

  // Handle financing navigation
  const handleFinancingClick = () => {
    // Navigate to financing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get current brand data
  const brand = brands[currentBrand];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setShowServicesDropdown(false);
        setShowServiceAreasDropdown(false);
      }
      if (!event.target.closest('.brand-switcher')) {
        setShowBrandSwitcher(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`App ${currentBrand}-brand`} role="main">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link" aria-label="Skip to main content">
        Skip to main content
      </a>

      {/* Brand Switcher Bar */}
      <div className="brand-switcher-bar" role="banner">
        <div className="brand-switcher-container">
          <div className="brand-switcher">
            <button
              className="brand-switcher-trigger"
              onClick={() => setShowBrandSwitcher(!showBrandSwitcher)}
              aria-expanded={showBrandSwitcher}
              aria-haspopup="true"
              aria-label="Switch between our family of brands"
            >
              Our Brands
              {showBrandSwitcher ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {showBrandSwitcher && (
              <div className="brand-switcher-menu" role="menu">
                <button
                  className={`brand-option ${currentBrand === 'lifetime' ? 'active' : ''}`}
                  onClick={() => handleBrandSwitch('lifetime')}
                  role="menuitem"
                  aria-label="Switch to Lifetime Home Services"
                >
                  <strong>Lifetime Home Services</strong>
                  <span>Radon • Duct Cleaning • Floor Coatings • Electrical • Handyman</span>
                </button>
                <button
                  className={`brand-option ${currentBrand === 'america' ? 'active' : ''}`}
                  onClick={() => handleBrandSwitch('america')}
                  role="menuitem"
                  aria-label="Switch to America In-Home"
                >
                  <strong>America In-Home</strong>
                  <span>Smart Home Automation • Security Systems • Control4 Integration</span>
                </button>
                <button
                  className={`brand-option ${currentBrand === 'closets' ? 'active' : ''}`}
                  onClick={() => handleBrandSwitch('closets')}
                  role="menuitem"
                  aria-label="Switch to Closet Concepts"
                >
                  <strong>Closet Concepts</strong>
                  <span>Custom Closets • Pantry Organization • Garage Storage • Home Office</span>
                </button>
              </div>
            )}
          </div>
          <div className="brand-switcher-info">
            Switch between our family of brands for specialized services
          </div>
        </div>
      </div>

      {/* Professional Header */}
      <header className="professional-header" role="banner">
        <div className="header-container">
          <div className="brand-section" onClick={handleLogoClick} role="button" tabIndex="0" aria-label="Go to homepage">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="lifetime-logo-enhanced"
            />
            <div className="company-info">
              <h1 className="company-name-enhanced">{brand.name}</h1>
              <p className="company-tagline">{brand.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="navigation-section desktop-only" role="navigation" aria-label="Main navigation">
            <div className="main-navigation">
              <a href="#home" className="active" aria-label="Home page">Home</a>
              
              <div className="nav-dropdown">
                <button
                  className="dropdown-trigger"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  aria-expanded={showServicesDropdown}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  Services
                  {showServicesDropdown ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {showServicesDropdown && (
                  <div className="dropdown-menu" role="menu">
                    {brand.services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        role="menuitem"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        {service.icon}
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="nav-dropdown">
                <button
                  className="dropdown-trigger"
                  onClick={() => setShowServiceAreasDropdown(!showServiceAreasDropdown)}
                  aria-expanded={showServiceAreasDropdown}
                  aria-haspopup="true"
                  aria-label="Service areas menu"
                >
                  Service Areas
                  {showServiceAreasDropdown ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {showServiceAreasDropdown && (
                  <div className="dropdown-menu" role="menu">
                    <button
                      onClick={() => handleStateClick('wisconsin')}
                      role="menuitem"
                      aria-label="Wisconsin service areas"
                    >
                      <LocationIcon />
                      Wisconsin
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={handleFinancingClick}
                aria-label="Financing options"
              >
                Financing
              </button>
            </div>
          </nav>

          {/* Header Contact */}
          <div className="header-contact desktop-only">
            <div className="phone-numbers">
              <button
                className="phone-header"
                onClick={() => setShowPhonePopup(true)}
                aria-label="Call us at (262) 955-5701"
              >
                <PhoneIcon />
                (262) 955-5701
              </button>
              <div className="toll-free-label">Call Now for Service</div>
            </div>
            <button
              className="quote-btn-header"
              onClick={() => setShowContactModal(true)}
              aria-label="Get free estimate"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hamburger-menu-btn mobile-only"
            onClick={() => setShowMobileNav(true)}
            aria-label="Open mobile menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {showMobileNav && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-navigation">
            <div className="mobile-nav-header">
              <h3>{brand.name}</h3>
              <button
                className="close-mobile-nav"
                onClick={() => setShowMobileNav(false)}
                aria-label="Close mobile menu"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="mobile-nav-links">
              <div className="mobile-nav-section">
                <h4>Services</h4>
                {brand.services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    aria-label={`Learn more about ${service.name}`}
                  >
                    {service.icon}
                    {service.name}
                  </button>
                ))}
              </div>
              <div className="mobile-nav-section">
                <h4>Service Areas</h4>
                <button
                  onClick={() => handleStateClick('wisconsin')}
                  aria-label="Wisconsin service areas"
                >
                  <LocationIcon />
                  Wisconsin
                </button>
              </div>
            </div>
            <div className="mobile-nav-footer">
              <button
                className="mobile-contact-btn"
                onClick={() => {
                  setShowContactModal(true);
                  setShowMobileNav(false);
                }}
                aria-label="Get free estimate"
              >
                <PhoneIcon />
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content">
        {/* Premium Hero Section - Full Width */}
        <section className="premium-hero-fullwidth" role="banner" aria-label="Hero section">
          <div className="hero-background-image" style={{ backgroundImage: `url(${brand.heroImage})` }} aria-hidden="true"></div>
          <div className="hero-overlay-premium" aria-hidden="true"></div>
          <div className="hero-content-fullwidth">
            <div className="hero-badge-homepage">Wisconsin's Premier Home Services</div>
            <h2 className="hero-title-fullwidth">
              Professional Home Services with <span className="hero-accent">Lifetime Results</span>
            </h2>
            <p className="hero-subtitle-fullwidth">
              {currentBrand === 'lifetime' && 'Complete home services including radon testing, duct cleaning, electrical, handyman, and premium floor coatings.'}
              {currentBrand === 'america' && 'Advanced smart home automation, security systems, and Control4 integration for modern living.'}
              {currentBrand === 'closets' && 'Custom organization solutions for closets, pantries, garages, and home offices with premium materials.'}
            </p>
            <div className="hero-buttons-fullwidth">
              <button
                className="btn-primary-hero"
                onClick={() => setShowContactModal(true)}
                aria-label="Get free estimate"
              >
                <CheckIcon />
                Get Free Estimate
              </button>
              <button
                className="btn-secondary-hero"
                onClick={() => setShowPhonePopup(true)}
                aria-label="Call (262) 955-5701"
              >
                <PhoneIcon />
                Call (262) 955-5701
              </button>
              <a
                href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1"
                className="btn-financing-hero"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Financing available - opens in new window"
              >
                <span>💳</span>
                Financing Available
              </a>
            </div>
          </div>
        </section>

        {/* Brand Summary Section */}
        <section className="brand-summary-section-premium" aria-label="Brand summary">
          <div className="brand-summary-container">
            <h2>Why Choose {brand.name}?</h2>
            <p className="brand-summary-text">
              {currentBrand === 'lifetime' && 'With over a decade of experience serving Wisconsin homeowners, we provide comprehensive home services with lifetime warranties. Our EPA-certified professionals, licensed electricians, and skilled craftsmen deliver exceptional results you can trust.'}
              {currentBrand === 'america' && 'Transform your home into a smart, secure living space with our advanced automation and security solutions. Our certified technicians specialize in Control4 integration and comprehensive security systems for complete peace of mind.'}
              {currentBrand === 'closets' && 'Since 1987, we\'ve been creating custom organization solutions that maximize space and enhance your lifestyle. Our premium materials, professional installation, and lifetime warranties ensure your investment lasts for generations.'}
            </p>
          </div>
        </section>

        {/* Premium Services Section - Redesigned */}
        <section className="services-section-premium-redesigned" aria-label="Our services">
          <div className="container">
            <h2 className="section-title-premium">Our Professional Services</h2>
            <p className="section-description">
              {currentBrand === 'lifetime' && 'Comprehensive home services with lifetime warranties and professional results.'}
              {currentBrand === 'america' && 'Advanced smart home and security solutions for modern living.'}
              {currentBrand === 'closets' && 'Custom organization solutions designed to maximize your space.'}
            </p>

            <div className="services-grid-premium-redesigned">
              {brand.services.map((service, index) => (
                <div key={service.id} className="service-card-premium-redesigned" role="article">
                  <div className="service-image-container">
                    {/* Service-specific images */}
                    {service.id === 'radon-testing' && (
                      <img
                        src="/airthings-corentium-pro.jpg"
                        alt="Airthings Corentium Pro radon testing device"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'duct-cleaning' && (
                      <img
                        src="/duct-cleaning-professional.jpg"
                        alt="Professional duct cleaning service"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'concrete-coatings' && (
                      <img
                        src="/premium-garage-coating.jpg"
                        alt="Premium garage floor coating"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'smart-home' && (
                      <img
                        src="/america-smart-home-hero.jpg"
                        alt="Smart home automation system"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'security' && (
                      <img
                        src="/america-security-hero.jpg"
                        alt="Home security system installation"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'control4' && (
                      <img
                        src="/america-control4-hero.jpg"
                        alt="Control4 home automation system"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'custom-closets' && (
                      <img
                        src="/closets-luxury-hero.jpg"
                        alt="Luxury custom closet design"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'pantry-organization' && (
                      <img
                        src="/closets-pantry-hero.jpg"
                        alt="Custom pantry organization system"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'garage-storage' && (
                      <img
                        src="/closets-garage-hero.jpg"
                        alt="Professional garage storage organization"
                        className="service-image-premium"
                      />
                    )}
                    {service.id === 'home-office' && (
                      <div className="service-placeholder-image home-office">
                        <StorageIcon style={{ fontSize: '4rem' }} />
                      </div>
                    )}
                    {!['radon-testing', 'duct-cleaning', 'concrete-coatings', 'smart-home', 'security', 'control4', 'custom-closets', 'pantry-organization', 'garage-storage', 'home-office'].includes(service.id) && (
                      <div className={`service-placeholder-image ${service.id}`}>
                        <span style={{ fontSize: '4rem' }}>{service.icon}</span>
                      </div>
                    )}
                    <div className="service-overlay">
                      <span className="service-icon-large" style={{ fontSize: '4rem' }}>
                        {service.icon}
                      </span>
                    </div>
                  </div>
                  <div className="service-content-premium-redesigned">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    
                    {/* Service-specific features */}
                    <ul className="service-features">
                      {service.id === 'radon-testing' && (
                        <>
                          <li><CheckIcon /> 100% FREE testing - no hidden costs</li>
                          <li><CheckIcon /> EPA-certified professionals</li>
                          <li><CheckIcon /> Fast, accurate results</li>
                          <li><CheckIcon /> Professional equipment</li>
                        </>
                      )}
                      {service.id === 'duct-cleaning' && (
                        <>
                          <li><CheckIcon /> Professional duct cleaning</li>
                          <li><CheckIcon /> AeroSeal duct sealing</li>
                          <li><CheckIcon /> Improved air quality</li>
                          <li><CheckIcon /> Energy efficiency upgrades</li>
                        </>
                      )}
                      {service.id === 'smart-home' && (
                        <>
                          <li><CheckIcon /> Automated lighting control</li>
                          <li><CheckIcon /> Climate management</li>
                          <li><CheckIcon /> Smart locks and access</li>
                          <li><CheckIcon /> Voice control integration</li>
                        </>
                      )}
                      {service.id === 'security' && (
                        <>
                          <li><CheckIcon /> 24/7 professional monitoring</li>
                          <li><CheckIcon /> Smart camera systems</li>
                          <li><CheckIcon /> Mobile app control</li>
                          <li><CheckIcon /> Emergency response</li>
                        </>
                      )}
                      {service.id === 'custom-closets' && (
                        <>
                          <li><CheckIcon /> Custom design consultation</li>
                          <li><CheckIcon /> Premium materials</li>
                          <li><CheckIcon /> Professional installation</li>
                          <li><CheckIcon /> Lifetime warranty</li>
                        </>
                      )}
                      {service.id === 'pantry-organization' && (
                        <>
                          <li><CheckIcon /> Custom shelving systems</li>
                          <li><CheckIcon /> Pull-out drawers</li>
                          <li><CheckIcon /> Adjustable components</li>
                          <li><CheckIcon /> Easy access design</li>
                        </>
                      )}
                    </ul>

                    <button
                      className="service-btn-premium"
                      onClick={() => handleServiceClick(service.id)}
                      aria-label={`Learn more about ${service.name}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* America In-Home Video Sections */}
        {currentBrand === 'america' && (
          <section className="aih-video-showcase" aria-label="America In-Home video showcase">
            <div className="container">
              <h2 className="section-title-premium">See Our Professional Services</h2>
              
              {/* Web Banner Video */}
              <div className="video-container">
                <h3>America In-Home Professional Services</h3>
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/v8mkx8DbJg0"
                    title="America In-Home Web Banner"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    aria-label="America In-Home professional services video"
                  ></iframe>
                </div>
              </div>

              {/* Security Spot Video */}
              <div className="video-container">
                <h3>Security Systems Showcase</h3>
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/46YkzyAUCR8"
                    title="America In-Home Security 25-Spot"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    aria-label="America In-Home security systems video"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Google Reviews Section */}
        <section className="google-reviews-section-premium" aria-label="Customer reviews">
          <div className="container">
            <div className="reviews-header">
              <div>
                <h2 className="section-title-premium">What Our Customers Say</h2>
                <p className="section-description">Real reviews from satisfied Wisconsin homeowners</p>
              </div>
              <a
                href="https://www.google.com/search?q=lifetime+home+services+reviews"
                className="google-reviews-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View all Google reviews - opens in new window"
              >
                <span>⭐</span>
                View All Google Reviews
              </a>
            </div>

            <div className="reviews-carousel" role="region" aria-label="Customer reviews carousel">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`review-card-premium ${index === currentReviewIndex ? 'active' : ''}`}
                  role="article"
                  aria-label={`Review by ${review.name}`}
                >
                  <div className="review-stars" aria-label={`${review.rating} star rating`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="reviews-indicators" role="tablist" aria-label="Review navigation">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentReviewIndex ? 'active' : ''}`}
                  onClick={() => setCurrentReviewIndex(index)}
                  role="tab"
                  aria-selected={index === currentReviewIndex}
                  aria-label={`View review ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section - Wisconsin Only */}
        <section className="service-areas-section-premium" aria-label="Service areas">
          <div className="container">
            <h2 className="section-title-premium">Wisconsin Service Areas</h2>
            <p className="section-description">
              Professional {currentBrand === 'lifetime' ? 'home services' : currentBrand === 'america' ? 'smart home and security services' : 'organization solutions'} within 1 hour of Brookfield, WI
            </p>

            <div className="service-areas-grid">
              {Object.entries(wisconsinServiceAreas).map(([areaName, areaData]) => (
                <div key={areaName} className="service-area-card" role="article">
                  <h3>{areaName}</h3>
                  <p>{areaData.description}</p>
                  
                  <div className="area-codes-section">
                    <h4>Area Codes:</h4>
                    <div className="area-codes">
                      {areaData.areaCodes.map(code => (
                        <span key={code} className="area-code">({code})</span>
                      ))}
                    </div>
                  </div>

                  <div className="zip-codes-section">
                    <h4>Zip Codes Served:</h4>
                    <div className="zip-codes">
                      {areaData.zipCodes.slice(0, 12).map(zip => (
                        <span key={zip} className="zip-code">{zip}</span>
                      ))}
                      {areaData.zipCodes.length > 12 && (
                        <button
                          className={`zip-more-btn ${expandedZipCodes[areaName] ? 'expanded' : ''}`}
                          onClick={() => toggleZipCodes(areaName)}
                          aria-expanded={expandedZipCodes[areaName]}
                          aria-label={`${expandedZipCodes[areaName] ? 'Hide' : 'Show'} ${areaData.zipCodes.length - 12} more zip codes`}
                        >
                          +{areaData.zipCodes.length - 12} more
                        </button>
                      )}
                    </div>
                    {expandedZipCodes[areaName] && (
                      <div className="zip-codes-expanded">
                        {areaData.zipCodes.slice(12).map(zip => (
                          <span key={zip} className="zip-code">{zip}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges Section - Horizontal Layout */}
        <section className="trust-badges-section-premium" aria-label="Trust and quality badges">
          <div className="container">
            <div className="trust-badges-horizontal">
              <div className="trust-badge-item">
                <div className="trust-badge-icon">🏆</div>
                <div className="trust-badge-content">
                  <h3>EPA Certified</h3>
                  <p>Certified radon professionals</p>
                </div>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">🛡️</div>
                <div className="trust-badge-content">
                  <h3>Licensed & Insured</h3>
                  <p>Full licensing and insurance coverage</p>
                </div>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">⭐</div>
                <div className="trust-badge-content">
                  <h3>5-Star Rated</h3>
                  <p>Consistently excellent customer reviews</p>
                </div>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">✅</div>
                <div className="trust-badge-content">
                  <h3>Lifetime Warranties</h3>
                  <p>Comprehensive warranty protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section-premium-homepage" aria-label="Call to action">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for your free estimate and experience the difference professional service makes.</p>
            <div className="cta-buttons-homepage">
              <button
                className="btn-primary-homepage"
                onClick={() => setShowContactModal(true)}
                aria-label="Get free estimate"
              >
                <CheckIcon />
                Get Free Estimate
              </button>
              <button
                className="btn-secondary-homepage"
                onClick={() => setShowPhonePopup(true)}
                aria-label="Call (262) 955-5701"
              >
                <PhoneIcon />
                Call (262) 955-5701
              </button>
            </div>
          </div>
        </section>

        {/* Explore Our Family of Brands - Moved to Bottom */}
        <section className="cross-brand-services" aria-label="Our family of brands">
          <div className="container">
            <h2>Explore Our Family of Brands</h2>
            <p>Specialized services across multiple brands to meet all your home needs</p>

            <div className="brand-services-grid">
              <div className={`brand-service-card lifetime ${currentBrand === 'lifetime' ? 'active' : ''}`} role="article">
                <div className="brand-service-icon">
                  <HomeIcon style={{ fontSize: '3rem' }} />
                </div>
                <h3>Lifetime Home Services</h3>
                <p>Complete home services including radon testing, duct cleaning, electrical work, and premium floor coatings.</p>
                <ul className="brand-service-list">
                  <li><CheckIcon /> FREE Radon Testing</li>
                  <li><CheckIcon /> Duct Cleaning & AeroSeal</li>
                  <li><CheckIcon /> Premium Floor Coatings</li>
                  <li><CheckIcon /> Licensed Electrical</li>
                  <li><CheckIcon /> Professional Handyman</li>
                </ul>
                <button
                  className="brand-switch-btn"
                  onClick={() => handleBrandSwitch('lifetime')}
                  aria-label="Explore Lifetime Home Services"
                >
                  Explore Lifetime Services
                </button>
              </div>

              <div className={`brand-service-card america ${currentBrand === 'america' ? 'active' : ''}`} role="article">
                <div className="brand-service-icon">
                  <ShieldIcon style={{ fontSize: '3rem' }} />
                </div>
                <h3>America In-Home</h3>
                <p>Advanced smart home automation and security systems for modern, connected living.</p>
                <ul className="brand-service-list">
                  <li><CheckIcon /> Smart Home Automation</li>
                  <li><CheckIcon /> Security Systems</li>
                  <li><CheckIcon /> Control4 Integration</li>
                  <li><CheckIcon /> 24/7 Monitoring</li>
                  <li><CheckIcon /> Mobile App Control</li>
                </ul>
                <button
                  className="brand-switch-btn"
                  onClick={() => handleBrandSwitch('america')}
                  aria-label="Explore America In-Home services"
                >
                  Explore Smart Home Services
                </button>
              </div>

              <div className={`brand-service-card closets ${currentBrand === 'closets' ? 'active' : ''}`} role="article">
                <div className="brand-service-icon">
                  <StorageIcon style={{ fontSize: '3rem' }} />
                </div>
                <h3>Closet Concepts</h3>
                <p>Custom organization solutions for closets, pantries, garages, and home offices since 1987.</p>
                <ul className="brand-service-list">
                  <li><CheckIcon /> Custom Closets</li>
                  <li><CheckIcon /> Pantry Organization</li>
                  <li><CheckIcon /> Garage Storage</li>
                  <li><CheckIcon /> Home Office Organization</li>
                  <li><CheckIcon /> Premium Materials</li>
                </ul>
                <button
                  className="brand-switch-btn"
                  onClick={() => handleBrandSwitch('closets')}
                  aria-label="Explore Closet Concepts services"
                >
                  Explore Organization Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer */}
      <footer className="professional-footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-slogan">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="footer-logo"
            />
            <h2>{brand.name}</h2>
            <p className="footer-slogan-text">{brand.tagline}</p>
          </div>

          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <PhoneIcon />
                  <span>(262) 955-5701</span>
                </div>
                <div className="contact-item">
                  <EmailIcon />
                  <span>info@lifetimehomeservices.com</span>
                </div>
                <div className="contact-item">
                  <LocationIcon />
                  <span>Serving WI, IL, MN, CO</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Our Services</h3>
              {brand.services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  aria-label={`Learn more about ${service.name}`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            <div className="footer-section">
              <h3>Service Areas</h3>
              <button
                onClick={() => handleStateClick('wisconsin')}
                aria-label="Wisconsin service areas"
              >
                Wisconsin
              </button>
            </div>

            <div className="footer-section">
              <h3>Trust & Quality</h3>
              <div className="trust-badges">
                <div className="trust-badge">
                  <CheckIcon />
                  <span>Licensed & Insured</span>
                </div>
                <div className="trust-badge">
                  <CheckIcon />
                  <span>EPA Certified</span>
                </div>
                <div className="trust-badge">
                  <CheckIcon />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 {brand.name}. All rights reserved. | Licensed & Insured | EPA Certified</p>
          </div>
        </div>
      </footer>

      {/* Phone Popup Modal */}
      {showPhonePopup && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Phone number">
          <div className="phone-popup-content">
            <div className="phone-popup-header">
              <h3>Call Us Now</h3>
              <button
                className="close-btn"
                onClick={() => setShowPhonePopup(false)}
                aria-label="Close phone popup"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="phone-popup-body">
              <div className="phone-number-display">
                <div className="large-phone-number">(262) 955-5701</div>
              </div>
              <p className="phone-popup-text">
                Call now to speak with our professional team and schedule your free estimate.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Contact form">
          <div className="modal-content-premium">
            <div className="modal-header-premium">
              <h2 className="modal-title">Get Your Free Estimate</h2>
              <button
                className="close-btn-premium"
                onClick={() => setShowContactModal(false)}
                aria-label="Close contact form"
              >
                <CloseIcon />
              </button>
            </div>
            <form className="contact-form-premium" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service" className="form-label">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  className="form-select"
                  required
                  aria-required="true"
                >
                  <option value="">Select a service...</option>
                  {brand.services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectDetails" className="form-label">Project Details</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn-premium"
                aria-label="Submit form to get free estimate"
              >
                Get Free Estimate
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

