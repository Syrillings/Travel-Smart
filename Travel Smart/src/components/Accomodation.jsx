import { useEffect } from "react";
import "../assets/css/accomodation.css";
import Header from "./layout/Header";
import main from "../assets/photos/main.jpeg";
import reviewTag from "../assets/icons/review-tag.png";
import host1 from "../assets/photos/host1.jpeg";
import trophy from "../assets/icons/trophy.jpeg";
import house from "../assets/icons/house.jpeg";
import room from "../assets/icons/room.jpeg";
import shower from "../assets/icons/shower.jpeg"
import small1 from "../assets/photos/small1.jpeg"
import small2 from "../assets/photos/small2.jpeg";
import utensils from "../assets/icons/utensils.jpeg"
import workspace from "../assets/icons/workspace.jpeg"
import wifi from "../assets/icons/wifi.jpeg"
import tv from "../assets/icons/tv.jpeg"
import lock from "../assets/icons/lock.jpeg"
import leftleaf from "../assets/icons/leftleaf.png"
import rightleaf from "../assets/icons/rightleaf.png"
import spray from "../assets/icons/spray.png"
import tick from "../assets/icons/tick.png";
import key from "../assets/icons/key.png";
import callout from "../assets/icons/callout.png";
import map from "../assets/icons/map.png";
import priceTag from "../assets/icons/price-tag.png";
import person1 from "../assets/photos/person1.jpeg";
import person2 from "../assets/photos/person2.jpeg";
import person3 from "../assets/photos/person3.jpeg";
import person4 from "../assets/photos/person4.jpeg";
import person5 from "../assets/photos/person5.jpeg";
import person7 from "../assets/photos/person7.jpeg";



