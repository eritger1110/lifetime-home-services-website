import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [showZipCodes, setShowZipCodes] = useState({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // OPTION 1: Auto-detect brand based on domain (ONLY for home page)
  useEffect(() => {
    const domain = window.location.hostname;
    if (domain.includes('americainhome') && currentPage === 'home') {
      setCurrentBrand('aih');
    } else if (domain.includes('closetconcepts') && currentPage === 'home') {
      setCurrentBrand('closets');
    } else if (currentPage === 'home') {
      setCurrentBrand('lifetime');
    }
  }, [currentPage]);

  // Helper function to check if this is a landing page AND on home page
  const isLandingPage = () => {
    const domain = window.location.hostname;
    return (domain.includes('americainhome') || domain.includes('closetconcepts')) && currentPage === 'home';
  };

  // Enhanced Google Reviews with 5-star reviews only
  const googleReviews = [
    {
      text: "Lifetime Home Services did an amazing job with our radon mitigation system. Professional, efficient, and the results speak for themselves. Highly recommend!",
      author: "Sarah M.",
      stars: 5
    },
    {
      text: "Outstanding floor coating service! The Torginol system looks incredible and the lifetime warranty gives us peace of mind. Worth every penny.",
      author: "Mike R.",
      stars: 5
    },
    {
      text: "The team was professional, on time, and did excellent work on our custom closets. The quality is top-notch and exactly what we wanted.",
      author: "Jennifer L.",
      stars: 5
    },
    {
      text: "Best radon testing service in Wisconsin! Fast, accurate, and they explained everything clearly. Will definitely use them again.",
      author: "David K.",
      stars: 5
    },
    {
      text: "America In-Home installed our smart home system perfectly. Everything works flawlessly and the team was incredibly knowledgeable.",
      author: "Lisa T.",
      stars: 5
    }
  ];

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        prevIndex === googleReviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [googleReviews.length]);

  // Brand configurations
  const brandConfig = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      subtitle: 'Expert care for the spaces beneath, around, and within your home',
      logo: '/LifetimeLogo.png',
      heroImage: '/LifetimeHero.jpg',
      primaryColor: '#2c5aa0',
      services: ['radon-testing', 'radon-mitigation', 'duct-cleaning', 'floor-coatings'],
      description: 'Wisconsin\'s premier home services company specializing in radon testing, mitigation, duct cleaning, and floor coatings.'
    },
    aih: {
      name: 'America In-Home',
      tagline: 'Smart Home Technology. Professional Installation. Lifetime Support.',
      subtitle: 'Wisconsin\'s premier smart home automation and security specialists',
      logo: '/AmericaIn-HomeLogo.jpg',
      heroVideo: 'https://www.youtube.com/embed/NXCMKyYHl-o?autoplay=1&mute=1&loop=1&playlist=NXCMKyYHl-o&controls=0&showinfo=0&rel=0&modestbranding=1',
      primaryColor: '#1e3a8a',
      services: ['smart-home', 'security-systems', 'control4'],
      description: 'From Control4 integration to comprehensive security systems, we bring your home into the future with professional installation and ongoing support.'
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Custom Storage Solutions. Professional Design. Lifetime Quality.',
      subtitle: 'Transform your space with custom storage solutions designed for your lifestyle',
      logo: '/ClosetConcepts_Logo.jpg',
      heroImage: '/ClosetHero.jpg',
      primaryColor: '#8b5a3c',
      services: ['custom-closets', 'garage-storage', 'home-office', 'pantry-systems'],
      description: 'Custom closets, garage storage, home offices, and pantry systems designed and installed by Wisconsin\'s storage experts.'
    }
  };

  const navigateToBrand = (brand) => {
    setCurrentBrand(brand);
    setCurrentPage('home');
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowAreasDropdown(false);
  };

  const toggleZipCodes = (state) => {
    setShowZipCodes(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  // Landing page hero for America In-Home and Closet Concepts
  const renderLandingPageHero = () => {
    const config = brandConfig[currentBrand];
    
    if (currentBrand === 'aih') {
      return (
        <section className="landing-hero-section">
          <div className="landing-hero-video-container">
            <iframe
              src={config.heroVideo}
              title="America In-Home Smart Home Solutions"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="landing-hero-overlay">
            <div className="landing-hero-content">
              <img src={config.logo} alt={config.name} className="landing-hero-logo" />
              <h1>{config.name}</h1>
              <h2 className="landing-hero-tagline">{config.tagline}</h2>
              <p className="landing-hero-subtitle">{config.subtitle}</p>
              <div className="landing-hero-services">
                <h3>Our Smart Home Services:</h3>
                <ul>
                  <li>Control4 Home Automation</li>
                  <li>Security System Installation</li>
                  <li>Smart Lighting & Climate Control</li>
                  <li>Audio/Video Integration</li>
                </ul>
              </div>
              <a href="https://lifetimehomeservices.com" className="landing-cta-button">
                View All Services →
              </a>
            </div>
          </div>
        </section>
      );
    } else if (currentBrand === 'closets') {
      return (
        <section className="landing-hero-section">
          <div className="landing-hero-image-container">
            <img src={config.heroImage} alt="Custom Closet Solutions" className="landing-hero-image" />
          </div>
          <div className="landing-hero-overlay">
            <div className="landing-hero-content">
              <img src={config.logo} alt={config.name} className="landing-hero-logo" />
              <h1>{config.name}</h1>
              <h2 className="landing-hero-tagline">{config.tagline}</h2>
              <p className="landing-hero-subtitle">{config.subtitle}</p>
              <div className="landing-hero-services">
                <h3>Our Storage Solutions:</h3>
                <ul>
                  <li>Custom Walk-In Closets</li>
                  <li>Reach-In Closet Systems</li>
                  <li>Garage Storage Solutions</li>
                  <li>Home Office Organization</li>
                  <li>Pantry & Laundry Systems</li>
                </ul>
              </div>
              <a href="https://lifetimehomeservices.com" className="landing-cta-button">
                View All Services →
              </a>
            </div>
          </div>
        </section>
      );
    }
  };

  const renderHeader = () => (
    <header className="header">
      <div className="header-top">
        <div className="header-contact">
          <span>📞 (262) 955-5701</span>
          <span>📧 info@lifetimehomeservices.com</span>
        </div>
        <div className="header-social">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="Google">🔍</a>
        </div>
      </div>
      
      <div className="header-main">
        <div className="logo-container">
          <img 
            src={brandConfig[currentBrand].logo} 
            alt={brandConfig[currentBrand].name}
            className="logo"
            onClick={() => navigateToPage('home')}
          />
        </div>
        
        <nav className="main-nav">
          {/* CONDITIONAL BRAND LINKS - only show on main site */}
          {!isLandingPage() && (
            <div className="brand-links">
              <button 
                className={`brand-link ${currentBrand === 'lifetime' ? 'active' : ''}`}
                onClick={() => navigateToBrand('lifetime')}
              >
                Lifetime Home Services
              </button>
              <button 
                className={`brand-link ${currentBrand === 'aih' ? 'active' : ''}`}
                onClick={() => navigateToBrand('aih')}
              >
                America In-Home
              </button>
              <button 
                className={`brand-link ${currentBrand === 'closets' ? 'active' : ''}`}
                onClick={() => navigateToBrand('closets')}
              >
                Closet Concepts
              </button>
            </div>
          )}

          {/* LANDING PAGE CTA - only show on landing pages */}
          {isLandingPage() && (
            <div className="landing-cta">
              <a 
                href="https://lifetimehomeservices.com" 
                className="view-all-services-btn"
              >
                View All Services →
              </a>
            </div>
          )}
          
          <div className="nav-links">
            <div className="dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services ▼
              </button>
              {showServicesDropdown && (
                <div className="dropdown-menu">
                  <button onClick={() => navigateToPage('radon-testing')}>Radon Testing</button>
                  <button onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</button>
                  <button onClick={() => navigateToPage('duct-cleaning')}>Duct Cleaning/AeroSeal</button>
                  <button onClick={() => navigateToPage('floor-coatings')}>Concrete Floor Coatings</button>
                  <button onClick={() => navigateToPage('smart-home')}>Smart Home Automation</button>
                  <button onClick={() => navigateToPage('security-systems')}>Security Systems</button>
                  <button onClick={() => navigateToPage('control4')}>Control4 Integration</button>
                  <button onClick={() => navigateToPage('custom-closets')}>Custom Closets</button>
                  <button onClick={() => navigateToPage('garage-storage')}>Garage Storage</button>
                  <button onClick={() => navigateToPage('home-office')}>Home Office</button>
                  <button onClick={() => navigateToPage('pantry-systems')}>Pantry Systems</button>
                </div>
              )}
            </div>
            
            <div className="dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => setShowAreasDropdown(!showAreasDropdown)}
              >
                Service Areas ▼
              </button>
              {showAreasDropdown && (
                <div className="dropdown-menu">
                  <button onClick={() => navigateToPage('wisconsin')}>Wisconsin</button>
                  <button onClick={() => navigateToPage('illinois')}>Illinois</button>
                  <button onClick={() => navigateToPage('minnesota')}>Minnesota</button>
                  <button onClick={() => navigateToPage('colorado')}>Colorado</button>
                </div>
              )}
            </div>
            
            <button className="nav-link" onClick={() => navigateToPage('contact')}>Contact</button>
            <button className="nav-link" onClick={() => navigateToPage('financing')}>Financing</button>
            <span className="phone-number">(262) 955-5701</span>
          </div>
        </nav>
      </div>
    </header>
  );

  const renderHeroSection = () => {
    // Show landing page hero for landing pages
    if (isLandingPage()) {
      return renderLandingPageHero();
    }

    // Video hero for America In-Home
    if (currentBrand === 'aih' && currentPage === 'home') {
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              src={brandConfig[currentBrand].heroVideo}
              title="America In-Home Smart Home Solutions"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>{brandConfig[currentBrand].name}</h1>
              <h2 className="hero-tagline">{brandConfig[currentBrand].tagline}</h2>
              <p className="hero-subtitle">{brandConfig[currentBrand].subtitle}</p>
              <div className="hero-buttons">
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <button className="cta-button secondary" onClick={() => navigateToPage('smart-home')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Image hero for other brands
    return (
      <section className="hero-section">
        <div className="hero-image-container">
          <img 
            src={brandConfig[currentBrand].heroImage} 
            alt={`${brandConfig[currentBrand].name} Services`}
            className="hero-image"
          />
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{brandConfig[currentBrand].name}</h1>
            <h2 className="hero-tagline">{brandConfig[currentBrand].tagline}</h2>
            <p className="hero-subtitle">{brandConfig[currentBrand].subtitle}</p>
            <div className="hero-buttons">
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <button className="cta-button secondary" onClick={() => navigateToPage('radon-testing')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderServicesSection = () => {
    const currentServices = brandConfig[currentBrand].services;
    
    const serviceDetails = {
      'radon-testing': {
        title: 'Radon Testing',
        description: 'Professional radon testing with EPA-approved methods and accurate results.',
        image: '/RadonTesting.jpg',
        page: 'radon-testing'
      },
      'radon-mitigation': {
        title: 'Radon Mitigation',
        description: 'Expert radon mitigation systems to protect your family\'s health.',
        image: '/RadonMitigation.jpg',
        page: 'radon-mitigation'
      },
      'duct-cleaning': {
        title: 'Duct Cleaning/AeroSeal',
        description: 'Professional duct cleaning and AeroSeal duct sealing services.',
        image: '/AeroSealLogo.png',
        page: 'duct-cleaning'
      },
      'floor-coatings': {
        title: 'Concrete Floor Coatings',
        description: 'Durable Torginol floor coatings with lifetime warranty.',
        image: '/ConcreteFloorCoatings.jpg',
        page: 'floor-coatings'
      },
      'smart-home': {
        title: 'Smart Home Automation',
        description: 'Complete Control4 home automation systems for modern living.',
        image: '/HomeOffice2.png',
        page: 'smart-home'
      },
      'security-systems': {
        title: 'Security Systems',
        description: 'Professional security system installation and monitoring.',
        image: '/UltimateConstruction-SupplyGraph.png',
        page: 'security-systems'
      },
      'control4': {
        title: 'Control4 Integration',
        description: 'Advanced Control4 integration for seamless home automation.',
        image: '/C4_Dealer_Status_Badge_2025_Platinum.png',
        page: 'control4'
      },
      'custom-closets': {
        title: 'Custom Closets',
        description: 'Custom closet systems designed for your space and lifestyle.',
        image: '/Closet5.jpg',
        page: 'custom-closets'
      },
      'garage-storage': {
        title: 'Garage Storage',
        description: 'Professional garage organization and storage solutions.',
        image: '/Garage1.jpg',
        page: 'garage-storage'
      },
      'home-office': {
        title: 'Home Office',
        description: 'Custom home office solutions for productivity and organization.',
        image: '/HomeOffice4.jpg',
        page: 'home-office'
      },
      'pantry-systems': {
        title: 'Pantry Systems',
        description: 'Custom pantry organization systems for maximum efficiency.',
        image: '/Pantry1.jpeg',
        page: 'pantry-systems'
      }
    };

    return (
      <section className="services-section">
        <div className="services-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {currentServices.map((serviceKey) => {
              const service = serviceDetails[serviceKey];
              return (
                <div key={serviceKey} className="service-card" onClick={() => navigateToPage(service.page)}>
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Add contact link at bottom of home page for landing pages
  const renderHomeContactSection = () => {
    if (!isLandingPage() || currentPage !== 'home') return null;

    return (
      <section className="home-contact-section">
        <div className="home-contact-content">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free consultation and estimate</p>
          <a href="https://lifetimehomeservices.com/contact" className="contact-cta-button">
            Contact Us Today
          </a>
        </div>
      </section>
    );
  };

  const renderGoogleReviews = () => (
    <section className="google-reviews-section">
      <div className="reviews-container">
        <h2>What Our Customers Say</h2>
        <div className="review-carousel">
          <div className="review-card">
            <div className="stars">
              {'★'.repeat(googleReviews[currentReviewIndex].stars)}
            </div>
            <p>"{googleReviews[currentReviewIndex].text}"</p>
            <span className="author">- {googleReviews[currentReviewIndex].author}</span>
          </div>
        </div>
        <div className="review-indicators">
          {googleReviews.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentReviewIndex ? 'active' : ''}`}
              onClick={() => setCurrentReviewIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );

  const renderRadonTestingPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Professional Radon Testing Services</h1>
          <p>EPA-approved testing methods with accurate, reliable results you can trust</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>What is Radon?</h2>
              <p>Radon is a colorless, odorless radioactive gas that comes from the natural breakdown of uranium in soil, rock, and water. It can enter your home through cracks in the foundation, gaps around pipes, and other openings.</p>
              
              <h3>Why Test for Radon?</h3>
              <p>Radon is the second leading cause of lung cancer in the United States, responsible for about 21,000 deaths each year. The only way to know if your home has dangerous radon levels is through professional testing.</p>

              <h3>Our Testing Process</h3>
              <div className="process-steps">
                <div className="step">
                  <h4>1. Initial Consultation</h4>
                  <p>We assess your home and explain the testing process</p>
                </div>
                <div className="step">
                  <h4>2. Professional Testing</h4>
                  <p>EPA-approved continuous monitoring for 48+ hours</p>
                </div>
                <div className="step">
                  <h4>3. Detailed Results</h4>
                  <p>Comprehensive report with recommendations</p>
                </div>
                <div className="step">
                  <h4>4. Mitigation Planning</h4>
                  <p>If needed, we design a custom mitigation system</p>
                </div>
              </div>

              <h3>Trusted Resources</h3>
              <div className="trusted-resources">
                <h4>Government & Health Organizations:</h4>
                <ul>
                  <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA – A Citizen's Guide to Radon</a></li>
                  <li><a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer">EPA – Radon: Health Risks</a></li>
                  <li><a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer">Wisconsin DHS – Radon Program</a></li>
                  <li><a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer">CDC – Radon Information Page</a></li>
                </ul>
                
                <h4>Industry Resources:</h4>
                <ul>
                  <li><a href="https://www.airthings.com/resources/what-is-radon" target="_blank" rel="noopener noreferrer">Airthings Blog – What is Radon?</a></li>
                  <li><a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer">RadonAway – What is Radon?</a></li>
                  <li><a href="https://www.youtube.com/watch?v=oSLf6kJW_CM" target="_blank" rel="noopener noreferrer">YouTube – Radon Mitigation System Animation</a></li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Your Home Tested</h3>
                <p>Professional radon testing starting at $150</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Testing
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Testing Image</h3>
                <div className="radon-testing-image">
                  <img src="/RadonTesting.jpg" alt="Professional Radon Testing Equipment" />
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Quick Facts</h3>
                <ul>
                  <li>1 in 15 homes has elevated radon</li>
                  <li>Testing takes 48+ hours</li>
                  <li>EPA action level: 4.0 pCi/L</li>
                  <li>Mitigation reduces levels by 99%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderRadonMitigationPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Expert Radon Mitigation Systems</h1>
          <p>Protect your family with professional radon reduction systems</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Radon Mitigation</h2>
              <p>When radon testing reveals levels at or above 4.0 pCi/L, the EPA recommends installing a radon mitigation system. Our certified professionals design and install custom systems that reduce radon levels by up to 99%.</p>

              <div className="video-section">
                <h3>How Radon Mitigation Works</h3>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/l4X1nNbKqNU?rel=0&modestbranding=1"
                    title="Radon Mitigation System Explanation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <h3>Types of Mitigation Systems</h3>
              <div className="mitigation-systems-grid">
                <div className="system-card">
                  <h4>Sub-Slab Depressurization</h4>
                  <p>Most common system that draws radon from beneath the foundation and vents it safely outside</p>
                </div>
                <div className="system-card">
                  <h4>Crawl Space Ventilation</h4>
                  <p>Increases air circulation in crawl spaces to reduce radon accumulation</p>
                </div>
                <div className="system-card">
                  <h4>Drain Tile Suction</h4>
                  <p>Utilizes existing perimeter drain system for radon removal</p>
                </div>
                <div className="system-card">
                  <h4>Block Wall Suction</h4>
                  <p>Removes radon from hollow concrete block foundation walls</p>
                </div>
              </div>

              <h3>Our Installation Process</h3>
              <div className="process-steps">
                <div className="step">
                  <h4>1. Site Assessment</h4>
                  <p>Detailed evaluation of your home's foundation and structure</p>
                </div>
                <div className="step">
                  <h4>2. System Design</h4>
                  <p>Custom mitigation system designed for your specific home</p>
                </div>
                <div className="step">
                  <h4>3. Professional Installation</h4>
                  <p>Certified installation with minimal disruption to your home</p>
                </div>
                <div className="step">
                  <h4>4. Post-Installation Testing</h4>
                  <p>Verification testing to ensure system effectiveness</p>
                </div>
              </div>

              <h3>Trusted Resources</h3>
              <div className="trusted-resources">
                <h4>Government & Health Organizations:</h4>
                <ul>
                  <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA – A Citizen's Guide to Radon</a></li>
                  <li><a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer">EPA – Radon: Health Risks</a></li>
                  <li><a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer">Wisconsin DHS – Radon Program</a></li>
                  <li><a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer">CDC – Radon Information Page</a></li>
                </ul>
                
                <h4>Industry Resources:</h4>
                <ul>
                  <li><a href="https://www.airthings.com/resources/what-is-radon" target="_blank" rel="noopener noreferrer">Airthings Blog – What is Radon?</a></li>
                  <li><a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer">RadonAway – What is Radon?</a></li>
                  <li><a href="https://www.youtube.com/watch?v=oSLf6kJW_CM" target="_blank" rel="noopener noreferrer">YouTube – Radon Mitigation System Animation</a></li>
                </ul>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Estimate</h3>
                <p>Professional mitigation system installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Request Quote
                </button>
              </div>

              <div className="sidebar-card">
                <h3>System Benefits</h3>
                <ul>
                  <li>Reduces radon by up to 99%</li>
                  <li>Increases home value</li>
                  <li>Protects family health</li>
                  <li>Professional installation</li>
                  <li>Lifetime warranty available</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Financing Available</h3>
                <p>As low as 0% financing available</p>
                <button className="financing-btn" onClick={() => navigateToPage('financing')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderDuctCleaningPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Professional Duct Cleaning & AeroSeal Services</h1>
          <p>Improve your home's air quality and energy efficiency</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Duct Cleaning & AeroSeal Duct Sealing</h2>
              <p>Professional duct cleaning removes dust, debris, and contaminants from your HVAC system, while AeroSeal technology seals leaks from the inside, improving efficiency and air quality.</p>

              <div className="video-section">
                <h3>AeroSeal Technology in Action</h3>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/K3JAR0dCNhc?rel=0&modestbranding=1"
                    title="AeroSeal Duct Sealing Process"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <h3>Our Services</h3>
              <div className="services-grid">
                <div className="service-item">
                  <h4>Professional Duct Cleaning</h4>
                  <p>Complete cleaning of supply and return ducts, registers, and HVAC components</p>
                </div>
                <div className="service-item">
                  <h4>AeroSeal Duct Sealing</h4>
                  <p>Revolutionary technology that seals duct leaks from the inside</p>
                </div>
                <div className="service-item">
                  <h4>Air Quality Testing</h4>
                  <p>Before and after testing to measure improvement in air quality</p>
                </div>
                <div className="service-item">
                  <h4>Energy Efficiency Analysis</h4>
                  <p>Evaluation of energy savings potential and system performance</p>
                </div>
              </div>

              <h3>Benefits of Our Services</h3>
              <ul>
                <li>Improved indoor air quality</li>
                <li>Reduced energy costs (up to 30% savings)</li>
                <li>Better HVAC system performance</li>
                <li>Reduced dust and allergens</li>
                <li>Extended equipment life</li>
              </ul>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>AeroSeal Official</h3>
                <div className="aeroseal-logo">
                  <img src="/AeroSealLogo.png" alt="AeroSeal Technology" />
                </div>
                <p>We are certified AeroSeal contractors</p>
                <a href="https://aeroseal.com/" target="_blank" rel="noopener noreferrer" className="external-link">
                  Visit AeroSeal.com →
                </a>
              </div>

              <div className="sidebar-card">
                <h3>Get Free Estimate</h3>
                <p>Professional duct cleaning and sealing services</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Service
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Service Areas</h3>
                <p>Wisconsin • Illinois • Minnesota • Colorado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderFloorCoatingsPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Premium Concrete Floor Coatings</h1>
          <p>Durable Torginol polyaspartic floor systems with lifetime warranty</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Floor Coating Installation</h2>
              <p>Transform your garage, basement, or commercial space with our premium Torginol polyaspartic floor coating systems. Our professional installation includes surface preparation, primer, base coat, decorative flakes, and protective topcoat.</p>

              <h3>Why Choose Polyaspartic Over Epoxy?</h3>
              <div className="comparison-grid">
                <div className="comparison-item">
                  <h4>Polyaspartic Advantages</h4>
                  <ul>
                    <li>Fast cure time (same day use)</li>
                    <li>UV stable (won't yellow)</li>
                    <li>Flexible and crack-resistant</li>
                    <li>Chemical and stain resistant</li>
                    <li>Temperature tolerant</li>
                  </ul>
                </div>
                <div className="comparison-item">
                  <h4>Epoxy Limitations</h4>
                  <ul>
                    <li>Slow cure (3-7 days)</li>
                    <li>Yellows over time</li>
                    <li>Brittle when cured</li>
                    <li>Limited chemical resistance</li>
                    <li>Temperature sensitive</li>
                  </ul>
                </div>
              </div>

              <h3>Installation Process</h3>
              <div className="process-timeline">
                <div className="timeline-item">
                  <h4>Day 1: Surface Preparation</h4>
                  <p>Diamond grinding, crack repair, and thorough cleaning</p>
                </div>
                <div className="timeline-item">
                  <h4>Day 2: Base Application</h4>
                  <p>Primer and base coat application with decorative flakes</p>
                </div>
                <div className="timeline-item">
                  <h4>Day 3: Topcoat & Finish</h4>
                  <p>Protective topcoat application and final inspection</p>
                </div>
              </div>

              <h3>View Our Work</h3>
              <div className="direct-gallery">
                <div className="gallery-item">
                  <img src="/Before1.jpg" alt="Garage Floor Before Coating" />
                  <p>Before: Stained concrete garage floor</p>
                </div>
                <div className="gallery-item">
                  <img src="/after1.jpg" alt="Garage Floor After Coating" />
                  <p>After: Beautiful polyaspartic coating</p>
                </div>
                <div className="gallery-item">
                  <img src="/Before2.jpg" alt="Basement Floor Before" />
                  <p>Before: Worn basement concrete</p>
                </div>
                <div className="gallery-item">
                  <img src="/after2.jpg" alt="Basement Floor After" />
                  <p>After: Stunning finished basement</p>
                </div>
                <div className="gallery-item">
                  <img src="/Before3.jpg" alt="Commercial Floor Before" />
                  <p>Before: Industrial concrete floor</p>
                </div>
                <div className="gallery-item">
                  <img src="/after3.jpg" alt="Commercial Floor After" />
                  <p>After: Professional coating system</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Estimate</h3>
                <p>Professional floor coating installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Request Quote
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Lifetime Warranty</h3>
                <p>We stand behind our work with a comprehensive lifetime warranty on materials and workmanship.</p>
              </div>

              <div className="sidebar-card">
                <h3>Color Options</h3>
                <p>Choose from dozens of color combinations and decorative flake options to match your style.</p>
              </div>

              <div className="sidebar-card">
                <h3>Financing Available</h3>
                <p>As low as 0% financing available</p>
                <button className="financing-btn" onClick={() => navigateToPage('financing')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSmartHomePage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Smart Home Automation</h1>
          <p>Complete Control4 home automation systems for modern living</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Smart Home Installation</h2>
              <p>Transform your home with intelligent automation that learns your preferences and simplifies your daily routines. Our certified technicians design and install comprehensive smart home systems tailored to your lifestyle.</p>

              <h3>Smart Home Features</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>Lighting Control</h4>
                  <p>Automated lighting scenes, dimming, and scheduling</p>
                </div>
                <div className="feature-item">
                  <h4>Climate Control</h4>
                  <p>Smart thermostats and HVAC integration</p>
                </div>
                <div className="feature-item">
                  <h4>Audio/Video</h4>
                  <p>Whole-home entertainment systems</p>
                </div>
                <div className="feature-item">
                  <h4>Security Integration</h4>
                  <p>Cameras, alarms, and access control</p>
                </div>
                <div className="feature-item">
                  <h4>Voice Control</h4>
                  <p>Amazon Alexa and Google Assistant integration</p>
                </div>
                <div className="feature-item">
                  <h4>Mobile App</h4>
                  <p>Control everything from your smartphone</p>
                </div>
              </div>

              <h3>Popular Automation Scenes</h3>
              <ul>
                <li><strong>Good Morning:</strong> Gradually raise lights, adjust temperature, start coffee maker</li>
                <li><strong>Leaving Home:</strong> Turn off lights, lock doors, arm security system</li>
                <li><strong>Movie Night:</strong> Dim lights, close shades, turn on entertainment system</li>
                <li><strong>Good Night:</strong> Turn off all lights, lock doors, set security system</li>
              </ul>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Consultation</h3>
                <p>Custom smart home design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Consultation
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Control4 Certified</h3>
                <img src="/C4_Dealer_Status_Badge_2025_Platinum.png" alt="Control4 Platinum Dealer" className="certification-badge" />
                <p>Authorized Control4 Platinum Dealer</p>
              </div>

              <div className="sidebar-card">
                <h3>Service Areas</h3>
                <p>Wisconsin • Illinois • Minnesota • Colorado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSecuritySystemsPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Professional Security Systems</h1>
          <p>Comprehensive security solutions for your home and family</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Complete Security Solutions</h2>
              <p>Protect your home and family with our professional security system installation and monitoring services. We design custom security solutions that integrate seamlessly with your smart home automation.</p>

              <h3>Security System Components</h3>
              <div className="security-grid">
                <div className="security-item">
                  <h4>Security Cameras</h4>
                  <p>High-definition indoor and outdoor cameras with night vision</p>
                </div>
                <div className="security-item">
                  <h4>Door & Window Sensors</h4>
                  <p>Wireless sensors for all entry points</p>
                </div>
                <div className="security-item">
                  <h4>Motion Detectors</h4>
                  <p>Advanced motion sensing technology</p>
                </div>
                <div className="security-item">
                  <h4>Smart Locks</h4>
                  <p>Keyless entry and remote access control</p>
                </div>
                <div className="security-item">
                  <h4>Control Panel</h4>
                  <p>Central hub with touchscreen interface</p>
                </div>
                <div className="security-item">
                  <h4>Mobile App</h4>
                  <p>Remote monitoring and control</p>
                </div>
              </div>

              <h3>Professional Monitoring</h3>
              <p>24/7 professional monitoring ensures rapid response to any security events. Our monitoring center immediately contacts emergency services when needed.</p>

              <div className="security-images">
                <div className="security-image-item">
                  <img src="/Securityfront.jpg" alt="Security System Front Panel" />
                  <p>Professional security control panel</p>
                </div>
                <div className="security-image-item">
                  <img src="/SecurityBack.jpg" alt="Security System Components" />
                  <p>Advanced security system components</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Security Assessment</h3>
                <p>Professional security system design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Assessment
                </button>
              </div>

              <div className="sidebar-card">
                <h3>System Benefits</h3>
                <ul>
                  <li>24/7 professional monitoring</li>
                  <li>Mobile app control</li>
                  <li>Smart home integration</li>
                  <li>Insurance discounts</li>
                  <li>Increased home value</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Financing Available</h3>
                <p>As low as 0% financing available</p>
                <button className="financing-btn" onClick={() => navigateToPage('financing')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderControl4Page = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Control4 Home Automation</h1>
          <p>Advanced Control4 integration for seamless home automation</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Authorized Control4 Platinum Dealer</h2>
              <p>We are an authorized Control4 Platinum Dealer, ensuring the highest level of expertise and service for your smart home installation. Control4 is the leading home automation platform, trusted by homeowners worldwide.</p>

              <div className="control4-badge-section">
                <img src="/C4_Dealer_Status_Badge_2025_Platinum.png" alt="Control4 Platinum Dealer 2025" className="control4-badge" />
                <div className="badge-info">
                  <h3>Authorized Platinum Dealer</h3>
                  <p>We are an authorized Control4 Platinum Dealer, ensuring the highest level of expertise and service for your smart home installation.</p>
                </div>
              </div>

              <h3>Control4 Capabilities</h3>
              <div className="control4-features">
                <div className="feature-category">
                  <h4>Entertainment</h4>
                  <ul>
                    <li>Multi-room audio and video distribution</li>
                    <li>Streaming service integration</li>
                    <li>Universal remote control</li>
                    <li>Home theater automation</li>
                  </ul>
                </div>
                <div className="feature-category">
                  <h4>Comfort</h4>
                  <ul>
                    <li>Intelligent climate control</li>
                    <li>Automated lighting scenes</li>
                    <li>Motorized window treatments</li>
                    <li>Pool and spa control</li>
                  </ul>
                </div>
                <div className="feature-category">
                  <h4>Security</h4>
                  <ul>
                    <li>Integrated security systems</li>
                    <li>Video surveillance</li>
                    <li>Smart door locks</li>
                    <li>Intercom systems</li>
                  </ul>
                </div>
                <div className="feature-category">
                  <h4>Convenience</h4>
                  <ul>
                    <li>Voice control integration</li>
                    <li>Mobile app control</li>
                    <li>Automated schedules</li>
                    <li>Energy management</li>
                  </ul>
                </div>
              </div>

              <h3>Why Choose Control4?</h3>
              <ul>
                <li><strong>Reliability:</strong> Enterprise-grade hardware and software</li>
                <li><strong>Scalability:</strong> Start small and expand over time</li>
                <li><strong>Integration:</strong> Works with 13,500+ third-party devices</li>
                <li><strong>Support:</strong> Professional installation and ongoing support</li>
                <li><strong>Innovation:</strong> Regular software updates and new features</li>
              </ul>

              <h3>Popular Control4 Projects</h3>
              <div className="project-examples">
                <div className="project-item">
                  <h4>Whole Home Audio</h4>
                  <p>Multi-room audio with streaming services and local music</p>
                </div>
                <div className="project-item">
                  <h4>Home Theater</h4>
                  <p>Complete theater automation with lighting and climate control</p>
                </div>
                <div className="project-item">
                  <h4>Lighting Control</h4>
                  <p>Automated lighting scenes and energy management</p>
                </div>
                <div className="project-item">
                  <h4>Security Integration</h4>
                  <p>Unified control of cameras, locks, and alarm systems</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Consultation</h3>
                <p>Custom Control4 system design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Consultation
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Control4 Benefits</h3>
                <ul>
                  <li>Single app control</li>
                  <li>Voice control ready</li>
                  <li>Energy savings</li>
                  <li>Increased home value</li>
                  <li>Professional support</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Financing Available</h3>
                <p>As low as 0% financing available</p>
                <button className="financing-btn" onClick={() => navigateToPage('financing')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCustomClosetsPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Custom Closet Systems</h1>
          <p>Transform your space with custom storage solutions designed for your lifestyle</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Closet Design & Installation</h2>
              <p>Maximize your storage space with custom closet systems designed specifically for your needs. Our professional designers create beautiful, functional storage solutions that transform any closet into an organized, efficient space.</p>

              <h3>Closet Types</h3>
              <div className="closet-types">
                <div className="closet-type">
                  <h4>Walk-In Closets</h4>
                  <p>Luxury walk-in closet systems with islands, seating, and premium finishes</p>
                </div>
                <div className="closet-type">
                  <h4>Reach-In Closets</h4>
                  <p>Maximize space in standard reach-in closets with smart storage solutions</p>
                </div>
                <div className="closet-type">
                  <h4>Master Bedroom</h4>
                  <p>His and hers closet systems with specialized storage for every need</p>
                </div>
                <div className="closet-type">
                  <h4>Kids' Closets</h4>
                  <p>Adjustable systems that grow with your children</p>
                </div>
              </div>

              <h3>View Our Work</h3>
              <div className="direct-gallery">
                <div className="gallery-item">
                  <img src="/Closet5.jpg" alt="Custom Walk-In Closet" />
                  <p>Luxury walk-in closet with island</p>
                </div>
                <div className="gallery-item">
                  <img src="/Closet3.jpg" alt="Reach-In Closet Organization" />
                  <p>Organized reach-in closet system</p>
                </div>
                <div className="gallery-item">
                  <img src="/ReachinCloset1.jpg" alt="Small Closet Maximized" />
                  <p>Small space, maximum storage</p>
                </div>
                <div className="gallery-item">
                  <img src="/IMG_1518.JPG" alt="Master Bedroom Closet" />
                  <p>Master bedroom closet design</p>
                </div>
                <div className="gallery-item">
                  <img src="/IMG_1521.JPG" alt="Custom Closet Details" />
                  <p>Custom storage details</p>
                </div>
                <div className="gallery-item">
                  <img src="/IMG_1429.JPG" alt="Closet Organization System" />
                  <p>Complete organization system</p>
                </div>
              </div>

              <h3>Design Process</h3>
              <div className="process-steps">
                <div className="step">
                  <h4>1. Free Consultation</h4>
                  <p>In-home design consultation and measurements</p>
                </div>
                <div className="step">
                  <h4>2. Custom Design</h4>
                  <p>3D design rendering with material and finish selection</p>
                </div>
                <div className="step">
                  <h4>3. Professional Installation</h4>
                  <p>Expert installation with minimal disruption</p>
                </div>
                <div className="step">
                  <h4>4. Final Walkthrough</h4>
                  <p>Quality inspection and organization tips</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Design Consultation</h3>
                <p>Custom closet design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Consultation
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Features & Options</h3>
                <ul>
                  <li>Adjustable shelving</li>
                  <li>Hanging rods (single & double)</li>
                  <li>Drawers and baskets</li>
                  <li>Shoe storage</li>
                  <li>Jewelry organizers</li>
                  <li>LED lighting</li>
                  <li>Mirrors and seating</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Lifetime Warranty</h3>
                <p>All closet systems include our comprehensive lifetime warranty on materials and workmanship.</p>
              </div>

              <div className="sidebar-card">
                <h3>Financing Available</h3>
                <p>As low as 0% financing available</p>
                <button className="financing-btn" onClick={() => navigateToPage('financing')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderGarageStoragePage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Garage Storage Solutions</h1>
          <p>Transform your garage into an organized, functional space</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Garage Organization</h2>
              <p>Reclaim your garage space with our custom storage solutions. From wall-mounted systems to overhead storage, we design and install garage organization systems that maximize every square foot.</p>

              <h3>Garage Storage Options</h3>
              <div className="storage-options">
                <div className="storage-option">
                  <h4>Wall Storage Systems</h4>
                  <p>Slatwall and hook systems for tools and equipment</p>
                </div>
                <div className="storage-option">
                  <h4>Overhead Storage</h4>
                  <p>Ceiling-mounted platforms for seasonal items</p>
                </div>
                <div className="storage-option">
                  <h4>Cabinets & Workbenches</h4>
                  <p>Custom cabinets and workstation solutions</p>
                </div>
                <div className="storage-option">
                  <h4>Sports Equipment Storage</h4>
                  <p>Specialized storage for bikes, golf clubs, and sports gear</p>
                </div>
              </div>

              <h3>View Our Garage Projects</h3>
              <div className="direct-gallery">
                <div className="gallery-item">
                  <img src="/Garage2.jpg" alt="Organized Garage Storage" />
                  <p>Complete garage organization system</p>
                </div>
                <div className="gallery-item">
                  <img src="/Garage1.jpg" alt="Garage Wall Storage" />
                  <p>Wall-mounted storage solutions</p>
                </div>
                <div className="gallery-item">
                  <img src="/IMG_1445.JPG" alt="Garage Workbench" />
                  <p>Custom workbench and storage</p>
                </div>
                <div className="gallery-item">
                  <img src="/IMG_1568.JPG" alt="Garage Organization" />
                  <p>Professional garage organization</p>
                </div>
                <div className="gallery-item">
                  <img src="/IMG_1686.JPG" alt="Garage Storage System" />
                  <p>Complete storage system installation</p>
                </div>
                <div className="gallery-item">
                  <img src="/ModelHome2.jpg" alt="Model Home Garage" />
                  <p>Model home garage design</p>
                </div>
              </div>

              <h3>Benefits of Garage Organization</h3>
              <ul>
                <li>Maximize available space</li>
                <li>Protect belongings from damage</li>
                <li>Easy access to stored items</li>
                <li>Improved home value</li>
                <li>Better use of garage for parking</li>
              </ul>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Garage Assessment</h3>
                <p>Custom garage storage design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Assessment
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Storage Solutions</h3>
                <ul>
                  <li>Slatwall systems</li>
                  <li>Overhead platforms</li>
                  <li>Tool organization</li>
                  <li>Sports equipment storage</li>
                  <li>Seasonal item storage</li>
                  <li>Workbench solutions</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Professional Installation</h3>
                <p>Expert installation ensures safety and maximizes storage capacity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderHomeOfficePage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Home Office Solutions</h1>
          <p>Custom home office design for productivity and organization</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Home Office Design</h2>
              <p>Create the perfect work-from-home environment with our custom home office solutions. From built-in desks to comprehensive storage systems, we design spaces that enhance productivity and organization.</p>

              <h3>Home Office Features</h3>
              <div className="office-features">
                <div className="office-feature">
                  <h4>Built-In Desks</h4>
                  <p>Custom desks designed for your space and work style</p>
                </div>
                <div className="office-feature">
                  <h4>Storage Solutions</h4>
                  <p>File storage, bookshelves, and organization systems</p>
                </div>
                <div className="office-feature">
                  <h4>Technology Integration</h4>
                  <p>Cable management and equipment storage</p>
                </div>
                <div className="office-feature">
                  <h4>Lighting Design</h4>
                  <p>Task lighting and ambient lighting solutions</p>
                </div>
              </div>

              <h3>View Our Home Office Projects</h3>
              <div className="direct-gallery">
                <div className="gallery-item">
                  <img src="/HomeOffice2.png" alt="Custom Home Office" />
                  <p>Custom built-in home office</p>
                </div>
                <div className="gallery-item">
                  <img src="/HomeOffice4.jpg" alt="Home Office Storage" />
                  <p>Home office with storage solutions</p>
                </div>
                <div className="gallery-item">
                  <img src="/HomeOffice5.jpg" alt="Modern Home Office" />
                  <p>Modern home office design</p>
                </div>
                <div className="gallery-item">
                  <img src="/HobbyRoom1.jpg" alt="Hobby Room Office" />
                  <p>Multi-purpose hobby and office space</p>
                </div>
                <div className="gallery-item">
                  <img src="/ModelHome4.jpg" alt="Model Home Office" />
                  <p>Model home office design</p>
                </div>
                <div className="gallery-item">
                  <img src="/ModelHome5.jpg" alt="Executive Home Office" />
                  <p>Executive home office setup</p>
                </div>
              </div>

              <h3>Design Considerations</h3>
              <ul>
                <li>Ergonomic workspace layout</li>
                <li>Adequate storage for files and supplies</li>
                <li>Proper lighting for computer work</li>
                <li>Cable management and technology needs</li>
                <li>Noise control and privacy</li>
                <li>Professional appearance for video calls</li>
              </ul>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Office Consultation</h3>
                <p>Custom home office design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Consultation
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Office Components</h3>
                <ul>
                  <li>Built-in desks</li>
                  <li>File storage systems</li>
                  <li>Bookshelves</li>
                  <li>Equipment storage</li>
                  <li>Cable management</li>
                  <li>Task lighting</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Productivity Benefits</h3>
                <p>A well-designed home office increases productivity and creates a professional work environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPantrySystemsPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Custom Pantry Systems</h1>
          <p>Maximize your kitchen storage with custom pantry organization</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Pantry Organization</h2>
              <p>Transform your pantry into an efficient, organized space with our custom storage solutions. From walk-in pantries to reach-in spaces, we design systems that maximize storage and improve accessibility.</p>

              <h3>Pantry Solutions</h3>
              <div className="pantry-solutions">
                <div className="pantry-solution">
                  <h4>Walk-In Pantries</h4>
                  <p>Complete organization systems for large pantry spaces</p>
                </div>
                <div className="pantry-solution">
                  <h4>Reach-In Pantries</h4>
                  <p>Maximize storage in standard pantry closets</p>
                </div>
                <div className="pantry-solution">
                  <h4>Butler's Pantries</h4>
                  <p>Elegant storage and prep space solutions</p>
                </div>
                <div className="pantry-solution">
                  <h4>Laundry Room Storage</h4>
                  <p>Combine pantry and laundry organization</p>
                </div>
              </div>

              <h3>View Our Pantry Projects</h3>
              <div className="direct-gallery">
                <div className="gallery-item">
                  <img src="/Pantry1.jpeg" alt="Custom Pantry Organization" />
                  <p>Custom pantry organization system</p>
                </div>
                <div className="gallery-item">
                  <img src="/Laundry1.jpg" alt="Laundry Room Storage" />
                  <p>Laundry room with pantry storage</p>
                </div>
                <div className="gallery-item">
                  <img src="/Laundry2.jpg" alt="Laundry Organization" />
                  <p>Complete laundry organization</p>
                </div>
                <div className="gallery-item">
                  <img src="/Laundry3.jpg" alt="Laundry Storage Solutions" />
                  <p>Laundry storage solutions</p>
                </div>
                <div className="gallery-item">
                  <img src="/Mudroom1.jpg" alt="Mudroom Storage" />
                  <p>Mudroom organization system</p>
                </div>
                <div className="gallery-item">
                  <img src="/Mudroom2.jpg" alt="Mudroom Solutions" />
                  <p>Complete mudroom solutions</p>
                </div>
              </div>

              <h3>Organization Features</h3>
              <ul>
                <li>Adjustable shelving for different sized items</li>
                <li>Pull-out drawers for easy access</li>
                <li>Specialized storage for small appliances</li>
                <li>Spice rack and condiment organization</li>
                <li>Bulk storage solutions</li>
                <li>Clear containers and labeling systems</li>
              </ul>
            </div>

            <div className="content-sidebar">
              <div className="sidebar-card">
                <h3>Get Free Pantry Assessment</h3>
                <p>Custom pantry design and installation</p>
                <button className="cta-button" onClick={() => navigateToPage('contact')}>
                  Schedule Assessment
                </button>
              </div>

              <div className="sidebar-card">
                <h3>Storage Features</h3>
                <ul>
                  <li>Adjustable shelving</li>
                  <li>Pull-out drawers</li>
                  <li>Spice organization</li>
                  <li>Appliance storage</li>
                  <li>Bulk item storage</li>
                  <li>Easy access design</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Benefits</h3>
                <p>Organized pantries reduce food waste, save time, and make meal planning easier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderStatePage = (state) => {
    const stateData = {
      wisconsin: {
        name: 'Wisconsin',
        description: 'Professional home services throughout Wisconsin',
        services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings', 'Smart Home Automation', 'Security Systems', 'Control4 Integration', 'Custom Closets', 'Garage Storage', 'Home Office', 'Pantry Systems'],
        zipCodes: '53001 53002 53003 53004 53005 53006 53007 53008 53009 53010 53011 53012 53013 53014 53015 53016 53017 53018 53019 53020 53021 53022 53023 53024 53025 53026 53027 53028 53029 53030 53031 53032 53033 53034 53035 53036 53037 53038 53039 53040 53041 53042 53043 53044 53045 53046 53047 53048 53049 53050 53051 53052 53053 53054 53055 53056 53057 53058 53059 53060 53061 53062 53063 53064 53065 53066 53067 53068 53069 53070 53071 53072 53073 53074 53075 53076 53077 53078 53079 53080 53081 53082 53083 53084 53085 53086 53087 53088 53089 53090 53091 53092 53093 53094 53095 53096 53097 53098 53099',
        areaCodes: '262 414 608 715 920'
      },
      illinois: {
        name: 'Illinois',
        description: 'Professional home services throughout Illinois',
        services: ['Radon Mitigation', 'Duct Cleaning/AeroSeal'],
        zipCodes: '60001 60002 60004 60005 60006 60007 60008 60009',
        areaCodes: '224 312 331 630 708 773 815 847 872'
      },
      minnesota: {
        name: 'Minnesota',
        description: 'Professional home services throughout Minnesota',
        services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal'],
        zipCodes: '55001 55002 55003 55004 55005 55006 55007 55008',
        areaCodes: '218 320 507 612 651 763 952'
      },
      colorado: {
        name: 'Colorado',
        description: 'Professional home services throughout Colorado',
        services: ['Radon Testing', 'Radon Mitigation'],
        zipCodes: '80001 80002 80003 80004 80005 80006 80007 80008',
        areaCodes: '303 719 720 970'
      }
    };

    const data = stateData[state];
    if (!data) return null;

    return (
      <div className="page-content">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>{data.name} Service Areas</h1>
            <p>{data.description}</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <h2>Services Available in {data.name}</h2>
            <div className="state-services">
              {data.services.map((service, index) => (
                <div key={index} className="state-service">{service}</div>
              ))}
            </div>

            <h2>Service Area Zip Codes</h2>
            <div className="zip-codes-section">
              <p>{data.zipCodes}</p>
              <button 
                className="show-all-btn"
                onClick={() => toggleZipCodes(state)}
              >
                {showZipCodes[state] ? 'Hide' : 'Show All'} Zip Codes
              </button>
            </div>

            <h2>Area Codes Served</h2>
            <p>{data.areaCodes}</p>

            <h2>Service in {data.name}</h2>
            <p>Professional home services throughout {data.name}.</p>

            <div className="state-cta">
              <button className="cta-button" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <p>Call: (262) 955-5701</p>
              <p>Email: info@lifetimehomeservices.com</p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderContactPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Lifetime Home Services</h1>
          <p>Get your free estimate today</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
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
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select id="state" name="state">
                      <option value="">Select State</option>
                      <option value="WI">Wisconsin</option>
                      <option value="IL">Illinois</option>
                      <option value="MN">Minnesota</option>
                      <option value="CO">Colorado</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service">
                    <option value="">Select Service</option>
                    <option value="radon-testing">Radon Testing</option>
                    <option value="radon-mitigation">Radon Mitigation</option>
                    <option value="duct-cleaning">Duct Cleaning/AeroSeal</option>
                    <option value="floor-coatings">Concrete Floor Coatings</option>
                    <option value="smart-home">Smart Home Automation</option>
                    <option value="security-systems">Security Systems</option>
                    <option value="control4">Control4 Integration</option>
                    <option value="custom-closets">Custom Closets</option>
                    <option value="garage-storage">Garage Storage</option>
                    <option value="home-office">Home Office</option>
                    <option value="pantry-systems">Pantry Systems</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <strong>Phone:</strong> (262) 955-5701
                </div>
                <div className="contact-item">
                  <strong>Email:</strong> info@lifetimehomeservices.com
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Business Hours</h3>
                <div className="hours-item">
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                </div>
                <div className="hours-item">
                  <strong>Saturday:</strong> By appointment only
                </div>
                <div className="hours-item">
                  <strong>Sunday:</strong> Closed
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Service Areas</h3>
                <p>Wisconsin • Illinois • Minnesota • Colorado</p>
                <p>Licensed & Insured</p>
              </div>

              <div className="contact-info-card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" aria-label="Facebook">Facebook</a>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Google">Google</a>
                </div>
              </div>

              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d-88.0!3d43.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAwJzAwLjAiTiA4OMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lifetime Home Services Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderFinancingPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Financing Options</h1>
          <p>As low as 0% financing available for qualified customers</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="financing-grid">
            <div className="financing-main">
              <h2>Flexible Financing Solutions</h2>
              <p>We understand that home improvements are a significant investment. That's why we offer flexible financing options to help make your project affordable with convenient monthly payments.</p>

              <h3>Financing Benefits</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>0% Interest Options</h4>
                  <p>Qualified customers can take advantage of 0% interest financing for up to 12 months</p>
                </div>
                <div className="benefit-item">
                  <h4>Extended Terms</h4>
                  <p>Longer payment terms available for larger projects</p>
                </div>
                <div className="benefit-item">
                  <h4>Quick Approval</h4>
                  <p>Fast and easy application process with quick approval decisions</p>
                </div>
                <div className="benefit-item">
                  <h4>No Prepayment Penalty</h4>
                  <p>Pay off your loan early without any additional fees</p>
                </div>
              </div>

              <h3>How It Works</h3>
              <div className="process-steps">
                <div className="step">
                  <h4>1. Get Your Estimate</h4>
                  <p>Schedule your free consultation and receive a detailed project estimate</p>
                </div>
                <div className="step">
                  <h4>2. Apply for Financing</h4>
                  <p>Complete our simple online application or apply during your consultation</p>
                </div>
                <div className="step">
                  <h4>3. Get Approved</h4>
                  <p>Receive your approval decision quickly, often within minutes</p>
                </div>
                <div className="step">
                  <h4>4. Start Your Project</h4>
                  <p>Begin your home improvement project with convenient monthly payments</p>
                </div>
              </div>

              <h3>Financing Options</h3>
              <div className="financing-options">
                <div className="financing-option">
                  <h4>12 Months Same as Cash</h4>
                  <p>0% interest if paid in full within 12 months</p>
                  <ul>
                    <li>No interest charges</li>
                    <li>No prepayment penalty</li>
                    <li>Perfect for smaller projects</li>
                  </ul>
                </div>
                <div className="financing-option">
                  <h4>Extended Payment Plans</h4>
                  <p>Low monthly payments with extended terms</p>
                  <ul>
                    <li>Terms up to 120 months</li>
                    <li>Competitive interest rates</li>
                    <li>Ideal for larger projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="financing-sidebar">
              <div className="financing-card">
                <h3>Apply for Financing</h3>
                <p>Get pre-approved in minutes</p>
                <button className="cta-button">Apply Now</button>
              </div>

              <div className="financing-card">
                <h3>Payment Calculator</h3>
                <p>Estimate your monthly payments</p>
                <div className="calculator">
                  <label>Project Amount: $</label>
                  <input type="number" placeholder="10000" />
                  <label>Term (months):</label>
                  <select>
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                    <option>48</option>
                    <option>60</option>
                  </select>
                  <button className="calc-button">Calculate</button>
                </div>
              </div>

              <div className="financing-card">
                <h3>Questions?</h3>
                <p>Our financing specialists are here to help</p>
                <button className="contact-button" onClick={() => navigateToPage('contact')}>
                  Contact Us
                </button>
              </div>

              <div className="financing-card">
                <h3>Credit Requirements</h3>
                <ul>
                  <li>Minimum credit score varies by program</li>
                  <li>Proof of income required</li>
                  <li>Valid government-issued ID</li>
                  <li>Bank account information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderFooter = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Phone: (262) 955-5701</p>
          <p>Email: info@lifetimehomeservices.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: By appointment only</p>
          <p>Sunday: Closed</p>
        </div>
        
        <div className="footer-section">
          <h3>Service Areas</h3>
          <p>Wisconsin • Illinois • Minnesota • Colorado</p>
          <p>Licensed & Insured</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Google">Google</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-brands">
          <p>America In-Home (formerly americainhome.com)</p>
          <p>Closet Concepts (formerly closetconcepts.com)</p>
        </div>
        <div className="footer-legal">
          <p>&copy; 2024 Lifetime Home Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    // Show landing page content ONLY for landing pages AND home page
    if (isLandingPage()) {
      return (
        <>
          {renderHeroSection()}
          {renderHomeContactSection()}
        </>
      );
    }

    // Regular page content for all other pages
    switch (currentPage) {
      case 'radon-testing':
        return renderRadonTestingPage();
      case 'radon-mitigation':
        return renderRadonMitigationPage();
      case 'duct-cleaning':
        return renderDuctCleaningPage();
      case 'floor-coatings':
        return renderFloorCoatingsPage();
      case 'smart-home':
        return renderSmartHomePage();
      case 'security-systems':
        return renderSecuritySystemsPage();
      case 'control4':
        return renderControl4Page();
      case 'custom-closets':
        return renderCustomClosetsPage();
      case 'garage-storage':
        return renderGarageStoragePage();
      case 'home-office':
        return renderHomeOfficePage();
      case 'pantry-systems':
        return renderPantrySystemsPage();
      case 'wisconsin':
      case 'illinois':
      case 'minnesota':
      case 'colorado':
        return renderStatePage(currentPage);
      case 'contact':
        return renderContactPage();
      case 'financing':
        return renderFinancingPage();
      default:
        return (
          <>
            {renderHeroSection()}
            {renderServicesSection()}
            {renderGoogleReviews()}
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </div>
  );
}

export default App;

