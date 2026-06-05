// src/components/HRMS.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function HRMS() {
  // ===== ZigZag Sections for HRMS Features =====
  const zigZagSections = [
    {
      title: "Employee Management Simplified",
      text: "Rohil Technologies HRMS simplifies how organizations manage their workforce. From employee records and document management to department mapping and job history, everything is centralized in one secure system. Gain instant access to employee data, reduce manual errors, and ensure complete transparency across departments with an intuitive and efficient employee management platform.",
      img: "/products/hrms1.png",
      imgLeft: true,
    },
    {
      title: "Automated Payroll Processing",
      text: "Automate your payroll cycle with precision and accuracy. The HRMS platform handles salary computation, deductions, reimbursements, and tax compliance automatically. Rohil Technologies ensures seamless integration between attendance, leave, and payroll modules, eliminating manual work and errors. Generate payslips in seconds and ensure every employee is paid correctly and on time, every month.",
      img: "/products/hrms2.png",
      imgLeft: false,
    },
    {
      title: "Attendance & Leave Tracking",
      text: "Monitor and manage attendance effortlessly through biometric, web, or mobile tracking systems. The HRMS provides real-time visibility into employee presence, shift schedules, and leave status. Automated approval workflows and smart notifications simplify leave management, allowing HR teams to plan resources efficiently while maintaining consistent workforce productivity and transparency.",
      img: "/products/hrms3.png",
      imgLeft: true,
    },
    {
      title: "Performance Management",
      text: "Drive growth through structured performance reviews and continuous feedback. Rohil HRMS helps define measurable KPIs, automate appraisal cycles, and track individual and team progress. With integrated analytics, managers can evaluate productivity trends, identify top performers, and encourage career development—creating a culture of accountability, engagement, and excellence across the organization.",
      img: "/products/hrms4.png",
      imgLeft: false,
    },
    {
      title: "Recruitment & Onboarding",
      text: "Simplify hiring with an end-to-end recruitment and onboarding solution. From job postings to interview tracking and offer generation, every step is automated. Rohil Technologies HRMS ensures a smooth candidate experience with digital onboarding, reducing manual paperwork and saving time. Empower HR teams to bring new employees onboard faster and more efficiently than ever before.",
      img: "/products/hrms5.png",
      imgLeft: true,
    },
    {
      title: "Analytics & Employee Insights",
      text: "Transform workforce data into actionable insights with powerful analytics dashboards. The HRMS system helps HR teams track key trends such as attrition, attendance, and engagement levels. Rohil Technologies’ intelligent reporting tools enable data-driven decisions, helping organizations identify areas for improvement and optimize human capital strategies with confidence and clarity.",
      img: "/products/hrms6.png",
      imgLeft: false,
    },
  ];

  // ===== Grid Sections (Additional Benefits for HRMS) =====
  const gridSections = [
    {
      title: "Additional Benefits",
      items: [
        {
          title: "Data Security & Privacy",
          text: "Protect sensitive employee information with advanced encryption and role-based access control.",
          icon: "mdi:shield-lock-outline",
        },
        {
          title: "Employee Self-Service",
          text: "Allow employees to manage their profiles, view payslips, apply for leaves, and track attendance on their own.",
          icon: "mdi:account-badge-outline",
        },
        {
          title: "Regulatory Compliance",
          text: "Stay compliant with local labor laws, PF, ESI, and tax regulations automatically.",
          icon: "mdi:scale-balance",
        },
        {
          title: "Mobile Accessibility",
          text: "Access HRMS features anywhere, anytime through a responsive web and mobile-friendly interface.",
          icon: "mdi:cellphone-check",
        },
        {
          title: "Customizable Workflows",
          text: "Easily configure approval chains, notifications, and workflows to suit your organization’s unique policies.",
          icon: "mdi:cog-outline",
        },
        {
          title: "Seamless Integration",
          text: "Integrate HRMS with existing ERP, accounting, or attendance systems to achieve a unified business environment.",
          icon: "mdi:link-variant",
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
          backgroundImage: "url('/products/hrms.png')",
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
            HRMS
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
