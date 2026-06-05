// src/components/Audit.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function Audit() {
  const zigZagSections = [
    {
      title: "Enhancing Confidence Through Accurate Audits",
      text: "At Rohil Technologies, our audit services are designed to enhance organizational confidence by ensuring transparency, accuracy, and compliance. We assess processes, identify potential risks, and help strengthen internal systems for improved operational excellence.",
      img: "/service/audit1.png",
      imgLeft: true,
    },
    {
      title: "Delivering Accuracy and Trust",
      text: "Our experienced auditors use advanced data analytics and technology-driven methodologies to ensure that every audit report is accurate, insightful, and aligned with the latest compliance standards. We focus on building trust and ensuring our clients meet financial, legal, and governance expectations.",
      img: "/service/audit2.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Independent Audits",
      text: "We perform unbiased, independent audits with a strong focus on compliance, outcomes, and business improvement.",
      icon: "mdi:shield-check-outline",
    },
    {
      title: "Deep Insights",
      text: "Our audits evaluate systems, identify risks, and offer valuable insights to support strategic decision-making.",
      icon: "mdi:chart-line",
    },
    {
      title: "Enhanced Quality",
      text: "Combining skilled professionals and technology, we ensure superior audit quality and reliability.",
      icon: "mdi:star-outline",
    },
    {
      title: "Accuracy & Trust",
      text: "We provide accurate, transparent results that enhance your organization's financial and operational credibility.",
      icon: "mdi:handshake-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/audit.png')",
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
            Audit Services
          </Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
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
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 6,
            }}
          >
            Why Choose Our Audit Services
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
                <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* ===== Our Approach ===== */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Our Approach to Audits
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            Our audit approach integrates accuracy, technology, and compliance.
            We focus on evaluating operational systems, detecting
            inefficiencies, ensuring data security, and mitigating risks to
            strengthen your organization's overall performance.
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li">
              Compliance with IT laws and governance standards
            </Typography>
            <Typography component="li">
              Identification of inefficiencies in systems and management
            </Typography>
            <Typography component="li">
              Minimization of risks to information assets
            </Typography>
            <Typography component="li">
              Strengthening internal processes and transparency
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* ===== Why Choose Rohil ===== */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Why Choose Rohil Technologies
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Expert Auditors
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Our professionals combine experience and innovation to deliver
              accurate and insightful audit outcomes.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Technology-Driven Approach
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Using cutting-edge tools and analytics, we provide data-backed
              audit reports that drive improvement and compliance.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Transparent Reporting
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Every audit report we deliver is structured, transparent, and
              aligned with your organization’s objectives and governance goals.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
