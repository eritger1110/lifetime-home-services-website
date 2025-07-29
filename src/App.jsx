import React, { useState, useEffect } from 'react';
import './App.css';

// Define serviceImages object to fix the ReferenceError
const serviceImages = {
  'lifetime-hero-house.jpg': '/lifetime-hero-house.jpg',
  'america-smart-home-hero.jpg': '/america-smart-home-hero.jpg',
  'closets-luxury-hero.jpg': '/closets-luxury-hero.jpg',
  'radon-testing-device.jpg': '/radon-testing-device.jpg',
  'radon-mitigation-system.jpg': '/radon-mitigation-system.jpg',
  'aeroseal-logo.png': '/aeroseal-logo.png',
  'organized-garage-storage.jpg': '/organized-garage-storage.jpg',
  'home-office-organization.jpg': '/home-office-organization.jpg'
};

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServiceAreasDropdown, setShowServiceAreasDropdown] = useState(false);
  const [expandedZipSections, setExpandedZipSections] = useState({});

  // Brand configurations
  const brandConfig = {
    lifetime: {
      name: 'Lifetime Home Services',
      tagline: 'Trusted Solutions. Lifetime Results.',
      logo: '/LifetimeHomeServicesLogo.png',
      heroImage: '/lifetime-hero-house.jpg',
      primaryColor: '#2563eb',
      secondaryColor: '#1e40af',
      services: [
        'Free Radon Testing',
        'Radon Mitigation', 
        'HVAC Services',
        'Duct Cleaning & AeroSeal',
        'Concrete Coatings'
      ]
    },
    aih: {
      name: 'America In-Home',
      tagline: 'Luxury Living. Seamlessly Connected.',
      logo: '/AmericaIn-HomeLogo3.png',
      heroImage: '/america-smart-home-hero.jpg',
      primaryColor: '#b91c1c',
      secondaryColor: '#991b1b',
      services: [
        'Smart Home Automation',
        'Security Systems',
        'Control4 Integration'
      ]
    },
    closets: {
      name: 'Closet Concepts',
      tagline: 'Organized Living. Elevated Style.',
      logo: '/NewClosetConceptsLogo.pdf',
      heroImage: '/closets-luxury-hero.jpg',
      primaryColor: '#059669',
      secondaryColor: '#047857',
      services: [
        'Walk-in Closets',
        'Reach-in Closets', 
        'Pantry Organization',
        'Garage Storage'
      ]
    }
  };

  const currentBrandConfig = brandConfig[currentBrand];

  // Navigation handler
  const handleNavigation = (page, brand = null) => {
    if (brand) {
      setCurrentBrand(brand);
    }
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowServiceAreasDropdown(false);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Toggle zip code sections
  const toggleZipSection = (state) => {
    setExpandedZipSections(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  // Contact form handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Add hidden fields for Salesforce
    formData.append('lead_source', 'Internet');
    formData.append('oid', 'your_salesforce_org_id'); // Replace with actual Salesforce org ID
    
    // Submit to Salesforce Web-to-Lead
    fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
      method: 'POST',
      body: formData
    }).then(() => {
      alert('Thank you! We will contact you soon.');
      e.target.reset();
    }).catch(() => {
      alert('Thank you! We received your message and will contact you soon.');
    });
  };

  // Header Component
  const Header = () => (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img 
            src={currentBrandConfig.logo} 
            alt={currentBrandConfig.name}
            className="logo"
            onClick={() => handleNavigation('home')}
          />
        </div>
        
        <nav className="nav-brands">
          <button 
            className={`brand-tab ${currentBrand === 'lifetime' ? 'active' : ''}`}
            onClick={() => handleNavigation('home', 'lifetime')}
          >
            Lifetime Home Services
          </button>
          <button 
            className={`brand-tab ${currentBrand === 'aih' ? 'active' : ''}`}
            onClick={() => handleNavigation('home', 'aih')}
          >
            America In-Home
          </button>
          <button 
            className={`brand-tab ${currentBrand === 'closets' ? 'active' : ''}`}
            onClick={() => handleNavigation('home', 'closets')}
          >
            Closet Concepts
          </button>
        </nav>

        <div className="header-nav">
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
                    <button onClick={() => handleNavigation('radon-testing')}>Free Radon Testing</button>
                    <button onClick={() => handleNavigation('radon-mitigation')}>Radon Mitigation</button>
                    <button onClick={() => handleNavigation('hvac')}>HVAC Services</button>
                    <button onClick={() => handleNavigation('duct-cleaning')}>Duct Cleaning & AeroSeal</button>
                    <button onClick={() => handleNavigation('concrete-coatings')}>Concrete Coatings</button>
                    <button onClick={() => handleNavigation('radon-education')}>Radon Education</button>
                  </>
                )}
                {currentBrand === 'aih' && (
                  <>
                    <button onClick={() => handleNavigation('smart-home')}>Smart Home Automation</button>
                    <button onClick={() => handleNavigation('security')}>Security Systems</button>
                    <button onClick={() => handleNavigation('control4')}>Control4 Integration</button>
                  </>
                )}
                {currentBrand === 'closets' && (
                  <>
                    <button onClick={() => handleNavigation('walk-in-closets')}>Walk-in Closets</button>
                    <button onClick={() => handleNavigation('reach-in-closets')}>Reach-in Closets</button>
                    <button onClick={() => handleNavigation('pantry')}>Pantry Organization</button>
                    <button onClick={() => handleNavigation('garage')}>Garage Storage</button>
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
                <button onClick={() => handleNavigation('wisconsin')}>Wisconsin</button>
                <button onClick={() => handleNavigation('illinois')}>Illinois</button>
                <button onClick={() => handleNavigation('minnesota')}>Minnesota</button>
                <button onClick={() => handleNavigation('colorado')}>Colorado</button>
              </div>
            )}
          </div>

          <button className="nav-button" onClick={() => handleNavigation('financing')}>
            Financing
          </button>
          <button className="nav-button" onClick={() => handleNavigation('contact')}>
            Contact
          </button>
        </div>

        <div className="phone-number">
          <a href="tel:262-955-5701">(262) 955-5701</a>
        </div>
      </div>
    </header>
  );

  // Hero Section Component
  const HeroSection = () => (
    <section className="hero-section-fullscreen">
      <div className="hero-background">
        <img 
          src={currentBrandConfig.heroImage} 
          alt={`${currentBrandConfig.name} Services`}
          className="hero-image-fullscreen"
        />
      </div>
      <div className="hero-content-overlay">
        <div className="hero-text-content">
          <h1 className="hero-title-large">{currentBrandConfig.name}</h1>
          <p className="hero-subtitle-large">{currentBrandConfig.tagline}</p>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => handleNavigation('contact')}
            >
              Get Free Estimate
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => handleNavigation('financing')}
            >
              Financing Available
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Services Grid Component
  const ServicesGrid = () => {
    if (currentBrand === 'lifetime') {
      return (
        <section className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid-2x2">
              <div className="service-card">
                <img src="/radon-testing-device.jpg" alt="Free Radon Testing" />
                <h3>Free Radon Testing</h3>
                <p>Professional radon testing with EPA-certified equipment. Get peace of mind with our complimentary testing service.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('radon-testing')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <img src="/radon-mitigation-system.jpg" alt="Radon Mitigation" />
                <h3>Radon Mitigation</h3>
                <p>Custom radon mitigation systems designed and installed by certified professionals. Guaranteed results.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('radon-mitigation')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <div className="service-with-logo">
                  <img src="/organized-garage-storage.jpg" alt="Duct Cleaning" />
                  <img src="/aeroseal-logo.png" alt="AeroSeal" className="aeroseal-logo-small" />
                </div>
                <h3>Duct Cleaning & AeroSeal</h3>
                <p>Professional duct cleaning and AeroSeal duct sealing technology for improved air quality and energy efficiency.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('duct-cleaning')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <img src="/home-office-organization.jpg" alt="Concrete Coatings" />
                <h3>Concrete Coatings</h3>
                <p>Premium concrete floor coatings - like epoxy but better! Durable, beautiful, and long-lasting floor solutions.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('concrete-coatings')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (currentBrand === 'aih') {
      return (
        <section className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/america-smart-home-hero.jpg" alt="Smart Home Automation" />
                <h3>Smart Home Automation</h3>
                <p>Complete home automation solutions using Control4 technology.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('smart-home')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <img src="/organized-garage-storage.jpg" alt="Security Systems" />
                <h3>Security Systems</h3>
                <p>Professional security system installation and monitoring services.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('security')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <img src="/home-office-organization.jpg" alt="Control4 Integration" />
                <h3>Control4 Integration</h3>
                <p>Advanced Control4 home automation and smart home integration.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('control4')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (currentBrand === 'closets') {
      return (
        <section className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/closets-luxury-hero.jpg" alt="Walk-in Closets" />
                <h3>Walk-in Closets</h3>
                <p>Custom walk-in closet systems with premium materials and professional installation.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('walk-in-closets')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <img src="/organized-garage-storage.jpg" alt="Reach-in Closets" />
                <h3>Reach-in Closets</h3>
                <p>Maximize storage in reach-in closets with custom shelving and organization.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('reach-in-closets')}>
                  Learn More
                </button>
              </div>
              
              <div className="service-card">
                <img src="/home-office-organization.jpg" alt="Pantry Organization" />
                <h3>Pantry Organization</h3>
                <p>Custom pantry shelving with pull-out drawers and organizational systems.</p>
                <button className="learn-more-btn" onClick={() => handleNavigation('pantry')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  // Contact Form Component
  const ContactForm = () => (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <div className="contact-details-line">
              <span><strong>Phone:</strong> (262) 955-5701</span>
              <span><strong>Hours:</strong> Mon-Fri 8AM-5PM</span>
              <span><strong>Address:</strong> 805 Wells St, Delafield, WI 53018</span>
            </div>
            
            <div className="google-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1234567890123!2d-88.4034!3d43.0583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAzJzI5LjkiTiA4OMKwMjQnMTIuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lifetime Home Services Location"
              ></iframe>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <h3>Get Your Free Estimate</h3>
            
            <div className="form-row">
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="last_name" placeholder="Last Name" required />
            </div>
            
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="text" name="street" placeholder="Street Address" required />
            
            <div className="form-row">
              <input type="text" name="city" placeholder="City" required />
              <input type="text" name="state" placeholder="State" required />
              <input type="text" name="zip" placeholder="Zip Code" required />
            </div>
            
            <select name="service_interest" required>
              <option value="">Select Service of Interest</option>
              <option value="Radon Testing">Radon Testing</option>
              <option value="Radon Mitigation">Radon Mitigation</option>
              <option value="Custom Closets">Custom Closets</option>
              <option value="Window Blinds">Window Blinds</option>
              <option value="Smart Home Technology (AIH)">Smart Home Technology (AIH)</option>
              <option value="Floor Coatings (EPOXY)">Floor Coatings (EPOXY)</option>
              <option value="Home Security">Home Security</option>
              <option value="Aeroseal">Aeroseal</option>
              <option value="Duct Cleaning">Duct Cleaning</option>
              <option value="Multiple (Concierge Services)">Multiple (Concierge Services)</option>
            </select>
            
            <textarea name="description" placeholder="Project Description (Optional)" rows="4"></textarea>
            
            {/* Hidden fields for Salesforce */}
            <input type="hidden" name="lead_source" value="Internet" />
            <input type="hidden" name="company" value="Residential" />
            
            <button type="submit" className="submit-button">
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // State Pages Component
  const StatePage = ({ state }) => {
    const stateData = {
      wisconsin: {
        name: 'Wisconsin',
        services: ['All Services Available'],
        areaCodes: ['262', '414', '608', '715', '920', '534', '274'],
        zipCodes: [
          '53005', '53012', '53018', '53022', '53029', '53033', '53045', '53051', 
          '53056', '53066', '53072', '53089', '53090', '53092', '53095', '53097',
          '53108', '53122', '53129', '53130', '53132', '53140', '53142', '53146',
          '53149', '53150', '53151', '53154', '53158', '53168', '53172', '53186',
          '53188', '53189', '53190', '53201', '53202', '53203', '53204', '53205',
          '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213',
          '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221',
          '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233',
          '53234', '53235', '53237', '53244', '53259', '53274', '53278', '53295'
        ]
      },
      illinois: {
        name: 'Illinois',
        services: ['HVAC Services', 'Duct Cleaning', 'AeroSeal'],
        areaCodes: ['224', '312', '331', '630', '708', '773', '815', '847', '872', '464', '779'],
        zipCodes: [
          '60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011',
          '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019',
          '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031'
        ]
      },
      minnesota: {
        name: 'Minnesota',
        services: ['Radon Testing', 'Radon Mitigation'],
        areaCodes: ['218', '320', '507', '612', '651', '763', '952', '924'],
        zipCodes: [
          '55001', '55002', '55003', '55009', '55011', '55014', '55016', '55017',
          '55018', '55019', '55020', '55021', '55024', '55025', '55027', '55031'
        ]
      },
      colorado: {
        name: 'Colorado',
        services: ['Radon Testing', 'Radon Mitigation'],
        areaCodes: ['303', '719', '720', '970', '983'],
        zipCodes: [
          '80001', '80002', '80003', '80004', '80005', '80006', '80007', '80010',
          '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018'
        ]
      }
    };

    const data = stateData[state];
    if (!data) return null;

    return (
      <div className="state-page">
        <div className="state-hero">
          <div className="state-silhouette"></div>
          <div className="state-content">
            <h1>Professional Home Services in {data.name}</h1>
            <p>Serving {data.name} with professional home services including {data.services.join(', ')}</p>
          </div>
        </div>

        <div className="container">
          <div className="state-services">
            <h2>Services Available in {data.name}</h2>
            <div className="services-list">
              {data.services.map((service, index) => (
                <div key={index} className="service-item">
                  <h3>{service}</h3>
                  <button className="learn-more-btn" onClick={() => handleNavigation('contact')}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="coverage-area">
            <h2>We proudly serve the following areas and zip codes in {data.name}:</h2>
            
            <div className="area-codes-section">
              <h3>Area Codes Served:</h3>
              <div className="area-codes-grid">
                {data.areaCodes.map((code, index) => (
                  <span key={index} className="area-code">{code}</span>
                ))}
              </div>
            </div>

            <div className="zip-codes-section">
              <h3>Zip Codes Served:</h3>
              <div className="zip-codes-container">
                <div className="zip-codes-grid">
                  {data.zipCodes.slice(0, 12).map((zip, index) => (
                    <span key={index} className="zip-code">{zip}</span>
                  ))}
                </div>
                {data.zipCodes.length > 12 && (
                  <div className="zip-expand-section">
                    <button 
                      className="expand-zip-btn"
                      onClick={() => toggleZipSection(state)}
                    >
                      {expandedZipSections[state] ? 'Show Less' : `+${data.zipCodes.length - 12} more`}
                    </button>
                    {expandedZipSections[state] && (
                      <div className="zip-codes-grid">
                        {data.zipCodes.slice(12).map((zip, index) => (
                          <span key={index} className="zip-code">{zip}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="state-cta">
            <h2>Ready to Get Started in {data.name}?</h2>
            <p>Contact us today for your free estimate and consultation.</p>
            <button 
              className="cta-button primary"
              onClick={() => handleNavigation('contact')}
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Financing Page Component
  const FinancingPage = () => (
    <div className="financing-page">
      <div className="container">
        <h1>Financing Options</h1>
        <div className="financing-hero">
          <h2>As Low As 0% Financing Available</h2>
          <p>We partner with Synchrony to offer you the best financing options available.</p>
        </div>
        
        <div className="financing-options">
          <div className="financing-card">
            <h3>12 Months Same as Cash</h3>
            <ul>
              <li>No interest if paid in full within 12 months</li>
              <li>Low monthly payments</li>
              <li>Quick approval process</li>
            </ul>
          </div>
          
          <div className="financing-card">
            <h3>Extended Payment Plans</h3>
            <ul>
              <li>Up to 60 months financing</li>
              <li>Low monthly payments</li>
              <li>Competitive rates</li>
              <li>No prepayment penalties</li>
            </ul>
          </div>
        </div>

        <div className="synchrony-section">
          <h3>Powered by Synchrony</h3>
          <p>We partner with Synchrony to offer you the best financing options available.</p>
          <a 
            href="https://www.synchrony.com/mysynchrony/home-improvement-financing/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-powerhouse primary"
          >
            Learn More About Synchrony
          </a>
        </div>
      </div>
    </div>
  );

  // Service Pages Component
  const ServicePage = ({ service }) => {
    const serviceContent = {
      'radon-testing': {
        title: 'Free Radon Testing',
        hero: '/radon-testing-device.jpg',
        description: 'Professional radon testing with EPA-certified equipment',
        content: (
          <div>
            <h2>What is Radon Testing?</h2>
            <p>Radon testing is like taking the temperature of your home, but instead of checking for heat, we're checking for an invisible, odorless gas called radon. Just like you can't see germs but know they exist, radon is a gas you can't see, smell, or taste, but it can be harmful to your health if there's too much of it in your home.</p>
            
            <h3>Why Do We Test for Radon?</h3>
            <p>Radon comes from the natural breakdown of uranium in soil, rock, and water. It can enter your home through cracks in floors, walls, or foundations. The EPA (Environmental Protection Agency) says radon is the second leading cause of lung cancer after smoking.</p>
            
            <h3>Our Professional Testing Process</h3>
            <p>We use professional-grade Airthings Corentium Pro detectors - the same equipment used by certified radon professionals nationwide. Our testing process includes:</p>
            <ul>
              <li>48-72 hour continuous monitoring</li>
              <li>EPA-approved testing protocols</li>
              <li>Detailed written report</li>
              <li>Professional recommendations</li>
            </ul>
            
            <div className="cta-section">
              <h3>Get Your FREE Radon Test Today</h3>
              <button className="cta-button primary" onClick={() => handleNavigation('contact')}>
                Schedule Free Test
              </button>
            </div>
          </div>
        )
      },
      'radon-mitigation': {
        title: 'Radon Mitigation',
        hero: '/radon-mitigation-system.jpg',
        description: 'Custom radon mitigation systems designed and installed by certified professionals',
        content: (
          <div>
            <h2>What is Radon Mitigation?</h2>
            <p>Radon mitigation is like installing a special ventilation system that removes radon gas from your home. Think of it as a vacuum cleaner for invisible gas - it sucks the radon out from under your house and safely vents it outside, away from your family.</p>
            
            <h3>How Does Radon Mitigation Work?</h3>
            <p>We install a system that creates suction under your home's foundation, pulling radon gas out before it can enter your living space. The gas is then safely vented outside through a pipe system.</p>
            
            <h3>Types of Mitigation Systems We Install</h3>
            <div className="mitigation-types">
              <div className="mitigation-type">
                <h4>Sub-Slab Depressurization</h4>
                <p>Most common system for homes with basements or slab-on-grade foundations</p>
              </div>
              <div className="mitigation-type">
                <h4>Sump Pit Suction</h4>
                <p>Utilizes existing sump pit for homes with sump pump systems</p>
              </div>
              <div className="mitigation-type">
                <h4>Drain Tile Suction</h4>
                <p>Uses existing drain tile system around foundation perimeter</p>
              </div>
              <div className="mitigation-type">
                <h4>Crawl Space Ventilation</h4>
                <p>Specialized systems for homes with crawl space foundations</p>
              </div>
            </div>
            
            <h3>Professional Equipment We Use</h3>
            <p>We use only the highest quality fans and materials:</p>
            <ul>
              <li><strong>Fantech Fans:</strong> Industry-leading radon fans with 5-year warranties</li>
              <li><strong>RadonAway Fans:</strong> Premium fans designed specifically for radon systems</li>
              <li><strong>Professional-grade PVC piping:</strong> Durable, weather-resistant materials</li>
              <li><strong>Manometers:</strong> System monitoring gauges to ensure proper operation</li>
            </ul>
            
            <div className="cta-section">
              <h3>Get Your Custom Mitigation System</h3>
              <button className="cta-button primary" onClick={() => handleNavigation('contact')}>
                Get Free Estimate
              </button>
            </div>
          </div>
        )
      }
    };

    const content = serviceContent[service];
    if (!content) return null;

    return (
      <div className="service-page">
        <div className="service-hero">
          <img src={content.hero} alt={content.title} />
          <div className="service-hero-content">
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </div>
        
        <div className="container">
          <div className="service-content">
            {content.content}
          </div>
        </div>
      </div>
    );
  };

  // Radon Education Page Component
  const RadonEducationPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <h1>Radon Education Center</h1>
        
        <div className="education-hero">
          <img src="/radon-testing-device.jpg" alt="Radon Education" />
          <div className="education-intro">
            <h2>Everything You Need to Know About Radon</h2>
            <p>Learn about radon gas, its health effects, testing procedures, and mitigation solutions from certified professionals.</p>
          </div>
        </div>

        <div className="education-content">
          <section className="education-section">
            <h2>What is Radon?</h2>
            <p>Radon is a naturally occurring radioactive gas that comes from the decay of uranium in soil, rock, and water. It's colorless, odorless, and tasteless, making it impossible to detect without proper testing equipment.</p>
            
            <h3>How Radon Enters Your Home</h3>
            <p>Radon typically enters homes through:</p>
            <ul>
              <li>Cracks in solid floors and walls</li>
              <li>Construction joints</li>
              <li>Gaps in suspended floors</li>
              <li>Gaps around service pipes</li>
              <li>Cavities inside walls</li>
              <li>The water supply</li>
            </ul>
          </section>

          <section className="education-section">
            <h2>Health Effects of Radon</h2>
            <p>According to the <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA</a>, radon is the second leading cause of lung cancer in the United States, responsible for about 21,000 lung cancer deaths every year.</p>
            
            <h3>Risk Factors</h3>
            <ul>
              <li>Long-term exposure to elevated radon levels</li>
              <li>Smoking combined with radon exposure significantly increases risk</li>
              <li>Children may be more sensitive to radon exposure</li>
            </ul>
          </section>

          <section className="education-section">
            <h2>Radon Testing</h2>
            <p>The <a href="https://www.epa.gov/radon/how-test-radon" target="_blank" rel="noopener noreferrer">EPA recommends</a> testing all homes below the third floor for radon.</p>
            
            <h3>Testing Methods</h3>
            <div className="testing-methods">
              <div className="testing-method">
                <h4>Short-term Testing (2-90 days)</h4>
                <p>Quick screening test using charcoal canisters or electronic monitors</p>
              </div>
              <div className="testing-method">
                <h4>Long-term Testing (90+ days)</h4>
                <p>More accurate assessment using alpha track detectors</p>
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>Radon Mitigation Systems</h2>
            <p>If your home tests at 4 pCi/L or higher, the EPA recommends installing a radon mitigation system.</p>
            
            <h3>System Types</h3>
            <div className="system-types">
              <div className="system-type">
                <h4>Sub-slab Depressurization</h4>
                <p>Most common and effective method for homes with basements or slab-on-grade foundations</p>
              </div>
              <div className="system-type">
                <h4>Sump Pit Suction</h4>
                <p>Uses existing sump pump pit to draw radon from beneath the foundation</p>
              </div>
              <div className="system-type">
                <h4>Drain Tile Suction</h4>
                <p>Utilizes existing perimeter drain system for radon removal</div>
              </div>
              <div className="system-type">
                <h4>Crawl Space Systems</h4>
                <p>Specialized ventilation for homes with crawl space foundations</p>
              </div>
            </div>
          </section>

          <section className="education-section">
            <h2>Professional Equipment</h2>
            <p>We use only the highest quality, EPA-approved equipment:</p>
            
            <h3>Testing Equipment</h3>
            <ul>
              <li><strong>Airthings Corentium Pro:</strong> Professional-grade continuous radon monitor</li>
              <li><strong>Alpha Track Detectors:</strong> Long-term passive testing devices</li>
              <li><strong>Charcoal Canisters:</strong> Short-term passive testing devices</li>
            </ul>
            
            <h3>Mitigation Equipment</h3>
            <ul>
              <li><strong>Fantech Radon Fans:</strong> Industry-leading fans with 5-year warranties</li>
              <li><strong>RadonAway Fans:</strong> Premium radon-specific ventilation fans</li>
              <li><strong>Professional PVC Piping:</strong> Schedule 40 PVC for durability</li>
              <li><strong>Manometers:</strong> System monitoring devices</li>
            </ul>
          </section>

          <section className="education-section">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h4>How long does radon testing take?</h4>
              <p>Short-term tests take 2-7 days, while long-term tests run for 90 days to one year for the most accurate results.</p>
            </div>
            
            <div className="faq-item">
              <h4>What radon level requires mitigation?</h4>
              <p>The EPA recommends mitigation for homes with radon levels of 4 pCi/L or higher. Consider mitigation for levels between 2-4 pCi/L.</p>
            </div>
            
            <div className="faq-item">
              <h4>How effective are radon mitigation systems?</h4>
              <p>Properly installed systems can reduce radon levels by up to 99%, with most systems achieving 80-90% reduction.</p>
            </div>
            
            <div className="faq-item">
              <h4>Do radon systems require maintenance?</h4>
              <p>Minimal maintenance is required. We recommend annual system checks and fan replacement every 10-15 years.</p>
            </div>
          </section>

          <section className="education-cta">
            <h2>Ready to Test Your Home?</h2>
            <p>Get your FREE professional radon test today and ensure your family's safety.</p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={() => handleNavigation('contact')}>
                Schedule Free Test
              </button>
              <button className="cta-button secondary" onClick={() => handleNavigation('radon-mitigation')}>
                Learn About Mitigation
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // Main render logic
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <ServicesGrid />
            <ContactForm />
          </>
        );
      case 'contact':
        return <ContactForm />;
      case 'financing':
        return <FinancingPage />;
      case 'wisconsin':
      case 'illinois':
      case 'minnesota':
      case 'colorado':
        return <StatePage state={currentPage} />;
      case 'radon-testing':
      case 'radon-mitigation':
        return <ServicePage service={currentPage} />;
      case 'radon-education':
        return <RadonEducationPage />;
      default:
        return (
          <>
            <HeroSection />
            <ServicesGrid />
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="App" style={{ '--primary-color': currentBrandConfig.primaryColor, '--secondary-color': currentBrandConfig.secondaryColor }}>
      <Header />
      <main>
        {renderPage()}
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{currentBrandConfig.name}</h3>
              <p>{currentBrandConfig.tagline}</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Phone: (262) 955-5701</p>
              <p>805 Wells St, Delafield, WI 53018</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                {currentBrandConfig.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 {currentBrandConfig.name}. All rights reserved.</p>
            <button className="footer-contact-link" onClick={() => handleNavigation('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

