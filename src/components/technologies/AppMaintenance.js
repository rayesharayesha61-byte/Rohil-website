// src/components/AppMaintenance.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Helmet } from "react-helmet-async";
export default function AppMaintenance() {
  const services = [
    {
      title: "Requirements Gathering",
      text: "Gathering, analyzing, and documenting system and user requirements to ensure the application aligns with business goals.",
      icon: "mdi:clipboard-text",
    },
    {
      title: "Transformation",
      text: "Updating and optimizing the application to adapt to changing technologies, user needs, and business environments.",
      icon: "mdi:autorenew",
    },
    {
      title: "Implementation & Enhancement",
      text: "Deploying updates, enhancements, and new features to improve functionality and user satisfaction.",
      icon: "mdi:rocket-launch",
    },
    {
      title: "Performance Monitoring",
      text: "Regularly assessing application performance, identifying bottlenecks, and optimizing for smooth operation.",
      icon: "mdi:speedometer",
    },
    {
      title: "Quality Assurance Testing",
      text: "Conducting rigorous QA tests to ensure reliability, security, and high-quality performance of applications.",
      icon: "mdi:bug-check",
    },
    {
      title: "Documentation & Maintenance",
      text: "Keeping detailed records of application updates and performing maintenance for long-term stability and support.",
      icon: "mdi:file-document-outline",
    },
  ];

  const devPlatforms = [
    { title: "Web Apps", icon: "mdi:web" },
    { title: "Cloud Apps & SaaS", icon: "mdi:cloud-outline" },
    { title: "Database Apps", icon: "mdi:database" },
    { title: "Mobile Apps", icon: "mdi:cellphone" },
    { title: "Desktop Apps", icon: "mdi:desktop-classic" },
  ];
  // Inside your component, after the services section
  const maintenanceVsSupport = [
    {
      aspect: "Definition",
      maintenance:
        "Continuous updating, improving, and optimizing software apps to upscale security, scalability, and performance.",
      support:
        "Provide ongoing assistance to resolve technical issues, troubleshoot errors, and ensure smooth app functionality.",
    },
    {
      aspect: "Objective",
      maintenance:
        "Long-term application efficiency, security, and adaptability.",
      support:
        "Immediate issue resolution and operational stability for users.",
    },
    {
      aspect: "Scope",
      maintenance:
        "Bug fixes, software updates, performance tuning, and feature enhancements.",
      support:
        "Incident management, troubleshooting, help desk support, and user assistance.",
    },
    {
      aspect: "Approach",
      maintenance:
        "A proactive approach involving planned improvements, regular updates, and preventive measures.",
      support:
        "A reactive approach focusing on resolving unexpected issues and user-reported problems.",
    },
    {
      aspect: "Duration",
      maintenance:
        "A long-term strategy for continuous enhancement of application.",
      support: "Short-term or immediate actions to address specific concerns.",
    },
    {
      aspect: "Key Activities",
      maintenance:
        "Code refactoring, security patching, technology upgrades, and performance optimization.",
      support:
        "Handling user queries, fixing system crashes, resolving downtime, and addressing software malfunctions.",
    },
    {
      aspect: "End Goal",
      maintenance:
        "Enhancement of software lifecycle, making it scalable and more efficient.",
      support: "Ensuring uninterrupted application usage and minimal downtime.",
    },
  ];
  const technologies = [
    { title: "Python", icon: "mdi:language-python" },
    { title: "Java", icon: "mdi:language-java" },
    { title: ".NET", icon: "mdi:dot-net" },
    { title: "Node.js", icon: "mdi:nodejs" },
    { title: "MySQL", icon: "mdi:database" },
    { title: "PostgreSQL", icon: "mdi:database-outline" },
    { title: "AWS", icon: "mdi:amazon" },
    { title: "Azure", icon: "mdi:microsoft-azure" },
    { title: "Docker", icon: "mdi:docker" },
    { title: "Kubernetes", icon: "mdi:kubernetes" },
    { title: "GitHub Actions", icon: "mdi:github" },
    { title: "Splunk", icon: "mdi:magnify" },
    { title: "New Relic", icon: "mdi:chart-line" },
    { title: "ServiceNow", icon: "mdi:tools" },
  ];
  const faqs = [
    {
      question: "What is Application Maintenance?",
      answer:
        "Application maintenance helps improve performance, security, reliability, and long-term software stability.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, we provide continuous monitoring and support services.",
    },
    {
      question: "Can you maintain existing applications?",
      answer:
        "Yes, we support and maintain both existing and third-party applications.",
    },
  ];
  const maintenanceTypes = [
    {
      title: "Corrective Maintenance",
      desc: "Fixing software bugs and resolving issues."
    },
    {
      title: "Preventive Maintenance",
      desc: "Preventing future failures through updates."
    },
    {
      title: "Adaptive Maintenance",
      desc: "Updating applications for changing environments."
    },
    {
      title: "Perfective Maintenance",
      desc: "Improving performance and user experience."
    },
    {
      title: "Application Monitoring",
      desc: "Continuous monitoring and issue detection."
    },
    {
      title: "Performance Optimization",
      desc: "Enhancing speed and system efficiency."
    },
    {
      title: "Security Updates",
      desc: "Applying security patches and improvements."
    },
    {
      title: "SLA Support",
      desc: "Providing agreed response and support timelines."
    },
  ];
  return (
    <>


      <Helmet>
        <title>
          Application Maintenance Services | Rohil Technologies
        </title>

        <meta
          name="description"
          content="Professional application maintenance services by Rohil Technologies. Improve software performance, security, monitoring, and support."
        />

        <meta
          name="keywords"
          content="
Application Maintenance Services,
Software Maintenance Services,
Application Support Services,
Application Monitoring
"
        />

        <link
          rel="canonical"
          href="https://www.rohiltechnologies.com/application-maintenance"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Service",

            "name": "Application Maintenance Services",

            "description":
              "Professional application maintenance and support services.",

            "provider": {
              "@type": "Organization",
              "name": "Rohil Technologies"
            }
          })}
        </script>
      </Helmet>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/appmain.png')",
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
            component="h2"
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Application Maintenance & Support
          </Typography>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 3 }}
            >
              Application Maintenance & Support
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              Our Application Maintenance and Support services ensure your
              software continues to run efficiently, securely, and with
              high-performance standards. We provide proactive monitoring,
              troubleshooting, and updates to prevent downtime and enhance user
              experience.
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We specialize in identifying and fixing bugs, improving
              performance, applying updates, and maintaining your applications
              for long-term reliability. Our dedicated team works to keep your
              software optimized and aligned with your evolving business needs.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              With 24/7 support and comprehensive maintenance strategies, we
              ensure your applications remain robust, scalable, and secure at
              all times.
            </Typography>
          </Box>

          {/* Image Section */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src="/images/appmain1.png"
              loading="lazy"
              alt="Application Maintenance Services by Rohil Technologies"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
        <Divider />
      </Container>
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
          Our Maintenance Process
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
          Apps We Support and Maintain
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          Our software development and maintenance team delivers robust,
          scalable, and secure solutions across web, desktop, mobile, and
          enterprise platforms. From planning and development to deployment and
          ongoing support, we ensure high performance, clean code, intuitive
          UI/UX, and strong security. With proactive monitoring and regular
          updates, we keep your software reliable, optimized, and aligned with
          evolving business needs, providing seamless experiences for your
          users.
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
      </Container>
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
          }}
        >
          Key Differences: App Maintenance vs Support
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: colors.primary }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Aspect
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Application Maintenance
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Application Support
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maintenanceVsSupport.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {row.aspect}
                  </TableCell>
                  <TableCell>{row.maintenance}</TableCell>
                  <TableCell>{row.support}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

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
        Technology
      </Typography>
      <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
        We ensure your applications remain secure, efficient, and up to date
        through continuous monitoring, maintenance, and technical support. Our
        services include bug fixes, performance optimization, version upgrades,
        and proactive issue resolution to minimize downtime and enhance
        reliability. With a focus on scalability, stability, and user
        satisfaction, we help businesses maintain seamless operations and adapt
        to evolving technology needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center" mb={8}>
        {technologies.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
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
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Core Maintenance Services
        </Typography>

        <Grid container spacing={4} justifyContent="center">

          {maintenanceTypes.map((item, index) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >

              <Box
                sx={{
                  height: "220px",

                  display: "flex",
                  flexDirection: "column",

                  justifyContent: "center",
                  alignItems: "center",

                  textAlign: "center",

                  background: "#fff",

                  borderRadius: "20px",

                  padding: 4,

                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.08)",

                  transition: "0.3s",

                  "&:hover": {
                    transform:
                      "translateY(-8px)",

                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.15)",
                  },
                }}
              >

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: colors.primary,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: colors.grey,
                    lineHeight: 1.8,
                  }}
                >
                  {item.desc}
                </Typography>

              </Box>

            </Grid>

          ))}

        </Grid>

      </Container>
      <Container sx={{ py: 6 }}>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 5,
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: "14px !important",
              overflow: "hidden",
              boxShadow: 3,

              "&::before": {
                display: "none",
              },

              "&:hover": {
                transform: "translateY(-3px)",
                transition: "0.3s",
              },
            }}
          >

            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: colors.primary,
                  }}
                />
              }

              sx={{
                background:
                  "linear-gradient(to right,#f8fbff,#eef4ff)",

                "& .MuiAccordionSummary-content": {
                  margin: "18px 0",
                },
              }}
            >

              <Typography
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                }}
              >
                {item.question}
              </Typography>

            </AccordionSummary>

            <AccordionDetails
              sx={{
                background: "#fff",
              }}
            >

              <Typography
                sx={{
                  color: colors.grey,
                  lineHeight: 1.8,
                }}
              >
                {item.answer}
              </Typography>

            </AccordionDetails>

          </Accordion>
        ))}

      </Container>
      <Container sx={{ py: 8 }}>

        <Box
          sx={{
            textAlign: "center",
            background:
              "linear-gradient(135deg,#0B4AA2,#1976d2)",
            borderRadius: 4,
            p: { xs: 4, md: 7 },
            color: "#fff",
          }}
        >

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Keep Your Applications Running Smoothly
          </Typography>

          <Typography
            sx={{
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
              opacity: 0.9,
            }}
          >
            Improve performance, reduce downtime, and keep your software secure with our application maintenance and support services.
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              background: "#fff",
              color: colors.primary,

              px: 5,
              py: 1.5,

              fontWeight: "bold",

              borderRadius: "40px",

              fontSize: "16px",

              textTransform: "none",

              boxShadow: 4,

              "&:hover": {
                background: "#f4f4f4",
                transform: "translateY(-3px)",
              },
            }}
          >
            Request Maintenance Support
          </Button>

        </Box>

      </Container>
    </>
  );
}
