import React from 'react';
import '../index.css';

const Footer = (): React.JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">

          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-title">MeenMobileShop</h3>
            <p className="footer-text">123 Street Srijan</p>
            <p className="footer-text">City, Khonkaen 12345</p>
            <p className="footer-text">Phone: (66+) 012-345678</p>
            <p className="footer-text">Email: MeenMobile@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Phone</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-list">
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h3 className="footer-title">Subscribe</h3>
            <p className="footer-text">Subscribe to our newsletter for updates</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="footer-input"
                required
              />
              <button type="submit" className="footer-button">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 MeenMobileShop. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