const Accomodation = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header />
      <div>
        <div className="review-bodyelements">
          <div className="review-main">
            <h2>Retreat to Bright & Airy 2 Bedroom Suite + Patio</h2>

            <div className="review-image-gallery">
              <div className="review-main-image">
                <img
                  src={main}
                  alt="Main Image of the Airbnb Listing"
                />
              </div>
              <div className="review-small-images">
                <div>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-597616187043694433/original/e38a5504-c1e1-413c-a388-ef0c8ba51674.jpeg?im_w=720" alt="Small Image 1" />
                </div>
                <div>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-597616187043694433/original/c04cd2ac-1c47-4738-ac34-ea813700397d.jpeg?im_w=720" alt="Small Image 2" />
                </div>
              </div>
              <div
                className="review-small-images"
                style={{ marginTop: "-5px" }}
              >
                <div>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-597616187043694433/original/94634bf0-9726-4a49-902c-beedfc5a0bda.jpeg?im_w=720" alt="Small Image 3" />
                </div>
                <div>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-597616187043694433/original/811ae0a3-64ac-44e6-86f3-09371aff48a6.jpeg?im_w=720" alt="Small Image 4" />
                </div>
              </div>
            </div>
            <div className="review-second-main">
              <div className="review-price-container">
                <div className="review-price-box">
                  <p className="review-price-per-night">
                    <b>$112</b> night
                  </p>
                  <div className="review-price-date-confirmation">
                    <div className="review-price-checks-row">
                      <div className="review-price-checkin">
                        <p className="price-title">CHECK-IN</p>
                        <p className="price-date">10/06/2024</p>
                      </div>
                      <div className="review-price-checks-line"></div>
                      <div className="review-price-checkout">
                        <p className="price-title">CHECKOUT</p>
                        <p className="price-date">10/20/2024</p>
                      </div>
                    </div>
                    <div className="review-price-notification-row">
                      <p className="notification-row-text">
                        You Won't be Charged Yet
                      </p>
                    </div>
                  </div>
                  <div className="review-button-div">
                    <button className="review-price-reserve">
                      <p>Reserve</p>
                    </button>
                  </div>
                  <div className="review-price-calculation-section">
                    <div className="review-price-calculation-rowOne">
                      <p>$112 x 4 nights</p>
                      <p>$449</p>
                    </div>
                    <div className="review-price-calculation-rowOne">
                      <p>Cleaning fee</p>
                      <p>$26</p>
                    </div>
                    <div className="review-price-calculation-rowOne">
                      <p>Airbnb sevice fee</p>
                      <p>%73</p>
                    </div>
                    <div className="review-price-line"></div>
                    <div className="review-price-calculation-result">
                      <p>Total before taxes</p>
                      <p>$548</p>
                    </div>
                  </div>
                </div>

                <div className="review-price-note">
                  <div>
                    <img
                      src={reviewTag}
                      alt=""
                      className="review-price-note-tag"
                    />
                  </div>
                  <div>
                    <p>
                      <span className="review-price-tag"></span> Good price
                    </p>
                    <p>
                      Your dates are $24 less than the avg. nightly rate over
                      the last 3 months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="review-container">
                <div className="review-listing-info">
                  <h1>Room in Palermo, Italy</h1>
                  <p>
                    <strong>1 double bed • Shared bathroom</strong>
                  </p>
                  <div className="review-rating">
                    <span>
                      Guest <br />
                      favorite
                    </span>
                    <span>
                      One of the most loved homes on
                      <br />
                      Travel Smart, according to guests
                    </span>
                    <span>
                      {" "}
                      4.97 <br />
                      ★★★★☆
                    </span>
                    <div className="review-span-line"></div>
                    <span>
                      186 <br />
                      Reviews
                    </span>
                  </div>
                  <div className="review-host">
                    <div className="review-host-image">
                      <img src={host1} alt="Host Image" />
                    </div>
                    <div className="review-host-name">
                      <h3>Hosted by Catherine</h3>
                      <p>Superhost • 9 years hosting</p>
                    </div>
                  </div>
                  <div className="review-cross-line"></div>
                </div>
                <div className="review-features">
                  <div className="review-sub-features">
                    <div>
                      <img src={trophy} alt="" />
                    </div>
                    <div>
                      <h3>Top 10% of homes</h3>
                      <p>
                        This home is highly ranked based on ratings, reviews,
                        and reliability
                      </p>
                    </div>
                  </div>
                  <div className="review-sub-features">
                    <div>
                      <img src={room} alt="" />
                    </div>
                    <div>
                      <h3>Room in a home</h3>
                      <p>
                        Your own room in a home, plus access to shared spaces.
                      </p>
                    </div>
                  </div>
                  <div className="review-sub-features">
                    <div>
                      <img src={house} alt="" />
                    </div>
                    <div>
                      <h3>Shared common Spaces</h3>
                      <p>You'll share parts of the home</p>
                    </div>
                  </div>
                  <div className="review-sub-features">
                    <div>
                      <img src={shower} alt="" />
                    </div>
                    <div>
                      <h3>Dedicated bathroom</h3>
                      <p>This place has a bathroom that's just for you.</p>
                    </div>
                  </div>
                </div>
                <div className="review-cross-line"></div>
                <div className="review-about-product">
                  <h2>About this Place</h2>
                  <p>
                    Retreat to this oasis of calm in leafy Crouch End after a
                    hectic day in London. Beautiful newly renovated suite on the
                    top floor of a Victorian house. Main bedroom has a queen
                    size bed and patio. Separate sitting room with views of
                    Alexandra Palace and a concealed king bed. Would suit two
                    couples travelling together, two singles or a small family.
                    Private bathroom and kitchen. Easy access to Finsbury Park
                    with its excellent transport links all across London. Very
                    experienced host as well!
                  </p>
                </div>
                <div className="review-cross-line"></div>
                <div className="review-sleep-area">
                  <h2>Where you'll sleep</h2>
                  <div className="review-beds">
                    <div className="review-bed-info">
                      <img src={small1} alt="" />
                      <h4>Bedroom 1</h4>
                      <p>1 queen bed</p>
                    </div>
                    <div className="review-bed-info">
                      <img src={small2} alt="" />
                      <h4>Bedroom 2</h4>
                      <p>1 King bed</p>
                    </div>
                  </div>
                </div>
                <div className="review-cross-line"></div>
                <div className="review-offers">
                  <h2>What this place offers</h2>
                  <div className="review-amenities">
                    <div>
                      <div className="review-amemities-description">
                        <img src={utensils} alt="" />
                        <p>Kitchen</p>
                      </div>
                      <div className="review-amemities-description">
                        <img src={workspace} alt="" />
                        <p>Dedicated Workspace</p>
                      </div>
                      <div className="review-amemities-description">
                        <img src={lock} alt="" />
                        <p>Lock on bedroom door</p>
                      </div>
                    </div>
                    <div className="amenities-row-two">
                      <div className="review-amemities-description">
                        <img src={wifi} alt="" />
                        <p>Wifi</p>
                      </div>
                      <div className="review-amemities-description">
                        <img src={tv} alt="" />
                        <p>TV</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-cross-line"></div>
                <div className="review-calendar">
                  <h2>4 nights in Greater London</h2>
                  <p id="review-selected-dates">Jan 20, 2025 - Feb 3, 2025</p>
                  <div className="review-calendar-inputs">
                    <input
                      type="date"
                      id="start-date"
                      className="review-calendar-input"
                    />
                    <input
                      type="date"
                      id="end-date"
                      className="review-calendar-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="review-section-line"></div>
            <div className="review-rating-head">
              <div className="rating-header">
                <img
                  src={leftleaf}
                  alt="left leaf"
                  className="leaf-icon"
                />
                <h1 className="rating-score">4.97</h1>
                <img
                  src={rightleaf}
                  alt="right leaf"
                  className="leaf-icon"
                />
              </div>
              <h2 className="rating-title">Guest Favorite</h2>
              <p className="rating-description">
                <strong>top 10%</strong> of eligible listings
              </p>
              <p className="rating-subtext">
                based on ratings, reviews, and reliability
              </p>
            </div>
            <div className="review-rating-dashboard">
              <div className="review-small-board overall-rating">
                <h5>Overall Rating</h5>
                <div className="rating-bars">
                  <div>
                    5 <span className="bar"></span>
                  </div>
                  <div>
                    4 <span className="bar"></span>
                  </div>
                  <div>
                    3 <span className="bar"></span>
                  </div>
                  <div>
                    2 <span className="bar"></span>
                  </div>
                  <div>
                    1 <span className="bar"></span>
                  </div>
                </div>
              </div>
              <div className="review-rating-horizontal-line"></div>
              <div className="review-small-board">
                <div>
                  <h5>Cleanliness</h5>
                  <p>5.0</p>
                </div>
                <div className="review-small-board-icon">
                  <img src={spray} alt="" />
                </div>
              </div>
              <div className="review-rating-horizontal-line"></div>
              <div className="review-small-board">
                <div>
                  <h5>Accuracy</h5>
                  <p>5.0</p>
                </div>
                <div className="review-small-board-icon">
                  <img src={tick} alt="" />
                </div>
              </div>
              <div className="review-rating-horizontal-line"></div>
              <div className="review-small-board">
                <div>
                  <h5>Check-in</h5>
                  <p>4.9</p>
                </div>
                <div className="review-small-board-icon">
                  <img src={key} alt="" />
                </div>
              </div>
              <div className="review-rating-horizontal-line"></div>
              <div className="review-small-board">
                <div>
                  <h5>Communication</h5>
                  <p>5.0</p>
                </div>
                <div className="review-small-board-icon">
                  <img src={callout} alt="" />
                </div>
              </div>
              <div className="review-rating-horizontal-line"></div>
              <div className="review-small-board">
                <div>
                  <h5>Location</h5>
                  <p>4.8</p>
                </div>
                <div className="review-small-board-icon">
                  <img src={map} alt="" />
                </div>
              </div>
              <div className="review-rating-horizontal-line"></div>
              <div className="review-small-board">
                <div>
                  <h5>Value</h5>
                  <p>4.9</p>
                </div>
                <div className="review-small-board-icon">
                  <img src={priceTag} alt="" />
                </div>
              </div>
            </div>
            <div className="review-section-line"></div>
            <div className="review-comment-section">
              <div className="review-comment-row-one">
                <div className="reviewer-info">
                  <img
                    src={person4}
                    alt="Elena's profile picture"
                    className="reviewer-profile-pic"
                  />
                  <div className="reviewer-details">
                    <h4>Elena</h4>
                    <p>Basel, Switzerland</p>
                  </div>
                </div>
                <div className="review-comment-rating">★★★★★ . 2 weeks ago</div>
                <div className="reviewer-comment">
                  <p>Catherine's Place is jewel!</p>
                  <p>
                    The perfect location for people that like to retreat after a
                    busy day in London but very close to the city center.
                  </p>
                </div>
                <div className="reviewer-info">
                  <img
                    src={person1}
                    alt="Elena's profile picture"
                    className="reviewer-profile-pic"
                  />
                  <div className="reviewer-details">
                    <h4>Marion</h4>
                    <p>9 Years on Travel Smart</p>
                  </div>
                </div>
                <div className="review-comment-rating">★★★★★ . August 2024</div>
                <div className="reviewer-comment">
                  <p>
                    Impossible de trouver mieux à Londres !! Superbe petit coin
                    tout confort pour se reposer après les longues journées à
                    Londres, idéalement situé, tellement beau et propre
                  </p>
                </div>
                <div className="reviewer-info">
                  <img
                    src={person3}
                    alt="Elena's profile picture"
                    className="reviewer-profile-pic"
                  />
                  <div className="reviewer-details">
                    <h4>Mathilde</h4>
                    <p>7 months on Airbnb</p>
                  </div>
                </div>
                <div className="review-comment-rating">
                  ★★★★★ . January 2024
                </div>
                <div className="reviewer-comment">
                  <p>
                    Een heerlijk adres in een prettige buurt, dichtbij trein- en
                    metrostations. Na een dagje in de drukke stad konden we hier
                    heerlijk tot rust komen. Catherine was een fijne host
                  </p>
                </div>
              </div>
              <div className="review-comment-row-two">
                <div className="reviewer-info">
                  <img
                    src={person5}
                    alt="Elena's profile picture"
                    className="reviewer-profile-pic"
                  />
                  <div className="reviewer-details">
                    <h4>Isabel</h4>
                    <p>8 years on Travel Smart</p>
                  </div>
                </div>
                <div className="review-comment-rating">★★★★★ . 3 weeks ago</div>
                <div className="reviewer-comment">
                  <p>
                    This was one of our best stays on Airbnb ever. We felt right
                    at home at Catherine's place and loved our stay in London.
                    The house is well connected, yet peaceful which makes
                    exploring fun and enjoying
                  </p>
                </div>
                <div className="reviewer-info">
                  <img
                    src={person2}
                    alt="Elena's profile picture"
                    className="reviewer-profile-pic"
                  />
                  <div className="reviewer-details">
                    <h4>莉愛</h4>
                    <p>7 months on Travel Smart</p>
                  </div>
                </div>
                <div className="review-comment-rating">
                  ★★★★★ . 2nd September 2024
                </div>
                <div className="reviewer-comment">
                  <p>
                    素敵な滞在期間を過ごすことができました。ありがとうございました！.
                  </p>
                </div>
                <div className="reviewer-info">
                  <img
                    src={person7}
                    alt="Elena's profile picture"
                    className="reviewer-profile-pic"
                  />
                  <div className="reviewer-details">
                    <h4>Emilienne</h4>
                    <p>9 Years on Travel Smart</p>
                  </div>
                </div>
                <div className="review-comment-rating">★★★★★ . July ago</div>
                <div className="reviewer-comment">
                  <p>
                    Logement impeccable et fonctionnel. Nous étions autonomes
                    dans notre logement au dernier étage.
                  </p>
                </div>
              </div>
            </div>

            <div className="add-review-section">
              <h3>Leave a Review</h3>
              <textarea
                id="userReview"
                rows="5"
                placeholder="Write your review here..."
              ></textarea>
              <button className="submit-review" onClick={console.log("hi")}>
                Submit Review
              </button>
            </div>

            <div id="reviewModal" className="modal">
              <div className="modal-content">
                <span className="close">&times;</span>
                <p>Your review has been submitted. Thank you!</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
      
    </>
  );
};

export default Accomodation;
