// src/components/BusinessAnalysis.js
import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function BusinessAnalysis() {
  const whatWeDo = [
    {
      title: "Requirement Gathering",
      text: "We work closely with stakeholders to identify, analyze, and document precise business requirements that align with organizational goals.",
      icon: "mdi:file-document-edit-outline",
    },
    {
      title: "Process Improvement",
      text: "We evaluate existing business processes, identify inefficiencies, and recommend solutions for better productivity and ROI.",
      icon: "mdi:chart-timeline-variant-shimmer",
    },
    {
      title: "Stakeholder Communication",
      text: "We bridge the gap between business needs and technical teams, ensuring clear communication and smooth collaboration throughout the project lifecycle.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Data-Driven Decisions",
      text: "We utilize analytics and reporting to help businesses make informed, data-backed strategic decisions for sustainable growth.",
      icon: "mdi:chart-line",
    },
    {
      title: "Solution Evaluation",
      text: "We assess proposed solutions, analyze their business impact, and ensure they meet both functional and non-functional requirements.",
      icon: "mdi:check-decagram-outline",
    },
    {
      title: "Risk Analysis",
      text: "We identify potential project and operational risks early to mitigate challenges and ensure smooth delivery.",
      icon: "mdi:alert-decagram-outline",
    },
  ];

  const industries = [
    { title: "Finance & Banking", icon: "mdi:bank" },
    { title: "Healthcare & Life Sciences", icon: "mdi:heart-pulse" },
    { title: "E-Commerce & Retail", icon: "mdi:cart-outline" },
    { title: "Education & E-Learning", icon: "mdi:school" },
    { title: "Travel & Hospitality", icon: "mdi:airplane" },
    { title: "IT & Software Services", icon: "mdi:laptop" },
  ];

  const technologies = [
    { title: "Jira", icon: "mdi:clipboard-list-outline" },
    { title: "Confluence", icon: "mdi:file-document-outline" },
    { title: "Figma", icon: "mdi:vector-rectangle" },
    { title: "Lucidchart", icon: "mdi:chart-timeline-variant-shimmer" },
    { title: "MS Excel", icon: "mdi:microsoft-excel" },
    { title: "Power BI", icon: "mdi:chart-bar" },
    { title: "SQL", icon: "mdi:database" },
    { title: "Python (for analysis)", icon: "mdi:language-python" },
    { title: "Tableau", icon: "mdi:chart-areaspline" },
    { title: "Notion", icon: "mdi:note-text-outline" },
  ];
  const services = [
    {
      title: "Requirement Analysis",
      text: "Understand your business processes, goals, and challenges to identify opportunities for improvement and define precise project requirements.",
      icon: "mdi:file-search-outline",
    },
    {
      title: "Process Optimization",
      text: "Analyze and refine existing workflows to enhance operational efficiency, reduce redundancies, and improve overall business performance.",
      icon: "mdi:cog-outline",
    },
    {
      title: "Designing New Features",
      text: "Create practical and scalable solutions to introduce new functionalities that add value and align with business growth objectives.",
      icon: "mdi:lightbulb-on-outline",
    },
    {
      title: "Impact Analysis",
      text: "Evaluate potential effects of proposed changes to ensure alignment with business goals, risk mitigation, and minimal disruption.",
      icon: "mdi:chart-timeline-variant",
    },
    {
      title: "Implementation",
      text: "Execute approved changes and new solutions smoothly, ensuring a seamless transition with minimal downtime or operational disturbance.",
      icon: "mdi:play-circle-outline",
    },
    {
      title: "Post-Implementation Support",
      text: "Monitor performance, gather feedback, and continuously refine processes to maintain long-term efficiency and business value.",
      icon: "mdi:autorenew",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/business.png')",
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
            Business Analysis
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
              src="/images/business1.png"
              alt="Business Analysis"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* Right Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Strategic Business Analysis Services
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              At Rohil Technologies, we empower organizations to make informed,
              data-driven decisions by transforming complex business challenges
              into actionable insights. Our expert analysts dive deep into your
              operations to uncover opportunities, streamline processes, and
              enhance overall efficiency.
            </Typography>

            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We focus on aligning business goals with technology execution —
              ensuring that every solution we recommend not only meets
              functional needs but also drives measurable results. From
              requirement gathering and stakeholder analysis to feasibility
              studies and documentation, our approach is structured,
              transparent, and impact-oriented.
            </Typography>

            <Typography sx={{ color: colors.grey }}>
              Rohil Technologies stands as your trusted partner in continuous
              business improvement. Through ongoing performance evaluation, data
              analysis, and strategic consultation, we help your organization
              adapt to evolving market dynamics and maintain a competitive edge
              in the digital era.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* ===== Section: Services ===== */}
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
          Our Core Services
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

      {/* ===== Section: What We Do ===== */}
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
          What We Do
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          Our Business Analysis services help organizations understand problems,
          define solutions, and implement strategies that create measurable
          business value. We focus on clarity, collaboration, and continuous
          improvement to ensure every solution meets stakeholder needs and
          exceeds expectations.
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
          We provide Business Analysis expertise across diverse sectors,
          delivering tailored insights and scalable solutions that align with
          industry demands and business goals.
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
            </Box>
          ))}
        </Box>
      </Container>

      {/* ===== Tools & Technologies ===== */}
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
          Tools & Technologies
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We utilize industry-leading tools and platforms to streamline
          analysis, documentation, and collaboration. Our expertise covers
          requirement management, visualization, reporting, and analytics tools
          that ensure clarity, efficiency, and success across all projects.
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
