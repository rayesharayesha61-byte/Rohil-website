// src/components/Testing.js
import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function Testing() {
  const services = [
    {
      title: "Functional Testing",
      text: "Ensure all features work as expected by validating functionality against defined requirements and user scenarios.",
      icon: "mdi:check-decagram-outline",
    },
    {
      title: "Automation Testing",
      text: "Leverage automated tools and scripts to improve test accuracy, reduce manual effort, and accelerate release cycles.",
      icon: "mdi:robot-outline",
    },
    {
      title: "Performance Testing",
      text: "Analyze application speed, scalability, and responsiveness under varying load conditions to guarantee stability.",
      icon: "mdi:speedometer",
    },
    {
      title: "Security Testing",
      text: "Identify vulnerabilities and ensure data protection with rigorous penetration and security compliance testing.",
      icon: "mdi:shield-check-outline",
    },
    {
      title: "Compatibility Testing",
      text: "Verify seamless performance across browsers, devices, and operating systems for a consistent user experience.",
      icon: "mdi:devices",
    },
    {
      title: "User Acceptance Testing (UAT)",
      text: "Collaborate with clients to validate the final solution, ensuring it meets business expectations before deployment.",
      icon: "mdi:account-check-outline",
    },
  ];

  const tools = [
    { title: "Selenium", icon: "mdi:robot-outline" },
    { title: "JIRA", icon: "mdi:bug" },
    { title: "Postman", icon: "mdi:api" },
    { title: "JMeter", icon: "mdi:chart-line" },
    { title: "TestRail", icon: "mdi:clipboard-text-outline" },
    { title: "BrowserStack", icon: "mdi:web" },
  ];
  const testingServices = [
    { title: "Functional Testing", icon: "mdi:check-decagram-outline" },
    { title: "Automation Testing", icon: "mdi:robot-outline" },
    { title: "Performance Testing", icon: "mdi:speedometer" },
    { title: "Security Testing", icon: "mdi:shield-check-outline" },
    { title: "Datawarehouse Testing", icon: "mdi:database-search" },
    { title: "Business Intelligence Testing", icon: "mdi:chart-line" },
  ];

  const elementTesting = [
    { title: "Unit Testing", icon: "mdi:alpha-u-box-outline" },
    { title: "System Testing", icon: "mdi:alpha-s-box-outline" },
    { title: "Integration Testing", icon: "mdi:alpha-i-box-outline" },
    { title: "User Acceptance Testing", icon: "mdi:account-check-outline" },
    {
      title: "Production Implementation Testing",
      icon: "mdi:play-circle-outline",
    },
    { title: "Production Testing", icon: "mdi:check-circle-outline" },
  ];

  const ancillaryTesting = [
    { title: "Chrome, Safari", icon: "mdi:google-chrome" },
    { title: "Firefox", icon: "mdi:firefox" },
    { title: "Edge, IE", icon: "mdi:edge" },
    { title: "Mobile Browsers", icon: "mdi:cellphone" },
  ];

  const appTesting = [
    { title: "Android", icon: "mdi:android" },
    { title: "iOS", icon: "mdi:apple" },
    { title: "Windows", icon: "mdi:microsoft-windows" },
  ];

  const linguisticTesting = [
    { title: "Multilingual Support", icon: "mdi:translate" },
    { title: "Regional Adaptations", icon: "mdi:map-marker" },
    { title: "Client-Specific Needs", icon: "mdi:account-tie" },
  ];

  const specialTesting = [
    { title: "Crowd Testing", icon: "mdi:account-group-outline" },
    { title: "Device Testing", icon: "mdi:devices" },
  ];

  const additionalTesting = [
    { title: "Test Management", icon: "mdi:clipboard-text-outline" },
    { title: "Test Consulting", icon: "mdi:lightbulb-on-outline" },
    { title: "Test Data Management", icon: "mdi:database-edit-outline" },
  ];

  const renderSection = (title, items) => (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: colors.darkBlue,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {items.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
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
                sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/testing.png')",
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
            Software Testing Services
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
          {/* Left - Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/testing1.png"
              alt="Testing Process"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* Right - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Quality Assurance & Testing
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              At Rohil Technologies, we ensure your applications meet the
              highest quality standards through meticulous software testing
              practices. Our QA experts focus on delivering reliable, secure,
              and high-performing solutions by identifying issues early in the
              development cycle.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              With a combination of manual and automated testing approaches, we
              guarantee flawless user experiences and seamless functionality
              across platforms, helping businesses reduce risks and improve
              efficiency.
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              At Rohil Technologies, we provide a wide range of testing services
              to ensure quality, performance, and reliability of your software.
              Our comprehensive approach covers all aspects of software testing,
              from functional checks to specialized app and linguistic testing.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* Sections */}
      {renderSection("Our Testing Services", testingServices)}
      {renderSection("Element Testing Services", elementTesting)}
      {renderSection("Ancillary Testing Services", ancillaryTesting)}
      {renderSection("App Testing", appTesting)}
      {renderSection("Linguistic Testing", linguisticTesting)}
      {renderSection("Special Testing Services", specialTesting)}
      {renderSection("Additional Testing Services", additionalTesting)}
      {/* ===== Section: Testing Approach ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Our Testing Approach
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We follow a structured and agile testing methodology that ensures
          accuracy, speed, and adaptability throughout the software lifecycle.
          Our approach covers requirement validation, test planning, execution,
          defect tracking, and continuous improvement.
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

      <Divider />

      {/* ===== Tools & Technologies ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Tools & Technologies
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We utilize modern QA and testing tools to ensure accuracy,
          scalability, and faster delivery cycles. Our experts are skilled in
          both open-source and enterprise testing platforms.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {tools.map((item, i) => (
            <Grid item xs={6} sm={4} md={2.3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
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
                    mt: 2,
                  }}
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
