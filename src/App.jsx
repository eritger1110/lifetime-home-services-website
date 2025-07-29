import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, currentBrand]);

  // Enhanced brand configurations with sophisticated, muted colors
  const brands = {
    lifetime: {
      name: 'Lifetime Home Services',
      logo: '/LifetimeHomeServicesLogo.png',
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005',
      primaryColor: '#1e40af', // Sophisticated blue
      secondaryColor: '#3b82f6',
      accentColor: '#fbbf24',
      heroImage: '/lifetime-hero-house.jpg',
      tagline: 'Lifetime Home Solutions. Trusted Solutions. Lifetime Results.',
      serviceAreas: ['Wisconsin', 'Illinois', 'Minnesota', 'Colorado'],
      services: ['FREE Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings'],
      videos: {}
    },
    america: {
      name: 'America In-Home',
      logo: '/AmericaIn-HomeLogo3.png',
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005',
      primaryColor: '#b91c1c', // Sophisticated burgundy/crimson (muted red)
      secondaryColor: '#dc2626', // Less aggressive red
      accentColor: '#1e40af',
      heroImage: '/america-smart-home-hero.jpg',
      tagline: 'Luxury Living. Seamlessly Connected.',
      serviceAreas: ['Wisconsin (1-hour radius of Brookfield)'],
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration'],
      videos: {
        'Smart Home Automation': 'https://player.vimeo.com/video/YOUR_SMART_HOME_VIDEO_ID',
        'Security Systems': 'https://player.vimeo.com/video/YOUR_SECURITY_VIDEO_ID'
      }
    },
    closets: {
      name: 'Closet Concepts',
      logo: '/NewClosetConceptsLogo.pdf',
      phone: '(262) 955-5701',
      address: '3485 North 124th Street, Brookfield, WI 53005',
      primaryColor: '#047857', // Sophisticated forest green
      secondaryColor: '#059669',
      accentColor: '#f59e0b',
      heroImage: '/closets-luxury-hero.jpg',
      tagline: 'Organized Living. Elevated Style.',
      serviceAreas: ['Wisconsin (1-hour radius of Brookfield)'],
      services: ['Walk-in Closets', 'Reach-in Closets', 'Pantry Organization', 'Garage Storage', 'Laundry Rooms', 'Mudrooms', 'Home Offices', 'Craft Rooms'],
      organizationTypes: ['Reach-in Closets', 'Walk-in Closets', 'Garage Organization', 'Pantry Organization', 'Mudroom Organization', 'Laundry Room Organization', 'Home Office Organization', 'Craft Room Organization']
    }
  };

  const brand = brands[currentBrand];

  // Enhanced service image mapping with unique images for each service
  const serviceImages = {
    'FREE Radon Testing': '/radon-testing-device.jpg',
    'Radon Mitigation': '/radon-mitigation-system.jpg',
    'Duct Cleaning & AeroSeal': '/aeroseal-logo.png',
    'Concrete Coatings': '/organized-garage-storage.jpg',
    'Smart Home Automation': '/america-smart-home-hero.jpg',
    'Security Systems': '/home-office-organization.jpg',
    'Control4 Integration': '/america-smart-home-hero.jpg',
    'Walk-in Closets': '/closets-luxury-hero.jpg',
    'Reach-in Closets': '/home-office-organization.jpg',
    'Pantry Organization': '/organized-garage-storage.jpg',
    'Garage Storage': '/organized-garage-storage.jpg',
    'Laundry Rooms': '/home-office-organization.jpg',
    'Mudrooms': '/organized-garage-storage.jpg',
    'Home Offices': '/home-office-organization.jpg',
    'Craft Rooms': '/home-office-organization.jpg'
  };

  // Enhanced navigation handlers
  const handleBrandSwitch = (brandKey) => {
    setCurrentBrand(brandKey);
    setCurrentPage('home');
    setShowDropdown(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowDropdown(null);
  };

  const handleGetFreeEstimate = () => {
    setShowContactForm(true);
  };

  const handleScheduleConsultation = () => {
    setShowContactForm(true);
  };

  // Dynamic CSS variables for brand theming
  useEffect(() => {
    document.documentElement.style.setProperty('--brand-primary', brand.primaryColor);
    document.documentElement.style.setProperty('--brand-secondary', brand.secondaryColor);
    document.documentElement.style.setProperty('--brand-accent', brand.accentColor);
  }, [brand]);

  return (
    <div className="App" data-brand={currentBrand}>
      {/* Enhanced Header with Large, Prominent Logo */}
      <header className="header-powerhouse">
        <div className="container">
          <div className="header-content-powerhouse">
            {/* Large, Prominent Logo Section */}
            <div className="logo-section-powerhouse">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="logo-powerhouse"
                onClick={() => handlePageChange('home')}
              />
            </div>

            {/* Brand Navigation */}
            <div className="brand-navigation-powerhouse">
              <div className="brand-links-powerhouse">
                <button 
                  className={`brand-link-powerhouse ${currentBrand === 'lifetime' ? 'active' : ''}`}
                  onClick={() => handleBrandSwitch('lifetime')}
                >
                  Lifetime Home Services
                </button>
                <button 
                  className={`brand-link-powerhouse ${currentBrand === 'america' ? 'active' : ''}`}
                  onClick={() => handleBrandSwitch('america')}
                >
                  America In-Home
                </button>
                <button 
                  className={`brand-link-powerhouse ${currentBrand === 'closets' ? 'active' : ''}`}
                  onClick={() => handleBrandSwitch('closets')}
                >
                  Closet Concepts
                </button>
              </div>

              {/* Main Navigation */}
              <nav className="main-nav-powerhouse">
                <div 
                  className="nav-item-dropdown"
                  onMouseEnter={() => setShowDropdown('services')}
                  onMouseLeave={() => setShowDropdown(null)}
                >
                  <span>Services ▼</span>
                  {showDropdown === 'services' && (
                    <div className="dropdown-menu-powerhouse">
                      {brand.services.map((service, index) => (
                        <button 
                          key={index}
                          onClick={() => handlePageChange(`service-${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`)}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Closet Concepts Organization Dropdown */}
                {currentBrand === 'closets' && (
                  <div 
                    className="nav-item-dropdown"
                    onMouseEnter={() => setShowDropdown('organization')}
                    onMouseLeave={() => setShowDropdown(null)}
                  >
                    <span>Organization Solutions ▼</span>
                    {showDropdown === 'organization' && (
                      <div className="dropdown-menu-powerhouse">
                        {brand.organizationTypes.map((type, index) => (
                          <button 
                            key={index}
                            onClick={() => handlePageChange(`organization-${type.toLowerCase().replace(/\s+/g, '-')}`)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div 
                  className="nav-item-dropdown"
                  onMouseEnter={() => setShowDropdown('areas')}
                  onMouseLeave={() => setShowDropdown(null)}
                >
                  <span>Service Areas ▼</span>
                  {showDropdown === 'areas' && (
                    <div className="dropdown-menu-powerhouse">
                      {brand.serviceAreas.map((area, index) => (
                        <button 
                          key={index}
                          onClick={() => handlePageChange(`state-${area.toLowerCase().split(' ')[0]}`)}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button onClick={() => handlePageChange('financing')}>Financing</button>
                <button onClick={() => handlePageChange('contact')}>Contact</button>
                {currentBrand === 'lifetime' && (
                  <button onClick={() => handlePageChange('radon-education')}>Radon Education</button>
                )}
              </nav>

              {/* Contact Info */}
              <div className="contact-info-header-powerhouse">
                <span className="phone-number-powerhouse">{brand.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content-powerhouse">
        {showContactForm ? (
          <ContactFormPage brand={brand} onClose={() => setShowContactForm(false)} />
        ) : (
          <>
            {currentPage === 'home' && <Homepage brand={brand} onGetFreeEstimate={handleGetFreeEstimate} onScheduleConsultation={handleScheduleConsultation} />}
            {currentPage.startsWith('service-') && <ServicePage serviceName={currentPage} brand={brand} onGetFreeEstimate={handleGetFreeEstimate} />}
            {currentPage.startsWith('organization-') && <OrganizationPage organizationType={currentPage} brand={brand} onGetFreeEstimate={handleGetFreeEstimate} />}
            {currentPage.startsWith('state-') && <StatePage state={currentPage.replace('state-', '')} brand={brand} />}
            {currentPage === 'financing' && <FinancingPage brand={brand} />}
            {currentPage === 'contact' && <ContactPage brand={brand} onGetFreeEstimate={handleGetFreeEstimate} />}
            {currentPage === 'radon-education' && <RadonEducationPage brand={brand} onGetFreeEstimate={handleGetFreeEstimate} />}
          </>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="footer-powerhouse">
        <div className="container">
          <div className="footer-content-powerhouse">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <p>{brand.phone}</p>
              <p>{brand.address}</p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              {brand.services.map((service, index) => (
                <p key={index}>{service}</p>
              ))}
            </div>
            <div className="footer-section">
              <h3>Service Areas</h3>
              {brand.serviceAreas.map((area, index) => (
                <p key={index}>{area}</p>
              ))}
            </div>
            <div className="footer-section">
              <button 
                className="footer-contact-button"
                onClick={() => handlePageChange('contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Homepage with Full-Screen Hero (No Dark Overlay, No White Box)
function Homepage({ brand, onGetFreeEstimate, onScheduleConsultation }) {
  return (
    <div className="homepage-powerhouse">
      {/* Full-Screen Hero Section - Crystal Clear Image */}
      <section className="hero-section-fullscreen-powerhouse">
        <div className="hero-background-powerhouse">
          <img src={brand.heroImage} alt={brand.name} className="hero-image-fullscreen-powerhouse" />
        </div>
        <div className="hero-content-overlay-powerhouse">
          <div className="hero-text-content-powerhouse">
            <h1 className="hero-title-powerhouse">{brand.tagline}</h1>
            <p className="hero-subtitle-powerhouse">
              {brand.services.join(' • ')}
            </p>
            <div className="hero-buttons-powerhouse">
              <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
                Get Free Estimate
              </button>
              <button className="cta-button-powerhouse secondary large" onClick={() => window.location.href = '#financing'}>
                As Low As 0% Financing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with 2x2 Grid */}
      <section className="services-section-powerhouse">
        <div className="container">
          <h2 className="section-title-powerhouse">Our Services</h2>
          <div className="services-grid-2x2-powerhouse">
            {brand.services.map((service, index) => (
              <div key={index} className="service-card-powerhouse">
                <div className="service-image-container-powerhouse">
                  <img 
                    src={serviceImages[service]} 
                    alt={service} 
                    className="service-image-powerhouse"
                  />
                </div>
                <div className="service-content-powerhouse">
                  <h3>{service}</h3>
                  <p>{getServiceDescription(service, brand)}</p>
                  <button 
                    className="learn-more-button-powerhouse"
                    onClick={() => window.location.href = `#service-${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section-powerhouse">
        <div className="container">
          <div className="cta-content-powerhouse">
            <h2>Ready to Transform Your Home?</h2>
            <p>Get your free estimate today and discover why thousands of homeowners trust {brand.name}.</p>
            <div className="cta-buttons-powerhouse">
              <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
                Get Free Estimate
              </button>
              <button className="cta-button-powerhouse secondary large" onClick={onScheduleConsultation}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Enhanced service descriptions with "epoxy but better" for concrete coatings
function getServiceDescription(service, brand) {
  const descriptions = {
    'FREE Radon Testing': 'Professional radon testing with fast results. Protect your family from this invisible threat.',
    'Radon Mitigation': 'EPA-certified radon mitigation systems that reduce radon levels by up to 99%.',
    'Duct Cleaning & AeroSeal': 'Professional duct cleaning and sealing services to improve air quality and energy efficiency.',
    'Concrete Coatings': 'Premium concrete coatings - like epoxy but better. Durable, beautiful, and long-lasting floor solutions.',
    'Smart Home Automation': 'Complete home automation solutions using Control4 technology for seamless living.',
    'Security Systems': 'Professional security system installation and monitoring for complete peace of mind.',
    'Control4 Integration': 'Advanced Control4 home automation and smart home integration services.',
    'Walk-in Closets': 'Custom walk-in closet systems with premium materials and professional installation.',
    'Reach-in Closets': 'Maximize storage in reach-in closets with custom shelving and organization.',
    'Pantry Organization': 'Custom pantry shelving with pull-out drawers and organizational systems.',
    'Garage Storage': 'Professional garage organization systems for maximum storage and functionality.',
    'Laundry Rooms': 'Custom laundry room organization with cabinets, shelving, and storage solutions.',
    'Mudrooms': 'Organized mudroom solutions with benches, hooks, and storage for busy families.',
    'Home Offices': 'Custom home office organization with desks, shelving, and storage solutions.',
    'Craft Rooms': 'Specialized craft room organization with custom storage for supplies and materials.'
  };
  
  return descriptions[service] || `Professional ${service.toLowerCase()} services with expert installation.`;
}

// Enhanced Service Page Component with Comprehensive Educational Content
function ServicePage({ serviceName, brand, onGetFreeEstimate }) {
  const service = serviceName.replace('service-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/And/g, '&');
  const hasVideo = brand.videos && brand.videos[service];
  
  return (
    <div className="service-page-powerhouse">
      <div className="container">
        {/* Service Hero Section */}
        <section className="service-hero-powerhouse">
          <div className="service-hero-image-powerhouse">
            <img src={serviceImages[service]} alt={service} />
          </div>
          <div className="service-hero-content-powerhouse">
            <h1 className="service-title-powerhouse">{service}</h1>
            <p className="service-subtitle-powerhouse">{getServiceDescription(service, brand)}</p>
            <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
              Get Free Estimate
            </button>
          </div>
        </section>

        {/* Video Section for America In-Home */}
        {hasVideo && (
          <section className="service-video-section-powerhouse">
            <div className="container">
              <h2>See {service} in Action</h2>
              <div className="video-container-powerhouse">
                <iframe 
                  src={brand.videos[service]}
                  width="100%" 
                  height="500" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title={`${service} Video`}
                ></iframe>
              </div>
            </div>
          </section>
        )}

        {/* Comprehensive Educational Content */}
        <section className="service-education-powerhouse">
          <div className="container">
            {getComprehensiveServiceContent(service, brand)}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="service-benefits-powerhouse">
          <div className="container">
            <h2>Why Choose {brand.name} for {service}?</h2>
            <div className="benefits-grid-powerhouse">
              {getServiceBenefits(service, brand).map((benefit, index) => (
                <div key={index} className="benefit-card-powerhouse">
                  <div className="benefit-icon-powerhouse">✓</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-process-powerhouse">
          <div className="container">
            <h2>Our {service} Process</h2>
            <div className="process-steps-powerhouse">
              {getServiceProcess(service).map((step, index) => (
                <div key={index} className="process-step-powerhouse">
                  <div className="step-number-powerhouse">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="service-faq-powerhouse">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list-powerhouse">
              {getServiceFAQ(service).map((faq, index) => (
                <div key={index} className="faq-item-powerhouse">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta-powerhouse">
          <div className="container">
            <div className="cta-content-centered-powerhouse">
              <h2>Ready to Get Started with {service}?</h2>
              <p>Contact us today for your free consultation and estimate.</p>
              <div className="cta-buttons-powerhouse">
                <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
                  Get Free Estimate
                </button>
                <span className="phone-large-powerhouse">{brand.phone}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


// Comprehensive service content for 5th-grade education level
function getComprehensiveServiceContent(service, brand) {
  const content = {
    'FREE Radon Testing': (
      <div className="comprehensive-content">
        <h2>What is Radon Testing?</h2>
        <p>Radon testing is like taking your home's temperature, but instead of checking if it's hot or cold, we're checking for an invisible gas called radon. Think of radon as a sneaky gas that you can't see, smell, or taste - but it can be dangerous to your family's health.</p>
        
        <h3>Why Do You Need Radon Testing?</h3>
        <p>Radon is the second leading cause of lung cancer in America. It comes from the ground under your house and can sneak in through tiny cracks. The only way to know if you have radon is to test for it - just like the only way to know if you have a fever is to use a thermometer.</p>
        
        <h3>How Does Radon Testing Work?</h3>
        <p>We use special devices that sit in your home for a few days and "sniff" the air for radon. It's completely safe and won't disturb your daily life. After the test, we'll tell you exactly how much radon is in your home.</p>
        
        <h3>What Happens After Testing?</h3>
        <p>If your radon levels are high (above 4.0 pCi/L), don't worry! We can fix it with a radon mitigation system. If your levels are low, you can rest easy knowing your family is safe.</p>
        
        <div className="important-links">
          <h3>Learn More from the Experts:</h3>
          <ul>
            <li><a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA Radon Information</a></li>
            <li><a href="https://www.cdc.gov/radon/" target="_blank" rel="noopener noreferrer">CDC Radon Health Information</a></li>
            <li><a href="https://www.lung.org/clean-air/at-home/indoor-air-pollutants/radon" target="_blank" rel="noopener noreferrer">American Lung Association</a></li>
          </ul>
        </div>
      </div>
    ),
    'Radon Mitigation': (
      <div className="comprehensive-content">
        <h2>What is Radon Mitigation?</h2>
        <p>Radon mitigation is like installing a special vacuum system under your house that sucks the radon gas away before it can get inside. Think of it as giving your house a way to "breathe out" the bad air.</p>
        
        <h3>How Does Radon Mitigation Work?</h3>
        <p>We install a pipe system under your house's foundation (the bottom part) and connect it to a special fan. This fan runs quietly all the time, pulling radon gas from under your house and sending it safely outside, high above your roof where it can't hurt anyone.</p>
        
        <h3>Types of Radon Mitigation Systems:</h3>
        <div className="mitigation-types">
          <h4>1. Sub-Slab Depressurization (Most Common)</h4>
          <p>We drill a small hole through your basement floor and install a pipe that goes all the way to your roof. A fan pulls the radon up and out.</p>
          
          <h4>2. Sump Pit System</h4>
          <p>If you have a sump pump, we can use that area to pull radon out. We seal the pit and connect our pipe system to it.</p>
          
          <h4>3. Drain Tile System</h4>
          <p>Some houses have special drainage pipes under the foundation. We can connect to these to remove radon.</p>
          
          <h4>4. Crawl Space Encapsulation</h4>
          <p>For houses with crawl spaces, we seal everything up tight and install ventilation to keep radon out.</p>
        </div>
        
        <h3>What Fans Do We Use?</h3>
        <p>We only use the best fans made by companies like <strong>Fantech</strong> and <strong>RadonAway</strong>. These fans are specially designed for radon systems and are very quiet - you'll barely know they're running!</p>
        
        <h3>How Well Does It Work?</h3>
        <p>Radon mitigation systems work amazingly well! Most systems reduce radon levels by 90-99%. A house that had dangerous radon levels can become completely safe in just one day.</p>
        
        <div className="important-links">
          <h3>Learn More from the Experts:</h3>
          <ul>
            <li><a href="https://www.epa.gov/radon/radon-mitigation-systems" target="_blank" rel="noopener noreferrer">EPA Radon Mitigation Guide</a></li>
            <li><a href="https://www.aarst.org/" target="_blank" rel="noopener noreferrer">American Association of Radon Scientists</a></li>
            <li><a href="https://sosradon.org/" target="_blank" rel="noopener noreferrer">Save Our Sons from Radon</a></li>
          </ul>
        </div>
      </div>
    ),
    'Duct Cleaning & AeroSeal': (
      <div className="comprehensive-content">
        <h2>What is Duct Cleaning?</h2>
        <p>Duct cleaning is like giving your home's breathing system a deep clean. Your house has air ducts (like big straws) that carry warm and cool air to every room. Over time, these ducts get dusty and dirty, just like everything else in your house.</p>
        
        <h3>Why Clean Your Ducts?</h3>
        <p>Dirty ducts can make your air quality poor and your energy bills higher. It's like trying to breathe through a dirty straw - it doesn't work very well! Clean ducts mean cleaner air and better airflow.</p>
        
        <h2>What is AeroSeal?</h2>
        <p>AeroSeal is like magic for your air ducts! It's a special technology that finds tiny holes and cracks in your ducts and seals them automatically from the inside. Imagine having a helper that could crawl through all your ducts and patch every little hole - that's what AeroSeal does!</p>
        
        <h3>How Does AeroSeal Work?</h3>
        <p>We blow a safe, non-toxic mist through your ducts. This mist is sticky and automatically sticks to the edges of holes and cracks, sealing them up. It's like having tiny bandages that know exactly where to go!</p>
        
        <h3>Benefits of AeroSeal:</h3>
        <ul>
          <li><strong>Lower Energy Bills:</strong> Sealed ducts mean less wasted air and lower costs</li>
          <li><strong>Better Comfort:</strong> Every room gets the right amount of air</li>
          <li><strong>Cleaner Air:</strong> Less dust and allergens from outside the ducts</li>
          <li><strong>Proven Results:</strong> We can show you exactly how much we improved your system</li>
        </ul>
        
        <div className="important-links">
          <h3>Learn More:</h3>
          <ul>
            <li><a href="https://www.aeroseal.com/" target="_blank" rel="noopener noreferrer">Official AeroSeal Website</a></li>
            <li><a href="https://www.energy.gov/energysaver/duct-sealing" target="_blank" rel="noopener noreferrer">Department of Energy - Duct Sealing</a></li>
          </ul>
        </div>
      </div>
    ),
    'Concrete Coatings': (
      <div className="comprehensive-content">
        <h2>What are Concrete Coatings?</h2>
        <p>Concrete coatings are like giving your concrete floors a super-strong, beautiful makeover! Think of it as putting a protective and pretty "skin" over your concrete that makes it look amazing and last much longer.</p>
        
        <h3>Why Are Our Coatings Better Than Epoxy?</h3>
        <p>While many companies use regular epoxy (which is okay), we use advanced coatings that are like "epoxy but better!" Our coatings are:</p>
        <ul>
          <li><strong>Stronger:</strong> They don't chip or peel as easily</li>
          <li><strong>More Beautiful:</strong> Better colors and finishes</li>
          <li><strong>Longer Lasting:</strong> They stay looking great for many more years</li>
          <li><strong>Chemical Resistant:</strong> Spills won't damage them</li>
        </ul>
        
        <h3>Where Can You Use Concrete Coatings?</h3>
        <ul>
          <li><strong>Garage Floors:</strong> Make your garage look like a showroom</li>
          <li><strong>Basement Floors:</strong> Turn a dull basement into a beautiful space</li>
          <li><strong>Patios:</strong> Create an outdoor living area you'll love</li>
          <li><strong>Driveways:</strong> Make your driveway the envy of the neighborhood</li>
        </ul>
        
        <h3>How Long Do They Last?</h3>
        <p>Our concrete coatings are built to last! With proper care, they can look great for 15-20 years or more. That's like getting a beautiful new floor that lasts until your kids graduate from college!</p>
        
        <h3>What Colors and Styles Are Available?</h3>
        <p>We have dozens of colors and patterns to choose from. You can get solid colors, metallic finishes, or even patterns that look like marble or granite. It's like having a custom designer floor!</p>
      </div>
    ),
    'Smart Home Automation': (
      <div className="comprehensive-content">
        <h2>What is Smart Home Automation?</h2>
        <p>Smart home automation is like having a super-smart helper that controls everything in your house! Imagine being able to turn on lights, adjust the temperature, play music, and even lock doors - all with just your voice or a tap on your phone.</p>
        
        <h3>What Can Smart Home Automation Do?</h3>
        <ul>
          <li><strong>Lighting Control:</strong> Turn lights on/off, dim them, or change colors from anywhere</li>
          <li><strong>Temperature Control:</strong> Keep your house the perfect temperature and save money</li>
          <li><strong>Music and Entertainment:</strong> Play music in any room or throughout the whole house</li>
          <li><strong>Security Integration:</strong> See who's at the door and control locks remotely</li>
          <li><strong>Voice Control:</strong> Just say "Alexa" or "Hey Google" to control everything</li>
        </ul>
        
        <h3>Why Choose Control4?</h3>
        <p>Control4 is like the "brain" of your smart home. It's the most reliable and professional smart home system available. Unlike cheaper systems that might stop working, Control4 is built to last and work perfectly every day.</p>
        
        <h3>How Does It Make Life Better?</h3>
        <p>Imagine coming home and your house automatically:</p>
        <ul>
          <li>Turns on the lights to the perfect brightness</li>
          <li>Adjusts the temperature to your favorite setting</li>
          <li>Starts playing your favorite music</li>
          <li>Disarms the security system</li>
        </ul>
        <p>All of this happens automatically when you pull into your driveway!</p>
        
        <h3>Is It Hard to Use?</h3>
        <p>Not at all! Smart home automation is designed to make life easier, not harder. Most people learn to use it in just a few minutes. If you can use a smartphone, you can use a smart home system.</p>
      </div>
    ),
    'Security Systems': (
      <div className="comprehensive-content">
        <h2>What is a Home Security System?</h2>
        <p>A home security system is like having a super-smart guard dog that never sleeps! It watches over your house 24/7 and alerts you if anything unusual happens. But unlike a guard dog, it won't eat your food or need walks!</p>
        
        <h3>What Does a Security System Include?</h3>
        <ul>
          <li><strong>Door and Window Sensors:</strong> These know when doors or windows open</li>
          <li><strong>Motion Detectors:</strong> These can "see" if someone is moving around inside</li>
          <li><strong>Security Cameras:</strong> These record video so you can see what's happening</li>
          <li><strong>Control Panel:</strong> This is the "brain" that controls everything</li>
          <li><strong>Mobile App:</strong> Control and monitor everything from your phone</li>
        </ul>
        
        <h3>How Does Professional Monitoring Work?</h3>
        <p>Professional monitoring means trained security experts watch your house even when you're not there. If your alarm goes off, they immediately check what's happening and can call the police, fire department, or ambulance if needed.</p>
        
        <h3>Can You Control It From Your Phone?</h3>
        <p>Yes! With our security systems, you can:</p>
        <ul>
          <li>See live video from your cameras</li>
          <li>Lock or unlock doors remotely</li>
          <li>Turn the alarm on or off</li>
          <li>Get instant alerts if anything happens</li>
          <li>Let delivery people in when you're not home</li>
        </ul>
        
        <h3>What About False Alarms?</h3>
        <p>Modern security systems are very smart and rarely have false alarms. They can tell the difference between your pet walking around and a real intruder. Plus, if there is a false alarm, you can quickly cancel it from your phone.</p>
        
        <h3>How Much Does Professional Monitoring Cost?</h3>
        <p>Professional monitoring typically costs less than $50 per month - that's less than most people spend on coffee! For the price of a few lattes, you get 24/7 protection for your entire family and everything you own.</p>
      </div>
    )
  };

  return content[service] || (
    <div className="comprehensive-content">
      <h2>Professional {service}</h2>
      <p>Our expert team provides professional {service.toLowerCase()} services with the highest quality materials and installation techniques.</p>
    </div>
  );
}

// Service benefits for each service
function getServiceBenefits(service, brand) {
  const benefits = {
    'FREE Radon Testing': [
      { title: 'EPA Certified Professionals', description: 'Our technicians are certified by the EPA for accurate testing' },
      { title: 'Fast Results', description: 'Get your results quickly so you can make informed decisions' },
      { title: 'No Cost to You', description: 'We provide free testing because your family\'s safety matters' },
      { title: 'Expert Follow-up', description: 'We explain your results and recommend next steps if needed' }
    ],
    'Radon Mitigation': [
      { title: '90-99% Reduction', description: 'Our systems reduce radon levels by 90-99% or more' },
      { title: 'Lifetime Warranty', description: 'We stand behind our work with comprehensive warranties' },
      { title: 'Quiet Operation', description: 'Premium fans run quietly without disturbing your home' },
      { title: 'Professional Installation', description: 'EPA-certified technicians ensure proper installation' }
    ],
    'Duct Cleaning & AeroSeal': [
      { title: 'Improved Air Quality', description: 'Remove dust, allergens, and contaminants from your air' },
      { title: 'Energy Savings', description: 'Sealed ducts can reduce energy costs by up to 30%' },
      { title: 'Better Comfort', description: 'Even temperatures throughout your home' },
      { title: 'Proven Results', description: 'We provide before and after measurements' }
    ],
    'Concrete Coatings': [
      { title: 'Superior Durability', description: 'Our coatings last 3x longer than regular epoxy' },
      { title: 'Chemical Resistant', description: 'Resistant to oil, chemicals, and stains' },
      { title: 'Easy Maintenance', description: 'Simple to clean and maintain for years' },
      { title: 'Beautiful Finishes', description: 'Dozens of colors and patterns available' }
    ],
    'Smart Home Automation': [
      { title: 'Control4 Certified', description: 'We\'re certified installers of the industry\'s best system' },
      { title: 'Increased Home Value', description: 'Smart homes sell for more and faster' },
      { title: 'Energy Savings', description: 'Automated systems reduce energy waste' },
      { title: 'Enhanced Security', description: 'Integration with security systems for total control' }
    ],
    'Security Systems': [
      { title: '24/7 Professional Monitoring', description: 'Trained professionals watch your home around the clock' },
      { title: 'Mobile Control', description: 'Control everything from your smartphone' },
      { title: 'Insurance Discounts', description: 'Many insurance companies offer discounts for security systems' },
      { title: 'Peace of Mind', description: 'Know your family and property are protected' }
    ]
  };

  return benefits[service] || [
    { title: 'Professional Installation', description: 'Expert installation by certified technicians' },
    { title: 'Quality Materials', description: 'We use only the highest quality materials' },
    { title: 'Comprehensive Warranty', description: 'Full warranty coverage on all work' },
    { title: 'Customer Support', description: 'Ongoing support and service after installation' }
  ];
}

// Service process steps
function getServiceProcess(service) {
  const processes = {
    'FREE Radon Testing': [
      { title: 'Schedule Your Test', description: 'Call us or fill out our form to schedule your free radon test' },
      { title: 'We Visit Your Home', description: 'Our certified technician places testing devices in your home' },
      { title: 'Wait for Results', description: 'Testing devices collect data for 2-7 days depending on test type' },
      { title: 'Get Your Results', description: 'We provide detailed results and explain what they mean' },
      { title: 'Recommendations', description: 'If mitigation is needed, we provide a free estimate' }
    ],
    'Radon Mitigation': [
      { title: 'Free Estimate', description: 'We assess your home and provide a detailed estimate' },
      { title: 'System Design', description: 'We design a custom system for your specific home' },
      { title: 'Professional Installation', description: 'Our certified team installs your system in one day' },
      { title: 'Testing & Verification', description: 'We test the system to ensure it\'s working properly' },
      { title: 'Follow-up Testing', description: 'We provide follow-up testing to verify radon reduction' }
    ],
    'Duct Cleaning & AeroSeal': [
      { title: 'Initial Assessment', description: 'We inspect your ductwork and test for leaks' },
      { title: 'Duct Cleaning', description: 'We thoroughly clean all accessible ductwork' },
      { title: 'AeroSeal Process', description: 'We seal your ducts from the inside using AeroSeal technology' },
      { title: 'Verification Testing', description: 'We test again to show you the improvement' },
      { title: 'Results Report', description: 'You receive a detailed report showing before and after results' }
    ],
    'Concrete Coatings': [
      { title: 'Free Consultation', description: 'We assess your concrete and discuss options' },
      { title: 'Surface Preparation', description: 'We properly prepare the concrete surface' },
      { title: 'Coating Application', description: 'We apply your chosen coating system' },
      { title: 'Curing Process', description: 'We allow proper curing time for maximum durability' },
      { title: 'Final Inspection', description: 'We inspect the finished floor and provide care instructions' }
    ],
    'Smart Home Automation': [
      { title: 'Consultation', description: 'We discuss your needs and design a custom system' },
      { title: 'System Design', description: 'We create a detailed plan for your smart home' },
      { title: 'Professional Installation', description: 'Our certified technicians install all components' },
      { title: 'Programming & Setup', description: 'We program and configure your entire system' },
      { title: 'Training & Support', description: 'We train you on using your new smart home system' }
    ],
    'Security Systems': [
      { title: 'Security Assessment', description: 'We evaluate your home\'s security needs' },
      { title: 'System Design', description: 'We design a custom security solution for your home' },
      { title: 'Professional Installation', description: 'Our technicians install all security components' },
      { title: 'System Testing', description: 'We test every component to ensure proper operation' },
      { title: 'Monitoring Setup', description: 'We activate professional monitoring and train you on the system' }
    ]
  };

  return processes[service] || [
    { title: 'Consultation', description: 'We discuss your needs and provide recommendations' },
    { title: 'Estimate', description: 'We provide a detailed estimate for your project' },
    { title: 'Installation', description: 'Our professional team completes the installation' },
    { title: 'Testing', description: 'We test everything to ensure proper operation' },
    { title: 'Follow-up', description: 'We provide ongoing support and service' }
  ];
}

// Service FAQ
function getServiceFAQ(service) {
  const faqs = {
    'FREE Radon Testing': [
      { question: 'How long does radon testing take?', answer: 'Short-term tests take 2-7 days, while long-term tests take 90 days or more. We typically use short-term tests for quick results.' },
      { question: 'Do I need to do anything during testing?', answer: 'Just keep windows and doors closed as much as possible and don\'t move the testing devices. Otherwise, live normally!' },
      { question: 'What if my radon levels are high?', answer: 'Don\'t panic! High radon levels can be easily fixed with a mitigation system. We\'ll explain your options and provide a free estimate.' },
      { question: 'How accurate are radon tests?', answer: 'Our EPA-approved testing devices are very accurate. We use professional-grade equipment for reliable results.' }
    ],
    'Radon Mitigation': [
      { question: 'How long does installation take?', answer: 'Most radon mitigation systems are installed in one day. Complex homes may take two days.' },
      { question: 'Will the system be noisy?', answer: 'No! We use premium fans that are very quiet. Most people can\'t hear them running.' },
      { question: 'How much does it cost to run?', answer: 'Radon fans use about as much electricity as a 60-watt light bulb - usually $3-7 per month.' },
      { question: 'Do I need to maintain the system?', answer: 'Very little maintenance is needed. We recommend annual testing and occasional fan replacement every 10-15 years.' }
    ],
    'Duct Cleaning & AeroSeal': [
      { question: 'How often should ducts be cleaned?', answer: 'Most homes benefit from duct cleaning every 3-5 years, or when you notice excessive dust or poor air quality.' },
      { question: 'Is AeroSeal safe?', answer: 'Yes! AeroSeal uses a non-toxic, water-based formula that\'s safe for your family and pets.' },
      { question: 'How much can I save with AeroSeal?', answer: 'Most homeowners save 20-30% on their energy bills after duct sealing.' },
      { question: 'Can you seal all types of ducts?', answer: 'AeroSeal works on most residential ductwork, including metal, flex, and duct board systems.' }
    ],
    'Concrete Coatings': [
      { question: 'How long do concrete coatings last?', answer: 'Our premium coatings typically last 15-20 years with proper care, much longer than regular epoxy.' },
      { question: 'Can I drive on coated garage floors?', answer: 'Absolutely! Our coatings are designed to handle vehicle traffic and are very durable.' },
      { question: 'What if my concrete is cracked?', answer: 'We can repair minor cracks before coating. Severely damaged concrete may need additional preparation.' },
      { question: 'How long before I can use the floor?', answer: 'You can walk on it in 24 hours and drive on it in 72 hours, depending on the coating system used.' }
    ],
    'Smart Home Automation': [
      { question: 'Is smart home automation reliable?', answer: 'Yes! Control4 systems are designed for reliability and work even if your internet goes down.' },
      { question: 'Can I add to the system later?', answer: 'Absolutely! Smart home systems are designed to grow with your needs.' },
      { question: 'What if I\'m not tech-savvy?', answer: 'No problem! We design systems to be simple to use. If you can use a smartphone, you can use a smart home.' },
      { question: 'Will it work with my existing devices?', answer: 'Control4 integrates with thousands of devices and brands, so most of your existing equipment will work.' }
    ],
    'Security Systems': [
      { question: 'What happens if my alarm goes off?', answer: 'Our monitoring center immediately receives the signal and follows your emergency contact procedures.' },
      { question: 'Can I control the system remotely?', answer: 'Yes! You can arm/disarm, view cameras, and control locks from anywhere using your smartphone.' },
      { question: 'What if my power goes out?', answer: 'Security systems have backup batteries that keep them running for hours during power outages.' },
      { question: 'Do pets trigger false alarms?', answer: 'Modern motion detectors are pet-immune and won\'t trigger from pets under 80 pounds when properly installed.' }
    ]
  };

  return faqs[service] || [
    { question: 'How long does installation take?', answer: 'Installation time varies by project, but most are completed in one day.' },
    { question: 'Do you provide warranties?', answer: 'Yes, we provide comprehensive warranties on all our work and materials.' },
    { question: 'Are you licensed and insured?', answer: 'Yes, we are fully licensed, bonded, and insured for your protection.' },
    { question: 'Do you offer financing?', answer: 'Yes, we offer flexible financing options including 0% interest plans.' }
  ];
}

// Organization Page Component for Closet Concepts
function OrganizationPage({ organizationType, brand, onGetFreeEstimate }) {
  const type = organizationType.replace('organization-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <div className="organization-page-powerhouse">
      <div className="container">
        <section className="organization-hero-powerhouse">
          <div className="organization-hero-image-powerhouse">
            <img src={serviceImages[type] || '/closets-luxury-hero.jpg'} alt={type} />
          </div>
          <div className="organization-hero-content-powerhouse">
            <h1 className="organization-title-powerhouse">{type}</h1>
            <p className="organization-subtitle-powerhouse">Transform your space with custom {type.toLowerCase()} solutions.</p>
            <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
              Get Free Design Consultation
            </button>
          </div>
        </section>

        <section className="organization-content-powerhouse">
          <div className="container">
            {getOrganizationContent(type)}
          </div>
        </section>
      </div>
    </div>
  );
}

// Organization content for different types
function getOrganizationContent(type) {
  const content = {
    'Reach-in Closets': (
      <div className="organization-comprehensive-content">
        <h2>Transform Your Reach-in Closet</h2>
        <p>Reach-in closets are the most common type of closet, but that doesn't mean they have to be boring or inefficient! With smart design and custom organization systems, even a small reach-in closet can hold twice as much and look amazing.</p>
        
        <h3>What Makes a Great Reach-in Closet?</h3>
        <ul>
          <li><strong>Double Hanging Space:</strong> Use upper and lower rods to double your hanging capacity</li>
          <li><strong>Adjustable Shelving:</strong> Shelves that move as your needs change</li>
          <li><strong>Drawer Systems:</strong> Built-in drawers for folded items and accessories</li>
          <li><strong>Shoe Storage:</strong> Dedicated space to keep shoes organized and accessible</li>
        </ul>
        
        <h3>Common Reach-in Closet Problems We Solve:</h3>
        <ul>
          <li>Wasted space above and below hanging clothes</li>
          <li>Clothes falling off wire shelving</li>
          <li>No place for shoes, belts, or accessories</li>
          <li>Difficulty finding what you need</li>
        </ul>
      </div>
    ),
    'Walk-in Closets': (
      <div className="organization-comprehensive-content">
        <h2>Create Your Dream Walk-in Closet</h2>
        <p>A walk-in closet is like having your own personal boutique! It's a space where you can see all your clothes, shoes, and accessories at once, making getting dressed a pleasure instead of a chore.</p>
        
        <h3>Walk-in Closet Design Elements:</h3>
        <ul>
          <li><strong>Island or Peninsula:</strong> Central storage with drawers and display space</li>
          <li><strong>Full-Length Mirrors:</strong> See your complete outfit before you leave</li>
          <li><strong>Jewelry Storage:</strong> Specialized drawers with dividers for jewelry</li>
          <li><strong>Lighting Design:</strong> LED lighting to see colors accurately</li>
          <li><strong>Seating Area:</strong> A place to sit while putting on shoes</li>
        </ul>
        
        <h3>Luxury Features We Can Add:</h3>
        <ul>
          <li>Pull-out valet rods for outfit planning</li>
          <li>Tie and belt racks that slide out</li>
          <li>Glass-front drawers to see contents</li>
          <li>Cedar-lined sections for delicate items</li>
        </ul>
      </div>
    ),
    'Garage Organization': (
      <div className="organization-comprehensive-content">
        <h2>Transform Your Garage into Organized Storage</h2>
        <p>Your garage doesn't have to be a place where things go to get lost! With proper organization systems, your garage can store everything you need while still having room for your cars.</p>
        
        <h3>Garage Organization Solutions:</h3>
        <ul>
          <li><strong>Wall Storage Systems:</strong> Get everything off the floor and onto the walls</li>
          <li><strong>Overhead Storage:</strong> Use ceiling space for seasonal items</li>
          <li><strong>Tool Organization:</strong> Dedicated spaces for all your tools</li>
          <li><strong>Sports Equipment Storage:</strong> Racks for bikes, golf clubs, and sports gear</li>
          <li><strong>Workbench Areas:</strong> Organized workspace for projects</li>
        </ul>
        
        <h3>What We Can Organize in Your Garage:</h3>
        <ul>
          <li>Holiday decorations and seasonal items</li>
          <li>Lawn and garden equipment</li>
          <li>Tools and hardware</li>
          <li>Sports and recreation equipment</li>
          <li>Automotive supplies</li>
          <li>Emergency supplies</li>
        </ul>
      </div>
    ),
    'Pantry Organization': (
      <div className="organization-comprehensive-content">
        <h2>Create an Organized Kitchen Pantry</h2>
        <p>A well-organized pantry is like having a mini grocery store in your home! You'll always know what you have, what you need, and where to find everything.</p>
        
        <h3>Pantry Organization Features:</h3>
        <ul>
          <li><strong>Adjustable Shelving:</strong> Shelves that adjust for different sized items</li>
          <li><strong>Pull-out Drawers:</strong> Easy access to items in the back</li>
          <li><strong>Door Storage:</strong> Use the back of the door for spices and small items</li>
          <li><strong>Clear Containers:</strong> See what you have at a glance</li>
          <li><strong>Labeling Systems:</strong> Everything has its place</li>
        </ul>
        
        <h3>Pantry Organization Zones:</h3>
        <ul>
          <li><strong>Baking Zone:</strong> All baking supplies in one area</li>
          <li><strong>Snack Zone:</strong> Easy access for kids and quick snacks</li>
          <li><strong>Canned Goods:</strong> Organized by type with easy visibility</li>
          <li><strong>Cleaning Supplies:</strong> Safe storage away from food</li>
        </ul>
      </div>
    )
  };

  return content[type] || (
    <div className="organization-comprehensive-content">
      <h2>Professional {type}</h2>
      <p>Transform your space with custom {type.toLowerCase()} solutions designed for your specific needs.</p>
    </div>
  );
}

// Comprehensive Radon Education Page
function RadonEducationPage({ brand, onGetFreeEstimate }) {
  return (
    <div className="radon-education-page-powerhouse">
      <div className="container">
        {/* Hero Section */}
        <section className="education-hero-powerhouse">
          <div className="education-hero-content-powerhouse">
            <h1 className="education-title-powerhouse">Complete Radon Education Center</h1>
            <p className="education-subtitle-powerhouse">Everything you need to know about radon gas, testing, and mitigation</p>
            <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
              Get Free Radon Test
            </button>
          </div>
        </section>

        {/* What is Radon Section */}
        <section className="education-section-powerhouse">
          <div className="comprehensive-content">
            <h2>What Is Radon?</h2>
            <p>Radon is a naturally occurring radioactive gas that forms when uranium breaks down in soil, rock, and water. It's invisible, odorless, and tasteless, which means the only way to detect it is through testing. According to the <strong><a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA</a></strong>, radon is the <strong>second leading cause of lung cancer in the United States</strong>, responsible for over 20,000 deaths each year.</p>

            <h3>Why Is Radon Dangerous?</h3>
            <p>Radon gas seeps into homes through foundation cracks, sump pumps, construction joints, and other small openings. Once inside, it can accumulate to unsafe levels—especially in basements and lower levels. Long-term exposure to elevated radon levels increases the risk of lung cancer, even for non-smokers.</p>
            <p>Learn more from the <strong><a href="https://www.cdc.gov/radon/" target="_blank" rel="noopener noreferrer">CDC</a></strong>.</p>

            <h3>How Does Radon Enter Your Home?</h3>
            <p><strong>Common Entry Points:</strong></p>
            <ul>
              <li>Cracks in concrete floors and walls</li>
              <li>Gaps in suspended floors</li>
              <li>Crawlspaces</li>
              <li>Openings around pipes and utility lines</li>
              <li>Floor drains and sump pumps</li>
            </ul>

            <h3>What Are Safe Radon Levels?</h3>
            <ul>
              <li><strong>Measured in picocuries per liter (pCi/L)</strong></li>
              <li>The EPA recommends <strong>mitigation at levels of 4.0 pCi/L or higher</strong></li>
              <li>Even levels between <strong>2.0 and 4.0 pCi/L</strong> can pose a risk and may be considered for reduction</li>
            </ul>

            <h3>Radon Testing: Your First Step</h3>
            <p>We offer <strong>FREE radon testing</strong> with fast results and expert follow-up.</p>
            <p>Testing is:</p>
            <ul>
              <li>Quick</li>
              <li>Non-invasive</li>
              <li>Essential for all homeowners—whether buying, selling, or simply ensuring peace of mind</li>
            </ul>

            <h3>What If You Have High Radon Levels?</h3>
            <p><strong>Don't panic—radon mitigation is highly effective.</strong> Our team uses proven, code-compliant systems that lower radon levels quickly and permanently.</p>

            <h3>Radon Mitigation System Options</h3>
            <p>Depending on your home's construction and radon levels, we may recommend:</p>

            <h4>1. Sub-Slab Depressurization (Most Common)</h4>
            <ul>
              <li>Ideal for homes with concrete slab foundations.</li>
              <li>A PVC pipe is inserted through the basement floor into the soil beneath.</li>
              <li>A fan draws radon gas up through the pipe and safely vents it above the roofline.</li>
              <li>Effective in reducing radon from beneath the entire foundation.</li>
            </ul>

            <h4>2. Sump Pit Depressurization</h4>
            <ul>
              <li>Utilizes the existing sump pit as the suction point.</li>
              <li>The pit is sealed with an airtight lid and connected to a vent pipe.</li>
              <li>Cost-effective and efficient if the home already has a sump pump.</li>
            </ul>

            <h4>3. Drain Tile Depressurization</h4>
            <ul>
              <li>Works with homes that have drain tile systems installed under the slab.</li>
              <li>Radon is collected and vented via the same tile system, reducing the need for drilling.</li>
            </ul>

            <h4>4. Crawl Space Encapsulation</h4>
            <ul>
              <li>For homes with crawl spaces instead of basements.</li>
              <li>The crawl space is sealed with a vapor barrier and ventilated.</li>
              <li>Prevents radon from entering the living space above.</li>
            </ul>

            <h3>Professional Fans We Use</h3>
            <p>We only install premium fans from trusted manufacturers:</p>
            <ul>
              <li><strong>Fantech</strong> - Industry-leading radon fans known for reliability and quiet operation</li>
              <li><strong>RadonAway</strong> - Specialized radon mitigation fans designed for maximum efficiency</li>
            </ul>
            <p>These fans are specifically designed for radon systems and operate quietly 24/7 to keep your home safe.</p>

            <div className="important-links">
              <h3>Additional Resources:</h3>
              <ul>
                <li><a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer">EPA Radon Information</a></li>
                <li><a href="https://www.cdc.gov/radon/" target="_blank" rel="noopener noreferrer">CDC Radon Health Information</a></li>
                <li><a href="https://www.lung.org/clean-air/at-home/indoor-air-pollutants/radon" target="_blank" rel="noopener noreferrer">American Lung Association</a></li>
                <li><a href="https://www.aarst.org/" target="_blank" rel="noopener noreferrer">American Association of Radon Scientists</a></li>
                <li><a href="https://sosradon.org/" target="_blank" rel="noopener noreferrer">Save Our Sons from Radon</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="education-cta-powerhouse">
          <div className="container">
            <div className="cta-content-centered-powerhouse">
              <h2>Ready to Test Your Home for Radon?</h2>
              <p>Don't wait - protect your family with our free radon testing service.</p>
              <div className="cta-buttons-powerhouse">
                <button className="cta-button-powerhouse primary large" onClick={onGetFreeEstimate}>
                  Schedule Free Test
                </button>
                <span className="phone-large-powerhouse">{brand.phone}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


// Salesforce Contact Form Component
function ContactFormPage({ brand, onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    serviceInterest: '',
    leadSource: 'Internet' // Hidden field for Salesforce
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Exact Salesforce service options
  const salesforceServices = [
    'Radon Testing',
    'Radon Mitigation',
    'Custom Closets',
    'Window Blinds',
    'Smart Home Technology (AIH)',
    'Floor Coatings (EPOXY)',
    'Home Security',
    'Aeroseal',
    'Duct Cleaning',
    'Multiple (Concierge Services)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would integrate with Salesforce API
      // For now, we'll simulate the submission
      console.log('Salesforce Form Data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Thank you! Your information has been submitted. We\'ll contact you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        serviceInterest: '',
        leadSource: 'Internet'
      });
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please call us directly at ' + brand.phone);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-page-powerhouse">
      <div className="container">
        <button 
          onClick={onBack}
          className="back-button-powerhouse"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-light)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--border-radius)',
            marginBottom: '2rem',
            cursor: 'pointer'
          }}
        >
          ← Back
        </button>

        <div className="contact-form-container-powerhouse">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
            Get Your Free Estimate
          </h1>
          
          {submitMessage && (
            <div style={{
              background: submitMessage.includes('error') ? '#fee2e2' : '#d1fae5',
              color: submitMessage.includes('error') ? '#dc2626' : '#065f46',
              padding: '1rem',
              borderRadius: 'var(--border-radius)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form-powerhouse">
            <div className="form-group-powerhouse">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group-powerhouse">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group-powerhouse">
              <label htmlFor="address">Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address, City, State, ZIP"
                required
              />
            </div>

            <div className="form-group-powerhouse">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(262) 555-0123"
                required
              />
            </div>

            <div className="form-group-powerhouse">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group-powerhouse">
              <label htmlFor="serviceInterest">Service of Interest *</label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleInputChange}
                required
              >
                <option value="">Please select a service</option>
                {salesforceServices.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-buttons-powerhouse">
              <button 
                type="submit" 
                className="cta-button-powerhouse primary large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            background: 'var(--background-light)', 
            borderRadius: 'var(--border-radius-large)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Or Contact Us Directly
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div>
                <strong>Phone:</strong><br />
                <span style={{ fontSize: '1.2rem', color: 'var(--brand-primary)' }}>
                  {brand.phone}
                </span>
              </div>
              <div>
                <strong>Hours:</strong><br />
                Monday - Friday: 8 AM - 6 PM<br />
                Saturday: 9 AM - 4 PM
              </div>
              <div>
                <strong>Address:</strong><br />
                {brand.address}
              </div>
            </div>

            {/* Google Maps Integration */}
            <div style={{ 
              height: '300px', 
              borderRadius: 'var(--border-radius)', 
              overflow: 'hidden',
              border: '1px solid var(--border-light)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8!2d-88.1065!3d43.0642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAzJzUxLjEiTiA4OMKwMDYnMjMuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
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
  );
}

// Enhanced State Page Component with Silhouettes
function StatePage({ state, brand, onBack, onGetFreeEstimate }) {
  const [expandedZipCodes, setExpandedZipCodes] = useState(false);

  // Complete area codes with overlay codes
  const stateAreaCodes = {
    'Wisconsin': ['262', '414', '534', '608', '715', '920', '274'],
    'Illinois': ['224', '312', '331', '464', '630', '708', '773', '779', '815', '847', '872'],
    'Minnesota': ['218', '320', '507', '612', '651', '763', '924', '952'],
    'Colorado': ['303', '719', '720', '970', '983']
  };

  // Complete zip codes including missing ones
  const stateZipCodes = {
    'Wisconsin': [
      '53005', '53012', '53018', '53022', '53029', '53033', '53045', '53051', 
      '53056', '53066', '53072', '53089', '53090', '53092', '53095', '53097', 
      '53108', '53122', '53129', '53130', '53132', '53140', '53142', '53146', 
      '53149', '53150', '53151', '53154', '53158', '53168', '53172', '53186', 
      '53188', '53189', '53190', '53201', '53202', '53203', '53204', '53205', 
      '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', 
      '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', 
      '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', 
      '53234', '53235', '53237', '53244', '53259', '53274', '53278', '53295'
    ],
    'Illinois': [
      '60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011',
      '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019',
      '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031',
      '60033', '60034', '60035', '60037', '60038', '60039', '60040', '60041',
      '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60050'
    ],
    'Minnesota': [
      '55001', '55003', '55009', '55011', '55014', '55016', '55018', '55019',
      '55020', '55021', '55024', '55025', '55027', '55031', '55033', '55038',
      '55040', '55041', '55042', '55043', '55044', '55045', '55046', '55047',
      '55055', '55056', '55057', '55060', '55066', '55068', '55069', '55070',
      '55071', '55072', '55073', '55074', '55075', '55076', '55077', '55078'
    ],
    'Colorado': [
      '80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011',
      '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019',
      '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027',
      '80030', '80031', '80033', '80034', '80035', '80036', '80037', '80038',
      '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108'
    ]
  };

  // Services by state
  const stateServices = {
    'Wisconsin': ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning & AeroSeal', 'Concrete Coatings', 'Smart Home Technology', 'Security Systems', 'Custom Closets'],
    'Illinois': ['Duct Cleaning & AeroSeal', 'Concrete Coatings'],
    'Minnesota': ['Radon Testing', 'Radon Mitigation'],
    'Colorado': ['Radon Testing', 'Radon Mitigation']
  };

  const areaCodes = stateAreaCodes[state] || [];
  const zipCodes = stateZipCodes[state] || [];
  const services = stateServices[state] || [];
  
  const visibleZipCodes = expandedZipCodes ? zipCodes : zipCodes.slice(0, 12);
  const remainingCount = zipCodes.length - 12;

  return (
    <div className="state-page-powerhouse" data-brand={brand.name.toLowerCase()}>
      <div className="container">
        {/* State Silhouette Background */}
        <div 
          className="state-silhouette-background"
          style={{
            backgroundImage: `url(/state-silhouette-${state.toLowerCase().replace(' ', '-')}.svg)`,
          }}
        ></div>

        <div className="state-content-powerhouse">
          <button 
            onClick={onBack}
            className="back-button-powerhouse"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-light)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--border-radius)',
              marginBottom: '2rem',
              cursor: 'pointer'
            }}
          >
            ← Back
          </button>

          <div className="state-header-powerhouse">
            <h1 className="state-title-powerhouse">
              {brand.name} Services in {state}
            </h1>
            <p className="state-subtitle-powerhouse">
              We proudly serve the following areas and zip codes in {state.toLowerCase()}:
            </p>
          </div>

          {/* Services Available */}
          <section className="state-services-powerhouse" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Services Available in {state}
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem' 
            }}>
              {services.map(service => (
                <div 
                  key={service}
                  style={{
                    background: 'var(--background-white)',
                    padding: '1.5rem',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-light)'
                  }}
                >
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {service}
                  </h3>
                  <button 
                    onClick={onGetFreeEstimate}
                    className="learn-more-button-powerhouse"
                    style={{ marginTop: '1rem' }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Area Codes */}
          <section className="area-codes-section-powerhouse">
            <h2>Area Codes Served:</h2>
            <div className="area-codes-grid-powerhouse">
              {areaCodes.map(code => (
                <div key={code} className="area-code-badge-powerhouse">
                  {code}
                </div>
              ))}
            </div>
          </section>

          {/* Zip Codes */}
          <section className="zip-codes-section-powerhouse">
            <h2>Zip Codes Served:</h2>
            <div className="zip-codes-grid-powerhouse">
              {visibleZipCodes.map(code => (
                <div key={code} className="zip-code-badge-powerhouse">
                  {code}
                </div>
              ))}
            </div>
            
            {!expandedZipCodes && remainingCount > 0 && (
              <div className="zip-codes-expandable-powerhouse">
                <button 
                  onClick={() => setExpandedZipCodes(true)}
                  className="expand-button-powerhouse"
                >
                  +{remainingCount} more zip codes
                </button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="state-cta-powerhouse" style={{
            background: 'var(--brand-primary)',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: 'var(--border-radius-large)',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Ready to Get Started in {state}?
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              Contact us today for your free estimate and consultation.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={onGetFreeEstimate}
                className="cta-button-powerhouse secondary large"
              >
                Get Free Estimate
              </button>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'var(--brand-accent)',
                display: 'flex',
                alignItems: 'center'
              }}>
                {brand.phone}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Enhanced Financing Page
function FinancingPage({ brand, onBack }) {
  return (
    <div className="financing-page-powerhouse">
      <div className="container">
        <button 
          onClick={onBack}
          className="back-button-powerhouse"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-light)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--border-radius)',
            marginBottom: '2rem',
            cursor: 'pointer'
          }}
        >
          ← Back
        </button>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            textAlign: 'center', 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>
            Flexible Financing Options
          </h1>
          
          <div style={{
            background: 'var(--brand-primary)',
            color: 'white',
            padding: '2rem',
            borderRadius: 'var(--border-radius-large)',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
              As Low as 0% Financing Available
            </h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Make your home improvement dreams affordable with our flexible payment plans
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'var(--background-white)',
              padding: '2rem',
              borderRadius: 'var(--border-radius-large)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--brand-primary)' }}>
                0% Interest Plans
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 6 months same as cash</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 12 months same as cash</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ 18 months same as cash</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Quick approval process</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--background-white)',
              padding: '2rem',
              borderRadius: 'var(--border-radius-large)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--brand-primary)' }}>
                Extended Terms
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Up to 60 months</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Low monthly payments</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Competitive rates</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ No prepayment penalties</li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--background-light)',
            padding: '2rem',
            borderRadius: 'var(--border-radius-large)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Powered by Synchrony
            </h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              We partner with Synchrony to offer you the best financing options available.
            </p>
            <a 
              href="https://www.synchrony.com/mysynchrony/home-improvement-financing/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-powerhouse primary"
              style={{ textDecoration: 'none' }}
            >
              Learn More About Synchrony
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

