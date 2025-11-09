import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import pic_2 from "../assets/pic_2.png";
function About() {
  return (
    <section
      id="about"
      style={{
        padding: "140px 0",
        minHeight: "90vh",
        background: "linear-gradient(135deg, #0b0c10, #1f2833)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col md={6} className="mb-5 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "2.8rem",
                  background: "linear-gradient(90deg, #00d2ff, #3a47d5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Me
              </h2>

              <p
                className="about-text"
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "#ccc",
                }}
              >
                I'm <b style={{ color: "#00d2ff" }}>Venkatesh Kumar</b>, a{" "}
                <b>Full Stack Developer</b> and{" "}
                <b>DevOps Enthusiast</b> passionate about designing and
                deploying modern, scalable web applications.
                <br />
                <br />
                I proficient in{" "}
                <b style={{ color: "#00d2ff" }}>
                  React.js, Node.js, and Docker, Jenkins & Some AWS Services
                </b>
                , creating efficient solutions that blend functionality with
                clean, maintainable code. My approach combines technical
                precision with creative design thinking to deliver seamless user
                experiences.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <a
                  href="#projects"
                  className="explore-btn mt-4 d-inline-block"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "30px",
                    background: "linear-gradient(90deg, #00d2ff, #3a47d5)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    boxShadow: "0 0 15px rgba(0, 210, 255, 0.4)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore My Work →
                </a>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Image Section */}
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={pic_2}
                alt="Venkatesh Kumar"
                className="shadow-lg about-image"
                style={{
                  width: "360px",
                  height: "460px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  border: "3px solid #c2c3c4ff",
                  boxShadow: "0 0 30px rgba(0, 210, 255, 0.3)",
                }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>{`
        @media (max-width: 992px) {
          h2 {
            font-size: 2.2rem !important;
            text-align: center;
          }
          .about-text {
            font-size: 1rem !important;
            text-align: center;
          }
          .explore-btn {
            display: block;
            margin: 20px auto 0 auto;
          }
          .about-image {
            width: 280px !important;
            height: 340px !important;
          }
        }

        @media (max-width: 576px) {
          h2 {
            font-size: 1.8rem !important;
          }
          .about-text {
            font-size: 0.95rem !important;
          }
          .about-image {
            width: 220px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
