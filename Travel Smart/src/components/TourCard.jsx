import '../assets/css/tourcard.css'
import { useNavigate } from "react-router-dom";

const TourCard = ({ tour }) => {
    const navigate = useNavigate();

    const goToTour = (id) => {
        navigate(`/destination/${id}`);
      };

    return ( 
        <div className="card" onClick={() => {goToTour(tour.id)}}>
        <img src={tour.image} alt="Hotel Image" />
        <div className="card-content">
          <h2 className="sinen-h2">{tour.title}</h2>
          <p>{tour.location}</p>
          <div className="rating">
            <span>{tour.rating.stars} stars - {tour.rating.score}/10 ({tour.rating.reviews} reviews)</span>
          </div>
          <p className="flight-info">{tour.flightInfo.origin} - {tour.flightInfo.destination}</p>
          <div className="price-section">
            <div className="discount">
              <p>
                <span className="off">₦{tour.price.discount} off</span>
              </p>
            </div>
            <div className="price">
              <p>
                <strong>₦{tour.price.current}</strong>
                <span className="original-price">₦{tour.price.original}</span>
              </p>
            </div>
            <p>per Guest</p>
            <p className="dates">
              {tour.duration.startDate} - {tour.duration.endDate} ({tour.duration.nights} nights)
            </p>
          </div>
        </div>
      </div>
     );
}
 
export default TourCard;