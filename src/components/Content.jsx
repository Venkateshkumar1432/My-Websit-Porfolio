import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <section
      className="py-5 text-light"
      id="contact"
      style={{
        background: "linear-gradient(135deg, #0b0c10, #1f2833)",
        minHeight: "100vh",
      }}
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-3" style={{
            textShadow: "0 0 12px rgba(0,180,216,0.6)", }}>
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-secondary fs-5">
            Have a project in mind or want to collaborate?  
            Let’s connect — I’m always open to new opportunities!
          </p>
        </div>

        <Row className="align-items-center">
          {/* Contact Info */}
          <Col md={5} className="mb-5 mb-md-0">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="fw-bold mb-4 text-uppercase text-info">Contact Details</h5>
              <p className="mb-2">
                <FaEnvelope className="me-2 text-primary" />
                sdmp75407@gmail.com
              </p>
              <p>
                <FaPhoneAlt className="me-2 text-primary" /> +91 8296460198
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-4">
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
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="p-4 rounded-4 shadow-lg"
                style={{ backgroundColor: "#1c1f26", border: "1px solid #00b4d8" }}
              >
                <Form ref={form} onSubmit={sendEmail}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label className="text-light">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="user_name"
                          placeholder="Enter your name"
                          className="text-light border-0"
                          style={{ backgroundColor: "#acb8d6ff" }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="text-light">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="user_email"
                          placeholder="Enter your email"
                          className=" text-light border-0"
                          style={{ backgroundColor: "#acb8d6ff" }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formSubject">
                        <Form.Label className="text-light">Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="Enter subject"
                          className="text-light border-0"
                          style={{ backgroundColor: "#acb8d6ff" }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formMessage">
                        <Form.Label className="text-light">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={5}
                          placeholder="Write your message..."
                          className="text-light border-0"
                          style={{ backgroundColor: "#acb8d6ff" }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="text-end">
                      <Button
                        variant="primary"
                        type="submit"
                        className="px-4 rounded-pill mt-3"
                      >
                        Send Message
                      </Button>
                    </Col>
                    <p className="text-info mt-2 text-center">{status}</p>
                  </Row>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .social-icon-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          color: #0d6efd;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 10px rgba(13, 110, 253, 0.2);
          transition: all 0.3s ease-in-out;
        }

        .social-icon-glow:hover {
          background: #0d6efd;
          color: #fff;
          box-shadow: 0 0 20px #0d6efd;
          transform: scale(1.15);
        }

        input, textarea {
          border-radius: 8px !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
