import "./OfferCard.scss";
import sephora from "../../assets/images/sephora3x.png";
import goodFood from "../../assets/images/good_food.png";
import americanEagle from "../../assets/images/american_eagle.png";
import spotify from "../../assets/images/spotify.png";
import indigo from "../../assets/images/indigo.png";
import airBnb from "../../assets/images/airbnb.png";
import amazon from "../../assets/images/amazon.png";
import lululemon from "../../assets/images/LuluLemon.png";
import swapIcon from "../../assets/icons/swap_icon.png";
import { useNavigate } from "react-router-dom";

const OfferCard = () => {

  const navigate = useNavigate();

  const handleSwapClick = () => {
    navigate("/selected")
    window.scrollTo(0, 0)
  };

  const handleDetailsPage = () => {
    navigate("/offerDetails")
    window.scrollTo(0, 0)
  };

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
          <p className="OfferCard__duration-text">Ends in 5 hours</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">500 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img
            className="OfferCard__image"
            src={goodFood}
            alt="goodfood-logo"
          />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">
            Spend $50 at Goodfood, using a linked mastercard*
          </h2>
          <p className="OfferCard__duration-text">Ends in 48 hours</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
      <div className="OfferCard">
          <div className="OfferCard__banner" onClick={handleDetailsPage}>
            <span className="OfferCard__banner-text">1000 Bonus Miles</span>
          </div>
          <div className="OfferCard__image-container" onClick={handleDetailsPage}>
            <img
              className="OfferCard__image"
              src={americanEagle}
              alt="sephora-logo"
            />
          </div>
          <div className="OfferCard__text-container" onClick={handleDetailsPage}>
            <h2 className="OfferCard__title">
              For every $50 winter collection, online purchase limited
            </h2>
            <p className="OfferCard__duration-text">Ends in 2 days</p>
          </div>
          <div className="OfferCard__button">
            <img
              className="OfferCard__swap-icon"
              src={swapIcon}
              alt="swap icon"
            />
            <a className="OfferCard__button-text" onClick={handleSwapClick}>Swap</a>
          </div>
      </div>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">50 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img className="OfferCard__image" src={spotify} alt="spotify-logo" />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">
            Sign up for a premium for 6 months
          </h2>
          <p className="OfferCard__duration-text">Ends in 4 days</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">200 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img className="OfferCard__image" src={indigo} alt="indigo-logo" />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">
            Purchase books or stationary of $50 or more, in-store
          </h2>
          <p className="OfferCard__duration-text">Ends in 5 days</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">95 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img className="OfferCard__image" src={airBnb} alt="airbnb-logo" />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">
            Purchase books or stationary of $50 or more, in-store
          </h2>
          <p className="OfferCard__duration-text">Ends in 6 days</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">500 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img className="OfferCard__image" src={amazon} alt="amazon-logo" />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">
            Purchase books or stationary of $50 or more, in-store
          </h2>
          <p className="OfferCard__duration-text">Ends in 6 days</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
      <div className="OfferCard">
        <div className="OfferCard__banner">
          <span className="OfferCard__banner-text">20 Bonus Miles</span>
        </div>
        <div className="OfferCard__image-container">
          <img
            className="OfferCard__image"
            src={lululemon}
            alt="lululemon-logo"
          />
        </div>
        <div className="OfferCard__text-container">
          <h2 className="OfferCard__title">
            Purchase books or stationary of $50 or more, in-store
          </h2>
          <p className="OfferCard__duration-text">Ends in 6 days</p>
        </div>
        <div className="OfferCard__button">
          <img
            className="OfferCard__swap-icon"
            src={swapIcon}
            alt="swap icon"
          />
          <a className="OfferCard__button-text">Swap</a>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
