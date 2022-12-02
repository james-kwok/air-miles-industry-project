
import "./Footer.scss";
import FooterNavBar from "../../assets/images/FooterNavBar.png";

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__img" src={FooterNavBar} alt="Navigation bar"></img>
        </div>
    );
};

export default Footer;