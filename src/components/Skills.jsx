import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJenkins,
  SiPrisma,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 color="#E44D26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#2965f1" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact color="#61DBFB" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
    { name: "Prisma", icon: <SiPrisma color="#0C344B" /> },
  ],
  Database: [
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", icon: <FaDatabase color="#00758F" /> },
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker color="#2496ED" /> },
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "Jenkins", icon: <SiJenkins color="#D33833" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  ],
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        background:
          "linear-gradient(180deg, #0b0f19 0%, #0d1324 50%, #141a2e 100%)",
        color: "#f8f9fa",
        minHeight: "70vh",
      }}
    >
      <Container>
        {/* Section Heading */}
        <motion.h2
          className="fw-bold text-center mb-5"
          style={{
            fontSize: "2.8rem",
            color: "#00b4d8",
            textShadow: "0 0 12px rgba(0,180,216,0.6)",
          }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💻 Technical Skills
        </motion.h2>

        {/* Category Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {Object.keys(skillCategories).map((category) => (
            <Button
              key={category}
              variant="outline-info"
              className={`px-4 py-2 fw-semibold rounded-pill shadow-sm ${
                activeCategory === category
                  ? "bg-info text-dark"
                  : "bg-transparent text-info border-info"
              }`}
              style={{
                transition: "all 0.3s ease",
                boxShadow:
                  activeCategory === category
                    ? "0 0 15px rgba(0,180,216,0.6)"
                    : "none",
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Row className="justify-content-center g-4">
              {skillCategories[activeCategory].map((skill, index) => (
                <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-4 d-flex flex-column align-items-center justify-content-center py-4 px-2 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,180,216,0.08), rgba(102,16,242,0.1))",
                      border: "1px solid rgba(0,180,216,0.3)",
                      boxShadow:
                        "0 0 15px rgba(0,180,216,0.2), inset 0 0 5px rgba(102,16,242,0.2)",
                      transition: "all 0.3s ease",
                      minHeight: "130px",
                    }}
                  >
                    <div
                      className="fs-1 mb-2"
                      style={{ filter: "drop-shadow(0 0 6px rgba(0,180,216,0.5))" }}
                    >
                      {skill.icon}
                    </div>
                    <div className="fw-semibold text-light">{skill.name}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Skills;
