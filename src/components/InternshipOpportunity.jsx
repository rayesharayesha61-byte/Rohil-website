import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import colors from "./Colors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Seo() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goTo = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        backgroundImage: 'url("/mainPage/internship1.png")', // your background
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 1,
              color: "#fff",
            }}
          >
            Internship Opportunities in Virundhunagar
          </Typography>

          <Typography
            variant="body1"
            component="body1"
            sx={{
              mt: 1,
              mb: 3,
              fontWeight: 600,
              color: colors.white,
              fontSize: { xs: "1.1rem", md: "1.4rem" },
              letterSpacing: "0.8px",
            }}
          >
            Rohil Technologies | Fostering Growth
          </Typography>
          <br />
          <br />

          {/* SEO paragraph */}
          <Typography
            variant="body2"
            component="body2"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
              color: "#e8e8e8",
            }}
          >
            Kickstart your career with real-world, hands-on experience. Rohil
            Technologies offers internships in{" "}
            <span
              style={{ color: "#fff", cursor: "pointer", fontWeight: 600 }}
              onClick={() => goTo("/website")}
            >
              Web Development
            </span>
            ,{" "}
            <span
              style={{ color: "#fff", cursor: "pointer", fontWeight: 600 }}
              onClick={() => goTo("/mobile")}
            >
              App Development
            </span>
            ,{" "}
            <span
              style={{ color: "#fff", cursor: "pointer", fontWeight: 600 }}
              onClick={() => goTo("/digital-marketing")}
            >
              Digital Marketing
            </span>
            ,{" "}
            <span
              style={{ color: "#fff", cursor: "pointer", fontWeight: 600 }}
              onClick={() => goTo("/testing")}
            >
              Software Testing
            </span>{" "}
            and{" "}
            <span
              style={{ color: "#fff", cursor: "pointer", fontWeight: 600 }}
              onClick={() => goTo("/business-analysis")}
            >
              Business Analysis
            </span>
            . Internship available in both{" "}
            <strong>Online & Offline modes</strong>. Gain industry knowledge,
            work on live projects, and accelerate your growth in the world of
            technology.
          </Typography>
<br />
          {/* CTA Button */}
          <Button
            variant="contained"
            sx={{
              mt: 0.5,
              px: 4,
              py: 1.5,
              borderRadius: "10px",
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              background: "linear-gradient(135deg, #6B46C1, #2563EB)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              },
            }}
            onClick={() => goTo("/careers#internship")}
          >
            Apply for Internship →
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
