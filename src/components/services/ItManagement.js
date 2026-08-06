// src/components/ItManagement.js
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "../Colors";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
export default function ItManagement() {
  const services = [
    {
      title: "Infrastructure Management",
      text: "Ensure high availability and performance of servers, networks, and databases through proactive monitoring and maintenance.",
      icon: "mdi:server-network",
    },
    {
      title: "Cloud Management",
      text: "Manage and optimize cloud resources, ensuring scalability, cost efficiency, and seamless migration strategies.",
      icon: "mdi:cloud-outline",
    },
    {
      title: "Network Administration",
      text: "Monitor network performance, strengthen connectivity, and safeguard communication channels from potential threats.",
      icon: "mdi:lan-connect",
    },
    {
      title: "IT Helpdesk Support",
      text: "Provide round-the-clock technical assistance and troubleshooting to ensure uninterrupted business operations.",
      icon: "mdi:headset",
    },
    {
      title: "Data Backup & Disaster Recovery",
      text: "Implement secure backup and recovery systems to protect data and ensure business continuity during unforeseen events.",
      icon: "mdi:backup-restore",
    },
    {
      title: "Cybersecurity Management",
      text: "Protect digital assets with multi-layered security strategies including firewalls, encryption, and intrusion detection.",
      icon: "mdi:shield-lock-outline",
    },
    {
      title: "IT Project Management",
      text: "Deliver IT projects on time and within budget through strategic planning, execution, and continuous improvement.",
      icon: "mdi:clipboard-check-outline",
    },
    {
      title: "Software Asset Management",
      text: "Track, manage, and optimize software licenses to reduce costs and ensure compliance with industry standards.",
      icon: "mdi:application-cog-outline",
    },
  ];

  return (
    <>


      <Helmet>
        <title>IT Management Services | Rohil Technologies</title>

        <link
          rel="canonical"
          href="https://www.rohiltechnologies.com/it-management"
        />

        <script type="application/ld+json">
          {`
    {
      "@context":"https://schema.org",
      "@type":"Service",
      "name":"IT Management Services",
      "provider":{
        "@type":"Organization",
        "name":"Rohil Technologies"
      },
      "serviceType":"IT Management",
      "areaServed":"Worldwide"
    }
    `}
        </script>
      </Helmet>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/ITManagement.png')",
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
            variant="h3"
            sx={{
              fontWeight: "bold",
              color:"#fff",
              mb: 3,
            }}
          >
            IT Management Services
          </Typography>
        </Box>
      </Box>

      {/* ===== Intro Section ===== */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 3 }}
        >
          IT MANAGEMENT
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 2 }}>
          At <strong>Rohil Technologies</strong>, we provide professional
          <strong> IT Management Services</strong> that help businesses improve
          productivity, strengthen cybersecurity, and simplify daily IT operations.
          Our experienced IT professionals deliver end-to-end technology solutions,
          ensuring your IT infrastructure remains secure, reliable, and up to date.
          We support startups, small businesses, and enterprises by managing their
          complete IT environment while allowing them to focus on business growth.

          <br /><br />

          Our IT management solutions include network management, server monitoring,
          cloud management, infrastructure support, software installation, data
          backup, disaster recovery, cybersecurity, and 24/7 technical support.
          Through proactive monitoring and preventive maintenance, we minimize
          downtime, improve performance, and keep your business running efficiently.

          <br /><br />

          We also help organizations with IT consulting, digital transformation,
          cloud migration, infrastructure optimization, and hybrid IT environments.
          Our scalable and cost-effective solutions are designed to meet the evolving
          needs of modern businesses while ensuring security, performance, and
          business continuity.
        </Typography>
        <Divider sx={{ my: 5 }} />

        {/* Why IT Management Essential */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          Why is IT Management Essential?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          IT Management plays a critical role in aligning technology with
          business goals. It helps optimize resources, improve data management,
          enhance team collaboration, and minimize downtime. With strategic IT
          management, businesses gain greater agility, scalability, and
          resilience in a constantly evolving digital landscape.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* What Services Rohil Offers */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          What Services Does Rohil Technologies Offer?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Rohil Technologies offers end-to-end IT management solutions covering
          infrastructure, networks, cloud platforms, and security operations.
          Our experts ensure smooth IT operations, scalability, and security to
          keep businesses running without interruptions.
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            mt: 4,
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "23%" },
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                backgroundColor: "#fff",
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

        <Divider sx={{ my: 5 }} />

        {/* Security Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          How Does IT Management Enhance Security?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          IT Management ensures all systems are protected through continuous
          monitoring, patch management, and advanced cybersecurity frameworks.
          By implementing proactive defense mechanisms, it prevents data
          breaches, protects sensitive information, and ensures compliance with
          regulatory standards.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Project Management Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          What Are the Benefits of Project Management?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Effective IT project management ensures that every technology
          initiative aligns with business objectives. It improves efficiency,
          controls costs, and ensures timely delivery. Our structured approach
          enables smooth communication between stakeholders and helps deliver
          measurable business outcomes.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* IT Operations Support Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
        >
          How Does Rohil Technologies Support IT Operations?
        </Typography>
        <Typography sx={{ color: colors.grey, mb: 3 }}>
          Rohil Technologies provides ongoing IT support through continuous
          monitoring, maintenance, and proactive issue resolution. Our experts
          ensure systems are updated, secure, and optimized for high
          performance, empowering businesses to stay focused on innovation and
          growth.
        </Typography>
        <Divider sx={{ my: 5 }} />

        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 2,
          }}
        >
          Why Choose Rohil Technologies for IT Management Services?
        </Typography>

        <Typography sx={{ color: colors.grey }}>
          Rohil Technologies delivers reliable and scalable IT Management Services
          tailored to organizations of every size. Our certified professionals
          proactively monitor IT infrastructure, optimize cloud resources, strengthen
          cybersecurity, and provide continuous technical support. We focus on
          minimizing downtime, improving operational efficiency, protecting business
          data, and ensuring long-term business continuity. Whether your organization
          operates on-premise, in the cloud, or in a hybrid environment, we provide
          customized IT solutions that help your business remain secure, productive,
          and competitive.
        </Typography>
        <Typography sx={{ color: colors.grey, mt: 3 }}>
        Rohil Technologies offers a wide range of IT solutions to help businesses
        achieve digital success. Explore our <Link to="/software-development">Software Development</Link>,
        <Link to="/web-technologies"> Web Development</Link>,
        <Link to="/mobile"> Mobile App Development</Link>,
        <Link to="/application-maintenance">App Maintenance</Link> services. You can also
        visit our <Link to="/about">About Us</Link> page to learn more about our
        expertise or <Link to="/contact">Contact Us</Link> to discuss your IT
        requirements with our team.
      </Typography>
      </Container>
      
    </>
  );
}
