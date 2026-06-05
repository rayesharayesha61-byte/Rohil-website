// src/components/ApplicationDev.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import colors from "../Colors";
import {
  Cloud,
  Security,
  Build,
  BugReport,
  Speed,
  BarChart,
  

} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function ApplicationDev() {
  const devPlatforms = [
    { title: "Windows", icon: "mdi:microsoft-windows" },
    { title: "MacOS", icon: "mdi:apple" },
    { title: "Linux", icon: "mdi:linux" },
    { title: "Web (React/Angular/Vue)", icon: "mdi:web" },
    { title: "Cross-Platform (Electron/Flutter)", icon: "mdi:code-braces" },
  ];

  const whatWeDo = [
    {
      title: "Top Notch Quality",
      text: "Our team of experienced development specialists always prioritize quality in every application we deliver.",
      icon: "mdi:check-circle-outline",
    },
    {
      title: "Consultancy",
      text: "We provide expert guidance and consultation to help you create the best possible application for your business.",
      icon: "mdi:account-tie",
    },
    {
      title: "Smooth Communication",
      text: "We ensure clear and timely communication, supporting you across different time zones for seamless collaboration.",
      icon: "mdi:message-text-outline",
    },
    {
      title: "Flexibility",
      text: "Following agile methodology, we adapt to changes while keeping projects on track and meeting deadlines.",
      icon: "mdi:autorenew",
    },
    {
      title: "Objective Oriented",
      text: "We focus on your business goals and work diligently to help you achieve them efficiently.",
      icon: "mdi:target",
    },
    {
      title: "Transparency",
      text: "We maintain complete transparency and honesty, building trust as the foundation of our collaboration.",
      icon: "mdi:eye-outline",
    },
  ];

  const industries = [
    { title: "Game & Utilities", icon: "mdi:gamepad-variant" },
    { title: "Education & E-Learning", icon: "mdi:school" },
    { title: "Sports & Recreation", icon: "mdi:soccer" },
    { title: "Banking & Finance", icon: "mdi:bank" },
    { title: "Travel & Tourism", icon: "mdi:airplane" },
    { title: "Media & Entertainment", icon: "mdi:movie" },
  ];

  const technologies = [
    { title: "Java", icon: "mdi:language-java" },
    { title: "C#", icon: "mdi:language-csharp" },
    { title: "Python", icon: "mdi:language-python" },
    { title: "React", icon: "mdi:react" },
    { title: "Node.js", icon: "mdi:nodejs" },
    { title: "Electron", icon: "mdi:react" },
    { title: "SQL", icon: "mdi:database" },
    { title: "AWS", icon: "mdi:amazon" },
  ];

  const services = [
    {
      title: "Web Applications",
      text: "Build dynamic, responsive, and scalable web apps tailored to your business needs.",
      icon: "mdi:web",
    },
    {
      title: "Desktop Applications",
      text: "Develop high-performance desktop applications for Windows, Mac, and Linux.",
      icon: "mdi:desktop-classic",
    },
    {
      title: "Enterprise Software",
      text: "Create enterprise-grade systems with secure, robust, and scalable architecture.",
      icon: "mdi:office-building",
    },
    {
      title: "API Development",
      text: "Design and implement APIs for seamless integration with your applications.",
      icon: "mdi:api",
    },
    {
      title: "Mobile Applications",
      text: "Develop cross-platform mobile apps for Android and iOS with smooth performance and intuitive UX.",
      icon: "mdi:cellphone",
    },
    {
      title: "Software Maintenance & Support",
      text: "Provide ongoing maintenance, updates, and support to ensure your applications run efficiently and securely.",
      icon: "mdi:tools",
    },
  ];
  const process = [
    "Requirement Analysis",
    "UI/UX Design",
    "Development",
    "Testing",
    "Deployment",
    "Maintenance",
  ];
  return (
    <>
      <Helmet>
        <title>Application Development Services | Rohil Technologies</title>

        <meta
          name="description"
          content="Professional application development services by Rohil Technologies. We build scalable, secure, and custom software applications for businesses."
        />

        <meta
          name="keywords"
          content="Application Development Services, Custom Application Development, Software Application Development, Enterprise Application Development"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Application Development Services | Rohil Technologies"
        />
        <meta
          property="og:description"
          content="Custom application development solutions for businesses."
        />
        <meta
          property="og:url"
          content="https://www.rohiltechnologies.com/application-development"
        />
        <meta
          property="og:image"
          content="https://www.rohiltechnologies.com/images/appdev.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Application Development Services | Rohil Technologies"
        />
        <meta
          name="twitter:description"
          content="Scalable and secure application development services."
        />
        <meta
          name="twitter:image"
          content="https://www.rohiltechnologies.com/images/appdev.png"
        />

        <link
          rel="canonical"
          href="https://www.rohiltechnologies.com/application-development"
        />
      </Helmet>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/appdev.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "250px", md: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Application Development Services
          </Typography>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>

      {/* ===== Section: Intro ===== */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Left Side - Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/appdev1.png"
              alt="Custom Application Development Services"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* Right Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Application Development
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We create robust, scalable, and user-friendly applications for
              web, desktop, and enterprise platforms. Our solutions are tailored
              to your business requirements, ensuring seamless integration, high
              performance, and an intuitive user experience.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              From concept to deployment, our development team ensures quality,
              security, and maintainability at every stage, delivering software
              that drives business efficiency and innovation.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider />
      {/* Second intro */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* left Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Custom Application Solutions
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              With years of experience, we develop custom applications that are
              robust, scalable, and tailored to meet the unique needs of
              businesses across industries. Our solutions are built using the
              latest technologies and frameworks to ensure reliability and
              efficiency.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              From initial concept and requirement analysis to design,
              development, and deployment, we transform your ideas into fully
              functional applications compatible across web, desktop, and mobile
              platforms. Our team ensures seamless integration, intuitive
              interfaces, and maintainable code for long-term success.
            </Typography>
          </Box>

          {/* right side - img */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/appdev2.png"
              alt="Mobile App Development"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </Box>
      </Container>
      <Divider />

      {/* Service */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Our Services
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" }, // 4 per row on desktop
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Icon
                icon={item.icon}
                width={50}
                height={50}
                color={colors.primary}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  mb: 1,
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>
                Industry-specific solutions tailored for business growth.
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ===== Section: Our Other Support ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Our Other Support
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {[
            {
              title: "Software Maintenance",
              text: "Ongoing maintenance and updates to keep your applications running smoothly and efficiently.",
              icon: <Build sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Quality Assurance & Testing",
              text: "Comprehensive testing to ensure bug-free, reliable, and high-performance applications.",
              icon: <BugReport sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Cloud & Backend Integration",
              text: "Seamless integration with cloud services and backend systems for scalable and reliable solutions.",
              icon: <Cloud sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Application Security",
              text: "Implement advanced security measures to protect your software and sensitive data.",
              icon: <Security sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Performance Optimization",
              text: "Enhancing application speed, responsiveness, and resource efficiency for smooth operations.",
              icon: <Speed sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Analytics & Insights",
              text: "Provide actionable insights and reporting to monitor and improve application performance.",
              icon: <BarChart sx={{ fontSize: 50, color: colors.primary }} />,
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 1 }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
      <Container sx={{ py: 4 }}>
        {/* ===== Development Section ===== */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Development
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          Our skilled and experienced development team ensures your software
          products are delivered efficiently and on schedule, without
          compromising quality. We specialize in building robust, scalable, and
          user-friendly applications across web, desktop, mobile, and enterprise
          platforms. From initial concept and requirement analysis to design,
          development, and final deployment, we focus on creating solutions
          tailored to your business needs. Our team emphasizes clean code, high
          performance, intuitive UI/UX, and rigorous quality assurance, ensuring
          every application not only meets but exceeds client expectations while
          providing a seamless experience to end-users.
        </Typography>
        <Grid container spacing={4} justifyContent="center" mb={8}>
          {devPlatforms.map((item, i) => (
            <Grid item xs={3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  width: "100%",
                }}
              >
                <Icon
                  icon={item.icon}
                  width={50}
                  height={50}
                  color={colors.primary}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
          }}
        >
          Our Development Process
        </Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
          {process.map((step, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Box
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.primary,
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {index + 1}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: colors.darkBlue,
                  }}
                >
                  {step}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* ===== What We Do ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          What We Do
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We provide end-to-end application development services, ensuring
          timely delivery without compromising quality. Our team carefully
          estimates project scope, assesses user requirements, creates
          prototypes, fixes issues, and implements solutions effectively. We
          also design comprehensive wireframes with full UI/UX analysis to
          ensure scalable, user-friendly, and high-performance applications that
          exceed client expectations across web, desktop, mobile, and enterprise
          platforms.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {whatWeDo.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
                textAlign: "center",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Icon
                icon={item.icon}
                width={50}
                height={50}
                color={colors.primary}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  mb: 1,
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>

        {/* ===== Our Focusing Industries ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Focusing Industries
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We serve a diverse range of industries, delivering tailored mobile
          applications and solutions that meet unique business needs. From Game
          & Utilities to Education & E-Learning, Sports & Recreation, Banking &
          Finance, Travel & Tourism, and Media & Entertainment, our expertise
          ensures high-quality, scalable, and engaging digital products. Our
          team leverages cutting-edge technologies to create apps that enhance
          user experience, drive growth, and deliver measurable results across
          all industry verticals.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {industries.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
                textAlign: "center",
                transition: "all 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Icon
                icon={item.icon}
                width={50}
                height={50}
                color={colors.primary}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  mb: 1,
                  mt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>

        {/* ===== Technology ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Technology We Use
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We leverage the latest technologies to build high-quality mobile
          applications and games. Our expertise spans iOS, Android, Java, React
          Native, Adobe Illustrator, and Unity, ensuring scalable, efficient,
          and visually engaging solutions that deliver seamless performance and
          a superior user experience across multiple platforms.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mb={8}>
          {technologies.map((item, i) => (
            <Grid item xs={12} sm={6} md={2} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  width: "100%",
                }}
              >
                <Icon
                  icon={item.icon}
                  width={50}
                  height={50}
                  color={colors.primary}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Container sx={{ py: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: colors.darkBlue,
              mb: 5,
            }}
          >
            Frequently Asked Questions
          </Typography>

          {[
            {
              question: "What is application development?",
              answer:
                "Application development is the process of designing, building, testing, deploying, and maintaining software applications tailored to business requirements.",
            },
            {
              question: "How long does application development take?",
              answer:
                "Project timelines vary depending on complexity, features, integrations, and business requirements. Simple applications may take a few weeks, while enterprise solutions can take several months.",
            },
            {
              question: "Do you provide maintenance support?",
              answer:
                "Yes. Rohil Technologies provides ongoing maintenance, security updates, performance optimization, bug fixes, and technical support after deployment.",
            },
            {
              question: "Can applications be customized?",
              answer:
                "Absolutely. We develop custom application solutions tailored to your business processes, goals, and industry requirements.",
            },
            {
              question: "Which technologies do you use?",
              answer:
                "We work with React, Angular, Node.js, Java, Python, .NET, Flutter, AWS, SQL, and other modern technologies.",
            },
          ].map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: "12px !important",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: colors.darkBlue,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    color: colors.grey,
                    lineHeight: 1.8,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Container>
      {/* Related Services */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: colors.darkBlue,
            mb: 3,
            mt: 4,
          }}
        >
          Related Services
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 6,
          }}
        >
          {[
            { label: "Software Development", link: "/software-development" },
            { label: "Mobile App Development", link: "/mobile" },
            { label: "Website Development", link: "/web-technologies" },
            { label: "ERP Solutions", link: "/erp" },
          ].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.link}
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.darkBlue,
                fontWeight: 600,
                px: 3,
                py: 1.2,
                borderRadius: "30px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: colors.primary,
                  color: "#fff",
                  borderColor: colors.primary,
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Container>
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Start Your Application Development Project Today
        </Typography>

        <Typography sx={{ mb: 4, color: colors.grey }}>
          Build secure, scalable, and high-performance applications with Rohil Technologies.
        </Typography>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: colors.primary,
            px: 4,
            py: 1.5,
          }}
        >
          Request Free Consultation
        </Button>
      </Container>
    </>
  );
}
