// src/components/MobileApps.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import colors from "../Colors";
import {
  Cloud,
  Security,
  Build,
  BugReport,
  Speed,
  BarChart,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MobileApps() {
  const devPlatforms = [
    { title: "iPhone & iOS", icon: "mdi:apple" },
    { title: "Mobile Web", icon: "mdi:web" },
    { title: "Android", icon: "mdi:android" },
    { title: "React Native", icon: "mdi:react" },
    { title: "Lua", icon: "mdi:language-lua" },
  ];

  const whatWeDo = [
    { title: "Estimate project scope", icon: "mdi:clipboard-text" },
    { title: "Assess the user requirement", icon: "mdi:account-check" },
    { title: "Prototyping", icon: "mdi:vector-square" },
    { title: "Fixing bugs", icon: "mdi:bug-check" },
    { title: "App promotion", icon: "mdi:bullhorn" },
    { title: "Wire Frame (With complete UI Analysis)", icon: "mdi:draw" },
  ];

  const industries = [
    { title: "Game & Utilities", icon: "mdi:gamepad-variant" },
    { title: "Education & E-Learning", icon: "mdi:school" },
    { title: "Sports & Recreation", icon: "mdi:soccer" },
    { title: "Banking & Finance", icon: "mdi:bank" },
    { title: "Travel & Tourism", icon: "mdi:airplane" },
    { title: "Media & Entertainment", icon: "mdi:movie" },
  ];

  const technologies = [
    { title: "iOS", icon: "mdi:apple" },
    { title: "Android", icon: "mdi:android" },
    { title: "Java", icon: "mdi:language-java" },
    { title: "React Native", icon: "mdi:react" },
    { title: "Adobe Illustrator", icon: "mdi:adobe" },
    { title: "Unity", icon: "mdi:unity" },
  ];
  const faq = [
    {
      q: "How long does mobile app development take?",
      a: "Usually 6–16 weeks depending on project complexity."
    },
    {
      q: "Do you build Android and iOS apps?",
      a: "Yes, we develop Android, iOS, and cross-platform apps."
    },
    {
      q: "Do you provide maintenance services?",
      a: "Yes, we offer updates, monitoring, and ongoing support."
    },
    {
      q: "Can existing apps be upgraded?",
      a: "Yes, we modernize and improve existing applications."
    }
  ];
  const services = [
    {
      title: "Web Application",
      text: "Build dynamic, responsive, and user-friendly web applications tailored to your needs.",
      icon: "mdi:web",
    },
    {
      title: "Desktop Application",
      text: "Develop powerful desktop applications with high performance and seamless functionality.",
      icon: "mdi:desktop-classic",
    },
    {
      title: "Gaming Development",
      text: "Create immersive gaming experiences with stunning visuals and engaging gameplay.",
      icon: "mdi:gamepad-variant",
    },
    {
      title: "Chatbot Development",
      text: "Design smart chatbots that enhance customer engagement and streamline communication.",
      icon: "mdi:robot",
    },
  ];
  const SectionCard = ({ icon, title }) => (
    <Box
      sx={{
        flex: { xs: "100%", sm: "48%", md: "23%" },
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        textAlign: "center",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <Icon icon={icon} width={50} height={50} color={colors.primary} />
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", color: colors.primary, mt: 2 }}
      >
        {title}
      </Typography>
    </Box>
  );
  return (
    <>


      <Helmet>

        <title>
          Mobile App Development Services | Rohil Technologies
        </title>

        <meta
          name="description"
          content="Professional mobile app development services by Rohil Technologies. Build secure, scalable Android, iOS and cross-platform apps tailored to your business."
        />

        <meta
          name="keywords"
          content="Mobile App Development Services, Android App Development, iOS App Development"
        />

        <link
          rel="canonical"
          href="https://www.rohiltechnologies.com/mobile"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Mobile App Development Services | Rohil Technologies"
        />

        <meta
          property="og:description"
          content="Build secure, scalable Android, iOS and cross-platform mobile apps."
        />

        <meta
          property="og:image"
          content="https://www.rohiltechnologies.com/images/mobdev.png"
        />

        <meta
          property="og:url"
          content="https://www.rohiltechnologies.com/mobile"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Mobile App Development Services",

            provider: {
              "@type": "Organization",
              "name": "Rohil Technologies",
              "url": "https://www.rohiltechnologies.com"
            },

            areaServed: "India",

            description:
              "Professional Android, iOS and cross-platform mobile application development services."
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.rohiltechnologies.com"
              },

              {
                "@type": "ListItem",
                position: 2,
                name: "Mobile App Development",
                item: "https://www.rohiltechnologies.com/mobile"
              }
            ]
          })}
        </script>

      </Helmet>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/mobdev.png')",
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
            variant="h1"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Mobile App Development Services
          </Typography>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>

      {/* ===== Section: Intro ===== */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Left Side - Image */}
          <Box sx={{ flex: 1 }}>
            {/* <img
              src="/images/mobdev1.png"
              alt="Mobile App Development"
              style={{ width: "100%", borderRadius: "12px" }}
            /> */}
            <img
              src="/images/mobdev1.png"
              alt="Custom Mobile App Development Services"
              loading="lazy"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* Right Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Mobile App Development
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We build robust, scalable, and user-friendly mobile applications
              tailored to your business requirements. Our solutions ensure high
              performance, engaging UI/UX, and seamless integration.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Whether it’s Android, iOS, or cross-platform, our development team
              ensures quality and security at every stage.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider />
      {/* Second intro */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* left Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Mobile Game Development
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              Over our years of expertise, we have managed to develop mobile
              games that are always known for their advancement in technology
              and proved to be challenging for the player making the game more
              interesting.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              When clients come to us with their own storyboard, we make their
              ideas come true with our creative team. We also design storyboards
              for clients who come to us with their ideas which they need to see
              become a reality. We create games that are compatible with devices
              that run on, Android, iOS, Cross platform support
            </Typography>
          </Box>
          {/* right side - img */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/mobdev2.png"
              alt="Mobile Game Development Company"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </Box>
      </Container>
      <Divider />

      {/* Service */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Our Services
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" }, // 4 per row on desktop
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
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

      {/* ===== Section: Our Other Support ===== */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 6,
          }}
        >
          Our Other Support
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {[
            {
              title: "App Maintenance",
              text: "Continuous updates and support to keep your app running smoothly.",
              icon: <Build sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "App Testing",
              text: "Comprehensive QA & testing for bug-free and optimized apps.",
              icon: <BugReport sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Cloud Integration",
              text: "Seamless cloud integration for scalability and reliability.",
              icon: <Cloud sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "App Security",
              text: "Advanced security features to protect your app and user data.",
              icon: <Security sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Performance Optimization",
              text: "Improving app speed and responsiveness for a smooth user experience.",
              icon: <Speed sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Analytics & Reporting",
              text: "Detailed insights and reports to track app performance and usage.",
              icon: <BarChart sx={{ fontSize: 50, color: colors.primary }} />,
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 1 }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
      <Container sx={{ py: 4 }}>
        {/* ===== Development Section ===== */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Development Process
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          Our skilled and dexterous development team ensures your product is
          delivered efficiently and on schedule, without compromising on
          quality. We specialize in creating sophisticated mobile applications
          and engaging games using the React Native framework, which allows for
          seamless cross-platform performance on both Android and iOS devices.
          From initial concept to final deployment, we focus on building
          scalable, robust, and user-friendly solutions tailored to your
          business requirements. Our team emphasizes clean code, high
          performance, intuitive UI/UX, and strict quality assurance, ensuring
          that every app not only meets but exceeds client expectations while
          delivering a seamless experience to end-users.
        </Typography>
        <Grid container spacing={4} justifyContent="center" mb={8}>
          {devPlatforms.map((item, i) => (
            <Grid item xs={3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  width: "100%",
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
                  sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* ===== What We Do ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          What We Do
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We provide end-to-end mobile app and game development services,
          ensuring timely delivery without compromising quality. Our team
          carefully estimates project scope, assesses user requirements, creates
          prototypes, fixes bugs, and promotes your app effectively. We also
          design comprehensive wireframes with full UI analysis to ensure
          scalable, user-friendly, and high-performance solutions that exceed
          client expectations across Android and iOS platforms.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {whatWeDo.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
                textAlign: "center",
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

        {/* ===== Our Focusing Industries ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Our Focusing Industries
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We serve a diverse range of industries, delivering tailored mobile
          applications and solutions that meet unique business needs. From Game
          & Utilities to Education & E-Learning, Sports & Recreation, Banking &
          Finance, Travel & Tourism, and Media & Entertainment, our expertise
          ensures high-quality, scalable, and engaging digital products. Our
          team leverages cutting-edge technologies to create apps that enhance
          user experience, drive growth, and deliver measurable results across
          all industry verticals.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {industries.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
                textAlign: "center",
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

        {/* ===== Technology ===== */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
            textAlign: "center",
          }}
        >
          Technology
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          We leverage the latest technologies to build high-quality mobile
          applications and games. Our expertise spans iOS, Android, Java, React
          Native, Adobe Illustrator, and Unity, ensuring scalable, efficient,
          and visually engaging solutions that deliver seamless performance and
          a superior user experience across multiple platforms.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mb={8}>
          {technologies.map((item, i) => (
            <Grid item xs={12} sm={6} md={2.3} key={i}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 2,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                  width: "100%",
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
                  sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2 }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* ===== FAQ Section ===== */}

        <Container sx={{ py: 6 }}>

          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4
            }}
          >
            Frequently Asked Questions
          </Typography>

          {faq.map((item, i) => (

            <Accordion key={i} sx={{ mb: 2 }}>

              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.q}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ color: colors.grey }}>
                  {item.a}
                </Typography>
              </AccordionDetails>

            </Accordion>

          ))}

        </Container>
        {/* ===== CTA Section ===== */}

        <Container sx={{ py: 8 }}>
          <Box
            sx={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.darkBlue})`,
              borderRadius: 5,
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
              textAlign: "center",
              color: "#fff",
              position: "relative",
              overflow: "hidden",

              "&::before": {
                content: '""',
                position: "absolute",
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                top: "-60px",
                right: "-60px",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                bottom: "-50px",
                left: "-50px",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                position: "relative",
                zIndex: 2,
              }}
            >
              Build Your Mobile App Today
            </Typography>

            <Typography
              sx={{
                maxWidth: "700px",
                mx: "auto",
                mb: 4,
                opacity: 0.9,
                position: "relative",
                zIndex: 2,
              }}
            >
              Launch secure, scalable, and high-performance
              Android, iOS, and cross-platform applications
              tailored to your business requirements.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                bgcolor: "#fff",
                color: colors.primary,
                px: 5,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "16px",
                boxShadow: 5,
                position: "relative",
                zIndex: 2,

                "&:hover": {
                  bgcolor: "#f3f3f3",
                  transform: "translateY(-3px)",
                },
              }}
            >
              Get Free Consultation →
            </Button>
          </Box>
        </Container>
        {/* ===== Why Choose Rohil Technologies ===== */}
        <Container sx={{ py: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4,
            }}
          >
            Why Choose Rohil Technologies
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: colors.grey,
              lineHeight: 2,
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            We deliver custom mobile application development
            services designed for scalability, performance,
            and business growth. Our team specializes in
            Android, iOS, and cross-platform solutions using
            modern technologies and user-focused design.
            From planning and UI/UX to deployment and
            maintenance, we ensure secure, high-quality,
            and business-driven mobile applications.
          </Typography>
        </Container>
      </Container>
    </>
  );
}
