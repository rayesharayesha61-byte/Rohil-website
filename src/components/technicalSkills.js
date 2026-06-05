import React from "react";
import { Box, Typography, Container } from "@mui/material";

const technicalSkills = [
  { title: "Microsoft .Net", img: "./logos/microsoft-dotnet.png" },
  { title: "ASP .Net", img: "./logos/aspnet.png" },
  { title: "Android Native", img: "./logos/android.png" },
  { title: "Ionic", img: "./logos/ionic.png" },
  { title: "iOS Native", img: "./logos/ios.png" },
  { title: "Microsoft SQL", img: "./logos/microsoft-sql-server.png" },
  { title: "MySQL", img: "./logos/mysql.png" },
  { title: "MariaDB", img: "./logos/mariadb.png" },
  { title: "SQLite", img: "./logos/sqlite.png" },
  { title: "PostgreSQL", img: "./logos/postgresql.png" },
  { title: "MongoDB", img: "./logos/mongodb.png" },
  { title: "PHP Laravel", img: "./logos/laravel.png" },
  { title: "PHP Yii", img: "./logos/yii.png" },
  { title: "React JS", img: "./logos/reactjs.png" },
  { title: "Angular JS", img: "./logos/angularjs.png" },
  { title: "Node JS", img: "./logos/nodejs.png" },
  { title: "Vue JS", img: "./logos/vuejs.png" },
  { title: "WordPress", img: "./logos/wordpress.png" },
  { title: "WooCommerce", img: "./logos/woocommerce.png" },
  { title: "Magento", img: "./logos/magento.png" },
  { title: "Amazon AWS", img: "./logos/amazon-aws.png" },
  { title: "Google Cloud", img: "./logos/google-cloud.png" },
  { title: "Windows Azure", img: "./logos/windows-azure.png" },
];

export default function TechnicalExpertise() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        backgroundImage: `url('./logos/coding.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backdropFilter: "blur(2px)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: { xs: 6, md: 8 },
            color: "#f7f7fa",
            fontSize: { xs: "2rem", md: "2.8rem" },
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Technical Expertise
        </Typography>

        {/* Logo Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {technicalSkills.map((skill, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "#fff",
                borderRadius: "16px",
                p: { xs: 2, sm: 2.5 },
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "1px solid #e0e0e0",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                  borderColor: "#0066cc",
                  "& img": {
                    filter: "brightness(1.1) saturate(1.2)",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={skill.img}
                alt={skill.title}
                sx={{
                  width: { xs: 55, sm: 60, md: 70 },
                  height: { xs: 55, sm: 60, md: 70 },
                  objectFit: "contain",
                  flexShrink: 0,
                  filter: "grayscale(0%) opacity(0.9)",
                  transition: "filter 0.3s ease",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#222",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontFamily: '"Roboto", sans-serif',
                  lineHeight: 1.3,
                }}
              >
                {skill.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
