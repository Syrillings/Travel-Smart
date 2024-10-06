import TourCard from "../TourCard";
import tourData from '../../data/tourData.json';

const Packages = () => {
  return (
    <>
        <section id="explore">
      <div className="container">
        <h2>Find Your Next Destination</h2>
        <div className="search-navigation">
          <ul>
            <li>
              <i className="fas fa-home"></i> Search all
            </li>
            <li>
              <i className="fas fa-hotel"></i> Hotels
            </li>
            <li>
              <i className="fas fa-plane"></i> Flight
            </li>
            <li>
              <i className="fas fa-car"></i> Car Rentals
            </li>
          </ul>
        </div>
        <div id="search-bar">
          <div className="input">
            <label htmlFor="destination">Where?</label>
            <input type="text" placeholder="search destination,tour,event..." />
          </div>
          {/* <div className="search-stroke"></div>
          <div className="input">
            <label htmlFor="tour">Tour or Event?</label>
            <input type="text" placeholder="search tour event" />
          </div> */}

          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* <div className="sorting-options">
          <select className="continents-select">
            <option className="continents-option" value="Africa">
              Africa
            </option>
            <option className="continents-option" value="Antarctica">
              Antarctica
            </option>
            <option className="continents-option" value="Asia">
              Asia
            </option>
            <option className="continents-option" value="Australia/Oceania">
              Australia/Oceania
            </option>
            <option className="continents-option" value="Europe">
              Europe
            </option>
            <option className="continents-option" value="North America">
              North America
            </option>
            <option className="continents-option" value="South America">
              South America
            </option>
          </select>
          <select className="tour-types-select">
            <option className="tour-types-option" value="family-tour">
              <i className="fa-solid fa-users"></i> Family Tour
            </option>
            <option className="tour-types-option" value="adventure-tour">
              <i className="fa-solid fa-compass"></i> Adventure Tour
            </option>
            <option className="tour-types-option" value="romantic-tour">
              <i className="fa-solid fa-heart"></i> Romantic Tour
            </option>
            <option className="tour-types-option" value="cultural-tour">
              <i className="fa-solid fa-museum"></i> Cultural Tour
            </option>
          </select>
        </div> */}

<div className="d-flex">
  <div className="si-header">
    <div className="dropdown">
        <button className="dropbtn" >Price <span className="toggle-arrow" style={{marginLeft: '10px' }}>▼</span></button>
        <div className="dropdown-content">
            <div className="filter-options">
                <label htmlFor="minPrice">Min: ₦</label>
                <input type="number" id="minPrice" name="minPrice" value="0" />
                <label htmlFor="maxPrice">Max: ₦</label>
                <input type="number" id="maxPrice" name="maxPrice" value="1000" />
                <button className="done-btn">Done</button>
            </div>
        </div>
    </div>
    
    <div className="dropdown">
        <button className="dropbtn">Date <span className="toggle-arrow" style={{marginLeft: '10px' }}>▼</span></button>
        <div className="dropdown-content">
          
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" name="startDate" />
                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" name="endDate" />
                <button className="done-btn">Done</button>
            </div>
        </div>
    </div>
    
    <div className="dropdown">
        <button className="dropbtn dwn" id="non">Destination <span className="toggle-arrow" style={{marginLeft: '10px' }}>▼</span></button>
        <div className="dropdown-content">
            <div className="filter-options">
         
                    
                    <option value="Paris">Paris</option>
                    <option value="Rome">Rome</option>
                    <option value="New York">New York</option>
              
                <button className="done-btn">Done</button>
            </div>
        </div>
    </div>
    
    <div className="dropdown">
        <button className="dropbtn dwn" id="dur">Duration <span className="toggle-arrow" style={{marginLeft: '10px' }}>▼</span></button>
        <div className="dropdown-content">
            <div className="filter-options">
                
                    
                    <option value="1-3 Weeks">1-3 Weeks</option>
                    <option value="4-7 Weeks">4-7 Weeks</option>
                    <option value="8+ Weeks">8+ Weeks</option>
            
                <button className="done-btn">Done</button>
            </div>
        </div>
    </div>
    
    <div className="dropdown">
        <button className="dropbtn dwn">Rating <span className="toggle-arrow" style={{marginLeft: '10px' }}>▼</span></button>
        <div className="dropdown-content">
            <div className="filter-options">
         
                <p>1 Star</p>
                <p>2 Stars</p>
                <p>3 Stars</p>
                <p>4 Stars</p>
                <p>5 Stars</p>
                <button className="done-btn">Done</button>
            </div>
        </div>
    </div>
</div>


      </div>
    </section> 
    <section id="packages" >
      <div className="container">
        <h2>Tour Packages</h2>
        {/* <h2>Popular Destinations</h2>

        <div className="package-card"></div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/28/f0/43/caption.jpg?w=300&h=300&s=1"
          alt="Paris"
        />
        <h3>Paris, France</h3>
        <p>Cultural Tour - $1200</p>
        <a href="#paris-tour">View Details</a> */}
        <div className="tourcard">
          {tourData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>

    </>
   
  );
};

export default Packages;
