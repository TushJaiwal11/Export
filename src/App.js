import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Product1 from "./pages/onion";
import Product2 from "./pages/ginger";
import Product3 from "./pages/maize";
import CircleLoader from "react-spinners/CircleLoader";
import "./css/app.css";

function App() {
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 3000);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+917219696844"; // Replace with your phone number
    const message = "Hello, I need assistance! I am interested in your product";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loading-wrapper">
          <CircleLoader color="#D0021B" loading={loading} size={100} />
          <div className="loading-text"> Loading, please wait...</div>
        </div>
      ) : (
        <Router>
          <div>
            {/* Header Section */}
            <header className="header">
              <div className="logo">
                <img src="/logo/st.png" alt="Jain Export Logo" />
                <h1>Supermoon Traders</h1>
              </div>
              <button className="menu-toggle" onClick={toggleMenu}>
                ☰
              </button>
              <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <ul>
                  <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      About Us
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/products" onClick={toggleDropdown}>
                      Products
                    </Link>
                    {dropdownOpen && (
                      <div className="dropdown-content">
                        <Link to="/onion" onClick={() => setMenuOpen(false)}>
                          Onion
                        </Link>
                        <Link to="/ginger" onClick={() => setMenuOpen(false)}>
                          Ginger
                        </Link>
                        <Link to="/maize" onClick={() => setMenuOpen(false)}>
                          Maize
                        </Link>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/certificates" onClick={() => setMenuOpen(false)}>
                      Certificates
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </li>
                  <li>📞 +91 70285 52927  (Mr. Tushar Jaiwal)</li>
                </ul>
              </nav>
            </header>

            {/* Page Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/onion" element={<Product1 />} />
              <Route path="/ginger" element={<Product2 />} />
              <Route path="/maize" element={<Product3 />} />
              <Route path="/services" element={<Services />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* WhatsApp Button */}
            <div className="App">
              <div className="whatsapp-button" onClick={openWhatsApp}>
                <span className="chat-text">Need Help? Let's Chat</span>
                <div className="chat-icon">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp Icon"
                  />
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
              <div className="footer-container">
                <div className="footer-section">
                  <h3>Admin Office</h3>
                  <p>Supermoon Traders</p>
                  <p>
                    Shop number 2, First floor, Plot number C–11–21,
                    Smashan maroti road, Kailas Nagar,Ch Samhaji Nagar(Aurangabad) - 431001
                  </p>
                  <p>📞 +91 70285 52927 / 93222 51291</p>
                  <p> (Mr. Tushar Jaiwal)</p>
                  <p>📧 supermoontraders11@gmail.com</p>
                </div>
                <div className="footer-section">
                  <h3>Godown Address</h3>
                  <p>Supermoon Traders</p>
                  <p>
                    387, Lane no. 3, Kailas nagar, Ch Samhaji Nagar(Aurangabad), Maharashtra, India
                    431001,
                  </p>
                  <p>📞 +91 70285 52927 /  93222 51291 </p>
                  <p> (Mr. Tushar Jaiwal)</p>
                  <p>📧 supermoontraders11@gmail.com</p>
                </div>

                <div className="footer-section">
                  <h3>About</h3>
                  <p>
                    Supermoon Traders fully integrated and a professionally managed
                    firm. We have been recognized as prominent exporter, trader
                    and supplier for widest range of agro products.
                  </p>
                </div>

                <div className="footer-section">
                  <h3>Important Links</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/products">Product</Link>
                    </li>
                    <li>
                      <Link to="/onion">Onion</Link>
                    </li>
                    <li>
                      <Link to="/garlic">Garlic</Link>
                    </li>
                    <li>
                      <Link to="/maize">Maize</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com/tushar.jaiwal.5">
                  <img src="/logo/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/tushar-jaiwal-680919229/">
                  <img src="/logo/linkdin.png" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/tush_jaiwal_11/">
                  <img src="/logo/instagram.png" alt="Instagram" />
                </a>
                <a href="https://plus.google.com">
                  <img src="/logo/google.png" alt="Google Plus" />
                </a>
              </div>

              <div className="clv_copyright_wrapper">
                <p>copyright © 2022-23 Supermoon Traders all rights reserved.</p>
              </div>
            </footer>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
