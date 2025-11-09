import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import my_pic from "../assets/my_pic.jpeg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  const roles = ["Full Stack Developer", "DevOps Enthusiast"];
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, roles]);

  return (
    <section
      id="home"
      style={{
        paddingTop: "130px",
        paddingBottom: "100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0b0c10, #1f2833)",
        color: "#ffffff",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Section */}
          <Col md={6} className="d-flex flex-column justify-content-center order-2 order-md-1">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "3rem",
                  lineHeight: "1.3",
                  color: "#fff",
                }}
              >
                Hi, I'm{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #00d2ff, #3a47d5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Venkatesh Kumar
                </span>
              </h1>

              <h2
                className="typewriter mb-4"
                style={{
                  fontSize: "1.5rem",
                  color: "#ccc",
                  fontFamily: "monospace",
                  minHeight: "35px",
                  borderRight: "0.1px solid #00d2ff",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "inline-block",
                }}
              >
                {displayText}
              </h2>

              <div className="mt-4">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Button
                    variant="primary"
                    href="https://drive.google.com/file/d/1kXhVZm_QDKGoXHflFUGWNndieaYs2TJr/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3 px-4 py-2"
                    style={{
                      fontSize: "1.1rem",
                      borderRadius: "30px",
                      background: "linear-gradient(90deg, #00d2ff, #3a47d5)",
                      border: "none",
                      boxShadow: "0 0 15px rgba(58, 71, 213, 0.6)",
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ display: "inline-block" }}
                >
                  <Button
                    variant="outline-light"
                    href="#contact"
                    className="px-4 py-2"
                    style={{
                      fontSize: "1.1rem",
                      marginTop: "10px",
                      borderRadius: "30px",
                      border: "2px solid #00d2ff",
                      color: "#00d2ff",
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          {/* Right Section */}
          <Col md={6} className="text-center mt-5 mt-md-0 order-1 order-md-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <motion.img
                src={my_pic}
                alt="Venkatesh Kumar"
                className="shadow-lg profile-img"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "50%",
                  border: "4px solid #596669ff",
                  objectFit: "cover",
                  boxShadow: "0 0 30px rgba(0, 210, 255, 0.4)",
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>{`
        .typewriter {
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        @media (max-width: 992px) {
          h1 {
            font-size: 2.5rem !important;
          }
          h4 {
            font-size: 1.2rem !important;
          }
          .profile-img {
            width: 280px !important;
            height: 280px !important;
          }
          section {
            padding-top: 100px !important;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 2rem !important;
          }
          h4 {
            font-size: 1rem !important;
          }
          .profile-img {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
