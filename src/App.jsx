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
        'Custom Closets',
        'Garage Organization',
        'Home Office Solutions'
      ]
    }
  };

  const handleNavigation = (page, brand = null) => {
    if (brand) {
      setCurrentBrand(brand);
    }
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowServiceAreasDropdown(false);
    window.scrollTo(0, 0);
  };

  const toggleZipSection = (state) => {
    setExpandedZipSections(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  // Header Component
  const Header = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src={brandConfig[currentBrand].logo} 
            alt={brandConfig[currentBrand].name}
            className="logo"
            onClick={() => handleNavigation('home')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        <nav className="main-nav">
          <div className="brand-links">
            <button 
              className={`brand-link ${currentBrand === 'lifetime' ? 'active' : ''}`}
              onClick={() => handleNavigation('home', 'lifetime')}
            >
              Lifetime Home Services
            </button>
            <button 
              className={`brand-link ${currentBrand === 'aih' ? 'active' : ''}`}
              onClick={() => handleNavigation('home', 'aih')}
            >
              America In-Home
            </button>
            <button 
              className={`brand-link ${currentBrand === 'closets' ? 'active' : ''}`}
              onClick={() => handleNavigation('home', 'closets')}
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
                  {brandConfig[currentBrand].services.map((service, index) => (
                    <button 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleNavigation(service.toLowerCase().replace(/\s+/g, '-'))}
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
                  <button className="dropdown-item" onClick={() => handleNavigation('wisconsin')}>Wisconsin</button>
                  <button className="dropdown-item" onClick={() => handleNavigation('illinois')}>Illinois</button>
                  <button className="dropdown-item" onClick={() => handleNavigation('minnesota')}>Minnesota</button>
                  <button className="dropdown-item" onClick={() => handleNavigation('colorado')}>Colorado</button>
                </div>
              )}
            </div>
            
            <button className="nav-button" onClick={() => handleNavigation('financing')}>
              Financing
            </button>
          </div>
        </nav>
        
        <div className="contact-info">
          <span className="phone">(262) 226-2729</span>
        </div>
      </div>
    </header>
  );

  // Hero Section Component
  const HeroSection = () => (
    <section className="hero-section-fullscreen">
      <div className="hero-background">
        <img 
          src={brandConfig[currentBrand].heroImage} 
          alt={brandConfig[currentBrand].name}
          className="hero-image-fullscreen"
        />
      </div>
      <div className="hero-content-overlay">
        <div className="hero-text-content">
          <h1 className="hero-title-large">{brandConfig[currentBrand].name}</h1>
          <p className="hero-subtitle-large">{brandConfig[currentBrand].tagline}</p>
          <div className="hero-cta-buttons">
            <button 
              className="cta-button primary large"
              onClick={() => handleNavigation('contact')}
            >
              Get Free Estimate
            </button>
            <button 
              className="cta-button secondary large"
              onClick={() => handleNavigation('financing')}
            >
              View Financing
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Services Grid Component
  const ServicesGrid = () => {
    const getServiceImage = (service) => {
      const serviceImageMap = {
        'Free Radon Testing': '/radon-testing-device.jpg',
        'Radon Mitigation': '/radon-mitigation-system.jpg',
        'HVAC Services': '/organized-garage-storage.jpg',
        'Duct Cleaning & AeroSeal': '/aeroseal-logo.png',
        'Concrete Coatings': '/home-office-organization.jpg',
        'Smart Home Automation': '/america-smart-home-hero.jpg',
        'Security Systems': '/organized-garage-storage.jpg',
        'Control4 Integration': '/home-office-organization.jpg',
        'Custom Closets': '/closets-luxury-hero.jpg',
        'Garage Organization': '/organized-garage-storage.jpg',
        'Home Office Solutions': '/home-office-organization.jpg'
      };
      return serviceImageMap[service] || '/lifetime-hero-house.jpg';
    };

    const getServiceDescription = (service) => {
      const descriptions = {
        'Free Radon Testing': 'Professional radon testing using EPA-approved equipment to ensure your family\'s safety.',
        'Radon Mitigation': 'Expert radon mitigation systems to reduce dangerous radon levels in your home.',
        'HVAC Services': 'Complete heating, ventilation, and air conditioning services for optimal home comfort.',
        'Duct Cleaning & AeroSeal': 'Professional duct cleaning and sealing services to improve air quality and efficiency.',
        'Concrete Coatings': 'Durable epoxy coatings and better solutions for garage floors, basements, and more.',
        'Smart Home Automation': 'Complete smart home integration for lighting, climate, security, and entertainment.',
        'Security Systems': 'Advanced home security solutions with 24/7 monitoring and smart integration.',
        'Control4 Integration': 'Professional Control4 system installation and integration services.',
        'Custom Closets': 'Custom-designed closet solutions for maximum organization and style.',
        'Garage Organization': 'Professional garage organization systems for optimal storage and functionality.',
        'Home Office Solutions': 'Custom home office organization and storage solutions for productivity.'
      };
      return descriptions[service] || 'Professional service tailored to your needs.';
    };

    return (
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid-2x2">
            {brandConfig[currentBrand].services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={getServiceImage(service)} alt={service} />
                </div>
                <div className="service-content">
                  <h3>{service}</h3>
                  <p>{getServiceDescription(service)}</p>
                  <button 
                    className="learn-more-btn"
                    onClick={() => handleNavigation(service.toLowerCase().replace(/\s+/g, '-'))}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Form Component
  const ContactForm = () => (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Ready to get started? Contact us today for your free consultation!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-details-line">
              <span className="contact-item">
                <strong>Phone:</strong> (262) 226-2729
              </span>
              <span className="contact-item">
                <strong>Hours:</strong> Mon-Fri 8AM-6PM
              </span>
              <span className="contact-item">
                <strong>Address:</strong> 1234 Main St, Brookfield, WI 53045
              </span>
            </div>
            
            <div className="google-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1234567890123!2d-88.1234567!3d43.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lifetime Home Services Location"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form-section">
            <form className="contact-form" netlify="true" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="lead_source" value="Internet" />
              
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
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" />
              </div>
              
              <div className="form-group">
                <label htmlFor="service_interest">Service of Interest *</label>
                <select id="service_interest" name="service_interest" required>
                  <option value="">Select a service...</option>
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
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4"></textarea>
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

  // Financing Page Component
  const FinancingPage = () => (
    <div className="financing-page">
      <div className="container">
        <div className="financing-header">
          <h1>Financing Options</h1>
          <p>Make your home improvement dreams a reality with our flexible financing solutions.</p>
        </div>
        
        <div className="financing-content">
          <div className="financing-highlight">
            <h2>As Low as 0% Financing Available</h2>
            <p>Qualified customers can take advantage of promotional financing rates.</p>
          </div>
          
          <div className="financing-options">
            <div className="financing-card">
              <h3>Synchrony Financing</h3>
              <p>We partner with Synchrony to offer you flexible payment options for your home improvement projects.</p>
              <ul>
                <li>Quick and easy application process</li>
                <li>Competitive interest rates</li>
                <li>Flexible payment terms</li>
                <li>No prepayment penalties</li>
              </ul>
              <a 
                href="https://www.synchrony.com/mysynchrony/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="financing-link"
              >
                Apply Now with Synchrony
              </a>
            </div>
            
            <div className="financing-card">
              <h3>Traditional Financing</h3>
              <p>Standard financing options available for all qualifying customers.</p>
              <ul>
                <li>Fixed monthly payments</li>
                <li>Various term lengths available</li>
                <li>Transparent pricing</li>
                <li>Professional consultation</li>
              </ul>
              <button 
                className="financing-link"
                onClick={() => handleNavigation('contact')}
              >
                Contact Us for Details
              </button>
            </div>
          </div>
          
          <div className="financing-cta">
            <h3>Ready to Get Started?</h3>
            <p>Contact us today to discuss your financing options and get your project started.</p>
            <button 
              className="cta-button primary"
              onClick={() => handleNavigation('contact')}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // State Pages Component
  const StatePage = ({ state, services, areaCodes, zipCodes }) => (
    <div className="state-page">
      <div className="state-background">
        <div className="state-silhouette"></div>
      </div>
      <div className="container">
        <div className="state-header">
          <h1>Service Areas in {state}</h1>
          <p>Professional home services throughout {state}</p>
        </div>
        
        <div className="state-content">
          <div className="services-offered">
            <h2>Services Available in {state}</h2>
            <div className="service-list">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <h3>{service}</h3>
                  <button 
                    className="learn-more-btn"
                    onClick={() => handleNavigation(service.toLowerCase().replace(/\s+/g, '-'))}
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
                {areaCodes.map((code, index) => (
                  <span key={index} className="area-code">{code}</span>
                ))}
              </div>
            </div>
            
            <div className="zip-codes-section">
              <h3>Zip Codes Served</h3>
              <div className="zip-codes-container">
                <div className="zip-codes-preview">
                  {zipCodes.slice(0, 10).map((code, index) => (
                    <span key={index} className="zip-code">{code}</span>
                  ))}
                  {zipCodes.length > 10 && (
                    <button 
                      className="expand-zip-btn"
                      onClick={() => toggleZipSection(state)}
                    >
                      +{zipCodes.length - 10} more
                    </button>
                  )}
                </div>
                
                {expandedZipSections[state] && zipCodes.length > 10 && (
                  <div className="zip-codes-expanded">
                    {zipCodes.slice(10).map((code, index) => (
                      <span key={index} className="zip-code">{code}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="state-cta">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for your free consultation in {state}!</p>
            <button 
              className="cta-button primary"
              onClick={() => handleNavigation('contact')}
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Wisconsin Page
  const WisconsinPage = () => {
    const services = ['Free Radon Testing', 'Radon Mitigation', 'HVAC Services', 'Duct Cleaning & AeroSeal', 'Concrete Coatings', 'Custom Closets', 'Smart Home Technology', 'Security Systems'];
    const areaCodes = ['262', '414', '608', '715', '920', '534', '274'];
    const zipCodes = ['53005', '53012', '53018', '53022', '53029', '53033', '53045', '53051', '53056', '53066', '53072', '53089', '53090', '53092', '53095', '53097', '53108', '53122', '53129', '53130', '53132', '53140', '53142', '53146', '53149', '53150', '53151', '53154', '53158', '53168', '53172', '53186', '53188', '53189', '53190', '53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53274', '53278', '53295'];
    
    return <StatePage state="Wisconsin" services={services} areaCodes={areaCodes} zipCodes={zipCodes} />;
  };

  // Illinois Page
  const IllinoisPage = () => {
    const services = ['HVAC Services', 'Duct Cleaning & AeroSeal'];
    const areaCodes = ['224', '312', '331', '630', '708', '773', '815', '847', '872', '464', '779'];
    const zipCodes = ['60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039', '60040', '60041', '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60050', '60051', '60053', '60055', '60056', '60060', '60061', '60062', '60064', '60065', '60067', '60068', '60069', '60070', '60071', '60072', '60073', '60074', '60075', '60076', '60077', '60078', '60081', '60082', '60083', '60084', '60085', '60087', '60088', '60089', '60090', '60091', '60092', '60093', '60094', '60095', '60096', '60097', '60098', '60099'];
    
    return <StatePage state="Illinois" services={services} areaCodes={areaCodes} zipCodes={zipCodes} />;
  };

  // Minnesota Page
  const MinnesotaPage = () => {
    const services = ['Free Radon Testing', 'Radon Mitigation'];
    const areaCodes = ['218', '320', '507', '612', '651', '763', '952', '924'];
    const zipCodes = ['55001', '55002', '55003', '55009', '55011', '55014', '55016', '55017', '55018', '55019', '55020', '55021', '55024', '55025', '55027', '55031', '55033', '55038', '55040', '55041', '55042', '55043', '55044', '55045', '55046', '55047', '55055', '55056', '55057', '55065', '55066', '55068', '55069', '55070', '55071', '55075', '55076', '55077', '55079', '55082', '55083', '55090', '55092', '55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55109', '55110', '55111', '55112', '55113', '55114', '55115', '55116', '55117', '55118', '55119', '55120', '55121', '55122', '55123', '55124', '55125', '55126', '55127', '55128', '55129', '55130', '55133', '55144', '55150', '55155', '55161', '55164', '55165', '55166', '55168', '55169', '55170', '55171', '55172', '55175', '55177', '55182', '55187', '55188', '55191'];
    
    return <StatePage state="Minnesota" services={services} areaCodes={areaCodes} zipCodes={zipCodes} />;
  };

  // Colorado Page
  const ColoradoPage = () => {
    const services = ['Free Radon Testing', 'Radon Mitigation'];
    const areaCodes = ['303', '719', '720', '970', '983'];
    const zipCodes = ['80001', '80002', '80003', '80004', '80005', '80006', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027', '80030', '80031', '80033', '80034', '80035', '80036', '80037', '80038', '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108', '80109', '80110', '80111', '80112', '80113', '80116', '80117', '80118', '80120', '80121', '80122', '80123', '80124', '80125', '80126', '80127', '80128', '80129', '80130', '80131', '80132', '80133', '80134', '80135', '80136', '80137', '80138', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212', '80214', '80215', '80216', '80218', '80219', '80220', '80221', '80222', '80223', '80224', '80225', '80226', '80227', '80228', '80229', '80230', '80231', '80232', '80233', '80234', '80235', '80236', '80237', '80238', '80239', '80246', '80247', '80249', '80260', '80264', '80290', '80293', '80294'];
    
    return <StatePage state="Colorado" services={services} areaCodes={areaCodes} zipCodes={zipCodes} />;
  };

  // Radon Education Page Component
  const RadonEducationPage = () => (
    <div className="radon-education-page">
      <div className="container">
        <div className="education-header">
          <h1>Radon Education Center</h1>
          <p>Everything you need to know about radon gas and protecting your family</p>
        </div>
        
        <div className="education-content">
          <section className="education-section">
            <h2>What is Radon?</h2>
            <p>Radon is a naturally occurring radioactive gas that comes from the decay of uranium in soil, rock, and water. It's colorless, odorless, and tasteless, making it impossible to detect without proper testing equipment.</p>
            
            <p>According to the <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA (Environmental Protection Agency)</a>, radon is the leading cause of lung cancer among non-smokers and the second leading cause overall, responsible for approximately 21,000 deaths annually in the United States.</p>
          </section>

          <section className="education-section">
            <h2>How Radon Enters Your Home</h2>
            <p>Radon gas moves up through the ground and enters buildings through:</p>
            <ul>
              <li>Cracks in solid floors and walls</li>
              <li>Construction joints</li>
              <li>Gaps in suspended floors</li>
              <li>Gaps around service pipes</li>
              <li>Cavities inside walls</li>
              <li>The water supply (less common)</li>
            </ul>
          </section>

          <section className="education-section">
            <h2>Health Risks</h2>
            <p>Long-term exposure to elevated radon levels significantly increases the risk of lung cancer. The risk is even higher for smokers. The <a href="https://www.who.int/news-room/fact-sheets/detail/radon-and-health" target="_blank" rel="noopener noreferrer">World Health Organization (WHO)</a> estimates that radon causes between 3% to 14% of all lung cancers, depending on the average radon level in the country.</p>
            
            <p>Children are particularly vulnerable due to their higher breathing rate and developing lung tissue.</p>
          </section>

          <section className="education-section">
            <h2>Testing Your Home</h2>
            <p>The EPA recommends testing all homes below the third floor for radon. Testing is the only way to know if your home has elevated radon levels.</p>
            
            <h3>Testing Methods</h3>
            <ul>
              <li><strong>Short-term tests (2-7 days):</strong> Quick screening using charcoal canisters or electronic monitors</li>
              <li><strong>Long-term tests (90+ days):</strong> More accurate representation of year-round radon levels</li>
              <li><strong>Professional testing:</strong> Conducted by certified professionals using calibrated equipment</li>
            </ul>
            
            <p>We use professional-grade equipment including the Airthings Corentium Pro for accurate, reliable results.</p>
          </section>

          <section className="education-section">
            <h2>Understanding Test Results</h2>
            <p>Radon is measured in picocuries per liter (pCi/L). Here's what your results mean:</p>
            <ul>
              <li><strong>Below 2 pCi/L:</strong> Low risk, no action needed</li>
              <li><strong>2-4 pCi/L:</strong> Consider mitigation, especially for long-term exposure</li>
              <li><strong>4 pCi/L and above:</strong> EPA recommends mitigation</li>
              <li><strong>Above 10 pCi/L:</strong> Urgent - mitigate as soon as possible</li>
            </ul>
            
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
                <p>Utilizes existing perimeter drain system for radon removal</p>
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
        return <WisconsinPage />;
      case 'illinois':
        return <IllinoisPage />;
      case 'minnesota':
        return <MinnesotaPage />;
      case 'colorado':
        return <ColoradoPage />;
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
    <div className="App" data-brand={currentBrand}>
      <Header />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{brandConfig[currentBrand].name}</h3>
              <p>{brandConfig[currentBrand].tagline}</p>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Phone: (262) 226-2729</p>
              <p>Email: info@lifetimehomeservices.com</p>
            </div>
            <div className="footer-section">
              <h4>Service Areas</h4>
              <p>Wisconsin • Illinois • Minnesota • Colorado</p>
            </div>
            <div className="footer-section">
              <button 
                className="footer-contact-btn"
                onClick={() => handleNavigation('contact')}
              >
                Contact Us
              </button>
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
