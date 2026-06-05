import React from "react";
import { Box, Typography, Container, Divider, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "../Colors";
import {
  Build,
  Analytics,
  Speed,
  BarChart,
  Security,
  BugReport,
} from "@mui/icons-material";

export default function BusinessAnalysis() {
  const zigZagSections = [
    {
      title: "Operational Efficiency",
      text: "At Rohil Technologies, our Business Solutions focus on optimizing operational efficiency. Many organizations struggle with streamlining processes, managing resources, and maintaining smooth operations. Our solutions, including enterprise resource planning (ERP), customer relationship management (CRM), and workflow automation software, integrate different business functions, improve data accuracy, and reduce manual efforts. By automating routine tasks, Rohil Technologies enables businesses to focus on strategic initiatives, enhance productivity, and free valuable resources for innovation and sustainable growth.",
      img: "/service/businessAnalysis1.png",
      imgLeft: true,
    },
    {
      title: "Enhancing Customer Experience",
      text: "Rohil Technologies provides Business Solutions that elevate customer experience. In today’s competitive market, customers expect personalized and seamless interactions. Our CRM systems, marketing automation tools, and analytics solutions help track customer behavior, provide actionable insights, and tailor offerings to meet client expectations. By leveraging data-driven strategies, Rohil Technologies ensures businesses can deliver targeted marketing campaigns, exceptional service, and loyalty programs that foster long-term customer relationships.",
      img: "/service/businessAnalysis2.png",
      imgLeft: false,
    },
    {
      title: "Financial Management & Growth",
      text: "Rohil Technologies’ Business Solutions support robust financial management and business growth. Our accounting software, financial planning systems, and advanced analytics platforms provide real-time financial insights, helping businesses make informed decisions. With our solutions, organizations can manage cash flow efficiently, optimize budgeting, forecast future trends, and identify cost-saving opportunities. By streamlining financial processes, Rohil Technologies enables companies to increase profitability and reinvest in strategic growth initiatives.",
      img: "/service/businessAnalysis3.png",
      imgLeft: true,
    },
    {
      title: "Scalability",
      text: "Scalability is a core focus of Rohil Technologies’ Business Solutions. As businesses grow, they need adaptable systems and processes. Our cloud-based solutions provide flexibility and scalability, allowing companies to expand infrastructure, add users, and integrate additional business functions seamlessly. Rohil Technologies ensures that your business can scale efficiently, supporting new markets, enhanced operations, and sustainable growth without requiring major infrastructure overhauls.",
      img: "/service/businessAnalysis4.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Market Research",
      text: "Deep analysis of market trends, consumer behavior, and competition to help you make informed business decisions.",
      icon: "mdi:chart-line",
    },
    {
      title: "Data Analytics",
      text: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      icon: "mdi:chart-pie",
    },
    {
      title: "Business Consulting",
      text: "Expert consultation to optimize business processes, strategy, and performance for sustainable growth.",
      icon: "mdi:account-tie",
    },
    {
      title: "Performance Monitoring",
      text: "Track and evaluate business KPIs and metrics to ensure goals are met efficiently.",
      icon: "mdi:monitor-dashboard",
    },
    {
      title: "Data-Driven Management",
      text: "We analyze business data statistically to create predictive models and data-based management reports, enabling precise, data-driven decisions.",
      icon: "mdi:database-settings",
    },
    {
      title: "Market Trends Analysis",
      text: "Stay ahead with insights into current market trends, ensuring your business remains at the top of its standards with tailored analytics solutions.",
      icon: "mdi:chart-bell-curve",
    },
  ];

  const tools = [
    { title: "Power BI", icon: "mdi:microsoft-powerbi" },
    { title: "Tableau", icon: "mdi:tableau" },
    { title: "Excel", icon: "mdi:microsoft-excel" },
    { title: "Python", icon: "mdi:language-python" },
    { title: "SQL", icon: "mdi:database" },
  ];

  const industries = [
    { title: "Finance & Banking", icon: "mdi:bank" },
    { title: "Healthcare", icon: "mdi:hospital" },
    { title: "Retail & E-commerce", icon: "mdi:shopping" },
    { title: "Education", icon: "mdi:school" },
    { title: "Travel & Tourism", icon: "mdi:airplane" },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/businessAnalysis.png')",
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
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Business Analysis
          </Typography>
        </Box>
      </Box>

      {/* ===== Intro Section ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: section.imgLeft ? "row" : "row-reverse",
              },
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src={section.img}
                alt={section.title}
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
              >
                {section.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>
                {section.text}
              </Typography>
            </Box>
          </Box>
          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 8 }} />}
        </Container>
      ))}

      <Divider />
      <Container sx={{ py: 4 }}>
        {/* Why Business Analytics Matters */}
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          Why Business Analytics Matters
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 4 }}>
          Business Analytics has opened a new realm of possibilities for many
          businesses. From drastically reducing risks to improving workflow in
          everyday tasks, the right business intelligence solution allows
          management to focus on key areas of operations. Improvements in these
          areas lead to increased profits and enhanced customer service.
        </Typography>

        {/* Challenges in Business Analytics */}
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          Challenges in Business Analytics
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 4 }}>
          Business Analytics relies on set models and data solutions. If these
          are not optimized, they can present unique problems with
          implementation and maximizing benefits. Issues such as inadequate
          ability to handle high data volumes can slow progress and sidetrack
          solutions.
        </Typography>

        {/* Advanced Analytics Techniques */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
          >
            Advanced Analytics Techniques
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            {[
              "Statistical Analysis",
              "Big Data Analysis",
              "Predictive Analysis",
              "Text Mining",
            ].map((tech, i) => (
              <Typography
                component="li"
                key={i}
                sx={{ mb: 1, color: colors.grey }}
              >
                {tech}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>

      {/* ===== Services Offered ===== */}
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
          How Rohil Technologies Helps
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

      {/* ===== Analytics Insights Section ===== */}
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
          Analytics Insights
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We utilize advanced analytics methods to provide actionable insights,
          optimize business processes, and support decision-making at all
          levels.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Performance Tracking",
              icon: <Speed sx={{ fontSize: 50, color: colors.primary }} />,
              text: "Track KPIs and performance metrics to ensure efficiency and growth.",
            },
            {
              title: "Risk Analysis",
              icon: <Security sx={{ fontSize: 50, color: colors.primary }} />,
              text: "Identify and mitigate risks to secure business operations and data.",
            },
            {
              title: "Quality Assurance",
              icon: <Build sx={{ fontSize: 50, color: colors.primary }} />,
              text: "Ensure high-quality insights through validated data and methodologies.",
            },
            {
              title: "Reporting & Visualization",
              icon: <BarChart sx={{ fontSize: 50, color: colors.primary }} />,
              text: "Generate clear and actionable visual reports for stakeholders.",
            },
            {
              title: "Testing & Auditing",
              icon: <BugReport sx={{ fontSize: 50, color: colors.primary }} />,
              text: "Conduct thorough analysis to validate findings and improve accuracy.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "30%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
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
    </>
  );
}
