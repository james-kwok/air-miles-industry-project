import "./OfferDetailsPage.scss";
import americanEagle from "../../assets/images/american_eagle.png";
import visitWebsite from "../../assets/icons/VisitWebsiteIcon.png";

const OfferDetailsPage = () => {
  return (
    <>
      <div className="OfferDetails">
        <div className="OfferDetails__image-container">
          <img
            className="OfferDetails-image"
            src={americanEagle}
            alt="american eagle logo"
          />
        </div>
        <div className="OfferDetails__text-container">
          <span className="OfferDetails__title">200 Bonus Miles</span>
          <p className="OfferDetails__copy">
            For every $50 spend on winter collection in stores *
          </p>
          <p className="OfferDetails__caption">Ends in 2 days</p>
        </div>
        <div className="OfferDetails__button">
          <a
            className="OfferDetails__button-text"
            href="https://www.ae.com/ca/en"
          >
            Shop Now
          </a>
          <img
            className="OfferDetails__button-icon"
            src={visitWebsite}
            alt="visit website icon"
          />
        </div>
        <div className="OfferDetails__terms">
          <span className="OfferDetails__conditions">Terms and Conditions</span>
          <p className="OfferDetails__conditions-text">
            1 Get 15x the AIR MILES® Reward Miles on qualifying purchases from
            November 28 00:00:01 a.m.ET on to 23:59:59 p.m.ET on December 4,
            2022. Offer applies to the total base Miles collected on qualifying
            purchase amount, excluding shipping, duty and taxes. Base Offer may
            vary per store; click on store logo at airmilesshops.ca for details.
            Collectors must sign in at airmilesshops.ca before purchasing in
            order to get Reward Miles. This offer does not apply to purchases or
            signups made at the following online stores: Disney+ and
            Wealthsimple. Offer can be combined with other Bonus Reward Miles
            offers. Travel must be booked by December 4, 2022 and completed by
            February 28, 2023 to qualify for Reward Miles. This offer is valid
            on the purchase of gift cards only at online retailers who regularly
            offer Reward Miles on gift card purchases. See airmilesshops.ca for
            details. All online stores are subject to change and may be
            withdrawn at any time. Please allow up to 90 days after the Bonus
            Offer end date for Bonus Miles to be posted to Collector Account. *
            airmilesshops.ca Base Offer: Get 1 AIR MILES® Reward Mile for every
            $20 CDN that you spend per transaction per online store excluding
            shipping, handling, duties and taxes. Base offer may vary, click
            “Store Info” on online store logo on airmilesshops.ca for offer
            details. All online stores are subject to change and may be
            withdrawn without notice at any time. Collector must sign in at
            airmilesshops.ca before purchasing in order to get Reward Miles.
            Reward Miles will be posted to your Collector Account within 60
            days. ®TM Trademarks of AM Royalties Limited Partnership used under
            license by LoyaltyOne, Co. Retailer trademarks are owned by the
            respective retailers or authorized for their use in Canada.
            **airmilesshops.ca Multiplier Offers: LIMITED TIME OFFERS. AIR
            MILES® Reward Miles multiplier offers apply to the total base Reward
            Miles earned on qualifying purchase amount excluding shipping,
            handling, duties and taxes. Online store offers are subject to
            change without notice. See specific online store on airmilesshops.ca
            for offer details and any restrictions. Bonus Reward Miles will be
            posted to your Collector Account within 75 days. Prices are not
            always in Canadian Dollars. Please refer to each individual online
            store’s page on airmilesshops.ca to determine what currency is being
            displayed. While we make every effort to assure the accuracy of
            product information, we do not assume any liability for
            inaccuracies. Product information including price, availability,
            sales tax, and estimated shipping costs are provided by the
            affiliated online stores. LoyaltyOne, Co. assumes no responsibility
            for the accuracy or timeliness of information provided by the
            affiliated online stores. Please check the individual online store
            websites to confirm the accuracy of the information provided.
            ****Earn twice when you use your BMO AIR MILES Mastercard to make
            qualifying purchases online through airmilesshops.ca [and enter your
            AIR MILES Number]. The amount of Miles you get depends on the earn
            rate offered by the AIR MILES Partner and the earn rate offered on
            your BMO AIR MILES credit card. © 1999 – 2021 ®TMTrademarks of AM
            Royalties Limited Partnership used under license by LoyaltyOne, Co.
            Partner trademarks are owned by the respective Partner or authorized
            for their use in Canada. To collect AIR MILES® Reward Miles you must
            be a Canadian resident.
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferDetailsPage;
