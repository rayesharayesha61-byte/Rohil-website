import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import colors from "./Colors";
import { useNavigate } from "react-router-dom";

export default function WhoWeAre() {
  const navigate = useNavigate();

  const content = [
    {
      title: "Our Mission",
      text: "Our mission is to empower businesses with innovative, scalable, and secure software solutions that simplify operations, enhance productivity, and drive long-term digital growth. We are committed to delivering technology that makes a real impact.",
      icon: "mdi:target-arrow",
    },
    {
      title: "Our Vision",
      text: "Our vision is to become a globally recognized technology partner known for transforming ideas into powerful digital solutions. We aim to lead the future of software development through continuous innovation and excellence.",
      icon: "mdi:eye-circle",
    },
    {
      title: "Our Values",
      text: "We believe in integrity, innovation, quality, and client success. Our values guide every project we build, ensuring transparent communication, reliable delivery, long-term partnerships, and technology that truly empowers businesses.",
      icon: "mdi:star-circle",
    },
  ];

  return (
    <Box
      id="who-we-are"
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Section Heading */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {/* H1 - Primary Heading */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            scrollMarginTop: "120px",
          }}
        >
Web & Mobile App Development 
        </Typography>

        {/* H2 - Branding Tagline */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mt: 1,
            mb: 1,
            color: colors.primary,
            fontWeight: "600",
            fontSize: { xs: "1.1rem", md: "1.4rem" },
          }}
        >
          Rohil Technologies | Fostering Growth
        </Typography>

        {/* H3 - SEO Paragraph */}
        <Typography
          id="about-rohil"
          variant="h3"
          component="h3"
          sx={{
            color: colors.black,
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.15rem" },
            mb: 2,
            maxWidth: 900,
            mx: "auto",
            textAlign: "left",
            scrollMarginTop: "120px",
          }}
        >
          Rohil Technologies brings over six years of experience in web and mobile app development,
delivering innovative and scalable software solutions for startups and enterprises.
We specialize in building custom web applications, mobile apps, secure APIs,
and cloud-ready systems that help businesses improve efficiency and accelerate
digital transformation. Based in Virudhunagar, we focus on performance, security, and long-term growth,
creating future-ready web and mobile applications tailored to each client’s needs.

        </Typography>

        {/* CTA Buttons */}
        <Box
          textAlign="center"
          sx={{ display: "flex", justifyContent: "center", gap: 2 }}
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 2,
                px: 5,
                py: 1.8,
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: "10px",
                textTransform: "none",
                bgcolor: colors.primary,
                color: "#fff",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: colors.darkBlue,
                  boxShadow: "0 10px 22px rgba(0,0,0,0.20)",
                },
              }}
              onClick={() => {
                navigate("/about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Explore More →
            </Button>
          </motion.div>

          {/* Secondary CTA - Internal Link */}
          {/* <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                px: 5,
                py: 1.8,
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: "10px",
                textTransform: "none",
                borderColor: colors.primary,
                color: colors.primary,
                "&:hover": {
                  borderColor: colors.darkBlue,
                  color: colors.darkBlue,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                },
              }}
              onClick={() => {
                document
                  .getElementById("mission-vision-values")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Mission →
            </Button>
          </motion.div> */}
        </Box>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "stretch",
          mt: { xs: 4, md: 6 },
          flexWrap: { xs: "wrap", md: "nowrap" },
          scrollMarginTop: "120px",
        }}
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 18px 35px rgba(0,0,0,0.20)",
            }}
            transition={{ duration: 0.5 }}
            style={{
              flex: 1,
              borderRadius: "20px",
              padding: "40px 25px",
              background: colors.white,
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              borderTop: `4px solid ${colors.primary}`,
              marginLeft: 24,
              marginRight: 24,
              boxSizing: "border-box",
            }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Icon
                icon={item.icon}
                width="60"
                height="60"
                color={colors.primary}
              />
            </motion.div>

            {/* H4 - Card Title */}
            <Typography
              variant="body1"
              component="body1"
              sx={{
                color: colors.darkBlue,
                fontWeight: "bold",
                mt: 3,
                mb: 2,
                fontSize: "1.2rem",
              }}
            >
              {item.title}
            </Typography>

            <Typography
             variant="body2"
              component="body2"
              sx={{ color: colors.black, fontSize: "1rem", lineHeight: 1.6 }}
            >
              {item.text}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
