import { useState } from 'react';
import { Phone, Shield, Layers, Zap, Wrench, MapPin, ChevronDown, CheckCircle, Star, Award, Home } from 'lucide-react';

// Enhanced Wisconsin Page with Full SEO Coverage
export function WisconsinPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand, MultiBrandHeader, ProfessionalFooter }) {
  const [serviceAreasExpanded, setServiceAreasExpanded] = useState(false);

  const wisconsinServiceAreas = {
    "Milwaukee Metro": {
      description: "Complete home services throughout Greater Milwaukee",
      zipCodes: ["53201", "53202", "53203", "53204", "53205", "53206", "53207", "53208", "53209", "53210", "53211", "53212", "53213", "53214", "53215", "53216", "53217", "53218", "53219", "53220", "53221", "53222", "53223", "53224", "53225", "53226", "53227", "53228", "53233", "53234", "53235"],
      areaCodes: ["414", "262"]
    },
    "Madison Metro": {
      description: "Professional services in Wisconsin's capital region",
      zipCodes: ["53701", "53702", "53703", "53704", "53705", "53706", "53707", "53708", "53711", "53713", "53714", "53715", "53716", "53717", "53718", "53719", "53726", "53744", "53777", "53778", "53779", "53782", "53783", "53784", "53785", "53786", "53787", "53788", "53789", "53790", "53791", "53792", "53793", "53794"],
      areaCodes: ["608"]
    },
    "Green Bay Metro": {
      description: "Serving Northeast Wisconsin's largest metropolitan area",
      zipCodes: ["54301", "54302", "54303", "54304", "54305", "54306", "54307", "54308", "54311", "54313", "54324", "54344"],
      areaCodes: ["920"]
    },
    "Kenosha-Racine": {
      description: "Southeast Wisconsin corridor services",
      zipCodes: ["53140", "53141", "53142", "53143", "53144", "53158", "53177", "53179", "53181", "53182", "53183", "53184", "53185", "53186", "53187", "53188", "53189", "53190", "53191", "53192", "53193", "53194", "53402", "53403", "53404", "53405", "53406", "53407", "53408"],
      areaCodes: ["262"]
    },
    "Fox Cities": {
      description: "Appleton, Neenah, Menasha, and surrounding communities",
      zipCodes: ["54911", "54912", "54913", "54914", "54915", "54919", "54952", "54956", "54957", "54986", "54990"],
      areaCodes: ["920"]
    },
    "Eau Claire Region": {
      description: "Western Wisconsin's hub for professional home services",
      zipCodes: ["54701", "54702", "54703", "54729", "54751", "54757", "54767", "54770"],
      areaCodes: ["715"]
    },
    "Wausau-Stevens Point": {
      description: "Central Wisconsin professional services",
      zipCodes: ["54401", "54403", "54481", "54482", "54494", "54495", "54481", "54449", "54467", "54474", "54481"],
      areaCodes: ["715"]
    },
    "La Crosse Region": {
      description: "Mississippi River valley professional services",
      zipCodes: ["54601", "54602", "54603", "54650", "54656", "54660", "54664", "54666"],
      areaCodes: ["608"]
    }
  };

  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="wisconsin"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      {/* Premium State Hero */}
      <section className="state-page-hero">
        <div className="container">
          <h1>Professional Home Services Throughout Wisconsin</h1>
          <p>
            Wisconsin's premier home services provider offering complete solutions from Milwaukee to Madison, Green Bay to La Crosse. 
            We serve over 200 communities across Wisconsin with professional radon testing & mitigation, premium concrete floor coatings, 
            HVAC services, AeroSeal duct sealing, handyman services, and electrical work. Licensed, insured, and committed to excellence 
            in every Wisconsin community we serve.
          </p>
          
          <div className="wisconsin-services">
            <h2>Complete Home Services Available Throughout Wisconsin</h2>
            <div className="service-grid">
              <div className="service-item" onClick={() => setCurrentPage('radon-testing')}>
                <Shield size={48} />
                <h3>FREE Radon Testing</h3>
                <p>Professional radon testing available in all Wisconsin counties - completely free with no obligation</p>
              </div>
              <div className="service-item" onClick={() => setCurrentPage('radon-mitigation')}>
                <Shield size={48} />
                <h3>Radon Mitigation Systems</h3>
                <p>EPA-certified radon mitigation with guaranteed results below 4.0 pCi/L throughout Wisconsin</p>
              </div>
              <div className="service-item" onClick={() => setCurrentPage('concrete')}>
                <Layers size={48} />
                <h3>Premium Floor Coatings</h3>
                <p>Professional Torginol concrete coatings with lifetime warranty - Wisconsin's premier floor coating service</p>
              </div>
              <div className="service-item" onClick={() => setCurrentPage('hvac')}>
                <Zap size={48} />
                <h3>HVAC & AeroSeal Services</h3>
                <p>Complete heating, cooling, duct cleaning, and revolutionary AeroSeal duct sealing throughout Wisconsin</p>
              </div>
              <div className="service-item">
                <Wrench size={48} />
                <h3>Professional Handyman</h3>
                <p>Licensed handyman services for all your home improvement and repair needs across Wisconsin</p>
              </div>
              <div className="service-item">
                <Zap size={48} />
                <h3>Licensed Electrical</h3>
                <p>Professional electrical services and installations by licensed electricians throughout Wisconsin</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <Award size={32} />
              <h4>EPA Certified</h4>
              <p>Certified radon professionals</p>
            </div>
            <div className="trust-item">
              <Shield size={32} />
              <h4>Licensed & Insured</h4>
              <p>Full licensing and insurance coverage</p>
            </div>
            <div className="trust-item">
              <Star size={32} />
              <h4>5-Star Rated</h4>
              <p>Consistently excellent customer reviews</p>
            </div>
            <div className="trust-item">
              <CheckCircle size={32} />
              <h4>Lifetime Warranties</h4>
              <p>Comprehensive warranty protection</p>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Get Started in Wisconsin?</h2>
            <p>Contact Wisconsin's premier home services company for professional solutions throughout the state</p>
            <div className="cta-buttons">
              <button onClick={handlePhoneClick} className="btn-primary-large">
                <Phone size={24} />
                Call (262) 955-5701
              </button>
              <button onClick={openContactForm} className="btn-secondary-large">
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Areas Section with SEO Optimization */}
      <section className="service-areas-expandable">
        <div className="container">
          <h2>Our Wisconsin Service Areas</h2>
          <p>We proudly serve communities throughout Wisconsin with professional home services. Click below to see our complete coverage areas including zip codes and area codes for optimal service coordination.</p>
          
          <button 
            className={`areas-toggle-btn ${serviceAreasExpanded ? 'expanded' : ''}`}
            onClick={() => setServiceAreasExpanded(!serviceAreasExpanded)}
          >
            <MapPin size={20} />
            {serviceAreasExpanded ? 'Hide Service Areas' : 'Explore Our Wisconsin Service Areas'}
            <ChevronDown size={20} />
          </button>

          <div className={`areas-content ${serviceAreasExpanded ? 'expanded' : ''}`}>
            <div className="areas-grid">
              {Object.entries(wisconsinServiceAreas).map(([region, data]) => (
                <div key={region} className="area-item">
                  <h4>{region}</h4>
                  <p>{data.description}</p>
                  <div className="area-codes-section">
                    <strong>Area Codes:</strong>
                    <div className="area-codes">
                      {data.areaCodes.map(code => (
                        <span key={code} className="area-code">({code})</span>
                      ))}
                    </div>
                  </div>
                  <div className="zip-codes-section">
                    <strong>Zip Codes Served:</strong>
                    <div className="zip-codes">
                      {data.zipCodes.map(zip => (
                        <span key={zip} className="zip-code">{zip}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Wisconsin Cities for SEO */}
            <div className="additional-cities">
              <h3>Additional Wisconsin Communities We Serve</h3>
              <div className="cities-grid">
                <div className="city-group">
                  <h4>Southeast Wisconsin</h4>
                  <p>Brookfield, Wauwatosa, West Allis, Greenfield, Franklin, Oak Creek, Cudahy, South Milwaukee, St. Francis, Shorewood, Whitefish Bay, Glendale, Brown Deer, Mequon, Germantown, Menomonee Falls, Pewaukee, Delafield, Hartland, Sussex, Mukwonago, Burlington, Elkhorn, Lake Geneva, Delavan, Whitewater</p>
                </div>
                <div className="city-group">
                  <h4>South Central Wisconsin</h4>
                  <p>Middleton, Fitchburg, Verona, Sun Prairie, Waunakee, DeForest, Stoughton, Oregon, McFarland, Cottage Grove, Monona, Shorewood Hills, Cross Plains, Mount Horeb, New Glarus, Belleville, Edgerton, Evansville, Janesville, Beloit, Monroe, Platteville, Dodgeville</p>
                </div>
                <div className="city-group">
                  <h4>Northeast Wisconsin</h4>
                  <p>De Pere, Ashwaubenon, Allouez, Bellevue, Howard, Suamico, Pulaski, Seymour, Denmark, Luxemburg, Kewaunee, Algoma, Sturgeon Bay, Manitowoc, Two Rivers, Sheboygan, Plymouth, Kohler, Oostburg, Cedar Grove, Belgium, Port Washington, Grafton, Cedarburg</p>
                </div>
                <div className="city-group">
                  <h4>Fox Valley Region</h4>
                  <p>Neenah, Menasha, Kaukauna, Little Chute, Kimberly, Combined Locks, Freedom, Greenville, Hortonville, New London, Waupaca, Clintonville, Shawano, Bonduel, Weyauwega, Fremont, Winneconne, Omro, Oshkosh, Ripon, Berlin, Green Lake, Markesan, Princeton, Montello</p>
                </div>
                <div className="city-group">
                  <h4>Western Wisconsin</h4>
                  <p>Altoona, Chippewa Falls, Menomonie, River Falls, Hudson, New Richmond, Baldwin, Ellsworth, Prescott, Durand, Mondovi, Arcadia, Independence, Whitehall, Blair, Osseo, Augusta, Fall Creek, Cadott, Stanley, Thorp, Owen, Withee, Colby, Abbotsford</p>
                </div>
                <div className="city-group">
                  <h4>Central Wisconsin</h4>
                  <p>Stevens Point, Plover, Wisconsin Rapids, Marshfield, Nekoosa, Port Edwards, Pittsville, Babcock, Necedah, Friendship, Adams, Oxford, Westfield, Montello, Pardeeville, Portage, Baraboo, Wisconsin Dells, Lake Delton, Reedsburg, Mauston, Tomah, Sparta, Viroqua, Richland Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// Enhanced Illinois Page - HVAC & AeroSeal Focus
export function IllinoisPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand, MultiBrandHeader, ProfessionalFooter }) {
  const [serviceAreasExpanded, setServiceAreasExpanded] = useState(false);

  const illinoisServiceAreas = {
    "Chicago Metro North": {
      description: "HVAC and AeroSeal services throughout North Chicago suburbs",
      zipCodes: ["60004", "60005", "60006", "60007", "60008", "60009", "60010", "60011", "60012", "60013", "60014", "60015", "60016", "60017", "60018", "60019", "60020", "60021", "60022", "60025", "60026", "60029", "60030", "60031", "60033", "60034", "60035", "60037", "60038", "60039", "60040", "60041", "60042", "60043", "60044", "60045", "60046", "60047", "60048", "60049", "60050", "60051", "60053", "60055", "60056", "60060", "60061", "60062", "60064", "60065", "60067", "60068", "60069", "60070", "60071", "60072", "60073", "60074", "60075", "60076", "60077", "60078", "60081", "60082", "60083", "60084", "60085", "60087", "60088", "60089", "60090", "60091", "60092", "60093", "60094", "60095", "60096", "60097", "60098", "60099"],
      areaCodes: ["847", "224"]
    },
    "Chicago Metro West": {
      description: "Professional HVAC services in Western Chicago suburbs",
      zipCodes: ["60101", "60102", "60103", "60104", "60105", "60106", "60107", "60108", "60109", "60110", "60111", "60112", "60113", "60115", "60116", "60117", "60118", "60119", "60120", "60121", "60122", "60123", "60124", "60125", "60126", "60127", "60128", "60129", "60130", "60131", "60132", "60133", "60134", "60135", "60136", "60137", "60138", "60139", "60140", "60141", "60142", "60143", "60144", "60145", "60146", "60147", "60148", "60149", "60150", "60151", "60152", "60153", "60154", "60155", "60156", "60157", "60159", "60160", "60161", "60162", "60163", "60164", "60165", "60168", "60169", "60170", "60171", "60172", "60173", "60174", "60175", "60176", "60177", "60178", "60179", "60180", "60181", "60182", "60183", "60184", "60185", "60186", "60187", "60188", "60189", "60190", "60191", "60192", "60193", "60194", "60195", "60196", "60197", "60199"],
      areaCodes: ["630", "331"]
    },
    "Chicago Metro South": {
      description: "HVAC and duct sealing services in South Chicago suburbs",
      zipCodes: ["60401", "60402", "60403", "60404", "60406", "60407", "60408", "60409", "60410", "60411", "60412", "60415", "60416", "60417", "60418", "60419", "60420", "60421", "60422", "60423", "60424", "60425", "60426", "60428", "60429", "60430", "60431", "60432", "60433", "60434", "60435", "60436", "60437", "60438", "60439", "60440", "60441", "60442", "60443", "60444", "60445", "60446", "60447", "60448", "60449", "60450", "60451", "60452", "60453", "60454", "60455", "60456", "60457", "60458", "60459", "60461", "60462", "60463", "60464", "60465", "60466", "60467", "60468", "60469", "60470", "60471", "60472", "60473", "60474", "60475", "60476", "60477", "60478", "60479", "60480", "60481", "60482", "60484", "60487", "60490", "60491", "60501", "60502", "60503", "60504", "60505", "60506", "60513", "60514", "60515", "60516", "60517", "60521", "60522", "60523", "60525", "60526", "60527", "60532", "60534", "60540", "60541", "60542", "60543", "60544", "60545", "60546", "60548", "60549", "60550", "60551", "60552", "60553", "60554", "60555", "60558", "60559", "60560", "60561", "60563", "60564", "60565", "60566", "60567", "60568", "60570", "60572", "60585", "60586", "60598"],
      areaCodes: ["708", "630", "331"]
    },
    "Rockford Region": {
      description: "Northern Illinois HVAC services",
      zipCodes: ["61001", "61006", "61007", "61008", "61010", "61011", "61012", "61013", "61014", "61015", "61016", "61018", "61019", "61020", "61021", "61024", "61025", "61027", "61028", "61030", "61031", "61032", "61036", "61037", "61038", "61039", "61041", "61042", "61043", "61044", "61046", "61047", "61048", "61049", "61050", "61051", "61052", "61053", "61054", "61057", "61060", "61061", "61062", "61063", "61064", "61065", "61067", "61068", "61070", "61071", "61072", "61073", "61074", "61075", "61077", "61078", "61079", "61080", "61081", "61084", "61085", "61087", "61088", "61089", "61091", "61102", "61103", "61104", "61105", "61106", "61107", "61108", "61109", "61110", "61111", "61112", "61114", "61115", "61125", "61126", "61130", "61131", "61132"],
      areaCodes: ["815", "779"]
    }
  };

  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="illinois"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      <section className="state-page-hero">
        <div className="container">
          <h1>Professional HVAC & AeroSeal Services Throughout Illinois</h1>
          <p>
            Illinois homeowners trust us for professional HVAC services and revolutionary AeroSeal duct sealing technology. 
            Serving the greater Chicago metropolitan area and Northern Illinois with 24/7 emergency HVAC service, 
            professional duct cleaning, energy-efficient system installations, and the most advanced duct sealing technology available. 
            Licensed HVAC contractors with over 25 years of experience serving Illinois communities.
          </p>
          
          <div className="illinois-services">
            <h2>HVAC & AeroSeal Services Available Throughout Illinois</h2>
            <div className="service-grid">
              <div className="service-item" onClick={() => setCurrentPage('hvac')}>
                <Zap size={48} />
                <h3>24/7 Emergency HVAC</h3>
                <p>Round-the-clock heating and cooling emergency services throughout Illinois</p>
              </div>
              <div className="service-item" onClick={() => setCurrentPage('hvac')}>
                <Zap size={48} />
                <h3>AeroSeal Duct Sealing</h3>
                <p>Revolutionary duct sealing technology - up to 30% energy savings guaranteed</p>
              </div>
              <div className="service-item">
                <Zap size={48} />
                <h3>Professional Duct Cleaning</h3>
                <p>Complete duct system cleaning for improved air quality and HVAC efficiency</p>
              </div>
              <div className="service-item">
                <Zap size={48} />
                <h3>System Installation</h3>
                <p>High-efficiency furnace and air conditioning system installation and replacement</p>
              </div>
              <div className="service-item">
                <Zap size={48} />
                <h3>Preventive Maintenance</h3>
                <p>Comprehensive HVAC maintenance programs to keep your system running efficiently</p>
              </div>
              <div className="service-item">
                <Zap size={48} />
                <h3>Energy Efficiency Upgrades</h3>
                <p>Smart thermostats, zoning systems, and efficiency improvements for Illinois homes</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Need HVAC Service in Illinois?</h2>
            <p>Contact Illinois's trusted HVAC professionals for emergency service, installations, and AeroSeal duct sealing</p>
            <div className="cta-buttons">
              <button onClick={handlePhoneClick} className="btn-primary-large">
                <Phone size={24} />
                Call (262) 955-5701
              </button>
              <button onClick={openContactForm} className="btn-secondary-large">
                Schedule Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Illinois Service Areas */}
      <section className="service-areas-expandable">
        <div className="container">
          <h2>Our Illinois HVAC Service Areas</h2>
          <p>Professional HVAC and AeroSeal services throughout the Chicago metropolitan area and Northern Illinois. Click below to see our complete coverage areas.</p>
          
          <button 
            className={`areas-toggle-btn ${serviceAreasExpanded ? 'expanded' : ''}`}
            onClick={() => setServiceAreasExpanded(!serviceAreasExpanded)}
          >
            <MapPin size={20} />
            {serviceAreasExpanded ? 'Hide Service Areas' : 'Explore Our Illinois Service Areas'}
            <ChevronDown size={20} />
          </button>

          <div className={`areas-content ${serviceAreasExpanded ? 'expanded' : ''}`}>
            <div className="areas-grid">
              {Object.entries(illinoisServiceAreas).map(([region, data]) => (
                <div key={region} className="area-item">
                  <h4>{region}</h4>
                  <p>{data.description}</p>
                  <div className="area-codes-section">
                    <strong>Area Codes:</strong>
                    <div className="area-codes">
                      {data.areaCodes.map(code => (
                        <span key={code} className="area-code">({code})</span>
                      ))}
                    </div>
                  </div>
                  <div className="zip-codes-section">
                    <strong>Zip Codes Served:</strong>
                    <div className="zip-codes">
                      {data.zipCodes.slice(0, 20).map(zip => (
                        <span key={zip} className="zip-code">{zip}</span>
                      ))}
                      {data.zipCodes.length > 20 && (
                        <span className="zip-code-more">+{data.zipCodes.length - 20} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// Enhanced Minnesota Page - Radon Testing Focus
export function MinnesotaPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand, MultiBrandHeader, ProfessionalFooter }) {
  const [serviceAreasExpanded, setServiceAreasExpanded] = useState(false);

  const minnesotaServiceAreas = {
    "Twin Cities Metro": {
      description: "FREE radon testing throughout Minneapolis-St. Paul metropolitan area",
      zipCodes: ["55001", "55003", "55009", "55014", "55016", "55024", "55025", "55033", "55038", "55040", "55041", "55042", "55043", "55044", "55055", "55068", "55069", "55070", "55071", "55075", "55076", "55077", "55082", "55090", "55101", "55102", "55103", "55104", "55105", "55106", "55107", "55108", "55109", "55110", "55111", "55112", "55113", "55114", "55115", "55116", "55117", "55118", "55119", "55120", "55121", "55122", "55123", "55124", "55125", "55126", "55127", "55128", "55129", "55130", "55133", "55144", "55150", "55155", "55161", "55164", "55165", "55166", "55168", "55169", "55170", "55171", "55172", "55175", "55177", "55182", "55187", "55188", "55191", "55301", "55302", "55303", "55304", "55305", "55306", "55307", "55308", "55309", "55310", "55311", "55312", "55313", "55316", "55317", "55318", "55319", "55320", "55321", "55322", "55323", "55324", "55325", "55327", "55328", "55329", "55330", "55331", "55332", "55333", "55334", "55335", "55336", "55337", "55338", "55339", "55340", "55341", "55342", "55343", "55344", "55345", "55346", "55347", "55348", "55349", "55350", "55352", "55353", "55354", "55355", "55356", "55357", "55358", "55359", "55360", "55361", "55362", "55363", "55364", "55369", "55372", "55373", "55374", "55375", "55376", "55378", "55379", "55381", "55382", "55383", "55384", "55385", "55386", "55387", "55388", "55391", "55392", "55393", "55394", "55395", "55396", "55397", "55398", "55401", "55402", "55403", "55404", "55405", "55406", "55407", "55408", "55409", "55410", "55411", "55412", "55413", "55414", "55415", "55416", "55417", "55418", "55419", "55420", "55421", "55422", "55423", "55424", "55425", "55426", "55427", "55428", "55429", "55430", "55431", "55432", "55433", "55434", "55435", "55436", "55437", "55438", "55439", "55440", "55441", "55442", "55443", "55444", "55445", "55446", "55447", "55448", "55449", "55450", "55454", "55455", "55458", "55459", "55460", "55467", "55470", "55472", "55473", "55474", "55478", "55479", "55480", "55483", "55484", "55485", "55486", "55487", "55488"],
      areaCodes: ["612", "651", "763", "952"]
    },
    "Duluth-Superior": {
      description: "Northeastern Minnesota radon testing services",
      zipCodes: ["55701", "55702", "55703", "55704", "55705", "55706", "55707", "55708", "55709", "55710", "55711", "55712", "55718", "55719", "55720", "55721", "55723", "55724", "55725", "55726", "55731", "55732", "55733", "55734", "55735", "55736", "55738", "55741", "55742", "55744", "55746", "55747", "55748", "55749", "55750", "55751", "55752", "55753", "55756", "55757", "55758", "55760", "55763", "55764", "55765", "55766", "55767", "55768", "55769", "55771", "55772", "55775", "55779", "55780", "55781", "55782", "55783", "55785", "55786", "55787", "55790", "55792", "55793", "55795", "55797", "55798", "55802", "55803", "55804", "55805", "55806", "55807", "55808", "55810", "55811", "55812", "55814", "55815", "55816"],
      areaCodes: ["218"]
    },
    "Rochester Region": {
      description: "Southeastern Minnesota professional radon testing",
      zipCodes: ["55901", "55902", "55903", "55904", "55905", "55906", "55909", "55920", "55921", "55922", "55923", "55924", "55925", "55926", "55927", "55929", "55932", "55933", "55934", "55935", "55936", "55940", "55941", "55943", "55944", "55945", "55946", "55947", "55949", "55950", "55951", "55952", "55953", "55954", "55955", "55956", "55957", "55959", "55960", "55961", "55962", "55963", "55964", "55965", "55967", "55968", "55969", "55970", "55971", "55972", "55973", "55974", "55975", "55976", "55977", "55979", "55981", "55982", "55983", "55985", "55987", "55988", "55990", "55991", "55992"],
      areaCodes: ["507"]
    },
    "St. Cloud Region": {
      description: "Central Minnesota radon testing services",
      zipCodes: ["56301", "56302", "56303", "56304", "56307", "56308", "56309", "56310", "56311", "56312", "56313", "56314", "56315", "56316", "56318", "56320", "56321", "56323", "56324", "56326", "56327", "56329", "56330", "56331", "56332", "56333", "56334", "56335", "56336", "56338", "56340", "56341", "56342", "56343", "56345", "56347", "56349", "56350", "56352", "56353", "56354", "56355", "56356", "56357", "56358", "56359", "56360", "56362", "56363", "56364", "56367", "56368", "56369", "56371", "56372", "56373", "56374", "56375", "56377", "56378", "56379", "56381", "56382", "56384", "56385", "56387", "56388", "56393", "56395", "56396", "56397", "56398", "56399"],
      areaCodes: ["320"]
    }
  };

  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="minnesota"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      <section className="state-page-hero">
        <div className="container">
          <h1>FREE Professional Radon Testing Throughout Minnesota</h1>
          <p>
            Minnesota homeowners receive completely FREE professional radon testing with no obligation. 
            Serving the Twin Cities metropolitan area, Duluth-Superior region, Rochester, St. Cloud, and communities throughout Minnesota. 
            Our EPA-certified radon professionals provide accurate testing and comprehensive reports to help protect your family's health. 
            If mitigation is needed, we provide custom radon mitigation systems with guaranteed results below 4.0 pCi/L.
          </p>
          
          <div className="minnesota-services">
            <h2>FREE Radon Testing Available Throughout Minnesota</h2>
            <div className="service-grid">
              <div className="service-item" onClick={() => setCurrentPage('radon-testing')}>
                <Shield size={48} />
                <h3>100% FREE Radon Testing</h3>
                <p>Professional radon testing at no cost - available throughout Minnesota with no obligation</p>
              </div>
              <div className="service-item" onClick={() => setCurrentPage('radon-mitigation')}>
                <Shield size={48} />
                <h3>Professional Radon Mitigation</h3>
                <p>Custom radon mitigation systems with EPA certification and guaranteed results</p>
              </div>
              <div className="service-item">
                <CheckCircle size={48} />
                <h3>EPA Certified Testing</h3>
                <p>All testing performed by EPA-certified radon measurement professionals</p>
              </div>
              <div className="service-item">
                <Award size={48} />
                <h3>Comprehensive Reports</h3>
                <p>Detailed radon testing reports with recommendations and next steps</p>
              </div>
              <div className="service-item">
                <Home size={48} />
                <h3>All Home Types</h3>
                <p>Testing available for single-family homes, condos, townhomes, and commercial properties</p>
              </div>
              <div className="service-item">
                <Star size={48} />
                <h3>Fast Results</h3>
                <p>Quick turnaround on test results with professional analysis and recommendations</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Get Your FREE Radon Test in Minnesota</h2>
            <p>Protect your family with professional radon testing - completely free throughout Minnesota</p>
            <div className="cta-buttons">
              <button onClick={handlePhoneClick} className="btn-primary-large">
                <Phone size={24} />
                Call (262) 955-5701
              </button>
              <button onClick={openContactForm} className="btn-secondary-large">
                Schedule FREE Test
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Minnesota Service Areas */}
      <section className="service-areas-expandable">
        <div className="container">
          <h2>Our Minnesota Radon Testing Areas</h2>
          <p>FREE professional radon testing available throughout Minnesota. Click below to see our complete coverage areas including zip codes and area codes.</p>
          
          <button 
            className={`areas-toggle-btn ${serviceAreasExpanded ? 'expanded' : ''}`}
            onClick={() => setServiceAreasExpanded(!serviceAreasExpanded)}
          >
            <MapPin size={20} />
            {serviceAreasExpanded ? 'Hide Service Areas' : 'Explore Our Minnesota Service Areas'}
            <ChevronDown size={20} />
          </button>

          <div className={`areas-content ${serviceAreasExpanded ? 'expanded' : ''}`}>
            <div className="areas-grid">
              {Object.entries(minnesotaServiceAreas).map(([region, data]) => (
                <div key={region} className="area-item">
                  <h4>{region}</h4>
                  <p>{data.description}</p>
                  <div className="area-codes-section">
                    <strong>Area Codes:</strong>
                    <div className="area-codes">
                      {data.areaCodes.map(code => (
                        <span key={code} className="area-code">({code})</span>
                      ))}
                    </div>
                  </div>
                  <div className="zip-codes-section">
                    <strong>Zip Codes Served:</strong>
                    <div className="zip-codes">
                      {data.zipCodes.slice(0, 25).map(zip => (
                        <span key={zip} className="zip-code">{zip}</span>
                      ))}
                      {data.zipCodes.length > 25 && (
                        <span className="zip-code-more">+{data.zipCodes.length - 25} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

// Enhanced Colorado Page - Radon Testing Focus
export function ColoradoPage({ openContactForm, handlePhoneClick, setCurrentPage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, currentBrand, setCurrentBrand, MultiBrandHeader, ProfessionalFooter }) {
  const [serviceAreasExpanded, setServiceAreasExpanded] = useState(false);

  const coloradoServiceAreas = {
    "Denver Metro": {
      description: "FREE radon testing throughout the Denver metropolitan area",
      zipCodes: ["80001", "80002", "80003", "80004", "80005", "80006", "80007", "80010", "80011", "80012", "80013", "80014", "80015", "80016", "80017", "80018", "80019", "80020", "80021", "80022", "80023", "80024", "80025", "80026", "80027", "80030", "80031", "80033", "80034", "80035", "80036", "80037", "80038", "80040", "80041", "80045", "80046", "80047", "80101", "80102", "80103", "80104", "80105", "80106", "80107", "80108", "80109", "80110", "80111", "80112", "80113", "80116", "80117", "80118", "80120", "80121", "80122", "80123", "80124", "80125", "80126", "80127", "80128", "80129", "80130", "80131", "80132", "80133", "80134", "80135", "80136", "80137", "80138", "80202", "80203", "80204", "80205", "80206", "80207", "80208", "80209", "80210", "80211", "80212", "80214", "80215", "80216", "80218", "80219", "80220", "80221", "80222", "80223", "80224", "80225", "80226", "80227", "80228", "80229", "80230", "80231", "80232", "80233", "80234", "80235", "80236", "80237", "80238", "80239", "80246", "80247", "80249", "80260", "80264", "80290", "80291", "80293", "80294", "80299"],
      areaCodes: ["303", "720"]
    },
    "Colorado Springs": {
      description: "Professional radon testing in Colorado Springs and surrounding areas",
      zipCodes: ["80809", "80813", "80814", "80816", "80817", "80818", "80819", "80820", "80831", "80832", "80833", "80840", "80863", "80864", "80901", "80902", "80903", "80904", "80905", "80906", "80907", "80908", "80909", "80910", "80911", "80912", "80913", "80914", "80915", "80916", "80917", "80918", "80919", "80920", "80921", "80922", "80923", "80924", "80925", "80926", "80927", "80928", "80929", "80930", "80938", "80939", "80951"],
      areaCodes: ["719"]
    },
    "Boulder County": {
      description: "Radon testing services throughout Boulder County",
      zipCodes: ["80301", "80302", "80303", "80304", "80305", "80310", "80314", "80321", "80322", "80323", "80424", "80425", "80426", "80427", "80428", "80444", "80446", "80447", "80448", "80452", "80454", "80455", "80456", "80457", "80466", "80471", "80481", "80482", "80501", "80503", "80504", "80510", "80511", "80513", "80514", "80515", "80516", "80517", "80540", "80544", "80601", "80602", "80603", "80610", "80614", "80615", "80640", "80642", "80643", "80644"],
      areaCodes: ["303", "720"]
    },
    "Fort Collins-Loveland": {
      description: "Northern Colorado radon testing services",
      zipCodes: ["80521", "80522", "80523", "80524", "80525", "80526", "80527", "80528", "80534", "80535", "80536", "80537", "80538", "80539", "80543", "80545", "80546", "80547", "80549", "80550", "80551", "80553", "80612", "80615", "80621", "80624", "80631", "80634", "80638", "80639", "80645", "80646", "80648", "80649", "80650", "80651", "80652", "80654", "80701", "80720", "80721", "80722", "80723", "80726", "80727", "80728", "80729", "80731", "80732", "80733", "80734", "80735", "80736", "80737", "80740", "80741", "80742", "80744", "80745", "80746", "80747", "80749", "80750", "80751", "80754", "80755", "80757", "80758", "80759", "80801", "80802", "80804", "80805", "80807", "80808", "80810", "80812", "80815", "80821", "80822", "80823", "80824", "80825", "80826", "80827", "80828", "80829", "80830", "80834", "80835", "80836", "80860", "80861", "80862"],
      areaCodes: ["970"]
    }
  };

  return (
    <div className="page-container">
      <MultiBrandHeader 
        openContactForm={openContactForm} 
        handlePhoneClick={handlePhoneClick} 
        currentPage="colorado"
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        currentBrand={currentBrand}
        setCurrentBrand={setCurrentBrand}
      />

      <section className="state-page-hero">
        <div className="container">
          <h1>FREE Professional Radon Testing Throughout Colorado</h1>
          <p>
            Colorado homeowners know radon is a serious concern due to our state's geology. That's why we provide completely FREE professional radon testing throughout Colorado with no obligation. 
            Serving Denver, Colorado Springs, Boulder, Fort Collins, and communities throughout the Front Range and beyond. 
            Our EPA-certified radon professionals understand Colorado's unique radon challenges and provide accurate testing with comprehensive reports. 
            Colorado has some of the highest radon levels in the nation - protect your family with professional testing and mitigation.
          </p>
          
          <div className="colorado-services">
            <h2>FREE Radon Testing Available Throughout Colorado</h2>
            <div className="service-grid">
              <div className="service-item" onClick={() => setCurrentPage('radon-testing')}>
                <Shield size={48} />
                <h3>100% FREE Radon Testing</h3>
                <p>Professional radon testing at no cost throughout Colorado - no obligation required</p>
              </div>
              <div className="service-item" onClick={() => setCurrentPage('radon-mitigation')}>
                <Shield size={48} />
                <h3>Colorado Radon Mitigation</h3>
                <p>Custom mitigation systems designed for Colorado's unique geological conditions</p>
              </div>
              <div className="service-item">
                <CheckCircle size={48} />
                <h3>High Radon Area Expertise</h3>
                <p>Specialized knowledge of Colorado's high radon zones and geological factors</p>
              </div>
              <div className="service-item">
                <Award size={48} />
                <h3>EPA Certified Professionals</h3>
                <p>All testing performed by EPA-certified radon measurement specialists</p>
              </div>
              <div className="service-item">
                <Home size={48} />
                <h3>All Altitude Testing</h3>
                <p>Experienced in testing homes at all Colorado elevations and conditions</p>
              </div>
              <div className="service-item">
                <Star size={48} />
                <h3>Fast Colorado Results</h3>
                <p>Quick turnaround on results with Colorado-specific recommendations</p>
              </div>
            </div>
          </div>

          <div className="colorado-radon-info">
            <h3>Why Colorado Needs Radon Testing</h3>
            <div className="radon-facts">
              <div className="radon-fact">
                <strong>High Risk State:</strong> Colorado has some of the highest radon levels in the United States
              </div>
              <div className="radon-fact">
                <strong>Geological Factors:</strong> Colorado's granite and uranium-rich soil contribute to elevated radon levels
              </div>
              <div className="radon-fact">
                <strong>Altitude Effects:</strong> Higher elevations can affect radon accumulation in homes
              </div>
              <div className="radon-fact">
                <strong>Year-Round Concern:</strong> Colorado's climate means homes are sealed tight, trapping radon indoors
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Get Your FREE Radon Test in Colorado</h2>
            <p>Don't wait - Colorado's high radon risk makes testing essential for every home</p>
            <div className="cta-buttons">
              <button onClick={handlePhoneClick} className="btn-primary-large">
                <Phone size={24} />
                Call (262) 955-5701
              </button>
              <button onClick={openContactForm} className="btn-secondary-large">
                Schedule FREE Test
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Colorado Service Areas */}
      <section className="service-areas-expandable">
        <div className="container">
          <h2>Our Colorado Radon Testing Areas</h2>
          <p>FREE professional radon testing available throughout Colorado's Front Range and beyond. Click below to see our complete coverage areas.</p>
          
          <button 
            className={`areas-toggle-btn ${serviceAreasExpanded ? 'expanded' : ''}`}
            onClick={() => setServiceAreasExpanded(!serviceAreasExpanded)}
          >
            <MapPin size={20} />
            {serviceAreasExpanded ? 'Hide Service Areas' : 'Explore Our Colorado Service Areas'}
            <ChevronDown size={20} />
          </button>

          <div className={`areas-content ${serviceAreasExpanded ? 'expanded' : ''}`}>
            <div className="areas-grid">
              {Object.entries(coloradoServiceAreas).map(([region, data]) => (
                <div key={region} className="area-item">
                  <h4>{region}</h4>
                  <p>{data.description}</p>
                  <div className="area-codes-section">
                    <strong>Area Codes:</strong>
                    <div className="area-codes">
                      {data.areaCodes.map(code => (
                        <span key={code} className="area-code">({code})</span>
                      ))}
                    </div>
                  </div>
                  <div className="zip-codes-section">
                    <strong>Zip Codes Served:</strong>
                    <div className="zip-codes">
                      {data.zipCodes.slice(0, 30).map(zip => (
                        <span key={zip} className="zip-code">{zip}</span>
                      ))}
                      {data.zipCodes.length > 30 && (
                        <span className="zip-code-more">+{data.zipCodes.length - 30} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter setCurrentPage={setCurrentPage} currentBrand={currentBrand} />
    </div>
  );
}

