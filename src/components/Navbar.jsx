import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close the navbar when a link is clicked
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
    
    >
      <Container >
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar.Brand href="#home" className="brand-wrapper" style={{ letterSpacing: "1px"}}>
            <span className="brand-logo" aria-hidden>VK</span>
            <span className="brand-text fw-bold fs-4">
              <span className="brand-first">Venkatesh</span>
              <span className="brand-last">Kumar</span>
            </span>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Nav.Link
                  href={link.href}
                  onClick={() => onUpdateActiveLink(link.name.toLowerCase())}
                  className={`nav-link-custom ${
                    activeLink === link.name.toLowerCase() ? "active" : ""
                  }`}
                >
                  {link.name}
                </Nav.Link>
              </motion.div>
            ))}

            {/* Social Icons */}
            <div className="d-flex gap-3 ms-3 social-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS */}
      <style>{`
        .custom-navbar {
          padding: 0.8rem 1rem;
          background: transparent;
          transition: all 0.4s ease-in-out;
        }

        .navbar-top {
          background: rgba(50, 48, 48, 0.3);
          backdrop-filter: blur(8px);
        }

        .navbar-scrolled {
          background: rgba(10, 10, 10, 0.9);
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
        }

        .text-gradient {
          background: linear-gradient(90deg, #00d2ff, #3a47d5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-link-custom {
          color: #ccc !important;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #00d2ff !important;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00d2ff, #3a47d5);
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after,
        .nav-link-custom.active::after {
          width: 100%;
        }

        .social-icons a {
          color: #aaa;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          color: #00d2ff;
          transform: scale(1.2);
        }

        .custom-toggle {
          border: none;
          filter: invert(1);
        }

        /* Brand styles */
        .brand-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .brand-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(90deg, #00d2ff, #3a47d5);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 6px 18px rgba(58, 71, 213, 0.18);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .brand-logo:hover {
          transform: translateY(-3px) rotate(-6deg);
          box-shadow: 0 10px 26px rgba(58, 71, 213, 0.28);
        }

        .brand-text { 
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #eee;
        }

        .brand-first { color: #ddd; }

        .brand-last {
          background: linear-gradient(90deg, #00d2ff, #3a47d5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* subtle underline on hover */
        .brand-wrapper:hover .brand-text::after {
          content: "";
          display: block;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, rgba(0,210,255,0.9), rgba(58,71,213,0.9));
          border-radius: 3px;
          margin-top: 4px;
          transform-origin: left;
          animation: brand-underline 360ms ease forwards;
        }

        @keyframes brand-underline {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        @media (max-width: 992px) {
          /* Tighter mobile collapsed menu */
          .navbar-collapse {
            padding: 0.25rem 0.5rem; /* reduce overall collapse padding */
          }

          .nav {
            gap: 0.4rem; /* reduce space between nav items */
          }

          .nav-link-custom {
            display: block;
            text-align: center;
            margin: 0.25rem 0; /* half the vertical margin */
            padding: 0.35rem 0; /* smaller touch target but still tappable */
            font-size: 0.95rem; /* slightly smaller text */
          }

          .social-icons {
            justify-content: center;
            margin-top: 0.25rem; /* tighten social icon area */
          }

          .brand-text {
            font-size: 0.95rem; /* keep brand compact on small screens */
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavbarComponent;
