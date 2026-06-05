import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import colors from "../Colors";

export default function HomepageFAQ() {
  const faqs = [
    {
      q: "What services does Rohil Technologies provide?",
      a: "We offer end-to-end digital solutions including Website Development, Mobile App Development, CRM & ERP Development, Billing Software, HRMS, Software Testing, SEO, Digital Marketing and Custom Software Solutions.",
    },
    {
      q: "Do you provide custom software development?",
      a: "Yes, we build fully customized software tailored to your business requirements with scalable architecture and secure code standards.",
    },
    {
      q: "How long does it take to develop a mobile or web application?",
      a: "The timeline depends on project complexity. On average, standard apps take 4–8 weeks, while large-scale products may require 2–4 months.",
    },
    {
      q: "Do you offer SEO and digital marketing services?",
      a: "Yes, we provide SEO, SEM, social media marketing, email marketing, video SEO, and complete digital brand building services.",
    },
    {
      q: "Do you provide internship opportunities?",
      a: "Yes, we offer internships in Web Development, App Development, Digital Marketing, Business Analysis, and Software Testing. You can apply through our Careers page.",
    },
    {
      q: "Can I hire Rohil Technologies for long-term projects?",
      a: "Absolutely! We work with startups, small businesses, and enterprises on long-term and ongoing development/maintenance projects.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
        background: "#fafbff",
      }}
    >
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
            color: colors.darkBlue,
            fontSize: { xs: "2rem", md: "3rem" },
            scrollMarginTop: "120px",
            textAlign: "center",
            mb:1
          }}
        >
          Frequently Asked Questions (FAQ)
        </Typography>

        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          {faqs.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: "10px !important",
                boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: colors.black,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    lineHeight: 1.7,
                    color: colors.primary,
                  }}
                >
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
}
