// src/components/WhatWeDo.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import colors from "./Colors";

export default function WhatWeDo() {
  const technologies = [
    {
      label: "Application Development",
      link: "/application-development",
      img: "/images/appdev.png",
      description:
        "We build robust and scalable applications tailored to your business needs, ensuring seamless performance and security.",
    },
    {
      label: "Software Development",
      link: "/software-development",
      img: "/images/softdev.png",
      description:
        "Our team delivers high-quality software solutions to optimize your operations and drive business growth.",
    },
    {
      label: "Mobile Apps",
      link: "/mobile",
      img: "/images/mobdev.png",
      description:
        "We create intuitive mobile applications for iOS and Android platforms to enhance user engagement and satisfaction.",
    },
    {
      label: "Websites",
      link: "/website",
      img: "/images/web.png",
      description:
        "Our website development services combine creativity and technology to build responsive and user-friendly websites.",
    },
    {
      label: "App Maintenance & Support",
      link: "/application-maintenance",
      img: "/images/appmain.png",
      description:
        "We provide reliable app maintenance and support to ensure your applications run smoothly and stay updated.",
    },
    {
      label: "Business Analysis",
      link: "/business-analysis",
      img: "/images/business.png",
      description:
        "Our experts analyze your business processes to provide actionable insights and improve efficiency.",
    },
    {
      label: "Testing",
      link: "/testing",
      img: "/images/testing.png",
      description:
        "We perform comprehensive testing to ensure your software is bug-free, secure, and high-performing.",
    },
    {
      label: "Web Technologies",
      link: "/web-technologies",
      img: "/images/webdev.png",
      description:
        "We implement the latest web technologies to develop dynamic and scalable web applications for your business.",
    },
    {
      label: "Digital Marketing",
      link: "/digital-marketing",
      img: "/images/digitalMarketing.png",
      description:
        "Our digital marketing strategies help you reach your audience effectively and grow your online presence.",
    },
  ];

  return (
    <Box sx={{ py: 5, px: { xs: 2, md: 2 }, background: "#f9fafc" }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: "bold",
          color: colors.darkBlue,
          fontSize: { xs: "2rem", md: "3rem" },
          scrollMarginTop: "120px",
          textAlign: "center",
          mb: 1,
        }}
      >
        What We Do
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {technologies.map((tech, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              background: "#fff",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box
              component="img"
              src={tech.img}
              alt={tech.label}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                transition: "0.4s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
            <Box sx={{ p: 3 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, color: colors.darkBlue, mb: 1, fontSize: "1.5rem" }}
              >
                {tech.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: colors.black, mb: 2, fontSize: 15 }}
              >
                {tech.description}
              </Typography>
              <Button
                component="a"
                href={tech.link}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: colors.primary,
                  borderRadius: "20px",
                  px: 3,
                  "&:hover": { backgroundColor: colors.darkBlue },
                }}
              >
                Read More →
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
