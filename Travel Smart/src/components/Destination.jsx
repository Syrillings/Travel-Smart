import { memo, useEffect } from "react";
import Header from "./layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import tour from "../data/tourData.json";

const Destination = () => {
  const youtubeID = "rFydxbQLDOA?si=u6MjUe0IDIsoF0uz";
  const dubai = "f2LXCW-bdGY?si=rAl5INbSsDHE3IRj";
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedTour = tour.find((tour) => tour.id === parseInt(id));

  const [city, country] = selectedTour.location.split(", ");

  const starsCount = (rating) => {
    const maxRating = 5;
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${rating >= i + 1 ? "yellow" : "gray"}`}
        ></i>
      );
    }
    return stars;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const card = document.querySelectorAll(".things-to-do-card-accomodations");
    card.forEach((element) => {
      element.onclick = () => {
        navigate("/accomodation");
      };
    });
  }, []);

  return (
    <>
      <Header />
      <section id="destination">
        <div className="container">
          <h1>{selectedTour.title}</h1>
          <div className="destination img">
            <img src={selectedTour.alternateImage} alt="destination" />
          </div>

          <div className="destination-info">
            <h2>About</h2>
            <p>{selectedTour.about}</p>
          </div>

          <div className="destination-video mt">
            <h2>Welcome to {city}</h2>
            <div className="welcome-video">
              {/* <iframe
                width="100%"
                height="400"
                src={`https://www.youtube-nocookie.com/embed/${youtubeID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              /> */}
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube-nocookie.com/embed/${selectedTour.video.youtubeID}?autoplay=1&mute=1&modestbranding=1&showinfo=0&rel=0&controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="things-to-do mt">
            <h2>Things to Do</h2>
            <div className="card-container">
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/0b/b3/c1/92.jpg)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>
                  Jet Skiing around La famille ship and smaller pristine cays
                </h4>
                <div>{starsCount(4.8)}</div>
                <p>from $3.40 per adult</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/10/49/58/db.jpg)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>The Unvanquished Tour in City Center</h4>
                <div>{starsCount(3.8)}</div>
                <p>from $3.40 per adult</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/06/70/25/b4.jpg",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>
                  Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
                </h4>
                <div>{starsCount(4.8)}</div>
                <p>from $133.48 per adult</p>
              </div>
            </div>
          </div>

          <div className="stays mt">
            <h2>Places to stays</h2>
            <div className="card-container">
              <div className="things-to-do-card-accomodations">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/1c/30/caption.jpg?w=600&h=-1&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Bankside Hotel, Autograph Collection</h4>
                <div>{starsCount(5)}</div>
                <p>from $285/night</p>
              </div>
              <div className="things-to-do-card-accomodations">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/fd/5a/03/caption.jpg?w=600&h=-1&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Hotel 41</h4>
                <div>{starsCount(4)}</div>
                <p>from $385/night</p>
              </div>
              <div className="things-to-do-card-accomodations">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/28/24/hotel-cafe-royal-junior.jpg?w=600&h=-1&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>The Hotel Cafe</h4>
                <div>{starsCount(4)}</div>
                <p>from $405/night</p>
              </div>
            </div>
          </div>
          <div className="stays mt">
            <h2 className="text-center">Your Host</h2>
            <div className="si-container">
              <div className="host-profile">
                <div className="host-header">
                  <img
                    src="https://img.freepik.com/free-photo/smiley-african-woman-wearing-traditional-accessories_23-2148747966.jpg?t=st=1726840492~exp=1726844092~hmac=1fa9f479a20fbe647516b5a4d8f280f220ce9f533e4d78a2281d85f313b2d24e&w=740"
                    alt="Host image"
                    className="host-img"
                  />
                  <div className="host-info">
                    <h1>Indara</h1>
                    <p className="superhost">Hostess</p>
                    <p>
                      <strong>571 Positive Reviews</strong>
                    </p>
                    <p className="si-rating">⭐ 4.79 Rating</p>
                  </div>
                </div>

                <button className="message-button">Message Host</button>

                <div className="notice">
                  <p>T & Cs Apply</p>
                </div>
              </div>
            </div>
          </div>

          <div className="transport-options mt">
            <div className="city-info w-50">
              <h2>Getting to {city}</h2>
              <div className="info-section">
                <h4>
                  Flying <i className="fa-solid fa-plane"></i>
                </h4>
                <p>{city} has six international airports.</p>
              </div>
              <div className="info-section">
                <h4>
                  Train <i className="fa-solid fa-train"></i>
                </h4>
                <p>
                  St Pancras railway station serves high-speed Eurostar
                  services.
                </p>
              </div>
              <div className="info-section">
                <h4>
                  Visa Requirements <i className="fa-solid fa-passport"></i>
                </h4>
                <p>Check the government's visa survey for requirements.</p>
              </div>
              <div className="info-section">
                <h4>
                  Best Time to Visit <i className="fa-solid fa-calendar"></i>
                </h4>
                <p>Summer (June-Aug) or holiday season (Dec-Jan).</p>
              </div>
            </div>

            <div className="getting-around w-50">
              <h2>Getting Around {city}</h2>
              <div className="info-section">
                <h4>
                  Bicycle <i className="fa-solid fa-bicycle"></i>
                </h4>
                <p>Santander Cycles bike-share system.</p>
              </div>
              <div className="info-section">
                <h4>
                  Tube <i className="fa-solid fa-subway"></i>
                </h4>
                <p>{city}'s Underground rail network.</p>
              </div>
              <div className="info-section">
                <h4>
                  Bus <i className="fa-solid fa-bus"></i>
                </h4>
                <p>{city}'s 24-hour bus route network.</p>
              </div>
              <div className="info-section">
                <h4>
                  Taxis <i className="fa-solid fa-taxi"></i>
                </h4>
                <p>Find official taxi stands or book online.</p>
              </div>
              <div className="info-section">
                <h4>
                  Ridesharing <i className="fa-solid fa-car"></i>
                </h4>
                <p>Uber, Bolt, and Kapten available.</p>
              </div>
              <div className="info-section">
                <h4>
                  Trams <i className="fa-solid fa-tram"></i>
                </h4>
                <p>Tramlink operates in South {city}.</p>
              </div>
            </div>
          </div>

          <div className="flight-prices mt">
            <h2>Flight Prices</h2>

            <div className="d-flex gap">
                <div className="flight-card">
                  <div className="alert-box"></div>
                  <div className="flight-details">
                    <div className="flight-info">
                      <div className="flight-route">Lagos to {city}</div>
                      <div>4:51pm – 5:35pm</div>
                      <div>(1 Hour, 18 minutes)</div>
               
                      <div className="info"><img src="data:image/jpeg;base64,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" alt="" />Qatar Airways</div>
                      <div>Sun, Oct 27</div>
                    </div>
                    <div className="inf">$120</div>
                  </div>
                  <div className="alert-box"></div>
                </div>

                <div className="flight-card">
                  <div className="alert-box"></div>
                  <div className="flight-details">
                    <div className="flight-info">
                      <div className="flight-route">Abuja to {city}</div>
                      <div>2:51pm – 5:35pm</div>
                      <div>(11 Hours, 18 minutes)</div>
              
                      <div className="info"><img src="data:image/png;base64,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" alt="" />EgyptAir</div>
                      <div>Sun, Oct 27</div>
                    </div>
                    <div className="inf">$310</div>
                  </div>
                  <div className="alert-box"></div>
                </div>

                <div className="flight-card">
                  <div className="alert-box"></div>
                  <div className="flight-details">
                    <div className="flight-info">
                      <div className="flight-route">Enugu to {city}</div>
                      <div>2:11am – 5:35pm</div>
                      <div>(15 Hours, 20 minutes)</div>
                    
                      <div className="info"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA4CAMAAAC49krEAAAAaVBMVEXXGSH////VAADXFh7SAADVAATWDxnYHyf87+/ZKTDkeXzgX2Pvtbfkd3rtqqvWCRXaMTfcRUr0zc7xv8HWAA3rnZ/lgIP219jso6XcSk7++Pj65+jib3L43t/okJLdUVXbOj/gZmnmiYuec/tfAAABmklEQVRIie2Tba+jIBCFnQMKCIiiYH3X/v8fudhtb+4mu/Z+3aQnMQR8mHHOjFn20UcfffRNBUvPTzitWG5/QGJpeavYG4p1wDxpwjsuC4tfeXwLwsRakngLOrvZ7N5X9i0Y0QWOWzkhY1d1OxukMa0Om83FdkF29yFxpVAT1+1FerbpPpxqaW3b2P0TLPS2ylMj2Tpe1MOaWQ2q0bC091d1s+bwo5fhtMdfgsrDqhn3UvLZXYAZplZrPetgcZk6hZyIyGBIN/4C5kD+NJehrsUxSpoYO0fkD7nKtEY7lnrGGKtH4FgPpE/MVXFO+1cv0Uo1lE3NNOodTXQaDfYN3a3asWXOza/M1Rh3HGTI91Rq4rLvY+XNTkb7OA5jDN0LtLEbiAfJ+/QaS8XBjeRk0yE1qTj2BCV3xUAIE/cP8IbDp0Mq79TO0OOCLxDYHuAZkS83Pg7rCW7UQUDQb/O7QN5PNTX31Lhe0OA973tDkBU3iylNvz7nyAmlCseUE6JQBTKX/muRC5FWiMzl+Jo39nT35fFj/bb/X/QL0mIYplnAD9gAAAAASUVORK5CYII=" alt="" />Emirates</div>
                      <div>Sun, Oct 27</div>
                    </div>
                    <div className="inf">$450</div>
                  </div>
                  <div className="alert-box"></div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Destination);
