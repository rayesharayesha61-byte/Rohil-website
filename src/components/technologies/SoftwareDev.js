// src/components/SoftwareDev.js
import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import colors from "../Colors";
import {
  Cloud,
  Security,
  Build,
  BugReport,
  Speed,
  BarChart,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";

export default function SoftwareDev() {
  const devPlatforms = [
    { title: "Web Applications", icon: "mdi:web" },
    { title: "Desktop Applications", icon: "mdi:desktop-classic" },
    { title: "Enterprise Software", icon: "mdi:office-building" },
    { title: "Cloud Solutions", icon: "mdi:cloud" },
    { title: "AI/ML Tools", icon: "mdi:robot" },
  ];

  const whatWeDo = [
    { title: "Requirement Analysis", icon: "mdi:clipboard-text" },
    { title: "Software Architecture", icon: "mdi:vector-square" },
    { title: "Prototyping & Mockups", icon: "mdi:draw" },
    { title: "Development & Coding", icon: "mdi:code-tags" },
    { title: "Testing & QA", icon: "mdi:bug-check" },
    { title: "Deployment & Maintenance", icon: "mdi:server" },
  ];

  const industries = [
    { title: "Finance & Banking", icon: "mdi:bank" },
    { title: "Healthcare & Life Sciences", icon: "mdi:hospital" },
    { title: "Education & E-Learning", icon: "mdi:school" },
    { title: "Retail & E-Commerce", icon: "mdi:shopping" },
    { title: "Travel & Logistics", icon: "mdi:airplane" },
    { title: "Gaming & Entertainment", icon: "mdi:gamepad-variant" },
  ];
  const technologies = [
    { title: "Java", icon: "mdi:language-java" },
    { title: "Python", icon: "mdi:language-python" },
    { title: "C#", icon: "mdi:language-csharp" },
    { title: "C++", icon: "mdi:language-cpp" },
    { title: "JavaScript", icon: "mdi:language-javascript" },
    { title: "TypeScript", icon: "mdi:language-typescript" },
    { title: "Go", icon: "mdi:language-go" },
    { title: "Ruby", icon: "mdi:language-ruby" },
    { title: "PHP", icon: "mdi:language-php" },
    { title: "Swift", icon: "mdi:language-swift" },
    { title: "Kotlin", icon: "mdi:kotlin" },
    { title: "Rust", icon: "mdi:language-rust" },
    { title: "Dart", icon: "logos:dart" }, // use Logos icon
    { title: "Scala", icon: "simple-icons:scala" },
    { title: "Perl", icon: "simple-icons:perl" },
  ];

  const services = [
    {
      title: "Web Applications",
      text: "Build dynamic, secure, and scalable web applications tailored to your business.",
      icon: "mdi:web",
    },
    {
      title: "Desktop Applications",
      text: "Develop robust desktop software with seamless performance and advanced features.",
      icon: "mdi:desktop-classic",
    },
    {
      title: "Enterprise Software",
      text: "Deliver customized solutions for large-scale enterprise processes and operations.",
      icon: "mdi:office-building",
    },
    {
      title: "AI/ML Integration",
      text: "Integrate artificial intelligence and machine learning for smarter applications.",
      icon: "mdi:robot",
    },
    {
      title: "Software Development",
      text: "Design and create robust software solutions tailored to meet your specific needs.",
      icon: "mdi:code-tags",
    },
    {
      title: "APIs & Integration",
      text: "Develop and integrate APIs to ensure seamless connectivity across platforms and systems.",
      icon: "mdi:api",
    },
    {
      title: "AI Development",
      text: "Leverage artificial intelligence to automate processes and enhance decision-making.",
      icon: "mdi:brain",
    },
    {
      title: "Scripting",
      text: "Create efficient scripts to automate repetitive tasks and boost productivity.",
      icon: "mdi:script-text-outline",
    },
    {
      title: "Plugin Development",
      text: "Develop custom plugins to enhance the functionality of your software or platform.",
      icon: "mdi:puzzle",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/softdev.png')",
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
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Software Development
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
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/softdev1.png"
              alt="Software Development"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Custom Software Solutions
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We create robust, scalable, and secure software solutions for
              businesses of all sizes. From web and desktop applications to
              enterprise platforms, our solutions are tailored to meet your
              exact business needs.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Leveraging the latest technologies and frameworks, our team
              ensures efficient performance, intuitive interfaces, and
              maintainable code for long-term success.
            </Typography>
          </Box>
        </Box>
      </Container>
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
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              End-to-End Software Solutions
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We deliver innovative and reliable software solutions designed to
              streamline your business operations. From web and desktop
              platforms to enterprise-grade systems, every solution is
              customized for your unique requirements.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              By leveraging modern technologies and best practices, we create
              applications that are fast, user-friendly, and easy to maintain,
              ensuring your business stays ahead in a competitive landscape.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <img
              src="/images/softdev2.png"
              alt="Software Development"
              style={{ width: "80%", borderRadius: "12px" }}
            />
          </Box>
        </Box>
      </Container>
      <Divider />

      {/* ===== Our Services ===== */}
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
                flex: { xs: "100%", sm: "48%", md: "23%" },
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

      {/* ===== Development Platforms ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Development Platforms
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We develop software for multiple platforms, ensuring high performance,
          security, and user-friendly interfaces across desktop, web, and cloud
          environments.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mb={8}>
          {devPlatforms.map((item, i) => (
            <Grid item xs={12} sm={6} md={2.3} key={i}>
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

      {/* ===== What We Do ===== */}
      <Container sx={{ py: 4 }}>
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
          From analysis to deployment, we follow a structured software
          development process to deliver reliable, efficient, and user-friendly
          solutions.
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

      {/* ===== Industries ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Industries We Serve
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We deliver software solutions across diverse industries, ensuring
          performance, security, and business impact.
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

      {/* ===== Technologies ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Technologies
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We use the latest programming languages, frameworks, and cloud
          technologies to build scalable, efficient, and high-performing
          software solutions.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mb={8}>
          {technologies.map((item, i) => (
            <Grid item xs={12} sm={6} md={2.3} key={i}>
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
    </>
  );
}
