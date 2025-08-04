import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [showZipCodes, setShowZipCodes] = useState({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [googleReviews.length]);

  const getCurrentReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentReviewIndex + i) % googleReviews.length;
      reviews.push(googleReviews[index]);
    }
    return reviews;
  };

  const brandConfig = {
    lifetime: {
      name: 'Lifetime Home Services',
      logo: 'LifetimeHomeServicesLogo.png',
      heroImage: 'lifetime-hero-house.jpg',
      tagline: 'Trusted Solutions. Lifetime Results.',
      services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings']
    },
    aih: {
      name: 'America In-Home',
      logo: 'AmericaIn-HomeLogo.jpg',
      heroImage: 'america-smart-home-hero.jpg',
      heroVideo: 'https://www.youtube.com/embed/NXCMKyYHl-o?autoplay=1&mute=1&loop=1&playlist=NXCMKyYHl-o&controls=0&showinfo=0&rel=0&modestbranding=1',
      tagline: 'Smart Home Technology. Professional Installation. Lifetime Support.',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration']
    },
    closets: {
      name: 'Closet Concepts',
      logo: 'ClosetConcepts_Logo.jpg',
      heroImage: 'closets-luxury-hero.jpg',
      heroVideo: 'https://www.youtube.com/embed/F-cmkRASFhQ?autoplay=1&mute=1&loop=1&playlist=F-cmkRASFhQ&controls=0&showinfo=0&rel=0&modestbranding=1',
      tagline: 'Custom Storage Solutions. Premium Quality. Lifetime Organization.',
      services: ['Custom Closets', 'Garage Storage', 'Home Office Organization', 'Pantry Systems']
    }
  };

  const stateServices = {
    wisconsin: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings', 'Custom Closets', 'Smart Home Automation', 'Security Systems'],
    illinois: ['Radon Mitigation', 'Duct Cleaning/AeroSeal'],
    minnesota: ['Radon Testing', 'Radon Mitigation'],
    colorado: ['Radon Testing', 'Radon Mitigation']
  };

  const stateZipCodes = {
    wisconsin: {
      preview: ['53005', '53045', '53072', '53090', '53095', '53151', '53186', '53188'],
      full: ['53005', '53045', '53072', '53090', '53095', '53151', '53186', '53188', '53189', '53190', '53191', '53192', '53193', '53194', '53195', '53196', '53197', '53198', '53199', '53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53263', '53274', '53278', '53288', '53290', '53293', '53295']
    },
    illinois: {
      preview: ['60001', '60002', '60004', '60005', '60006', '60007', '60008', '60009'],
      full: ['60001', '60002', '60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039', '60040', '60041', '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60050', '60051', '60053', '60055', '60056', '60060', '60061', '60062', '60064', '60065', '60067', '60068', '60069', '60070', '60071', '60072', '60073', '60074', '60075', '60076', '60077', '60078', '60081', '60082', '60083', '60084', '60085', '60086', '60087', '60088', '60089', '60090', '60091', '60092', '60093', '60094', '60095', '60096', '60097', '60098', '60099']
    },
    minnesota: {
      preview: ['55001', '55002', '55003', '55009', '55011', '55014', '55016', '55017'],
      full: ['55001', '55002', '55003', '55009', '55011', '55014', '55016', '55017', '55018', '55019', '55020', '55021', '55024', '55025', '55027', '55031', '55033', '55038', '55041', '55042', '55043', '55044', '55045', '55046', '55047', '55051', '55052', '55053', '55054', '55055', '55056', '55057', '55060', '55063', '55066', '55068', '55069', '55070', '55071', '55072', '55073', '55075', '55076', '55077', '55079', '55080', '55082', '55083', '55084', '55085', '55090', '55092', '55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55109', '55110', '55111', '55112', '55113', '55114', '55115', '55116', '55117', '55118', '55119', '55120', '55121', '55122', '55123', '55124', '55125', '55126', '55127', '55128', '55129', '55130', '55133', '55144', '55150', '55155', '55161', '55164', '55165', '55166', '55168', '55169', '55170', '55171', '55172', '55175', '55177', '55182', '55187', '55188', '55191', '55199']
    },
    colorado: {
      preview: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011'],
      full: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027', '80030', '80031', '80033', '80034', '80035', '80036', '80037', '80038', '80040', '80041', '80045', '80046', '80047', '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108', '80109', '80110', '80111', '80112', '80113', '80116', '80117', '80118', '80120', '80121', '80122', '80123', '80124', '80125', '80126', '80127', '80128', '80129', '80130', '80131', '80132', '80133', '80134', '80135', '80136', '80137', '80138', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212', '80214', '80215', '80216', '80218', '80219', '80220', '80221', '80222', '80223', '80224', '80225', '80226', '80227', '80228', '80229', '80230', '80231', '80232', '80233', '80234', '80235', '80236', '80237', '80238', '80239', '80246', '80247', '80249', '80264', '80290', '80293', '80294']
    }
  };

  const areaCodesByState = {
    wisconsin: ['262', '414', '608', '715', '920'],
    illinois: ['224', '312', '331', '630', '708', '773', '815', '847', '872'],
    minnesota: ['218', '320', '507', '612', '651', '763', '952'],
    colorado: ['303', '719', '720', '970']
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowAreasDropdown(false);
    window.scrollTo(0, 0);
  };

  const navigateToBrand = (brand) => {
    setCurrentBrand(brand);
    setCurrentPage('home');
    setShowServicesDropdown(false);
    setShowAreasDropdown(false);
    window.scrollTo(0, 0);
  };

  const toggleZipCodes = (state) => {
    setShowZipCodes(prev => ({
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
            onClick={() => navigateToBrand(currentBrand)}
          />
        </div>
        
        <nav className="main-nav">
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
                      <button className="dropdown-item" onClick={() => navigateToPage('duct-cleaning')}>Duct Cleaning/AeroSeal</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('floor-coatings')}>Concrete Floor Coatings</button>
                    </>
                  )}
                  {currentBrand === 'aih' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('smart-home')}>Smart Home Automation</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('security-systems')}>Security Systems</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('control4')}>Control4 Integration</button>
                    </>
                  )}
                  {currentBrand === 'closets' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('custom-closets')}>Custom Closets</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('garage-storage')}>Garage Storage</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('home-office')}>Home Office Organization</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('pantry-systems')}>Pantry Systems</button>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowAreasDropdown(!showAreasDropdown)}
              >
                Service Areas ▼
              </button>
              {showAreasDropdown && (
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
          <div className="phone">(262) 955-5701</div>
        </div>
      </div>
    </header>
  );

  const renderHeroSection = () => {
    // Video hero for America In-Home
    if (currentBrand === 'aih' && currentPage === 'home') {
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              src={brandConfig[currentBrand].heroVideo}
              title="America In-Home Smart Home Solutions"
              className="hero-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="hero-content-overlay">
              <div className="hero-text-content">
                <h1 className="hero-company-name">{brandConfig[currentBrand].name}</h1>
                <h2 className="hero-tagline-special">{brandConfig[currentBrand].tagline}</h2>
                <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
                <div className="hero-cta-buttons">
                  <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  <button className="cta-button secondary large" onClick={() => navigateToPage('smart-home')}>
                    Learn About Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Video hero for Closet Concepts
    if (currentBrand === 'closets' && currentPage === 'home') {
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              src={brandConfig[currentBrand].heroVideo}
              title="Closet Concepts Manufacturing"
              className="hero-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="hero-content-overlay">
              <div className="hero-text-content">
                <h1 className="hero-company-name">{brandConfig[currentBrand].name}</h1>
                <h2 className="hero-tagline-special">{brandConfig[currentBrand].tagline}</h2>
                <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
                <div className="hero-cta-buttons">
                  <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  <button className="cta-button secondary large" onClick={() => navigateToPage('custom-closets')}>
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Standard hero for Lifetime Home Services
    return (
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
            <h1 className="hero-company-name">{brandConfig[currentBrand].name}</h1>
            <h2 className="hero-tagline-special">{brandConfig[currentBrand].tagline}</h2>
            <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
            <div className="hero-cta-buttons">
              <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <button className="cta-button secondary large" onClick={() => navigateToPage('financing')}>
                As low as 0% financing
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderServicesGrid = () => (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {brandConfig[currentBrand].services.map((service, index) => (
            <div key={index} className="service-card">
              <img 
                src={`${service.replace(/[^a-zA-Z0-9]/g, '')}.jpg`} 
                alt={service}
                className="service-image"
              />
              <h3 className="service-title">{service}</h3>
              <p className="service-description">
                {service === 'Radon Testing' && 'Professional radon testing with EPA-approved methods and accurate results.'}
                {service === 'Radon Mitigation' && 'Expert radon mitigation systems to protect your family\'s health.'}
                {service === 'Duct Cleaning/AeroSeal' && 'Professional duct cleaning and AeroSeal duct sealing services.'}
                {service === 'Concrete Floor Coatings' && 'Durable Torginol floor coatings with lifetime warranty.'}
                {service === 'Smart Home Automation' && 'Complete Control4 home automation systems for modern living.'}
                {service === 'Security Systems' && 'Professional security system installation and monitoring.'}
                {service === 'Control4 Integration' && 'Advanced Control4 integration for seamless home automation.'}
                {service === 'Custom Closets' && 'Custom closet design and installation for maximum organization.'}
                {service === 'Garage Storage' && 'Professional garage organization and storage solutions.'}
                {service === 'Home Office Organization' && 'Custom home office solutions for productivity and style.'}
                {service === 'Pantry Systems' && 'Custom pantry organization systems for kitchen efficiency.'}
              </p>
              <button 
                className="learn-more-btn"
                onClick={() => {
                  const pageMap = {
                    'Radon Testing': 'radon-testing',
                    'Radon Mitigation': 'radon-mitigation',
                    'Duct Cleaning/AeroSeal': 'duct-cleaning',
                    'Concrete Floor Coatings': 'floor-coatings',
                    'Smart Home Automation': 'smart-home',
                    'Security Systems': 'security-systems',
                    'Control4 Integration': 'control4',
                    'Custom Closets': 'custom-closets',
                    'Garage Storage': 'garage-storage',
                    'Home Office Organization': 'home-office',
                    'Pantry Systems': 'pantry-systems'
                  };
                  navigateToPage(pageMap[service]);
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderGoogleReviews = () => (
    <section className="google-reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-grid">
          {getCurrentReviews().map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">
                {'★'.repeat(review.stars)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContactSection = () => (
    <section className="home-contact-section">
      <div className="container">
        <div className="contact-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for your free estimate and consultation</p>
          <button 
            className="cta-button primary large"
            onClick={() => navigateToPage('contact')}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );

  const renderRadonTestingPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Professional Radon Testing Services</h1>
          <p className="service-subtitle">EPA-approved testing methods with accurate, reliable results you can trust</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>What is Radon?</h2>
              <p>Radon is a colorless, odorless radioactive gas that occurs naturally when uranium in soil, rock, and water breaks down. It's the second leading cause of lung cancer in the United States, responsible for about 21,000 deaths annually according to the EPA.</p>
              
              <h3>How Radon Enters Your Home</h3>
              <p>Radon gas moves up through the ground and can enter your home through:</p>
              <ul>
                <li>Cracks in solid floors and walls</li>
                <li>Construction joints</li>
                <li>Gaps in suspended floors</li>
                <li>Gaps around service pipes</li>
                <li>Cavities inside walls</li>
                <li>The water supply</li>
              </ul>

              <h3>Why Test for Radon?</h3>
              <p>The EPA recommends testing all homes below the third floor for radon. Wisconsin has some of the highest radon levels in the nation, with 1 in 3 homes testing above the EPA action level of 4.0 pCi/L.</p>

              <h3>Our Testing Process</h3>
              <p>We use EPA-approved continuous radon monitors that provide:</p>
              <ul>
                <li>48-hour minimum testing period</li>
                <li>Real-time hourly readings</li>
                <li>Tamper-evident security features</li>
                <li>Detailed reports with recommendations</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="RadonTesting.jpg" alt="Professional Radon Testing" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>Service Highlights</h3>
                <ul>
                  <li>EPA-approved testing equipment</li>
                  <li>Certified radon professionals</li>
                  <li>48-hour minimum testing</li>
                  <li>Detailed written reports</li>
                  <li>Mitigation recommendations</li>
                  <li>Same-day scheduling available</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Get Your Home Tested Today</h3>
                <p>Protect your family's health with professional radon testing.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Schedule Testing
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>

              <div className="trusted-resources">
                <h3>Trusted Resources</h3>
                <ul>
                  <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA - A Citizen's Guide to Radon</a></li>
                  <li><a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer">EPA - Radon: Health Risks</a></li>
                  <li><a href="https://www.airthings.com/resources/what-is-radon" target="_blank" rel="noopener noreferrer">Airthings Blog - What is Radon?</a></li>
                  <li><a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer">Wisconsin DHS - Radon Program</a></li>
                  <li><a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer">RadonAway - What is Radon?</a></li>
                  <li><a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer">CDC - Radon Information Page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="radon-levels-section">
        <div className="container">
          <h2>Understanding Radon Levels</h2>
          <div className="radon-levels-grid">
            <div className="level-card safe">
              <h3>Below 2.0 pCi/L</h3>
              <p className="level-status">Low Risk</p>
              <p>Consider retesting every 2 years</p>
            </div>
            <div className="level-card moderate">
              <h3>2.0 - 4.0 pCi/L</h3>
              <p className="level-status">Moderate Risk</p>
              <p>Consider mitigation, especially if levels are rising</p>
            </div>
            <div className="level-card high">
              <h3>4.0+ pCi/L</h3>
              <p className="level-status">High Risk</p>
              <p>EPA recommends mitigation</p>
            </div>
            <div className="level-card urgent">
              <h3>20.0+ pCi/L</h3>
              <p className="level-status">Urgent</p>
              <p>Immediate mitigation recommended</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderRadonMitigationPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Professional Radon Mitigation Systems</h1>
          <p className="service-subtitle">Expert installation of radon reduction systems to protect your family's health</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Radon Mitigation Solutions</h2>
              <p>When radon levels in your home exceed 4.0 pCi/L, the EPA recommends installing a radon mitigation system. Our certified professionals design and install custom systems that effectively reduce radon levels by 90% or more.</p>
              
              <h3>How Radon Mitigation Works</h3>
              <p>Radon mitigation systems work by creating a pressure differential that prevents radon gas from entering your home. The most common and effective method is sub-slab depressurization, which draws radon from beneath your foundation and vents it safely above your roofline.</p>

              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/l4X1nNbKqNU?rel=0&modestbranding=1"
                  title="Radon Mitigation System Installation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>Our Installation Process</h3>
              <ol>
                <li><strong>Site Assessment:</strong> Evaluate your home's foundation and design the optimal system</li>
                <li><strong>System Design:</strong> Create a custom mitigation plan for maximum effectiveness</li>
                <li><strong>Professional Installation:</strong> Install the system with minimal disruption to your home</li>
                <li><strong>Post-Installation Testing:</strong> Verify system effectiveness with follow-up testing</li>
                <li><strong>Warranty & Maintenance:</strong> Provide warranty and ongoing system maintenance</li>
              </ol>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="RadonMitigation.jpg" alt="Radon Mitigation System" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>System Features</h3>
                <ul>
                  <li>90%+ radon reduction guaranteed</li>
                  <li>Quiet, energy-efficient fans</li>
                  <li>Professional-grade PVC piping</li>
                  <li>Manometer for system monitoring</li>
                  <li>Electrical safety disconnect</li>
                  <li>5-year system warranty</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Get Your Mitigation System</h3>
                <p>Protect your family with a professional radon mitigation system.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>

              <div className="festa-link">
                <h3>Learn More</h3>
                <p>Visit our partner for additional radon information:</p>
                <a href="https://www.festa.com" target="_blank" rel="noopener noreferrer" className="festa-button">
                  Visit Festa.com
                </a>
              </div>

              <div className="trusted-resources">
                <h3>Trusted Resources</h3>
                <ul>
                  <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA - A Citizen's Guide to Radon</a></li>
                  <li><a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer">EPA - Radon: Health Risks</a></li>
                  <li><a href="https://www.airthings.com/resources/what-is-radon" target="_blank" rel="noopener noreferrer">Airthings Blog - What is Radon?</a></li>
                  <li><a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer">Wisconsin DHS - Radon Program</a></li>
                  <li><a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer">RadonAway - What is Radon?</a></li>
                  <li><a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer">CDC - Radon Information Page</a></li>
                  <li><a href="https://www.youtube.com/watch?v=oSLf6kJW_CM" target="_blank" rel="noopener noreferrer">YouTube - Radon Mitigation System Animation</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mitigation-systems-section">
        <div className="container">
          <h2>Types of Mitigation Systems</h2>
          <div className="mitigation-systems-grid">
            <div className="system-card">
              <h3>Sub-Slab Depressurization</h3>
              <p>Most common and effective method for homes with basement or slab-on-grade foundations</p>
              <ul>
                <li>Suction point beneath foundation</li>
                <li>Fan system creates negative pressure</li>
                <li>Vent pipe routes radon above roofline</li>
                <li>90%+ reduction in radon levels</li>
              </ul>
            </div>
            <div className="system-card">
              <h3>Crawl Space Ventilation</h3>
              <p>Designed for homes with crawl space foundations to improve air circulation</p>
              <ul>
                <li>Passive or active ventilation</li>
                <li>Plastic sheeting vapor barrier</li>
                <li>Improved air circulation</li>
                <li>Moisture control benefits</li>
              </ul>
            </div>
            <div className="system-card">
              <h3>Block Wall Suction</h3>
              <p>Specialized system for homes with hollow concrete block foundations</p>
              <ul>
                <li>Suction applied to block wall voids</li>
                <li>Multiple suction points if needed</li>
                <li>Effective for block construction</li>
                <li>Prevents radon entry through walls</li>
              </ul>
            </div>
            <div className="system-card">
              <h3>Drain Tile Suction</h3>
              <p>Utilizes existing perimeter drain system for radon removal</p>
              <ul>
                <li>Connects to existing drain tile</li>
                <li>Cost-effective installation</li>
                <li>Utilizes existing perimeter drain system for radon removal</li>
                <li>Dual benefit for water and radon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderDuctCleaningPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Professional Duct Cleaning & AeroSeal Services</h1>
          <p className="service-subtitle">Improve your home's air quality and energy efficiency with professional duct cleaning and sealing</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Duct Cleaning & AeroSeal Duct Sealing</h2>
              <p>Your home's ductwork plays a crucial role in indoor air quality and energy efficiency. Over time, dust, debris, and contaminants can accumulate in your ducts, while leaks can waste energy and reduce comfort.</p>
              
              <h3>Professional Duct Cleaning</h3>
              <p>Our comprehensive duct cleaning service removes:</p>
              <ul>
                <li>Dust and debris accumulation</li>
                <li>Pet dander and allergens</li>
                <li>Mold and mildew (where present)</li>
                <li>Construction debris</li>
                <li>Insect and rodent droppings</li>
              </ul>

              <h3>AeroSeal Duct Sealing Technology</h3>
              <p>AeroSeal is a revolutionary duct sealing technology that seals leaks from the inside out. This patented process can seal up to 90% of duct leaks, improving energy efficiency and indoor comfort.</p>

              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/K3JAR0dCNhc?rel=0&modestbranding=1"
                  title="AeroSeal Duct Sealing Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>Benefits of Duct Cleaning & Sealing</h3>
              <ul>
                <li>Improved indoor air quality</li>
                <li>Reduced energy costs (up to 30% savings)</li>
                <li>Better HVAC system performance</li>
                <li>More consistent temperatures throughout home</li>
                <li>Reduced dust and allergens</li>
                <li>Extended HVAC equipment life</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="AeroSeal.jpg" alt="AeroSeal Duct Sealing" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>Service Features</h3>
                <ul>
                  <li>Complete duct system cleaning</li>
                  <li>AeroSeal patented technology</li>
                  <li>Before/after leak testing</li>
                  <li>Detailed performance report</li>
                  <li>10-year AeroSeal warranty</li>
                  <li>Energy efficiency improvements</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Improve Your Home's Efficiency</h3>
                <p>Get cleaner air and lower energy bills with professional duct services.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>

              <div className="aeroseal-link">
                <h3>Learn More About AeroSeal</h3>
                <p>Visit the official AeroSeal website for more information:</p>
                <a href="https://aeroseal.com/" target="_blank" rel="noopener noreferrer" className="aeroseal-button">
                  Visit AeroSeal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderFloorCoatingsPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Premium Concrete Floor Coatings</h1>
          <p className="service-subtitle">Transform your garage, basement, or commercial space with durable Torginol floor coatings</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Torginol Polyaspartic Floor Coatings</h2>
              <p>Our premium Torginol polyaspartic floor coatings provide superior durability, chemical resistance, and aesthetic appeal. Unlike traditional epoxy coatings, polyaspartic technology offers faster cure times and better performance.</p>
              
              <h3>Why Choose Polyaspartic Over Epoxy?</h3>
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Polyaspartic</th>
                      <th>Epoxy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cure Time</td>
                      <td>1 day</td>
                      <td>3-7 days</td>
                    </tr>
                    <tr>
                      <td>UV Resistance</td>
                      <td>Excellent</td>
                      <td>Poor (yellows)</td>
                    </tr>
                    <tr>
                      <td>Temperature Range</td>
                      <td>-40°F to 200°F</td>
                      <td>Limited range</td>
                    </tr>
                    <tr>
                      <td>Chemical Resistance</td>
                      <td>Superior</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>High</td>
                      <td>Brittle</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Our Installation Process</h3>
              <div className="process-timeline">
                <div className="process-step">
                  <h4>Day 1: Surface Preparation</h4>
                  <p>Diamond grinding and crack repair to ensure proper adhesion</p>
                </div>
                <div className="process-step">
                  <h4>Day 2: Base Coat Application</h4>
                  <p>Apply primer and base coat with decorative flakes if desired</p>
                </div>
                <div className="process-step">
                  <h4>Day 3: Top Coat & Completion</h4>
                  <p>Apply protective top coat and complete installation</p>
                </div>
              </div>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="ConcreteFloorCoatings.jpg" alt="Torginol Floor Coating" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>Coating Benefits</h3>
                <ul>
                  <li>Lifetime warranty available</li>
                  <li>Chemical and stain resistant</li>
                  <li>Easy to clean and maintain</li>
                  <li>Slip-resistant options</li>
                  <li>UV stable (won't yellow)</li>
                  <li>Fast 3-day installation</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Transform Your Floors</h3>
                <p>Get a beautiful, durable floor coating with lifetime warranty.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Estimate
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-section">
            <h3>View Our Work</h3>
            <div className="direct-gallery">
              <div className="gallery-item">
                <img src="Before1.jpg" alt="Garage Before Coating" />
                <p>Before: Stained concrete garage floor</p>
              </div>
              <div className="gallery-item">
                <img src="after1.jpg" alt="Garage After Coating" />
                <p>After: Beautiful polyaspartic coating</p>
              </div>
              <div className="gallery-item">
                <img src="Before2.jpg" alt="Basement Before" />
                <p>Before: Worn basement floor</p>
              </div>
              <div className="gallery-item">
                <img src="after2.jpg" alt="Basement After" />
                <p>After: Durable basement coating</p>
              </div>
              <div className="gallery-item">
                <img src="Before3.jpg" alt="Commercial Before" />
                <p>Before: Industrial concrete</p>
              </div>
              <div className="gallery-item">
                <img src="after3.jpg" alt="Commercial After" />
                <p>After: Professional finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSmartHomePage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Smart Home Automation Systems</h1>
          <p className="service-subtitle">Complete Control4 home automation for modern living and convenience</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Complete Home Automation Solutions</h2>
              <p>Transform your home into a smart, connected environment with our professional Control4 automation systems. Control lighting, climate, security, entertainment, and more from a single interface.</p>
              
              <h3>Smart Home Features</h3>
              <ul>
                <li><strong>Lighting Control:</strong> Automated lighting scenes and dimming</li>
                <li><strong>Climate Management:</strong> Smart thermostat integration</li>
                <li><strong>Entertainment Systems:</strong> Multi-room audio and video</li>
                <li><strong>Security Integration:</strong> Cameras, locks, and monitoring</li>
                <li><strong>Window Treatments:</strong> Automated blinds and shades</li>
                <li><strong>Voice Control:</strong> Amazon Alexa and Google Assistant</li>
              </ul>

              <h3>Control4 Advantages</h3>
              <p>Control4 is the industry leader in home automation, offering:</p>
              <ul>
                <li>Reliable, professional-grade equipment</li>
                <li>Seamless integration with 13,500+ devices</li>
                <li>Intuitive user interfaces</li>
                <li>Professional installation and support</li>
                <li>Scalable systems that grow with your needs</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="SmartHome.jpg" alt="Smart Home Control Panel" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>System Benefits</h3>
                <ul>
                  <li>Single app controls everything</li>
                  <li>Energy savings through automation</li>
                  <li>Enhanced security and monitoring</li>
                  <li>Increased home value</li>
                  <li>Customizable scenes and schedules</li>
                  <li>Professional installation & support</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Start Your Smart Home Journey</h3>
                <p>Discover the convenience of home automation.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Consultation
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSecuritySystemsPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Professional Security Systems</h1>
          <p className="service-subtitle">Comprehensive security solutions to protect your home and family</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Complete Security Solutions</h2>
              <p>Protect your home and family with our professional security systems. From basic alarm systems to comprehensive smart security solutions, we design and install systems tailored to your specific needs.</p>
              
              <h3>Security System Components</h3>
              <ul>
                <li><strong>Control Panels:</strong> Central hub for system management</li>
                <li><strong>Door & Window Sensors:</strong> Perimeter protection</li>
                <li><strong>Motion Detectors:</strong> Interior movement detection</li>
                <li><strong>Security Cameras:</strong> Video surveillance and recording</li>
                <li><strong>Smart Locks:</strong> Keyless entry and remote access</li>
                <li><strong>Glass Break Detectors:</strong> Window protection</li>
                <li><strong>Smoke & CO Detectors:</strong> Life safety monitoring</li>
              </ul>

              <h3>Smart Security Features</h3>
              <ul>
                <li>Mobile app control and monitoring</li>
                <li>Real-time alerts and notifications</li>
                <li>Video verification of alarms</li>
                <li>Integration with smart home systems</li>
                <li>Professional monitoring services</li>
                <li>Remote arming and disarming</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="Securityfront.jpg" alt="Security System Control Panel" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>Security Benefits</h3>
                <ul>
                  <li>24/7 professional monitoring</li>
                  <li>Deterrent to break-ins</li>
                  <li>Insurance premium discounts</li>
                  <li>Remote monitoring capabilities</li>
                  <li>Integration with smart home</li>
                  <li>Professional installation</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Secure Your Home Today</h3>
                <p>Get peace of mind with professional security.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Security Assessment
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderControl4Page = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Control4 Home Automation</h1>
          <p className="service-subtitle">Professional Control4 integration for seamless smart home experiences</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Authorized Control4 Platinum Dealer</h2>
              <p>As an authorized Control4 Platinum Dealer, we provide the highest level of expertise and service for your smart home installation. Control4 is the industry leader in home automation, trusted by homeowners worldwide.</p>
              
              <h3>Control4 Ecosystem</h3>
              <p>Control4 seamlessly integrates with over 13,500 third-party devices, including:</p>
              <ul>
                <li><strong>Entertainment:</strong> TVs, speakers, streaming devices, gaming systems</li>
                <li><strong>Lighting:</strong> Dimmers, switches, LED systems, outdoor lighting</li>
                <li><strong>Climate:</strong> Thermostats, HVAC systems, fans</li>
                <li><strong>Security:</strong> Cameras, locks, sensors, intercoms</li>
                <li><strong>Networking:</strong> WiFi, switches, access points</li>
                <li><strong>Window Treatments:</strong> Motorized blinds, shades, drapes</li>
              </ul>

              <h3>Professional Installation & Programming</h3>
              <p>Our certified technicians provide:</p>
              <ul>
                <li>Custom system design and planning</li>
                <li>Professional equipment installation</li>
                <li>Complete system programming and configuration</li>
                <li>User training and support</li>
                <li>Ongoing maintenance and updates</li>
              </ul>

              <h3>Control4 OS 3</h3>
              <p>The latest Control4 operating system offers:</p>
              <ul>
                <li>Intuitive touch screen interfaces</li>
                <li>Voice control with Amazon Alexa</li>
                <li>Mobile app for iOS and Android</li>
                <li>Personalized user experiences</li>
                <li>Advanced automation capabilities</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="C4_Dealer_Status_Badge_2025_Platinum.png" alt="Control4 Platinum Dealer Badge" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>Platinum Dealer Benefits</h3>
                <ul>
                  <li>Highest level of Control4 certification</li>
                  <li>Advanced technical training</li>
                  <li>Priority technical support</li>
                  <li>Latest product access</li>
                  <li>Comprehensive warranties</li>
                  <li>Ongoing education and updates</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Experience Control4</h3>
                <p>Discover the ultimate in home automation with Control4.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Schedule Demo
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCustomClosetsPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Custom Closet Design & Installation</h1>
          <p className="service-subtitle">Transform your storage with custom closet solutions designed for your lifestyle</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Custom Closet Solutions</h2>
              <p>Maximize your storage space and organize your life with our custom closet systems. From walk-in closets to reach-in solutions, we design and install closets that fit your space and lifestyle perfectly.</p>
              
              <h3>Design Process</h3>
              <ol>
                <li><strong>Consultation:</strong> Assess your space and storage needs</li>
                <li><strong>Design:</strong> Create 3D renderings of your custom solution</li>
                <li><strong>Material Selection:</strong> Choose finishes, hardware, and accessories</li>
                <li><strong>Manufacturing:</strong> Custom build your closet components</li>
                <li><strong>Installation:</strong> Professional installation by our team</li>
              </ol>

              <h3>Closet Features</h3>
              <ul>
                <li>Adjustable shelving systems</li>
                <li>Custom hanging rods and sections</li>
                <li>Drawer systems with soft-close hardware</li>
                <li>Shoe storage solutions</li>
                <li>Accessory organizers</li>
                <li>LED lighting systems</li>
                <li>Full-extension drawer slides</li>
                <li>Premium hardware and finishes</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="Closet5.jpg" alt="Custom Walk-in Closet" className="service-main-image" />
              </div>
              
              <div className="service-highlights">
                <h3>Closet Benefits</h3>
                <ul>
                  <li>Maximize storage capacity</li>
                  <li>Improve organization</li>
                  <li>Increase home value</li>
                  <li>Custom fit for any space</li>
                  <li>Quality materials and construction</li>
                  <li>Professional installation</li>
                </ul>
              </div>

              <div className="service-cta">
                <h3>Design Your Dream Closet</h3>
                <p>Get organized with a custom closet solution.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Design Consultation
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-section">
            <h3>View Our Work</h3>
            <div className="direct-gallery">
              <div className="gallery-item">
                <img src="Closet5.jpg" alt="Walk-in Closet with Island" />
                <p>Walk-in closet with center island</p>
              </div>
              <div className="gallery-item">
                <img src="Closet3.jpg" alt="Master Bedroom Closet" />
                <p>Master bedroom closet organization</p>
              </div>
              <div className="gallery-item">
                <img src="ReachinCloset1.jpg" alt="Reach-in Closet Solution" />
                <p>Reach-in closet maximized storage</p>
              </div>
              <div className="gallery-item">
                <img src="IMG_1518.JPG" alt="Custom Closet Design" />
                <p>Custom closet with premium finishes</p>
              </div>
              <div className="gallery-item">
                <img src="IMG_1521.JPG" alt="Closet Organization System" />
                <p>Complete organization system</p>
              </div>
              <div className="gallery-item">
                <img src="IMG_1429.JPG" alt="Luxury Closet Installation" />
                <p>Luxury closet with LED lighting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderGarageStoragePage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Garage Storage & Organization</h1>
          <p className="service-subtitle">Transform your garage into an organized, functional space</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Complete Garage Organization</h2>
              <p>Turn your cluttered garage into an organized, functional space with our custom storage solutions. From wall systems to overhead storage, we maximize every inch of your garage.</p>
              
              <h3>Garage Storage Solutions</h3>
              <ul>
                <li><strong>Wall Storage Systems:</strong> Slatwall and hook systems</li>
                <li><strong>Overhead Storage:</strong> Ceiling-mounted platforms</li>
                <li><strong>Cabinets:</strong> Lockable storage for tools and chemicals</li>
                <li><strong>Workbenches:</strong> Custom work surfaces</li>
                <li><strong>Bike Storage:</strong> Wall and ceiling bike racks</li>
                <li><strong>Sports Equipment:</strong> Specialized storage solutions</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="Garage2.jpg" alt="Organized Garage Storage" className="service-main-image" />
              </div>
              
              <div className="service-cta">
                <h3>Organize Your Garage</h3>
                <p>Get your garage organized and functional.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderHomeOfficePage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Home Office Organization</h1>
          <p className="service-subtitle">Create a productive workspace with custom office solutions</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Custom Home Office Solutions</h2>
              <p>Design a productive home office with our custom storage and organization solutions. From built-in desks to filing systems, we create workspaces that enhance productivity.</p>
              
              <h3>Office Features</h3>
              <ul>
                <li>Built-in desks and work surfaces</li>
                <li>Custom shelving and bookcases</li>
                <li>Filing and document storage</li>
                <li>Cable management systems</li>
                <li>Printer and equipment storage</li>
                <li>Lighting integration</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="HomeOffice2.png" alt="Custom Home Office" className="service-main-image" />
              </div>
              
              <div className="service-cta">
                <h3>Design Your Office</h3>
                <p>Create a productive home workspace.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Design Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPantrySystemsPage = () => (
    <div className="page-content">
      <section className="service-hero">
        <div className="container">
          <h1>Custom Pantry Organization</h1>
          <p className="service-subtitle">Maximize your kitchen storage with custom pantry solutions</p>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-info">
              <h2>Pantry Organization Systems</h2>
              <p>Transform your pantry into an organized, efficient storage space. Our custom pantry systems maximize storage while keeping everything easily accessible and organized.</p>
              
              <h3>Pantry Features</h3>
              <ul>
                <li>Adjustable shelving systems</li>
                <li>Pull-out drawers and baskets</li>
                <li>Spice and condiment organizers</li>
                <li>Can and bottle storage</li>
                <li>Bulk storage solutions</li>
                <li>Door-mounted storage</li>
              </ul>
            </div>
            
            <div className="service-sidebar">
              <div className="service-image-container">
                <img src="Pantry1.jpeg" alt="Organized Pantry System" className="service-main-image" />
              </div>
              
              <div className="service-cta">
                <h3>Organize Your Pantry</h3>
                <p>Get your kitchen pantry organized and efficient.</p>
                <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContactPage = () => (
    <div className="page-content">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Lifetime Home Services</h1>
          <p className="contact-subtitle">Get your free estimate today - we're here to help with all your home service needs</p>
        </div>
      </section>

      <section className="contact-content">
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
                  <label htmlFor="address">Property Address *</label>
                  <input type="text" id="address" name="address" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input type="text" id="city" name="city" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <select id="state" name="state" required>
                      <option value="">Select State</option>
                      <option value="WI">Wisconsin</option>
                      <option value="IL">Illinois</option>
                      <option value="MN">Minnesota</option>
                      <option value="CO">Colorado</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code *</label>
                    <input type="text" id="zipCode" name="zipCode" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">Service Interested In *</label>
                  <select id="serviceType" name="serviceType" required>
                    <option value="">Select Service</option>
                    <option value="Radon Testing">Radon Testing</option>
                    <option value="Radon Mitigation">Radon Mitigation</option>
                    <option value="Duct Cleaning">Duct Cleaning/AeroSeal</option>
                    <option value="Floor Coatings">Concrete Floor Coatings</option>
                    <option value="Smart Home">Smart Home Automation</option>
                    <option value="Security Systems">Security Systems</option>
                    <option value="Custom Closets">Custom Closets</option>
                    <option value="Garage Storage">Garage Storage</option>
                    <option value="Home Office">Home Office Organization</option>
                    <option value="Pantry Systems">Pantry Systems</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="projectDetails">Project Details</label>
                  <textarea id="projectDetails" name="projectDetails" rows="4" placeholder="Please describe your project or any specific questions you have..."></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="timeframe">Preferred Timeframe</label>
                  <select id="timeframe" name="timeframe">
                    <option value="">Select Timeframe</option>
                    <option value="ASAP">As soon as possible</option>
                    <option value="1-2 weeks">Within 1-2 weeks</option>
                    <option value="1 month">Within 1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="Planning">Just planning/researching</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contactPreference">Preferred Contact Method</label>
                  <select id="contactPreference" name="contactPreference">
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                    <option value="Text">Text Message</option>
                    <option value="Any">Any method</option>
                  </select>
                </div>

                <button type="submit" className="submit-button">Get My Free Estimate</button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <a href="tel:262-955-5701">(262) 955-5701</a>
                </div>
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:info@lifetimehomeservices.com">info@lifetimehomeservices.com</a>
                </div>
              </div>

              <div className="business-hours-card">
                <h3>Business Hours</h3>
                <div className="hours-item">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday:</span>
                  <span>By appointment only</span>
                </div>
                <div className="hours-item">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="service-areas-card">
                <h3>Service Areas</h3>
                <p>We proudly serve customers throughout:</p>
                <ul>
                  <li>Wisconsin</li>
                  <li>Illinois</li>
                  <li>Minnesota</li>
                  <li>Colorado</li>
                </ul>
                <p className="service-note">Licensed & Insured</p>
              </div>

              <div className="map-container">
                <h3>Find Us</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.8!2d-88.2!3d43.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzAwLjAiTiA4OMKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
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
      </section>
    </div>
  );

  const renderFinancingPage = () => (
    <div className="page-content">
      <section className="financing-hero">
        <div className="container">
          <h1>Flexible Financing Options</h1>
          <p className="financing-subtitle">Make your home improvement projects affordable with our financing solutions</p>
        </div>
      </section>

      <section className="financing-content">
        <div className="container">
          <div className="financing-grid">
            <div className="financing-info">
              <h2>As Low as 0% Financing Available</h2>
              <p>Don't let budget constraints delay your important home improvements. We offer flexible financing options to help make your projects affordable and manageable.</p>
              
              <h3>Financing Benefits</h3>
              <ul>
                <li><strong>Quick Approval:</strong> Fast and easy application process</li>
                <li><strong>Competitive Rates:</strong> As low as 0% APR for qualified buyers</li>
                <li><strong>Flexible Terms:</strong> Choose payment terms that work for your budget</li>
                <li><strong>No Prepayment Penalties:</strong> Pay off early without fees</li>
                <li><strong>Same-Day Approval:</strong> Get approved and start your project quickly</li>
              </ul>

              <h3>Available for All Services</h3>
              <p>Financing is available for all of our services including:</p>
              <ul>
                <li>Radon testing and mitigation systems</li>
                <li>Concrete floor coating projects</li>
                <li>Duct cleaning and AeroSeal services</li>
                <li>Smart home automation systems</li>
                <li>Security system installations</li>
                <li>Custom closet and storage solutions</li>
              </ul>

              <h3>How It Works</h3>
              <ol>
                <li><strong>Get Your Estimate:</strong> We provide a detailed project estimate</li>
                <li><strong>Apply for Financing:</strong> Quick online or in-person application</li>
                <li><strong>Get Approved:</strong> Receive approval decision quickly</li>
                <li><strong>Start Your Project:</strong> Begin work with approved financing</li>
                <li><strong>Enjoy Your Investment:</strong> Start benefiting from your home improvement</li>
              </ol>
            </div>

            <div className="financing-sidebar">
              <div className="financing-card">
                <h3>Apply for Financing</h3>
                <p>Get pre-approved for financing in minutes</p>
                <button className="cta-button primary large">
                  Apply Now
                </button>
                <p className="financing-note">No impact to credit score for pre-qualification</p>
              </div>

              <div className="financing-features">
                <h3>Financing Features</h3>
                <ul>
                  <li>✓ As low as 0% APR*</li>
                  <li>✓ Terms up to 84 months</li>
                  <li>✓ No down payment required</li>
                  <li>✓ Quick approval process</li>
                  <li>✓ No prepayment penalties</li>
                  <li>✓ Fixed monthly payments</li>
                </ul>
                <p className="disclaimer">*Subject to credit approval. Terms and conditions apply.</p>
              </div>

              <div className="contact-financing">
                <h3>Questions About Financing?</h3>
                <p>Our team is here to help you understand your financing options.</p>
                <button className="cta-button secondary" onClick={() => navigateToPage('contact')}>
                  Contact Us
                </button>
                <div className="phone-cta">
                  <p>Or call us directly:</p>
                  <a href="tel:262-955-5701" className="phone-link">(262) 955-5701</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderStatePage = (state) => {
    const stateNames = {
      wisconsin: 'Wisconsin',
      illinois: 'Illinois', 
      minnesota: 'Minnesota',
      colorado: 'Colorado'
    };

    const stateInfo = {
      wisconsin: {
        description: 'Professional home services throughout Wisconsin',
        specialNote: 'Wisconsin has some of the highest radon levels in the nation, with 1 in 3 homes testing above the EPA action level.'
      },
      illinois: {
        description: 'Professional home services throughout Illinois',
        specialNote: 'Illinois requires radon testing for certain real estate transactions and has specific radon mitigation requirements.'
      },
      minnesota: {
        description: 'Professional home services throughout Minnesota', 
        specialNote: 'Minnesota has elevated radon levels in many areas and requires radon-resistant construction in new homes.'
      },
      colorado: {
        description: 'Professional home services throughout Colorado',
        specialNote: 'Colorado has some of the highest radon levels in the United States due to geological conditions.'
      }
    };

    return (
      <div className="page-content">
        <section className="state-hero">
          <div className="container">
            <h1>{stateNames[state]} Service Areas</h1>
            <p className="state-subtitle">{stateInfo[state].description}</p>
          </div>
        </section>

        <section className="state-content">
          <div className="container">
            <div className="state-grid">
              <div className="state-info">
                <h2>Services Available in {stateNames[state]}</h2>
                <div className="services-list">
                  {stateServices[state].map((service, index) => (
                    <div key={index} className="service-item">
                      <h3>{service}</h3>
                    </div>
                  ))}
                </div>

                <div className="state-special-info">
                  <h3>Important Information for {stateNames[state]} Residents</h3>
                  <p>{stateInfo[state].specialNote}</p>
                </div>

                <h3>Service Area Zip Codes</h3>
                <div className="zip-codes-section">
                  <div className="zip-codes-preview">
                    {stateZipCodes[state].preview.join(', ')}
                    {stateZipCodes[state].full.length > stateZipCodes[state].preview.length && '...'}
                  </div>
                  <button 
                    className="show-all-zips-btn"
                    onClick={() => toggleZipCodes(state)}
                  >
                    {showZipCodes[state] ? 'Show Less' : 'Show All Zip Codes'}
                  </button>
                  {showZipCodes[state] && (
                    <div className="zip-codes-full">
                      {stateZipCodes[state].full.join(', ')}
                    </div>
                  )}
                </div>

                <h3>Area Codes Served</h3>
                <div className="area-codes">
                  {areaCodesByState[state].join(', ')}
                </div>

                <div className="state-note">
                  <h3>Service in {stateNames[state]}</h3>
                  <p>Professional home services throughout {stateNames[state]}.</p>
                </div>
              </div>

              <div className="state-sidebar">
                <div className="state-cta">
                  <h3>Get Free Estimate</h3>
                  <p>Contact us for service in {stateNames[state]}</p>
                  <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  <div className="phone-cta">
                    <p><strong>Call:</strong> <a href="tel:262-955-5701">(262) 955-5701</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@lifetimehomeservices.com">info@lifetimehomeservices.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> <a href="tel:262-955-5701">(262) 955-5701</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@lifetimehomeservices.com">info@lifetimehomeservices.com</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Business Hours</h3>
            <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> By appointment only</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
          
          <div className="footer-section">
            <h3>Service Areas</h3>
            <p>Wisconsin • Illinois • Minnesota • Colorado</p>
            <p>Licensed & Insured</p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Google</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-brands">
            <p><strong>America In-Home</strong> - formerly americainhome.com</p>
            <p><strong>Closet Concepts</strong> - formerly closetconcepts.com</p>
          </div>
          <p>&copy; 2024 Lifetime Home Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          {renderHeroSection()}
          {renderServicesGrid()}
          {renderGoogleReviews()}
          {renderContactSection()}
        </>
      );
    }

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
        return (
          <>
            {renderHeroSection()}
            {renderServicesGrid()}
            {renderGoogleReviews()}
            {renderContactSection()}
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderHeader()}
      <main className="main-content">
        {renderContent()}
      </main>
      {renderFooter()}
    </div>
  );
}

export default App;

