// Style 
import '../../css/footer.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (
        <footer>
            <div className="footer-wrapper_main">
                <div className="footer-wrapper --flex_row">
                    <div className="footer-wrapper --flex_col">
                        <h3 className="footer_header">About</h3>
                        <a href="#!" className="footer_link">
                            About Us
                        </a>
                    </div>
                    <div className="footer-wrapper --flex_col">
                        <h3 className="footer_header">Guide</h3>
                        <a href="blog.html" className="footer_link">
                            Blog
                        </a>
                    </div>
                    <div className="footer-wrapper --flex_col">
                        <h3 className="footer_header">Disclosure</h3>
                        <a href="affiliate-disclosure.html" className="footer_link">
                            Affiliate Disclosure
                        </a>
                    </div>
                    <div className="footer-wrapper --flex_col">
                        <h3 className="footer_header">Stay updated</h3>
                        <div className="signup"></div>
                    </div>
                </div>
                <div className="footer-wrapper --flex_col">
                    {/* <div className="logo-wrapper">
                            <img src={logo} alt="Monetary Canada Logo" className="logo"/>
                        </div> */}
                    <div className="social-icons-wrapper">
                        <div className="social-icons">
                            <a href="#!">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a href="#!">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a href="#!">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper_copyright">
                    <div className="footer-wrapper_copyright_text">
                        <p className="footer-wrapper_row">&copy; MonetaryCanada 2023<br /><br />MonetaryCanada strives to ensure the accuracy and currency of the information provided on our website. However, the information may differ from what you find on the websites of financial institutions or service providers. The Annual Percentage Rate (APR) and monthly payments displayed on pages comparing personal installment loans are approximations calculated based on the information you provide. All financial products and services are presented without any guarantees. When considering offers, please carefully review the Terms and Conditions of the financial institution. If you notice any inconsistencies in the information, please contact the financial institution directly.<br /><br />The information provided on this website is solely for informational purposes, and MonetaryCanada, along with its affiliated entities, does not encourage or request any action based on this information. The material should not be interpreted as an offer or suggestion to purchase or sell investments, nor should it be considered as investment advice. MonetaryCanada is not a registered investment, legal, or tax advisor, nor a broker/dealer. All content must be used exclusively for informational purposes. It is crucial to conduct your own analysis before making any investment decisions.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

