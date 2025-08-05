// Global state management
let currentBrand = 'lifetime';
let currentPage = 'home';
let currentReviewIndex = 0;
let reviewInterval;

// Service data for each brand
const serviceData = {
  lifetime: [
    {
      title: 'Radon Testing',
      description: 'Professional radon testing services to ensure your home\'s safety.',
      image: 'radon-testing.jpg',
      features: ['EPA-approved testing methods', '48-72 hour results', 'Detailed reporting', 'Follow-up recommendations'],
      page: 'radon-testing'
    },
    {
      title: 'Radon Mitigation',
      description: 'Expert radon mitigation systems to reduce dangerous radon levels.',
      image: 'radon-mitigation.jpg',
      features: ['Custom system design', 'Professional installation', 'Post-installation testing', 'Lifetime warranty'],
      page: 'radon-mitigation'
    },
    {
      title: 'Duct Cleaning/AeroSeal',
      description: 'Professional duct cleaning and sealing for improved air quality.',
      image: 'aeroseal-logo.jpg',
      features: ['Complete duct cleaning', 'AeroSeal technology', 'Improved efficiency', 'Better air quality'],
      page: 'duct-cleaning'
    },
    {
      title: 'Concrete Floor Coatings',
      description: 'Durable Torginol floor coating systems for garages and basements.',
      image: 'floor-coatings.jpg',
      features: ['Torginol system', 'Lifetime warranty', 'Chemical resistant', 'Easy maintenance'],
      page: 'floor-coatings'
    }
  ],
  aih: [
    {
      title: 'Smart Home Automation',
      description: 'Complete smart home solutions for modern living and convenience.',
      image: 'smart-home-automation.jpg',
      features: ['Control4 integration', 'Voice control', 'Mobile app control', 'Custom programming'],
      page: 'smart-home'
    },
    {
      title: 'Security Systems',
      description: 'Professional security system installation and monitoring services.',
      image: 'security-systems.jpg',
      features: ['24/7 monitoring', 'Mobile alerts', 'Professional installation', 'Smart integration'],
      page: 'security-systems'
    },
    {
      title: 'Control4 Integration',
      description: 'Seamless Control4 smart home integration and automation.',
      image: 'control4-integration.jpg',
      features: ['Certified dealers', 'Custom programming', 'Ongoing support', 'System updates'],
      page: 'control4'
    }
  ],
  closets: [
    {
      title: 'Custom Closets',
      description: 'Custom-designed closet solutions for maximum organization and style.',
      image: 'custom-closets.jpg',
      features: ['Custom design', 'Premium materials', 'Professional installation', 'Lifetime warranty'],
      page: 'custom-closets'
    },
    {
      title: 'Garage Storage',
      description: 'Professional garage organization and storage solutions.',
      image: 'garage-storage.jpg',
      features: ['Wall systems', 'Overhead storage', 'Workbenches', 'Custom solutions'],
      page: 'garage-storage'
    },
    {
      title: 'Home Office Organization',
      description: 'Custom home office organization systems for productivity.',
      image: 'home-office-organization.jpg',
      features: ['Built-in desks', 'Storage solutions', 'Cable management', 'Custom design'],
      page: 'home-office'
    }
  ]
};

