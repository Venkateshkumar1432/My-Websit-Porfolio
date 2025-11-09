import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import voting_system from "../assets/online_voting.jpg";
import ai_voice_assistant from "../assets/nova_ai.jpg";
import fintech from "../assets/fintech.jpeg";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiMysql, SiPython, SiPrisma, SiPostgresql } from "react-icons/si";
import { BiLogoCss3 } from "react-icons/bi";
import { FaDocker, FaJenkins } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Online Voting System",
    description:
      "A secure online voting system allowing authorized users to vote remotely. Voter information and validation are handled through a centralized database.",
    image: voting_system,
    technologies: [<IoLogoJavascript />, <FaPhp />, <SiMysql />, <BiLogoCss3 />],
    liveUrl: "#",
    githubUrl: "https://github.com/Venkateshkumar1432/Online_Voting_System",
  },
  {
    id: 2,
    title: "AI Voice Assistant for Windows OS",
    description:
      "Developed ‘Nova’, a cross-platform AI assistant using Python and NLP. Integrated voice recognition, automation, and customizable GUI settings.",
    image: ai_voice_assistant,
    technologies: [<SiPython />],
    liveUrl: "#",
    githubUrl: "https://github.com/Venkateshkumar1432/NOVA_AI_VOICE_ASSISTENT",
  },
  {
    id: 3,
    title: "FinTrack – Personal Finance Management System",
    description:
      "A microservice-based FinTech app for expense tracking and real-time analytics. Dockerized and deployed on AWS with Jenkins CI/CD automation.",
    image: fintech,
    technologies: [
      <FaReact />,
      <FaNodeJs />,
      <SiPostgresql />,
      <FaAws />,
      <FaDocker />,
      <FaJenkins />,
      <SiPrisma />,
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Venkateshkumar1432/Fintech-Tracker",
  },
];

function Project() {
  return (
    <section
      id="projects"
      style={{
        padding: "90px 0",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
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
          🚀 Featured Projects
        </motion.h2>

        <Row className="justify-content-center g-4">
          {projects.map((project, index) => (
            <Col key={project.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.04, y: -5 }}
                
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "1.2rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                }}
              >
                {/* Project image */}
                <div
                  style={{
                    height: "200px",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: "1.2rem",
                    borderTopRightRadius: "1.2rem",
                  }}
                ></div>

                {/* Content */}
                <div className="p-4">
                  <h5 className="fw-bold mb-2" style={{ color: "#00b4d8" }}>
                    {project.title}
                  </h5>
                  <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-3 fs-5 mt-3">
                    {project.technologies.map((icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, color: "#00b4d8" }}
                        style={{
                          color: "#fff",
                          transition: "0.3s",
                          cursor: "pointer",
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-3 mt-4">
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      className="rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                      style={{
                        backgroundColor: "#00b4d8",
                        border: "none",
                        color: "#fff",
                      }}
                    >
                      <FaExternalLinkAlt /> Live
                    </Button>
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      className="rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                      variant="outline-light"
                    >
                      <FaGithub /> Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Project;
