import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showDropdown, setShowDropdown] = useState(null);
  const [expandedZipCodes, setExpandedZipCodes] = useState({});

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, currentBrand]);

  const toggleZipCodes = (area) => {
    setExpandedZipCodes(prev => ({
      ...prev,
      [area]: !prev[area]
    }));
  };

  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      logo: '/LifetimeHomeServicesLogo.png',
      phone: '(262) 955-5701',
      services: ['FREE Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings'],
      colors: {
        primary: '#2563eb',
        secondary: '#fbbf24',
        accent: '#1e40af'
      }
    },
    america: {
      name: 'America In-Home',
      tagline: 'Smart Home Technology Solutions',
      logo: '/AmericaIn-HomeLogo.jpg',
      phone: '(262) 955-5701',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration'],
      colors: {
        primary: '#dc2626',
        secondary: '#1e40af',
        accent: '#ffffff'
      }
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Custom Organization Solutions',
      logo: '/NewClosetConceptsLogo.png',
      phone: '(262) 955-5701',
      services: ['Walk-in Closets', 'Reach-in Closets', 'Pantry Organization', 'Garage Storage', 'Laundry Rooms', 'Mudrooms', 'Home Offices', 'Craft Rooms'],
      colors: {
        primary: '#059669',
        secondary: '#fbbf24',
        accent: '#065f46'
      }
    }
  };

  const currentBrandData = brands[currentBrand];

  const Header = () => (
    <header className="header" style={{ backgroundColor: currentBrandData.colors.primary }}>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Brand switcher bar */}
      <div className="brand-switcher-bar">
        <div className="container">
          <div className="brand-switcher">
            <button 
              className="brand-dropdown-btn"
              onClick={() => setShowDropdown(showDropdown === 'brands' ? null : 'brands')}
            >
              Our Brands ▼
            </button>
            {showDropdown === 'brands' && (
              <div className="dropdown-menu">
                <button onClick={() => { setCurrentBrand('lifetime'); setCurrentPage('home'); setShowDropdown(null); }}>
                  Lifetime Home Services
                </button>
                <button onClick={() => { setCurrentBrand('america'); setCurrentPage('home'); setShowDropdown(null); }}>
                  America In-Home
                </button>
                <button onClick={() => { setCurrentBrand('closets'); setCurrentPage('home'); setShowDropdown(null); }}>
                  Closet Concepts
                </button>
              </div>
            )}
          </div>
          <span className="brand-switcher-text">Switch between our family of brands for specialized services</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="main-nav">
        <div className="container">
          <div className="nav-left">
            <img 
              src={currentBrandData.logo} 
              alt={`${currentBrandData.name} logo`} 
              className="logo"
              onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
              style={{ cursor: 'pointer' }}
            />
            <div className="brand-info">
              <h1>{currentBrandData.name}</h1>
              <p>{currentBrandData.tagline}</p>
            </div>
          </div>

          <nav className="nav-center">
            <button 
              className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
            >
              Home
            </button>
            
            <div className="nav-dropdown">
              <button 
                className="nav-btn"
                onClick={() => setShowDropdown(showDropdown === 'services' ? null : 'services')}
              >
                Services ▼
              </button>
              {showDropdown === 'services' && (
                <div className="dropdown-menu">
                  {currentBrandData.services.map((service, index) => (
                    <button 
                      key={index}
                      onClick={() => {
                        if (service === 'FREE Radon Testing') setCurrentPage('radon-testing');
                        else if (service === 'Radon Mitigation') setCurrentPage('radon-mitigation');
                        else if (service === 'Duct Cleaning & AeroSeal') setCurrentPage('hvac');
                        else if (service === 'Concrete Coatings') setCurrentPage('concrete');
                        else if (service === 'Smart Home Automation') setCurrentPage('smart-home');
                        else if (service === 'Security Systems') setCurrentPage('security');
                        else if (service === 'Control4 Integration') setCurrentPage('control4');
                        else if (service === 'Walk-in Closets') setCurrentPage('walk-in-closets');
                        else if (service === 'Reach-in Closets') setCurrentPage('reach-in-closets');
                        else if (service === 'Pantry Organization') setCurrentPage('pantry');
                        else if (service === 'Garage Storage') setCurrentPage('garage-storage');
                        else if (service === 'Laundry Rooms') setCurrentPage('laundry');
                        else if (service === 'Mudrooms') setCurrentPage('mudrooms');
                        else if (service === 'Home Offices') setCurrentPage('home-offices');
                        else if (service === 'Craft Rooms') setCurrentPage('craft-rooms');
                        setShowDropdown(null);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {service}
                    </button>
                  ))}
                  {currentBrand === 'lifetime' && (
                    <button onClick={() => { setCurrentPage('radon-education'); setShowDropdown(null); window.scrollTo(0, 0); }}>
                      Radon Education
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="nav-dropdown">
              <button 
                className="nav-btn"
                onClick={() => setShowDropdown(showDropdown === 'areas' ? null : 'areas')}
              >
                Service Areas ▼
              </button>
              {showDropdown === 'areas' && (
                <div className="dropdown-menu">
                  <button onClick={() => { setCurrentPage('wisconsin'); setShowDropdown(null); window.scrollTo(0, 0); }}>
                    Wisconsin
                  </button>
                  {currentBrand === 'lifetime' && (
                    <>
                      <button onClick={() => { setCurrentPage('illinois'); setShowDropdown(null); window.scrollTo(0, 0); }}>
                        Illinois
                      </button>
                      <button onClick={() => { setCurrentPage('minnesota'); setShowDropdown(null); window.scrollTo(0, 0); }}>
                        Minnesota
                      </button>
                      <button onClick={() => { setCurrentPage('colorado'); setShowDropdown(null); window.scrollTo(0, 0); }}>
                        Colorado
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </nav>

          <div className="nav-right">
            <button 
              className="financing-btn"
              onClick={() => window.open('https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1', '_blank')}
              style={{ backgroundColor: currentBrandData.colors.secondary, color: '#000' }}
            >
              Financing 💳
            </button>
            <div className="contact-info">
              <span className="phone">{currentBrandData.phone}</span>
              <span className="call-text">Call Now for Service</span>
            </div>
            <button 
              className="estimate-btn"
              style={{ backgroundColor: currentBrandData.colors.secondary, color: '#000' }}
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `url(/${currentBrand}-hero-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge" style={{ backgroundColor: currentBrandData.colors.secondary }}>
            {currentBrand === 'lifetime' && "Wisconsin's Premier Home Services"}
            {currentBrand === 'america' && "Smart Home Technology Experts"}
            {currentBrand === 'closets' && "Custom Organization Specialists"}
          </div>
          
          <h1 className="hero-title">
            {currentBrand === 'lifetime' && (
              <>
                Lifetime Home <span style={{ color: currentBrandData.colors.secondary }}>Solutions</span><br />
                <span style={{ color: currentBrandData.colors.secondary }}>Trusted Solutions. Lifetime Results.</span>
              </>
            )}
            {currentBrand === 'america' && (
              <>
                Smart Home Technology with <span style={{ color: currentBrandData.colors.secondary }}>Professional</span><br />
                <span style={{ color: currentBrandData.colors.secondary }}>Installation & Support</span>
              </>
            )}
            {currentBrand === 'closets' && (
              <>
                Custom Organization with <span style={{ color: currentBrandData.colors.secondary }}>Premium</span><br />
                <span style={{ color: currentBrandData.colors.secondary }}>Materials & Design</span>
              </>
            )}
          </h1>

          <p className="hero-description">
            {currentBrand === 'lifetime' && "Complete home services including radon testing, duct cleaning, and premium floor coatings."}
            {currentBrand === 'america' && "Control4 automation, security systems, and smart home integration for modern living."}
            {currentBrand === 'closets' && "Transform your spaces with custom closets, pantries, garages, and organization solutions."}
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              style={{ backgroundColor: currentBrandData.colors.secondary, color: '#000' }}
            >
              ✓ Get Free Estimate
            </button>
            <button 
              className="btn btn-secondary"
              style={{ borderColor: currentBrandData.colors.secondary, color: currentBrandData.colors.secondary }}
            >
              📞 Call {currentBrandData.phone}
            </button>
            <button 
              className="btn btn-financing"
              onClick={() => window.open('https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1', '_blank')}
              style={{ backgroundColor: '#10b981', color: '#fff' }}
            >
              💳 Financing Available
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive home services with lifetime warranties and professional results.
          </p>

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
                    <button className="btn btn-service" onClick={() => setCurrentPage('radon-testing')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/radon-mitigation-system.jpg" alt="EPA-certified radon mitigation systems" />
                    <div className="service-overlay">
                      <div className="service-icon">⚡</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Radon Mitigation</h3>
                    <p>EPA-certified radon mitigation systems</p>
                    <ul>
                      <li>✓ EPA-certified installation</li>
                      <li>✓ Guaranteed results</li>
                      <li>✓ Lifetime warranty</li>
                      <li>✓ Professional systems</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('radon-mitigation')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/duct-cleaning-professional.jpg" alt="Professional duct cleaning service" />
                    <div className="service-overlay">
                      <div className="service-icon">🌪️</div>
                      <img src="/aeroseal-logo.png" alt="AeroSeal" className="service-logo" />
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
                    <button className="btn btn-service" onClick={() => setCurrentPage('hvac')}>Learn More</button>
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
                      <li>✓ Premium Torginol systems</li>
                      <li>✓ Lifetime warranty</li>
                      <li>✓ Custom flake options</li>
                      <li>✓ Professional installation</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('concrete')}>Learn More</button>
                  </div>
                </div>
              </>
            )}

            {currentBrand === 'america' && (
              <>
                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-smart-home-hero.jpg" alt="Smart home automation system" />
                    <div className="service-overlay">
                      <div className="service-icon">🏠</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Smart Home Automation</h3>
                    <p>Complete home automation with Control4 technology</p>
                    <ul>
                      <li>✓ Control4 integration</li>
                      <li>✓ Sonos speaker systems</li>
                      <li>✓ Smart TV installation</li>
                      <li>✓ Whole-home WiFi</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('smart-home')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-security-hero.jpg" alt="Professional security system installation" />
                    <div className="service-overlay">
                      <div className="service-icon">🔒</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Security Systems</h3>
                    <p>Professional security and surveillance solutions</p>
                    <ul>
                      <li>✓ Camera systems</li>
                      <li>✓ Access control</li>
                      <li>✓ Professional monitoring</li>
                      <li>✓ Mobile app control</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('security')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/america-control4-hero.jpg" alt="Control4 home automation interface" />
                    <div className="service-overlay">
                      <div className="service-icon">📱</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Control4 Integration</h3>
                    <p>Professional Control4 automation systems</p>
                    <ul>
                      <li>✓ Lighting control</li>
                      <li>✓ Climate automation</li>
                      <li>✓ Entertainment systems</li>
                      <li>✓ Voice control</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('control4')}>Learn More</button>
                  </div>
                </div>
              </>
            )}

            {currentBrand === 'closets' && (
              <>
                <div className="service-card">
                  <div className="service-image">
                    <img src="/walk-in-closet.jpg" alt="Luxury walk-in closet design" />
                    <div className="service-overlay">
                      <div className="service-icon">👗</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Walk-in Closets</h3>
                    <p>Luxury walk-in closet systems with premium materials</p>
                    <ul>
                      <li>✓ Custom design consultation</li>
                      <li>✓ Premium materials</li>
                      <li>✓ Professional installation</li>
                      <li>✓ Lifetime warranty</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('walk-in-closets')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/reach-in-closet.jpg" alt="Custom reach-in closet organization" />
                    <div className="service-overlay">
                      <div className="service-icon">📦</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Reach-in Closets</h3>
                    <p>Maximize space with custom reach-in closet solutions</p>
                    <ul>
                      <li>✓ Space optimization</li>
                      <li>✓ Custom shelving</li>
                      <li>✓ Adjustable components</li>
                      <li>✓ Easy access design</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('reach-in-closets')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/pantry-organization.jpg" alt="Custom pantry organization system" />
                    <div className="service-overlay">
                      <div className="service-icon">🥫</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Pantry Organization</h3>
                    <p>Transform your pantry with custom shelving solutions</p>
                    <ul>
                      <li>✓ Custom shelving systems</li>
                      <li>✓ Pull-out drawers</li>
                      <li>✓ Adjustable components</li>
                      <li>✓ Easy access design</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('pantry')}>Learn More</button>
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
                    <button className="btn btn-service" onClick={() => setCurrentPage('garage-storage')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/laundry-room.jpg" alt="Organized laundry room with custom storage" />
                    <div className="service-overlay">
                      <div className="service-icon">👕</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Laundry Rooms</h3>
                    <p>Efficient laundry room organization and storage</p>
                    <ul>
                      <li>✓ Custom storage solutions</li>
                      <li>✓ Folding stations</li>
                      <li>✓ Hanging systems</li>
                      <li>✓ Space optimization</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('laundry')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/mudroom.jpg" alt="Custom mudroom organization system" />
                    <div className="service-overlay">
                      <div className="service-icon">🥾</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Mudrooms</h3>
                    <p>Keep your entryway organized with custom mudroom solutions</p>
                    <ul>
                      <li>✓ Custom lockers</li>
                      <li>✓ Bench seating</li>
                      <li>✓ Coat storage</li>
                      <li>✓ Shoe organization</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('mudrooms')}>Learn More</button>
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
                    <h3>Home Offices</h3>
                    <p>Custom built-in office solutions and workspace design</p>
                    <ul>
                      <li>✓ Custom built-in desks</li>
                      <li>✓ File organization systems</li>
                      <li>✓ Premium wood finishes</li>
                      <li>✓ Professional design</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('home-offices')}>Learn More</button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/craft-room.jpg" alt="Organized craft room with custom storage" />
                    <div className="service-overlay">
                      <div className="service-icon">🎨</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>Craft Rooms</h3>
                    <p>Creative spaces with organized storage for all your supplies</p>
                    <ul>
                      <li>✓ Custom storage solutions</li>
                      <li>✓ Craft supply organization</li>
                      <li>✓ Work surface design</li>
                      <li>✓ Creative space planning</li>
                    </ul>
                    <button className="btn btn-service" onClick={() => setCurrentPage('craft-rooms')}>Learn More</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Business Information Section */}
      <section className="business-info-section">
        <div className="container">
          <div className="business-info-grid">
            <div className="business-info-card">
              <h3>Visit Our Showroom</h3>
              <div className="address-info">
                <p><strong>Closet Concepts</strong></p>
                <p>3485 North 124th Street</p>
                <p>Brookfield, Wisconsin 53005</p>
                <p>United States</p>
                <a 
                  href="https://maps.google.com/?q=3485+North+124th+Street,+Brookfield,+WI+53005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="maps-link"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>

            <div className="business-info-card">
              <h3>Business Hours</h3>
              <div className="hours-info">
                <p><strong>Monday - Friday:</strong> 9am - 5pm</p>
                <p><strong>Saturday:</strong> By Appointment Only</p>
                <p><strong>Sunday:</strong> Closed</p>
                <p className="current-status">Open today 09:00 am – 05:00 pm</p>
              </div>
            </div>

            <div className="business-info-card">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <p><strong>Phone:</strong> <a href="tel:2629555701">(262) 955-5701</a></p>
                <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
                <button className="contact-btn">Drop Us a Line!</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Brands Section - Moved to bottom */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">Explore Our Family of Brands</h2>
          <p className="section-subtitle">
            Specialized services across multiple brands for all your home needs
          </p>

          <div className="brands-grid">
            <div className="brand-card" onClick={() => { setCurrentBrand('lifetime'); setCurrentPage('home'); }}>
              <img src="/LifetimeHomeServicesLogo.png" alt="Lifetime Home Services" />
              <h3>Lifetime Home Services</h3>
              <p>Radon testing, duct cleaning, and premium floor coatings</p>
              <button className="btn btn-brand">Explore Lifetime →</button>
            </div>

            <div className="brand-card" onClick={() => { setCurrentBrand('america'); setCurrentPage('home'); }}>
              <img src="/AmericaIn-HomeLogo.jpg" alt="America In-Home" />
              <h3>America In-Home</h3>
              <p>Smart home automation, security, and Control4 integration</p>
              <button className="btn btn-brand">Explore America In-Home →</button>
            </div>

            <div className="brand-card" onClick={() => { setCurrentBrand('closets'); setCurrentPage('home'); }}>
              <img src="/NewClosetConceptsLogo.png" alt="Closet Concepts" />
              <h3>Closet Concepts</h3>
              <p>Custom closets, pantries, garages, and organization solutions</p>
              <button className="btn btn-brand">Explore Closet Concepts →</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  const RadonEducationPage = () => (
    <main id="main-content" className="radon-education-page">
      <div className="container">
        <div className="page-header">
          <h1>Radon Education: What Every Homeowner Should Know</h1>
          <p className="page-subtitle">Comprehensive information about radon gas, testing, and mitigation</p>
        </div>

        <div className="education-content">
          <section className="education-section">
            <h2>What Is Radon?</h2>
            <p>
              Radon is a naturally occurring radioactive gas that forms when uranium breaks down in soil, rock, and water. 
              It's invisible, odorless, and tasteless, which means the only way to detect it is through testing. According to the{' '}
              <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA</a>, radon is the{' '}
              <strong>second leading cause of lung cancer in the United States</strong>, responsible for over 20,000 deaths each year.
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
            <div className="entry-points">
              <h3>Common Entry Points:</h3>
              <ul>
                <li>Cracks in concrete floors and walls</li>
                <li>Gaps in suspended floors</li>
                <li>Crawlspaces</li>
                <li>Openings around pipes and utility lines</li>
                <li>Floor drains and sump pumps</li>
              </ul>
            </div>
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
            <div className="testing-benefits">
              <h3>Testing is:</h3>
              <ul>
                <li>Quick</li>
                <li>Non-invasive</li>
                <li>Essential for all homeowners—whether buying, selling, or simply ensuring peace of mind</li>
              </ul>
            </div>
            <a 
              href="https://www.lifetimehomeservices.com/radon/testing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-link"
            >
              Schedule Your Free Test Now
            </a>
          </section>

          <section className="education-section">
            <h2>What If You Have High Radon Levels?</h2>
            <p>
              <strong>Don't panic—radon mitigation is highly effective.</strong> Our team uses proven, code-compliant systems 
              that lower radon levels quickly and permanently.
            </p>
            
            <div className="before-after">
              <h3>Before & After Mitigation Examples:</h3>
              <div className="comparison-images">
                <div className="comparison-item">
                  <h4>Before:</h4>
                  <img 
                    src="https://www.epa.gov/sites/default/files/2020-01/images/radon-before.jpg" 
                    alt="Before Mitigation" 
                    className="comparison-image"
                  />
                </div>
                <div className="comparison-item">
                  <h4>After:</h4>
                  <img 
                    src="https://www.epa.gov/sites/default/files/2020-01/images/radon-after.jpg" 
                    alt="After Mitigation" 
                    className="comparison-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>Radon Mitigation System Options</h2>
            <p>Depending on your home's construction and radon levels, we may recommend:</p>

            <div className="mitigation-systems">
              <div className="system-option">
                <h3>1. Sub-Slab Depressurization (Most Common)</h3>
                <ul>
                  <li>Ideal for homes with concrete slab foundations.</li>
                  <li>A PVC pipe is inserted through the basement floor into the soil beneath.</li>
                  <li>A fan draws radon gas up through the pipe and safely vents it above the roofline.</li>
                  <li>Effective in reducing radon from beneath the entire foundation.</li>
                </ul>
                <img 
                  src="https://www.epa.gov/sites/default/files/styles/medium/public/2020-01/images/radon-system.jpg" 
                  alt="Sub-Slab Example" 
                  className="system-image"
                />
              </div>

              <div className="system-option">
                <h3>2. Sump Pit Depressurization</h3>
                <ul>
                  <li>Utilizes the existing sump pit as the suction point.</li>
                  <li>The pit is sealed with an airtight lid and connected to a vent pipe.</li>
                  <li>Cost-effective and efficient if the home already has a sump pump.</li>
                </ul>
                <img 
                  src="https://www.radon.com/images/sump-system.jpg" 
                  alt="Sump Pit Example" 
                  className="system-image"
                />
              </div>

              <div className="system-option">
                <h3>3. Drain Tile Depressurization</h3>
                <ul>
                  <li>Works with homes that have drain tile systems installed under the slab.</li>
                  <li>Radon is collected and vented via the same tile system, reducing the need for drilling.</li>
                </ul>
                <img 
                  src="https://inspectapedia.com/radon/Drain-Tile-Radon-Mitigation.jpg" 
                  alt="Drain Tile System" 
                  className="system-image"
                />
              </div>

              <div className="system-option">
                <h3>4. Crawl Space Encapsulation</h3>
                <ul>
                  <li>Used in homes with crawlspaces or exposed soil.</li>
                  <li>Heavy-duty plastic sheeting is sealed over the soil.</li>
                  <li>A fan and piping system draw radon from below the membrane and vent it outside.</li>
                </ul>
                <img 
                  src="https://www.radonsystems.com/wp-content/uploads/2021/02/rs3.jpg" 
                  alt="Crawl Space System" 
                  className="system-image"
                />
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>The Radon Fans We Trust</h2>
            <p>
              We exclusively install high-performance radon fans from{' '}
              <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a>, 
              a leading U.S. manufacturer known for durability, quiet operation, and maximum draw.
            </p>
            
            <div className="fan-models">
              <h3>Our Preferred Models:</h3>
              <ul>
                <li><strong>Maverick Eagle</strong> – Ideal for standard sub-slab systems, quiet and efficient</li>
                <li><strong>Eagle Max</strong> – High-powered for homes with compacted subgrade or multiple suction points</li>
                <li><strong>Legends</strong> – Sleek, high-performance fans for visible exterior installs</li>
                <li><strong>Legends Max</strong> – Maximum air volume for challenging mitigation scenarios</li>
              </ul>
              <p>
                Each fan is selected based on your home's layout and mitigation needs, ensuring optimal airflow and long-term performance.
              </p>
            </div>
          </section>

          <section className="education-section">
            <h2>Why Choose Lifetime Home Services?</h2>
            <ul>
              <li>Certified radon professionals</li>
              <li>Lifetime warranty on system components</li>
              <li>Transparent, upfront pricing</li>
              <li>Optional aesthetic fan covers and performance upgrades</li>
              <li>Discounts when bundled with Aeroseal duct sealing or floor coating services</li>
            </ul>
            <blockquote>
              <strong>Trusted Solutions. Lifetime Results.</strong>
            </blockquote>
          </section>

          <section className="education-section">
            <h2>Still Have Questions?</h2>
            <p>
              Check out the EPA's{' '}
              <a 
                href="https://www.epa.gov/sites/default/files/2015-05/documents/hmbuygud.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Home Buyer's and Seller's Guide to Radon
              </a>{' '}
              or call our team directly.
            </p>
            
            <div className="contact-cta">
              <h3>Lifetime Home Services</h3>
              <p><strong>Trusted Solutions. Lifetime Results.</strong></p>
              <p>📞 <strong>(262) 955-5701</strong></p>
              <p>
                🌐{' '}
                <a 
                  href="https://www.lifetimehomeservices.com/radon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Our Radon Services
                </a>
              </p>
            </div>

            <blockquote className="final-quote">
              <em>Radon is a risk you can't see—but it's one you can eliminate. Let us help you breathe easier.</em>
            </blockquote>
          </section>
        </div>
      </div>
    </main>
  );

  // State Pages Component
  const StatePage = ({ state }) => {
    const stateData = {
      wisconsin: {
        name: 'Wisconsin',
        description: 'Professional home services within 1 hour of Brookfield, WI',
        services: currentBrand === 'lifetime' ? 
          ['FREE Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings'] :
          currentBrand === 'america' ?
          ['Smart Home Automation', 'Security Systems', 'Control4 Integration'] :
          ['Walk-in Closets', 'Reach-in Closets', 'Pantry Organization', 'Garage Storage', 'Laundry Rooms', 'Mudrooms', 'Home Offices', 'Craft Rooms'],
        areas: [
          {
            name: 'Milwaukee Metro',
            description: 'Complete home services throughout the Milwaukee metropolitan area',
            areaCodes: '(414)(262)',
            zipCodes: ['53005', '53012', '53018', '53022', '53024', '53027', '53029', '53033', '53037', '53045', '53051', '53056'],
            moreZips: 82
          },
          {
            name: 'Waukesha County',
            description: 'Professional services throughout Waukesha County communities',
            areaCodes: '(262)',
            zipCodes: ['53018', '53029', '53045', '53066', '53072', '53089', '53090', '53097', '53108', '53114', '53118', '53119'],
            moreZips: 23
          },
          {
            name: 'Jefferson County',
            description: 'Serving Jefferson County with professional home services',
            areaCodes: '(920)(262)',
            zipCodes: ['53038', '53039', '53042', '53048', '53058', '53086', '53094', '53120', '53137', '53149', '53158', '53189'],
            moreZips: 15
          }
        ]
      },
      illinois: {
        name: 'Illinois',
        description: 'HVAC and duct cleaning services in Northern Illinois',
        services: ['Duct Cleaning & AeroSeal', 'HVAC Services'],
        areas: [
          {
            name: 'Chicago Metro',
            description: 'Professional HVAC services throughout the Chicago metropolitan area',
            areaCodes: '(312)(773)(630)',
            zipCodes: ['60601', '60602', '60603', '60604', '60605', '60606', '60607', '60608', '60609', '60610', '60611', '60612'],
            moreZips: 156
          }
        ]
      },
      minnesota: {
        name: 'Minnesota',
        description: 'FREE radon testing throughout Minnesota',
        services: ['FREE Radon Testing'],
        areas: [
          {
            name: 'Twin Cities Metro',
            description: 'FREE radon testing throughout the Minneapolis-St. Paul metropolitan area',
            areaCodes: '(612)(651)(763)',
            zipCodes: ['55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55109', '55110', '55111', '55112'],
            moreZips: 89
          }
        ]
      },
      colorado: {
        name: 'Colorado',
        description: 'Radon testing and mitigation expertise in Colorado',
        services: ['FREE Radon Testing', 'Radon Mitigation'],
        areas: [
          {
            name: 'Denver Metro',
            description: 'Professional radon services throughout the Denver metropolitan area',
            areaCodes: '(303)(720)(970)',
            zipCodes: ['80201', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212'],
            moreZips: 67
          }
        ]
      }
    };

    const data = stateData[state];

    return (
      <main id="main-content" className="state-page">
        <div className="state-hero" style={{ backgroundImage: `url(/${state}-silhouette.png)` }}>
          <div className="container">
            <h1>{data.name} Service Areas</h1>
            <p>{data.description}</p>
            
            <div className="trust-badges">
              <span className="badge">EPA Certified</span>
              <span className="badge">Licensed</span>
              <span className="badge">Insured</span>
              <span className="badge">Lifetime Warranty</span>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="state-services">
            <h2>Services Available in {data.name}</h2>
            <div className="services-grid">
              {data.services.map((service, index) => (
                <div key={index} className="service-item">
                  <h3>{service}</h3>
                  <button 
                    className="btn btn-service"
                    onClick={() => {
                      if (service === 'FREE Radon Testing') setCurrentPage('radon-testing');
                      else if (service === 'Radon Mitigation') setCurrentPage('radon-mitigation');
                      else if (service === 'Duct Cleaning & AeroSeal') setCurrentPage('hvac');
                      else if (service === 'Concrete Coatings') setCurrentPage('concrete');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="service-areas">
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
                      {area.zipCodes.join(' ')}
                      {area.moreZips && (
                        <button 
                          className="more-zips-btn"
                          onClick={() => toggleZipCodes(`${state}-${index}`)}
                        >
                          {expandedZipCodes[`${state}-${index}`] ? 'Show Less' : `+${area.moreZips} more`}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    );
  };

  // Render the appropriate page
  const renderPage = () => {
    if (currentPage === 'home') return <HomePage />;
    if (currentPage === 'radon-education') return <RadonEducationPage />;
    if (['wisconsin', 'illinois', 'minnesota', 'colorado'].includes(currentPage)) {
      return <StatePage state={currentPage} />;
    }
    
    // Service pages would go here
    return <HomePage />;
  };

  return (
    <div className="App" style={{ '--brand-primary': currentBrandData.colors.primary }}>
      <Header />
      {renderPage()}
      
      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: currentBrandData.colors.primary }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={currentBrandData.logo} alt={`${currentBrandData.name} logo`} className="footer-logo" />
              <h3>{currentBrandData.name}</h3>
              <p>{currentBrandData.tagline}</p>
            </div>
            
            <div className="footer-services">
              <h4>Services</h4>
              <ul>
                {currentBrandData.services.map((service, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        if (service === 'FREE Radon Testing') setCurrentPage('radon-testing');
                        else if (service === 'Radon Mitigation') setCurrentPage('radon-mitigation');
                        else if (service === 'Duct Cleaning & AeroSeal') setCurrentPage('hvac');
                        else if (service === 'Concrete Coatings') setCurrentPage('concrete');
                        window.scrollTo(0, 0);
                      }}
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-areas">
              <h4>Service Areas</h4>
              <ul>
                <li>
                  <button onClick={() => { setCurrentPage('wisconsin'); window.scrollTo(0, 0); }}>
                    Wisconsin
                  </button>
                </li>
                {currentBrand === 'lifetime' && (
                  <>
                    <li>
                      <button onClick={() => { setCurrentPage('illinois'); window.scrollTo(0, 0); }}>
                        Illinois
                      </button>
                    </li>
                    <li>
                      <button onClick={() => { setCurrentPage('minnesota'); window.scrollTo(0, 0); }}>
                        Minnesota
                      </button>
                    </li>
                    <li>
                      <button onClick={() => { setCurrentPage('colorado'); window.scrollTo(0, 0); }}>
                        Colorado
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>📞 {currentBrandData.phone}</p>
              <p>📧 info@lifetimehomeservices.com</p>
              <p>📍 3485 North 124th Street<br />Brookfield, WI 53005</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 {currentBrandData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