// State data with zip codes
const stateData = {
  wisconsin: {
    name: 'Wisconsin',
    services: ['Radon Testing', 'Radon Mitigation', 'Custom Closets', 'Smart Home Technology', 'Floor Coatings', 'Duct Cleaning/AeroSeal'],
    regions: {
      'Milwaukee Metro': {
        areaCodes: ['414', '262'],
        zipCodes: ['53001', '53002', '53005', '53007', '53008', '53012', '53013', '53014', '53015', '53018', '53022', '53024', '53029', '53031', '53032', '53033', '53034', '53035', '53037', '53040', '53041', '53042', '53044', '53045', '53046', '53051', '53056', '53058', '53059', '53063', '53066', '53069', '53070', '53072', '53073', '53074', '53076', '53080', '53081', '53083', '53085', '53089', '53090', '53092', '53094', '53095', '53097', '53098', '53099', '53102', '53103', '53104', '53105', '53108', '53109', '53110', '53114', '53118', '53119', '53120', '53121', '53122', '53125', '53126', '53127', '53128', '53129', '53130', '53132', '53133', '53134', '53135', '53137', '53138', '53139', '53140', '53141', '53142', '53143', '53144', '53146', '53147', '53149', '53150', '53151', '53152', '53153', '53154', '53156', '53158', '53159', '53168', '53177', '53178', '53179', '53181', '53182', '53183', '53184', '53185', '53186', '53187', '53188', '53189', '53190', '53191', '53192', '53193', '53194', '53195', '53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53263', '53267', '53268', '53274', '53278', '53288', '53290', '53293', '53295']
      },
      'Madison Metro': {
        areaCodes: ['608'],
        zipCodes: ['53503', '53511', '53516', '53517', '53518', '53528', '53532', '53536', '53558', '53562', '53566', '53593', '53594', '53597', '53598', '53701', '53702', '53703', '53704', '53705', '53706', '53707', '53708', '53711', '53713', '53714', '53715', '53716', '53717', '53718', '53719', '53726', '53744', '53774', '53777', '53778', '53779', '53782', '53783', '53784', '53785', '53786', '53787', '53788', '53789', '53790', '53792', '53793', '53794']
      },
      'Green Bay Metro': {
        areaCodes: ['920'],
        zipCodes: ['54115', '54124', '54155', '54162', '54166', '54173', '54180', '54301', '54302', '54303', '54304', '54305', '54306', '54307', '54308', '54311', '54313', '54324', '54344']
      },
      'Fox Cities': {
        areaCodes: ['920'],
        zipCodes: ['54911', '54914', '54915', '54919', '54952', '54956', '54957', '54971', '54986', '54990', '54999']
      },
      'Eau Claire': {
        areaCodes: ['715'],
        zipCodes: ['54701', '54702', '54703', '54729', '54734', '54740', '54751', '54757', '54767', '54770']
      },
      'La Crosse': {
        areaCodes: ['608'],
        zipCodes: ['54601', '54602', '54603', '54650', '54656', '54664', '54666', '54667']
      },
      'Wausau': {
        areaCodes: ['715'],
        zipCodes: ['54401', '54403', '54481', '54484', '54494']
      },
      'Janesville-Beloit': {
        areaCodes: ['608'],
        zipCodes: ['53511', '53545', '53548', '53563', '53565', '53583']
      }
    }
  },
  illinois: {
    name: 'Illinois',
    services: ['Radon Mitigation', 'Duct Cleaning/AeroSeal'],
    regions: {
      'Chicago Metro North': {
        areaCodes: ['847', '224'],
        zipCodes: ['60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039', '60040', '60041', '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60049', '60050', '60051', '60053', '60055', '60056', '60060', '60061', '60062', '60064', '60065', '60067', '60068', '60069', '60070', '60071', '60072', '60073', '60074', '60075', '60076', '60077', '60078', '60079', '60081', '60082', '60083', '60084', '60085', '60086', '60087', '60088', '60089', '60090', '60091', '60092', '60093', '60094', '60095', '60096', '60097', '60098', '60099']
      },
      'Chicago Metro West': {
        areaCodes: ['630', '331'],
        zipCodes: ['60101', '60102', '60103', '60104', '60105', '60106', '60107', '60108', '60109', '60110', '60111', '60112', '60116', '60117', '60118', '60119', '60120', '60121', '60122', '60123', '60124', '60125', '60126', '60127', '60128', '60129', '60130', '60131', '60132', '60133', '60134', '60135', '60136', '60137', '60138', '60139', '60140', '60141', '60142', '60143', '60144', '60145', '60146', '60147', '60148', '60149', '60150', '60151', '60152', '60153', '60154', '60155', '60156', '60157', '60159', '60160', '60161', '60162', '60163', '60164', '60165', '60168', '60169', '60170', '60171', '60172', '60173', '60174', '60175', '60176', '60177', '60178', '60179', '60181', '60182', '60183', '60184', '60185', '60186', '60187', '60188', '60189', '60190', '60191', '60192', '60193', '60194', '60195', '60196', '60197', '60199']
      },
      'Chicago Metro South': {
        areaCodes: ['708', '773'],
        zipCodes: ['60401', '60402', '60403', '60404', '60406', '60407', '60408', '60409', '60410', '60411', '60412', '60415', '60416', '60417', '60418', '60419', '60420', '60421', '60422', '60423', '60424', '60425', '60426', '60428', '60429', '60430', '60431', '60432', '60433', '60434', '60435', '60436', '60437', '60438', '60439', '60440', '60441', '60442', '60443', '60444', '60445', '60446', '60447', '60448', '60449', '60450', '60451', '60452', '60453', '60454', '60455', '60456', '60457', '60458', '60459', '60461', '60462', '60463', '60464', '60465', '60466', '60467', '60468', '60469', '60470', '60471', '60472', '60473', '60474', '60475', '60476', '60477', '60478', '60479', '60480', '60481', '60482', '60484', '60487', '60490', '60491', '60501', '60513', '60525', '60526', '60534', '60546', '60558', '60561', '60803', '60804', '60805', '60827']
      },
      'Rockford': {
        areaCodes: ['815'],
        zipCodes: ['61008', '61011', '61012', '61016', '61020', '61024', '61025', '61031', '61032', '61038', '61039', '61044', '61065', '61067', '61073', '61080', '61101', '61102', '61103', '61104', '61105', '61106', '61107', '61108', '61109', '61110', '61111', '61112', '61114', '61115', '61125', '61126', '61130', '61131', '61132']
      }
    }
  },
  minnesota: {
    name: 'Minnesota',
    services: ['Radon Testing', 'Radon Mitigation'],
    regions: {
      'Twin Cities Metro': {
        areaCodes: ['612', '651', '763', '952'],
        zipCodes: ['55001', '55003', '55009', '55014', '55016', '55024', '55025', '55033', '55038', '55042', '55043', '55044', '55055', '55056', '55057', '55068', '55071', '55075', '55076', '55077', '55082', '55090', '55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55109', '55110', '55111', '55112', '55113', '55114', '55115', '55116', '55117', '55118', '55119', '55120', '55121', '55122', '55123', '55124', '55125', '55126', '55127', '55128', '55129', '55130', '55133', '55144', '55150', '55155', '55161', '55164', '55165', '55166', '55168', '55169', '55170', '55171', '55172', '55175', '55177', '55182', '55187', '55188', '55191', '55301', '55302', '55303', '55304', '55305', '55306', '55307', '55308', '55309', '55310', '55311', '55316', '55317', '55318', '55322', '55327', '55328', '55329', '55331', '55337', '55340', '55341', '55343', '55344', '55345', '55346', '55347', '55356', '55357', '55359', '55364', '55369', '55372', '55373', '55374', '55375', '55376', '55378', '55379', '55381', '55382', '55383', '55384', '55385', '55386', '55387', '55388', '55391', '55392', '55393', '55394', '55395', '55396', '55397', '55398', '55401', '55402', '55403', '55404', '55405', '55406', '55407', '55408', '55409', '55410', '55411', '55412', '55413', '55414', '55415', '55416', '55417', '55418', '55419', '55420', '55421', '55422', '55423', '55424', '55425', '55426', '55427', '55428', '55429', '55430', '55431', '55432', '55433', '55434', '55435', '55436', '55437', '55438', '55439', '55440', '55441', '55442', '55443', '55444', '55445', '55446', '55447', '55448', '55449', '55450', '55454', '55455', '55458', '55459', '55467', '55470', '55472', '55473', '55474', '55478', '55479', '55480', '55483', '55484', '55485', '55486', '55487', '55488']
      },
      'Rochester': {
        areaCodes: ['507'],
        zipCodes: ['55901', '55902', '55903', '55904', '55905', '55906', '55909']
      },
      'Duluth': {
        areaCodes: ['218'],
        zipCodes: ['55801', '55802', '55803', '55804', '55805', '55806', '55807', '55808', '55810', '55811', '55812', '55814', '55815', '55816']
      }
    }
  },
  colorado: {
    name: 'Colorado',
    services: ['Radon Testing', 'Radon Mitigation'],
    regions: {
      'Denver Metro': {
        areaCodes: ['303', '720'],
        zipCodes: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027', '80028', '80030', '80031', '80033', '80034', '80035', '80036', '80037', '80038', '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108', '80109', '80110', '80111', '80112', '80113', '80116', '80117', '80118', '80120', '80121', '80122', '80123', '80124', '80125', '80126', '80127', '80128', '80129', '80130', '80131', '80132', '80133', '80134', '80135', '80136', '80137', '80138', '80160', '80161', '80162', '80163', '80164', '80166', '80201', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212', '80214', '80215', '80216', '80218', '80219', '80220', '80221', '80222', '80223', '80224', '80226', '80227', '80228', '80229', '80230', '80231', '80232', '80233', '80234', '80235', '80236', '80237', '80238', '80239', '80246', '80247', '80249', '80260', '80264', '80290', '80293', '80294']
      },
      'Colorado Springs': {
        areaCodes: ['719'],
        zipCodes: ['80809', '80817', '80829', '80831', '80840', '80863', '80901', '80902', '80903', '80904', '80905', '80906', '80907', '80908', '80909', '80910', '80911', '80913', '80914', '80915', '80916', '80917', '80918', '80919', '80920', '80921', '80922', '80923', '80924', '80925', '80926', '80927', '80928', '80929', '80930', '80938', '80939', '80951']
      },
      'Fort Collins': {
        areaCodes: ['970'],
        zipCodes: ['80521', '80524', '80525', '80526', '80528', '80553']
      }
    }
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  startReviewCarousel();
  
  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }
});

