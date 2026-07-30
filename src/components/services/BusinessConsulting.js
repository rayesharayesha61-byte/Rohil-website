import React from "react";
import { Box, Typography, Container, Grid, Divider,Button} from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

export default function BusinessConsulting() {
  const zigZagSections = [
    {
      title: "Business Consulting",
      text: "At Rohil Technologies, we go beyond traditional consulting. Our approach is holistic, combining deep industry knowledge with innovative strategies to drive meaningful business transformation.We provide tailored solutions that address the unique challenges of small, medium, and large-scale companies, helping them achieve sustainable growth and competitive advantage.",
      img: "/service/businessConsulting1.png",
      imgLeft: true,
    },
    {
      title: "Enhancing Customer Experience",
      text: "Rohil Technologies provides Business Solutions that elevate customer experience. In today’s competitive market, customers expect personalized and seamless interactions. Our CRM systems, marketing automation tools, and analytics solutions help track customer behavior, provide actionable insights, and tailor offerings to meet client expectations. By leveraging data-driven strategies, Rohil Technologies ensures businesses can deliver targeted marketing campaigns, exceptional service, and loyalty programs that foster long-term customer relationships.",
      img: "/service/businessConsulting2.png",
      imgLeft: false,
    },
  ];
  const services = [
    {
      title: "Strategic Planning",
      text: "Expert guidance to optimize operations and long-term success.",
      icon: "mdi:clipboard-text",
    },
    {
      title: "Market Research",
      text: "Identify industry trends, customer behavior, and competitive landscapes.",
      icon: "mdi:domain",
    },
    {
      title: "Business Strategy",
      text: "Customized strategies to align operations, resources, and opportunities.",
      icon: "mdi:file-document",
    },
    {
      title: "Financial Consulting",
      text: "Investment planning, risk management, and business valuation services.",
      icon: "mdi:currency-usd",
    },
    {
      title: "Operations Improvement",
      text: "Optimize processes, reduce costs, and streamline workflows.",
      icon: "mdi:tools",
    },
    {
      title: "HR Consulting",
      text: "Recruit, retain, and manage talent effectively.",
      icon: "mdi:account-group",
    },
    {
      title: "Technology Consulting",
      text: "Guide digital transformations with latest technology.",
      icon: "mdi:desktop-classic",
    },
    {
      title: "Brand Management",
      text: "Enhance brand positioning, market perception, and customer engagement.",
      icon: "mdi:palette",
    },
    {
      title: "Legal Consulting",
      text: "Navigate regulations, contracts, and dispute resolutions.",
      icon: "mdi:gavel",
    },
    {
      title: "Supply Chain Consulting",
      text: "Optimize inventory, logistics, and reduce costs.",
      icon: "mdi:truck",
    },
    {
      title: "Project Management",
      text: "Ensure timely delivery of projects within scope, budget, and quality standards.",
      icon: "mdi:clipboard-check",
    },
    {
      title: "Marketing Consulting",
      text: "Develop marketing strategies to enhance visibility and revenue.",
      icon: "mdi:bullhorn",
    },
    {
      title: "Cost Reduction",
      text: "Identify initiatives to improve profitability and optimize resources.",
      icon: "mdi:cash",
    },
    {
      title: "Risk Management",
      text: "Assess and mitigate business risks to protect assets and reputation.",
      icon: "mdi:shield-check",
    },
    {
      title: "Innovation Consulting",
      text: "Drive innovation and implement creative strategies to stay ahead of the competition.",
      icon: "mdi:lightbulb-on",
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/businessConsulting.png')",
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
    fontSize: { xs: "2rem", md: "3rem" },
  }}
>
  Business Consulting Services Company | Rohil Technologies
</Typography>
        </Box>
      </Box>
<Container sx={{ py: 6 }}>
  <Typography
    variant="h2"
    sx={{
      color: colors.darkBlue,
      fontWeight: "bold",
      mb: 3,
    }}
  >
    Professional Business Consulting Services
  </Typography>

  <Typography sx={{ color: colors.grey, lineHeight: 2 }}>
    At <strong>Rohil Technologies</strong>, we provide professional
    <strong> Business Consulting Services</strong> that help startups,
    SMEs, and enterprises achieve sustainable growth and operational
    excellence. Our experienced business consultants analyze business
    challenges, identify growth opportunities, and develop customized
    strategies that improve productivity, profitability, and long-term
    success.
  </Typography>

  <Typography sx={{ color: colors.grey, mt: 3, lineHeight: 2 }}>
    Our <strong>Business Consulting Company</strong> specializes in
    strategic planning, business process optimization, digital
    transformation consulting, market research, business automation,
    ERP consulting, CRM implementation, cloud transformation,
    workflow automation, and technology consulting. We help
    organizations streamline operations, reduce costs, improve
    efficiency, and implement innovative business solutions that
    deliver measurable results.
  </Typography>

  <Typography sx={{ color: colors.grey, mt: 3, lineHeight: 2 }}>
    Our <strong>Business Strategy Consulting</strong> services focus
    on improving customer experience, enhancing operational
    performance, increasing return on investment, and supporting
    long-term business success. Whether you are a startup or a large
    enterprise, Rohil Technologies delivers end-to-end consulting
    solutions tailored to your business goals.
  </Typography>
</Container>
      {/* ===== Intro Section ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: section.imgLeft ? "row" : "row-reverse",
              },
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src={section.img}
                alt={section.title}
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
              >
                {section.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>
                {section.text}
              </Typography>
            </Box>
          </Box>
          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 8 }} />}
        </Container>
      ))}

      <Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
        <Container>
          <Container sx={{ py: 4 }}>
            {/* Section Heading */}
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 6,
              }}
            >
              Our Consulting Services
            </Typography>

            {/* Services Cards */}
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
                  <Typography sx={{ color: colors.grey }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>

          <Divider sx={{ my: 6 }} />

          {/* Our Expertise */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Our Expertise
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Change Management
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Broad skills in organizational theory, economics, and technology
              to ensure effective project scope, management, and staff training.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Management Consulting
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Combines theoretical knowledge and practical experience to help
              businesses gain advantages using IT solutions.
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* What We Do */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            What We Do
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            We provide unique solutions from day one to help clients achieve
            sustained growth and emphasize mobilization.
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li">
              Process optimization and IT administration
            </Typography>
            <Typography component="li">
              Change management and project management
            </Typography>
            <Typography component="li">
              Professional business executives and support
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Why Choose Us */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Why Choose Us
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Strong Partnerships
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Robust partnerships help companies achieve their goals through
              effective problem-solving techniques.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue }}
            >
              Comprehensive IT Consulting
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              Business consulting services include accounting, advertising,
              auditing, business writing, career counselling, and
              hardware/software solutions.
            </Typography>
          </Box>
        </Container>
          <Box
  sx={{
    mt: 8,
    py: 5,
    px: 3,
    borderRadius: 4,
    background: "linear-gradient(135deg, #f8fbff, #eef6ff)",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  }}
>
  <Typography
    component="h2"
    variant="h4"
    sx={{
      fontWeight: "bold",
      color: colors.darkBlue,
      mb: 1,
    }}
  >
    Explore Related Services
  </Typography>

  <Typography
    sx={{
      color: colors.grey,
      mb: 4,
      maxWidth: 600,
      mx: "auto",
    }}
  >
    Discover more solutions from Rohil Technologies to accelerate your
    business growth.
  </Typography>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 2,
    }}
  >
    {[
      { name: "Web Development", link: "/web-technologies" },
      { name: "Mobile App Development", link: "/mobile" },
      { name: "Contact Us", link: "/contact" },
    ].map((item) => (
      <Button
        key={item.name}
        component={Link}
        to={item.link}
        variant="outlined"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: "50px",
          textTransform: "none",
          fontWeight: 600,
          borderColor: colors.primary,
          color: colors.primary,
          transition: "0.3s",
          "&:hover": {
            backgroundColor: colors.primary,
            color: "#fff",
            transform: "translateY(-4px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        {item.name}
      </Button>
    ))}
  </Box>
</Box>
      </Box>
    
    </>
  );
}
