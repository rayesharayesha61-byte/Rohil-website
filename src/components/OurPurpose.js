import React, { useState } from "react";
import { Box, Typography, Container, Modal, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@iconify/react";
import colors from "./Colors";

export default function OurPurpose() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const strategicObjectives = [
    "Expand our leadership as a premier IT solutions provider by delivering differentiated digital products and services backed by strong engineering expertise.",
    "Become an employer of choice by attracting and nurturing top technology talent across key geographies.",
    "Establish Rohil Technologies as the preferred digital transformation and AI partner for global enterprises and emerging businesses.",
    "Integrate Environmental, Social, and Governance (ESG) principles into our business strategy to promote sustainable growth and corporate responsibility.",
    "Deliver consistent, long-term value and superior performance to our stakeholders through innovation, efficiency, and client-centric solutions.",
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          py: { xs: 2, md: 4 },
          background: "linear-gradient(90deg, #EDF4FB 0%, #CCE5F8 100%)",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              gap: 6,
            }}
          >
            {/* CEO Image and Name */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    width: { xs: 160, md: 220 },
                    height: { xs: 160, md: 220 },
                    borderRadius: "8px",
                    overflow: "hidden",
                    mb: 1,
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/Rlogo.png" // Replace with actual image URL
                    alt="D Sofia"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: colors.black,
                    // textAlign: "center",
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    lineHeight: 1.3,
                  }}
                >
                  Sofia J Deepanraj
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.grey,
                    textAlign: "center",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    mt: 0.5,
                  }}
                >
                  CEO & Managing Director | Rohil Groups
                </Typography>
              </motion.div>
            </Box>

            {/* Right Content */}
            <Box sx={{ flex: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
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
                  Our Purpose
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: colors.black,
                    textAlign: "left",
                    fontSize: { xs: "1.15rem", md: "1.25rem" },
                    mb: 1,
                  }}
                >
                  To bring together the best of technology and our people to
                  supercharge progress.
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    mb: 1,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Icon
                    icon="carbon:quotes"
                    width="40"
                    height="40"
                    style={{
                      color: colors.primary,
                      opacity: 0.4,
                      alignSelf: "flex-start",
                      marginBottom: "-0.5rem",
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1.15rem",
                      lineHeight: 1.7,
                      color: colors.black,
                      // fontStyle: "italic",
                      textAlign: "left",
                    }}
                  >
                    Our purpose at Rohil Technologies is to deliver innovative
                    software solutions that empower businesses to grow and
                    succeed in the digital era. We focus on building scalable,
                    efficient, and user-centric technologies that enhance
                    performance and drive measurable results. Guided by passion
                    and expertise, we transform complex challenges into growth
                    opportunities, helping organizations achieve sustainable
                    success through cutting-edge IT solutions.
                  </Typography>

                  <Icon
                    icon="carbon:quotes"
                    width="40"
                    height="40"
                    style={{
                      color: colors.primary,
                      opacity: 0.4,
                      alignSelf: "flex-end",
                      transform: "rotate(180deg)",
                      marginTop: "-0.5rem",
                    }}
                  />

                  {/* Strategic Objectives Link */}
                  <Typography
                    variant="p"
                    onClick={handleOpen}
                    sx={{
                      fontWeight: "bold",
                      color: colors.primary,
                      textAlign: "left",
                      fontSize: "1.1rem",
                      // mt: 3,
                      cursor: "pointer",
                      border: `1px dashed ${colors.primary}`,
                      display: "inline-block",
                      px: 2,
                      py: 1,
                      borderRadius: "6px",
                      "&:hover": {
                        color: colors.darkBlue,
                        textDecoration: "underline",
                        backgroundColor: "#f0f8ff",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Our five strategic objectives →
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "2rem",
                maxWidth: "800px",
                width: "90%",
                maxHeight: "90vh",
                overflow: "auto",
                position: "relative",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  color: colors.grey,
                }}
              >
                <CloseIcon />
              </IconButton>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                Our Five Strategic Objectives
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {strategicObjectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        p: 2,
                        borderRadius: "8px",
                        backgroundColor: "#f8f9fa",
                        borderLeft: `4px solid ${colors.primary}`,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: colors.primary,
                          color: "white",
                          borderRadius: "50%",
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          flexShrink: 0,
                          mt: 0.5,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          color: colors.black,
                        }}
                      >
                        {objective}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Typography
                sx={{
                  mt: 4,
                  textAlign: "center",
                  color: colors.grey,
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                }}
              >
                <Icon
                  icon="carbon:quotes"
                  width="32"
                  height="32"
                  style={{ marginRight: "0.3rem", color: colors.primary }}
                />
                These strategic objectives guide our growth and innovation
                journey.
                <Icon
                  icon="carbon:quotes"
                  width="32"
                  height="32"
                  style={{
                    transform: "rotate(180deg)",
                    marginLeft: "0.3rem",
                    color: colors.primary,
                  }}
                />
              </Typography>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