function initializeApp() {
  // Check URL for brand and page parameters
  const urlParams = new URLSearchParams(window.location.search);
  const brandParam = urlParams.get('brand');
  const pageParam = urlParams.get('page');
  
  // Handle legacy domain redirects
  const hostname = window.location.hostname;
  if (hostname.includes('americainhome')) {
    currentBrand = 'aih';
    currentPage = 'home';
  } else if (hostname.includes('closetconcepts')) {
    currentBrand = 'closets';
    currentPage = 'home';
  } else if (brandParam) {
    currentBrand = brandParam;
  }
  
  if (pageParam) {
    currentPage = pageParam;
  }
  
  // Update the page based on current brand and page
  updateBrandContent();
  updatePageContent();
  updateFooterSEO();
}

function setupEventListeners() {
  // Brand switching
  document.querySelectorAll('.brand-link').forEach(link => {
    link.addEventListener('click', function() {
      const brand = this.getAttribute('data-brand');
      switchBrand(brand);
    });
  });
  
  // Navigation
  document.querySelectorAll('[data-page]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      navigateToPage(page);
    });
  });
  
  // Dropdown menus
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
        }
      });
      
      dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
      dropdown.classList.remove('active');
    });
    
    // Handle dropdown item clicks
    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        dropdown.classList.remove('active');
      });
    });
  });
  
  // Mobile menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Logo click - go to home
  document.querySelector('.logo').addEventListener('click', function() {
    navigateToPage('home');
  });
  
  // Review controls
  document.querySelector('.review-btn.prev')?.addEventListener('click', function() {
    changeReview(-1);
  });
  
  document.querySelector('.review-btn.next')?.addEventListener('click', function() {
    changeReview(1);
  });
  
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      goToReview(index);
    });
  });
  
  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Form handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Let Netlify handle the form submission
      // Add any custom validation here if needed
    });
  }
  
  // Phone number formatting
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
      }
      this.value = value;
    });
  }
}

