import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
export default function Footer(){
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust the offset to account for the header height
                behavior: 'smooth',
            });
        }
    };
    return(
        <div className="footer">
            <div className='footer-head'>
            <a className="nav-link active" aria-current="page" onClick={(e) => handleScroll(e, 'home')} href="#home">Home</a>
            <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
            <a className="nav-link" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a>
            </div>
            <div>
               <p><FontAwesomeIcon icon={faCopyright}/> Copyright 2024 YogaMate</p>
            </div>
        </div>
    )
}