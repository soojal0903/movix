import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                All rights reserved: Copyright © Movix. Reproduction or distribution of any content without permission is prohibited.
                Movie posters and images used on our website are for promotional purposes only and belong to their respective owners. 
                </div>
                <div className="socialIcons">
                <a href="https://www.facebook.com/soojal.bhau.9/" style={{ color: '#FFF' }}  target="_blank">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                </a>
                <a href="https://www.instagram.com/soojal777/" style={{ color: '#FFF' }}  target="_blank">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                </a>
                <a href="https://twitter.com/Soojal51036436" style={{ color: '#FFF' }}  target="_blank">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/soojal-singh-2a62b2225/" style={{ color: '#FFF' }}  target="_blank">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
