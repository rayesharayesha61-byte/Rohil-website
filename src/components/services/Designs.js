// src/components/Designs.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function Designs() {
  // ===== Main Design Services =====
  const zigZagSections = [
    {
      title: "Graphic Design",
      text: "Our graphic design services focus on crafting visually stunning designs that capture your audience's attention. We create compelling visuals, branding materials, and marketing collateral that communicate your message effectively while leaving a lasting impression across both digital and print platforms.",
      img: "/service/design1.png",
      imgLeft: true,
    },
    {
      title: "UI/UX Design",
      text: "We enhance user experiences with intuitive, elegant, and functional interfaces. By focusing on usability, accessibility, and aesthetics, our UI/UX design ensures that your applications, websites, or products are engaging, user-friendly, and aligned with your business goals for optimal customer satisfaction.",
      img: "/service/design2.png",
      imgLeft: false,
    },
    {
      title: "Web Design",
      text: "We build responsive, visually appealing websites tailored to your needs. Our web design services combine creativity and technical expertise to create sites that reflect your brand identity, enhance user experience, and drive conversions across all devices and platforms.",
      img: "/service/design3.png",
      imgLeft: true,
    },
    {
      title: "Branding & Identity Design",
      text: "We help businesses develop a strong brand identity through logos, typography, color schemes, and brand guidelines. Our branding services ensure your brand communicates the right message and stands out in a competitive marketplace.",
      img: "/service/design4.png",
      imgLeft: false,
    },
    {
      title: "Motion Graphics",
      text: "Our motion graphics services create animated visuals that bring your stories, presentations, and advertisements to life. Using creative animation, we enhance engagement and make your content more memorable across digital channels.",
      img: "/service/design5.png",
      imgLeft: true,
    },
  ];

  // ===== Why Choose Section =====
  const whyChoose = [
    {
      title: "Tailored solutions for every client",
      icon: "mdi:account-cog-outline",
    },
    { title: "Cutting-edge tools and technologies", icon: "mdi:tools" },
    {
      title: "Experienced and creative design team",
      icon: "mdi:account-tie-outline",
    },
    { title: "Focus on user-centered design", icon: "mdi:eye-outline" },
    {
      title: "High-quality deliverables on time",
      icon: "mdi:check-circle-outline",
    },
    { title: "24/7 customer support", icon: "mdi:headset" },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/design.png')",
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
            Design Services
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

      {/* ===== Why Choose Our Design Services ===== */}
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
            Why Choose Our Design Services?
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
            {whyChoose.map((item, i) => (
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
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
