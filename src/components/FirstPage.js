import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import colors from "./Colors";
import OurPurpose from "./OurPurpose";
import WhyChooseUs from "./WhyChooseUs";
import Clients from "./Clients";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Specialities from "./Specialities";
import InternshipOpportunity from "./InternshipOpportunity";
import HomepageFAQ from "./services/HomepageFAQ";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 4px 20px ${colors.purple}40`,
              height: { xs: "60vh", sm: "70vh", md: "80vh", lg: "100vh" },
              minHeight: "500px",
              width: "100%",
            }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            >
              {[
                {
                  img: "/mainPage/mobileApps.png",
                  title: "Mobile App Development",
                  subtitle:
                    "Innovative iOS and Android apps for seamless user experiences",
                  path: "/mobile",
                  cta1: "Explore Mobile App Solutions",
                  cta2: "Get Free App Consultation",
                },
                {
                  img: "/mainPage/desktopApps.png",
                  title: "Desktop Software Solutions",
                  subtitle:
                    "High-performance cross-platform desktop applications",
                  path: "/software-development",
                  cta1: "View Desktop Software Services",
                  cta2: "Request a Software Demo",
                },
                {
                  img: "/mainPage/websieDev.png",
                  title: "Website & Web App Development",
                  subtitle:
                    "Fast, secure, responsive, and SEO-optimized websites",
                  path: "/website",
                  cta1: "Explore Web Development",
                  cta2: "Get Free Website Proposal",
                },
                {
                  img: "/mainPage/softwareTest.png",
                  title: "Software Testing & QA",
                  subtitle: "End-to-end testing for bug-free software",
                  path: "/testing",
                  cta1: "See Testing Services",
                  cta2: "Request QA Consultation",
                },
                {
                  img: "/mainPage/softwaredev.png",
                  title: "Custom Software Development",
                  subtitle: "Tailor-made business software",
                  path: "/software-development",
                  cta1: "Explore Custom Software",
                  cta2: "Get Free Project Estimate",
                },
                {
                  img: "/mainPage/Businessanalys.png",
                  title: "Business Analysis & Strategy",
                  subtitle: "Data-driven insights",
                  path: "/business-analysis",
                  cta1: "Explore Business Analysis",
                  cta2: "Book Strategy Session",
                },
                {
                  img: "/mainPage/crm.png",
                  title: "CRM Development",
                  subtitle: "Smart CRM solutions",
                  path: "/crm",
                  cta1: "Explore CRM Systems",
                  cta2: "Get a Free CRM Demo",
                },
                {
                  img: "/mainPage/erp.png",
                  title: "ERP Software Solutions",
                  subtitle: "Integrated enterprise systems",
                  path: "/erp",
                  cta1: "Explore ERP Solutions",
                  cta2: "Request ERP Consultation",
                },
                {
                  img: "/mainPage/hrms.png",
                  title: "HRMS & Payroll Systems",
                  subtitle: "Simplify HR & payroll",
                  path: "/hrms",
                  cta1: "View HRMS Features",
                  cta2: "Get Free HRMS Demo",
                },
                {
                  img: "/mainPage/seo.png",
                  title: "SEO Services",
                  subtitle: "Rank higher on Google",
                  path: "/digital-marketing/seo",
                  cta1: "Improve Your Google Ranking",
                  cta2: "Get Free SEO Audit",
                },
                {
                  img: "/mainPage/DigitalMarketing.png",
                  title: "Digital Marketing",
                  subtitle: "Increase brand visibility",
                  path: "/digital-marketing",
                  cta1: "Explore Marketing Services",
                  cta2: "Get Free Marketing Plan",
                },
              ].map((slide, i) => (
                <SwiperSlide key={i}>
                  {/* Make the ENTIRE slide clickable + crawlable */}
                  <a
                    href={slide.path}
                    style={{
                      display: "block",
                      height: "100%",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    aria-label={`Learn more about ${slide.title}`}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "100%",
                        cursor: "pointer",
                      }}
                    >
                      {/* Background Image */}
                      <motion.img
                        src={slide.img}
                        alt={slide.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                        initial={{ scale: 1.2, opacity: 0.7 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />

                      {/* Overlay Content */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: { xs: "8%", sm: "10%", md: "12%" },
                          left: "50%",
                          transform: "translateX(-50%)",
                          textAlign: "center",
                          color: "#fff",
                          width: { xs: "90%", sm: "80%", md: "60%" },
                          px: { xs: 2, sm: 0 },
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "1.8rem",
                                sm: "2.5rem",
                                md: "3rem",
                              },
                              fontWeight: "bold",
                              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                              mb: 1,
                            }}
                          >
                            {slide.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                md: "1.4rem",
                              },
                              textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
                              mb: 3,
                            }}
                          >
                            {slide.subtitle}
                          </Typography>

                          {/* Optional: Keep visible button for UX */}
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: { xs: "column", sm: "row" },
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 2,
                              mt: 2,
                            }}
                          >
                            {/* Explore Button */}
                            <Button
                              onClick={() => {
                                navigate(slide.path);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              // component="a"
                              // href={slide.path}
                              variant="contained"
                              sx={{
                                backgroundColor: "#fff",
                                color: "#000",
                                fontWeight: "bold",
                                borderRadius: "30px",
                                px: 4,
                                py: 1.2,
                                textTransform: "none",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  backgroundColor: "#f0f0f0",
                                  transform: "translateY(-4px) scale(1.05)",
                                  boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
                                },
                                width: { xs: "100%", sm: "auto" },
                              }}
                            >
                              {slide.cta1} →
                            </Button>

                            {/* Consultation Button */}
                            <Button
                              // component="a"
                              // href="/contact"
                              onClick={() => {
                                navigate("/contact");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              variant="contained"
                              sx={{
                                backgroundColor: colors.purple,
                                color: "#fff",
                                fontWeight: "bold",
                                borderRadius: "30px",
                                px: 4,
                                py: 1.2,
                                textTransform: "none",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  backgroundColor: colors.purpleDark,
                                  transform: "translateY(-4px) scale(1.05)",
                                  boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
                                },
                                width: { xs: "100%", sm: "auto" },
                              }}
                            >
                          {slide.cta2} →
                            </Button>
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </section>
        {/* Who we are */}
        <section id="who-we-are">
          <WhoWeAre />
        </section>
        {/* Our Purpose */}
        <section id="purpose">
          <OurPurpose />
        </section>
        {/* What We Do */}
        <section id="what-we-do">
          <WhatWeDo />
        </section>
        {/* Why choose US */}
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        {/* Specialities */}
        <section id="specialities">
          <Specialities />
        </section>
        {/* Clients */}
        <section id="clients">
          <Clients />
        </section>
        {/* Internship opportunity */}
        <section id="internship-opportunity">
          <InternshipOpportunity />
        </section>
        {/* Home page FAQ */}
        <section id="homepage-faq">
          <HomepageFAQ />
        </section>
      </main>
    </>
  );
}
