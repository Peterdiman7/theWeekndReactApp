import './FooterStyles.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-cintainer">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color: "#ffffff", marginRight: '2rem'}}/>
                    <div>
                        <p>123 Acme St.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#ffffff", marginRight: '2rem'}}/>1-700-123-1234</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#ffffff", marginRight: '2rem'}} />theWeeknd@music.com</h4>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Mollitia dicta aut, facilis adipisci porro autem, ea,
                        totam delectus ullam ab quibusdam animi pariatur. Veniam
                        aliquam eius doloremque. Suscipit, unde odit!</p>
                </div>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#ffffff", marginRight: '2rem'}}/>
                    <FaTwitter size={30} style={{color: "#ffffff", marginRight: '2rem'}}/>
                    <FaLinkedin size={30} style={{color: "#ffffff", marginRight: '2rem'}}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;