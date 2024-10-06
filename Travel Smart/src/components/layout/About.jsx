const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Why Clients Choose Us?</h2>

        <div className="about-us-container">
          <div>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/5b/9c/caption.jpg?w=600&h=-1&s=1"
              alt=""
            />
          </div>
          <div>
            Welcome to TravelSmart, your premier travel planning partner. With
            years of expertise and a passion for exploring the world, we craft
            unforgettable journeys tailored to your unique style and
            preferences. Our dedicated team of travel experts takes the time to
            understand your dreams, delivering personalized itineraries that
            combine stunning destinations, immersive experiences, and
            unparalleled value. From relaxing getaways to adrenaline-fueled
            adventures, we seamlessly handle every detail, ensuring a
            stress-free and enjoyable travel experience. At TravelSmart, we're
            committed to exceeding your expectations and creating lifelong
            memories.
          </div>
        </div>

        <div className="what-we-do">
          <div className="about-div">
            <h3>What We Do: Our Services</h3>
            <div>
              <i className="fas fa-check"></i>Personalized Travel Planning
            </div>
            <div>
              <i className="fas fa-check"></i>Customized Itineraries
            </div>
            <div>
              <i className="fas fa-check"></i>Flight and Hotel Bookings
            </div>
            <div>
              <i className="fas fa-check"></i>Activity and Tour Reservations
            </div>
            <div>
              <i className="fas fa-check"></i>Travel Insurance Options
            </div>
          </div>

          <div className="about-div">
            <h3>Why Choose Us: The Best Trip Planner</h3>
            <div>
              <i className="fas fa-check"></i>Expert Travel Advisors
            </div>
            <div>
              <i className="fas fa-check"></i>Unbeatable Prices
            </div>
            <div>
              <i className="fas fa-check"></i>24/7 Customer Support
            </div>
            <div>
              <i className="fas fa-check"></i>Handpicked Destinations
            </div>
            <div>
              <i className="fas fa-check"></i>Stress-Free Booking Process
            </div>
          </div>
        </div>

        <div className="about-box-container">
          <div className="about-box">
            <h3>18+</h3>
            <p>Years of experience</p>
          </div>
          <div className="about-box">
            <h3>30k+</h3>
            <p>Total Tours Booked</p>
          </div>
          <div className="about-box">
            <h3>15+</h3>
            <p>Award Recognitions</p>
          </div>
          <div className="about-box">
            <h3>20k+</h3>
            <p>Trusted Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
