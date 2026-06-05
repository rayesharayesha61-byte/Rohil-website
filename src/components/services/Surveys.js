import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function Surveys() {
  const zigZagSections = [
    {
      title: "About Our Surveys",
      text: "When you want to assess your success, understand customer opinions, or learn more about a product or initiative, you need reliable data and actionable feedback. At Rohil Technologies Operations, we perform a wide variety of surveys on any scale and magnitude for target audiences across the globe. We utilize tools like Google Forms, SurveyMonkey, Checkbox, Zoho Survey, or in-house survey tools tailored to your requirements.",
      img: "/service/survey2.png",
      imgLeft: true,
    },
    {
      title: "Accurate, Flexible & Confidential",
      text: "Surveys are a critical source of data and insights, benefiting businesses, media, government, and academics. We conduct both online and traditional surveys, ensuring accuracy, flexibility, and confidentiality as defined by our clients.",
      img: "/service/survey1.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Customer Feedback",
      text: "Share your experience with our services and let us know how we can serve you better.",
      icon: "mdi:account-star-outline",
    },
    {
      title: "New Feature Ideas",
      text: "Help us decide which features to develop next. Your input shapes our innovation!",
      icon: "mdi:lightbulb-outline",
    },
    {
      title: "Industry Insights",
      text: "Participate in industry-specific surveys and contribute to valuable research.",
      icon: "mdi:chart-box-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/survey.png')",
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
            Surveys
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

      {/* ===== Participate in Surveys / Key Services ===== */}
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
            Participate in Our Surveys
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
        </Container>
      </Box>
    </>
  );
}
