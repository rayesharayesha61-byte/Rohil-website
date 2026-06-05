// src/components/WebTechnologies.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
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

export default function WebTechnologies() {
  const devPlatforms = [
    { title: "HTML / CSS / JavaScript", icon: "mdi:language-html5" },
    { title: "React / Angular / Vue", icon: "mdi:react" },
    { title: "WordPress / CMS", icon: "mdi:wordpress" },
    { title: "Shopify / E-Commerce", icon: "mdi:shopify" },
    { title: "Node.js / PHP / Python", icon: "mdi:nodejs" },
    { title: "Cloud & Hosting (AWS / Azure)", icon: "mdi:cloud-outline" },
  ];

  const whatWeDo = [
    {
      title: "Top Notch Quality",
      text: "Our team of experienced development specialists always prioritize quality in every application we deliver.",
      icon: "mdi:check-circle-outline",
    },
    {
      title: "Consultancy",
      text: "We provide expert guidance and consultation to help you create the best possible application for your business.",
      icon: "mdi:account-tie",
    },
    {
      title: "Smooth Communication",
      text: "We ensure clear and timely communication, supporting you across different time zones for seamless collaboration.",
      icon: "mdi:message-text-outline",
    },
    {
      title: "Flexibility",
      text: "Following agile methodology, we adapt to changes while keeping projects on track and meeting deadlines.",
      icon: "mdi:autorenew",
    },
    {
      title: "Objective Oriented",
      text: "We focus on your business goals and work diligently to help you achieve them efficiently.",
      icon: "mdi:target",
    },
    {
      title: "Transparency",
      text: "We maintain complete transparency and honesty, building trust as the foundation of our collaboration.",
      icon: "mdi:eye-outline",
    },
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
    { title: "HTML5", icon: "mdi:language-html5" },
    { title: "CSS3", icon: "mdi:language-css3" },
    { title: "JavaScript", icon: "mdi:language-javascript" },
    { title: "React", icon: "mdi:react" },
    { title: "Angular", icon: "mdi:angular" },
    { title: "Vue.js", icon: "mdi:vuejs" },
    { title: "WordPress", icon: "mdi:wordpress" },
    { title: "Shopify", icon: "mdi:shopify" },
    { title: "Node.js", icon: "mdi:nodejs" },
    { title: "MySQL", icon: "mdi:database" },
    { title: "AWS", icon: "mdi:amazon" },
  ];

  const services = [
    {
      title: "Website Development",
      text: "We create responsive, user-friendly websites tailored to your business goals, ensuring a seamless user experience.",
      icon: "mdi:web",
    },
    {
      title: "Website Maintenance",
      text: "Our website maintenance services ensure your site stays up-to-date, secure, and optimized at all times.",
      icon: "mdi:wrench",
    },
    {
      title: "Custom Websites",
      text: "We build fully customized websites that align with your brand identity and meet your unique business needs.",
      icon: "mdi:brush",
    },
    {
      title: "WordPress Development",
      text: "From themes to plugins, we deliver complete WordPress solutions to help your site stand out and perform flawlessly.",
      icon: "mdi:wordpress",
    },
    {
      title: "Shopify Development",
      text: "We develop high-performing e-commerce stores on Shopify, providing scalable and conversion-focused solutions.",
      icon: "mdi:shopify",
    },
    {
      title: "E-Commerce Solutions",
      text: "Empower your business with feature-rich, secure, and scalable online stores built for growth and customer engagement.",
      icon: "mdi:cart-outline",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/images/web.png')",
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
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Website Development
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
            <img
              src="/images/web1.png"
              alt="Mobile App Development"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* Right Side - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
            >
              Website Development
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We design and develop responsive, visually appealing, and
              high-performing websites that elevate your brand’s digital
              presence. Our solutions are crafted to ensure seamless navigation,
              optimized speed, and compatibility across all devices and
              browsers.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Whether it’s a corporate site, eCommerce platform, or custom web
              application, our team focuses on clean design, robust
              functionality, and SEO-friendly architecture to help your business
              attract, engage, and convert users effectively.
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
              Innovative Web Solutions
            </Typography>
            <Typography sx={{ color: colors.grey, mb: 2 }}>
              We craft modern, high-performing, and secure web solutions
              designed to empower businesses in the digital era. Our development
              approach focuses on creating responsive, SEO-friendly, and
              visually engaging websites that drive growth and enhance user
              experience.
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              From strategic planning and design to full-stack development and
              deployment, we deliver end-to-end web solutions that combine
              creativity with cutting-edge technology. Our team ensures your
              website remains fast, scalable, and easy to manage — helping your
              brand stand out online.
            </Typography>
          </Box>

          {/* right side - img */}
          <Box sx={{ flex: 1 }}>
            <img
              src="/images/web2.png"
              alt="Mobile App Development"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>
        </Box>
      </Container>
      <Divider />

      {/* Service */}
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
              title: "Software Maintenance",
              text: "Ongoing maintenance and updates to keep your applications running smoothly and efficiently.",
              icon: <Build sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Quality Assurance & Testing",
              text: "Comprehensive testing to ensure bug-free, reliable, and high-performance applications.",
              icon: <BugReport sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Cloud & Backend Integration",
              text: "Seamless integration with cloud services and backend systems for scalable and reliable solutions.",
              icon: <Cloud sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Application Security",
              text: "Implement advanced security measures to protect your software and sensitive data.",
              icon: <Security sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Performance Optimization",
              text: "Enhancing application speed, responsiveness, and resource efficiency for smooth operations.",
              icon: <Speed sx={{ fontSize: 50, color: colors.primary }} />,
            },
            {
              title: "Analytics & Insights",
              text: "Provide actionable insights and reporting to monitor and improve application performance.",
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
          Development
        </Typography>
        <Typography sx={{ textAlign: "center", color: colors.grey, mb: 6 }}>
          Our skilled and experienced web development team ensures your website
          is built efficiently, delivered on schedule, and optimized for quality
          performance. We specialize in creating responsive, scalable, and
          visually appealing websites that align with your brand and business
          goals. From initial planning and design to development, testing, and
          deployment, we focus on delivering seamless, high-performing web
          solutions. Our team emphasizes clean, maintainable code, fast load
          times, engaging UI/UX, and strong security — ensuring your website not
          only meets but exceeds expectations while providing a smooth and
          enjoyable experience for every user.
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
          We provide end-to-end Website Development services, ensuring timely
          delivery without compromising quality. Our team carefully estimates
          project scope, assesses user requirements, creates prototypes, fixes
          issues, and implements solutions effectively. We also design
          comprehensive wireframes with full UI/UX analysis to ensure scalable,
          user-friendly, and high-performance applications that exceed client
          expectations across web, desktop, mobile, and enterprise platforms.
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
          We leverage the latest web technologies to build high-quality,
          responsive, and SEO-friendly websites. Our expertise spans HTML5,
          CSS3, JavaScript, React, Angular, WordPress, and Shopify — ensuring
          scalable, secure, and visually engaging solutions. We focus on
          delivering seamless performance, intuitive navigation, and optimized
          user experiences across all devices and browsers, helping businesses
          establish a strong and lasting online presence.
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
      </Container>
    </>
  );
}
