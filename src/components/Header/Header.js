
import './Header.scss';

import { NavLink} from 'react-router-dom';

import creditCard from "../../assets/icons/CreditCardIcon.png";
import checkMark from "../../assets/icons/BellIcon.png";


const Header = ({navLinkSelected}) => {
    return (
        <div className='header'>
            <div className='header__icon-title-container'>
                <img src={checkMark} className='header__icon' alt="Credit card"/>
                <p className='header__title'>Offers</p>
                <img src={creditCard} className='header__icon' alt="Bell"/>
            </div>

        
            <div className="header__nav-links">
                <NavLink style={({ isActive }) => (isActive || navLinkSelected === "active" ? {color: '#538FE1'} : {color: '#7D8590'})} to="/">Your Offers</NavLink>
                <NavLink style={({ isActive }) => (isActive ? {color: '#538FE1'} : {color: '#7D8590'})} to="/swapOffers">Swap Offers</NavLink>
            </div>
        </div>
    );
};

export default Header;