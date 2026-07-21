// src/components/ERP.js
import React from "react";
import { Box, Typography, Container, Divider ,Button} from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";
 import { useNavigate } from "react-router-dom";
export default function ERP() {
  const navigate=useNavigate();
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
  component="h1"
  variant="h2"
  sx={{
    fontWeight: "bold",
    fontSize: { xs: "2rem", md: "3rem" },
  }}
>
  Enterprise Resource Planning (ERP) Solutions
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

   {/* ===== ERP Introduction ===== */}
<Container sx={{ py: { xs: 5, md: 8 } }}>
  <Typography
    component="h1"
    variant="h3"
    sx={{
      fontWeight: 700,
      color: colors.darkBlue,
      textAlign: "center",
      mb: 3,
      fontSize: { xs: "2rem", md: "2.8rem" },
    }}
  >
    Enterprise Resource Planning (ERP) Solutions
  </Typography>

  <Typography
    variant="body1"
    sx={{
      color: colors.grey,
      lineHeight: 1.9,
      textAlign: "justify",
      mb: 2,
    }}
  >
    Rohil Technologies provides powerful <strong>Enterprise Resource Planning (ERP) software solutions</strong> designed to simplify business operations and improve productivity. Our custom ERP development services help businesses manage finance, inventory, sales, human resources, procurement, manufacturing, and customer relationships through a single, centralized platform. Whether you are a startup, SME, or large enterprise, our scalable ERP systems are tailored to meet your unique business requirements and support long-term growth.
  </Typography>

  <Typography
    variant="body1"
    sx={{
      color: colors.grey,
      lineHeight: 1.9,
      textAlign: "justify",
      mb: 2,
    }}
  >
    Our cloud-based ERP solutions and web-based ERP software provide real-time access to business data, enabling faster decision-making and seamless collaboration across departments. With workflow automation, advanced reporting, and secure data management, Rohil Technologies helps organizations reduce operational costs, improve efficiency, and enhance overall business performance.
  </Typography>

  <Typography
    variant="body1"
    sx={{
      color: colors.grey,
      lineHeight: 1.9,
      textAlign: "justify",
      mb: 2,
    }}
  >
    We specialize in ERP software development, ERP implementation, ERP customization, ERP integration, and ongoing ERP support and maintenance. Our experienced team ensures smooth integration with your existing business applications, delivering reliable, secure, and future-ready ERP solutions that grow alongside your business.
  </Typography>

  <Typography
    variant="body1"
    sx={{
      color: colors.grey,
      lineHeight: 1.9,
      textAlign: "justify",
    }}
  >
    Whether you need an inventory management system, HRMS software, accounting ERP, CRM integration, manufacturing ERP, billing software, or a complete enterprise resource planning solution, Rohil Technologies delivers innovative, scalable, and secure ERP software that accelerates digital transformation and drives long-term business success.
  </Typography>
</Container>
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
      {/* ===== Call To Action ===== */}
<Box
  sx={{
    py: 8,
    backgroundColor: colors.darkBlue,
    color: "#fff",
    textAlign: "center",
  }}
>
  <Container maxWidth="md">
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 2,
        fontSize: { xs: "2rem", md: "2.6rem" },
      }}
    >
      Ready to Transform Your Business?
    </Typography>

    <Typography
      sx={{
        mb: 4,
        lineHeight: 1.8,
        opacity: 0.9,
      }}
    >
      Partner with Rohil Technologies to implement a secure, scalable, and intelligent ERP solution that streamlines operations, boosts productivity, and supports long-term business growth.
    </Typography>

   
<Button
  variant="contained"
  size="large"
  onClick={() => navigate("/contact")}
  sx={{
    px: 5,
    py: 1.5,
    borderRadius: "30px",
    fontWeight: 600,
    background: "#fff",
    color: colors.darkBlue,
    "&:hover": {
      background: "#f5f5f5",
    },
  }}
>
  Get Free Consultation
</Button>
  </Container>
</Box>
    </>
  );
}
