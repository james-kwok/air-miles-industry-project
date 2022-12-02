import "./NewYourOffer.scss";

import Header from "../../components/Header/Header.js";

import rightArrowIcon from "../../assets/icons/RightArrowIcon.png";

import bmoCard from "../../assets/images/BmoCard.png";

import hMLogo from "../../assets/images/H&M.png";
import americanEagle from "../../assets/images/AmericanEagle.png";

import footLocker from "../../assets/images/FootLocker.png";
import luluLemon from "../../assets/images/LuluLemon.png";
import mcdonalds from "../../assets/images/Mcdonalds.png";
import uberEats from "../../assets/images/UberEats.png";
import doorDash from "../../assets/images/DoorDash.png";

import visitWebsiteIcon from "../../assets/icons/VisitWebsiteIcon.png";
import checkMark from "../../assets/icons/Checkmark.png";
import offersIcon from "../../assets/icons/OffersIcon.png";
import offersIcon2 from "../../assets/icons/OffersIcon2.png";

import { useState } from 'react';

const NewYourOffers = () => {

    const [img, setImg] = useState(hMLogo)
    const [value, setValue] = useState("10 Bonus Miles for every $20")
    const [text, setText] = useState("For participating locations in Ontario*")
    const [date, setDate] = useState("Ends 2022 Dec 25")

    const [navLinkSelected, _setNavLinkSelected] = useState("active")


    const [imgClass, setImgClass] = useState("new-card__hm");


    const [confirmDiv, setConfirmDiv] = useState("confirm__text-button-container-hidden")

    const [buttonClass, setButtonClass] = useState("new-card__swap-me-button")
    const [buttonClass2, setButtonClass2] = useState("new-card__swap-me-button2")
    const [buttonClass3, setButtonClass3] = useState("new-card__swap-me-button3")
    const [buttonClass4, setButtonClass4] = useState("new-card__swap-me-button4")
    const [buttonClass5, setButtonClass5] = useState("new-card__swap-me-button5")
    const [buttonClass6, setButtonClass6] = useState("new-card__swap-me-button6")
    const [buttonClass7, setButtonClass7] = useState("new-card__swap-me-button7")
    const [buttonText, setButtonText] = useState("Swap out")
    const [buttonText2, setButtonText2] = useState("Swap out")
    const [buttonText3, setButtonText3] = useState("Swap out")
    const [buttonText4, setButtonText4] = useState("Swap out")
    const [buttonText5, setButtonText5] = useState("Swap out")
    const [buttonText6, setButtonText6] = useState("Swap out")
    const [buttonText7, setButtonText7] = useState("Swap out")
    const [newCardInfoContainer, setnewCardInfoContainer] = useState("new-card__info-container")
    const [newCardInfoContainer2, setnewCardInfoContainer2] = useState("new-card__info-container2")
    const [newCardInfoContainer3, setnewCardInfoContainer3] = useState("new-card__info-container3")
    const [newCardInfoContainer4, setnewCardInfoContainer4] = useState("new-card__info-container4")
    const [newCardReadyUseInfoContainer, setnewCardReadyUseInfoContainer] = useState("new-card-ready-use__info-container")
    const [newCardReadyUseInfoContainer2, setnewCardReadyUseInfoContainer2] = useState("new-card-ready-use__info-container2")
    const [newCardReadyUseInfoContainer3, setnewCardReadyUseInfoContainer3] = useState("new-card-ready-use__info-container3")
    

    const handleSwapMeClick = () => {
        setButtonClass("new-card__swap-me-button-selected")
        setButtonText("Selected")
        setnewCardInfoContainer("new-card__info-container-selected")
        setConfirmDiv("confirm__text-button-container")
      };

      const handleSwapMeClick2 = () => {
        setButtonClass2("new-card__swap-me-button-selected2")
        setButtonText2("Selected")
        setnewCardInfoContainer2("new-card__info-container-selected2")
        setConfirmDiv("confirm__text-button-container")
      };
      const handleSwapMeClick3 = () => {
        setButtonClass3("new-card__swap-me-button-selected3")
        setButtonText3("Selected")
        setnewCardInfoContainer3("new-card__info-container-selected3")
        setConfirmDiv("confirm__text-button-container")
      };
      const handleSwapMeClick4 = () => {
        setButtonClass4("new-card__swap-me-button-selected4")
        setButtonText4("Selected")
        setnewCardInfoContainer4("new-card__info-container-selected4")
        setConfirmDiv("confirm__text-button-container")
      };

      const handleSwapMeClick5 = () => {
        setButtonClass5("new-card__swap-me-button-selected5")
        setButtonText5("Selected")
        setnewCardReadyUseInfoContainer("new-card-ready-use__info-container-selected")
        setConfirmDiv("confirm__text-button-container")
      };

      const handleSwapMeClick6 = () => {
        setButtonClass6("new-card__swap-me-button-selected6")
        setButtonText6("Selected")
        setnewCardReadyUseInfoContainer2("new-card-ready-use__info-container-selected2")
        setConfirmDiv("confirm__text-button-container")
      };

      const handleSwapMeClick7 = () => {
        setButtonClass7("new-card__swap-me-button-selected7")
        setButtonText7("Selected")
        setnewCardReadyUseInfoContainer3("new-card-ready-use__info-container-selected3")
        setConfirmDiv("confirm__text-button-container")
      };

      const handleConfirmClick = () => {
        setImg(americanEagle)
        setImgClass("new-card__american-eagle")
        setValue("200 Bonus miles for every 50$")
        setText("Winter collection purchased on online. Visit www.ae.com/ca/")
        setDate("Ends in 6 days")
        setButtonClass2("new-card__swap-me-button2")
        setnewCardInfoContainer2("new-card__info-container2")
        setConfirmDiv("confirm__text-button-container-hidden")
        setButtonClass("new-card__swap-me-button-hidden")
        setButtonClass2("new-card__swap-me-button-hidden")
        setButtonClass3("new-card__swap-me-button-hidden")
        setButtonClass4("new-card__swap-me-button-hidden")
        setButtonClass5("new-card__swap-me-button-hidden")
        setButtonClass6("new-card__swap-me-button-hidden")
        setButtonClass7("new-card__swap-me-button-hidden")
      };

    return (
        <>
        <Header navLinkSelected={navLinkSelected}/>
        <section className="new-your-offer">
            <div className="new-your-offer__container">
                <p className="new-your-offer__blue-text">AIRMILES OFFERS</p>
                <p className="new-your-offer__grey-text">Activate this week's personalized offers</p>
                <div className="new-your-offer__visit-website-container">
                    <img className="new-your-offer__visit-icon" src={visitWebsiteIcon} alt="arrow angled"/>
                    <p className="new-your-offer__blue-text">Visit wesbite to complete (12)</p>
                </div>
            </div>

            <div className="new-card">
                <div className={newCardInfoContainer}>
                    <div className="new-card__picture">
                        <img className="new-card__bmo" src={bmoCard} alt=""></img>
                    </div>
                    <div className="new-card__text-info-container">
                        <p className="new-card__cash-value">$150 in cash value</p>
                        <p className="new-card__info-text">1,500 welcome bonus 3x points for reacurring expenses in first 3 months.</p>
                        <div className="new-card__buton-date-container">
                            <p className="new-card__end-date">Ends 2023 Jul 31</p>
                            <button onClick={handleSwapMeClick} className={buttonClass}>{buttonText}</button>
                        </div>
                    </div>
                </div>
                <div className={newCardInfoContainer2}>
                    <div className="new-card__picture">
                        <img className={imgClass} src={img} alt=""></img>
                    </div>
                    <div className="new-card__text-info-container">
                        <p className="new-card__cash-value">{value}</p>
                        <p className="new-card__info-text">{text}</p>
                        <div className="new-card__buton-date-container">
                            <p className="new-card__end-date">{date}</p>
                            <button onClick={handleSwapMeClick2} className={buttonClass2}>{buttonText2}</button>
                        </div>
                    </div>
                </div>
                <div className={newCardInfoContainer3}>
                    <div className="new-card__picture">
                        <img className="new-card__foot-locker" src={footLocker} alt=""></img>
                    </div>
                    <div className="new-card__text-info-container">
                        <p className="new-card__cash-value">15 Bonus miles for every 20</p>
                        <p className="new-card__info-text">Final sales items are excluded from this offer*</p>
                        <div className="new-card__buton-date-container">
                        <p className="new-card__end-date">Ends 2022 Dec 16</p>
                            <button onClick={handleSwapMeClick3} className={buttonClass3}>{buttonText3}</button>
                        </div>
                    </div>
                </div>
                <div className={newCardInfoContainer4}>
                    <div className="new-card__picture">
                        <img className="new-card__lulu" src={luluLemon} alt=""></img>
                    </div>
                    <div className="new-card__text-info-container">
                        <p className="new-card__cash-value">10 Bonus miles for every $20</p>
                        <p className="new-card__info-text">Final sales items are excluded from this offer*</p>
                        <div className="new-card__buton-date-container">
                        <p className="new-card__end-date">Ends 2022 Dec 27</p>
                            <button onClick={handleSwapMeClick4} className={buttonClass4}>{buttonText4}</button>
                        </div>
                    </div>
                </div>
                <div className="new-card__logos-offer-container">
                    <div>
                        <img className="new-card__offers-icon" src={offersIcon} alt="Company logos"></img>
                    </div>
                    <div className="new-card__offers-icon-container">
                        <p className="new-card__offers">View all 12 offers</p>
                        <img className="new-card__arrow-icon" src={rightArrowIcon} alt="Right arrow" />
                    </div>
                </div>
            </div>
            <div className="new-ready-use__check-text-container">
                    <img className="new-ready-use__check" src={checkMark} alt="Checkmark"/>
                    <p className="new-ready-use__blue-text">Ready to use (15)</p>
                </div>
                
            <div className="new-card-ready-use">
                <div className={newCardReadyUseInfoContainer}>
                    <div className="new-card-ready-use__picture">
                        <img className="new-card-ready-use__mcdonalds" src={mcdonalds} alt=""></img>
                    </div>
                    <div className="new-card-ready-use__text-info-container">
                        <p className="new-card-ready-use__cash-value">10 Bonus Miles for one combo</p>
                        <p className="new-card-ready-use__info-text">Regular priced item, participating locations only.</p>
                        <div className="new-card__buton-date-container">
                        <p className="new-card-ready-use__end-date">Ends in 6 days</p>
                            <button onClick={handleSwapMeClick5} className={buttonClass5}>{buttonText5}</button>
                        </div>
                    </div>
                </div>
                <div className={newCardReadyUseInfoContainer2}>
                    <div className="new-card-ready-use__picture">
                        <img className="new-card-ready-use__uber-eats" src={uberEats} alt=""></img>
                    </div>
                    <div className="new-card-ready-use__text-info-container">
                        <p className="new-card-ready-use__cash-value">50 Bonus miles for every order</p>
                        <p className="new-card-ready-use__info-text">Minimum order 20$ before tax and delivery fee. 4 orders per account.</p>
                        <div className="new-card__buton-date-container">
                        <p className="new-card-ready-use__end-date">Ends 2022 Dec 15</p>
                            <button onClick={handleSwapMeClick6} className={buttonClass6}>{buttonText6}</button>
                        </div>
                    </div>
                </div>
                <div className={newCardReadyUseInfoContainer3}>
                    <div className="new-card-ready-use__picture">
                        <img className="new-card-ready-use__door-dash" src={doorDash} alt=""></img>
                    </div>
                    <div className="new-card-ready-use__text-info-container">
                        <p className="new-card-ready-use__cash-value">40 Bonus miles for every order</p>
                        <p className="new-card-ready-use__info-text">Minimum order 20$ before tax and service charge.</p>
                        <div className="new-card__buton-date-container">
                            <p className="new-card-ready-use__end-date">Ends in 3 days</p>
                            <button onClick={handleSwapMeClick7} className={buttonClass7}>{buttonText7}</button>
                        </div>
                    </div>
                </div>
                <div className="new-card-ready-use__logos-offer-container">
                    <div>
                        <img className="new-card-ready-use__offers-icon" src={offersIcon2} alt="Company logos"></img>
                    </div>
                    <div className="new-card-ready-use__offers-icon-container">
                        <p className="new-card-ready-use__offers">View all 15 offers</p>
                        <img className="new-card-ready-use__arrow-icon" src={rightArrowIcon} alt="Right arrow" />
                    </div>
                </div>
            </div>
        </section>
        <div className={confirmDiv}>
                <p className="confirm__offers-selected">1 offer selected to swap</p>
                <button className="confirm__confirm-button" onClick={handleConfirmClick}>Confirm</button>
            </div>
        </>
    );
};

export default NewYourOffers;