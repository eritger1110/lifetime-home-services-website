import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [showZipCodes, setShowZipCodes] = useState({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // OPTION 1: Auto-detect brand based on domain
  useEffect(() => {
    const domain = window.location.hostname;
    if (domain.includes('americainhome')) {
      setCurrentBrand('aih');
    } else if (domain.includes('closetconcepts')) {
      setCurrentBrand('closets');
    } else {
      setCurrentBrand('lifetime');
    }
  }, []);

  // Helper function to check if this is a landing page
  const isLandingPage = () => {
    const domain = window.location.hostname;
    return domain.includes('americainhome') || domain.includes('closetconcepts');
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

  // OPTION 1: Landing page hero content
  const renderLandingPageHero = () => {
    if (!isLandingPage()) return null;

    if (currentBrand === 'aih') {
      return (
        <section className="landing-hero" data-brand="aih">
          <div className="landing-hero-content">
            <h1>America In-Home</h1>
            <h2>Smart Home Technology. Professional Installation. Lifetime Support.</h2>
            <p>Wisconsin's premier smart home automation and security specialists. 
               From Control4 integration to comprehensive security systems, we bring 
               your home into the future with professional installation and ongoing support.</p>
            
            <div className="landing-services-preview">
              <div className="service-highlight">
                <h3>🏠 Smart Home Automation</h3>
                <p>Complete Control4 home automation systems for modern living</p>
              </div>
              <div className="service-highlight">
                <h3>🔒 Security Systems</h3>
                <p>Professional security system installation and monitoring services</p>
              </div>
              <div className="service-highlight">
                <h3>⚙️ Control4 Integration</h3>
                <p>Authorized Platinum Control4 dealer and installer</p>
              </div>
            </div>

            <div className="landing-cta-buttons">
              <a href="https://lifetimehomeservices.com/smart-home" className="cta-primary">
                Learn More About Smart Home
              </a>
              <a href="https://lifetimehomeservices.com" className="cta-secondary">
                View All Our Services
              </a>
            </div>
          </div>
        </section>
      );
    }

    if (currentBrand === 'closets') {
      return (
        <section className="landing-hero" data-brand="closets">
          <div className="landing-hero-content">
            <h1>Closet Concepts</h1>
            <h2>Custom Storage Solutions. Premium Quality. Lifetime Organization.</h2>
            <p>Transform your home with custom storage solutions designed specifically 
               for your needs, space, and lifestyle. From closets to garages to home offices,
               we create organized spaces that last a lifetime.</p>
            
            <div className="landing-services-preview">
              <div className="service-highlight">
                <h3>👔 Custom Closets</h3>
                <p>Personalized closet design and professional installation</p>
              </div>
              <div className="service-highlight">
                <h3>🚗 Garage Storage</h3>
                <p>Organized garage systems and storage solutions</p>
              </div>
              <div className="service-highlight">
                <h3>🏢 Home Office</h3>
                <p>Professional home office organization and storage</p>
              </div>
            </div>

            <div className="landing-cta-buttons">
              <a href="https://lifetimehomeservices.com/custom-closets" className="cta-primary">
                Explore Custom Closets
              </a>
              <a href="https://lifetimehomeservices.com" className="cta-secondary">
                View All Our Services
              </a>
            </div>
          </div>
        </section>
      );
    }

    return null;
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
            <h1 className="hero-company-name">Lifetime Home Services</h1>
            <h2 className="hero-tagline-special">Trusted Solutions. Lifetime Results.</h2>
            <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
            <div className="hero-cta-buttons">
              <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <button className="cta-button secondary large" onClick={() => navigateToPage('radon-testing')}>
                Learn About Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderServicesSection = () => {
    if (currentPage !== 'home') return null;

    const services = [
      {
        title: 'Radon Testing',
        description: 'Professional radon testing with EPA-approved methods and accurate results.',
        image: 'radon-testing-image.jpg',
        page: 'radon-testing'
      },
      {
        title: 'Radon Mitigation',
        description: 'Expert radon mitigation systems to protect your family\'s health.',
        image: 'radon-mitigation-image.jpg',
        page: 'radon-mitigation'
      },
      {
        title: 'Duct Cleaning/AeroSeal',
        description: 'Professional duct cleaning and AeroSeal duct sealing services.',
        image: 'aeroseal-logo.png',
        page: 'duct-cleaning'
      },
      {
        title: 'Concrete Floor Coatings',
        description: 'Durable Torginol floor coatings with lifetime warranty.',
        image: 'floor-coatings-image.jpg',
        page: 'floor-coatings'
      }
    ];

    return (
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" onClick={() => navigateToPage(service.page)}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="service-button">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderGoogleReviews = () => {
    if (currentPage !== 'home') return null;

    const currentReviews = getCurrentReviews();

    return (
      <section className="google-reviews-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="reviews-grid">
            {currentReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-stars">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">- {review.author}</p>
              </div>
            ))}
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

  const renderRadonTestingPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Professional Radon Testing Services</h1>
          <p className="page-subtitle">Protect your family with accurate, EPA-approved radon testing</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>What is Radon?</h2>
              <p>Radon is a naturally occurring radioactive gas that comes from the decay of uranium in soil, rock, and water. It's invisible, odorless, and tasteless, making it impossible to detect without proper testing. Radon can enter your home through cracks in the foundation, gaps around pipes, and other openings.</p>
              
              <p>According to the EPA, radon is the leading cause of lung cancer among non-smokers and is responsible for about 21,000 lung cancer deaths each year in the United States. The good news is that radon-related lung cancer is entirely preventable with proper testing and mitigation.</p>
            </section>

            <section className="content-section">
              <h2>Why Test for Radon?</h2>
              <div className="radon-levels-grid">
                <div className="level-card safe">
                  <h3>Safe Level</h3>
                  <div className="level-number">Below 2.0 pCi/L</div>
                  <p>Minimal health risk. No action needed.</p>
                </div>
                <div className="level-card caution">
                  <h3>Caution Level</h3>
                  <div className="level-number">2.0 - 3.9 pCi/L</div>
                  <p>Consider mitigation. Monitor regularly.</p>
                </div>
                <div className="level-card action">
                  <h3>Action Level</h3>
                  <div className="level-number">4.0+ pCi/L</div>
                  <p>EPA recommends immediate mitigation.</p>
                </div>
                <div className="level-card danger">
                  <h3>High Risk</h3>
                  <div className="level-number">10.0+ pCi/L</div>
                  <p>Urgent mitigation required.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Testing Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Initial Consultation</h3>
                  <p>We assess your home and determine the best testing locations and methods.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Professional Testing</h3>
                  <p>We use EPA-approved continuous radon monitors for accurate 48-hour testing.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Detailed Results</h3>
                  <p>You receive a comprehensive report with radon levels and recommendations.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Next Steps</h3>
                  <p>If mitigation is needed, we provide expert installation and follow-up testing.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Testing Methods</h2>
              <div className="testing-methods">
                <div className="method-card">
                  <h3>Short-Term Testing (2-7 days)</h3>
                  <p>Quick screening test using continuous radon monitors or charcoal canisters. Ideal for real estate transactions or initial screening.</p>
                  <ul>
                    <li>Fast results</li>
                    <li>EPA-approved methods</li>
                    <li>Professional-grade equipment</li>
                  </ul>
                </div>
                <div className="method-card">
                  <h3>Long-Term Testing (90+ days)</h3>
                  <p>More accurate assessment of average radon levels over time. Recommended for comprehensive evaluation.</p>
                  <ul>
                    <li>More accurate results</li>
                    <li>Accounts for seasonal variations</li>
                    <li>Better for decision-making</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Trusted Resources</h2>
              <div className="resources-grid">
                <div className="resource-card">
                  <h3>EPA - A Citizen's Guide to Radon</h3>
                  <p>Comprehensive guide from the Environmental Protection Agency</p>
                  <a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>EPA - Radon Health Risks</h3>
                  <p>Detailed information about radon health effects and risks</p>
                  <a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>Wisconsin DHS - Radon Program</h3>
                  <p>State-specific radon information and resources</p>
                  <a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>Airthings - What is Radon?</h3>
                  <p>Educational resource about radon basics and detection</p>
                  <a href="https://www.airthings.com/resources/what-is-radon" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>RadonAway - What is Radon?</h3>
                  <p>Industry expert information about radon and mitigation</p>
                  <a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>CDC - Radon Information</h3>
                  <p>Health-focused radon information from the CDC</p>
                  <a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Get Professional Radon Testing</h3>
              <p>Protect your family with accurate radon testing from certified professionals.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Schedule Testing
              </button>
              <div className="contact-info">
                <p><strong>Call:</strong> (262) 955-5701</p>
                <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
              </div>
            </div>

            <div className="info-card">
              <h3>Testing Image</h3>
              <div className="radon-testing-image-container">
                <img src="radon-testing-image.jpg" alt="Professional radon testing equipment" className="radon-testing-image" />
              </div>
              <p>Professional-grade continuous radon monitors provide accurate results for your peace of mind.</p>
            </div>

            <div className="info-card">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>EPA-approved testing methods</li>
                <li>Certified radon professionals</li>
                <li>Fast, accurate results</li>
                <li>Comprehensive reporting</li>
                <li>Mitigation services available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRadonMitigationPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Professional Radon Mitigation Systems</h1>
          <p className="page-subtitle">Reduce radon levels and protect your family's health</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>What is Radon Mitigation?</h2>
              <p>Radon mitigation is the process of reducing radon gas concentrations in your home to safe levels. Our professional mitigation systems are designed to prevent radon from entering your home and safely vent any existing radon gas to the outside atmosphere.</p>
              
              <p>A properly installed radon mitigation system can reduce radon levels by up to 99%, bringing even the highest radon levels down to safe ranges. Our systems are designed to operate quietly and efficiently while maintaining the aesthetic appeal of your home.</p>
            </section>

            <section className="content-section">
              <h2>How Radon Mitigation Works</h2>
              <div className="mitigation-video-container">
                <iframe
                  src="https://www.youtube.com/embed/l4X1nNbKqNU?rel=0&modestbranding=1"
                  title="How Radon Mitigation Systems Work"
                  className="mitigation-video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <p>Watch this video to understand how radon mitigation systems work to protect your home and family.</p>
            </section>

            <section className="content-section">
              <h2>Types of Mitigation Systems</h2>
              <div className="mitigation-systems-grid">
                <div className="system-card">
                  <h3>Sub-Slab Depressurization</h3>
                  <p>Most common and effective method. Creates negative pressure beneath the foundation to prevent radon entry.</p>
                  <ul>
                    <li>Highly effective for most homes</li>
                    <li>Minimal disruption to living space</li>
                    <li>Long-term reliability</li>
                  </ul>
                </div>
                <div className="system-card">
                  <h3>Crawl Space Ventilation</h3>
                  <p>Increases air circulation in crawl spaces to reduce radon concentrations.</p>
                  <ul>
                    <li>Ideal for homes with crawl spaces</li>
                    <li>Improves overall air quality</li>
                    <li>Prevents moisture issues</li>
                  </ul>
                </div>
                <div className="system-card">
                  <h3>Basement Pressurization</h3>
                  <p>Uses fans to create positive pressure in the basement, preventing radon entry.</p>
                  <ul>
                    <li>Effective for certain home types</li>
                    <li>Can improve basement comfort</li>
                    <li>Reduces drafts</li>
                  </ul>
                </div>
                <div className="system-card">
                  <h3>Drain Tile Suction</h3>
                  <p>Utilizes existing perimeter drain system for radon removal.</p>
                  <ul>
                    <li>Uses existing infrastructure</li>
                    <li>Cost-effective solution</li>
                    <li>Minimal visual impact</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Installation Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Site Assessment</h3>
                  <p>We evaluate your home's construction and radon levels to design the optimal system.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>System Design</h3>
                  <p>Custom design based on your home's specific needs and construction type.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Professional Installation</h3>
                  <p>Expert installation with minimal disruption to your daily routine.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Post-Installation Testing</h3>
                  <p>We verify system effectiveness with follow-up radon testing.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Trusted Resources</h2>
              <div className="resources-grid">
                <div className="resource-card">
                  <h3>EPA - A Citizen's Guide to Radon</h3>
                  <p>Comprehensive guide from the Environmental Protection Agency</p>
                  <a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>EPA - Radon Health Risks</h3>
                  <p>Detailed information about radon health effects and risks</p>
                  <a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>Wisconsin DHS - Radon Program</h3>
                  <p>State-specific radon information and resources</p>
                  <a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>RadonAway - What is Radon?</h3>
                  <p>Industry expert information about radon and mitigation</p>
                  <a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
                <div className="resource-card">
                  <h3>SWAT Environmental - Mitigation Animation</h3>
                  <p>Visual explanation of how sub-slab mitigation systems work</p>
                  <a href="https://www.youtube.com/watch?v=oSLf6kJW_CM" target="_blank" rel="noopener noreferrer" className="resource-link">Watch Video →</a>
                </div>
                <div className="resource-card">
                  <h3>CDC - Radon Information</h3>
                  <p>Health-focused radon information from the CDC</p>
                  <a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer" className="resource-link">Learn More →</a>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Get Professional Mitigation</h3>
              <p>Reduce radon levels with a professionally installed mitigation system.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <div className="contact-info">
                <p><strong>Call:</strong> (262) 955-5701</p>
                <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
              </div>
            </div>

            <div className="info-card">
              <h3>System Benefits</h3>
              <ul>
                <li>Reduces radon levels by up to 99%</li>
                <li>Quiet, efficient operation</li>
                <li>Minimal visual impact</li>
                <li>Increases home value</li>
                <li>Peace of mind for your family</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Festa Radon Technologies</h3>
              <p>We partner with Festa Radon Technologies for specialized mitigation solutions.</p>
              <a href="https://www.festaradon.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Festa Radon →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDuctCleaningPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Professional Duct Cleaning & AeroSeal Services</h1>
          <p className="page-subtitle">Improve your home's air quality and energy efficiency</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Professional Duct Cleaning</h2>
              <p>Over time, your home's ductwork accumulates dust, debris, allergens, and other contaminants that can affect your indoor air quality and HVAC system efficiency. Our professional duct cleaning services remove these contaminants, improving your home's air quality and helping your HVAC system operate more efficiently.</p>
            </section>

            <section className="content-section">
              <h2>AeroSeal Duct Sealing Technology</h2>
              <div className="aeroseal-video-container">
                <iframe
                  src="https://www.youtube.com/embed/K3JAR0dCNhc?rel=0&modestbranding=1"
                  title="AeroSeal Duct Sealing Process"
                  className="aeroseal-video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <p>AeroSeal is a revolutionary duct sealing technology that seals leaks from the inside out. This patented process can seal up to 90% of duct leaks, significantly improving your home's energy efficiency and comfort.</p>
            </section>

            <section className="content-section">
              <h2>Benefits of Duct Cleaning & Sealing</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Improved Air Quality</h3>
                  <p>Remove dust, allergens, and contaminants from your ductwork for cleaner indoor air.</p>
                </div>
                <div className="benefit-card">
                  <h3>Energy Savings</h3>
                  <p>Sealed ducts can reduce energy costs by up to 30% by eliminating air leaks.</p>
                </div>
                <div className="benefit-card">
                  <h3>Enhanced Comfort</h3>
                  <p>Better airflow distribution means more consistent temperatures throughout your home.</p>
                </div>
                <div className="benefit-card">
                  <h3>HVAC Longevity</h3>
                  <p>Clean, sealed ducts reduce strain on your HVAC system, extending its lifespan.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Inspection</h3>
                  <p>We assess your ductwork condition and identify areas needing attention.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Cleaning</h3>
                  <p>Professional cleaning removes accumulated dust, debris, and contaminants.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>AeroSeal Application</h3>
                  <p>If needed, we apply AeroSeal technology to seal duct leaks from the inside.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Verification</h3>
                  <p>We test and verify the effectiveness of our cleaning and sealing services.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Improve Your Air Quality</h3>
              <p>Professional duct cleaning and sealing services for better indoor air quality.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Schedule Service
              </button>
              <div className="contact-info">
                <p><strong>Call:</strong> (262) 955-5701</p>
                <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
              </div>
            </div>

            <div className="info-card">
              <h3>AeroSeal Technology</h3>
              <div className="aeroseal-logo-container">
                <img src="aeroseal-logo.png" alt="AeroSeal Logo" className="aeroseal-logo" />
              </div>
              <p>We use AeroSeal's patented duct sealing technology for superior results.</p>
              <a href="https://aeroseal.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                Learn More About AeroSeal →
              </a>
            </div>

            <div className="info-card">
              <h3>Service Benefits</h3>
              <ul>
                <li>Improved indoor air quality</li>
                <li>Reduced energy costs</li>
                <li>Better HVAC efficiency</li>
                <li>Enhanced home comfort</li>
                <li>Professional equipment and methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFloorCoatingsPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Premium Concrete Floor Coatings</h1>
          <p className="page-subtitle">Transform your concrete floors with durable, beautiful coatings</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Torginol Polyaspartic Floor Coatings</h2>
              <p>Our premium Torginol polyaspartic floor coatings provide superior durability, chemical resistance, and aesthetic appeal. Unlike traditional epoxy coatings, polyaspartic coatings cure quickly and can be applied in a wide range of temperatures, making them ideal for Wisconsin's climate.</p>
            </section>

            <section className="content-section">
              <h2>Polyaspartic vs. Epoxy</h2>
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
                      <td>1-2 hours</td>
                      <td>24-72 hours</td>
                    </tr>
                    <tr>
                      <td>UV Resistance</td>
                      <td>Excellent</td>
                      <td>Poor</td>
                    </tr>
                    <tr>
                      <td>Temperature Range</td>
                      <td>-40°F to 140°F</td>
                      <td>50°F to 90°F</td>
                    </tr>
                    <tr>
                      <td>Chemical Resistance</td>
                      <td>Superior</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>High</td>
                      <td>Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="content-section">
              <h2>Installation Process</h2>
              <div className="process-timeline">
                <div className="timeline-item">
                  <div className="timeline-day">Day 1</div>
                  <div className="timeline-content">
                    <h3>Surface Preparation</h3>
                    <p>Diamond grinding and crack repair to ensure proper adhesion</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-day">Day 2</div>
                  <div className="timeline-content">
                    <h3>Base Coat Application</h3>
                    <p>Apply primer and base coat with decorative flakes if desired</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-day">Day 3</div>
                  <div className="timeline-content">
                    <h3>Top Coat & Finish</h3>
                    <p>Apply polyaspartic top coat for durability and shine</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Color Options & Finishes</h2>
              <p>Choose from a wide variety of colors and decorative options to match your style:</p>
              <div className="color-options">
                <div className="color-category">
                  <h3>Solid Colors</h3>
                  <p>Classic solid colors for a clean, professional look</p>
                </div>
                <div className="color-category">
                  <h3>Decorative Flakes</h3>
                  <p>Add texture and visual interest with colored flake systems</p>
                </div>
                <div className="color-category">
                  <h3>Metallic Finishes</h3>
                  <p>Stunning metallic effects for a unique, high-end appearance</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>View Our Work</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="Before1.jpg" alt="Garage floor before coating" />
                  <p>Before: Stained concrete garage floor</p>
                </div>
                <div className="gallery-item">
                  <img src="after1.jpg" alt="Garage floor after coating" />
                  <p>After: Beautiful polyaspartic coating</p>
                </div>
                <div className="gallery-item">
                  <img src="Before2.jpg" alt="Basement floor before coating" />
                  <p>Before: Worn basement concrete</p>
                </div>
                <div className="gallery-item">
                  <img src="after2.jpg" alt="Basement floor after coating" />
                  <p>After: Durable, attractive finish</p>
                </div>
                <div className="gallery-item">
                  <img src="Before3.jpg" alt="Workshop floor before coating" />
                  <p>Before: Industrial concrete floor</p>
                </div>
                <div className="gallery-item">
                  <img src="after3.jpg" alt="Workshop floor after coating" />
                  <p>After: Professional-grade coating</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Transform Your Floors</h3>
              <p>Get a free estimate for premium concrete floor coatings.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <div className="contact-info">
                <p><strong>Call:</strong> (262) 955-5701</p>
                <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
              </div>
            </div>

            <div className="info-card">
              <h3>Lifetime Warranty</h3>
              <p>Our Torginol polyaspartic coatings come with a comprehensive lifetime warranty for your peace of mind.</p>
            </div>

            <div className="info-card">
              <h3>Applications</h3>
              <ul>
                <li>Garage floors</li>
                <li>Basement floors</li>
                <li>Workshop areas</li>
                <li>Commercial spaces</li>
                <li>Outdoor patios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSmartHomePage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Smart Home Automation</h1>
          <p className="page-subtitle">Complete Control4 home automation systems for modern living</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Transform Your Home with Smart Technology</h2>
              <p>Experience the convenience and luxury of a fully automated home with our professional Control4 smart home systems. From lighting and climate control to entertainment and security, we create seamlessly integrated solutions that enhance your daily life.</p>
            </section>

            <section className="content-section">
              <h2>Smart Home Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Lighting Control</h3>
                  <p>Automated lighting scenes, dimming, and scheduling for perfect ambiance</p>
                </div>
                <div className="feature-card">
                  <h3>Climate Control</h3>
                  <p>Smart thermostats and HVAC integration for optimal comfort and efficiency</p>
                </div>
                <div className="feature-card">
                  <h3>Entertainment Systems</h3>
                  <p>Multi-room audio, video distribution, and streaming integration</p>
                </div>
                <div className="feature-card">
                  <h3>Security Integration</h3>
                  <p>Cameras, door locks, and alarm systems all controlled from one interface</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Smart Home Consultation</h3>
              <p>Discover how smart home automation can enhance your lifestyle.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySystemsPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Professional Security Systems</h1>
          <p className="page-subtitle">Comprehensive security solutions for your home and family</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Complete Security Solutions</h2>
              <p>Protect your home and family with our professional security system installation and monitoring services. We offer comprehensive solutions including cameras, alarms, access control, and 24/7 monitoring.</p>
            </section>

            <section className="content-section">
              <h2>Security Features</h2>
              <div className="security-gallery">
                <div className="security-item">
                  <img src="Securityfront.jpg" alt="Front door security camera" />
                  <h3>Outdoor Cameras</h3>
                  <p>Weather-resistant cameras with night vision and motion detection</p>
                </div>
                <div className="security-item">
                  <img src="SecurityBack.jpg" alt="Backyard security camera" />
                  <h3>Perimeter Monitoring</h3>
                  <p>Complete property coverage with strategic camera placement</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Security Assessment</h3>
              <p>Get a free security assessment and customized protection plan.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderControl4Page = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Control4 Home Automation</h1>
          <p className="page-subtitle">Authorized Platinum Control4 dealer and installer</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Authorized Platinum Control4 Dealer</h2>
              <div className="control4-badge-container">
                <img src="C4_Dealer_Status_Badge_2025_Platinum.png" alt="Control4 Platinum Dealer Badge" className="control4-badge" />
              </div>
              <p>We are an authorized Control4 Platinum Dealer, ensuring the highest level of expertise and service for your smart home installation. Our certified technicians provide professional installation, programming, and ongoing support for your Control4 system.</p>
            </section>

            <section className="content-section">
              <h2>Control4 Capabilities</h2>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <h3>Whole-Home Integration</h3>
                  <p>Seamlessly connect and control all your home's systems from a single interface</p>
                </div>
                <div className="capability-card">
                  <h3>Voice Control</h3>
                  <p>Amazon Alexa and Google Assistant integration for hands-free control</p>
                </div>
                <div className="capability-card">
                  <h3>Remote Access</h3>
                  <p>Control your home from anywhere with the Control4 mobile app</p>
                </div>
                <div className="capability-card">
                  <h3>Personalized Scenes</h3>
                  <p>Create custom automation scenes for different times of day and activities</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Professional Installation & Support</h2>
              <p>Our Control4 certified technicians provide complete installation, programming, and training services. We ensure your system is perfectly configured for your lifestyle and provide ongoing support to keep everything running smoothly.</p>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Control4 Consultation</h3>
              <p>Discover the possibilities of Control4 home automation for your home.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Schedule Demo
              </button>
            </div>

            <div className="info-card">
              <h3>Platinum Dealer Benefits</h3>
              <ul>
                <li>Highest level of Control4 certification</li>
                <li>Access to latest products and features</li>
                <li>Advanced training and support</li>
                <li>Priority technical assistance</li>
                <li>Comprehensive warranty coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCustomClosetsPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Custom Closet Solutions</h1>
          <p className="page-subtitle">Personalized closet design and professional installation</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Transform Your Storage Space</h2>
              <p>Create the perfect closet solution with our custom design and installation services. From walk-in closets to reach-in organizers, we design storage solutions that maximize space and match your lifestyle.</p>
            </section>

            <section className="content-section">
              <h2>Custom Design Process</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Consultation</h3>
                  <p>We assess your space and discuss your storage needs and style preferences.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Design</h3>
                  <p>Our designers create a custom solution optimized for your space and needs.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Installation</h3>
                  <p>Professional installation with minimal disruption to your daily routine.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Organization</h3>
                  <p>We help you organize your belongings in your new custom closet system.</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>View Our Work</h2>
              <div className="closet-gallery">
                <div className="gallery-item">
                  <img src="Closet3.jpg" alt="Custom walk-in closet" />
                  <p>Luxury walk-in closet with custom shelving and lighting</p>
                </div>
                <div className="gallery-item">
                  <img src="Closet5.jpg" alt="Organized closet system" />
                  <p>Efficient organization system with multiple storage options</p>
                </div>
                <div className="gallery-item">
                  <img src="ReachinCloset1.jpg" alt="Reach-in closet organizer" />
                  <p>Reach-in closet maximized with custom organizers</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1518.JPG" alt="Master bedroom closet" />
                  <p>Master bedroom closet with premium finishes</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1521.JPG" alt="Custom closet details" />
                  <p>Custom details and hardware for perfect functionality</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1429.JPG" alt="Closet organization system" />
                  <p>Complete organization system with adjustable components</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Free Design Consultation</h3>
              <p>Get a custom closet design tailored to your space and needs.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Schedule Consultation
              </button>
            </div>

            <div className="info-card">
              <h3>Closet Features</h3>
              <ul>
                <li>Custom shelving and hanging space</li>
                <li>Drawers and specialty storage</li>
                <li>LED lighting systems</li>
                <li>Premium hardware and finishes</li>
                <li>Adjustable components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGarageStoragePage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Garage Storage Solutions</h1>
          <p className="page-subtitle">Organized garage systems and storage solutions</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Maximize Your Garage Space</h2>
              <p>Transform your cluttered garage into an organized, functional space with our custom storage solutions. From wall-mounted systems to overhead storage, we create solutions that work for your specific needs.</p>
            </section>

            <section className="content-section">
              <h2>Garage Storage Options</h2>
              <div className="storage-options">
                <div className="option-card">
                  <h3>Wall Systems</h3>
                  <p>Slatwall and pegboard systems for tools and equipment</p>
                </div>
                <div className="option-card">
                  <h3>Overhead Storage</h3>
                  <p>Ceiling-mounted platforms for seasonal items</p>
                </div>
                <div className="option-card">
                  <h3>Cabinets</h3>
                  <p>Enclosed storage for chemicals and valuable items</p>
                </div>
                <div className="option-card">
                  <h3>Workbenches</h3>
                  <p>Custom workstations for projects and hobbies</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Our Garage Projects</h2>
              <div className="garage-gallery">
                <div className="gallery-item">
                  <img src="Garage1.jpg" alt="Organized garage with wall storage" />
                  <p>Complete garage organization with wall-mounted storage</p>
                </div>
                <div className="gallery-item">
                  <img src="Garage2.jpg" alt="Garage storage system" />
                  <p>Custom storage system with cabinets and workbench</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Garage Organization</h3>
              <p>Get a custom garage storage solution designed for your needs.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHomeOfficePage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Home Office Organization</h1>
          <p className="page-subtitle">Professional home office organization and storage</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Create Your Perfect Workspace</h2>
              <p>Design a productive and organized home office with our custom storage and organization solutions. From built-in desks to filing systems, we create workspaces that enhance productivity and style.</p>
            </section>

            <section className="content-section">
              <h2>Home Office Features</h2>
              <div className="office-features">
                <div className="feature-card">
                  <h3>Built-In Desks</h3>
                  <p>Custom desks designed for your space and work style</p>
                </div>
                <div className="feature-card">
                  <h3>Storage Solutions</h3>
                  <p>File storage, bookshelves, and organization systems</p>
                </div>
                <div className="feature-card">
                  <h3>Cable Management</h3>
                  <p>Clean, organized technology integration</p>
                </div>
                <div className="feature-card">
                  <h3>Lighting Design</h3>
                  <p>Task lighting and ambient lighting solutions</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Office Projects</h2>
              <div className="office-gallery">
                <div className="gallery-item">
                  <img src="HomeOffice2.png" alt="Modern home office setup" />
                  <p>Modern home office with built-in storage and desk</p>
                </div>
                <div className="gallery-item">
                  <img src="HomeOffice4.jpg" alt="Executive home office" />
                  <p>Executive home office with custom cabinetry</p>
                </div>
                <div className="gallery-item">
                  <img src="HomeOffice5.jpg" alt="Organized office space" />
                  <p>Organized office space with efficient storage solutions</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Office Design Consultation</h3>
              <p>Create a productive workspace with custom organization solutions.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPantrySystemsPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Custom Pantry Systems</h1>
          <p className="page-subtitle">Organized pantry solutions for efficient kitchen storage</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Maximize Your Pantry Space</h2>
              <p>Transform your pantry into an organized, efficient storage space with our custom shelving and organization systems. From walk-in pantries to compact closet pantries, we create solutions that make meal planning and cooking easier.</p>
            </section>

            <section className="content-section">
              <h2>Pantry Organization Features</h2>
              <div className="pantry-features">
                <div className="feature-card">
                  <h3>Adjustable Shelving</h3>
                  <p>Flexible shelving systems that adapt to your storage needs</p>
                </div>
                <div className="feature-card">
                  <h3>Pull-Out Drawers</h3>
                  <p>Easy access to items stored in deep pantry spaces</p>
                </div>
                <div className="feature-card">
                  <h3>Specialty Storage</h3>
                  <p>Custom solutions for spices, canned goods, and bulk items</p>
                </div>
                <div className="feature-card">
                  <h3>Door Storage</h3>
                  <p>Maximize space with door-mounted storage solutions</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Pantry Projects</h2>
              <div className="pantry-gallery">
                <div className="gallery-item">
                  <img src="Pantry1.jpeg" alt="Organized walk-in pantry" />
                  <p>Walk-in pantry with custom shelving and organization</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Pantry Organization</h3>
              <p>Get a custom pantry solution designed for your kitchen storage needs.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatePage = (state) => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>{state.charAt(0).toUpperCase() + state.slice(1)} Service Areas</h1>
          <p className="page-subtitle">Professional home services throughout {state.charAt(0).toUpperCase() + state.slice(1)}</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Services Available in {state.charAt(0).toUpperCase() + state.slice(1)}</h2>
              <div className="services-list">
                {stateServices[state].map((service, index) => (
                  <div key={index} className="service-item">
                    <h3>{service}</h3>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-section">
              <h2>Service Area Zip Codes</h2>
              <div className="zip-codes-section">
                <div className="zip-codes-preview">
                  {stateZipCodes[state].preview.map((zip, index) => (
                    <span key={index} className="zip-code">{zip}</span>
                  ))}
                  <button 
                    className="show-all-zips"
                    onClick={() => toggleZipCodes(state)}
                  >
                    {showZipCodes[state] ? 'Show Less' : 'Show All Zip Codes'}
                  </button>
                </div>
                
                {showZipCodes[state] && (
                  <div className="zip-codes-full">
                    {stateZipCodes[state].full.map((zip, index) => (
                      <span key={index} className="zip-code">{zip}</span>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section className="content-section">
              <h2>Area Codes Served</h2>
              <div className="area-codes">
                {areaCodesByState[state].map((code, index) => (
                  <span key={index} className="area-code">{code}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Service in {state.charAt(0).toUpperCase() + state.slice(1)}</h3>
              <p>Professional home services throughout {state.charAt(0).toUpperCase() + state.slice(1)}.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <div className="contact-info">
                <p><strong>Call:</strong> (262) 955-5701</p>
                <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p className="page-subtitle">Get in touch for your free estimate</p>
        </div>

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
                  <option value="Radon Testing">Radon Testing</option>
                  <option value="Radon Mitigation">Radon Mitigation</option>
                  <option value="Duct Cleaning">Duct Cleaning/AeroSeal</option>
                  <option value="Floor Coatings">Concrete Floor Coatings</option>
                  <option value="Custom Closets">Custom Closets</option>
                  <option value="Smart Home">Smart Home Automation</option>
                  <option value="Security Systems">Security Systems</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-card">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <strong>Phone:</strong>
                <p>(262) 955-5701</p>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <p>info@lifetimehomeservices.com</p>
              </div>
              <div className="contact-item">
                <strong>Service Areas:</strong>
                <p>Wisconsin, Illinois, Minnesota, Colorado</p>
              </div>
              <div className="contact-item">
                <strong>Business Hours:</strong>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                   Saturday: By appointment only<br />
                   Sunday: Closed</p>
              </div>
            </div>

            <div className="map-container">
              <h3>Service Area Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d-88.1!3d43.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzAwLjAiTiA4OMKwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancingPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Financing Options</h1>
          <p className="page-subtitle">Flexible financing solutions for your home improvement projects</p>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <section className="content-section">
              <h2>Make Your Home Improvements Affordable</h2>
              <p>We understand that home improvements are a significant investment. That's why we offer flexible financing options to help make your projects more affordable. Our financing partners provide competitive rates and terms to fit your budget.</p>
            </section>

            <section className="content-section">
              <h2>Financing Benefits</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Competitive Rates</h3>
                  <p>As low as 0% APR for qualified applicants</p>
                </div>
                <div className="benefit-card">
                  <h3>Flexible Terms</h3>
                  <p>Choose payment terms that work for your budget</p>
                </div>
                <div className="benefit-card">
                  <h3>Quick Approval</h3>
                  <p>Fast application process with quick decisions</p>
                </div>
                <div className="benefit-card">
                  <h3>No Prepayment Penalty</h3>
                  <p>Pay off your loan early without additional fees</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>How It Works</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Get Your Estimate</h3>
                  <p>We provide a detailed estimate for your project.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Apply for Financing</h3>
                  <p>Complete a simple application with our financing partner.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Get Approved</h3>
                  <p>Receive a quick decision on your financing application.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Start Your Project</h3>
                  <p>Begin your home improvement project with confidence.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="sidebar">
            <div className="cta-card">
              <h3>Get Started Today</h3>
              <p>Contact us to learn more about financing options for your project.</p>
              <button className="cta-button primary" onClick={() => navigateToPage('contact')}>
                Contact Us
              </button>
            </div>

            <div className="info-card">
              <h3>Financing Features</h3>
              <ul>
                <li>As low as 0% APR*</li>
                <li>Terms up to 120 months</li>
                <li>No prepayment penalties</li>
                <li>Quick online application</li>
                <li>Same-day decisions available</li>
              </ul>
              <p className="disclaimer">*Subject to credit approval. Terms and conditions apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> (262) 955-5701</p>
          <p><strong>Email:</strong> info@lifetimehomeservices.com</p>
          <p><strong>Address:</strong> Brookfield, WI</p>
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
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Google</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Lifetime Home Services. All rights reserved.</p>
        
        {/* OPTION 1: Add "formerly" text for landing pages */}
        <div className="footer-formerly">
          {currentBrand === 'aih' && (
            <p className="formerly-text">formerly americainhome.com</p>
          )}
          {currentBrand === 'closets' && (
            <p className="formerly-text">formerly closetconcepts.com</p>
          )}
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    // Show landing page content for landing pages
    if (isLandingPage()) {
      return (
        <>
          {renderHeroSection()}
          {renderHomeContactSection()}
        </>
      );
    }

    // Regular page content
    switch (currentPage) {
      case 'home':
        return (
          <>
            {renderHeroSection()}
            {renderServicesSection()}
            {renderGoogleReviews()}
          </>
        );
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

