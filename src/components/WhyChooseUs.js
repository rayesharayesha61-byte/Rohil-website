import React from "react";
import { Box, Typography, Container, Card } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import colors from "./Colors";

export default function WhyChooseUs() {
  // Stats section
  const stats = [
    {
      value: "100%",
      description: "Client satisfaction rate at Rohil Technologies.",
      icon: "mdi:trending-up",
    },
    {
      value: "200+",
      description: "Projects successfully delivered.",
      icon: "mdi:check-circle-outline",
    },
  ];
  const features = [
    {
      title: "Expertise",
      description:
        "Our team brings years of experience across multiple industries, delivering reliable and high-quality software solutions that meet complex business needs efficiently.",
      background: "#1E3A8A",
      color: "#fff",
      icon: "mdi:account-tie",
    },
    {
      title: "Innovation",
      description:
        "We leverage cutting-edge technologies and industry trends to create creative, future-ready solutions that help businesses stay competitive and drive digital transformation.",
      background: "#2563EB",
      color: "#fff",
      icon: "mdi:lightbulb-on-outline",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Our solutions are tailored to your unique business goals, ensuring strategies and systems that maximize efficiency, growth, and long-term success.",
      background: "#3B82F6",
      color: "#fff",
      icon: "mdi:handshake-outline",
    },
    {
      title: "Commitment to Excellence",
      description:
        "We uphold the highest standards of quality, security, and performance, ensuring every project delivers measurable value and exceeds client expectations.",
      background: "#60A5FA",
      color: "#fff",
      icon: "mdi:star-outline",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 2, md: 4 },
        backgroundColor: "#f8f9fa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, #6B46C1 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg">
        {/* Main Content Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left Column - Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src="/whychoose.png"
              alt="Why Choose Rohil Technologies"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Right Column - Heading, Stats */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  fontSize: { xs: "2rem", md: "3rem" },
                  scrollMarginTop: "120px",
                }}
              >
                Why Choose Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: colors.black,
                  mb: 4,
                  maxWidth: "90%",
                }}
              >
                At Rohil Technologies, we specialize in providing customized,
                innovative, and reliable IT solutions designed to help
                businesses thrive. Our expert team focuses on creating scalable
                applications, websites, and digital solutions that meet client
                goals efficiently. We are dedicated to driving growth, enhancing
                performance, and empowering organizations in Virudhunagar and
                beyond to achieve lasting success.
              </Typography>

              {/* Stats */}
              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 4 }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "12px",
                          background: "#6B46C1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <Icon icon={stat.icon} width="24" height="24" />
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            color: "#2C3E50",
                            lineHeight: 1,
                            mb: 1,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.black,
                            fontSize: "0.9rem",
                            lineHeight: 1.4,
                            maxWidth: "180px",
                          }}
                        >
                          {stat.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
                {/* CTA Button */}
                <Box>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/contact"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        sx={{
                          background:
                            "linear-gradient(135deg, #6B46C1, #2563EB)",
                          color: "#fff",
                          padding: "12px 28px",
                          fontSize: "1rem",
                          fontWeight: "600",
                          borderRadius: "10px",
                          display: "inline-block",
                          boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                          cursor: "pointer",
                          transition: "0.3s",
                          "&:hover": {
                            boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
                            transform: "translateY(-4px)",
                          },
                        }}
                      >
                        Start Your Project →
                      </Box>
                    </a>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Bottom Section - Feature Cards (Unique Design) */}
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 3,
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: "1 1 22%", display: "flex" }}
              >
                <Card
                  sx={{
                    flex: 1,
                    borderRadius: "20px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px) rotate(-1deg)",
                      boxShadow: "0 18px 35px rgba(0,0,0,0.12)",
                    },
                    borderTop: `4px solid ${colors.primary}`,
                    p: 1,
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #6B46C1, #2563EB)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 2,
                      mb: 3,
                      zIndex: 1,
                      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Icon
                      icon={feature.icon}
                      width="30"
                      height="30"
                      color="#fff"
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: colors.darkBlue,
                      fontSize: "1.15rem",
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.black,
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                      px: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
