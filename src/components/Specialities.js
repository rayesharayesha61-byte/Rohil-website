import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { CountUp } from "countup.js";
import { useNavigate } from "react-router-dom";
import colors from "./Colors";

// Icons
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupsIcon from "@mui/icons-material/Groups";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const Specialities = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const statsRef = useRef(null);
  const countersInitialized = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersInitialized.current) {
          const options = { duration: 2.5, separator: "," };

          new CountUp("years-count", 6, { ...options, suffix: "+" }).start();
          new CountUp("Projects-count", 200, {
            ...options,
            suffix: "+",
          }).start();
          new CountUp("clients-count", 200, {
            ...options,
            suffix: "+",
          }).start();
          new CountUp("satisfaction-count", 100, {
            ...options,
            suffix: "%",
          }).start();

          countersInitialized.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => statsRef.current && observer.unobserve(statsRef.current);
  }, []);

  const statsData = [
    {
      id: "years-count",
      label: "Years Of Experience",
      icon: <WorkspacePremiumIcon sx={{ fontSize: 28, color: colors.white }} />,
    },
    {
      id: "Projects-count",
      label: "Projects",
      icon: <ShoppingBagIcon sx={{ fontSize: 28, color: colors.white }} />,
    },
    {
      id: "clients-count",
      label: "Happy Clients",
      icon: <GroupsIcon sx={{ fontSize: 28, color: colors.white }} />,
    },
    {
      id: "satisfaction-count",
      label: "Satisfaction",
      icon: (
        <SentimentVerySatisfiedIcon
          sx={{ fontSize: 28, color: colors.white }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        textAlign: "center",
        backgroundColor: "#000",
        backgroundImage: 'url("/mainPage/specialites.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: colors.white,
        overflow: "hidden",
        mb: 2,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: colors.white,
            fontSize: { xs: "2rem", md: "3rem" },
            scrollMarginTop: "120px",
            mb: 1,
          }}
        >
          Our Specialities
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          component="body1"
          sx={{
            mb: 6,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            lineHeight: 1.6,
          }}
        >
          Rohil Technologies transforms ideas into powerful digital solutions,
          delivering innovative IT services, custom software, and technology
          consulting that enhance productivity, ensure quality, and help
          businesses in Virudhunagar and beyond gain a competitive edge.{" "}
        </Typography>

        {/* Stats Grid */}
        <Box
          ref={statsRef}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
            },
            gap: 6,
          }}
        >
          {statsData.map((stat, index) => (
            <Box
              key={stat.id}
              sx={{
                backgroundColor: colors.white,
                borderRadius: "20px",
                py: 5,
                px: 3,
                color: "#000",
                boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
                position: "relative",
                transition: "all 0.3s ease",
                animation: `fadeUp 1s ease ${index * 0.2}s both`,
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                },
                "&:hover .iconCircle": {
                  transform: "scale(1.15)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                },
              }}
            >
              {/* Number */}
              <Typography
                id={stat.id}
                variant="body1"
                component="body1"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: colors.darkBlue,
                  fontSize: "1.5rem"
                }}
              >
                0
              </Typography>

              {/* Label */}
              <Typography
                sx={{ mb: 4, fontSize: "1.1rem", color: colors.primary }}
              >
                {stat.label}
              </Typography>

              {/* Icon Circle */}
              <Box
                className="iconCircle"
                sx={{
                  position: "absolute",
                  bottom: -28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: colors.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                {stat.icon}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Explore More Button */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Box
            onClick={() => handleNavigate("/blog")}
            sx={{
              background: "linear-gradient(135deg, #6B46C1, #2563EB)",
              color: "#fff",
              display: "inline-block",
              px: 4,
              py: 1.8,
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "10px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              cursor: "pointer",
              transition: "0.3s ease-in-out",
              textDecoration: "none",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              },
            }}
          >
            Explore More Blogs →
          </Box>
        </Box>
      </Container>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Specialities;
