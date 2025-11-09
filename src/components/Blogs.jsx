import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import devops_image from "../assets/devops_blog.jpg";
import Nova_award from "../assets/Nova_blog.jpg";
import gradution from "../assets/gradution.jpg";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Red Hat DevOps Training Journey",
      excerpt:
        "A 6-week Red Hat DevOps program focused on Linux Administration, Ansible Automation, Containers, Kubernetes, and OpenShift, providing hands-on experience in automation and cloud deployment.",
      image: devops_image,
      date: "December 2024",
      category: "DevOps",
      url: "https://www.linkedin.com/posts/venkatesh-kumar-443730245_redhat-acharyainstitute-devops-activity-7271109906152210432-0ShC",
    },
    {
      id: 2,
      title: "🏆 AI Voice Assistant Recognized at Technoutsava 2025",
      excerpt:
        "Developed an AI-powered voice assistant for Windows OS, which secured 2nd prize at Technoutsava 2025 for its innovative approach to voice-controlled automation and accessibility.",
      image: Nova_award,
      date: "May 2025",
      category: "Python",
      url: "https://www.linkedin.com/posts/venkatesh-kumar-443730245_acharyainstitute-projectwork-activity-7332801071272079360-y8By",
    },
    {
      id: 3,
      title: "🎓 Graduation Milestone Achieved",
      excerpt:
        "Successfully completed my Bachelor's degree in Computer Science and Engineering from Acharya Institute of Technology, marking a significant academic achievement and the beginning of my professional journey in tech.",
      image: gradution,
      date: "May 2025",
      category: "Education",
      url: "https://www.instagram.com/p/DKFISHbpOeW/?igsh=emkxcXM4dHoxNGhx",
    },
  ];

  return (
    <section
      id="blogs"
      style={{
        padding: "70px 0",
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
          style={{  color: "#00b4d8",
          textShadow: "0 0 12px rgba(0,180,216,0.6)", }}
        >
          📰 Latest Blogs
        </motion.h2>

        <Row className="g-4">
          {blogs.map((blog, index) => (
            <Col key={blog.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.04, y: -5 }}
              >
                <Card
                  className="rounded-4 overflow-hidden border-0 h-100"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                    color: "#fff",
                  }}
                >
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={blog.image}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      className="blog-img"
                    />
                  </div>
                  <Card.Body className="p-4">
                    <Badge
                      bg="info"
                      className="mb-2 px-3 py-2 rounded-pill text-dark fw-semibold"
                    >
                      {blog.category}
                    </Badge>
                    <Card.Title
                      className="fw-bold mt-2"
                      style={{ color: "#00b4d8" }}
                    >
                      {blog.title}
                    </Card.Title>
                    <Card.Text
                      className="mt-3"
                      style={{ color: "#ccc", fontSize: "0.95rem" }}
                    >
                      {blog.excerpt}
                    </Card.Text>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small style={{ color: "#999" }}>{blog.date}</small>
                      <Button
                        href={blog.url}
                        target="_blank"
                        className="rounded-pill px-3 py-2"
                        variant="outline-info"
                        style={{
                          color: "#00b4d8",
                          borderColor: "#00b4d8",
                        }}
                      >
                        Read More →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
          .blog-img:hover {
            transform: scale(1.08);
          }
          @media (max-width: 768px) {
            h2 {
              font-size: 1.8rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Blogs;
