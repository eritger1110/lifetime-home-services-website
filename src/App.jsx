import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showDropdown, setShowDropdown] = useState(null);
  const [expandedZipCodes, setExpandedZipCodes] = useState({});

  // Always scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, currentBrand]);

  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Lifetime Home Solutions. Trusted Solutions. Lifetime Results.',
      description: 'Complete home services including radon testing, duct cleaning, and premium floor coatings.',
      logo: '/LifetimeHomeServicesLogo.png',
      heroImage: '/lifetime-hero-bg.jpg',
      phone: '(262) 955-5701',
      services: ['FREE Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings']
    },
    america: {
      name: 'America In-Home',
      tagline: 'Smart Home Technology. Professional Installation. Lifetime Support.',
      description: 'Luxury smart home and security solutions powered by Control4 automation.',
      logo: '/AmericaIn-HomeLogo.jpg',
      heroImage: '/america-hero-bg.jpg',
      phone: '(262) 790-4050',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration', 'Entertainment Systems']
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Custom Storage Solutions. Professional Design. Lifetime Organization.',
      description: 'Custom closet and storage solutions for every room in your home.',
      logo: '/NewClosetConceptsLogo.png',
      heroImage: '/closets-hero-bg.jpg',
      phone: '(262) 955-5701',
      services: ['Custom Closets', 'Pantry Organization', 'Garage Storage', 'Home Office Organization']
    }
  };

  const currentBrandData = brands[currentBrand];

  const handleBrandSwitch = (brand) => {
    setCurrentBrand(brand);
    setCurrentPage('home');
    setShowDropdown(null);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setShowDropdown(null);
  };

  const toggleZipCodes = (area) => {
    setExpandedZipCodes(prev => ({
      ...prev,
      [area]: !prev[area]
    }));
  };

  const renderHeader = () => (
    <header className="header">
      {/* Skip to main content - hidden but accessible */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Brand switcher bar */}
      <div className="brand-switcher">
        <div className="container">
          <div className="brand-switcher-content">
            <div className="dropdown">
              <button 
                className="dropdown-toggle"
                onClick={() => setShowDropdown(showDropdown === 'brands' ? null : 'brands')}
              >
                Our Brands ▼
              </button>
              {showDropdown === 'brands' && (
                <div className="dropdown-menu">
                  <button onClick={() => handleBrandSwitch('lifetime')}>Lifetime Home Services</button>
                  <button onClick={() => handleBrandSwitch('america')}>America In-Home</button>
                  <button onClick={() => handleBrandSwitch('closets')}>Closet Concepts</button>
                </div>
              )}
            </div>
            <span className="brand-switcher-text">Switch between our family of brands for specialized services</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-left">
              <button 
                className="logo-button"
                onClick={() => handleNavigation('home')}
              >
                <img src={currentBrandData.logo} alt={`${currentBrandData.name} logo`} className="logo" />
              </button>
              <div className="brand-info">
                <h1 className="brand-name">{currentBrandData.name}</h1>
                <p className="brand-tagline">{currentBrandData.tagline}</p>
              </div>
            </div>

            <div className="nav-center">
              <div className="nav-links">
                <button 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavigation('home')}
                >
                  Home
                </button>
                
                <div className="dropdown">
                  <button 
                    className="nav-link dropdown-toggle"
                    onClick={() => setShowDropdown(showDropdown === 'services' ? null : 'services')}
                  >
                    Services ▼
                  </button>
                  {showDropdown === 'services' && (
                    <div className="dropdown-menu">
                      {currentBrandData.services.map((service, index) => (
                        <button 
                          key={index}
                          onClick={() => handleNavigation(`service-${index}`)}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="dropdown">
                  <button 
                    className="nav-link dropdown-toggle"
                    onClick={() => setShowDropdown(showDropdown === 'areas' ? null : 'areas')}
                  >
                    Service Areas ▼
                  </button>
                  {showDropdown === 'areas' && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleNavigation('wisconsin')}>Wisconsin</button>
                      {currentBrand === 'lifetime' && (
                        <>
                          <button onClick={() => handleNavigation('illinois')}>Illinois</button>
                          <button onClick={() => handleNavigation('minnesota')}>Minnesota</button>
                          <button onClick={() => handleNavigation('colorado')}>Colorado</button>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <button 
                  className="nav-link financing-link"
                  onClick={() => handleNavigation('financing')}
                >
                  Financing 💳
                </button>
              </div>
            </div>

            <div className="nav-right">
              <div className="contact-info">
                <div className="phone">
                  <span className="phone-number">{currentBrandData.phone}</span>
                  <span className="phone-label">Call Now for Service</span>
                </div>
                <button 
                  className="cta-button"
                  onClick={() => handleNavigation('estimate')}
                >
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );

  const renderHomePage = () => (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${currentBrandData.heroImage})`}}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">Wisconsin's Premier Home Services</div>
              <h1 className="hero-title">{currentBrandData.tagline}</h1>
              <p className="hero-description">{currentBrandData.description}</p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  ✓ Get Free Estimate
                </button>
                <button className="btn btn-secondary">
                  📞 Call {currentBrandData.phone}
                </button>
                <button className="btn btn-financing">
                  💳 Financing Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive home services with lifetime warranties and professional results.</p>
          
          <div className="services-grid">
            {currentBrand === 'lifetime' && (
              <>
                <div className="service-card">
                  <div className="service-image">
                    <img src="/airthings-corentium-pro.jpg" alt="Professional radon testing device" />
                    <div className="service-overlay">
                      <div className="service-icon">🏠</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>FREE Radon Testing</h3>
                    <p>Professional radon testing with EPA-certified professionals</p>
                    <ul>
                      <li>✓ 100% FREE testing - no hidden costs</li>
                      <li>✓ EPA-certified professionals</li>
                      <li>✓ Fast, accurate results</li>
                      <li>✓ Professional equipment</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/radon-mitigation-system.jpg" alt="Professional radon mitigation system" />
                    <div className="service-overlay">
                      <div className="service-icon">⚡</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Radon Mitigation</h3>
                    <p>EPA-certified radon mitigation systems</p>
                    <ul>
                      <li>✓ EPA-certified installation</li>
                      <li>✓ Custom system design</li>
                      <li>✓ Guaranteed results</li>
                      <li>✓ Professional monitoring</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/duct-cleaning-professional.jpg" alt="Professional duct cleaning service" />
                    <div className="service-overlay">
                      <div className="service-icon">🌪️</div>
                      <img src="/aeroseal-logo.png" alt="AeroSeal logo" className="aeroseal-logo" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Duct Cleaning & AeroSeal</h3>
                    <p>Professional duct cleaning and AeroSeal technology</p>
                    <ul>
                      <li>✓ Professional duct cleaning</li>
                      <li>✓ AeroSeal duct sealing</li>
                      <li>✓ Improved air quality</li>
                      <li>✓ Energy efficiency upgrades</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/premium-garage-coating.jpg" alt="Premium garage floor coating" />
                    <div className="service-overlay">
                      <div className="service-icon">✨</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Concrete Coatings</h3>
                    <p>Premium Torginol floor coating systems</p>
                    <ul>
                      <li>✓ Premium Torginol coatings</li>
                      <li>✓ Multiple flake options</li>
                      <li>✓ Lifetime durability</li>
                      <li>✓ Professional installation</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>
              </>
            )}

            {currentBrand === 'america' && (
              <>
                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-smart-home-hero.jpg" alt="Smart home automation" />
                    <div className="service-overlay">
                      <div className="service-icon">🏠</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Smart Home Automation</h3>
                    <p>Complete home automation powered by Control4</p>
                    <ul>
                      <li>✓ Control4 integration</li>
                      <li>✓ Sonos speaker systems</li>
                      <li>✓ Smart TV installation</li>
                      <li>✓ Whole-home WiFi</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-security-hero.jpg" alt="Security system installation" />
                    <div className="service-overlay">
                      <div className="service-icon">🔒</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Security Systems</h3>
                    <p>Professional security and surveillance solutions</p>
                    <ul>
                      <li>✓ Professional installation</li>
                      <li>✓ 24/7 monitoring</li>
                      <li>✓ Smart integration</li>
                      <li>✓ Mobile access</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-control4-hero.jpg" alt="Control4 home automation" />
                    <div className="service-overlay">
                      <div className="service-icon">📱</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Control4 Integration</h3>
                    <p>Professional Control4 smart home systems</p>
                    <ul>
                      <li>✓ Whole home control</li>
                      <li>✓ Custom programming</li>
                      <li>✓ Professional installation</li>
                      <li>✓ Ongoing support</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-smart-home-hero.jpg" alt="Entertainment systems" />
                    <div className="service-overlay">
                      <div className="service-icon">🎵</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Entertainment Systems</h3>
                    <p>Premium audio and video entertainment</p>
                    <ul>
                      <li>✓ Sonos audio systems</li>
                      <li>✓ Home theater setup</li>
                      <li>✓ Multi-room audio</li>
                      <li>✓ Smart TV integration</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>
              </>
            )}

            {currentBrand === 'closets' && (
              <>
                <div className="service-card">
                  <div className="service-image">
                    <img src="/closets-luxury-hero.jpg" alt="Custom luxury closet" />
                    <div className="service-overlay">
                      <div className="service-icon">👔</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Custom Closets</h3>
                    <p>Luxury custom walk-in closet designs</p>
                    <ul>
                      <li>✓ Custom design</li>
                      <li>✓ Premium materials</li>
                      <li>✓ Professional installation</li>
                      <li>✓ Lifetime warranty</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/closets-pantry-hero.jpg" alt="Organized pantry system" />
                    <div className="service-overlay">
                      <div className="service-icon">🥫</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Pantry Organization</h3>
                    <p>Custom pantry and kitchen storage solutions</p>
                    <ul>
                      <li>✓ Custom shelving</li>
                      <li>✓ Organized storage</li>
                      <li>✓ Easy access design</li>
                      <li>✓ Professional installation</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/organized-garage-storage.jpg" alt="Clean organized garage with premium wood storage systems" />
                    <div className="service-overlay">
                      <div className="service-icon">🏠</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Garage Storage</h3>
                    <p>Premium wood organization systems for clean, organized garages</p>
                    <ul>
                      <li>✓ Custom wood shelving systems</li>
                      <li>✓ Professional installation</li>
                      <li>✓ Premium materials</li>
                      <li>✓ Lifetime organization</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/home-office-organization.jpg" alt="Custom home office with built-in storage solutions" />
                    <div className="service-overlay">
                      <div className="service-icon">💼</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Home Office Organization</h3>
                    <p>Custom built-in office solutions and workspace design</p>
                    <ul>
                      <li>✓ Custom built-in desks</li>
                      <li>✓ File organization systems</li>
                      <li>✓ Premium wood finishes</li>
                      <li>✓ Professional design</li>
                    </ul>
                    <button className="btn btn-service">Learn More</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container">
          <div className="badges-grid">
            <div className="badge">
              <div className="badge-icon">🏆</div>
              <div className="badge-text">EPA Certified</div>
            </div>
            <div className="badge">
              <div className="badge-icon">✅</div>
              <div className="badge-text">Licensed & Insured</div>
            </div>
            <div className="badge">
              <div className="badge-icon">⭐</div>
              <div className="badge-text">5-Star Reviews</div>
            </div>
            <div className="badge">
              <div className="badge-icon">🛡️</div>
              <div className="badge-text">Lifetime Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Brands */}
      <section className="explore-brands">
        <div className="container">
          <h2 className="section-title">Explore Our Family of Brands</h2>
          <p className="section-subtitle">Specialized services across multiple home improvement categories</p>
          
          <div className="brands-grid">
            <div className="brand-card" onClick={() => handleBrandSwitch('lifetime')}>
              <img src="/LifetimeHomeServicesLogo.png" alt="Lifetime Home Services" />
              <h3>Lifetime Home Services</h3>
              <p>Radon testing, mitigation, duct cleaning, and floor coatings</p>
            </div>
            <div className="brand-card" onClick={() => handleBrandSwitch('america')}>
              <img src="/AmericaIn-HomeLogo.jpg" alt="America In-Home" />
              <h3>America In-Home</h3>
              <p>Smart home automation, security systems, and Control4 integration</p>
            </div>
            <div className="brand-card" onClick={() => handleBrandSwitch('closets')}>
              <img src="/NewClosetConceptsLogo.png" alt="Closet Concepts" />
              <h3>Closet Concepts</h3>
              <p>Custom closets, pantry organization, and storage solutions</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  const renderStatePage = (state) => {
    const stateData = {
      wisconsin: {
        name: 'Wisconsin',
        description: 'Professional home services within 1 hour of Brookfield, WI',
        areas: [
          {
            name: 'Milwaukee Metro',
            description: 'Complete home services throughout the Milwaukee metropolitan area',
            areaCodes: '(414)(262)',
            zipCodes: '53005,53012,53018,53022,53024,53027,53029,53033,53037,53045,53051,53056',
            moreZips: 82
          },
          {
            name: 'Waukesha County',
            description: 'Professional services throughout Waukesha County communities',
            areaCodes: '(262)',
            zipCodes: '53018,53029,53045,53066,53072,53089,53090,53097,53108,53114,53118,53119',
            moreZips: 23
          }
        ]
      }
    };

    const data = stateData[state];
    if (!data) return <div>State not found</div>;

    return (
      <main id="main-content">
        <section className="state-hero">
          <div className="state-silhouette"></div>
          <div className="container">
            <div className="state-content">
              <h1>{data.name} Service Areas</h1>
              <p>{data.description}</p>
              
              <div className="trust-badges-horizontal">
                <div className="badge">EPA Certified</div>
                <div className="badge">Licensed & Insured</div>
                <div className="badge">5-Star Reviews</div>
                <div className="badge">Lifetime Warranty</div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-areas">
          <div className="container">
            <h2>Our Service Areas in {data.name}</h2>
            
            {data.areas.map((area, index) => (
              <div key={index} className="area-section">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                
                <div className="area-details">
                  <div className="area-codes">
                    <strong>Area Codes:</strong> {area.areaCodes}
                  </div>
                  
                  <div className="zip-codes">
                    <strong>Zip Codes Served:</strong>
                    <div className="zip-list">
                      {area.zipCodes}
                      {area.moreZips && !expandedZipCodes[area.name] && (
                        <button 
                          className="expand-zips"
                          onClick={() => toggleZipCodes(area.name)}
                        >
                          +{area.moreZips} more
                        </button>
                      )}
                      {expandedZipCodes[area.name] && (
                        <div className="expanded-zips">
                          {/* Additional zip codes would be shown here */}
                          <button 
                            className="collapse-zips"
                            onClick={() => toggleZipCodes(area.name)}
                          >
                            Show less
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  };

  const renderFinancingPage = () => (
    <main id="main-content">
      <section className="financing-hero">
        <div className="container">
          <h1>Financing Options Available</h1>
          <p>Make your home improvement dreams a reality with flexible financing solutions</p>
        </div>
      </section>

      <section className="financing-content">
        <div className="container">
          <div className="financing-grid">
            <div className="financing-card">
              <h3>Synchrony Financing</h3>
              <p>We partner with Synchrony to offer flexible payment options for your home improvement projects.</p>
              <ul>
                <li>✓ Competitive interest rates</li>
                <li>✓ Flexible payment terms</li>
                <li>✓ Quick approval process</li>
                <li>✓ No prepayment penalties</li>
              </ul>
              <a 
                href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply for Financing
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  const renderEstimatePage = () => (
    <main id="main-content">
      <section className="estimate-hero">
        <div className="container">
          <h1>Get Your Free Estimate</h1>
          <p>Tell us about your project and we'll provide a detailed estimate</p>
        </div>
      </section>

      <section className="estimate-form">
        <div className="container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="project-description">Tell us about your project...</label>
              <textarea 
                id="project-description"
                name="project-description"
                rows="4"
                placeholder="Describe your project needs..."
              ></textarea>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Get Free Estimate
            </button>
          </form>
        </div>
      </section>
    </main>
  );

  // Render current page
  const renderCurrentPage = () => {
    if (currentPage === 'home') return renderHomePage();
    if (currentPage === 'wisconsin') return renderStatePage('wisconsin');
    if (currentPage === 'financing') return renderFinancingPage();
    if (currentPage === 'estimate') return renderEstimatePage();
    
    // Default to home for any other page
    return renderHomePage();
  };

  return (
    <div className="App">
      {renderHeader()}
      {renderCurrentPage()}
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src={currentBrandData.logo} alt={currentBrandData.name} className="footer-logo" />
              <p>{currentBrandData.description}</p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                {currentBrandData.services.map((service, index) => (
                  <li key={index}>
                    <button onClick={() => handleNavigation(`service-${index}`)}>
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Service Areas</h4>
              <ul>
                <li><button onClick={() => handleNavigation('wisconsin')}>Wisconsin</button></li>
                {currentBrand === 'lifetime' && (
                  <>
                    <li><button onClick={() => handleNavigation('illinois')}>Illinois</button></li>
                    <li><button onClick={() => handleNavigation('minnesota')}>Minnesota</button></li>
                    <li><button onClick={() => handleNavigation('colorado')}>Colorado</button></li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>{currentBrandData.phone}</p>
              <p>3485 N. 124th St.<br />Brookfield, WI 53005</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 {currentBrandData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

