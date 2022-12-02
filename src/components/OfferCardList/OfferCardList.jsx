import "./OfferCardList.scss";
import filterIcon from "../../assets/icons/filter.png";
import OfferCard from "../OfferCard/OfferCard";
import Header from "../Header/Header.js";

const OfferCardList = () => {
  return (
    <>
    <Header />
      <div className="OfferCardList">
        <div className="OfferCardList__container">
          <div className="OfferCardList__text-container">
            <h1 className="OfferCardList__title">SWAP IN LOCAL OFFERS</h1>
            <p className="OfferCardList__copy">
              Swap your offers to earn more Miles!
            </p>
          </div>
          <div className="OfferCardList__filter">
            <img
              className="OfferCardList__filter-icon"
              alt=""
              src={filterIcon}
            />
          </div>
        </div>
        <div className="OfferCardList__cards">
          <OfferCard />
        </div>
      </div>
    </>
  );
};

export default OfferCardList;
