import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Code, Server, Cloud } from "react-bootstrap-icons";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive, high-performing, and modern web applications using React.js.",
      icon: <Code size={45} color="#00b4d8" />,
      gradient: "linear-gradient(135deg, #00b4d8, #007bff)",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Developing powerful REST APIs with Node.js, Express, and scalable microservices.",
      icon: <Server size={45} color="#06d6a0" />,
      gradient: "linear-gradient(135deg, #06d6a0, #118ab2)",
    },
    {
      id: 3,
      title: "DevOps Setup",
      description:
        "Automating deployments with Docker, AWS, Jenkins, and CI/CD pipelines for efficient delivery.",
      icon: <Cloud size={45} color="#ffd166" />,
      gradient: "linear-gradient(135deg, #ffd166, #ef476f)",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "90px 0",
        background: "linear-gradient(135deg, #1b1919ff, #1a1a1a)",
        color: "#fff",
      }}
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fw-bold text-center mb-5 display-6"
          style={{ color: "#00b4d8",
            textShadow: "0 0 12px rgba(0,180,216,0.6)", }}
        >
          💼 My Services
        </motion.h2>

        <Row className="justify-content-center g-4">
          {services.map((service, index) => (
            <Col key={service.id} md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center rounded-4 p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle mb-3"
                  style={{
                    width: "85px",
                    height: "85px",
                    margin: "0 auto",
                    background: service.gradient,
                    color: "#fff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {service.icon}
                </div>

                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: "#00b4d8",
                    letterSpacing: "0.5px",
                  }}
                >
                  {service.title}
                </h5>
                <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
                  {service.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
