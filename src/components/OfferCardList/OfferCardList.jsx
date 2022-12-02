import OfferCard from "../OfferCard/OfferCard";
import "./OfferCardList.scss";
import filterIcon from "../../assets/icons/filter.png";

const OfferCardList = () => {
  return (
    <>
      <div className="OfferCardList">
        <div className="OfferCardList__container">
          <div className="OfferCardList__text-container">
            <h1 className="OfferCardList__title">Local Offers</h1>
            <p className="OfferCardList__copy">
              Swap offers to earn more Miles
            </p>
          </div>
          <div className="OfferCardList__filter">
            <img className="OfferCardList__filter-icon" alt="" src={filterIcon} />
          </div>
        </div>
        <div className="OfferCardList__cards">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </>
  );
};

export default OfferCardList;
