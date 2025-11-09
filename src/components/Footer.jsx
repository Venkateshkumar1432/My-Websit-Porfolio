import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="footer text-light pt-5 pb-4"
      style={{
        background: "linear-gradient(180deg, #fcfcffff 0%, #ffffffff 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        <Row className="gy-5 justify-content-between align-items-start">
          {/* About Section */}
          <Col md={5}>
            <h3
              className="fw-bold mb-3"
              style={{
                color: "#00b4d8",
                textShadow: "0 0 10px rgba(0,180,216,0.3)",
              }}
            >
              Venkatesh Kumar
            </h3>
            <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
              Passionate <span className="text-info">Full Stack Developer</span> focused on
              building modern, responsive, and scalable web applications using
              technologies like React.js, Node.js, Express, and MongoDB.
              Dedicated to crafting seamless digital experiences.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5 className="fw-bold mb-3 text-info">Quick Links</h5>
            <ul className="list-unstyled">
              {["home", "about", "projects", "blogs", "contact"].map((link) => (
                <li key={link} className="mb-2">
                  <a href={`#${link}`} className="footer-link">
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact / Social Links */}
          <Col md={2}>
            <h5 className="fw-bold mb-3 text-info">Connect</h5>
            <div className="d-flex gap-3 mb-3 flex-wrap">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/venkatesh-kumar-443730245/",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Venkateshkumar1432/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/venkatesh_nagond?igsh=MWw2c2RsamVtemwwdA==",
                },
                {
                  icon: <FaEnvelope />,
                  link: "https://wa.me/qr/KXUA7PFTPAGVD1",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-glow"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-muted small mb-1">
              <FaEnvelope className="me-2 text-primary" />
              sdmp75407@gmail.com
            </p>
            <p className="text-muted small mb-0">
              <FaPhoneAlt className="me-2 text-primary" /> +91 8296460198
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted small mb-0">
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#00b4d8" }}>Venkatesh Kumar</span>. All Rights Reserved.  
            <span className="ms-1">Built with ❤️ using React.js</span>
          </p>
        </div>
      </Container>

      {/* Inline CSS Styling */}
      <style>{`
        .footer-link {
          color: #b8c1ec;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background-color: #00b4d8;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:hover {
          color: #00b4d8;
          padding-left: 4px;
        }

        .social-icon-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.05);
          color: #00b4d8;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(0,180,216,0.3);
        }

        .social-icon-glow:hover {
          background-color: #00b4d8;
          color: #fff;
          box-shadow: 0 0 25px #00b4d8;
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }
          .social-icon-glow {
            margin: 0 auto;
          }
          .footer-link:hover {
            padding-left: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