function switchBrand(brand) {
  currentBrand = brand;
  currentPage = 'home'; // Reset to home when switching brands
  
  updateBrandContent();
  updatePageContent();
  updateFooterSEO();
  
  // Update URL without page reload
  const url = new URL(window.location);
  url.searchParams.set('brand', brand);
  url.searchParams.delete('page');
  window.history.pushState({}, '', url);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToPage(page) {
  currentPage = page;
  updatePageContent();
  
  // Update URL without page reload
  const url = new URL(window.location);
  if (currentBrand !== 'lifetime') {
    url.searchParams.set('brand', currentBrand);
  }
  if (page !== 'home') {
    url.searchParams.set('page', page);
  } else {
    url.searchParams.delete('page');
  }
  window.history.pushState({}, '', url);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateBrandContent() {
  // Update active brand link
  document.querySelectorAll('.brand-link').forEach(link => {
    link.classList.remove('active');
    link.setAttribute('aria-pressed', 'false');
    if (link.getAttribute('data-brand') === currentBrand) {
      link.classList.add('active');
      link.setAttribute('aria-pressed', 'true');
    }
  });
  
  // Update logo
  const logo = document.getElementById('brand-logo');
  const logoMap = {
    'lifetime': 'LifetimeHomeServicesLogo.png',
    'aih': 'AmericaIn-HomeLogo.png',
    'closets': 'ClosetConceptsLogo.png'
  };
  logo.src = logoMap[currentBrand];
  logo.alt = currentBrand === 'lifetime' ? 'Lifetime Home Services' : 
            currentBrand === 'aih' ? 'America In-Home' : 'Closet Concepts';
  
  // Update hero section
  updateHeroSection();
  
  // Update services
  updateServicesSection();
}

function updateHeroSection() {
  // Hide all hero sections
  document.getElementById('hero-default').style.display = 'none';
  document.getElementById('hero-video-aih').style.display = 'none';
  document.getElementById('hero-video-closets').style.display = 'none';
  
  if (currentPage === 'home') {
    if (currentBrand === 'aih') {
      document.getElementById('hero-video-aih').style.display = 'block';
    } else if (currentBrand === 'closets') {
      document.getElementById('hero-video-closets').style.display = 'block';
    } else {
      document.getElementById('hero-default').style.display = 'block';
      
      // Update hero content for Lifetime
      const heroImage = document.getElementById('hero-image');
      const heroCompanyName = document.getElementById('hero-company-name');
      const heroTagline = document.getElementById('hero-tagline');
      const heroSubtitle = document.getElementById('hero-subtitle');
      
      heroImage.src = 'lifetime-hero-house.jpg';
      heroImage.alt = 'Beautiful home with professional services';
      heroCompanyName.textContent = 'Lifetime Home Services';
      heroTagline.textContent = 'Trusted Solutions. Lifetime Results.';
      heroSubtitle.textContent = 'Expert care for the spaces beneath, around, and within your home';
    }
  }
}

function updateServicesSection() {
  const servicesGrid = document.getElementById('services-grid');
  const services = serviceData[currentBrand] || serviceData.lifetime;
  
  servicesGrid.innerHTML = services.map(service => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="200">
      <img src="${service.image}" alt="${service.title}" class="service-image" loading="lazy">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <ul class="service-features">
        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <button class="cta-button primary" data-page="${service.page}">
        Get Free Estimate
      </button>
    </div>
  `).join('');
  
  // Re-attach event listeners for new buttons
  servicesGrid.querySelectorAll('[data-page]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      navigateToPage(page);
    });
  });
}

function updatePageContent() {
  const mainContent = document.getElementById('main-content');
  
  if (currentPage === 'home') {
    // Show home page content
    showHomePage();
  } else if (currentPage === 'contact') {
    showContactPage();
  } else if (currentPage === 'financing') {
    showFinancingPage();
  } else if (stateData[currentPage]) {
    showStatePage(currentPage);
  } else {
    showServicePage(currentPage);
  }
}

function showHomePage() {
  // Reset to home page layout
  const heroSection = document.getElementById('hero-section');
  const servicesSection = document.getElementById('services-section');
  const reviewsSection = document.querySelector('.reviews-section');
  const contactSection = document.querySelector('.contact-section');
  
  heroSection.style.display = 'block';
  servicesSection.style.display = 'block';
  reviewsSection.style.display = 'block';
  contactSection.style.display = 'block';
  
  // Hide any service page content
  const existingServicePage = document.querySelector('.service-page');
  if (existingServicePage) {
    existingServicePage.remove();
  }
  
  updateHeroSection();
  updateServicesSection();
}

function showServicePage(page) {
  // Hide home page sections
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('services-section').style.display = 'none';
  document.querySelector('.reviews-section').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
  
  // Remove existing service page
  const existingServicePage = document.querySelector('.service-page');
  if (existingServicePage) {
    existingServicePage.remove();
  }
  
  // Create service page content
  const servicePageHTML = getServicePageHTML(page);
  const mainContent = document.getElementById('main-content');
  mainContent.insertAdjacentHTML('beforeend', servicePageHTML);
  
  // Re-attach event listeners
  attachServicePageListeners();
}

function showContactPage() {
  // Hide other sections and show only contact
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('services-section').style.display = 'none';
  document.querySelector('.reviews-section').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'block';
  
  // Remove existing service page
  const existingServicePage = document.querySelector('.service-page');
  if (existingServicePage) {
    existingServicePage.remove();
  }
}

function showFinancingPage() {
  // Hide home page sections
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('services-section').style.display = 'none';
  document.querySelector('.reviews-section').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
  
  // Remove existing service page
  const existingServicePage = document.querySelector('.service-page');
  if (existingServicePage) {
    existingServicePage.remove();
  }
  
  // Create financing page
  const financingHTML = `
    <div class="service-page">
      <div class="page-header">
        <div class="container">
          <h1>Financing Options</h1>
          <p>Flexible financing solutions to make your home improvements affordable</p>
        </div>
      </div>
      
      <div class="page-content">
        <div class="container">
          <div class="content-grid">
            <div class="content-main">
              <h2>Make Your Home Improvements Affordable</h2>
              <p>We understand that home improvements are an investment. That's why we've partnered with Synchrony to offer flexible financing options that fit your budget.</p>
              
              <h3>Synchrony Financing Benefits</h3>
              <ul>
                <li>Quick and easy online application</li>
                <li>Competitive interest rates</li>
                <li>Flexible payment terms</li>
                <li>No prepayment penalties</li>
                <li>Same-day approval decisions</li>
              </ul>
              
              <div class="cta-section">
                <h3>Ready to Get Started?</h3>
                <p>Apply for financing today and start your home improvement project.</p>
                <a href="https://www.synchrony.com/mysynchrony/apply" target="_blank" rel="noopener noreferrer" class="cta-button primary large">
                  Apply for Financing
                </a>
              </div>
            </div>
            
            <div class="content-sidebar">
              <div class="info-box">
                <h4>Financing Options</h4>
                <ul>
                  <li>6 months same as cash</li>
                  <li>12 months same as cash</li>
                  <li>Extended payment plans</li>
                  <li>Low monthly payments</li>
                </ul>
              </div>
              
              <div class="info-box">
                <h4>Quick Application</h4>
                <p>Get approved in minutes with our simple online application process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const mainContent = document.getElementById('main-content');
  mainContent.insertAdjacentHTML('beforeend', financingHTML);
}

function showStatePage(state) {
  // Hide home page sections
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('services-section').style.display = 'none';
  document.querySelector('.reviews-section').style.display = 'none';
  document.querySelector('.contact-section').style.display = 'none';
  
  // Remove existing service page
  const existingServicePage = document.querySelector('.service-page');
  if (existingServicePage) {
    existingServicePage.remove();
  }
  
  const stateInfo = stateData[state];
  const statePageHTML = `
    <div class="state-page">
      <div class="state-background">${stateInfo.name.toUpperCase()}</div>
      <div class="container">
        <div class="state-content">
          <div class="state-header" data-aos="fade-up">
            <h1>${stateInfo.name} Service Areas</h1>
            <p>Professional home services throughout ${stateInfo.name}</p>
          </div>
          
          <div class="state-services" data-aos="fade-up" data-aos-delay="200">
            ${stateInfo.services.map(service => `
              <div class="state-service-card">
                <h3>${service}</h3>
                <p>Professional ${service.toLowerCase()} services available in ${stateInfo.name}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="zip-codes-section" data-aos="fade-up" data-aos-delay="400">
            <h3>Service Areas & Zip Codes</h3>
            ${Object.entries(stateInfo.regions).map(([regionName, regionData]) => `
              <div class="zip-region">
                <h4>${regionName}</h4>
                <p><strong>Area Codes:</strong> ${regionData.areaCodes.join(', ')}</p>
                <div class="zip-codes" id="zip-${regionName.replace(/\s+/g, '-').toLowerCase()}">
                  ${regionData.zipCodes.slice(0, 20).map(zip => `
                    <span class="zip-code">${zip}</span>
                  `).join('')}
                </div>
                ${regionData.zipCodes.length > 20 ? `
                  <button class="expand-btn" onclick="toggleZipCodes('${regionName.replace(/\s+/g, '-').toLowerCase()}', ${JSON.stringify(regionData.zipCodes).replace(/"/g, '&quot;')})">
                    +${regionData.zipCodes.length - 20} more
                  </button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  const mainContent = document.getElementById('main-content');
  mainContent.insertAdjacentHTML('beforeend', statePageHTML);
}

function toggleZipCodes(regionId, allZipCodes) {
  const zipContainer = document.getElementById(`zip-${regionId}`);
  const button = zipContainer.nextElementSibling;
  
  if (button.textContent.includes('+')) {
    // Show all zip codes
    zipContainer.innerHTML = allZipCodes.map(zip => `
      <span class="zip-code">${zip}</span>
    `).join('');
    button.textContent = 'Show less';
  } else {
    // Show only first 20
    zipContainer.innerHTML = allZipCodes.slice(0, 20).map(zip => `
      <span class="zip-code">${zip}</span>
    `).join('');
    button.textContent = `+${allZipCodes.length - 20} more`;
  }
}

function getServicePageHTML(page) {
  const servicePages = {
    'radon-testing': `
      <div class="service-page">
        <div class="page-header">
          <div class="container">
            <h1>Professional Radon Testing</h1>
            <p>Accurate radon testing to protect your family's health</p>
          </div>
        </div>
        
        <div class="page-content">
          <div class="container">
            <div class="content-grid">
              <div class="content-main">
                <h2>Why Test for Radon?</h2>
                <p>Radon is a colorless, odorless radioactive gas that can accumulate in homes and buildings. It's the second leading cause of lung cancer in the United States, responsible for about 21,000 deaths annually according to the EPA.</p>
                
                <h3>Our Testing Process</h3>
                <p>We use EPA-approved testing methods to provide accurate, reliable results. Our certified technicians follow strict protocols to ensure the most accurate readings possible.</p>
                
                <h3>Testing Methods</h3>
                <ul>
                  <li><strong>Short-term testing (2-7 days):</strong> Quick results for immediate assessment</li>
                  <li><strong>Long-term testing (90+ days):</strong> More accurate average radon levels</li>
                  <li><strong>Continuous monitoring:</strong> Real-time radon level tracking</li>
                </ul>
                
                <h3>What to Expect</h3>
                <p>Our testing process is simple and non-invasive. We'll place testing devices in the lowest livable level of your home, typically in basements or first floors. Results are typically available within 48-72 hours of test completion.</p>
                
                <div class="cta-section">
                  <h3>Schedule Your Radon Test</h3>
                  <p>Protect your family with professional radon testing. Contact us today to schedule your test.</p>
                  <button class="cta-button primary large" data-page="contact">
                    Schedule Test
                  </button>
                </div>
              </div>
              
              <div class="content-sidebar">
                <div class="info-box">
                  <h4>EPA Action Level</h4>
                  <p>The EPA recommends taking action if radon levels are 4 pCi/L or higher. However, any level of radon poses some risk.</p>
                </div>
                
                <div class="info-box">
                  <h4>Testing Benefits</h4>
                  <ul>
                    <li>Peace of mind</li>
                    <li>Protect family health</li>
                    <li>Required for some home sales</li>
                    <li>Identify need for mitigation</li>
                  </ul>
                </div>
                
                <div class="info-box">
                  <h4>Trusted Resources</h4>
                  <ul>
                    <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA - A Citizen's Guide to Radon</a></li>
                    <li><a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer">EPA - Radon: Health Risks</a></li>
                    <li><a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer">CDC - Radon Information Page</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    'radon-mitigation': `
      <div class="service-page">
        <div class="page-header">
          <div class="container">
            <h1>Radon Mitigation Systems</h1>
            <p>Professional radon mitigation to reduce dangerous radon levels in your home</p>
          </div>
        </div>
        
        <div class="page-content">
          <div class="container">
            <div class="content-grid">
              <div class="content-main">
                <h2>Professional Radon Mitigation</h2>
                <p>If your home has elevated radon levels, our certified mitigation specialists can design and install a custom system to reduce radon to safe levels. We use industry-leading techniques and equipment to ensure effective, long-lasting results.</p>
                
                <h3>Mitigation System Types</h3>
                
                <h4>Sub-Slab Depressurization (Most Common)</h4>
                <p>The most effective method for homes with basements or slab-on-grade foundations. A pipe is installed through the foundation to draw radon from beneath the home and vent it safely outside.</p>
                
                <h4>Drain Tile System</h4>
                <p>Utilizes existing perimeter drain system for radon removal. Effective for homes with existing drain tile around the foundation.</p>
                
                <h4>Crawl Space Encapsulation</h4>
                <p>For homes with crawl spaces, we seal and ventilate the space to prevent radon entry and ensure proper air circulation.</p>
                
                <h3>Festa Radon Fans - Industry Leading</h3>
                <p>We exclusively use <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a> fans, the industry leader in radon mitigation equipment.</p>
                
                <h3>Our Installation Process</h3>
                <ol>
                  <li><strong>Comprehensive Home Evaluation:</strong> We assess your home's foundation and design the perfect solution</li>
                  <li><strong>Custom System Design:</strong> Every system is custom-designed for your specific home</li>
                  <li><strong>Professional Installation:</strong> Our certified technicians install your system with minimal disruption</li>
                  <li><strong>Post-Installation Testing:</strong> We test the system to ensure it's working properly</li>
                  <li><strong>System Performance Verification:</strong> Follow-up testing confirms radon levels are below EPA action levels</li>
                </ol>
                
                <div class="cta-section">
                  <h3>Need Radon Mitigation?</h3>
                  <p>Contact us for a free consultation and estimate. Protect your family with professional radon mitigation.</p>
                  <button class="cta-button primary large" data-page="contact">
                    Get Free Estimate
                  </button>
                </div>
              </div>
              
              <div class="content-sidebar">
                <div class="info-box">
                  <h4>System Benefits</h4>
                  <ul>
                    <li>Reduces radon levels by 90%+</li>
                    <li>Professional installation</li>
                    <li>Quiet operation</li>
                    <li>Energy efficient</li>
                    <li>Increases home value</li>
                    <li>Protects family health</li>
                  </ul>
                </div>
                
                <div class="info-box">
                  <h4>Quality Guarantee</h4>
                  <p>We guarantee our mitigation systems will reduce radon levels below 4 pCi/L or we'll modify the system at no additional cost.</p>
                </div>
                
                <div class="info-box">
                  <h4>Trusted Resources</h4>
                  <ul>
                    <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA - A Citizen's Guide to Radon</a></li>
                    <li><a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a></li>
                    <li><a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer">Wisconsin DHS - Radon Program</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    'duct-cleaning': `
      <div class="service-page">
        <div class="page-header">
          <div class="container">
            <h1>Duct Cleaning & AeroSeal Services</h1>
            <p>Professional duct cleaning and sealing for improved air quality and energy efficiency</p>
          </div>
        </div>
        
        <div class="page-content">
          <div class="container">
            <div class="content-grid">
              <div class="content-main">
                <h2>Professional Duct Cleaning & AeroSeal</h2>
                <p>Improve your home's air quality and energy efficiency with our comprehensive duct cleaning and AeroSeal duct sealing services.</p>
                
                <h3>AeroSeal Duct Sealing</h3>
                <p>AeroSeal is a revolutionary duct sealing technology that seals leaks from the inside out. This patented process can seal up to 90% of duct leaks, dramatically improving your home's energy efficiency and comfort.</p>
                
                <div class="video-container" style="margin: 30px 0;">
                  <iframe
                    src="https://www.youtube.com/embed/K3JAR0dCNhc?rel=0&modestbranding=1"
                    title="AeroSeal Duct Sealing Process"
                    style="width: 100%; height: 400px; border-radius: 10px;"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </div>
                
                <h3>How AeroSeal Works</h3>
                <ol>
                  <li><strong>System Preparation:</strong> We prepare your duct system and measure existing leakage</li>
                  <li><strong>Sealant Application:</strong> Safe, non-toxic sealant is blown through your ducts</li>
                  <li><strong>Automatic Sealing:</strong> Sealant finds and seals leaks automatically</li>
                  <li><strong>Verification:</strong> Computer monitoring shows real-time sealing progress</li>
                </ol>
                
                <h3>Benefits of AeroSeal</h3>
                <ul>
                  <li>Reduce energy costs by up to 30%</li>
                  <li>Improve indoor air quality</li>
                  <li>Enhance comfort throughout your home</li>
                  <li>Extend HVAC system life</li>
                  <li>Reduce dust and allergens</li>
                </ul>
                
                <div class="cta-section">
                  <h3>Improve Your Home's Efficiency</h3>
                  <p>Contact us for a free consultation and see how AeroSeal can improve your home's comfort and efficiency.</p>
                  <button class="cta-button primary large" data-page="contact">
                    Get Free Estimate
                  </button>
                </div>
              </div>
              
              <div class="content-sidebar">
                <div class="info-box">
                  <h4>AeroSeal Benefits</h4>
                  <ul>
                    <li>Seals up to 90% of duct leaks</li>
                    <li>Reduces energy costs</li>
                    <li>Improves air quality</li>
                    <li>Non-toxic and safe</li>
                    <li>Computer-verified results</li>
                  </ul>
                </div>
                
                <div class="info-box">
                  <h4>Why Choose AeroSeal?</h4>
                  <p>AeroSeal is the only duct sealing technology that can seal leaks from the inside out, reaching areas that traditional methods cannot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    'floor-coatings': `
      <div class="service-page">
        <div class="page-header">
          <div class="container">
            <h1>Concrete Floor Coatings</h1>
            <p>Durable Torginol floor coating systems for garages and basements</p>
          </div>
        </div>
        
        <div class="page-content">
          <div class="container">
            <div class="content-grid">
              <div class="content-main">
                <h2>Premium Torginol Floor Coatings</h2>
                <p>Transform your garage or basement floors with our premium Torginol coating systems. These industrial-grade coatings provide superior durability, chemical resistance, and aesthetic appeal.</p>
                
                <h3>Why Choose Torginol?</h3>
                <p>Torginol is a premium polyurea coating system that offers superior performance compared to traditional epoxy coatings. It's more flexible, more durable, and provides better chemical resistance.</p>
                
                <h3>System Benefits</h3>
                <ul>
                  <li><strong>Lifetime Warranty:</strong> We stand behind our work with a comprehensive warranty</li>
                  <li><strong>Chemical Resistant:</strong> Resists oil, gas, salt, and other automotive chemicals</li>
                  <li><strong>Easy Maintenance:</strong> Simple cleaning with soap and water</li>
                  <li><strong>Slip Resistant:</strong> Textured finish provides excellent traction</li>
                  <li><strong>UV Stable:</strong> Won't yellow or fade over time</li>
                  <li><strong>Fast Installation:</strong> Most projects completed in one day</li>
                </ul>
                
                <h3>Our Installation Process</h3>
                <ol>
                  <li><strong>Surface Preparation:</strong> Diamond grinding to ensure proper adhesion</li>
                  <li><strong>Crack Repair:</strong> Fill and seal any existing cracks</li>
                  <li><strong>Base Coat Application:</strong> Apply primer and base coat</li>
                  <li><strong>Decorative Flakes:</strong> Broadcast decorative color flakes</li>
                  <li><strong>Top Coat:</strong> Apply clear protective top coat</li>
                </ol>
                
                <h3>Color Options</h3>
                <p>Choose from a wide variety of base colors and decorative flake combinations to create a custom look that complements your home.</p>
                
                <div class="cta-section">
                  <h3>Ready to Transform Your Floors?</h3>
                  <p>Contact us for a free estimate and see how Torginol can transform your garage or basement.</p>
                  <button class="cta-button primary large" data-page="contact">
                    Get Free Estimate
                  </button>
                </div>
              </div>
              
              <div class="content-sidebar">
                <div class="info-box">
                  <h4>Torginol vs. Epoxy</h4>
                  <ul>
                    <li>4x more flexible</li>
                    <li>Better chemical resistance</li>
                    <li>UV stable (won't yellow)</li>
                    <li>Faster installation</li>
                    <li>Longer lasting</li>
                  </ul>
                </div>
                
                <div class="info-box">
                  <h4>Perfect For</h4>
                  <ul>
                    <li>Garage floors</li>
                    <li>Basement floors</li>
                    <li>Workshop areas</li>
                    <li>Commercial spaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  };
  
  return servicePages[page] || '<div class="service-page"><div class="container"><h1>Page Not Found</h1></div></div>';
}

function attachServicePageListeners() {
  // Re-attach event listeners for service page buttons
  document.querySelectorAll('[data-page]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      navigateToPage(page);
    });
  });
}

function updateFooterSEO() {
  const footerSEOText = document.getElementById('footer-seo-text');
  if (footerSEOText) {
    let seoText = '';
    if (currentBrand === 'aih') {
      seoText = 'formerly americainhome.com';
    } else if (currentBrand === 'closets') {
      seoText = 'formerly closetconcepts.com';
    }
    footerSEOText.textContent = seoText;
  }
}

// Review carousel functions
function startReviewCarousel() {
  reviewInterval = setInterval(() => {
    changeReview(1);
  }, 5000);
}

function changeReview(direction) {
  const reviews = document.querySelectorAll('.review-card');
  const indicators = document.querySelectorAll('.indicator');
  
  if (reviews.length === 0) return;
  
  // Remove active class from current review
  reviews[currentReviewIndex].classList.remove('active');
  indicators[currentReviewIndex].classList.remove('active');
  
  // Calculate new index
  currentReviewIndex += direction;
  if (currentReviewIndex >= reviews.length) {
    currentReviewIndex = 0;
  } else if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1;
  }
  
  // Add active class to new review
  reviews[currentReviewIndex].classList.add('active');
  indicators[currentReviewIndex].classList.add('active');
  
  // Reset interval
  clearInterval(reviewInterval);
  startReviewCarousel();
}

function goToReview(index) {
  const reviews = document.querySelectorAll('.review-card');
  const indicators = document.querySelectorAll('.indicator');
  
  if (reviews.length === 0) return;
  
  // Remove active class from current review
  reviews[currentReviewIndex].classList.remove('active');
  indicators[currentReviewIndex].classList.remove('active');
  
  // Set new index
  currentReviewIndex = index;
  
  // Add active class to new review
  reviews[currentReviewIndex].classList.add('active');
  indicators[currentReviewIndex].classList.add('active');
  
  // Reset interval
  clearInterval(reviewInterval);
  startReviewCarousel();
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
  const urlParams = new URLSearchParams(window.location.search);
  const brandParam = urlParams.get('brand') || 'lifetime';
  const pageParam = urlParams.get('page') || 'home';
  
  currentBrand = brandParam;
  currentPage = pageParam;
  
  updateBrandContent();
  updatePageContent();
  updateFooterSEO();
});

// Expose functions to global scope for onclick handlers
window.toggleZipCodes = toggleZipCodes;

