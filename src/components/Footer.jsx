import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <p>Phone: (+94) 767 649 974</p>
            <p>Email: scanigamlath@gmail.com</p>
            <p>Address: Lake Edge Residencis, Attidiya road, Dehiwala,Sri Lanka</p>
            <a href="mailto:scanigamlath@gmail.com" className="button">Get in Touch</a>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sanic Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;