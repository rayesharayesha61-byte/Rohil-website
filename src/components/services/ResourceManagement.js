// src/components/ResourceManagement.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "../Colors";

export default function ResourceManagement() {
  const services = [
    {
      title: "Human Resource Allocation",
      text: "Optimize workforce deployment to ensure the right talent is assigned to the right projects for maximum productivity.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Project Resource Planning",
      text: "Plan, track, and allocate resources effectively to ensure timely project delivery and cost efficiency.",
      icon: "mdi:clipboard-list-outline",
    },
    {
      title: "Workforce Scheduling",
      text: "Manage employee schedules, tasks, and workloads to maintain balanced productivity and avoid bottlenecks.",
      icon: "mdi:calendar-clock",
    },
    {
      title: "Asset Utilization",
      text: "Track physical and digital asset usage to reduce waste and improve return on investment.",
      icon: "mdi:chart-box-outline",
    },
    {
      title: "Financial Resource Management",
      text: "Monitor budgets, expenses, and project costs to ensure financial resources are efficiently allocated.",
      icon: "mdi:finance",
    },
    {
      title: "Technology Resource Planning",
      text: "Coordinate software, hardware, and cloud resources to align with organizational objectives.",
      icon: "mdi:laptop",
    },
    {
      title: "Capacity Planning",
      text: "Forecast resource demand and prepare for future growth through proactive capacity management.",
      icon: "mdi:chart-line",
    },
    {
      title: "Vendor & Contract Management",
      text: "Oversee vendor relationships and manage procurement contracts to maintain quality and compliance.",
      icon: "mdi:handshake-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/resourceManagement.png')",
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
            Resource Management
          </Typography>
        </Box>
      </Box>

      {/* ===== Intro Section ===== */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 3 }}
        >
          RESOURCE MANAGEMENT
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 2 }}>
          Effective Resource Management is the backbone of a successful
          organization. It ensures that human, financial, and technological
          resources are efficiently allocated and optimized to achieve strategic
          business objectives. This approach enhances productivity, reduces
          costs, and supports continuous business growth.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Why Resource Management Essential */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          Why is Resource Management Essential?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Resource Management helps organizations balance workloads, prevent
          burnout, and maintain operational efficiency. By effectively managing
          time, budgets, and people, businesses can improve project outcomes and
          ensure smooth execution across departments.
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
          Rohil Technologies provides end-to-end resource management solutions
          that include workforce optimization, capacity planning, budget
          monitoring, and technology allocation. Our goal is to help businesses
          maximize the value of every resource, ensuring smooth project
          delivery, scalability, and operational excellence.
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

        {/* Resource Optimization Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          How Does Resource Management Improve Efficiency?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Through intelligent scheduling, performance tracking, and analytics,
          Resource Management ensures resources are utilized to their fullest
          potential. It minimizes idle time, avoids over-allocation, and
          empowers organizations to deliver more with less.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Project Success Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          What Are the Benefits of Strategic Resource Allocation?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Strategic resource allocation ensures that every asset—human,
          financial, or technological—is deployed in alignment with business
          priorities. This leads to faster delivery, better collaboration, and
          improved project success rates.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Rohil Support Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          How Does Rohil Technologies Support Resource Management?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          At Rohil Technologies, we empower organizations with modern resource
          management tools and strategies that enhance visibility, streamline
          workflows, and ensure accountability. Our data-driven insights help
          businesses make smarter allocation decisions and achieve operational
          excellence across teams and projects.
        </Typography>
      </Container>
    </>
  );
}
