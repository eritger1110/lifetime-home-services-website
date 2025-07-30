import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showServiceAreasDropdown, setShowServiceAreasDropdown] = useState(false);
  const [expandedZipCodes, setExpandedZipCodes] = useState({});

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
        'Duct Cleaning & AeroSeal',
        'Concrete Floor Coatings'
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

  const stateServices = {
    wisconsin: ['Free Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Floor Coatings', 'Custom Closets', 'Smart Home Automation', 'Security Systems'],
    illinois: ['Radon Mitigation', 'Duct Cleaning & AeroSeal'],
    minnesota: ['Free Radon Testing', 'Radon Mitigation'],
    colorado: ['Free Radon Testing', 'Radon Mitigation']
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
      'Duct Cleaning & AeroSeal': 'duct-cleaning',
      'Concrete Floor Coatings': 'floor-coatings',
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

  const handleFooterServiceClick = (service) => {
    handleServiceClick(service);
  };

  const toggleZipCodes = (state) => {
    setExpandedZipCodes(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
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
                  <button
                    className="dropdown-item"
                    onClick={() => handlePageChange('illinois')}
                  >
                    Illinois
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handlePageChange('minnesota')}
                  >
                    Minnesota
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handlePageChange('colorado')}
                  >
                    Colorado
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
          <div className="phone">(262) 955-5701</div>
        </div>
      </div>
    </header>
  );

  const renderGoogleReviews = () => (
    <section className="google-reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-carousel">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Excellent radon mitigation service! Professional team and great results."</p>
            <div className="reviewer">- Sarah M.</div>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Amazing floor coating work. Garage looks incredible and the team was fantastic."</p>
            <div className="reviewer">- Mike R.</div>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>"Smart home installation exceeded expectations. Highly recommend!"</p>
            <div className="reviewer">- Jennifer L.</div>
          </div>
        </div>
        <div className="google-reviews-link">
          <a 
            href="https://www.google.com/search?q=Lifetime+Home+Services+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Read All Google Reviews
          </a>
        </div>
      </div>
    </section>
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
                className="cta-button primary large with-border"
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

                <div className="service-card">
                  <div className="service-image">
                    <img src="/after1.jpg" alt="Concrete Floor Coatings" />
                  </div>
                  <div className="service-content">
                    <h3>Concrete Floor Coatings</h3>
                    <p>Professional epoxy and polyaspartic floor coatings with Torginol flakes and lifetime warranty.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handlePageChange('floor-coatings')}
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
                    <img src="/control4-smart-home.jpg" alt="Control4 Integration" />
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

      {/* Google Reviews Section */}
      {renderGoogleReviews()}
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
            <h2>What Is Radon?</h2>
            <p>Radon is a naturally occurring radioactive gas that forms when uranium breaks down in soil, rock, and water. It's completely invisible, odorless, and tasteless, which means the only way to detect it is through professional testing.</p>
            
            <p>According to the <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA</a>, radon is the <strong>second leading cause of lung cancer in the United States</strong>, responsible for over 20,000 deaths each year. The <a href="https://www.cdc.gov/radon/" target="_blank" rel="noopener noreferrer">CDC</a> confirms that radon exposure significantly increases lung cancer risk, especially for smokers.</p>

            <h3>How Radon Enters Your Home</h3>
            <p>Radon gas moves up through the ground and enters your home through:</p>
            <ul>
              <li><strong>Cracks in concrete floors and walls</strong> - Even hairline cracks can allow radon entry</li>
              <li><strong>Gaps in suspended floors</strong> - Spaces between floor joists and foundation</li>
              <li><strong>Crawlspaces</strong> - Unsealed crawlspaces are major entry points</li>
              <li><strong>Openings around pipes and utility lines</strong> - Where utilities enter your home</li>
              <li><strong>Floor drains and sump pumps</strong> - Direct pathways from soil to indoor air</li>
              <li><strong>Well water</strong> - Radon can be released when water is used</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Our Professional Testing Process</h2>
            <p>We use only EPA-approved testing equipment and follow strict protocols to ensure accurate results.</p>
            
            <div className="system-types">
              <div className="system-type">
                <h4>Step 1: Free In-Home Assessment</h4>
                <p>We place professional-grade continuous radon monitors in the lowest livable level of your home</p>
              </div>
              <div className="system-type">
                <h4>Step 2: 48-72 Hour Testing Period</h4>
                <p>Equipment continuously monitors radon levels, recording hourly readings for accuracy</p>
              </div>
              <div className="system-type">
                <h4>Step 3: Detailed Results Analysis</h4>
                <p>We provide comprehensive results with EPA risk level explanations and recommendations</p>
              </div>
              <div className="system-type">
                <h4>Step 4: Expert Consultation</h4>
                <p>If mitigation is needed, we provide detailed solutions and answer all your questions</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Understanding Radon Levels & Health Risks</h2>
            <p>Radon is measured in picocuries per liter (pCi/L). Here's what different levels mean for your family's health:</p>
            
            <div className="radon-levels">
              <div className="level-card low">
                <h4>Below 2.0 pCi/L</h4>
                <p><strong>Low Risk</strong> - No immediate action needed, but consider retesting every 2 years</p>
              </div>
              <div className="level-card moderate">
                <h4>2.0 - 4.0 pCi/L</h4>
                <p><strong>Moderate Risk</strong> - EPA recommends considering mitigation, especially for long-term exposure</p>
              </div>
              <div className="level-card high">
                <h4>4.0 - 10.0 pCi/L</h4>
                <p><strong>High Risk</strong> - EPA strongly recommends mitigation within 6 months</p>
              </div>
              <div className="level-card very-high">
                <h4>10.0+ pCi/L</h4>
                <p><strong>Very High Risk</strong> - EPA recommends immediate mitigation within 30 days</p>
              </div>
            </div>

            <p><strong>Important:</strong> There is no "safe" level of radon. Even levels below 4.0 pCi/L pose some risk, and the EPA estimates that reducing levels from 2.0 to 1.0 pCi/L could save thousands of lives annually.</p>
          </div>

          <div className="education-section">
            <h2>When Should You Test for Radon?</h2>
            <div className="faq-item">
              <h4>🏠 New Home Purchase</h4>
              <p>Always test before buying a home. Many mortgage companies now require radon testing, and it's a standard part of home inspections.</p>
            </div>
            <div className="faq-item">
              <h4>📅 Every 2 Years</h4>
              <p>EPA recommends testing every 2 years, even if previous tests were low. Radon levels can change over time due to settling, weather patterns, and home modifications.</p>
            </div>
            <div className="faq-item">
              <h4>🔨 After Home Renovations</h4>
              <p>Major renovations, especially basement finishing or foundation work, can change airflow patterns and affect radon levels significantly.</p>
            </div>
            <div className="faq-item">
              <h4>🌡️ Seasonal Variations</h4>
              <p>Radon levels can vary by season due to changes in soil conditions, home ventilation patterns, and heating/cooling system operation.</p>
            </div>
            <div className="faq-item">
              <h4>🏘️ Neighborhood Testing</h4>
              <p>If neighbors have high radon levels, test your home. Radon levels can vary significantly even between adjacent properties.</p>
            </div>
          </div>

          <div className="education-section">
            <h2>Why Choose Professional Testing?</h2>
            <p>While DIY test kits are available, professional testing offers significant advantages:</p>
            <ul>
              <li><strong>EPA-Approved Equipment:</strong> We use continuous radon monitors that provide hour-by-hour readings</li>
              <li><strong>Proper Placement:</strong> Correct monitor placement is critical for accurate results</li>
              <li><strong>Quality Assurance:</strong> Our equipment is regularly calibrated and certified</li>
              <li><strong>Expert Interpretation:</strong> We explain results and provide actionable recommendations</li>
              <li><strong>Immediate Results:</strong> No waiting for mail-in lab results</li>
              <li><strong>Follow-up Support:</strong> We're available to answer questions and provide mitigation solutions</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Testing Conditions & Accuracy</h2>
            <p>For accurate results, we follow strict EPA protocols:</p>
            <ul>
              <li><strong>Closed-House Conditions:</strong> Windows and doors remain closed 12 hours before and during testing</li>
              <li><strong>Normal Living Patterns:</strong> Continue normal activities, but avoid excessive ventilation</li>
              <li><strong>Optimal Placement:</strong> Monitors placed in lowest livable level, away from drafts and humidity sources</li>
              <li><strong>Minimum Test Duration:</strong> 48-hour minimum for short-term testing, longer for seasonal variations</li>
              <li><strong>Weather Considerations:</strong> We account for weather conditions that may affect results</li>
            </ul>
          </div>
        </div>

        <div className="education-cta">
          <h2>Schedule Your Free Radon Test Today</h2>
          <p>Don't wait to protect your family. Our certified professionals will test your home and provide expert recommendations within 48-72 hours.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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
            
            <p><strong>Don't panic if you have high radon levels—radon mitigation is highly effective.</strong> Most properly installed systems reduce radon levels by 80-99%, often bringing levels below 2.0 pCi/L.</p>

            <h3>How Mitigation Systems Work</h3>
            <p>Radon mitigation systems work by creating a pressure differential that prevents radon from entering your home and safely vents it above the roofline where it disperses harmlessly into the atmosphere.</p>
          </div>

          <div className="education-section">
            <h2>Mitigation System Types</h2>
            <p>We select the optimal system type based on your home's construction, foundation type, and radon levels:</p>

            <div className="system-types">
              <div className="system-type">
                <h4>Sub-Slab Depressurization (SSD)</h4>
                <p><strong>Most Common System:</strong> PVC pipe inserted through basement floor creates suction beneath the foundation slab, drawing radon from soil and venting it above the roofline. Ideal for homes with concrete slab foundations.</p>
              </div>
              <div className="system-type">
                <h4>Sump Pit Depressurization</h4>
                <p><strong>Cost-Effective Option:</strong> Utilizes existing sump pit as the suction point, eliminating the need to drill through the floor. Perfect if your home already has a sump pump system.</p>
              </div>
              <div className="system-type">
                <h4>Drain Tile Depressurization</h4>
                <p><strong>Existing Infrastructure:</strong> Uses existing perimeter drain tile systems under the slab for radon removal. Reduces installation time and cost while providing excellent results.</p>
              </div>
              <div className="system-type">
                <h4>Crawl Space Encapsulation</h4>
                <p><strong>Crawl Space Homes:</strong> Heavy-duty plastic sheeting sealed over exposed soil with fan system drawing radon from below the membrane. Includes vapor barrier for moisture control.</p>
              </div>
              <div className="system-type">
                <h4>Block Wall Depressurization</h4>
                <p><strong>Block Foundation Homes:</strong> Suction applied to hollow block walls to prevent radon entry through wall cavities. Often combined with sub-slab systems for maximum effectiveness.</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>The Radon Fans We Trust</h2>
            <p>We exclusively install high-performance radon fans from <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a>, a leading U.S. manufacturer known for durability, quiet operation, and maximum draw capacity.</p>

            <div className="fan-types">
              <div className="fan-card">
                <h4>Maverick Eagle</h4>
                <p><strong>Standard Systems:</strong> Ideal for typical sub-slab systems. Quiet operation (under 35 dB), energy efficient, and perfect for most residential applications.</p>
              </div>
              <div className="fan-card">
                <h4>Eagle Max</h4>
                <p><strong>High-Powered Systems:</strong> Maximum airflow for homes with compacted subgrade, multiple suction points, or challenging soil conditions. Built for demanding applications.</p>
              </div>
              <div className="fan-card">
                <h4>Legends Series</h4>
                <p><strong>Premium Performance:</strong> Sleek design for visible exterior installations. Superior performance with architectural appeal for discerning homeowners.</p>
              </div>
              <div className="fan-card">
                <h4>Legends Max</h4>
                <p><strong>Ultimate Power:</strong> Maximum air volume for the most challenging mitigation scenarios. When standard fans aren't enough, Legends Max delivers.</p>
              </div>
            </div>

            <p><strong>Fan Selection Process:</strong> Each fan is carefully selected based on your home's specific layout, soil conditions, and mitigation requirements to ensure optimal airflow and long-term performance.</p>
          </div>

          <div className="education-section">
            <h2>Our Professional Installation Process</h2>
            <div className="installation-timeline">
              <div className="timeline-item">
                <h4>Day 1: System Design & Installation</h4>
                <p><strong>4-6 Hours:</strong> Our certified technicians install the complete system with minimal disruption. We drill suction points, install piping, mount the fan, and complete electrical connections.</p>
              </div>
              <div className="timeline-item">
                <h4>Day 2-3: System Operation</h4>
                <p><strong>Continuous Operation:</strong> System runs 24/7 to establish proper airflow patterns and begin reducing radon levels. We monitor initial performance.</p>
              </div>
              <div className="timeline-item">
                <h4>Day 4-7: Post-Installation Testing</h4>
                <p><strong>Verification Testing:</strong> We conduct follow-up testing to verify system effectiveness and ensure radon levels are below EPA action level of 4.0 pCi/L.</p>
              </div>
              <div className="timeline-item">
                <h4>Ongoing: Lifetime Support</h4>
                <p><strong>Lifetime Warranty:</strong> All system components covered by our comprehensive lifetime warranty. Annual maintenance available for optimal performance.</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>System Effectiveness & Performance</h2>
            <p>Our professionally installed mitigation systems deliver exceptional results:</p>
            
            <div className="effectiveness-stats">
              <div className="stat-card">
                <h4>80-99% Reduction</h4>
                <p>Typical radon level reduction achieved by our systems</p>
              </div>
              <div className="stat-card">
                <h4>24-48 Hours</h4>
                <p>Time to see significant radon level reduction</p>
              </div>
              <div className="stat-card">
                <h4>24/7 Operation</h4>
                <p>Continuous protection for your family</p>
              </div>
              <div className="stat-card">
                <h4>Low Energy Use</h4>
                <p>Fans use less electricity than a 60-watt light bulb</p>
              </div>
            </div>

            <h3>Long-Term Performance</h3>
            <ul>
              <li><strong>Immediate Results:</strong> Radon levels typically drop within 24-48 hours of system activation</li>
              <li><strong>Consistent Protection:</strong> Systems operate continuously for year-round protection</li>
              <li><strong>Energy Efficient:</strong> Modern fans are extremely energy efficient, costing less than $100/year to operate</li>
              <li><strong>Quiet Operation:</strong> Properly installed systems are virtually silent indoors</li>
              <li><strong>Minimal Maintenance:</strong> Annual inspection recommended, but systems require minimal upkeep</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Code Compliance & Warranties</h2>
            <p>All our installations meet or exceed local building codes and EPA guidelines:</p>
            <ul>
              <li><strong>EPA Compliance:</strong> All systems follow EPA radon mitigation standards</li>
              <li><strong>Building Permits:</strong> We handle all necessary permits and inspections</li>
              <li><strong>Electrical Code:</strong> All electrical work performed by licensed electricians</li>
              <li><strong>Lifetime Warranty:</strong> Comprehensive warranty on all system components</li>
              <li><strong>Performance Guarantee:</strong> We guarantee radon reduction below 4.0 pCi/L</li>
              <li><strong>Annual Testing:</strong> We recommend annual testing to verify continued effectiveness</li>
            </ul>
          </div>
        </div>

        <div className="education-cta">
          <h2>Ready to Protect Your Family?</h2>
          <p>Our certified radon professionals will design and install the perfect mitigation system for your home, backed by our lifetime warranty and performance guarantee.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
              onClick={() => handlePageChange('contact')}
            >
              Get Free Estimate
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handlePageChange('radon-testing')}
            >
              Learn About Testing First
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFloorCoatingsPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Professional Concrete Floor Coatings</h1>
          <p>Transform your garage, basement, or commercial space with our premium epoxy and polyaspartic coating systems</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Our Professional Floor Coating System</h2>
            <p>We use a proven 3-layer system that delivers unmatched durability, beauty, and performance. Our process combines premium materials with expert installation to create floors that won't fade, yellow, crack, peel, or chip.</p>

            <div className="coating-process">
              <div className="process-step">
                <h4>Step 1: Professional Floor Preparation</h4>
                <p><strong>Diamond Grinding & Shot Blasting:</strong> We mechanically prepare your concrete surface to create the perfect profile for coating adhesion. This critical step ensures maximum bond strength and longevity.</p>
              </div>
              <div className="process-step">
                <h4>Step 2: Epoxy Base with Torginol Flakes</h4>
                <p><strong>Deep Penetration:</strong> Our premium epoxy base penetrates deep into the concrete for incredibly strong adhesion. We then broadcast genuine Torginol decorative flakes for beauty and texture.</p>
              </div>
              <div className="process-step">
                <h4>Step 3: Polyaspartic Top Coat</h4>
                <p><strong>Ultimate Protection:</strong> Our polyaspartic top coat provides a crystal-clear, non-yellowing finish that's UV stable and chemical resistant. This is what makes our floors last a lifetime.</p>
              </div>
            </div>
          </div>

          <div className="before-after-gallery">
            <h2>See the Transformation</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/Before1.jpg" alt="Before Floor Coating" />
                <p>Before: Stained concrete floor</p>
              </div>
              <div className="gallery-item">
                <img src="/after1.jpg" alt="After Floor Coating" />
                <p>After: Beautiful Torginol flake system</p>
              </div>
              <div className="gallery-item">
                <img src="/Before2.jpg" alt="Before Floor Coating" />
                <p>Before: Cracked garage floor</p>
              </div>
              <div className="gallery-item">
                <img src="/after2.jpg" alt="After Floor Coating" />
                <p>After: Seamless professional finish</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Why Torginol Flakes?</h2>
            <p>We exclusively use genuine Torginol decorative flakes - the industry standard for premium floor coatings. Torginol flakes offer superior quality, consistency, and durability compared to generic alternatives.</p>

            <div className="torginol-benefits">
              <div className="benefit-card">
                <h4>Superior Quality</h4>
                <p>Torginol flakes are manufactured to strict quality standards for consistent size, color, and performance</p>
              </div>
              <div className="benefit-card">
                <h4>Color Stability</h4>
                <p>UV-stable pigments ensure colors won't fade or change over time, even in direct sunlight</p>
              </div>
              <div className="benefit-card">
                <h4>Slip Resistance</h4>
                <p>Textured surface provides excellent traction, even when wet</p>
              </div>
              <div className="benefit-card">
                <h4>Easy Maintenance</h4>
                <p>Non-porous surface resists stains and cleans easily with simple mopping</p>
              </div>
            </div>

            <div className="color-options">
              <h3>Available Torginol Flake Colors</h3>
              <p>Choose from our most popular Torginol flake combinations:</p>
              <div className="color-grid">
                <div className="color-option">
                  <div className="color-sample granite"></div>
                  <p>Granite Mix</p>
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
                  <p>Neutral Blend</p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Our Lifetime Warranty Promise</h2>
            <p>We stand behind our work with an industry-leading <strong>Limited Lifetime Warranty</strong> that covers:</p>

            <div className="warranty-coverage">
              <div className="warranty-item">
                <h4>✓ No Fading</h4>
                <p>Colors will not fade or change, even in direct sunlight</p>
              </div>
              <div className="warranty-item">
                <h4>✓ No Yellowing</h4>
                <p>Polyaspartic top coat will not yellow like traditional epoxy</p>
              </div>
              <div className="warranty-item">
                <h4>✓ No Cracking</h4>
                <p>Properly installed system will not crack under normal use</p>
              </div>
              <div className="warranty-item">
                <h4>✓ No Peeling</h4>
                <p>Superior adhesion prevents peeling or delamination</p>
              </div>
              <div className="warranty-item">
                <h4>✓ No Chipping</h4>
                <p>Durable surface resists chips from normal garage use</p>
              </div>
            </div>

            <p><strong>What's Covered:</strong> Material defects, installation workmanship, and coating performance under normal residential use. This warranty is transferable to new homeowners, adding value to your property.</p>
          </div>

          <div className="education-section">
            <h2>Applications & Benefits</h2>
            <div className="applications-grid">
              <div className="application-card">
                <h4>Garage Floors</h4>
                <p>Transform your garage into a showroom with chemical-resistant, easy-to-clean floors that handle oil, salt, and automotive fluids.</p>
              </div>
              <div className="application-card">
                <h4>Basement Floors</h4>
                <p>Moisture-resistant coatings perfect for below-grade spaces. Brightens dark basements and provides a durable, attractive surface.</p>
              </div>
              <div className="application-card">
                <h4>Commercial Spaces</h4>
                <p>Heavy-duty systems for warehouses, retail spaces, and industrial facilities. Withstands forklift traffic and heavy equipment.</p>
              </div>
              <div className="application-card">
                <h4>Outdoor Patios</h4>
                <p>UV-stable coatings that won't fade in sunlight. Perfect for pool decks, patios, and outdoor entertainment areas.</p>
              </div>
            </div>

            <h3>Key Benefits</h3>
            <ul>
              <li><strong>Chemical Resistance:</strong> Resists oil, gasoline, salt, and household chemicals</li>
              <li><strong>Easy Maintenance:</strong> Simple mopping keeps floors looking new</li>
              <li><strong>Increased Property Value:</strong> Professional coatings significantly increase home value</li>
              <li><strong>Improved Lighting:</strong> Reflective surface brightens spaces by up to 300%</li>
              <li><strong>Dust Reduction:</strong> Sealed surface eliminates concrete dust</li>
              <li><strong>Temperature Resistance:</strong> Withstands extreme temperature changes</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Professional vs. DIY: Why It Matters</h2>
            <p>While DIY coating kits are available, professional installation ensures optimal results and longevity:</p>

            <div className="comparison-table">
              <div className="comparison-row">
                <div className="comparison-item professional">
                  <h4>Professional Installation</h4>
                  <ul>
                    <li>Diamond grinding for perfect surface prep</li>
                    <li>Commercial-grade materials</li>
                    <li>Proper mixing and application techniques</li>
                    <li>Lifetime warranty protection</li>
                    <li>Expert color and design consultation</li>
                  </ul>
                </div>
                <div className="comparison-item diy">
                  <h4>DIY Kits</h4>
                  <ul>
                    <li>Acid etching (often inadequate)</li>
                    <li>Consumer-grade materials</li>
                    <li>Risk of application errors</li>
                    <li>Limited or no warranty</li>
                    <li>Trial and error approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Maintenance & Care</h2>
            <p>Keep your professionally coated floors looking perfect with minimal maintenance:</p>

            <div className="maintenance-tips">
              <div className="tip-card">
                <h4>Daily Care</h4>
                <p>Sweep or dust mop to remove debris. The smooth surface makes cleaning effortless.</p>
              </div>
              <div className="tip-card">
                <h4>Weekly Cleaning</h4>
                <p>Damp mop with mild detergent. No special cleaners required.</p>
              </div>
              <div className="tip-card">
                <h4>Spill Cleanup</h4>
                <p>Clean spills immediately. The non-porous surface prevents staining.</p>
              </div>
              <div className="tip-card">
                <h4>Annual Care</h4>
                <p>Professional inspection available to ensure continued performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Transform Your Floors Today</h2>
          <p>Ready to experience the beauty and durability of professional floor coatings? Our experts will design the perfect system for your space and usage requirements.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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

  // Continue with other service pages...
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
        </div>

        <div className="education-cta">
          <h2>Improve Your Home's Air Quality Today</h2>
          <p>Our certified technicians will clean and seal your ducts for better air quality and energy efficiency.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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
        </div>

        <div className="education-cta">
          <h2>Ready to Automate Your Home?</h2>
          <p>Our smart home experts will design and install the perfect automation system for your needs.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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
        </div>

        <div className="education-cta">
          <h2>Secure Your Home Today</h2>
          <p>Our security experts will design a comprehensive protection system tailored to your property.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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
        </div>

        <div className="education-cta">
          <h2>Experience Professional Home Automation</h2>
          <p>Our Control4 experts will design the perfect automation system for your home and lifestyle.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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
          <p>Professional custom closet design and installation for organized living and elevated style</p>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h2>Professional Custom Closet Solutions</h2>
            <p>Transform your storage spaces with our professional custom closet systems. We specialize in creating highly functional, beautifully designed organizational solutions that maximize space and enhance your daily routine.</p>

            <p>Our team brings decades of experience in custom storage design, having mastered the art of creating organized, efficient spaces that reflect your personal style and meet your specific needs.</p>

            <h3>Our Closet Services:</h3>
            <ul>
              <li><strong>Walk-In Master Closets:</strong> Luxury designs with islands, seating, and premium finishes</li>
              <li><strong>Reach-In Bedroom Closets:</strong> Maximize space in standard closets with smart design</li>
              <li><strong>Pantry Organization:</strong> Custom pantry systems for optimal kitchen storage</li>
              <li><strong>Mudroom Solutions:</strong> Entry organization with lockers, benches, and hooks</li>
              <li><strong>Home Office Storage:</strong> Built-in desks, filing systems, and display areas</li>
              <li><strong>Garage Organization:</strong> Wall systems and overhead storage solutions</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Professional Design Process</h2>
            <div className="system-types">
              <div className="system-type">
                <h4>In-Home Design Consultation</h4>
                <p>Our professional designers visit your home to assess your space, understand your lifestyle, and discuss your organizational goals</p>
              </div>
              <div className="system-type">
                <h4>3D Design & Visualization</h4>
                <p>See your custom closet design in detailed 3D renderings before installation, with multiple layout options</p>
              </div>
              <div className="system-type">
                <h4>Material & Finish Selection</h4>
                <p>Choose from premium materials, hardware, and accessories to perfectly match your home's style</p>
              </div>
              <div className="system-type">
                <h4>Professional Installation</h4>
                <p>Expert installation by certified technicians with minimal disruption to your daily routine</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Premium Features & Components</h2>
            <p>Our custom closet systems include the finest components and features:</p>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Adjustable Shelving Systems</h4>
                <p>Flexible shelving that adapts to your changing storage needs over time</p>
              </div>
              <div className="feature-card">
                <h4>Soft-Close Drawers</h4>
                <p>Premium drawers with dividers for jewelry, accessories, and delicate items</p>
              </div>
              <div className="feature-card">
                <h4>Specialized Hanging Systems</h4>
                <p>Double-hang rods, pull-down rods, and specialty hangers for all clothing types</p>
              </div>
              <div className="feature-card">
                <h4>Custom Accessories</h4>
                <p>Shoe racks, tie racks, belt hooks, and custom storage for specific needs</p>
              </div>
              <div className="feature-card">
                <h4>LED Lighting Integration</h4>
                <p>Energy-efficient LED lighting systems for optimal visibility and ambiance</p>
              </div>
              <div className="feature-card">
                <h4>Premium Hardware</h4>
                <p>High-quality handles, hinges, and accessories that combine function with style</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Material Options & Finishes</h2>
            <p>Choose from our selection of premium materials and finishes:</p>

            <div className="materials-grid">
              <div className="material-option">
                <h4>Melamine Systems</h4>
                <p>Durable, easy-to-clean surfaces available in multiple colors and wood grain patterns</p>
              </div>
              <div className="material-option">
                <h4>Wood Veneer</h4>
                <p>Natural wood grain finishes for a luxury appearance that complements fine furniture</p>
              </div>
              <div className="material-option">
                <h4>Thermofoil</h4>
                <p>Smooth, painted finishes that resist moisture and scratches while maintaining beauty</p>
              </div>
              <div className="material-option">
                <h4>Custom Colors</h4>
                <p>Match any color scheme with our custom color matching capabilities</p>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Why Choose Professional Installation?</h2>
            <p>Professional custom closets offer significant advantages over DIY solutions:</p>

            <ul>
              <li><strong>Maximized Space Utilization:</strong> Professional design utilizes every inch efficiently</li>
              <li><strong>Superior Materials:</strong> Commercial-grade components not available to consumers</li>
              <li><strong>Expert Installation:</strong> Precise measurements and professional installation techniques</li>
              <li><strong>Warranty Protection:</strong> Comprehensive warranty on materials and workmanship</li>
              <li><strong>Increased Home Value:</strong> Professional closets significantly boost property value</li>
              <li><strong>Lifetime Durability:</strong> Built to last with heavy-duty construction</li>
            </ul>
          </div>

          <div className="education-section">
            <h2>Popular Luxury Features</h2>
            <p>Enhance your custom closet with these popular luxury additions:</p>

            <div className="luxury-features">
              <div className="luxury-item">
                <h4>Center Islands</h4>
                <p>Additional storage and surface space with drawers and display areas</p>
              </div>
              <div className="luxury-item">
                <h4>Built-In Seating</h4>
                <p>Comfortable benches for putting on shoes and accessories</p>
              </div>
              <div className="luxury-item">
                <h4>Full-Length Mirrors</h4>
                <p>Built-in mirrors for dressing and outfit coordination</p>
              </div>
              <div className="luxury-item">
                <h4>Jewelry Organization</h4>
                <p>Felt-lined drawers with compartments for jewelry and watches</p>
              </div>
              <div className="luxury-item">
                <h4>Shoe Display Systems</h4>
                <p>Angled shelves and cubbies for easy access and attractive display</p>
              </div>
              <div className="luxury-item">
                <h4>Accessory Storage</h4>
                <p>Specialized storage for handbags, scarves, and accessories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-cta">
          <h2>Design Your Dream Closet</h2>
          <p>Our professional closet design experts will create the perfect organizational solution for your space, lifestyle, and budget.</p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary large with-border"
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
                <strong>Phone:</strong> (262) 955-5701
              </div>
              <div className="contact-item">
                <strong>Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM
              </div>
              <div className="contact-item">
                <strong>Address:</strong> 3485 N. 124th St. Brookfield, WI 53005
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
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="financing-link">
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
            <a href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" target="_blank" rel="noopener noreferrer" className="financing-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="financing-cta">
          <h3>Ready to Get Started?</h3>
          <p>Contact us today to discuss your project and financing options.</p>
          <button 
            className="cta-button primary large with-border"
            onClick={() => handlePageChange('contact')}
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );

  const renderStatePage = (state) => {
    const stateInfo = {
      wisconsin: {
        name: 'Wisconsin',
        services: stateServices.wisconsin,
        areaCodes: ['262', '414', '920'],
        zipCodes: ['53005', '53018', '53045', '53051', '53072', '53090', '53095', '53097', '53122', '53129', '53130', '53132', '53149', '53150', '53151', '53154', '53186', '53188', '53189', '53190', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211']
      },
      illinois: {
        name: 'Illinois',
        services: stateServices.illinois,
        areaCodes: ['815', '779'],
        zipCodes: ['60001', '60002', '60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60025', '60026', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039']
      },
      minnesota: {
        name: 'Minnesota',
        services: stateServices.minnesota,
        areaCodes: ['612', '651', '763'],
        zipCodes: ['55001', '55003', '55005', '55007', '55008', '55009', '55011', '55014', '55016', '55017', '55018', '55019', '55020', '55021', '55024', '55025', '55026', '55027', '55029', '55030', '55031', '55032', '55033', '55038', '55040', '55041', '55042', '55043', '55044', '55045']
      },
      colorado: {
        name: 'Colorado',
        services: stateServices.colorado,
        areaCodes: ['303', '720', '970'],
        zipCodes: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027', '80030', '80031', '80033', '80034', '80035', '80036']
      }
    };

    const info = stateInfo[state];
    if (!info) return null;

    return (
      <div className="state-page">
        <div className="state-background">
          <div className={`state-silhouette ${state}-silhouette`}></div>
        </div>
        
        <div className="container">
          <div className="state-header">
            <h1>Service Areas in {info.name}</h1>
            <p>Professional home services throughout {info.name}</p>
          </div>

          <div className="state-content">
            <div className="services-offered">
              <h2>Services Available in {info.name}</h2>
              <div className="service-list">
                {info.services.map((service) => (
                  <div key={service} className="service-item">
                    <h3>{service}</h3>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handleServiceClick(service)}
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
                  {info.areaCodes.map((code) => (
                    <span key={code} className="area-code">{code}</span>
                  ))}
                </div>
              </div>

              <div className="zip-codes-section">
                <h3>Zip Codes Served</h3>
                <div className="zip-codes-container">
                  {!expandedZipCodes[state] ? (
                    <>
                      <div className="zip-codes-preview">
                        {info.zipCodes.slice(0, 5).map((code) => (
                          <span key={code} className="zip-code">{code}</span>
                        ))}
                      </div>
                      <button 
                        className="expand-zip-btn"
                        onClick={() => toggleZipCodes(state)}
                      >
                        +{info.zipCodes.length - 5} more
                      </button>
                    </>
                  ) : (
                    <div className="zip-codes-expanded">
                      {info.zipCodes.map((code) => (
                        <span key={code} className="zip-code">{code}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="state-cta">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to schedule your free estimate for any of our {info.name} services.</p>
            <button 
              className="cta-button primary large with-border"
              onClick={() => handlePageChange('contact')}
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'radon-testing':
        return renderRadonTestingPage();
      case 'radon-mitigation':
        return renderRadonMitigationPage();
      case 'floor-coatings':
        return renderFloorCoatingsPage();
      case 'duct-cleaning':
        return renderDuctCleaningPage();
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
      case 'illinois':
      case 'minnesota':
      case 'colorado':
        return renderStatePage(currentPage);
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
                <p 
                  key={service}
                  className="footer-service-link"
                  onClick={() => handleFooterServiceClick(service)}
                >
                  {service}
                </p>
              ))}
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Phone: (262) 955-5701</p>
              <p>3485 N. 124th St. Brookfield, WI 53005</p>
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

