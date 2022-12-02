import "./OfferCard.scss";
import sephora from "../../assets/images/sephora3x.png";

const OfferCard = () => {
  return (
    <>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">500 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img className="OfferCard__image" src={sephora} alt="sephora-logo" />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">Spend $50 at Sephora, in-store</h2>
          <p className="OfferCard__duration-text">Ends in 5 days</p>
        </div>
        <div className="OfferCard__button">
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
