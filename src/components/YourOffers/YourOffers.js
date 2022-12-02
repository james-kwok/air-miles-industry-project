import "./YourOffers.scss";
import rightArrowIcon from "../../assets/icons/RightArrowIcon.png";

import bmoCard from "../../assets/images/BmoCard.png";

import hMLogo from "../../assets/images/H&M.png";
import footLocker from "../../assets/images/FootLocker.png";
import luluLemon from "../../assets/images/LuluLemon.png";
import mcdonalds from "../../assets/images/Mcdonalds.png";
import uberEats from "../../assets/images/UberEats.png";
import doorDash from "../../assets/images/DoorDash.png";

import visitWebsiteIcon from "../../assets/icons/VisitWebsiteIcon.png";
import checkMark from "../../assets/icons/Checkmark.png";
import offersIcon from "../../assets/icons/OffersIcon.png";
import offersIcon2 from "../../assets/icons/OffersIcon2.png";

const YourOffers = () => {
    return (
        <section className="your-offer">
            <div className="your-offer__container">
                <p className="your-offer__blue-text">AIRMILES OFFERS</p>
                <p className="your-offer__grey-text">Activate this week's personalized offers</p>
                <div className="your-offer__visit-website-container">
                    <img className="your-offer__visit-icon" src={visitWebsiteIcon} alt="arrow angled"/>
                    <p className="your-offer__blue-text">Visit wesbite to complete (12)</p>
                </div>
            </div>

            <div className="card">
                <div className="card__info-container">
                    <div className="card__picture">
                        <img className="card__bmo" src={bmoCard} alt=""></img>
                    </div>
                    <div className="card__text-info-container">
                        <p className="card__cash-value">$150 in cash value</p>
                        <p className="card__info-text">1,500 welcome bonus 3x points for reacurring expenses in first 3 months.</p>
                        <p className="card__end-date">Ends 2023 Jul 31</p>
                    </div>
                </div>
                <div className="card__info-container">
                    <div className="card__picture">
                        <img className="card__hm" src={hMLogo} alt=""></img>
                    </div>
                    <div className="card__text-info-container">
                        <p className="card__cash-value">10 Bonus Miles for every $20</p>
                        <p className="card__info-text">For participating locations in Ontario*</p>
                        <p className="card__end-date">Ends 2022 Dec 25</p>
                    </div>
                </div>
                <div className="card__info-container">
                    <div className="card__picture">
                        <img className="card__foot-locker" src={footLocker} alt=""></img>
                    </div>
                    <div className="card__text-info-container">
                        <p className="card__cash-value">15 Bonus miles for every 20</p>
                        <p className="card__info-text">Final sales items are excluded from this offer*</p>
                        <p className="card__end-date">Ends 2022 Dec 16</p>
                    </div>
                </div>
                <div className="card__info-container">
                    <div className="card__picture">
                        <img className="card__lulu" src={luluLemon} alt=""></img>
                    </div>
                    <div className="card__text-info-container">
                        <p className="card__cash-value">10 Bonus miles for every $20</p>
                        <p className="card__info-text">Final sales items are excluded from this offer*</p>
                        <p className="card__end-date">Ends 2022 Dec 27</p>
                    </div>
                </div>
                <div className="card__logos-offer-container">
                    <div>
                        <img className="card__offers-icon" src={offersIcon} alt="Company logos"></img>
                    </div>
                    <div className="card__offers-icon-container">
                        <p className="card__offers">View all 12 offers</p>
                        <img className="card__arrow-icon" src={rightArrowIcon} alt="Right arrow" />
                    </div>
                </div>
            </div>
            <div className="ready-use__check-text-container">
                    <img className="ready-use__check" src={checkMark} alt="Checkmark"/>
                    <p className="ready-use__blue-text">Ready to use (15)</p>
                </div>
                
            <div className="card-ready-use">
                <div className="card-ready-use__info-container">
                    <div className="card-ready-use__picture">
                        <img className="card-ready-use__mcdonalds" src={mcdonalds} alt=""></img>
                    </div>
                    <div className="card-ready-use__text-info-container">
                        <p className="card-ready-use__cash-value">10 Bonus Miles for one combo</p>
                        <p className="card-ready-use__info-text">Regular priced item, participating locations only.</p>
                        <p className="card-ready-use__end-date">Ends in 6 days</p>
                    </div>
                </div>
                <div className="card-ready-use__info-container">
                    <div className="card-ready-use__picture">
                        <img className="card-ready-use__uber-eats" src={uberEats} alt=""></img>
                    </div>
                    <div className="card-ready-use__text-info-container">
                        <p className="card-ready-use__cash-value">50 Bonus miles for every order</p>
                        <p className="card-ready-use__info-text">Minimum order 20$ before tax and delivery fee. 4 orders per account.</p>
                        <p className="card-ready-use__end-date">Ends 2022 Dec 15</p>
                    </div>
                </div>
                <div className="card-ready-use__info-container">
                    <div className="card-ready-use__picture">
                        <img className="card-ready-use__door-dash" src={doorDash} alt=""></img>
                    </div>
                    <div className="card-ready-use__text-info-container">
                        <p className="card-ready-use__cash-value">40 Bonus miles for every order</p>
                        <p className="card-ready-use__info-text">Minimum order 20$ before tax and service charge.</p>
                        <p className="card-ready-use__end-date">Ends in 3 days</p>
                    </div>
                </div>
                <div className="card-ready-use__logos-offer-container">
                    <div>
                        <img className="card-ready-use__offers-icon" src={offersIcon2} alt="Company logos"></img>
                    </div>
                    <div className="card-ready-use__offers-icon-container">
                        <p className="card-ready-use__offers">View all 15 offers</p>
                        <img className="card-ready-use__arrow-icon" src={rightArrowIcon} alt="Right arrow" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YourOffers;