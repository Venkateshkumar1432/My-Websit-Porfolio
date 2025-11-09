import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaTools } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
const experience = [
  {
    id: 1,
    company: "EV91 Technologies Pvt Ltd",
    role: "Software Developer Intern",
    duration: "May 2025 - Present",
    description:
      "Building scalable web applications and CI/CD pipelines. Creating reusable React components, integrating REST APIs, and deploying on AWS with Docker and Jenkins.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Jenkins",
    ],
  },
  {
    id: 2,
    company: "RedHat",
    role: "DevOps Training Intern",
    duration: "Oct 2024 - Feb 2025",
    description:
      "Completed hands-on DevOps training at Red Hat Academy, focusing on Linux system administration, Ansible automation, and Docker containerization.",
    technologies: ["Linux", "Docker", "Ansible"],
  }
];

function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "70px 0",
        background: "linear-gradient(180deg, #0a0f1a 0%, #101a2e 100%)",
        color: "#f1f5f9",
      }}
    >
      <Container>
        {/* Animated Heading */}
        <motion.h2
          className="fw-bold text-center mb-5"
          style={{
            fontSize: "2.8rem",
            color: "#00b4d8",
            textShadow: "0 0 15px rgba(0,180,216,0.5)",
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MdWorkOutline /> Professional Experience
        </motion.h2>

        <Row className="justify-content-center g-5">
          {experience.map((exp, index) => (
            <Col md={10} lg={5} key={exp.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.04, y: -5 }}
              >
                <Card
                  className="shadow-lg border-0"
                  style={{
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0,180,216,0.2)",
                    transition: "all 0.4s ease",
                    boxShadow: "0 0 20px rgba(0,180,216,0.15)",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,180,216,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0,180,216,0.15)";
                  }}
                >
                  {/* Gradient border on top */}
                  <div
                    style={{
                      height: "5px",
                      background:
                        "linear-gradient(90deg, #00b4d8, #6a11cb, #2575fc)",
                    }}
                  />

                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <FaTools size={22} color="#00b4d8" className="me-2" />
                      <h5
                        className="fw-bold mb-0"
                        style={{
                          fontSize: "1.4rem",
                          color: "#e2e8f0",
                        }}
                      >
                        {exp.role}
                      </h5>
                    </div>

                    <p
                      className="mb-1"
                      style={{ color: "#a8b2d1", fontSize: "1rem" }}
                    >
                      <FaBuilding className="me-2 text-info" /> {exp.company}
                    </p>

                    <p
                      className="fw-semibold mb-3"
                      style={{
                        color: "#74c0fc",
                        fontSize: "0.95rem",
                      }}
                    >
                      <FaCalendarAlt className="me-2" /> {exp.duration}
                    </p>

                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.7",
                        color: "#d0d6e2",
                        marginBottom: "1.2rem",
                      }}
                    >
                      {exp.description}
                    </p>

                    <div className="mt-3">
                      {exp.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          bg="dark"
                          text="light"
                          className="me-2 mb-2"
                          style={{
                            fontSize: "0.9rem",
                            padding: "0.6rem 0.9rem",
                            borderRadius: "10px",
                            border: "1px solid rgba(0,180,216,0.3)",
                            background:
                              "linear-gradient(135deg, rgba(0,180,216,0.15), rgba(102,16,242,0.1))",
                            boxShadow:
                              "0 0 10px rgba(0,180,216,0.3), inset 0 0 5px rgba(102,16,242,0.3)",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
