// src/components/ERP.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function ERP() {
  // ===== ZigZag Sections for ERP Features =====
  const zigZagSections = [
    {
      title: "Integrated Business Management",
      text: "Rohil Technologies ERP software unifies all your core business operations—finance, inventory, production, HR, and sales—into one centralized system. Gain real-time visibility, streamline workflows, and eliminate data silos across departments. With automation and intelligent dashboards, you can make faster, more informed decisions that improve efficiency and business performance at every level.",
      img: "/products/erp1.png",
      imgLeft: true,
    },
    {
      title: "Inventory & Supply Chain Control",
      text: "Optimize your inventory levels and strengthen supply chain coordination with advanced tracking and analytics. Monitor stock in real time, automate reorders, and reduce waste with accurate demand forecasting. Rohil ERP ensures your supply chain runs smoothly, reducing costs while maintaining high product availability and operational reliability.",
      img: "/products/erp2.png",
      imgLeft: false,
    },
    {
      title: "Financial Management",
      text: "Simplify your accounting and financial operations with a unified ERP platform. Automate ledgers, manage cash flow, handle multi-currency transactions, and generate precise financial reports. Rohil ERP ensures compliance, transparency, and complete control over your organization’s financial health—all from one place.",
      img: "/products/erp3.png",
      imgLeft: true,
    },
    {
      title: "Human Resource Management",
      text: "Empower your HR team with tools that simplify recruitment, payroll, attendance, and performance tracking. Rohil ERP’s HR module brings all employee data into one secure environment, promoting efficiency and employee satisfaction through automation and streamlined workflows.",
      img: "/products/erp4.png",
      imgLeft: false,
    },
    {
      title: "Project & Task Management",
      text: "Manage complex projects effortlessly with built-in planning, scheduling, and monitoring tools. Assign tasks, track milestones, and monitor progress in real time to ensure projects are completed on time and within budget. Rohil ERP helps your team stay organized, productive, and aligned with business objectives.",
      img: "/products/erp5.png",
      imgLeft: true,
    },
    {
      title: "Data Analytics & Reporting",
      text: "Unlock valuable insights with powerful analytics and customizable reports. Rohil ERP helps you visualize business data across departments, identify trends, and make smarter, data-driven decisions. With AI-powered reporting, you can predict outcomes, optimize performance, and enhance business strategy.",
      img: "/products/erp6.png",
      imgLeft: false,
    },
  ];

  // ===== Grid Sections (Additional Benefits for ERP) =====
  const gridSections = [
    {
      title: "Additional Benefits",
      items: [
        {
          title: "Centralized Data",
          text: "Access all business data in one unified system, improving coordination and eliminating redundancy across departments.",
          icon: "mdi:database-outline",
        },
        {
          title: "Real-Time Insights",
          text: "Make faster, more informed decisions with instant access to live operational and financial data.",
          icon: "mdi:chart-line",
        },
        {
          title: "Process Automation",
          text: "Automate repetitive business tasks and reduce manual intervention to increase productivity and accuracy.",
          icon: "mdi:cog-outline",
        },
        {
          title: "Scalability",
          text: "Easily scale as your organization grows with modular ERP capabilities that adapt to your evolving business needs.",
          icon: "mdi:trending-up",
        },
        {
          title: "Enhanced Collaboration",
          text: "Improve communication and collaboration across teams with shared access and real-time updates.",
          icon: "mdi:account-group-outline",
        },
        {
          title: "Security & Compliance",
          text: "Ensure data integrity and meet compliance requirements with advanced encryption and access control.",
          icon: "mdi:shield-check-outline",
        },
      ],
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/products/erp.png')",
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
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            ERP
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

      {/* ===== Grid Sections ===== */}
      {gridSections.map((section, idx) => (
        <Box key={idx} sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
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
              {section.title}
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
              {section.items.map((item, i) => (
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
                  <Typography sx={{ color: colors.grey }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      ))}
    </>
  );
}
