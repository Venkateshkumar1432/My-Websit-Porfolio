import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

const educationData = [
  {
    year: "2021 - 2025",
    degree: "Bachelor of Engineering in Information Science and Engineering",
    institution: "Acharya Institute of Technology, Bangalore",
  },
  {
    year: "2019 - 2021",
    degree: "Pre-University Course (PCMC)",
    institution: "Sri Chaitanya PU College, Bangalore",
  },
  {
    year: "2019",
    degree: "Secondary School (CBSE)",
    institution: "Vidya Mandir English C.B.S.E. School, Sedam",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: "80px 0",
        backgroundColor: "#0a0a0f",
        color: "#e0e0e0",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: "2.8rem", color: "#00b4d8", textShadow: "0 0 15px rgba(0,180,216,0.5)" }}
            >
              <MdCastForEducation /> Education
            </h2>
            <p
              style={{ 
                fontSize: "1.2rem", 
                color: "#a0a0a0",
                marginBottom: "2rem",
                lineHeight: "1.6"
              }}
            >
              A timeline of my academic journey — each milestone shaping my
              passion for technology and innovation.
            </p>
          </Col>
        </Row>

        {/* Timeline */}
        <div
          className="timeline-container"
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          {/* Vertical Line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "4px",
              height: "100%",
              background:
                "repeating-linear-gradient(to bottom, #0d6efd, #0d6efd 15px, transparent 15px, transparent 30px)",
              boxShadow: "0 0 10px rgba(13,110,253,0.6)",
            }}
          ></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.25 }}
              viewport={{ once: true }}
              className="timeline-item"
              style={{
                position: "relative",
                width: "100%",
                marginBottom: "60px",
              }}
            >
              {/* Glowing Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "0",
                  transform: "translate(-50%, 0)",
                  backgroundColor: "#0d6efd",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  boxShadow: "0 0 25px rgba(13,110,253,0.8)",
                  zIndex: 2,
                }}
              >
                <FaGraduationCap
                  style={{
                    position: "absolute",
                    top: "-35px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "1.5rem",
                    color: "#0d6efd",
                  }}
                />
              </div>

              {/* Card */}
              <motion.div
                className="timeline-card"
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(13,110,253,0.3)" }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(20,20,28,0.95), rgba(15,15,25,0.95))",
                  borderRadius: "15px",
                  padding: "25px",
                  boxShadow: "0 5px 25px rgba(0,0,0,0.4)",
                  width: "45%",
                  marginLeft: index % 2 === 0 ? "auto" : "0",
                  marginRight: index % 2 === 0 ? "0" : "auto",
                  position: "relative",
                  zIndex: 1,
                  border: "1px solid rgba(13,110,253,0.3)",
                }}
              >
                <h5
                  className="fw-bold mb-2"
                  style={{ color: "#0d6efd", fontSize: "1.25rem" }}
                >
                  {edu.degree}
                </h5>
                <p className="mb-1" style={{ color: "#ccc", fontSize: "1.1rem" }}>
                  {edu.institution}
                </p>
                <small style={{ color: "#999" }}>{edu.year}</small>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Responsive Styles */}
      <style>
        {`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-card {
            width: calc(100% - 60px) !important;
            margin: 0 0 0 50px !important;
          }
          .timeline-dot {
            left: 20px !important;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Education;
