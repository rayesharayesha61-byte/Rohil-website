
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import {
  Add,
  ArrowForward,
  Campaign,
  Cloud,
  Code,
  Groups,
  Language,
  PhoneAndroid,
  Psychology,
  Security,
  TrendingUp,
  Close,
  Business,
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";

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

  const [activeService, setActiveService] = useState(null);

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      img: "/mainPage/mobileApps.png",
      title:
        "Leading IT Company in Sivakasi for Innovative Digital Solutions",
      subtitle:
        "Transform Your Business with Innovative Technology Solutions",
      description:
        "Rohil Technologies delivers innovative and reliable software development, web development, mobile app development, digital marketing, AI development and cloud solutions.",
      path: "/",
      cta1: "Explore Our Services",
      cta2: "Get Started",
    },
    {
      img: "/mainPage/desktopApps.png",
      title: "Build Powerful Software Solutions",
      subtitle:
        "Scalable and secure software solutions tailored to your business needs.",
      description:
        "Streamline operations, improve productivity and support long-term business growth.",
      path: "/software-development",
      cta1: "Explore Software",
      cta2: "Contact Us",
    },
    {
      img: "/mainPage/websieDev.png",
      title: "Modern Websites That Grow Your Business",
      subtitle:
        "Professional, responsive and user-friendly websites.",
      description:
        "Create better digital experiences with websites designed around your business goals.",
      path: "/website",
      cta1: "Explore Web Development",
      cta2: "Contact Us",
    },
    {
      img: "/mainPage/softwaredev.png",
      title: "Turn Your Ideas Into Powerful Mobile Apps",
      subtitle:
        "Powerful, feature-rich and user-friendly mobile applications.",
      description:
        "Build mobile experiences that help businesses connect with customers.",
      path: "/mobile",
      cta1: "Explore Mobile Apps",
      cta2: "Get Started",
    },
    {
      img: "/mainPage/DigitalMarketing.png",
      title: "Grow Your Digital Presence",
      subtitle:
        "Digital marketing solutions designed to improve online visibility.",
      description:
        "Use SEO, social media, Google Ads and content marketing to promote your brand.",
      path: "/digital-marketing",
      cta1: "Explore Marketing",
      cta2: "Contact Us",
    },
    {
      img: "/mainPage/seo.png",
      title: "Improve Your Online Visibility",
      subtitle:
        "SEO strategies designed around your business goals.",
      description:
        "Improve search visibility and reach your target audience through effective SEO solutions.",
      path: "/digital-marketing/seo",
      cta1: "Explore SEO",
      cta2: "Get Free SEO Audit",
    },
    {
      img: "/mainPage/Businessanalys.png",
      title: "Technology Solutions Built Around Your Business",
      subtitle:
        "Understand your requirements and build practical solutions.",
      description:
        "Business-focused solutions designed to support efficiency, scalability and growth.",
      path: "/business-analysis",
      cta1: "Explore Solutions",
      cta2: "Contact Us",
    },
    {
      img: "/mainPage/crm.png",
      title: "Smart CRM Solutions for Growing Businesses",
      subtitle:
        "Manage customer relationships more effectively.",
      description:
        "Improve customer management and create better business workflows.",
      path: "/crm",
      cta1: "Explore CRM",
      cta2: "Get CRM Demo",
    },
    {
      img: "/mainPage/erp.png",
      title: "Connected ERP Solutions for Modern Businesses",
      subtitle:
        "Bring business processes together with reliable ERP solutions.",
      description:
        "Support business operations with connected and scalable enterprise solutions.",
      path: "/erp",
      cta1: "Explore ERP",
      cta2: "Contact Us",
    },
    {
      img: "/mainPage/hrms.png",
      title: "Simplify HR and Payroll Management",
      subtitle:
        "Organize employee and payroll processes efficiently.",
      description:
        "HRMS solutions designed to simplify business management.",
      path: "/hrms",
      cta1: "Explore HRMS",
      cta2: "Get Started",
    },
    {
      img: "/mainPage/softwareTest.png",
      title: "Reliable Software. Better Performance.",
      subtitle:
        "Quality-focused software testing and QA solutions.",
      description:
        "Improve software reliability, performance and user experience through structured testing.",
      path: "/testing",
      cta1: "Explore QA",
      cta2: "Contact Us",
    },
    {
      img: "/mainPage/softwaredev.png",
      title: "Technology That Helps Your Business Grow",
      subtitle:
        "Customized technology solutions for different business needs.",
      description:
        "Build practical and scalable digital solutions for startups, small businesses and established organizations.",
      path: "/software-development",
      cta1: "Explore Solutions",
      cta2: "Get Started",
    },
  ];

  const services = [
    {
      title: "Software Development",
      icon: <Code />,
      description:
        "Scalable and secure software solutions tailored to your business needs.",
      details:
        "Streamline operations, improve productivity and support long-term business growth with reliable software solutions.",
      path: "/software-development",
    },
    {
      title: "Web Development",
      icon: <Language />,
      description:
        "Professional, responsive and user-friendly websites.",
      details:
        "Create excellent user experiences with websites designed around your business goals and customer needs.",
      path: "/website",
    },
    {
      title: "Mobile App Development",
      icon: <PhoneAndroid />,
      description:
        "Powerful, feature-rich and user-friendly mobile applications.",
      details:
        "Build mobile applications that help businesses connect with customers and improve digital engagement.",
      path: "/mobile",
    },
    {
      title: "Digital Marketing",
      icon: <Campaign />,
      description:
        "Solutions to improve your online visibility and reach.",
      details:
        "SEO, social media, Google Ads and content marketing help promote your brand and reach more customers.",
      path: "/digital-marketing",
    },
    {
      title: "AI Development",
      icon: <Psychology />,
      description:
        "Customized AI solutions for smarter digital experiences.",
      details:
        "Build customized AI solutions that support automation and smarter digital experiences.",
      path: "/ai-development",
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud />,
      description:
        "Scalable, flexible and accessible cloud solutions.",
      details:
        "Reliable cloud solutions designed to support flexibility, scalability and accessibility.",
      path: "/cloud-solutions",
    },
  ];

  const reasons = [
    {
      title: "8+ Years of Experience",
      icon: <TrendingUp />,
      text:
        "Experience in delivering technology solutions for business needs.",
    },
    {
      title: "Customized Technology Solutions",
      icon: <Business />,
      text:
        "Solutions designed around your specific business requirements.",
    },
    {
      title: "Experienced Development Team",
      icon: <Groups />,
      text:
        "A development-focused team working on practical digital solutions.",
    },
    {
      title: "Business-Focused Approach",
      icon: <TrendingUp />,
      text:
        "Solutions created with business goals, efficiency and growth in mind.",
    },
    {
      title: "Scalable & Reliable",
      icon: <Security />,
      text:
        "Solutions designed to support changing business requirements.",
    },
    {
      title: "End-to-End Services",
      icon: <Code />,
      text:
        "Software, web, mobile, AI, cloud and digital marketing solutions.",
    },
  ];

  return (
    <main>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section id="hero">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 4px 20px ${colors.purple}40`,
            height: {
              xs: "75vh",
              sm: "75vh",
              md: "82vh",
              lg: "92vh",
            },
            minHeight: {
              xs: "650px",
              md: "600px",
            },
            width: "100%",
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >

                  {/* Background */}
                  <motion.img
                    src={slide.img}
                    alt={slide.title}
                    initial={{
                      scale: 1.12,
                      opacity: 0.65,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Dark Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(90deg, rgba(3,3,8,0.96) 0%, rgba(3,3,8,0.78) 45%, rgba(3,3,8,0.30) 100%)",
                    }}
                  />

                  {/* Purple Glow */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: 350,
                      height: 350,
                      borderRadius: "50%",
                      right: {
                        xs: "-180px",
                        md: "-100px",
                      },
                      top: {
                        xs: "10%",
                        md: "15%",
                      },
                      background: `${colors.purple}30`,
                      filter: "blur(80px)",
                    }}
                  />

                  {/* Hero Content */}
                  <Container
                    maxWidth="xl"
                    sx={{
                      height: "100%",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: {
                          xs: "center",
                          md: "left",
                        },
                        alignItems: {
                          xs: "center",
                          md: "flex-start",
                        },
                        maxWidth: {
                          xs: "100%",
                          md: "850px",
                        },
                        pt: {
                          xs: 5,
                          md: 0,
                        },
                      }}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 35,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                        }}
                      >
                        {i === 0 && (
                          <Typography
                            sx={{
                              display: "inline-block",
                              color: "#fff",
                              background: `${colors.purple}25`,
                              border: `1px solid ${colors.purple}70`,
                              borderRadius: "30px",
                              px: 2,
                              py: 0.8,
                              mb: 2,
                              fontSize: "12px",
                              fontWeight: 800,
                              letterSpacing: "1.5px",
                            }}
                          >
                            8+ YEARS OF EXPERIENCE
                          </Typography>
                        )}

                        <Typography
                          component={i === 0 ? "h1" : "h2"}
                          sx={{
                            color: "#fff",
                            fontSize: {
                              xs: "2.1rem",
                              sm: "2.8rem",
                              md: "3.6rem",
                              lg: "4.2rem",
                            },
                            lineHeight: 1.08,
                            fontWeight: 800,
                            textShadow:
                              "2px 3px 15px rgba(0,0,0,0.65)",
                            mb: 2,
                          }}
                        >
                          {slide.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#e6e1ed",
                            fontSize: {
                              xs: "1rem",
                              sm: "1.15rem",
                              md: "1.35rem",
                            },
                            lineHeight: 1.6,
                            fontWeight: 500,
                            maxWidth: "780px",
                            mb: 1.5,
                          }}
                        >
                          {slide.subtitle}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#c7c0cf",
                            fontSize: {
                              xs: "0.9rem",
                              md: "1rem",
                            },
                            lineHeight: 1.8,
                            maxWidth: "730px",
                            mb: 3,
                          }}
                        >
                          {slide.description}
                        </Typography>

                        {/* Buttons */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: {
                              xs: "column",
                              sm: "row",
                            },
                            gap: 1.5,
                            width: {
                              xs: "100%",
                              sm: "auto",
                            },
                          }}
                        >
                          <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            onClick={() => goTo(slide.path)}
                            sx={{
                              backgroundColor: "#fff",
                              color: "#17121f",
                              fontWeight: 700,
                              borderRadius: "10px",
                              px: 3,
                              py: 1.3,
                              textTransform: "none",
                              width: {
                                xs: "100%",
                                sm: "auto",
                              },
                              "&:hover": {
                                backgroundColor: "#f2edf6",
                                transform: "translateY(-3px)",
                              },
                              transition: "0.3s ease",
                            }}
                          >
                            {slide.cta1}
                          </Button>

                          <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            onClick={() => goTo("/contact")}
                            sx={{
                              backgroundColor: colors.purple,
                              color: "#fff",
                              fontWeight: 700,
                              borderRadius: "10px",
                              px: 3,
                              py: 1.3,
                              textTransform: "none",
                              width: {
                                xs: "100%",
                                sm: "auto",
                              },
                              "&:hover": {
                                backgroundColor:
                                  colors.purpleDark,
                                transform: "translateY(-3px)",
                              },
                              transition: "0.3s ease",
                            }}
                          >
                            {slide.cta2}
                          </Button>
                        </Box>
                      </motion.div>
                    </Box>
                  </Container>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section id="who-we-are">
        <WhoWeAre />
      </section>

     

      {/* =====================================================
          OUR PURPOSE
      ===================================================== */}

      <section id="purpose">
        <OurPurpose />
      </section>

      {/* =====================================================
          WHY CHOOSE ROHIL TECHNOLOGIES
      ===================================================== */}

     <section id="why-choose-rohil">
  <Box
    sx={{
      py: {
        xs: 8,
        md: 12,
      },
      background: "#fff",
    }}
  >
    <Container maxWidth="xl">

      {/* Section Heading */}
      <Box
        sx={{
          maxWidth: "850px",
          mx: "auto",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            color: "#2563EB",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "2px",
            mb: 1,
          }}
        >
          WHY CHOOSE ROHIL TECHNOLOGIES
        </Typography>

        <Typography
          component="h2"
          sx={{
            color: "#171321",
            fontWeight: 800,
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
            mb: 2,
          }}
        >
          Technology Built Around Your Business
        </Typography>

        <Typography
          sx={{
            color: "#686373",
            lineHeight: 1.8,
          }}
        >
          We focus on practical, scalable and reliable
          technology solutions designed around business needs.
        </Typography>
      </Box>

      {/* Why Choose Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 2.5,
        }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <Box
              sx={{
                p: 3.5,
                height: "100%",
                borderRadius: "20px",
                background: "#faf9fc",
                border: "1px solid #eeeaf3",
                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "#2563EB",
                  boxShadow:
                    "0 12px 30px rgba(37, 99, 235, 0.08)",
                },
              }}
            >

              {/* Icon */}
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "#EFF6FF",
                  color: "#2563EB",
                  mb: 2,
                }}
              >
                {reason.icon}
              </Box>

              {/* Card Heading */}
              <Typography
                component="h3"
                sx={{
                  color: "#2563EB",
                  fontSize: "19px",
                  fontWeight: 750,
                  mb: 1,
                }}
              >
                {reason.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "#686373",
                  lineHeight: 1.7,
                  fontSize: "14px",
                }}
              >
                {reason.text}
              </Typography>

            </Box>
          </motion.div>
        ))}
      </Box>

    </Container>
  </Box>
</section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section id="what-we-do">
        <WhatWeDo />
      </section>

      {/* =====================================================
          WHY CHOOSE US EXISTING
      ===================================================== */}

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      {/* =====================================================
          SPECIALITIES
      ===================================================== */}

      <section id="specialities">
        <Specialities />
      </section>

      {/* =====================================================
          BUSINESS GROWTH
      ===================================================== */}

     <section id="business-growth">
  <Box
    sx={{
      py: {
        xs: 9,
        md: 13,
      },
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          maxWidth: "850px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <Typography
            sx={{
              color: "#2563EB",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "2px",
              mb: 1.5,
            }}
          >
            TECHNOLOGY THAT HELPS YOUR BUSINESS GROW
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "#171321",
              fontSize: {
                xs: "2rem",
                md: "3.3rem",
              },
              fontWeight: 800,
              mb: 2.5,
            }}
          >
            Build. Innovate. Grow.
          </Typography>

          <Typography
            sx={{
              color: "#686373",
              fontSize: "16px",
              lineHeight: 1.9,
              mb: 2,
            }}
          >
            Whether you are a startup, small business or
            established organization, Rohil Technologies
            understands your requirements and develops
            practical, scalable and result-oriented solutions.
          </Typography>

          <Typography
            sx={{
              color: "#686373",
              fontSize: "16px",
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            From web and software development to mobile apps,
            AI, cloud solutions and digital marketing, we help
            businesses build their digital presence.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => goTo("/contact")}
            sx={{
              backgroundColor: "#2563EB",
              borderRadius: "10px",
              px: 3,
              py: 1.3,
              textTransform: "none",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#1D4ED8",
              },
            }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </Box>
    </Container>
  </Box>
</section>

      {/* =====================================================
          DIGITAL PRESENCE
      ===================================================== */}

    <section id="digital-presence">
  <Box
    sx={{
      py: {
        xs: 8,
        md: 11,
      },
      background: "#faf9fc",
    }}
  >
    <Container maxWidth="xl">

      {/* Section Heading */}
      <Box
        sx={{
          maxWidth: "850px",
          mx: "auto",
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography
          sx={{
            color: "#2563EB",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "2px",
            mb: 1,
          }}
        >
          DIGITAL GROWTH
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontWeight: 800,
            color: "#171321",
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
            mb: 2,
          }}
        >
          Grow Your Digital Presence with Rohil Technologies
        </Typography>

        <Typography
          sx={{
            color: "#686373",
            lineHeight: 1.8,
          }}
        >
          Improve your online visibility and reach your target
          audience through SEO, Google Ads, social media and
          content marketing.
        </Typography>
      </Box>

      {/* Digital Growth Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {[
          {
            title: "SEO",
            icon: <TrendingUp />,
          },
          {
            title: "Google Ads",
            icon: <Campaign />,
          },
          {
            title: "Social Media",
            icon: <Groups />,
          },
          {
            title: "Content Marketing",
            icon: <Language />,
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <Box
              sx={{
                minHeight: "130px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.2,
                background: "#fff",
                border: "1px solid #eeeaf3",
                borderRadius: "18px",
                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 15px 35px rgba(40,20,60,0.08)",
                },
              }}
            >
              {/* Blue Icon */}
              <Box
                sx={{
                  color: "#2563EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>

              {/* Blue Heading */}
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#2563EB",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

    </Container>
  </Box>
</section>

      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <section id="clients">
        <Clients />
      </section>

      {/* =====================================================
          INTERNSHIP
      ===================================================== */}

      <section id="internship-opportunity">
        <InternshipOpportunity />
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section id="homepage-faq">
        <HomepageFAQ />
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
<section id="final-cta">
  <Box
    sx={{
      py: {
        xs: 9,
        md: 13,
      },
      textAlign: "center",
    }}
  >
    <Container maxWidth="lg">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#171321",
            fontWeight: 800,
            fontSize: {
              xs: "2rem",
              md: "3.5rem",
            },
            mb: 2,
          }}
        >
          Build Your Next Digital Solution With Us
        </Typography>

        <Typography
          sx={{
            color: colors.purple,
            fontSize: "24px",
            fontWeight: 800,
            mb: 1,
          }}
        >
          Let’s Build. Innovate. Grow.
        </Typography>

        <Typography
          sx={{
            color: "#686373",
            fontSize: "16px",
            mb: 3,
          }}
        >
          Get in touch with Rohil Technologies today.
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          onClick={() => goTo("/contact")}
          sx={{
            backgroundColor: colors.purple,
            color: "#fff",
            borderRadius: "10px",
            px: 3.5,
            py: 1.4,
            fontWeight: 700,
            textTransform: "none",
            "&:hover": {
              backgroundColor: colors.purpleDark,
            },
          }}
        >
          Get in Touch
        </Button>
      </motion.div>

    </Container>
  </Box>
</section>

    </main>
  );
}