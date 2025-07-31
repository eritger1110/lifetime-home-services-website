import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServiceAreasDropdown, setShowServiceAreasDropdown] = useState(false);
  const [expandedZipCodes, setExpandedZipCodes] = useState({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-rotate Google Reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % 2); // 2 sets of 3 reviews each
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      logo: 'LifetimeHomeServicesLogo.png',
      primaryColor: '#2563eb',
      heroImage: 'lifetime-hero-house.jpg',
      heroVideo: null,
      services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings']
    },
    aih: {
      name: 'America In-Home',
      logo: 'AmericaIn-HomeLogo.jpg',
      primaryColor: '#b91c1c',
      heroImage: 'america-smart-home-hero.jpg',
      heroVideo: 'https://youtu.be/46YkzyAUCR8', // 25-second spot
      services: ['Security Systems', 'Control4 Integration', 'Smart Home Automation']
    },
    closets: {
      name: 'Closet Concepts',
      logo: 'ClosetConcepts_Logo.jpg',
      primaryColor: '#059669',
      heroImage: 'closets-luxury-hero.jpg',
      heroVideo: 'https://youtu.be/F-cmkRASFhQ', // Manufacturing video
      services: ['Custom Closets', 'Garage Storage', 'Home Office Organization', 'Pantry Systems']
    }
  };

  const currentBrandData = brands[currentBrand];

  const navigateToPage = (page, brand = null) => {
    if (brand && brand !== currentBrand) {
      setCurrentBrand(brand);
    }
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowServiceAreasDropdown(false);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setCurrentBrand('lifetime');
    window.scrollTo(0, 0);
  };

  const toggleZipCodes = (state) => {
    setExpandedZipCodes(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  // Google Reviews Data (5-star reviews only)
  const googleReviews = [
    [
      {
        text: "Lifetime Home Services provided exceptional radon mitigation service. Professional, thorough, and the results speak for themselves. Highly recommend!",
        author: "Sarah M.",
        stars: 5
      },
      {
        text: "Outstanding floor coating service! The polyaspartic finish looks amazing and the lifetime warranty gives us peace of mind. Top quality work.",
        author: "Mike R.",
        stars: 5
      },
      {
        text: "America In-Home installed our security system perfectly. Professional installation and great customer service throughout the process.",
        author: "Jennifer L.",
        stars: 5
      }
    ],
    [
      {
        text: "Closet Concepts transformed our master bedroom closet. Beautiful craftsmanship and attention to detail. Worth every penny!",
        author: "David K.",
        stars: 5
      },
      {
        text: "AeroSeal duct sealing made a huge difference in our home's efficiency. Professional service and noticeable results immediately.",
        author: "Lisa T.",
        stars: 5
      },
      {
        text: "Excellent radon testing service. Quick, professional, and detailed reporting. Gave us the information we needed to make informed decisions.",
        author: "Robert H.",
        stars: 5
      }
    ]
  ];

  const renderHeader = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src={currentBrandData.logo} 
            alt={currentBrandData.name}
            className="logo"
            onClick={navigateToHome}
          />
        </div>
        
        <nav className="main-nav">
          <div className="brand-links">
            <button 
              className={`brand-link ${currentBrand === 'lifetime' ? 'active' : ''}`}
              onClick={() => navigateToPage('home', 'lifetime')}
            >
              Lifetime Home Services
            </button>
            <button 
              className={`brand-link ${currentBrand === 'aih' ? 'active' : ''}`}
              onClick={() => navigateToPage('home', 'aih')}
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
          
          <div className="nav-links">
            <div className="dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services ▼
              </button>
              {showServicesDropdown && (
                <div className="dropdown-menu">
                  {currentBrand === 'lifetime' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('radon-testing')}>Radon Testing</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('duct-cleaning')}>Duct Cleaning</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('aeroseal')}>AeroSeal</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('floor-coatings')}>Floor Coatings</button>
                    </>
                  )}
                  {currentBrand === 'aih' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('security-systems')}>Security Systems</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('control4')}>Control4 Integration</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('smart-home')}>Smart Home Automation</button>
                    </>
                  )}
                  {currentBrand === 'closets' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('custom-closets')}>Custom Closets</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('garage-storage')}>Garage Storage</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('home-office')}>Home Office</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('pantry-systems')}>Pantry Systems</button>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowServiceAreasDropdown(!showServiceAreasDropdown)}
              >
                Service Areas ▼
              </button>
              {showServiceAreasDropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => navigateToPage('wisconsin')}>Wisconsin</button>
                  <button className="dropdown-item" onClick={() => navigateToPage('illinois')}>Illinois</button>
                  <button className="dropdown-item" onClick={() => navigateToPage('minnesota')}>Minnesota</button>
                  <button className="dropdown-item" onClick={() => navigateToPage('colorado')}>Colorado</button>
                </div>
              )}
            </div>
            
            <button className="nav-button" onClick={() => navigateToPage('contact')}>Contact</button>
            <button className="nav-button" onClick={() => navigateToPage('financing')}>Financing</button>
          </div>
        </nav>
        
        <div className="contact-info">
          <div className="phone">262-955-5701</div>
        </div>
      </div>
    </header>
  );

  const renderHeroSection = () => {
    if (currentBrandData.heroVideo && (currentBrand === 'aih' || currentBrand === 'closets')) {
      // Video hero for AIH and Closets
      const videoId = currentBrandData.heroVideo.includes('youtu.be') 
        ? currentBrandData.heroVideo.split('/').pop().split('?')[0]
        : currentBrandData.heroVideo.split('v=')[1]?.split('&')[0];
      
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              className="hero-video"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
              title={`${currentBrandData.name} Video`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="hero-content-overlay">
              <div className="hero-text-content">
                <h1 className="hero-title-large">
                  {currentBrand === 'lifetime' ? 'Lifetime Home Services' : currentBrandData.name}
                </h1>
                <h2 className="hero-subtitle-large">
                  {currentBrand === 'lifetime' 
                    ? 'Trusted Solutions. Lifetime Results.' 
                    : currentBrand === 'aih' 
                    ? 'Smart Home Technology & Security Solutions'
                    : 'Custom Storage Solutions, Made in USA'
                  }
                </h2>
                <p className="hero-description">
                  {currentBrand === 'lifetime' 
                    ? 'Expert care for the spaces beneath, around, and within your home'
                    : currentBrand === 'aih'
                    ? 'Professional installation of security systems and smart home automation'
                    : 'Handcrafted custom closets and storage solutions manufactured on-site'
                  }
                </p>
                <div className="hero-cta-buttons">
                  <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  {currentBrand === 'lifetime' && (
                    <button className="cta-button secondary large" onClick={() => navigateToPage('radon-testing')}>
                      Learn About Testing First
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      // Image hero for Lifetime and fallback
      return (
        <section className="hero-section-fullscreen">
          <div className="hero-background">
            <img 
              src={currentBrandData.heroImage} 
              alt={`${currentBrandData.name} Hero`}
              className="hero-image-fullscreen"
            />
          </div>
          <div className="hero-content-overlay">
            <div className="hero-text-content">
              <h1 className="hero-title-large">
                {currentBrand === 'lifetime' ? 'Lifetime Home Services' : currentBrandData.name}
              </h1>
              <h2 className="hero-subtitle-large">
                {currentBrand === 'lifetime' 
                  ? 'Trusted Solutions. Lifetime Results.' 
                  : currentBrand === 'aih' 
                  ? 'Smart Home Technology & Security Solutions'
                  : 'Custom Storage Solutions, Made in USA'
                }
              </h2>
              <p className="hero-description">
                {currentBrand === 'lifetime' 
                  ? 'Expert care for the spaces beneath, around, and within your home'
                  : currentBrand === 'aih'
                  ? 'Professional installation of security systems and smart home automation'
                  : 'Handcrafted custom closets and storage solutions manufactured on-site'
                }
              </p>
              <div className="hero-cta-buttons">
                <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                {currentBrand === 'lifetime' && (
                  <button className="cta-button secondary large" onClick={() => navigateToPage('radon-testing')}>
                    Learn About Testing First
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  const renderServicesSection = () => (
    <section className="services-section">
      <div className="section-background-logo"></div>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid-2x2">
          {currentBrand === 'lifetime' && (
            <>
              <div className="service-card">
                <div className="service-image">
                  <img src="professional-radon-monitor.jpg" alt="Free Radon Testing" />
                </div>
                <div className="service-content">
                  <h3>Free Radon Testing</h3>
                  <p>Professional radon testing with EPA-certified equipment and detailed reporting.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('radon-testing')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="radon-mitigation-system.jpg" alt="Radon Mitigation" />
                </div>
                <div className="service-content">
                  <h3>Radon Mitigation</h3>
                  <p>Complete radon mitigation systems with Festa fans and lifetime warranties.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('radon-mitigation')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="aeroseal-logo.png" alt="AeroSeal Duct Sealing" />
                </div>
                <div className="service-content">
                  <h3>AeroSeal Duct Sealing</h3>
                  <p>Revolutionary duct sealing technology that improves efficiency and air quality.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('aeroseal')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="professional-floor-coating.jpg" alt="Concrete Floor Coatings" />
                </div>
                <div className="service-content">
                  <h3>Concrete Floor Coatings</h3>
                  <p>Premium polyaspartic floor coatings with Torginol flakes and lifetime warranty.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('floor-coatings')}>
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )}
          
          {currentBrand === 'aih' && (
            <>
              <div className="service-card">
                <div className="service-image">
                  <img src="security-system-installation.jpg" alt="Security Systems" />
                </div>
                <div className="service-content">
                  <h3>Security Systems</h3>
                  <p>Professional security system installation with monitoring and smart features.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('security-systems')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="control4-smart-home.jpg" alt="Control4 Integration" />
                </div>
                <div className="service-content">
                  <h3>Control4 Integration</h3>
                  <p>Complete smart home automation with Control4 technology and professional setup.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('control4')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="ModelHome1.jpg" alt="Smart Home Automation" />
                </div>
                <div className="service-content">
                  <h3>Smart Home Automation</h3>
                  <p>Integrated smart home solutions for lighting, climate, and entertainment control.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('smart-home')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="ModelHome2.jpg" alt="Home Technology" />
                </div>
                <div className="service-content">
                  <h3>Home Technology</h3>
                  <p>Advanced home technology solutions for modern living and convenience.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('smart-home')}>
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )}
          
          {currentBrand === 'closets' && (
            <>
              <div className="service-card">
                <div className="service-image">
                  <img src="Closet3.jpg" alt="Custom Closets" />
                </div>
                <div className="service-content">
                  <h3>Custom Closets</h3>
                  <p>Luxury walk-in and reach-in closets designed and manufactured in Wisconsin.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('custom-closets')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="Garage1.jpg" alt="Garage Storage" />
                </div>
                <div className="service-content">
                  <h3>Garage Storage</h3>
                  <p>Organized garage storage solutions with custom cabinets and organization systems.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('garage-storage')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="HomeOffice4.jpg" alt="Home Office Organization" />
                </div>
                <div className="service-content">
                  <h3>Home Office Organization</h3>
                  <p>Custom home office storage and organization solutions for productivity.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('home-office')}>
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-image">
                  <img src="Pantry1.jpeg" alt="Pantry Systems" />
                </div>
                <div className="service-content">
                  <h3>Pantry Systems</h3>
                  <p>Custom pantry organization systems for maximum storage and accessibility.</p>
                  <button className="learn-more-btn" onClick={() => navigateToPage('pantry-systems')}>
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );

  const renderGoogleReviewsSection = () => (
    <section className="google-reviews-section">
      <div className="section-background-logo"></div>
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-carousel">
          {googleReviews[currentReviewIndex].map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">{'★'.repeat(review.stars)}</div>
              <p>"{review.text}"</p>
              <div className="reviewer">- {review.author}</div>
            </div>
          ))}
        </div>
        <div className="google-reviews-link">
          <a 
            href="https://www.google.com/search?q=Lifetime+Home+Services+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );

  const renderVideoShowcaseSection = () => {
    if (currentBrand === 'closets') {
      return (
        <section className="video-showcase-section">
          <div className="container">
            <h2 className="section-title">See Our Craftsmanship</h2>
            <div className="video-grid">
              <div className="video-item">
                <iframe
                  className="showcase-video"
                  src="https://www.youtube.com/embed/z1FnqXO_6h8"
                  title="Closet Installation Time-lapse"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>Professional Installation</h3>
              </div>
              <div className="video-item">
                <iframe
                  className="showcase-video"
                  src="https://www.youtube.com/embed/F-cmkRASFhQ"
                  title="Manufacturing Process"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>USA Manufacturing</h3>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return null;
  };

  const renderHomePage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      {renderHeroSection()}
      {renderServicesSection()}
      {renderVideoShowcaseSection()}
      {renderGoogleReviewsSection()}
      {renderFooter()}
    </div>
  );

  // Radon Testing Page with symmetrical layout
  const renderRadonTestingPage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Professional Radon Testing</h1>
            <p>Understanding radon levels in your home is the first step to protecting your family's health</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>What is Radon Testing?</h2>
              <p>Radon testing measures the amount of radon gas in your home's air. Radon is a colorless, odorless radioactive gas that comes from the natural breakdown of uranium in soil, rock, and water. It can enter your home through cracks in floors, walls, or foundations.</p>
              
              <h3>Why Test for Radon?</h3>
              <p>Radon is the second leading cause of lung cancer in the United States, responsible for about 21,000 deaths each year. The only way to know if your home has elevated radon levels is through professional testing.</p>
              
              <h3>Our Professional Testing Process</h3>
              <ul>
                <li><strong>EPA-Certified Equipment:</strong> We use professional-grade continuous radon monitors</li>
                <li><strong>Proper Placement:</strong> Devices placed in the lowest livable level of your home</li>
                <li><strong>Closed-House Conditions:</strong> 12-hour minimum closed-house conditions before and during testing</li>
                <li><strong>48-72 Hour Testing:</strong> Minimum testing period for accurate results</li>
                <li><strong>Detailed Reporting:</strong> Complete analysis with recommendations</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Understanding Radon Levels</h2>
              <p>Radon is measured in picocuries per liter (pCi/L). The EPA recommends taking action if radon levels are 4.0 pCi/L or higher.</p>
              
              <div className="radon-levels">
                <div className="level-card low">
                  <h4>0-2 pCi/L</h4>
                  <p>Low Risk - No action needed</p>
                </div>
                <div className="level-card moderate">
                  <h4>2-4 pCi/L</h4>
                  <p>Moderate Risk - Consider mitigation</p>
                </div>
                <div className="level-card high">
                  <h4>4-8 pCi/L</h4>
                  <p>High Risk - EPA recommends mitigation</p>
                </div>
                <div className="level-card very-high">
                  <h4>8+ pCi/L</h4>
                  <p>Very High Risk - Immediate action recommended</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>When Should You Test?</h2>
              <ul>
                <li><strong>Buying or Selling a Home:</strong> Essential part of home inspection process</li>
                <li><strong>New Construction:</strong> Test after moving in</li>
                <li><strong>After Home Renovations:</strong> Changes to foundation or ventilation</li>
                <li><strong>Every 2 Years:</strong> Regular testing recommended by EPA</li>
                <li><strong>Seasonal Changes:</strong> Levels can vary with weather and home usage</li>
              </ul>
              
              <h3>Best Testing Conditions</h3>
              <p>For the most accurate results, testing should be conducted during normal living conditions with windows and doors closed (except for normal entry and exit). Avoid testing during severe storms or unusual weather conditions.</p>
            </div>

            <div className="education-section">
              <h2>Professional vs. DIY Testing</h2>
              <p>While DIY test kits are available, professional testing offers several advantages:</p>
              
              <div className="system-types">
                <div className="system-type">
                  <h4>Professional Testing</h4>
                  <p>Continuous monitoring, tamper-resistant equipment, detailed analysis, and expert interpretation of results.</p>
                </div>
                <div className="system-type">
                  <h4>DIY Test Kits</h4>
                  <p>Lower cost but limited accuracy, potential for user error, and basic reporting without professional guidance.</p>
                </div>
              </div>
            </div>

            <div className="education-cta">
              <h2>Ready to Test Your Home?</h2>
              <p>Protect your family's health with professional radon testing. Our EPA-certified technicians provide accurate results and expert recommendations.</p>
              <div className="cta-buttons">
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Schedule Free Testing
                </button>
                <button className="cta-button secondary large" onClick={() => navigateToPage('radon-mitigation')}>
                  Learn About Mitigation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // Radon Mitigation Page with preserved Festa link and enhanced content
  const renderRadonMitigationPage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Professional Radon Mitigation</h1>
            <p>Effective radon reduction systems to protect your family's health and safety</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>What is Radon Mitigation?</h2>
              <p>Radon mitigation is the process of reducing radon gas levels in your home to safe levels. Think of it like installing a special fan system that sucks the radon gas from under your house before it can get inside where your family lives.</p>
              
              <h3>How Does Radon Get Into Your Home?</h3>
              <p>Imagine your house is like a big vacuum cleaner. When it's cold outside and warm inside, your house naturally pulls air up from the ground underneath. Unfortunately, this air often contains radon gas that comes from the soil. The radon finds tiny cracks and openings in your foundation and gets pulled into your home.</p>
              
              <h3>How Mitigation Systems Work</h3>
              <p>A radon mitigation system works like a stronger vacuum cleaner under your house. We install a special pipe system that collects the radon gas before it can enter your home and safely vents it outside above your roof where it can't hurt anyone.</p>
            </div>

            <div className="education-section">
              <h2>Types of Mitigation Systems</h2>
              <p>We install different types of systems depending on your home's foundation type and construction:</p>
              
              <div className="system-types">
                <div className="system-type">
                  <h4>Sub-Slab Depressurization (SSD)</h4>
                  <p>Most common system for homes with basements or slabs. A pipe is installed through the foundation to create suction under the slab.</p>
                  <img src="sub-slab-system-diagram.jpg" alt="Sub-Slab System Diagram" style={{width: '100%', marginTop: '10px', borderRadius: '8px'}} />
                </div>
                <div className="system-type">
                  <h4>Sump Pit Depressurization</h4>
                  <p>Uses existing sump pit as suction point. The sump pit is sealed and connected to the fan system.</p>
                </div>
                <div className="system-type">
                  <h4>Drain Tile Depressurization</h4>
                  <p>Utilizes existing perimeter drain system for radon removal. Connects to existing drainage around foundation.</p>
                </div>
                <div className="system-type">
                  <h4>Crawl Space Encapsulation</h4>
                  <p>Seals crawl space with plastic sheeting and ventilation system. Prevents radon from entering through crawl space.</p>
                </div>
              </div>
              
              <img src="radon-mitigation-diagram.jpg" alt="Radon Mitigation System Overview" style={{width: '100%', margin: '20px 0', borderRadius: '8px'}} />
            </div>

            <div className="education-section">
              <h2>Professional Festa Radon Fans</h2>
              <p>We exclusively use <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', fontWeight: 'bold'}}>Festa Radon Technologies</a> fans, the industry leader in radon mitigation equipment:</p>
              
              <div className="system-types">
                <div className="system-type">
                  <h4>Maverick Eagle Series</h4>
                  <p>High-performance fans for standard residential applications with excellent reliability and quiet operation.</p>
                </div>
                <div className="system-type">
                  <h4>Eagle Max Series</h4>
                  <p>Maximum suction power for challenging installations or high radon levels requiring extra performance.</p>
                </div>
                <div className="system-type">
                  <h4>Legends Series</h4>
                  <p>Premium fans with advanced features for optimal performance and longevity in all conditions.</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Our Installation Process</h2>
              <h3>Step 1: System Design</h3>
              <p>We carefully examine your home's foundation and design the most effective system for your specific situation. Every home is different, so we create a custom solution.</p>
              
              <h3>Step 2: Installation</h3>
              <p>Our certified technicians install the system with minimal disruption to your home. This typically includes:</p>
              <ul>
                <li>Drilling suction points in the foundation</li>
                <li>Installing PVC piping system</li>
                <li>Mounting the Festa fan in attic or outside</li>
                <li>Sealing all cracks and openings</li>
                <li>Installing monitoring system</li>
              </ul>
              
              <h3>Step 3: Testing and Verification</h3>
              <p>After installation, we test the system to ensure it's working properly and reducing radon levels to safe levels below 4.0 pCi/L.</p>
            </div>

            <div className="education-section">
              <h2>Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h4>How long does installation take?</h4>
                <p>Most residential radon mitigation systems can be installed in one day, typically 4-8 hours depending on the complexity of your home's foundation and the type of system required.</p>
              </div>
              
              <div className="faq-item">
                <h4>Will the system be noisy?</h4>
                <p>Festa fans are designed for quiet operation. Most homeowners report the fan is barely noticeable, similar to a bathroom exhaust fan running continuously.</p>
              </div>
              
              <div className="faq-item">
                <h4>How much does a system cost to operate?</h4>
                <p>Radon fans typically use about the same amount of electricity as a 60-watt light bulb, costing approximately $50-100 per year to operate continuously.</p>
              </div>
              
              <div className="faq-item">
                <h4>How effective are mitigation systems?</h4>
                <p>Professional radon mitigation systems are highly effective, typically reducing radon levels by 80-99%. Most homes achieve levels below 2.0 pCi/L after mitigation.</p>
              </div>
              
              <div className="faq-item">
                <h4>Do I need to test after installation?</h4>
                <p>Yes, we recommend testing 30 days after installation and then every 2 years to ensure the system continues working effectively.</p>
              </div>
            </div>

            <div className="education-cta">
              <h2>Protect Your Family Today</h2>
              <p>Don't wait to address elevated radon levels. Our professional mitigation systems provide reliable, long-term protection for your family's health.</p>
              <div className="cta-buttons">
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <button className="cta-button secondary large" onClick={() => navigateToPage('radon-testing')}>
                  Schedule Testing First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // Enhanced Duct Cleaning & AeroSeal Page
  const renderDuctCleaningPage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Professional Duct Cleaning & AeroSeal Services</h1>
            <p>Improve your home's air quality and energy efficiency with professional duct services</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>Professional Duct Cleaning</h2>
              <p>Over time, your home's air ducts accumulate dust, debris, allergens, and contaminants that can affect your family's health and your HVAC system's efficiency.</p>
              
              <h3>Why Clean Your Ducts?</h3>
              <ul>
                <li><strong>Improved Air Quality:</strong> Remove dust, allergens, and contaminants</li>
                <li><strong>Better HVAC Efficiency:</strong> Clean ducts allow better airflow</li>
                <li><strong>Reduced Allergens:</strong> Eliminate pet dander, pollen, and dust mites</li>
                <li><strong>Odor Removal:</strong> Eliminate musty or stale odors from ductwork</li>
                <li><strong>Extended Equipment Life:</strong> Reduce strain on HVAC components</li>
              </ul>
              
              <h3>Our Duct Cleaning Process</h3>
              <p>We use professional-grade equipment and follow NADCA (National Air Duct Cleaners Association) standards:</p>
              <ul>
                <li>Complete system inspection and assessment</li>
                <li>Powerful vacuum collection system setup</li>
                <li>Agitation cleaning of all ductwork</li>
                <li>Supply and return vent cleaning</li>
                <li>HVAC component cleaning (coils, blower, etc.)</li>
                <li>Sanitization and deodorization if needed</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>AeroSeal Duct Sealing Technology</h2>
              <p>AeroSeal is a revolutionary technology that seals duct leaks from the inside, dramatically improving your home's energy efficiency and comfort.</p>
              
              <div className="video-showcase-section" style={{padding: '2rem 0'}}>
                <div className="video-item">
                  <iframe
                    className="showcase-video"
                    src="https://www.youtube.com/embed/K3JAR0dCNhc"
                    title="AeroSeal Duct Sealing Process"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h3>See AeroSeal in Action</h3>
                </div>
              </div>
              
              <h3>How AeroSeal Works</h3>
              <p>The AeroSeal process is like having tiny particles find and seal every leak in your ductwork automatically:</p>
              <ul>
                <li><strong>Preparation:</strong> We block all vents and connect our equipment</li>
                <li><strong>Baseline Testing:</strong> Measure existing duct leakage</li>
                <li><strong>Sealing Process:</strong> Safe, non-toxic particles are blown through ducts</li>
                <li><strong>Automatic Sealing:</strong> Particles stick to leak edges and build up to seal holes</li>
                <li><strong>Real-Time Monitoring:</strong> Computer tracks sealing progress</li>
                <li><strong>Final Testing:</strong> Verify leak reduction and provide certificate</li>
              </ul>
              
              <img src="UltimateConstruction-SupplyGraph.png" alt="AeroSeal Results Graph" style={{width: '100%', margin: '20px 0', borderRadius: '8px'}} />
            </div>

            <div className="education-section">
              <h2>What to Expect from AeroSeal</h2>
              
              <h3>Typical Results</h3>
              <ul>
                <li><strong>85-95% Leak Reduction:</strong> Dramatically reduce duct leakage</li>
                <li><strong>20-30% Energy Savings:</strong> Lower heating and cooling costs</li>
                <li><strong>Improved Comfort:</strong> More even temperatures throughout home</li>
                <li><strong>Better Air Quality:</strong> Reduced dust and allergen infiltration</li>
                <li><strong>10-Year Warranty:</strong> Guaranteed performance and durability</li>
              </ul>
              
              <h3>The AeroSeal Process Timeline</h3>
              <ul>
                <li><strong>Day 1:</strong> Initial assessment and preparation (2-3 hours)</li>
                <li><strong>Day 2:</strong> AeroSeal application and testing (4-6 hours)</li>
                <li><strong>Immediate:</strong> Real-time results and certification</li>
                <li><strong>Ongoing:</strong> Enjoy improved comfort and energy savings</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Benefits of Combined Services</h2>
              <p>When you combine professional duct cleaning with AeroSeal technology, you get maximum benefits:</p>
              
              <div className="system-types">
                <div className="system-type">
                  <h4>Clean + Sealed = Optimal Performance</h4>
                  <p>Clean ducts ensure maximum airflow, while sealed ducts ensure that clean air reaches its destination efficiently.</p>
                </div>
                <div className="system-type">
                  <h4>Maximum Energy Savings</h4>
                  <p>The combination provides the greatest possible improvement in HVAC efficiency and energy savings.</p>
                </div>
                <div className="system-type">
                  <h4>Long-Term Value</h4>
                  <p>Sealed ducts stay cleaner longer, and clean ducts allow AeroSeal to work more effectively.</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h4>How often should ducts be cleaned?</h4>
                <p>NADCA recommends duct cleaning every 3-5 years for most homes, or more frequently if you have pets, allergies, or recent renovations.</p>
              </div>
              
              <div className="faq-item">
                <h4>Is AeroSeal safe for my family?</h4>
                <p>Yes, AeroSeal uses the same particles found in baby powder and chewing gum. It's completely safe and non-toxic for your family and pets.</p>
              </div>
              
              <div className="faq-item">
                <h4>How long does the AeroSeal process take?</h4>
                <p>The complete AeroSeal process typically takes 4-6 hours, depending on the size of your duct system and the amount of leakage.</p>
              </div>
              
              <div className="faq-item">
                <h4>Will I see immediate results?</h4>
                <p>Yes! You'll notice improved comfort and more even temperatures immediately. Energy savings will be reflected in your next utility bills.</p>
              </div>
            </div>

            <div className="education-cta">
              <h2>Improve Your Home's Air Quality & Efficiency</h2>
              <p>Experience the benefits of professional duct cleaning and revolutionary AeroSeal technology. Breathe easier and save money on energy costs.</p>
              <div className="cta-buttons">
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <button className="cta-button secondary large" onClick={() => navigateToPage('home')}>
                  Learn About Other Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // Enhanced Floor Coatings Page with polyaspartic focus
  const renderFloorCoatingsPage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Premium Polyaspartic Floor Coatings</h1>
            <p>Transform your garage with advanced polyaspartic technology and Torginol flakes</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>Why Choose Polyaspartic Over Traditional Epoxy?</h2>
              <p>While traditional epoxy coatings have been around for decades, polyaspartic technology represents the next generation of floor coating systems. Our polyaspartic topcoat isn't the same 'epoxy of old' - it's a superior solution that addresses all the common problems with traditional epoxy floors.</p>
              
              <h3>Polyaspartic vs. Traditional Epoxy</h3>
              <div className="system-types">
                <div className="system-type">
                  <h4>Traditional Epoxy Problems</h4>
                  <p>Yellows over time, chips and peels easily, long cure times, temperature sensitive application, limited UV resistance.</p>
                </div>
                <div className="system-type">
                  <h4>Our Polyaspartic Solution</h4>
                  <p>UV-stable (won't yellow), superior flexibility, fast cure times, all-weather application, exceptional durability.</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Our Professional Installation Process</h2>
              <p>Our meticulous 2-3 day process ensures a lifetime-quality finish that won't fade, yellow, crack, peel, or chip:</p>
              
              <h3>Day 1: Proper Floor Preparation</h3>
              <p>Proper preparation is the foundation of a lasting floor coating. We take the time to do it right:</p>
              <ul>
                <li><strong>Diamond Grinding:</strong> Mechanical preparation creates optimal surface profile</li>
                <li><strong>Crack Repair:</strong> All cracks are properly filled and sealed</li>
                <li><strong>Thorough Cleaning:</strong> Complete removal of oils, stains, and contaminants</li>
                <li><strong>Moisture Testing:</strong> Ensure concrete is ready for coating application</li>
              </ul>
              
              <h3>Day 2: Epoxy Base & Torginol Flakes</h3>
              <p>The epoxy base penetrates deep into the concrete for strong adhesion, then we apply premium Torginol flakes:</p>
              <ul>
                <li><strong>Penetrating Epoxy Base:</strong> Deep penetration creates permanent bond with concrete</li>
                <li><strong>Torginol Flake Application:</strong> Premium decorative flakes for beauty and texture</li>
                <li><strong>Proper Cure Time:</strong> Allow epoxy and flakes to fully adhere to concrete</li>
                <li><strong>Quality Control:</strong> Inspect coverage and adhesion before next step</li>
              </ul>
              
              <h3>Day 3: Polyaspartic Topcoat Application</h3>
              <p>The polyaspartic topcoat is the 'better' product that provides superior protection:</p>
              <ul>
                <li><strong>Surface Preparation:</strong> Light sanding to ensure perfect adhesion</li>
                <li><strong>Polyaspartic Application:</strong> Professional spray application for even coverage</li>
                <li><strong>UV Protection:</strong> Built-in UV stabilizers prevent yellowing</li>
                <li><strong>Fast Cure:</strong> Ready for light foot traffic in 4-6 hours</li>
              </ul>
            </div>

            <div className="before-after-gallery">
              <h2>See the Transformation</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="Before1.jpg" alt="Before Floor Coating" />
                  <p>Before: Stained Concrete</p>
                </div>
                <div className="gallery-item">
                  <img src="after1.jpg" alt="After Floor Coating" />
                  <p>After: Beautiful Transformation</p>
                </div>
                <div className="gallery-item">
                  <img src="Before2.jpg" alt="Before Floor Coating" />
                  <p>Before: Worn Garage Floor</p>
                </div>
                <div className="gallery-item">
                  <img src="after2.jpg" alt="After Floor Coating" />
                  <p>After: Stunning Results</p>
                </div>
                <div className="gallery-item">
                  <img src="Working.jpg" alt="Installation Process" />
                  <p>Professional Installation</p>
                </div>
                <div className="gallery-item">
                  <img src="EPTrailer.jpg" alt="Professional Equipment" />
                  <p>Professional Equipment</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Why Choose Us for Your Floor Coating?</h2>
              <div className="torginol-benefits">
                <div className="benefit-card">
                  <h4>Superior Materials</h4>
                  <p>Premium Torginol flakes and advanced polyaspartic topcoat technology</p>
                </div>
                <div className="benefit-card">
                  <h4>Professional Installation</h4>
                  <p>Proper 2-3 day process ensures maximum durability and performance</p>
                </div>
                <div className="benefit-card">
                  <h4>Lifetime Warranty</h4>
                  <p>We stand behind our work with a comprehensive lifetime warranty</p>
                </div>
                <div className="benefit-card">
                  <h4>UV Stable</h4>
                  <p>Polyaspartic topcoat won't yellow, fade, or deteriorate from sunlight</p>
                </div>
                <div className="benefit-card">
                  <h4>Chemical Resistant</h4>
                  <p>Resists oil, gas, salt, and household chemicals without staining</p>
                </div>
                <div className="benefit-card">
                  <h4>Easy Maintenance</h4>
                  <p>Simple cleaning with soap and water maintains beautiful appearance</p>
                </div>
              </div>
            </div>

            <div className="color-options">
              <h2>Premium Torginol Color Options</h2>
              <p>Choose from our selection of premium Torginol flake systems for the perfect look:</p>
              <div className="color-grid">
                <div className="color-option">
                  <div className="color-sample granite"></div>
                  <p>Granite Blend</p>
                </div>
                <div className="color-option">
                  <div className="color-sample earth"></div>
                  <p>Earth Tones</p>
                </div>
                <div className="color-option">
                  <div className="color-sample coastal"></div>
                  <p>Coastal Blue</p>
                </div>
                <div className="color-option">
                  <div className="color-sample neutral"></div>
                  <p>Neutral Gray</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Lifetime Warranty Coverage</h2>
              <p>Our comprehensive lifetime warranty covers:</p>
              <div className="warranty-coverage">
                <div className="warranty-item">
                  <h4>✓ No Peeling</h4>
                  <p>Proper adhesion prevents coating separation</p>
                </div>
                <div className="warranty-item">
                  <h4>✓ No Chipping</h4>
                  <p>Flexible polyaspartic resists impact damage</p>
                </div>
                <div className="warranty-item">
                  <h4>✓ No Cracking</h4>
                  <p>Superior flexibility accommodates concrete movement</p>
                </div>
                <div className="warranty-item">
                  <h4>✓ No Yellowing</h4>
                  <p>UV-stable formula maintains color clarity</p>
                </div>
                <div className="warranty-item">
                  <h4>✓ No Fading</h4>
                  <p>Colorfast technology preserves appearance</p>
                </div>
                <div className="warranty-item">
                  <h4>✓ Professional Workmanship</h4>
                  <p>Installation quality guaranteed for life</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h4>How long does the installation process take?</h4>
                <p>Our professional installation takes 2-3 days due to proper floor prep, epoxy base with flakes that needs time to adhere to the concrete prior to adding the polyaspartic topcoat, which is the 'better' product that provides superior protection and durability.</p>
              </div>
              
              <div className="faq-item">
                <h4>What makes polyaspartic better than epoxy?</h4>
                <p>Polyaspartic technology offers superior UV resistance (won't yellow), faster cure times, better flexibility, and enhanced chemical resistance compared to traditional epoxy coatings.</p>
              </div>
              
              <div className="faq-item">
                <h4>Can the coating be applied in cold weather?</h4>
                <p>Yes, polyaspartic coatings can be applied in a wider temperature range than traditional epoxy, making installation possible in more weather conditions.</p>
              </div>
              
              <div className="faq-item">
                <h4>How do I maintain my new floor?</h4>
                <p>Simple maintenance with soap and water is all that's needed. The non-porous surface resists stains and makes cleaning effortless.</p>
              </div>
              
              <div className="faq-item">
                <h4>What's included in the lifetime warranty?</h4>
                <p>Our warranty covers peeling, chipping, cracking, yellowing, fading, and workmanship for the life of your ownership of the property.</p>
              </div>
            </div>

            <div className="education-cta">
              <h2>Transform Your Garage Today</h2>
              <p>Experience the difference of professional polyaspartic floor coating with Torginol flakes and our lifetime warranty. Your garage will never look better!</p>
              <div className="cta-buttons">
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <button className="cta-button secondary large" onClick={() => navigateToPage('home')}>
                  See Other Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // Enhanced Security Systems Page for America In-Home
  const renderSecuritySystemsPage = () => (
    <div className={`App aih`} data-brand="aih">
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Professional Security Systems</h1>
            <p>Comprehensive home security solutions with professional monitoring and smart features</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>Complete Home Security Solutions</h2>
              <p>Invest in security, alarm, and monitoring services that detect threats, deter potential criminals, and provide you peace of mind. Our comprehensive security systems are designed to protect what matters most to you.</p>
              
              <img src="SecurityBack.jpg" alt="Security System Components" style={{width: '100%', margin: '20px 0', borderRadius: '8px'}} />
              
              <h3>Our Security System Components</h3>
              <ul>
                <li><strong>Door Sensors:</strong> Monitor all entry points with wireless door and window sensors</li>
                <li><strong>Motion Sensors:</strong> Advanced PIR motion detection with pet immunity</li>
                <li><strong>Glass Break Detectors:</strong> Acoustic sensors detect breaking glass</li>
                <li><strong>Smoke Detectors:</strong> Integrated fire protection with 24/7 monitoring</li>
                <li><strong>Temperature & Water Detectors:</strong> Protect against environmental threats</li>
                <li><strong>Ring Pro 2 Integration:</strong> Video doorbell with two-way communication</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Security System Packages</h2>
              <p>Choose the security package that best fits your home and family's needs:</p>
              
              <img src="Securityfront.jpg" alt="Security System Packages" style={{width: '100%', margin: '20px 0', borderRadius: '8px'}} />
              
              <h3>Base Package</h3>
              <p>Essential security protection for your home:</p>
              <ul>
                <li>XTL Touchscreen Panel & Siren</li>
                <li>Professional installation and setup</li>
                <li>Basic monitoring service</li>
                <li>Mobile app control</li>
              </ul>
              
              <h3>Enhanced Package</h3>
              <p>Comprehensive protection with additional sensors:</p>
              <ul>
                <li>Everything in Base Package</li>
                <li>3 Door Sensors for entry points</li>
                <li>Motion sensor for main living areas</li>
                <li>Glass break detector</li>
                <li>24/7 professional monitoring</li>
              </ul>
              
              <h3>Premium Package</h3>
              <p>Complete home protection with smart features:</p>
              <ul>
                <li>Everything in Enhanced Package</li>
                <li>Additional sensors for full coverage</li>
                <li>Smoke and fire detection</li>
                <li>Temperature and water monitoring</li>
                <li>Ring Pro 2 video doorbell</li>
                <li>Smart home integration</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Professional Monitoring Services</h2>
              <p>Our 24/7 monitoring center provides immediate response to security events:</p>
              
              <h3>What Happens When Your Alarm Triggers?</h3>
              <ul>
                <li><strong>Immediate Response:</strong> Monitoring center receives signal within seconds</li>
                <li><strong>Verification Process:</strong> Trained operators verify the emergency</li>
                <li><strong>Emergency Dispatch:</strong> Police, fire, or medical services contacted</li>
                <li><strong>Customer Notification:</strong> You're contacted via phone and mobile app</li>
                <li><strong>Follow-up Service:</strong> Continued monitoring until situation resolved</li>
              </ul>
              
              <h3>Smart Features & Mobile Control</h3>
              <ul>
                <li>Arm/disarm system remotely via smartphone app</li>
                <li>Receive real-time alerts and notifications</li>
                <li>View system status and sensor activity</li>
                <li>Control smart home devices through security panel</li>
                <li>Receive photos from Ring doorbell when motion detected</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Installation & Setup Process</h2>
              <p>Our certified technicians handle complete installation and setup:</p>
              
              <h3>Pre-Installation Consultation</h3>
              <ul>
                <li>Home security assessment and vulnerability analysis</li>
                <li>Custom system design based on your home's layout</li>
                <li>Sensor placement planning for optimal coverage</li>
                <li>Integration planning with existing smart home devices</li>
              </ul>
              
              <h3>Professional Installation</h3>
              <ul>
                <li>Clean, professional installation with minimal disruption</li>
                <li>All sensors tested and calibrated for optimal performance</li>
                <li>Control panel programming and setup</li>
                <li>Mobile app configuration and user training</li>
                <li>Complete system testing and demonstration</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Why Choose America In-Home Security?</h2>
              <div className="system-types">
                <div className="system-type">
                  <h4>Local Expertise</h4>
                  <p>Wisconsin-based company with deep understanding of local security needs and quick response times.</p>
                </div>
                <div className="system-type">
                  <h4>Professional Installation</h4>
                  <p>Certified technicians ensure proper installation and optimal system performance.</p>
                </div>
                <div className="system-type">
                  <h4>24/7 Monitoring</h4>
                  <p>Professional monitoring center provides immediate response to all security events.</p>
                </div>
                <div className="system-type">
                  <h4>Smart Integration</h4>
                  <p>Seamless integration with smart home devices and mobile control capabilities.</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h4>How long does installation take?</h4>
                <p>Most residential security system installations are completed in 3-5 hours, depending on the size of your home and number of sensors.</p>
              </div>
              
              <div className="faq-item">
                <h4>What happens if my internet goes down?</h4>
                <p>Our systems include cellular backup communication to ensure monitoring continues even if your internet connection is interrupted.</p>
              </div>
              
              <div className="faq-item">
                <h4>Can I control my system when I'm away from home?</h4>
                <p>Yes, our mobile app allows you to arm/disarm your system, receive alerts, and monitor your home from anywhere in the world.</p>
              </div>
              
              <div className="faq-item">
                <h4>What's the difference between self-monitoring and professional monitoring?</h4>
                <p>Professional monitoring provides 24/7 oversight by trained operators who can dispatch emergency services, while self-monitoring relies on you to respond to alerts.</p>
              </div>
            </div>

            <div className="education-cta">
              <h2>Protect Your Home & Family</h2>
              <p>Don't wait for a security incident to protect what matters most. Our professional security systems provide peace of mind and comprehensive protection.</p>
              <div className="cta-buttons">
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Get Free Security Assessment
                </button>
                <button className="cta-button secondary large" onClick={() => navigateToPage('control4')}>
                  Learn About Smart Home Integration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // Enhanced Custom Closets Page
  const renderCustomClosetsPage = () => (
    <div className={`App closets`} data-brand="closets">
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Custom Closet Solutions</h1>
            <p>Handcrafted custom closets designed and manufactured in Wisconsin</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>Premium Custom Closet Design</h2>
              <p>Transform your storage spaces with our custom-designed closet systems. As a former California Closets location, we bring decades of experience in luxury closet design and organization solutions, now with the advantage of local Wisconsin manufacturing.</p>
              
              <h3>Our Design Philosophy</h3>
              <p>Every closet is unique, just like every homeowner. We create custom solutions that maximize your space while reflecting your personal style and organizational needs. Our designs combine functionality with beauty to create spaces you'll love to use every day.</p>
            </div>

            <div className="education-section">
              <h2>Custom Closet Gallery</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="Closet3.jpg" alt="Luxury Walk-in Closet" />
                  <p>Luxury Walk-in Closet</p>
                </div>
                <div className="gallery-item">
                  <img src="Closet5.jpg" alt="Master Bedroom Closet" />
                  <p>Master Bedroom Closet</p>
                </div>
                <div className="gallery-item">
                  <img src="ReachinCloset1.jpg" alt="Reach-in Closet Organization" />
                  <p>Reach-in Closet Organization</p>
                </div>
                <div className="gallery-item">
                  <img src="ModelHome1.jpg" alt="Model Home Installation" />
                  <p>Model Home Installation</p>
                </div>
                <div className="gallery-item">
                  <img src="ModelHome2.jpg" alt="Contemporary Design" />
                  <p>Contemporary Design</p>
                </div>
                <div className="gallery-item">
                  <img src="ModelHome4.jpg" alt="Elegant Storage Solution" />
                  <p>Elegant Storage Solution</p>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>USA Manufacturing Excellence</h2>
              <p>All our closet systems are designed and manufactured right here in Wisconsin, ensuring the highest quality and supporting American jobs.</p>
              
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="IMG_1518.JPG" alt="Manufacturing Process" />
                  <p>Precision Manufacturing</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1521.JPG" alt="Quality Control" />
                  <p>Quality Control Process</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1429.JPG" alt="Component Assembly" />
                  <p>Component Assembly</p>
                </div>
                <div className="gallery-item">
                  <img src="HL2A2305.JPG" alt="Manufacturing Facility" />
                  <p>Our Manufacturing Facility</p>
                </div>
              </div>
              
              <h3>Why USA Manufacturing Matters</h3>
              <ul>
                <li><strong>Superior Quality Control:</strong> Direct oversight of every manufacturing step</li>
                <li><strong>Faster Delivery:</strong> No overseas shipping delays or complications</li>
                <li><strong>Custom Capabilities:</strong> Ability to create truly custom solutions</li>
                <li><strong>Supporting Local Economy:</strong> American jobs and Wisconsin craftsmanship</li>
                <li><strong>Environmental Responsibility:</strong> Reduced shipping distances and carbon footprint</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Closet Types & Applications</h2>
              
              <h3>Walk-in Closets</h3>
              <p>Transform your master bedroom with a luxury walk-in closet featuring:</p>
              <ul>
                <li>Custom hanging solutions for all clothing types</li>
                <li>Built-in drawers and jewelry storage</li>
                <li>Shoe storage and display systems</li>
                <li>Island units with additional storage</li>
                <li>LED lighting and mirror integration</li>
              </ul>
              
              <h3>Reach-in Closets</h3>
              <p>Maximize smaller spaces with efficient reach-in closet designs:</p>
              <ul>
                <li>Double-hang systems for maximum capacity</li>
                <li>Adjustable shelving for changing needs</li>
                <li>Drawer units for folded items</li>
                <li>Specialty storage for accessories</li>
                <li>Door-mounted organizers</li>
              </ul>
              
              <h3>Specialty Closets</h3>
              <p>Custom solutions for unique storage needs:</p>
              <ul>
                <li>Children's closets with adjustable components</li>
                <li>Guest room closets with versatile storage</li>
                <li>Coat closets with seasonal organization</li>
                <li>Linen closets with optimized shelving</li>
                <li>Utility closets for cleaning supplies</li>
              </ul>
            </div>

            <div className="education-section">
              <h2>Design Process</h2>
              
              <h3>1. Initial Consultation</h3>
              <p>We begin with an in-home consultation to understand your needs, lifestyle, and design preferences. Our designers assess your space and discuss your vision for the perfect closet.</p>
              
              <h3>2. Custom Design</h3>
              <p>Using professional design software, we create a detailed 3D rendering of your custom closet. You'll see exactly how your new space will look and function before manufacturing begins.</p>
              
              <h3>3. Manufacturing</h3>
              <p>Once you approve the design, our Wisconsin manufacturing facility begins crafting your custom closet components using premium materials and precision techniques.</p>
              
              <h3>4. Professional Installation</h3>
              <p>Our experienced installation team brings your vision to life with meticulous attention to detail and minimal disruption to your home.</p>
            </div>

            <div className="education-section">
              <h2>Materials & Finishes</h2>
              <p>We use only premium materials to ensure your closet looks beautiful and lasts for decades:</p>
              
              <div className="system-types">
                <div className="system-type">
                  <h4>Premium Wood Products</h4>
                  <p>High-quality engineered wood with durable finishes that resist wear and maintain their beauty.</p>
                </div>
                <div className="system-type">
                  <h4>Hardware Excellence</h4>
                  <p>Soft-close drawers, adjustable shelving, and premium hanging systems for smooth operation.</p>
                </div>
                <div className="system-type">
                  <h4>Finish Options</h4>
                  <p>Wide selection of colors and finishes to match your home's décor and personal style.</p>
                </div>
                <div className="system-type">
                  <h4>Accessories</h4>
                  <p>Specialized storage solutions including jewelry trays, tie racks, belt hooks, and shoe displays.</p>
                </div>
              </div>
            </div>

            <div className="education-cta">
              <h2>Transform Your Storage Today</h2>
              <p>Experience the difference of custom closets designed and manufactured in Wisconsin. Let us create the perfect storage solution for your home.</p>
              <div className="cta-buttons">
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Schedule Free Design Consultation
                </button>
                <button className="cta-button secondary large" onClick={() => navigateToPage('garage-storage')}>
                  See Garage Storage Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderContactPage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      <div className="contact-page">
        <div className="container">
          <div className="contact-header">
            <h1>Contact {currentBrandData.name}</h1>
            <p>Get in touch with our team for a free consultation and estimate</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <div className="contact-details-line">
                <div className="contact-item">
                  <strong>Phone:</strong> 262-955-5701
                </div>
                <div className="contact-item">
                  <strong>Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> 3485 N. 124th St., Brookfield, WI 53005
                </div>
              </div>
              
              <div className="google-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5234567890123!2d-88.1234567!3d43.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lifetime Home Services Location"
                ></iframe>
              </div>
            </div>
            
            <div className="contact-form-section">
              <h2>Request Free Estimate</h2>
              <form className="contact-form" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="lead_source" value="internet" />
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="first_name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="last_name" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service of Interest *</label>
                  <select id="service" name="service_interest" required>
                    <option value="">Select a service...</option>
                    {currentBrand === 'lifetime' && (
                      <>
                        <option value="Radon Testing">Radon Testing</option>
                        <option value="Radon Mitigation">Radon Mitigation</option>
                        <option value="Floor Coatings (EPOXY)">Floor Coatings (EPOXY)</option>
                        <option value="Aeroseal">Aeroseal</option>
                        <option value="Duct Cleaning">Duct Cleaning</option>
                        <option value="Multiple (Concierge Services)">Multiple (Concierge Services)</option>
                      </>
                    )}
                    {currentBrand === 'aih' && (
                      <>
                        <option value="Home Security">Home Security</option>
                        <option value="Smart Home Technology (AIH)">Smart Home Technology (AIH)</option>
                        <option value="Multiple (Concierge Services)">Multiple (Concierge Services)</option>
                      </>
                    )}
                    {currentBrand === 'closets' && (
                      <>
                        <option value="Custom Closets">Custom Closets</option>
                        <option value="Multiple (Concierge Services)">Multiple (Concierge Services)</option>
                      </>
                    )}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderFinancingPage = () => (
    <div className={`App ${currentBrand}`} data-brand={currentBrand}>
      {renderHeader()}
      <div className="financing-page">
        <div className="container">
          <div className="financing-header">
            <h1>Flexible Financing Options</h1>
            <p>Make your home improvement dreams a reality with our convenient financing solutions</p>
          </div>
          
          <div className="financing-highlight">
            <h2>As Low as 0% Financing Available</h2>
            <p>Qualified customers can enjoy promotional financing with competitive rates and flexible terms</p>
          </div>
          
          <div className="financing-options">
            <div className="financing-card">
              <h3>Synchrony Financing</h3>
              <p>Our partnership with Synchrony provides flexible payment options for your home improvement projects.</p>
              <ul>
                <li>Promotional financing available</li>
                <li>Quick and easy application process</li>
                <li>Competitive interest rates</li>
                <li>Flexible payment terms</li>
                <li>No prepayment penalties</li>
              </ul>
              <a 
                href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="financing-link"
              >
                Apply Now with Synchrony
              </a>
            </div>
            
            <div className="financing-card">
              <h3>Traditional Financing</h3>
              <p>Standard financing options for customers who prefer conventional payment plans.</p>
              <ul>
                <li>Fixed monthly payments</li>
                <li>Predictable payment schedule</li>
                <li>Various term lengths available</li>
                <li>Competitive rates</li>
                <li>Simple application process</li>
              </ul>
              <button className="financing-link" onClick={() => navigateToPage('contact')}>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="financing-cta">
            <h3>Ready to Get Started?</h3>
            <p>Contact us today to learn more about our financing options and find the perfect solution for your budget.</p>
            <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // State Pages with enhanced styling and silhouettes
  const renderStatePage = (state) => {
    const stateData = {
      wisconsin: {
        name: 'Wisconsin',
        services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings', 'Custom Closets (Closet Concepts)', 'Security Systems (America In-Home)', 'Smart Home Automation (America In-Home)'],
        areaCodes: ['262', '414', '608', '715', '920'],
        zipCodes: ['53005', '53012', '53018', '53022', '53029', '53033', '53037', '53040', '53045', '53051', '53056', '53066', '53072', '53090', '53095', '53097', '53122', '53129', '53130', '53132', '53140', '53144', '53149', '53150', '53151', '53154', '53158', '53168', '53186', '53188', '53189', '53190', '53198'],
        silhouetteClass: 'wisconsin-silhouette'
      },
      illinois: {
        name: 'Illinois',
        services: ['Radon Mitigation', 'AeroSeal Duct Sealing'],
        areaCodes: ['224', '312', '630', '708', '773', '815', '847'],
        zipCodes: ['60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025', '60026', '60029', '60030'],
        silhouetteClass: 'illinois-silhouette'
      },
      minnesota: {
        name: 'Minnesota',
        services: ['Radon Testing', 'Radon Mitigation'],
        areaCodes: ['218', '320', '507', '612', '651', '763', '952'],
        zipCodes: ['55001', '55003', '55009', '55011', '55014', '55016', '55018', '55019', '55020', '55021', '55024', '55025', '55027', '55031', '55033', '55038', '55040', '55041', '55042', '55043'],
        silhouetteClass: 'minnesota-silhouette'
      },
      colorado: {
        name: 'Colorado',
        services: ['Radon Testing', 'Radon Mitigation'],
        areaCodes: ['303', '719', '720', '970'],
        zipCodes: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023'],
        silhouetteClass: 'colorado-silhouette'
      }
    };

    const data = stateData[state];
    const isExpanded = expandedZipCodes[state];
    const visibleZipCodes = isExpanded ? data.zipCodes : data.zipCodes.slice(0, 10);
    const remainingCount = data.zipCodes.length - 10;

    return (
      <div className={`App ${currentBrand}`} data-brand={currentBrand}>
        {renderHeader()}
        <div className="state-page">
          <div className="state-background">
            <div className={`state-silhouette ${data.silhouetteClass}`}></div>
          </div>
          <div className="container">
            <div className="state-header">
              <h1>{data.name} Service Areas</h1>
              <p>Professional home services throughout {data.name}</p>
            </div>
            
            <div className="state-content">
              <div className="services-offered">
                <h2>Services Available in {data.name}</h2>
                <div className="service-list">
                  {data.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <h3>{service}</h3>
                      <button 
                        className="learn-more-btn"
                        onClick={() => {
                          if (service.includes('Radon Testing')) navigateToPage('radon-testing');
                          else if (service.includes('Radon Mitigation')) navigateToPage('radon-mitigation');
                          else if (service.includes('Duct Cleaning')) navigateToPage('duct-cleaning');
                          else if (service.includes('AeroSeal')) navigateToPage('aeroseal');
                          else if (service.includes('Floor Coatings')) navigateToPage('floor-coatings');
                          else if (service.includes('Closet Concepts')) navigateToPage('custom-closets', 'closets');
                          else if (service.includes('Security Systems')) navigateToPage('security-systems', 'aih');
                          else if (service.includes('Smart Home')) navigateToPage('smart-home', 'aih');
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="coverage-areas">
                <h2>Coverage Areas</h2>
                
                <div className="area-codes-section">
                  <h3>Area Codes Served</h3>
                  <div className="area-codes">
                    {data.areaCodes.map((code, index) => (
                      <span key={index} className="area-code">{code}</span>
                    ))}
                  </div>
                </div>
                
                <div className="zip-codes-section">
                  <h3>Zip Codes Served</h3>
                  <div className="zip-codes-container">
                    <div className="zip-codes-preview">
                      {visibleZipCodes.map((code, index) => (
                        <span key={index} className="zip-code">{code}</span>
                      ))}
                    </div>
                    {!isExpanded && remainingCount > 0 && (
                      <button 
                        className="expand-zip-btn"
                        onClick={() => toggleZipCodes(state)}
                      >
                        +{remainingCount} more zip codes
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="state-cta">
                <h2>Ready to Get Started?</h2>
                <p>Contact us today for a free consultation and estimate for your {data.name} home.</p>
                <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
        {renderFooter()}
      </div>
    );
  };

  const renderFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{currentBrandData.name}</h3>
            <p>3485 N. 124th St.</p>
            <p>Brookfield, WI 53005</p>
            <p>Phone: 262-955-5701</p>
            <button className="footer-contact-btn" onClick={() => navigateToPage('contact')}>
              Contact Us
            </button>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            {currentBrand === 'lifetime' && (
              <>
                <p className="footer-service-link" onClick={() => navigateToPage('radon-testing')}>Radon Testing</p>
                <p className="footer-service-link" onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</p>
                <p className="footer-service-link" onClick={() => navigateToPage('duct-cleaning')}>Duct Cleaning</p>
                <p className="footer-service-link" onClick={() => navigateToPage('aeroseal')}>AeroSeal</p>
                <p className="footer-service-link" onClick={() => navigateToPage('floor-coatings')}>Floor Coatings</p>
              </>
            )}
            {currentBrand === 'aih' && (
              <>
                <p className="footer-service-link" onClick={() => navigateToPage('security-systems')}>Security Systems</p>
                <p className="footer-service-link" onClick={() => navigateToPage('control4')}>Control4 Integration</p>
                <p className="footer-service-link" onClick={() => navigateToPage('smart-home')}>Smart Home Automation</p>
              </>
            )}
            {currentBrand === 'closets' && (
              <>
                <p className="footer-service-link" onClick={() => navigateToPage('custom-closets')}>Custom Closets</p>
                <p className="footer-service-link" onClick={() => navigateToPage('garage-storage')}>Garage Storage</p>
                <p className="footer-service-link" onClick={() => navigateToPage('home-office')}>Home Office</p>
                <p className="footer-service-link" onClick={() => navigateToPage('pantry-systems')}>Pantry Systems</p>
              </>
            )}
          </div>
          
          <div className="footer-section">
            <h4>Service Areas</h4>
            <p className="footer-service-link" onClick={() => navigateToPage('wisconsin')}>Wisconsin</p>
            <p className="footer-service-link" onClick={() => navigateToPage('illinois')}>Illinois</p>
            <p className="footer-service-link" onClick={() => navigateToPage('minnesota')}>Minnesota</p>
            <p className="footer-service-link" onClick={() => navigateToPage('colorado')}>Colorado</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p className="footer-service-link" onClick={() => navigateToPage('contact')}>Contact</p>
            <p className="footer-service-link" onClick={() => navigateToPage('financing')}>Financing</p>
            <p>
              <a 
                href="https://www.google.com/search?q=Lifetime+Home+Services+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none'}}
              >
                Google Reviews
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {currentBrandData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Route rendering logic
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'radon-testing':
        return renderRadonTestingPage();
      case 'radon-mitigation':
        return renderRadonMitigationPage();
      case 'duct-cleaning':
      case 'aeroseal':
        return renderDuctCleaningPage();
      case 'floor-coatings':
        return renderFloorCoatingsPage();
      case 'security-systems':
        return renderSecuritySystemsPage();
      case 'custom-closets':
        return renderCustomClosetsPage();
      case 'contact':
        return renderContactPage();
      case 'financing':
        return renderFinancingPage();
      case 'wisconsin':
        return renderStatePage('wisconsin');
      case 'illinois':
        return renderStatePage('illinois');
      case 'minnesota':
        return renderStatePage('minnesota');
      case 'colorado':
        return renderStatePage('colorado');
      default:
        return renderHomePage();
    }
  };

  return renderCurrentPage();
}

export default App;

