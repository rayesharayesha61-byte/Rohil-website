// src/components/CRM.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function CRM() {
  // ===== ZigZag Sections for CRM Features =====
  const zigZagSections = [
    {
      title: "Manage Clients",
      text: "Effortlessly track, organize, and nurture your customer relationships with Rohil Technologies CRM software. Our system helps you maintain detailed client records, monitor interactions, schedule timely follow-ups, and manage communications efficiently. By keeping all your client information centralized, you can enhance engagement, build long-term loyalty, and make informed decisions that strengthen relationships and drive sustainable business growth across every touchpoint of your organization.",
      img: "/products/crm1.png",
      imgLeft: true,
    },
    {
      title: "Analytics",
      text: "Gain actionable insights into customer behavior, preferences, and trends with our advanced analytics tools. Monitor engagement patterns, measure campaign performance, and identify opportunities for improvement. By analyzing real-time data, you can make informed decisions that optimize sales, marketing, and customer support strategies. Leverage metrics to understand customer journeys, predict behavior, and implement targeted actions that drive growth, enhance client satisfaction, and maximize ROI for your business.",
      img: "/products/crm2.png",
      imgLeft: false,
    },
    {
      title: "Scheduling",
      text: "Streamline your appointments, follow-ups, and internal meetings with our integrated scheduling tools. Maintain an organized calendar that reduces missed deadlines and overlapping commitments. Coordinate effectively with team members and clients, automate reminders, and ensure every interaction happens on time. By optimizing your scheduling process, your business can increase productivity, improve client engagement, and foster professional relationships that result in more efficient operations and higher overall customer satisfaction.",
      img: "/products/crm3.png",
      imgLeft: true,
    },
    {
      title: "Email Integration",
      text: "With Rohil Technologies CRM software, integrate email seamlessly within your system to manage communications effectively. Send, track, and organize emails while maintaining consistent correspondence. Ensure timely follow-ups, personalized responses, and unified communication history for every client. This integration allows teams to stay connected, reduce response delays, improve client engagement, and strengthen long-term relationships, all while enhancing collaboration and efficiency within your organization’s sales, support, and marketing processes.",
      img: "/products/crm4.png",
      imgLeft: false,
    },
    {
      title: "Task Management",
      text: "Assign, track, and prioritize tasks efficiently to optimize team productivity and workflow. Monitor project progress, ensure deadlines are met, and maintain smooth coordination across departments. Task management features help teams focus on high-priority activities, reduce bottlenecks, and enhance accountability. By keeping everyone aligned and organized, your business can deliver superior results, improve operational efficiency, and achieve goals more effectively while exceeding client expectations and maintaining professional standards.",
      img: "/products/crm5.png",
      imgLeft: true,
    },
    {
      title: "Cloud Storage",
      text: "Securely store and access all your business data in the cloud with scalable and reliable solutions. Keep client records, project files, and documents organized and easily retrievable from anywhere. Cloud storage ensures seamless collaboration across teams, protects sensitive information, and enhances operational efficiency. By providing flexible, remote access to important data, your business can stay agile, improve decision-making, and maintain continuity, security, and performance without compromising on privacy or data integrity.",
      img: "/products/crm6.png",
      imgLeft: false,
    },
  ];
  // ===== Grid Sections (Additional Benefits for CRM) =====
  const gridSections = [
    {
      title: "Additional Benefits of Our CRM",
      items: [
        {
          title: "Increase Revenue",
          text: "Enhance your business growth by leveraging intelligent automation and data-driven insights. Track leads, identify high-value opportunities, and implement strategies that maximize conversions and boost overall revenue with precision and efficiency.",
          icon: "mdi:currency-usd",
        },
        {
          title: "Boost Productivity",
          text: "Streamline daily operations, reduce repetitive tasks, and improve team efficiency. By automating workflows and centralizing client information, your team can focus on high-impact activities that drive measurable business results.",
          icon: "mdi:clock-outline",
        },
        {
          title: "Enhance Customer Relationships",
          text: "Deliver personalized experiences, maintain timely follow-ups, and provide consistent support across all touchpoints. Strengthen client loyalty, build trust, and ensure customer satisfaction that results in long-term engagement.",
          icon: "mdi:heart-outline",
        },
        {
          title: "Improved Collaboration",
          text: "Facilitate seamless communication and collaboration among team members. Share client information, assign tasks, and coordinate projects effortlessly to ensure your team works efficiently and stays aligned with business goals.",
          icon: "mdi:account-group-outline",
        },
        {
          title: "Data Security & Compliance",
          text: "Keep sensitive client and business data secure with advanced cloud-based storage and access controls. Ensure compliance with industry standards while safeguarding information from unauthorized access or breaches.",
          icon: "mdi:shield-lock-outline",
        },
        {
          title: "Scalable & Flexible",
          text: "Adapt the CRM to fit your growing business needs. Whether you expand teams, add clients, or integrate new tools, the system scales effortlessly, ensuring continuous support for your evolving operations.",
          icon: "mdi:database-plus",
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
          backgroundImage: "url('/products/crm.png')",
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
            CRM Software
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
