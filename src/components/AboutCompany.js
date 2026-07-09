import React from "react";
import { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Link,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import TechnicalExpertise from "./technicalSkills";
import colors from "./Colors";
import { useNavigate } from "react-router-dom";
import IndustriesWeServe from "./IndustriesWeServe";
import { Helmet } from "react-helmet-async";
const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your goals, challenges, and opportunities to shape the right solution.",
    icon: "mdi:magnify",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "We craft a clear roadmap, aligning resources and timelines to ensure efficiency and success.",
    icon: "mdi:chart-timeline-variant",
  },
  {
    number: "03",
    title: "Design & Innovation",
    description:
      "We create intuitive, user-focused designs that combine creativity with practical functionality.",
    icon: "mdi:palette-outline",
  },
  {
    number: "04",
    title: "Build & Implement",
    description:
      "Our team transforms ideas into robust solutions using the latest technologies and best practices.",
    icon: "mdi:hammer-wrench",
  },
  {
    number: "05",
    title: "Support & Growth",
    description:
      "We provide ongoing support, updates, and optimization to ensure your solution grows with you.",
    icon: "mdi:handshake-outline",
  },
];
const getServiceChipStyle = () => ({
  borderColor: colors.primary,
  color: colors.primary,
  backgroundColor: `${colors.primary}15`, // light transparent shade
});

