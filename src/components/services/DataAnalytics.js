import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function DataAnalytics() {
  const zigZagSections = [
    {
      title: "Data Analytics",
      text: "At Rohil Technologies, we harness the power of data to help businesses make smarter, faster, and more informed decisions. Our data analytics solutions transform raw data into actionable insights, empowering organizations to identify trends, optimize operations, and drive profitability through predictive and real-time analytics.",
      img: "/service/dataAnalytics2.png",
      imgLeft: true,
    },
    {
      title: "Enhancing Decision-Making with Insights",
      text: "We provide end-to-end analytics services — from data collection and cleansing to visualization and forecasting. Our experts use advanced tools and machine learning algorithms to identify business patterns, improve customer experience, and uncover new opportunities for growth and innovation.",
      img: "/service/dataAnalytics1.png",
      imgLeft: false,
    },
  ];
  const services = [
    {
      title: "Data Collection",
      text: "Gather structured and unstructured data from multiple sources including APIs, sensors, and enterprise systems.",
      icon: "mdi:database-import-outline",
    },
    {
      title: "Data Processing",
      text: "Cleanse, transform, and organize raw data to ensure accuracy, consistency, and usability for analysis.",
      icon: "mdi:database-cog-outline",
    },
    {
      title: "Data Visualization",
      text: "Convert complex data into interactive dashboards and charts using Power BI, Tableau, or Google Data Studio.",
      icon: "mdi:chart-pie",
    },
    {
      title: "Descriptive Analytics",
      text: "Summarize historical data to understand what has happened and identify performance trends.",
      icon: "mdi:chart-bar",
    },
    {
      title: "Diagnostic Analytics",
      text: "Determine the underlying causes of trends and business performance issues through deep data exploration.",
      icon: "mdi:magnify",
    },
    {
      title: "Predictive Analytics",
      text: "Use AI and machine learning algorithms to forecast future trends and business outcomes.",
      icon: "mdi:chart-timeline-variant",
    },
    {
      title: "Prescriptive Analytics",
      text: "Recommend data-driven actions by simulating multiple scenarios to achieve optimal results.",
      icon: "mdi:lightbulb-on-outline",
    },
    {
      title: "Big Data Analytics",
      text: "Handle large-scale, high-velocity data using Hadoop, Spark, and cloud-native analytics tools.",
      icon: "mdi:database-search",
    },
    {
      title: "AI & Machine Learning Integration",
      text: "Integrate ML models to automate decisions, detect anomalies, and enhance predictive accuracy.",
      icon: "mdi:robot-outline",
    },
    {
      title: "Real-Time Analytics",
      text: "Monitor live business metrics and KPIs with streaming data for instant insights and actions.",
      icon: "mdi:clock-outline",
    },
    {
      title: "Data Warehousing",
      text: "Consolidate enterprise data into a central repository to ensure a single, consistent view of information.",
      icon: "mdi:warehouse",
    },
    {
      title: "Customer Analytics",
      text: "Analyze customer journeys, behaviors, and feedback to boost engagement and retention.",
      icon: "mdi:account-multiple-outline",
    },
    {
      title: "Risk Analytics",
      text: "Identify and quantify potential risks using predictive modeling and statistical analysis.",
      icon: "mdi:shield-check",
    },
    {
      title: "Marketing Analytics",
      text: "Measure marketing performance, optimize campaigns, and improve ROI through data-driven insights.",
      icon: "mdi:bullhorn-outline",
    },
    {
      title: "Cloud Data Analytics",
      text: "Leverage scalable cloud platforms like AWS, Azure, or Google Cloud for secure, high-performance analytics.",
      icon: "mdi:cloud-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/DataAnalytics.png')",
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
            Data Analytics
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

      {/* ===== Services Section ===== */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
        <Container>
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
              Our Data Analytics Services
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
                    backgroundColor: "#fff",
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
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>

          <Divider sx={{ my: 6 }} />

          {/* Our Expertise */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Our Expertise
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Data Engineering
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Expertise in building scalable data pipelines, ETL systems, and
              data lakes to ensure high-quality data availability.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Business Intelligence (BI)
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Empower organizations with BI dashboards and analytics tools to
              visualize performance in real time.
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* What We Do */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            What We Do
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            We deliver end-to-end analytics solutions that transform data into
            strategic assets for business excellence.
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li">
              Data collection, cleansing, and integration
            </Typography>
            <Typography component="li">
              Advanced reporting and visualization
            </Typography>
            <Typography component="li">
              AI-driven predictive analytics
            </Typography>
            <Typography component="li">
              Cloud data migration and modernization
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Why Choose Us */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Why Choose Us
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Data-Driven Decision Making
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              We empower businesses to make evidence-based decisions with
              real-time, reliable analytics insights.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Scalable and Secure Solutions
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Our analytics systems are built for performance, scalability, and
              security — enabling businesses to grow with confidence.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
