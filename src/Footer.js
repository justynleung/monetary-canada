import './css/footer.css';

export default function Footer() {
  return (
    <footer>
        <div class="footer-wraper_main">
                    <div class="footer-wraper_row">
                        <div class="icon-wraper">
                            <span class="icon"></span>
                        </div>
                        <div class="social-icons-wraper">
                            <div class="social-icons">
                                <a href="#!">
                                    <i class="fab fa-twitter fa-2x"></i>
                                </a>
                            </div>
                            <div class="social-icons">
                                <a href="#!">
                                    <i class="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                            <div class="social-icons">
                                <a href="#!">
                                    <i class="fab fa-youtube fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-wraper_col">
                        <div class="footer-wraper_row">
                            <h3 class="footer_header">About</h3>
                            <a href="#!" class="footer_link">
                                About Us
                            </a>
                        </div>
                        <div class="footer-wraper_row">
                             <h3 class="footer_header">Guide</h3>
                            <a href="blog.html" class="footer_link">
                                Blog
                            </a>
                        </div>
                        <div class="footer-wraper_row">
                             <h3 class="footer_header">Disclosure</h3>
                            <a href="affiliate-disclosure.html" class="footer_link">
                                Affiliate Disclosure
                            </a>
                        </div>
                        <div class="footer-wraper_row">
                             <h3 class="footer_header">Stay updated</h3>
                            <div class="signup"></div>
                        </div>
                    </div>
                    <div class="footer-wraper_copyright">
                        <div class="footer-wraper_copyright_text">
                            <p class="footer-wraper_row">&copy; MonetaryCanada 2023<br/><br/>MonetaryCanada strives to ensure the accuracy and currency of the information provided on our website. However, the information may differ from what you find on the websites of financial institutions or service providers. The Annual Percentage Rate (APR) and monthly payments displayed on pages comparing personal installment loans are approximations calculated based on the information you provide. All financial products and services are presented without any guarantees. When considering offers, please carefully review the Terms and Conditions of the financial institution. If you notice any inconsistencies in the information, please contact the financial institution directly.<br/><br/>The information provided on this website is solely for informational purposes, and MonetaryCanada, along with its affiliated entities, does not encourage or request any action based on this information. The material should not be interpreted as an offer or suggestion to purchase or sell investments, nor should it be considered as investment advice. MonetaryCanada is not a registered investment, legal, or tax advisor, nor a broker/dealer. All content must be used exclusively for informational purposes. It is crucial to conduct your own analysis before making any investment decisions.</p>
                        </div> 
                    </div> 
                </div>
    </footer>
  );
}