export default function AboutCompany() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const go = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
return (
  <Box sx={{ bgcolor: "#fff" }}>
    <Helmet>
      <title>About Rohil Technologies | Trusted Software Company</title>

      <meta
        name="description"
        content="Rohil Technologies is a trusted software company offering web development, mobile app development, cloud solutions, and business automation."
      />
     <meta property="og:title" content="About Rohil Technologies" />
<meta property="og:description" content="Trusted software company..." />
<meta property="og:image" content="https://rohiltechnologies.com/mainPage/about-banner.png" />
<meta property="og:url" content="https://rohiltechnologies.com/about" />
      <link
        rel="canonical"
        href="https://rohiltechnologies.com/about"
      />
    </Helmet>

    {/* Rest of your page */}
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/mainPage/about-banner.png')",
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
  component="h1"
  variant="h2"
  sx={{
    fontWeight: "bold",
    mb: 2,
    fontSize: { xs: "2rem", md: "3rem" },
  }}
>
  About Rohil Technologies – Trusted Software Company
</Typography>
          <Breadcrumbs
            sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
            separator="›"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="inherit">About US</Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>

      {/* ===== About Our About US ===== */}
      <Section
        img="/mainPage/empower.png"
        title="Empowering Businesses Through Smart Digital Solutions"
        content={[
          <>
            At Rohil Technologies, we help companies grow through innovative and
            scalable digital solutions. Our team collaborates closely with
            clients to understand their goals and deliver tailored IT services
            that drive long-term success.
          </>,
          <>
            Whether you need modern{" "}
            <span
              onClick={() => {
                navigate("/web-technologies");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: "#4b5eff", cursor: "pointer" }}
            >
              web development
            </span>
            , high-performing{" "}
            <span
              onClick={() => {
                navigate("/mobile");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: "#4b5eff", cursor: "pointer" }}
            >
              mobile apps
            </span>
            , or custom{" "}
            <span
              onClick={() => {
                navigate("/application-development");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: "#4b5eff", cursor: "pointer" }}
            >
              application development
            </span>
            , our solutions are designed to simplify operations and enhance
            efficiency.
          </>,
          <>
            By combining innovation, industry-proven methodologies, and deep
            technical expertise, we build strategies that help businesses reduce
            costs, automate workflows, and stay competitive in a rapidly
            evolving digital world.
          </>,
          <>
            We believe in complete transparency, clear communication, and
            building trust — forming long-term partnerships that deliver
            measurable results and sustainable business impact.
          </>,
          <>
            From consultation to development, deployment, and ongoing support,
            Rohil Technologies empowers businesses to scale confidently with
            future-ready technology.
          </>,
        ]}
        reverse={false}
        showButton={true}
        navigate={navigate}
      />

      {/* ===== One Team, Many Talents ===== */}
      <Section
        img="/mainPage/together.png"
        title="A Skilled Team Delivering Results That Matter"
        content={[
          <>
            At Rohil Technologies, our talented and experienced professionals
            work together to create powerful, reliable solutions that exceed
            client expectations.
          </>,
          <>
            Our team stays updated with emerging technologies such as{" "}
            <span
              onClick={() => {
                navigate("/erp");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: "#4b5eff", cursor: "pointer" }}
            >
              ERP systems
            </span>
            ,{" "}
            <span
              onClick={() => {
                navigate("/digital-marketing/seo");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: "#4b5eff", cursor: "pointer" }}
            >
              SEO
            </span>
            , cloud integration, automation tools, and modern software
            frameworks — ensuring clients always receive high-value,
            future-ready results.
          </>,
          <>
            We believe in transparency, accountability, and strong
            communication. These values help us build long-lasting relationships
            with businesses and guide them toward digital transformation.
          </>,
          <>
            Quality is at the core of everything we do. From{" "}
            <span
              onClick={() => {
                navigate("/testing");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ color: "#4b5eff", cursor: "pointer" }}
            >
              software testing & QA
            </span>{" "}
            to deployment and maintenance, we ensure that every solution meets
            the highest industry standards.
          </>,
        ]}
        reverse={true}
      />

      {/* ==== Stats Section (Glass Cards) ==== */}
      <Box sx={{ py: 6, bgcolor: "#f4f7ff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 6,
            }}
          >
            <StatCardAccent
              number="6+"
              label="Years of Experience"
              icon="mdi:briefcase-outline"
            />
            <StatCardAccent
              number="We Care"
              label="& We Make Your Life Easier"
              icon="mdi:heart-outline"
            />
            <StatCardAccent
              number="100%"
              label="Client Satisfaction Rate"
              icon="mdi:thumb-up-outline"
            />
          </Box>
        </Container>
      </Box>

      {/* ===== Process Steps ===== */}
   {/* ===== Process Steps (Accent Style) – 5 in same row ===== */}
<Box sx={{ bgcolor: "#fff", py: { xs: 3, md: 5 } }}>
  <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
    <Typography
      variant="h2"
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        mb: 4,
        color: colors.darkBlue,
      }}
    >
      Our Process
    </Typography>

    {/* Force 5 columns – no wrap on md+ */}
    <Box
      sx={{
        display: "grid",
        gap: 3,
        // 5 equal columns on md and larger
        gridTemplateColumns: {
          xs: "1fr",               // 1 column on mobile
          sm: "repeat(2, 1fr)",    // 2 columns on sm
          md: "repeat(5, 1fr)",    // **5 columns** from md up
        },
        // Fallback for browsers that don’t support grid (keeps flex behavior)
        display: { xs: "flex", sm: "flex", md: "grid" },
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {steps.map((step, idx) => (
        <Box
          key={idx}
          sx={{
            // Flex fallback for xs/sm
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "0 1 auto" },
            p: 3,
            borderLeft: `6px solid ${colors.primary}`,
            borderRadius: 2,
            bgcolor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
            textAlign: "left",
            minHeight: 250,
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Icon
            icon={step.icon}
            style={{
              color: colors.primary,
              fontSize: "40px",
              marginBottom: 12,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 1,
            }}
          >
            {step.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: colors.black, opacity: 0.85, lineHeight: 1.5 }}
          >
            {step.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
</Box>

      {/* Bottom CTA & Links (internal linking examples) */}
      <Box sx={{ py: 6, background: "#fff" }}>
        <Container maxWidth="lg">
          <Divider sx={{ mb: 4 }} />
          <Typography  variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
              color: colors.darkBlue,
            }}>
            Explore Our Services
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Quickly jump to any service — we build full-stack web apps, mobile
            apps, ERP/CRM, and more.
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {[
              { label: "Web Development", path: "/web-technologies" },
              { label: "Mobile Apps", path: "/mobile" },
              {
                label: "Application Development",
                path: "/application-development",
              },
              { label: "Testing & QA", path: "/testing" },
              { label: "SEO Services", path: "/digital-marketing/seo" },
              { label: "ERP & CRM", path: "/erp" },
              { label: "Careers", path: "/careers" },
            ].map((t) => (
              <Chip
                key={t.path}
                label={t.label}
                clickable
                onClick={() => go(t.path)}
                variant="filled"
                sx={{
                  ...getServiceChipStyle(),
                  cursor: "pointer",
                  borderWidth: 1,
                  borderStyle: "solid",
                  fontWeight: 600,
                  borderRadius: "20px",
                  px: 2,
                  py: 0.5,
                  fontSize: "0.85rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: `${colors.primary}22`,
                    transform: "translateY(-2px)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: 6, bgcolor: "#f9fbff" }}>
  <Container maxWidth="lg">

    <Typography
      component="h2"
      variant="h3"
      sx={{
        fontWeight: "bold",
        color: colors.darkBlue,
        mb: 3,
      }}
    >
      Why Choose Rohil Technologies?
    </Typography>

    <Typography paragraph>
      Rohil Technologies is a trusted software company committed to delivering innovative digital solutions that help businesses grow in today's competitive market. We specialize in custom software development, web application development, mobile app development, cloud solutions, and business automation for startups, SMEs, and enterprises.
    </Typography>

    <Typography paragraph>
      As experienced mobile app developers, we build secure Android and iOS applications that improve customer engagement and streamline business operations. Our expertise also includes data analytics solutions that transform business data into valuable insights for smarter decision-making.
    </Typography>

    <Typography paragraph>
      Our development of software follows industry best practices with a strong focus on quality, security, performance, scalability, and user experience. Every solution is designed to deliver measurable business value and long-term growth.
    </Typography>

    <Typography paragraph>
      We simplify cloud computing explained services by helping organizations migrate, deploy, and manage secure cloud infrastructure. Our server based computing solutions provide centralized applications, secure data management, improved collaboration, and reliable system performance.
    </Typography>

    <Typography paragraph>
      Driven by innovation, technical excellence, and customer satisfaction, Rohil Technologies continues to be a trusted technology partner delivering future-ready digital transformation solutions for businesses worldwide.
    </Typography>

  </Container>
</Box>
      {/* Technical */}
      <TechnicalExpertise />

      {/* ===== Industries We Serve =====  */}
      <IndustriesWeServe />
    </Box>
  );
}

/* ==== Reusable Section (Image + Content) ==== */
function Section({ img, title, content, reverse, showButton, navigate }) {
  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: reverse ? "row-reverse" : "row",
            },
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          />
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
            >
              {title}
            </Typography>
            {content.map((p, i) => (
              <Typography
                key={i}
                variant="body1"
                sx={{
                  color: colors.black,
                  fontSize: "1.1rem",
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                {p}
              </Typography>
            ))}
            {showButton && (
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: colors.primary,
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: colors.darkBlue },
                }}
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function StatCardAccent({ number, label, icon }) {
  return (
    <Box
      sx={{
        flex: "1 1 280px",
        p: 3,
        borderLeft: `6px solid ${colors.primary}`,
        borderRadius: 2,
        bgcolor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Icon
        icon={icon}
        style={{ color: colors.primary, fontSize: "48px", marginBottom: 12 }}
      />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {number}
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        {label}
      </Typography>
    </Box>
  );
}
