import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faAddressCard, faPhone, faEnvelope, faWifi, faFilePdf, faImage, faSms } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav>
        <Link to='/'> <FontAwesomeIcon icon={faLink} /><span>  URL</span></Link>
        <Link to='/vcard'> <FontAwesomeIcon icon={faAddressCard} /><span> Vcard</span></Link>
        <Link to='/phone'><FontAwesomeIcon icon={faPhone} /><span> Phone</span></Link>
        <Link to='/sms'><FontAwesomeIcon icon={faSms} /><span> SMS</span></Link>
        <Link to='/mail'><FontAwesomeIcon icon={faEnvelope} /><span> Mail</span></Link>
        <Link to='/wifi'><FontAwesomeIcon icon={faWifi} /><span> WiFi</span></Link>
        <Link to='/pdf'> <FontAwesomeIcon icon={faFilePdf} /><span> PDF</span></Link>
        <Link to='/image'><FontAwesomeIcon icon={faImage} /><span> Image</span></Link>
        <div className="animation start-home"></div>
    </nav>
  )
}

