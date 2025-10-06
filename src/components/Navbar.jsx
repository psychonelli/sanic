import { Link } from 'react-router-dom';
// NOTE: You must update the path below to where your actual logo file is located.
import logoImage from '../assets/sanic-log.png'; // Update the path as necessary

function Navbar() {
  return (
    <nav>
      <div className="container">
        {/* Wrap the logo and text in a Link component that navigates to the home page ("/") */}
        <Link to="/" className="logo-link">
          <div className="logo">
            {/* Add the logo image here */}
            <img 
              src={logoImage} 
              alt="SecureGuard Logo" 
              className="logo-image" 
            />
        
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;