// src/components/BusinessProcessSolution.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function BusinessProcessSolution() {
  const zigZagSections = [
    {
      title: "Seamless Business Services for Your Organization",
      text: "At Rohil Technologies, we deliver end-to-end business process solutions that streamline operations, enhance productivity, and reduce costs. Our goal is to help your business focus on growth while we take care of process efficiency, accuracy, and compliance.",
      img: "/service/businessProcess1.png",
      imgLeft: true,
    },
    {
      title: "Empowering Businesses Through Outsourcing Excellence",
      text: "Our Business Process Outsourcing (BPO) services provide scalable and flexible support to handle both core and non-core operations. From payroll to data processing, we ensure high-quality results that drive efficiency and customer satisfaction.",
      img: "/service/businessProcess2.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Back Office",
      text: "We manage HR, accounting, and administrative operations, ensuring your internal processes run smoothly and efficiently.",
      icon: "mdi:office-building-outline",
    },
    {
      title: "Call Centre",
      text: "Our call center solutions manage client inquiries, improve customer relationships, and reduce operational overhead.",
      icon: "mdi:phone-in-talk-outline",
    },
    {
      title: "Payroll",
      text: "Accurate and compliant payroll management, including wage deductions, tax calculations, and data processing.",
      icon: "mdi:cash-check",
    },
    {
      title: "Leave Management",
      text: "Automated leave tracking that ensures compliance with company policies and regional labor laws.",
      icon: "mdi:calendar-check-outline",
    },
    {
      title: "Coupon Processing",
      text: "We manage redemption tracking, barcode generation, and coupon expense optimization efficiently.",
      icon: "mdi:ticket-percent-outline",
    },
    {
      title: "Loan Processing",
      text: "End-to-end support for loan verification, compliance checks, and credit score evaluation.",
      icon: "mdi:bank-outline",
    },
    {
      title: "Data Processing",
      text: "Transform raw data into structured and meaningful insights through advanced processing tools.",
      icon: "mdi:database-cog-outline",
    },
    {
      title: "Virtual Assistants",
      text: "Our expert VAs provide remote assistance for scheduling, logistics, research, and customer communication.",
      icon: "mdi:account-tie-outline",
    },
    {
      title: "Startup Support",
      text: "We empower startups with process management, resource planning, and operational guidance for sustainable growth.",
      icon: "mdi:rocket-launch-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/businessProcess.png')",
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
            Business Process Solutions
          </Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: 5 }}>
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
            Our Key Services
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {services.map((item, i) => (
              <Box
                key={i}
                sx={{
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

          {/* ===== Why Choose Rohil Technologies ===== */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Why Choose Rohil Technologies
          </Typography>

          <Typography sx={{ color: colors.grey, mb: 2 }}>
            Rohil Technologies combines technology, expertise, and strategic
            insight to deliver reliable and cost-effective business process
            outsourcing services. Our teams are trained to meet the highest
            quality standards while aligning with your business objectives.
          </Typography>

          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li">
              Increased efficiency and reduced operational costs
            </Typography>
            <Typography component="li">
              Improved customer satisfaction through dedicated support
            </Typography>
            <Typography component="li">
              Advanced data security and compliance practices
            </Typography>
            <Typography component="li">
              Scalable solutions that adapt to your business needs
            </Typography>
            <Typography component="li">
              Continuous process optimization for better ROI
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
