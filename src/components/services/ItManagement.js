// src/components/ItManagement.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "../Colors";

export default function ItManagement() {
  const services = [
    {
      title: "Infrastructure Management",
      text: "Ensure high availability and performance of servers, networks, and databases through proactive monitoring and maintenance.",
      icon: "mdi:server-network",
    },
    {
      title: "Cloud Management",
      text: "Manage and optimize cloud resources, ensuring scalability, cost efficiency, and seamless migration strategies.",
      icon: "mdi:cloud-outline",
    },
    {
      title: "Network Administration",
      text: "Monitor network performance, strengthen connectivity, and safeguard communication channels from potential threats.",
      icon: "mdi:lan-connect",
    },
    {
      title: "IT Helpdesk Support",
      text: "Provide round-the-clock technical assistance and troubleshooting to ensure uninterrupted business operations.",
      icon: "mdi:headset",
    },
    {
      title: "Data Backup & Disaster Recovery",
      text: "Implement secure backup and recovery systems to protect data and ensure business continuity during unforeseen events.",
      icon: "mdi:backup-restore",
    },
    {
      title: "Cybersecurity Management",
      text: "Protect digital assets with multi-layered security strategies including firewalls, encryption, and intrusion detection.",
      icon: "mdi:shield-lock-outline",
    },
    {
      title: "IT Project Management",
      text: "Deliver IT projects on time and within budget through strategic planning, execution, and continuous improvement.",
      icon: "mdi:clipboard-check-outline",
    },
    {
      title: "Software Asset Management",
      text: "Track, manage, and optimize software licenses to reduce costs and ensure compliance with industry standards.",
      icon: "mdi:application-cog-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/ITManagement.png')",
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
            IT Management
          </Typography>
        </Box>
      </Box>

      {/* ===== Intro Section ===== */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 3 }}
        >
          IT MANAGEMENT
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 2 }}>
          An organization’s IT system and management ensure fluent company-wide
          communication and coordination, rapid recovery, and minimal downtime
          during unforeseen emergencies such as natural disasters or cyber
          attacks. This helps increase productivity, improve customer service,
          and support business growth seamlessly.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Why IT Management Essential */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          Why is IT Management Essential?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          IT Management plays a critical role in aligning technology with
          business goals. It helps optimize resources, improve data management,
          enhance team collaboration, and minimize downtime. With strategic IT
          management, businesses gain greater agility, scalability, and
          resilience in a constantly evolving digital landscape.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* What Services Rohil Offers */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          What Services Does Rohil Technologies Offer?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Rohil Technologies offers end-to-end IT management solutions covering
          infrastructure, networks, cloud platforms, and security operations.
          Our experts ensure smooth IT operations, scalability, and security to
          keep businesses running without interruptions.
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            mt: 4,
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

        <Divider sx={{ my: 5 }} />

        {/* Security Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          How Does IT Management Enhance Security?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          IT Management ensures all systems are protected through continuous
          monitoring, patch management, and advanced cybersecurity frameworks.
          By implementing proactive defense mechanisms, it prevents data
          breaches, protects sensitive information, and ensures compliance with
          regulatory standards.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Project Management Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          What Are the Benefits of Project Management?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Effective IT project management ensures that every technology
          initiative aligns with business objectives. It improves efficiency,
          controls costs, and ensures timely delivery. Our structured approach
          enables smooth communication between stakeholders and helps deliver
          measurable business outcomes.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* IT Operations Support Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          How Does Rohil Technologies Support IT Operations?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Rohil Technologies provides ongoing IT support through continuous
          monitoring, maintenance, and proactive issue resolution. Our experts
          ensure systems are updated, secure, and optimized for high
          performance, empowering businesses to stay focused on innovation and
          growth.
        </Typography>
      </Container>
    </>
  );
}
