import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServiceAreasDropdown, setShowServiceAreasDropdown] = useState(false);
  const [expandedZipCodes, setExpandedZipCodes] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const brandConfig = {
    lifetime: {
      name: 'Lifetime Home Services',
      logo: '/LifetimeHomeServicesLogo.png',
      heroImage: '/lifetime-hero-house.jpg',
      primaryColor: '#2563eb',
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
      logo: '/AmericaIn-HomeLogo3.png',
      heroImage: '/america-smart-home-hero.jpg',
      primaryColor: '#b91c1c',
      services: [
        'Smart Home Automation',
        'Security Systems',
        'Control4 Integration'
      ]
    },
    closets: {
      name: 'Closet Concepts',
      logo: '/NewClosetConceptsLogo.pdf',
      heroImage: '/closets-luxury-hero.jpg',
      primaryColor: '#059669',
      services: [
        'Custom Closets'
      ]
    }
  };

  const handleBrandSwitch = (brand) => {
    setCurrentBrand(brand);
    setCurrentPage('home');
    setShowServicesDropdown(false);
    setShowServiceAreasDropdown(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowServiceAreasDropdown(false);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (service) => {
    const servicePages = {
      'Free Radon Testing': 'radon-testing',
      'Radon Mitigation': 'radon-mitigation',
      'HVAC Services': 'hvac-services',
      'Duct Cleaning & AeroSeal': 'duct-cleaning',
      'Concrete Coatings': 'concrete-coatings',
      'Smart Home Automation': 'smart-home',
      'Security Systems': 'security-systems',
      'Control4 Integration': 'control4',
      'Custom Closets': 'custom-closets'
    };
    
    const pageName = servicePages[service];
    if (pageName) {
      setCurrentPage(pageName);
      setShowServicesDropdown(false);
    }
  };

  const renderHeader = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src={brandConfig[currentBrand].logo} 
            alt={brandConfig[currentBrand].name}
            className="logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <nav className="main-nav">
          <div className="brand-links">
            {Object.entries(brandConfig).map(([key, config]) => (
              <button
                key={key}
                className={`brand-link ${currentBrand === key ? 'active' : ''}`}
                onClick={() => handleBrandSwitch(key)}
              >
                {config.name}
              </button>
            ))}
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
                  {brandConfig[currentBrand].services.map((service) => (
                    <button
                      key={service}
                      className="dropdown-item"
                      onClick={() => handleServiceClick(service)}
                    >
                      {service}
                    </button>
                  ))}
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
                  <button
                    className="dropdown-item"
                    onClick={() => handlePageChange('wisconsin')}
                  >
                    Wisconsin
                  </button>
                </div>
              )}
            </div>
            
            <button 
              className="nav-button"
              onClick={() => handlePageChange('financing')}
            >
              Financing
            </button>
          </div>
        </nav>
        
        <div className="contact-info">
          <div className="phone">(262) 226-2729</div>
        </div>
      </div>
    </header>
  );

  const renderHomePage = () => (
    <div className="App" data-brand={currentBrand}>
      {/* Full-Screen Hero Section */}
      <section className="hero-section-fullscreen">
        <div className="hero-background">
          <img 
            src={brandConfig[currentBrand].heroImage}
            alt={`${brandConfig[currentBrand].name} Hero`}
            className="hero-image-fullscreen"
          />
        </div>
        <div className="hero-content-overlay">
          <div className="hero-text-content">
            <h1 className="hero-title-large">
              {currentBrand === 'lifetime' && 'Lifetime Home Solutions'}
              {currentBrand === 'aih' && 'Smart Home Technology'}
              {currentBrand === 'closets' && 'Closet Concepts'}
            </h1>
            <p className="hero-subtitle-large">
              {currentBrand === 'lifetime' && 'Trusted Solutions. Lifetime Results.'}
              {currentBrand === 'aih' && 'Complete Smart Home Integration'}
              {currentBrand === 'closets' && 'Organized Living. Elevated Style.'}
            </p>
            <div className="hero-cta-buttons">
              <button 
                className="cta-button primary large"
                onClick={() => handlePageChange('contact')}
              >
                Get Free Estimate
              </button>
              <button 
                className="cta-button secondary large"
                onClick={() => handlePageChange('financing')}
              >
                View Financing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid-2x2">
            {currentBrand === 'lifetime' && (
              <>
                <div className="service-card">
                  <div className="service-image">
                    <img src="/radon-testing-device.jpg" alt="Free Radon Testing" />
                  </div>
                  <div className="service-content">
                    <h3>Free Radon Testing</h3>
                    <p>Professional radon testing using EPA-approved equipment to ensure your family's safety.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('radon-testing')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/radon-mitigation-system.jpg" alt="Radon Mitigation" />
                  </div>
                  <div className="service-content">
                    <h3>Radon Mitigation</h3>
                    <p>Expert radon mitigation systems to reduce dangerous radon levels in your home.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('radon-mitigation')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/hvac-installation-professional.jpg" alt="HVAC Services" />
                  </div>
                  <div className="service-content">
                    <h3>HVAC Services</h3>
                    <p>Complete heating, ventilation, and air conditioning services for optimal home comfort.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('hvac-services')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/duct-cleaning-professional.jpg" alt="Duct Cleaning & AeroSeal" />
                  </div>
                  <div className="service-content">
                    <h3>Duct Cleaning & AeroSeal</h3>
                    <p>Professional duct cleaning and sealing services to improve air quality and efficiency.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('duct-cleaning')}
                    >
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
                    <img src="/america-smart-home-hero.jpg" alt="Smart Home Automation" />
                  </div>
                  <div className="service-content">
                    <h3>Smart Home Automation</h3>
                    <p>Complete smart home integration for lighting, climate, security, and entertainment.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('smart-home')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/security-system-installation.jpg" alt="Security Systems" />
                  </div>
                  <div className="service-content">
                    <h3>Security Systems</h3>
                    <p>Advanced home security solutions with 24/7 monitoring and smart integration.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('security-systems')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-image">
                    <img src="/home-office-organization.jpg" alt="Control4 Integration" />
                  </div>
                  <div className="service-content">
                    <h3>Control4 Integration</h3>
                    <p>Professional Control4 system installation and integration for seamless home automation.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('control4')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            )}

            {currentBrand === 'closets' && (
              <div className="service-card">
                <div className="service-image">
                  <img src="/organized-garage-storage.jpg" alt="Custom Closets" />
                </div>
                <div className="service-content">
                  <h3>Custom Closets</h3>
                  <p>Custom-designed closet solutions for organized living and elevated style.</p>
                  <button 
                    className="learn-more-btn"
                    onClick={() => handlePageChange('custom-closets')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  const renderRadonTestingPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Free Radon Testing</h1>
          <p>Professional radon testing using EPA-approved equipment to ensure your family's safety</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>What Is Radon Testing?</h2>
            <p>Radon testing is the only way to determine if your home has dangerous levels of radon gas. Our certified professionals use EPA-approved testing equipment to measure radon levels in your home over a specific period.</p>
            
            <h3>Our Testing Process</h3>
            <ul>
              <li><strong>Free In-Home Assessment:</strong> We place professional-grade testing equipment in the lowest livable level of your home</li>
              <li><strong>48-72 Hour Testing Period:</strong> Equipment continuously monitors radon levels</li>
              <li><strong>Detailed Results:</strong> We provide comprehensive results with EPA risk level explanations</li>
              <li><strong>Expert Recommendations:</strong> If mitigation is needed, we provide detailed solutions</li>
            </ul>

            <h3>Understanding Radon Levels</h3>
            <div className="system-types">
              <div className="system-type">
                <h4>Below 2.0 pCi/L</h4>
                <p>Low risk - No action typically needed</p>
              </div>
              <div className="system-type">
                <h4>2.0 - 4.0 pCi/L</h4>
                <p>Moderate risk - Consider mitigation</p>
              </div>
              <div className="system-type">
                <h4>4.0+ pCi/L</h4>
                <p>High risk - EPA recommends mitigation</p>
              </div>
              <div className="system-type">
                <h4>10.0+ pCi/L</h4>
                <p>Very high risk - Immediate mitigation recommended</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Why Test for Radon?</h2>
            <p>Radon is a naturally occurring radioactive gas that forms when uranium breaks down in soil, rock, and water. It's invisible, odorless, and tasteless, which means the only way to detect it is through testing.</p>
            
            <p>According to the <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA</a>, radon is the <strong>second leading cause of lung cancer in the United States</strong>, responsible for over 20,000 deaths each year.</p>

            <h3>Common Entry Points</h3>
            <ul>
              <li>Cracks in concrete floors and walls</li>
              <li>Gaps in suspended floors</li>
              <li>Crawlspaces</li>
              <li>Openings around pipes and utility lines</li>
              <li>Floor drains and sump pumps</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>When Should You Test?</h2>
            <div className="faq-item">
              <h4>New Home Purchase</h4>
              <p>Always test before buying a home. Many mortgage companies now require radon testing.</p>
            </div>
            <div className="faq-item">
              <h4>Every 2 Years</h4>
              <p>EPA recommends testing every 2 years, even if previous tests were low.</p>
            </div>
            <div className="faq-item">
              <h4>After Home Renovations</h4>
              <p>Major renovations can change airflow patterns and affect radon levels.</p>
            </div>
            <div className="faq-item">
              <h4>Seasonal Changes</h4>
              <p>Radon levels can vary by season due to changes in soil conditions and home ventilation.</p>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Schedule Your Free Radon Test Today</h2>
          <p>Don't wait to protect your family. Our certified professionals will test your home and provide expert recommendations.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Schedule Free Test
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('radon-mitigation')}
            >
              Learn About Mitigation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRadonMitigationPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Radon Mitigation Systems</h1>
          <p>Expert radon mitigation systems to reduce dangerous radon levels in your home</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>What Is Radon Mitigation?</h2>
            <p>Radon mitigation is the process of reducing radon gas concentrations in your home to safe levels. Our certified professionals install proven, code-compliant systems that lower radon levels quickly and permanently.</p>
            
            <p><strong>Don't panic if you have high radon levels—radon mitigation is highly effective.</strong> Most systems reduce radon levels by 80-99%.</p>
          </div>

          <div className="education-section">
            <h2>Mitigation System Types</h2>
            <p>Depending on your home's construction and radon levels, we may recommend:</p>

            <div className="system-types">
              <div className="system-type">
                <h4>Sub-Slab Depressurization</h4>
                <p>Most common system. PVC pipe inserted through basement floor draws radon from beneath foundation and vents above roofline.</p>
              </div>
              <div className="system-type">
                <h4>Sump Pit Depressurization</h4>
                <p>Utilizes existing sump pit as suction point. Cost-effective if home already has sump pump.</p>
              </div>
              <div className="system-type">
                <h4>Drain Tile Depressurization</h4>
                <p>Uses existing drain tile systems under slab. Reduces need for drilling.</p>
              </div>
              <div className="system-type">
                <h4>Crawl Space Encapsulation</h4>
                <p>Heavy-duty plastic sheeting sealed over soil with fan system drawing radon from below membrane.</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>The Radon Fans We Trust</h2>
            <p>We exclusively install high-performance radon fans from <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a>, a leading U.S. manufacturer known for durability, quiet operation, and maximum draw.</p>

            <h3>Our Preferred Models:</h3>
            <ul>
              <li><strong>Maverick Eagle</strong> – Ideal for standard sub-slab systems, quiet and efficient</li>
              <li><strong>Eagle Max</strong> – High-powered for homes with compacted subgrade or multiple suction points</li>
              <li><strong>Legends</strong> – Sleek, high-performance fans for visible exterior installs</li>
              <li><strong>Legends Max</strong> – Maximum air volume for challenging mitigation scenarios</li>
            </ul>

            <p>Each fan is selected based on your home's layout and mitigation needs, ensuring optimal airflow and long-term performance.</p>
          </div>

          <div className="education-section">
            <h2>Installation Process</h2>
            <div className="faq-item">
              <h4>Day 1: System Design & Installation</h4>
              <p>Our certified technicians install the complete system, typically in 4-6 hours. Minimal disruption to your home.</p>
            </div>
            <div className="faq-item">
              <h4>Day 2-3: System Operation</h4>
              <p>System runs continuously to establish proper airflow patterns and begin reducing radon levels.</p>
            </div>
            <div className="faq-item">
              <h4>Day 4-7: Post-Installation Testing</h4>
              <p>We conduct follow-up testing to verify system effectiveness and ensure radon levels are below EPA action level.</p>
            </div>
            <div className="faq-item">
              <h4>Ongoing: Lifetime Warranty</h4>
              <p>All system components covered by our lifetime warranty for your peace of mind.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>System Effectiveness</h2>
            <p>Our mitigation systems are highly effective:</p>
            <ul>
              <li><strong>80-99% reduction</strong> in radon levels</li>
              <li><strong>Immediate results</strong> - levels drop within 24-48 hours</li>
              <li><strong>Long-term protection</strong> - systems operate 24/7 for continuous protection</li>
              <li><strong>Energy efficient</strong> - fans use less electricity than a 60-watt light bulb</li>
            </ul>
          </div>
        </div>

        <div className="education-cta">
          <h2>Ready to Protect Your Family?</h2>
          <p>Our certified radon professionals will design and install the perfect mitigation system for your home.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Get Free Estimate
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('radon-testing')}
            >
              Schedule Testing First
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHVACPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>HVAC Services</h1>
          <p>Complete heating, ventilation, and air conditioning services for optimal home comfort</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Comprehensive HVAC Solutions</h2>
            <p>Our certified HVAC technicians provide complete heating, ventilation, and air conditioning services to keep your home comfortable year-round. From installation to maintenance, we ensure optimal performance and energy efficiency.</p>

            <h3>Our HVAC Services Include:</h3>
            <ul>
              <li><strong>System Installation:</strong> New HVAC system design and installation</li>
              <li><strong>System Replacement:</strong> Upgrading old, inefficient systems</li>
              <li><strong>Preventive Maintenance:</strong> Regular tune-ups to extend system life</li>
              <li><strong>Emergency Repairs:</strong> 24/7 service for urgent HVAC issues</li>
              <li><strong>Energy Efficiency Upgrades:</strong> Improving system performance and reducing costs</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Heating Services</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>Furnace Installation & Repair</h4>
                <p>High-efficiency gas and electric furnaces for reliable winter heating</p>
              </div>
              <div className="system-type">
                <h4>Heat Pump Systems</h4>
                <p>Energy-efficient heating and cooling in one system</p>
              </div>
              <div className="system-type">
                <h4>Boiler Services</h4>
                <p>Installation, repair, and maintenance of boiler heating systems</p>
              </div>
              <div className="system-type">
                <h4>Radiant Heating</h4>
                <p>In-floor heating systems for ultimate comfort</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Cooling Services</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>Central Air Conditioning</h4>
                <p>Whole-home cooling systems for consistent comfort</p>
              </div>
              <div className="system-type">
                <h4>Ductless Mini-Splits</h4>
                <p>Zone-controlled cooling for specific areas</p>
              </div>
              <div className="system-type">
                <h4>Air Conditioning Repair</h4>
                <p>Fast, reliable AC repair and maintenance</p>
              </div>
              <div className="system-type">
                <h4>System Upgrades</h4>
                <p>Improving efficiency with modern technology</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Ventilation & Air Quality</h2>
            <p>Proper ventilation is crucial for healthy indoor air quality and system efficiency.</p>
            
            <h3>Our Ventilation Services:</h3>
            <ul>
              <li><strong>Whole-House Ventilation:</strong> Balanced air exchange systems</li>
              <li><strong>Exhaust Fan Installation:</strong> Bathroom and kitchen ventilation</li>
              <li><strong>Air Purification Systems:</strong> HEPA filtration and UV sterilization</li>
              <li><strong>Humidity Control:</strong> Humidifiers and dehumidifiers</li>
              <li><strong>Ductwork Design:</strong> Proper airflow throughout your home</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Energy Efficiency Benefits</h2>
            <div className="faq-item">
              <h4>Lower Energy Bills</h4>
              <p>Modern HVAC systems can reduce energy costs by 20-40% compared to older systems.</p>
            </div>
            <div className="faq-item">
              <h4>Improved Comfort</h4>
              <p>Even temperatures throughout your home with proper system sizing and installation.</p>
            </div>
            <div className="faq-item">
              <h4>Better Air Quality</h4>
              <p>Advanced filtration and ventilation improve indoor air quality for your family's health.</p>
            </div>
            <div className="faq-item">
              <h4>Increased Home Value</h4>
              <p>New HVAC systems add significant value to your home and appeal to buyers.</p>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Ready to Upgrade Your Home Comfort?</h2>
          <p>Our HVAC experts will design the perfect system for your home's unique needs and budget.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Get Free Estimate
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              View Financing Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDuctCleaningPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Duct Cleaning & AeroSeal</h1>
          <p>Professional duct cleaning and sealing services to improve air quality and efficiency</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Professional Duct Cleaning</h2>
            <p>Over time, your home's ductwork accumulates dust, debris, allergens, and even mold. Our professional duct cleaning service removes these contaminants, improving your indoor air quality and HVAC system efficiency.</p>

            <h3>Our Duct Cleaning Process:</h3>
            <ul>
              <li><strong>Complete System Inspection:</strong> We examine your entire ductwork system</li>
              <li><strong>Powerful Vacuum Extraction:</strong> Industrial-grade equipment removes all debris</li>
              <li><strong>Brush and Agitation Cleaning:</strong> Thorough cleaning of all duct surfaces</li>
              <li><strong>Sanitization Treatment:</strong> Optional antimicrobial treatment for enhanced cleanliness</li>
              <li><strong>System Testing:</strong> Verification of improved airflow and efficiency</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>AeroSeal Duct Sealing Technology</h2>
            <p>AeroSeal is revolutionary technology that seals duct leaks from the inside out. This patented process can seal up to 90% of duct leaks, dramatically improving your HVAC system's efficiency.</p>

            <div className="system-types">
              <div className="system-type">
                <h4>How AeroSeal Works</h4>
                <p>Polymer particles are blown through your ducts, automatically sealing leaks as small as a dime and as large as a quarter</p>
              </div>
              <div className="system-type">
                <h4>Real-Time Monitoring</h4>
                <p>Computer-controlled process shows exactly how much leakage is sealed during treatment</p>
              </div>
              <div className="system-type">
                <h4>Guaranteed Results</h4>
                <p>10-year warranty on all sealed leaks with measurable before-and-after results</p>
              </div>
              <div className="system-type">
                <h4>Safe & Non-Toxic</h4>
                <p>UL tested and approved materials that are safe for your family and pets</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Benefits of Duct Cleaning & Sealing</h2>
            <div className="faq-item">
              <h4>Improved Air Quality</h4>
              <p>Removes allergens, dust, and contaminants that circulate through your home's air.</p>
            </div>
            <div className="faq-item">
              <h4>Energy Savings</h4>
              <p>Sealed ducts can reduce energy costs by 20-30% by eliminating conditioned air loss.</p>
            </div>
            <div className="faq-item">
              <h4>Better HVAC Performance</h4>
              <p>Clean, sealed ducts allow your system to operate more efficiently and last longer.</p>
            </div>
            <div className="faq-item">
              <h4>Enhanced Comfort</h4>
              <p>Even temperatures throughout your home with proper airflow distribution.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>When Do You Need Duct Services?</h2>
            <p>Consider duct cleaning and sealing if you notice:</p>
            <ul>
              <li>Excessive dust accumulation in your home</li>
              <li>Uneven heating or cooling between rooms</li>
              <li>Higher than normal energy bills</li>
              <li>Musty or stale odors from vents</li>
              <li>Visible mold or debris in ductwork</li>
              <li>Recent home renovation or construction</li>
              <li>Family members with allergies or respiratory issues</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>AeroSeal Process</h2>
            <div className="faq-item">
              <h4>Step 1: Pre-Sealing Measurement</h4>
              <p>We measure the exact amount of duct leakage in your system using specialized equipment.</p>
            </div>
            <div className="faq-item">
              <h4>Step 2: System Preparation</h4>
              <p>Vents are temporarily blocked and the AeroSeal equipment is connected to your ductwork.</p>
            </div>
            <div className="faq-item">
              <h4>Step 3: Sealing Process</h4>
              <p>Polymer particles are injected into the ducts, automatically finding and sealing leaks.</p>
            </div>
            <div className="faq-item">
              <h4>Step 4: Post-Sealing Verification</h4>
              <p>Final measurement confirms the amount of leakage sealed and system improvement.</p>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Improve Your Home's Air Quality Today</h2>
          <p>Our certified technicians will clean and seal your ducts for better air quality and energy efficiency.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Schedule Service
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              View Financing
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConcreteCoatingsPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Concrete Coatings</h1>
          <p>Durable epoxy coatings and better solutions for garage floors, basements, and more</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Professional Concrete Coating Solutions</h2>
            <p>Transform your concrete surfaces with our professional-grade coating systems. Our durable epoxy and polyurea coatings provide long-lasting protection and a beautiful finish for garage floors, basements, patios, and commercial spaces.</p>

            <h3>Our Coating Services Include:</h3>
            <ul>
              <li><strong>Garage Floor Coatings:</strong> Slip-resistant, chemical-resistant epoxy systems</li>
              <li><strong>Basement Floor Coatings:</strong> Moisture-resistant solutions for below-grade spaces</li>
              <li><strong>Commercial Coatings:</strong> Heavy-duty systems for warehouses and retail spaces</li>
              <li><strong>Decorative Finishes:</strong> Custom colors and patterns for aesthetic appeal</li>
              <li><strong>Repair & Restoration:</strong> Fixing damaged concrete before coating application</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Coating System Types</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>100% Solids Epoxy</h4>
                <p>Premium coating with maximum durability and chemical resistance for heavy-use areas</p>
              </div>
              <div className="system-type">
                <h4>Polyurea Coatings</h4>
                <p>Fast-curing, flexible coatings that resist UV damage and temperature extremes</p>
              </div>
              <div className="system-type">
                <h4>Metallic Epoxy</h4>
                <p>Decorative coatings with stunning metallic effects for showroom-quality floors</p>
              </div>
              <div className="system-type">
                <h4>Flake Systems</h4>
                <p>Broadcast flake coatings for enhanced slip resistance and visual appeal</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Professional Installation Process</h2>
            <div className="faq-item">
              <h4>Day 1: Surface Preparation</h4>
              <p>Diamond grinding and shot blasting to create the perfect surface profile for coating adhesion.</p>
            </div>
            <div className="faq-item">
              <h4>Day 1-2: Crack Repair & Priming</h4>
              <p>Fill cracks and imperfections, then apply primer coat for optimal adhesion.</p>
            </div>
            <div className="faq-item">
              <h4>Day 2: Base Coat Application</h4>
              <p>Apply the main coating system using professional spray or roller techniques.</p>
            </div>
            <div className="faq-item">
              <h4>Day 3: Top Coat & Finishing</h4>
              <p>Apply protective top coat and any decorative elements for the final finish.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Benefits of Professional Coatings</h2>
            <div className="faq-item">
              <h4>Durability</h4>
              <p>Professional coatings last 15-20 years with proper maintenance, far longer than DIY options.</p>
            </div>
            <div className="faq-item">
              <h4>Chemical Resistance</h4>
              <p>Resistant to oil, gasoline, salt, and other chemicals that can damage bare concrete.</p>
            </div>
            <div className="faq-item">
              <h4>Easy Maintenance</h4>
              <p>Smooth, non-porous surface is easy to clean and maintain with simple mopping.</p>
            </div>
            <div className="faq-item">
              <h4>Increased Property Value</h4>
              <p>Professional coatings significantly increase the value and appeal of your property.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Why Choose Professional Installation?</h2>
            <p>While DIY coating kits are available, professional installation ensures:</p>
            <ul>
              <li><strong>Proper Surface Preparation:</strong> Critical for long-lasting adhesion</li>
              <li><strong>Quality Materials:</strong> Commercial-grade coatings not available to consumers</li>
              <li><strong>Expert Application:</strong> Proper mixing, timing, and technique</li>
              <li><strong>Warranty Protection:</strong> Comprehensive warranty on materials and labor</li>
              <li><strong>Custom Solutions:</strong> Tailored systems for your specific needs</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Maintenance & Care</h2>
            <p>Keep your coated floors looking great with simple maintenance:</p>
            <ul>
              <li>Regular sweeping or dust mopping</li>
              <li>Occasional damp mopping with mild detergent</li>
              <li>Immediate cleanup of spills</li>
              <li>Use furniture pads to prevent scratching</li>
              <li>Annual inspection and touch-up if needed</li>
            </ul>
          </div>
        </div>

        <div className="education-cta">
          <h2>Transform Your Concrete Surfaces</h2>
          <p>Our coating experts will design the perfect system for your space and usage requirements.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Get Free Estimate
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              Financing Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSmartHomePage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Smart Home Automation</h1>
          <p>Complete smart home integration for lighting, climate, security, and entertainment</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Complete Smart Home Integration</h2>
            <p>Transform your home into an intelligent, connected environment with our comprehensive smart home automation solutions. From lighting and climate control to security and entertainment, we create seamless integration that enhances your lifestyle.</p>

            <h3>Our Smart Home Services:</h3>
            <ul>
              <li><strong>Lighting Control:</strong> Automated lighting scenes and scheduling</li>
              <li><strong>Climate Management:</strong> Smart thermostats and HVAC integration</li>
              <li><strong>Security Integration:</strong> Cameras, alarms, and access control</li>
              <li><strong>Entertainment Systems:</strong> Multi-room audio and video distribution</li>
              <li><strong>Voice Control:</strong> Amazon Alexa, Google Assistant, and Apple HomeKit</li>
              <li><strong>Mobile App Control:</strong> Complete home control from anywhere</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Smart Home Technologies</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>Control4 Systems</h4>
                <p>Professional-grade automation platform for seamless device integration and control</p>
              </div>
              <div className="system-type">
                <h4>Lutron Lighting</h4>
                <p>Premium lighting control with dimming, scheduling, and scene management</p>
              </div>
              <div className="system-type">
                <h4>Nest & Ecobee</h4>
                <p>Smart thermostats with learning capabilities and energy optimization</p>
              </div>
              <div className="system-type">
                <h4>Sonos Audio</h4>
                <p>Wireless multi-room audio systems for whole-home entertainment</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Smart Home Benefits</h2>
            <div className="faq-item">
              <h4>Enhanced Convenience</h4>
              <p>Control all your home systems from a single app or voice command for ultimate convenience.</p>
            </div>
            <div className="faq-item">
              <h4>Energy Savings</h4>
              <p>Automated scheduling and optimization can reduce energy costs by 10-25%.</p>
            </div>
            <div className="faq-item">
              <h4>Increased Security</h4>
              <p>Integrated security systems with remote monitoring and automated responses.</p>
            </div>
            <div className="faq-item">
              <h4>Home Value</h4>
              <p>Smart home features significantly increase property value and buyer appeal.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Popular Smart Home Features</h2>
            <p>Most requested smart home automation features:</p>
            <ul>
              <li><strong>Automated Lighting:</strong> Lights that adjust based on time, occupancy, and natural light</li>
              <li><strong>Smart Locks:</strong> Keyless entry with remote access and guest codes</li>
              <li><strong>Video Doorbells:</strong> See and speak to visitors from anywhere</li>
              <li><strong>Smart Garage Doors:</strong> Remote control and monitoring of garage access</li>
              <li><strong>Automated Blinds:</strong> Motorized window treatments with scheduling</li>
              <li><strong>Whole-Home Audio:</strong> Music throughout your home with zone control</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Installation Process</h2>
            <div className="faq-item">
              <h4>Consultation & Design</h4>
              <p>We assess your needs and design a custom smart home system for your lifestyle.</p>
            </div>
            <div className="faq-item">
              <h4>Infrastructure Installation</h4>
              <p>Install necessary wiring, networking, and control equipment throughout your home.</p>
            </div>
            <div className="faq-item">
              <h4>Device Integration</h4>
              <p>Connect and configure all smart devices for seamless operation and control.</p>
            </div>
            <div className="faq-item">
              <h4>Training & Support</h4>
              <p>Comprehensive training on system operation plus ongoing support and updates.</p>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Ready to Automate Your Home?</h2>
          <p>Our smart home experts will design and install the perfect automation system for your needs.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Schedule Consultation
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              View Financing
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySystemsPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Security Systems</h1>
          <p>Advanced home security solutions with 24/7 monitoring and smart integration</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Comprehensive Home Security</h2>
            <p>Protect your family and property with our advanced security systems. We design and install complete security solutions that integrate seamlessly with your smart home automation for maximum protection and convenience.</p>

            <h3>Our Security Services:</h3>
            <ul>
              <li><strong>Burglar Alarm Systems:</strong> Door/window sensors and motion detectors</li>
              <li><strong>Video Surveillance:</strong> Indoor/outdoor cameras with remote viewing</li>
              <li><strong>Access Control:</strong> Smart locks and keypad entry systems</li>
              <li><strong>24/7 Monitoring:</strong> Professional monitoring services</li>
              <li><strong>Mobile Alerts:</strong> Instant notifications to your smartphone</li>
              <li><strong>Smart Integration:</strong> Works with your home automation system</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Security System Components</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>Control Panels</h4>
                <p>Central hub with touchscreen interface and wireless communication capabilities</p>
              </div>
              <div className="system-type">
                <h4>Door/Window Sensors</h4>
                <p>Wireless sensors that detect unauthorized entry through doors and windows</p>
              </div>
              <div className="system-type">
                <h4>Motion Detectors</h4>
                <p>Advanced PIR sensors with pet immunity and adjustable sensitivity</p>
              </div>
              <div className="system-type">
                <h4>Security Cameras</h4>
                <p>HD cameras with night vision, motion detection, and cloud storage</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Advanced Security Features</h2>
            <div className="faq-item">
              <h4>Smart Home Integration</h4>
              <p>Security system works with lighting, locks, and automation for comprehensive protection.</p>
            </div>
            <div className="faq-item">
              <h4>Mobile App Control</h4>
              <p>Arm/disarm system, view cameras, and receive alerts from anywhere in the world.</p>
            </div>
            <div className="faq-item">
              <h4>Professional Monitoring</h4>
              <p>24/7 monitoring center responds to alarms and contacts emergency services when needed.</p>
            </div>
            <div className="faq-item">
              <h4>Video Verification</h4>
              <p>Cameras provide visual confirmation of alarms to reduce false dispatches.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Security System Benefits</h2>
            <p>Professional security systems provide:</p>
            <ul>
              <li><strong>Deterrent Effect:</strong> Visible security systems deter potential intruders</li>
              <li><strong>Rapid Response:</strong> Immediate alerts and emergency service dispatch</li>
              <li><strong>Insurance Discounts:</strong> Many insurers offer discounts for monitored systems</li>
              <li><strong>Remote Monitoring:</strong> Check on your home while traveling or at work</li>
              <li><strong>Evidence Collection:</strong> Video footage for insurance claims or police reports</li>
              <li><strong>Peace of Mind:</strong> Know your family and property are protected 24/7</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Installation & Setup</h2>
            <div className="faq-item">
              <h4>Security Assessment</h4>
              <p>We evaluate your property to identify vulnerabilities and design optimal sensor placement.</p>
            </div>
            <div className="faq-item">
              <h4>Professional Installation</h4>
              <p>Certified technicians install all equipment with minimal disruption to your home.</p>
            </div>
            <div className="faq-item">
              <h4>System Programming</h4>
              <p>Configure all settings, user codes, and monitoring preferences for your family.</p>
            </div>
            <div className="faq-item">
              <h4>Training & Support</h4>
              <p>Complete training on system operation plus ongoing technical support.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Monitoring Options</h2>
            <p>Choose the monitoring level that's right for your needs:</p>
            <ul>
              <li><strong>Self-Monitoring:</strong> Receive alerts directly to your smartphone</li>
              <li><strong>Professional Monitoring:</strong> 24/7 monitoring center with emergency dispatch</li>
              <li><strong>Hybrid Monitoring:</strong> Combination of self and professional monitoring</li>
              <li><strong>Video Monitoring:</strong> Live video verification of all alarm events</li>
            </ul>
          </div>
        </div>

        <div className="education-cta">
          <h2>Secure Your Home Today</h2>
          <p>Our security experts will design a comprehensive protection system tailored to your property.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Get Security Assessment
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              Financing Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderControl4Page = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Control4 Integration</h1>
          <p>Professional Control4 system installation and integration for seamless home automation</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Professional Control4 Systems</h2>
            <p>Control4 is the leading professional home automation platform, providing seamless integration of lighting, audio, video, climate, security, and more. As certified Control4 dealers, we design and install systems that transform your house into an intelligent home.</p>

            <h3>Control4 Capabilities:</h3>
            <ul>
              <li><strong>Unified Control:</strong> Single app controls all connected devices</li>
              <li><strong>Custom Programming:</strong> Personalized automation scenes and schedules</li>
              <li><strong>Voice Control:</strong> Works with Alexa, Google Assistant, and more</li>
              <li><strong>Remote Access:</strong> Control your home from anywhere in the world</li>
              <li><strong>Scalable Design:</strong> Start small and expand over time</li>
              <li><strong>Professional Support:</strong> Ongoing updates and technical support</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Control4 System Components</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>Control4 Controller</h4>
                <p>Central processor that manages all connected devices and automation programming</p>
              </div>
              <div className="system-type">
                <h4>Touch Panels</h4>
                <p>Wall-mounted and portable touchscreens for intuitive system control</p>
              </div>
              <div className="system-type">
                <h4>Keypads & Switches</h4>
                <p>Custom-engraved lighting and scene control throughout your home</p>
              </div>
              <div className="system-type">
                <h4>Audio/Video Matrix</h4>
                <p>Distribute music and video to any room with zone-specific control</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Control4 Integration Capabilities</h2>
            <div className="faq-item">
              <h4>Lighting Control</h4>
              <p>Dimming, color changing, and automated lighting scenes throughout your home.</p>
            </div>
            <div className="faq-item">
              <h4>Climate Management</h4>
              <p>Intelligent HVAC control with scheduling and energy optimization.</p>
            </div>
            <div className="faq-item">
              <h4>Entertainment Systems</h4>
              <p>Multi-room audio/video with streaming services and local media integration.</p>
            </div>
            <div className="faq-item">
              <h4>Security Integration</h4>
              <p>Cameras, alarms, and access control integrated into your automation system.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Popular Control4 Scenes</h2>
            <p>Pre-programmed automation scenes for common activities:</p>
            <ul>
              <li><strong>"Good Morning":</strong> Gradually raise lights, start coffee, display weather</li>
              <li><strong>"Movie Time":</strong> Dim lights, lower screen, start audio system</li>
              <li><strong>"Dinner Party":</strong> Set dining room lighting, start background music</li>
              <li><strong>"Good Night":</strong> Turn off all lights, lock doors, arm security system</li>
              <li><strong>"Away Mode":</strong> Simulate occupancy with random lighting and music</li>
              <li><strong>"Welcome Home":</strong> Disarm security, turn on entry lights, adjust temperature</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Control4 vs. DIY Solutions</h2>
            <div className="faq-item">
              <h4>Professional Programming</h4>
              <p>Custom automation logic programmed by certified professionals for reliable operation.</p>
            </div>
            <div className="faq-item">
              <h4>Robust Hardware</h4>
              <p>Commercial-grade components designed for 24/7 operation and long-term reliability.</p>
            </div>
            <div className="faq-item">
              <h4>Seamless Integration</h4>
              <p>Works with over 13,500 third-party devices for comprehensive home control.</p>
            </div>
            <div className="faq-item">
              <h4>Ongoing Support</h4>
              <p>Professional support, updates, and system modifications as your needs change.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Control4 Installation Process</h2>
            <div className="faq-item">
              <h4>Design Consultation</h4>
              <p>We assess your needs and design a custom Control4 system for your lifestyle and budget.</p>
            </div>
            <div className="faq-item">
              <h4>Infrastructure Planning</h4>
              <p>Plan wiring, networking, and equipment placement for optimal performance.</p>
            </div>
            <div className="faq-item">
              <h4>Professional Installation</h4>
              <p>Certified technicians install and configure all system components.</p>
            </div>
            <div className="faq-item">
              <h4>Programming & Training</h4>
              <p>Custom programming of automation scenes plus comprehensive user training.</p>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Experience Professional Home Automation</h2>
          <p>Our Control4 experts will design the perfect automation system for your home and lifestyle.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Schedule Demo
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              View Financing
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCustomClosetsPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Custom Closets</h1>
          <p>Custom-designed closet solutions for organized living and elevated style</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Custom Closet Design & Installation</h2>
            <p>Transform your storage spaces with our custom closet solutions. From walk-in master closets to reach-in bedroom closets, we design and install organizational systems that maximize space and enhance your daily routine.</p>

            <h3>Our Closet Services:</h3>
            <ul>
              <li><strong>Walk-In Closets:</strong> Luxury master closet designs with islands and seating</li>
              <li><strong>Reach-In Closets:</strong> Maximize space in standard bedroom closets</li>
              <li><strong>Pantry Organization:</strong> Custom pantry systems for kitchen storage</li>
              <li><strong>Mudroom Solutions:</strong> Entry organization with lockers and benches</li>
              <li><strong>Home Office Storage:</strong> Built-in desks and filing systems</li>
              <li><strong>Garage Organization:</strong> Wall systems and overhead storage</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Closet System Features</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>Adjustable Shelving</h4>
                <p>Flexible shelving systems that adapt to your changing storage needs</p>
              </div>
              <div className="system-type">
                <h4>Custom Drawers</h4>
                <p>Soft-close drawers with dividers for jewelry, accessories, and small items</p>
              </div>
              <div className="system-type">
                <h4>Hanging Systems</h4>
                <p>Double-hang rods, pull-down rods, and specialty hangers for all clothing types</p>
              </div>
              <div className="system-type">
                <h4>Specialty Storage</h4>
                <p>Shoe racks, tie racks, belt hooks, and custom accessories for specific needs</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Design Process</h2>
            <div className="faq-item">
              <h4>In-Home Consultation</h4>
              <p>Our designers visit your home to assess your space and understand your storage needs.</p>
            </div>
            <div className="faq-item">
              <h4>3D Design Rendering</h4>
              <p>See your custom closet design in detailed 3D renderings before installation.</p>
            </div>
            <div className="faq-item">
              <h4>Material Selection</h4>
              <p>Choose from premium finishes, hardware, and accessories to match your style.</p>
            </div>
            <div className="faq-item">
              <h4>Professional Installation</h4>
              <p>Expert installation with minimal disruption to your daily routine.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Benefits of Custom Closets</h2>
            <div className="faq-item">
              <h4>Maximized Space</h4>
              <p>Custom designs utilize every inch of available space for optimal storage capacity.</p>
            </div>
            <div className="faq-item">
              <h4>Improved Organization</h4>
              <p>Designated spaces for every item make it easy to stay organized and find what you need.</p>
            </div>
            <div className="faq-item">
              <h4>Enhanced Home Value</h4>
              <p>Custom closets significantly increase home value and appeal to potential buyers.</p>
            </div>
            <div className="faq-item">
              <h4>Personal Style</h4>
              <p>Choose finishes and accessories that reflect your personal taste and home décor.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Popular Closet Features</h2>
            <p>Most requested custom closet features:</p>
            <ul>
              <li><strong>Center Islands:</strong> Additional storage and surface space in walk-in closets</li>
              <li><strong>LED Lighting:</strong> Bright, energy-efficient lighting throughout the closet</li>
              <li><strong>Full-Length Mirrors:</strong> Built-in mirrors for dressing and outfit planning</li>
              <li><strong>Seating Areas:</strong> Built-in benches for putting on shoes and accessories</li>
              <li><strong>Jewelry Drawers:</strong> Felt-lined drawers with compartments for jewelry organization</li>
              <li><strong>Shoe Storage:</strong> Angled shelves and cubbies for easy shoe access and display</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Material Options</h2>
            <p>Choose from premium materials and finishes:</p>
            <ul>
              <li><strong>Melamine:</strong> Durable, easy-to-clean surfaces in multiple colors</li>
              <li><strong>Wood Veneer:</strong> Natural wood grain for a luxury appearance</li>
              <li><strong>Thermofoil:</strong> Smooth, painted finish that resists moisture and scratches</li>
              <li><strong>Hardware:</strong> Soft-close hinges, premium handles, and decorative accessories</li>
            </ul>
          </div>
        </div>

        <div className="education-cta">
          <h2>Design Your Dream Closet</h2>
          <p>Our closet design experts will create the perfect organizational solution for your space and lifestyle.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handlePageChange('contact')}
            >
              Schedule Design Consultation
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('financing')}
            >
              Financing Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Ready to get started? Contact us today for your free estimate.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <div className="contact-details-line">
              <div className="contact-item">
                <strong>Phone:</strong> (262) 226-2729
              </div>
              <div className="contact-item">
                <strong>Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM
              </div>
              <div className="contact-item">
                <strong>Address:</strong> Brookfield, WI 53045
              </div>
            </div>

            <div className="google-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d-88.1065!3d43.0642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAzJzUxLjEiTiA4OMKwMDYnMjMuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lifetime Home Services Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Request Free Estimate</h2>
            <form className="contact-form" netlify="true" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="lead_source" value="internet" />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name *</label>
                  <input type="text" id="first_name" name="first_name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name *</label>
                  <input type="text" id="last_name" name="last_name" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div className="form-group">
                <label htmlFor="service_interest">Service of Interest *</label>
                <select id="service_interest" name="service_interest" required>
                  <option value="">Select a service...</option>
                  <option value="Radon Testing">Radon Testing</option>
                  <option value="Radon Mitigation">Radon Mitigation</option>
                  <option value="Custom Closets">Custom Closets</option>
                  <option value="Smart Home Technology (AIH)">Smart Home Technology (AIH)</option>
                  <option value="Floor Coatings (EPOXY)">Floor Coatings (EPOXY)</option>
                  <option value="Home Security">Home Security</option>
                  <option value="Aeroseal">Aeroseal</option>
                  <option value="Duct Cleaning">Duct Cleaning</option>
                  <option value="Multiple (Concierge Services)">Multiple (Concierge Services)</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancingPage = () => (
    <div className="financing-page">
      <div className="container">
        <div className="financing-header">
          <h1>Financing Options</h1>
          <p>Make your home improvement dreams a reality with our flexible financing solutions.</p>
        </div>

        <div className="financing-highlight">
          <h2>As Low as 0% Financing Available</h2>
          <p>Qualified customers can take advantage of promotional financing offers</p>
        </div>

        <div className="financing-options">
          <div className="financing-card">
            <h3>0% Interest for 12 Months</h3>
            <p>Perfect for smaller projects and quick payoff plans.</p>
            <ul>
              <li>No interest if paid in full within 12 months</li>
              <li>Quick approval process</li>
              <li>Minimum credit score requirements apply</li>
            </ul>
            <a href="https://www.synchronybank.com/mysynchrony/apply" target="_blank" rel="noopener noreferrer" className="financing-link">
              Apply Now
            </a>
          </div>

          <div className="financing-card">
            <h3>Extended Payment Plans</h3>
            <p>Longer terms for larger home improvement projects.</p>
            <ul>
              <li>Terms up to 84 months available</li>
              <li>Competitive interest rates</li>
              <li>Fixed monthly payments</li>
            </ul>
            <a href="https://www.synchronybank.com/mysynchrony/apply" target="_blank" rel="noopener noreferrer" className="financing-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="financing-cta">
          <h3>Ready to Get Started?</h3>
          <p>Contact us today to discuss your project and financing options.</p>
          <button 
            className="cta-button primary large"
            onClick={() => handlePageChange('contact')}
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );

  const renderWisconsinPage = () => (
    <div className="state-page">
      <div className="state-background">
        <div className="state-silhouette"></div>
      </div>
      
      <div className="container">
        <div className="state-header">
          <h1>Service Areas in Wisconsin</h1>
          <p>Professional home services throughout Wisconsin</p>
        </div>

        <div className="state-content">
          <div className="services-offered">
            <h2>Services Available in Wisconsin</h2>
            <div className="service-list">
              <div className="service-item">
                <h3>Free Radon Testing</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('radon-testing')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>Radon Mitigation</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('radon-mitigation')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>HVAC Services</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('hvac-services')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>Duct Cleaning & AeroSeal</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('duct-cleaning')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>Concrete Coatings</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('concrete-coatings')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>Custom Closets</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('custom-closets')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>Smart Home Technology</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('smart-home')}
                >
                  Learn More
                </button>
              </div>
              <div className="service-item">
                <h3>Security Systems</h3>
                <button 
                  className="learn-more-btn"
                  onClick={() => handlePageChange('security-systems')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="coverage-areas">
            <h2>Coverage Areas</h2>
            
            <div className="area-codes-section">
              <h3>Area Codes Served</h3>
              <div className="area-codes">
                <span className="area-code">262</span>
                <span className="area-code">414</span>
                <span className="area-code">920</span>
              </div>
            </div>

            <div className="zip-codes-section">
              <h3>Zip Codes Served</h3>
              <div className="zip-codes-container">
                {!expandedZipCodes ? (
                  <>
                    <div className="zip-codes-preview">
                      <span className="zip-code">53005</span>
                      <span className="zip-code">53018</span>
                      <span className="zip-code">53045</span>
                      <span className="zip-code">53051</span>
                      <span className="zip-code">53072</span>
                    </div>
                    <button 
                      className="expand-zip-btn"
                      onClick={() => setExpandedZipCodes(true)}
                    >
                      +25 more
                    </button>
                  </>
                ) : (
                  <div className="zip-codes-expanded">
                    <span className="zip-code">53005</span>
                    <span className="zip-code">53018</span>
                    <span className="zip-code">53045</span>
                    <span className="zip-code">53051</span>
                    <span className="zip-code">53072</span>
                    <span className="zip-code">53090</span>
                    <span className="zip-code">53095</span>
                    <span className="zip-code">53097</span>
                    <span className="zip-code">53122</span>
                    <span className="zip-code">53129</span>
                    <span className="zip-code">53130</span>
                    <span className="zip-code">53132</span>
                    <span className="zip-code">53149</span>
                    <span className="zip-code">53150</span>
                    <span className="zip-code">53151</span>
                    <span className="zip-code">53154</span>
                    <span className="zip-code">53186</span>
                    <span className="zip-code">53188</span>
                    <span className="zip-code">53189</span>
                    <span className="zip-code">53190</span>
                    <span className="zip-code">53202</span>
                    <span className="zip-code">53203</span>
                    <span className="zip-code">53204</span>
                    <span className="zip-code">53205</span>
                    <span className="zip-code">53206</span>
                    <span className="zip-code">53207</span>
                    <span className="zip-code">53208</span>
                    <span className="zip-code">53209</span>
                    <span className="zip-code">53210</span>
                    <span className="zip-code">53211</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="state-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to schedule your free estimate for any of our Wisconsin services.</p>
          <button 
            className="cta-button primary large"
            onClick={() => handlePageChange('contact')}
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'radon-testing':
        return renderRadonTestingPage();
      case 'radon-mitigation':
        return renderRadonMitigationPage();
      case 'hvac-services':
        return renderHVACPage();
      case 'duct-cleaning':
        return renderDuctCleaningPage();
      case 'concrete-coatings':
        return renderConcreteCoatingsPage();
      case 'smart-home':
        return renderSmartHomePage();
      case 'security-systems':
        return renderSecuritySystemsPage();
      case 'control4':
        return renderControl4Page();
      case 'custom-closets':
        return renderCustomClosetsPage();
      case 'contact':
        return renderContactPage();
      case 'financing':
        return renderFinancingPage();
      case 'wisconsin':
        return renderWisconsinPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      {renderCurrentPage()}
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{brandConfig[currentBrand].name}</h3>
              <p>Trusted Solutions. Lifetime Results.</p>
              <button 
                className="footer-contact-btn"
                onClick={() => handlePageChange('contact')}
              >
                Contact Us Today
              </button>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              {brandConfig[currentBrand].services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Phone: (262) 226-2729</p>
              <p>Brookfield, WI 53045</p>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 {brandConfig[currentBrand].name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

