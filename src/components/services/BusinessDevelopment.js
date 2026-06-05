// src/components/services/BusinessDevelopment.js
import React from "react";
import { Box, Typography, Container, Grid, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function BusinessDevelopment() {
  const zigZagSections = [
    {
      title: "Empowering Business Growth",
      text: "At Rohil Technologies, we deliver result-driven business development services designed to accelerate growth, improve profitability, and strengthen long-term market success. Our expert team helps businesses identify growth opportunities, build strategic partnerships, optimize operations, and implement scalable business strategies that drive measurable outcomes. We combine technology, innovation, and market intelligence to help organizations achieve sustainable business growth, improve customer acquisition, and gain a competitive edge in local and global markets.",
      img: "/service/businessDevelopment1.png",
      imgLeft: true,
    },
    {
      title: "Accelerating Market Expansion",
      text: "Rohil Technologies empowers organizations to expand into new markets with confidence through advanced market research, competitor analysis, and data-driven business strategies. Whether entering new territories or scaling existing operations, we provide strategic solutions that deliver measurable business success.",
      img: "/service/businessDevelopment2.png",
      imgLeft: false,
    },
  ];

  const services = [
    { title: "Strategic Business Planning", text: "Develop comprehensive growth-focused business strategies aligned with long-term goals, operational efficiency, and market expansion.", icon: "mdi:chart-timeline-variant" },
    { title: "Market Expansion Solutions", text: "Discover untapped markets, target high-value customer segments, and execute successful go-to-market strategies.", icon: "mdi:earth" },
    { title: "Partnership Development", text: "Build valuable partnerships, vendor relationships, and strategic collaborations that improve business scalability and profitability.", icon: "mdi:handshake-outline" },
    { title: "Sales Enablement Strategy", text: "Equip your sales team with modern tools, automation systems, CRM optimization, and actionable insights to improve conversions.", icon: "mdi:chart-line" },
    { title: "Customer Acquisition Services", text: "Implement targeted customer acquisition strategies that attract, convert, and retain ideal clients.", icon: "mdi:account-arrow-right-outline" },
    { title: "Digital Growth Strategy", text: "Increase online visibility through SEO, social media marketing, digital branding, and lead generation campaigns.", icon: "mdi:web" },
    { title: "Product Positioning Strategy", text: "Define clear product positioning and compelling brand messaging that differentiates your business from competitors.", icon: "mdi:bullhorn-outline" },
    { title: "Financial Growth Consulting", text: "Improve financial performance through cost optimization, strategic planning, and resource allocation.", icon: "mdi:finance" },
    { title: "Innovation and R&D Support", text: "Accelerate business transformation through innovation consulting and technology-driven solutions.", icon: "mdi:lightbulb-on-outline" },
    { title: "Business Process Optimization", text: "Enhance workflow efficiency, productivity, and operational performance with process automation.", icon: "mdi:cog-outline" },
    { title: "Brand Expansion Strategy", text: "Strengthen brand authority and global presence through strategic branding initiatives.", icon: "mdi:palette-outline" },
    { title: "Lead Generation Services", text: "Build automated lead generation pipelines that consistently deliver qualified business opportunities.", icon: "mdi:account-search-outline" },
    { title: "Risk and Opportunity Analysis", text: "Identify potential challenges and uncover new opportunities using predictive analytics and strategic forecasting.", icon: "mdi:shield-check-outline" },
    { title: "Project Management Solutions", text: "Deliver projects successfully with efficient planning, execution, and performance monitoring.", icon: "mdi:clipboard-check-outline" },
    { title: "Sustainability Consulting", text: "Implement responsible business practices that support long-term sustainable growth.", icon: "mdi:leaf" },
  ];

  const internalLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Business Consulting", path: "/consulting/business-consulting" },
    { name: "Data Analytics", path: "/consulting/data-analytics" },
    { name: "Software Development", path: "/software-development" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "CRM Software", path: "/crm" },
    { name: "Contact Us", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <Helmet>
        <title>Business Development Services | Rohil Technologies</title>
        <meta name="description" content="Drive business growth with Rohil Technologies’ expert business development services including market expansion, lead generation, partnerships, digital growth, and strategic consulting." />
        <link rel="canonical" href="https://www.rohiltechnologies.com/business/business-development" />
      </Helmet>

      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/businessDevelopment.png')",
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
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Business Development Services by Rohil Technologies
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mt: 1, fontWeight: 300 }}
          >
            Empowering Business Growth with Strategic Innovation
          </Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
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
              <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
                {section.text}
              </Typography>
              {index === 1 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ color: colors.grey, mb: 1, fontWeight: "bold" }}>
                    Our business development consultants help businesses:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
                    <Typography component="li">Identify profitable market opportunities</Typography>
                    <Typography component="li">Build strategic alliances and partnerships</Typography>
                    <Typography component="li">Optimize sales and customer acquisition strategies</Typography>
                    <Typography component="li">Improve operational performance</Typography>
                    <Typography component="li">Increase market reach and visibility</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 8 }} />}
        </Container>
      ))}

      {/* ===== Services Section ===== */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 6,
            }}
          >
            Our Business Development Services
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
                <Typography sx={{ color: colors.grey, fontSize: "0.9rem" }}>{item.text}</Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Our Approach */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Our Proven Business Development Approach
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            Our strategic process combines collaboration, innovation, and measurable performance analysis.
          </Typography>

          <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
            <Typography component="li"><b>Market Research and Opportunity Analysis:</b> Comprehensive industry and competitor research to identify growth potential.</Typography>
            <Typography component="li"><b>Strategy Development:</b> Customized business growth plans aligned with organizational goals.</Typography>
            <Typography component="li"><b>Partnership and Relationship Building:</b> Develop strong business alliances for long-term success.</Typography>
            <Typography component="li"><b>Performance Monitoring:</b> Track KPIs and continuously optimize for maximum growth.</Typography>
            <Typography component="li"><b>Continuous Improvement:</b> Adapt strategies based on market changes and performance insights.</Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Why Choose Rohil */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            Why Choose Rohil Technologies for Business Development
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.darkBlue }}>Industry Expertise</Typography>
            <Typography sx={{ color: colors.grey }}>Deep experience across technology, retail, manufacturing, education, and professional services.</Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.darkBlue }}>Data-Driven Decision Making</Typography>
            <Typography sx={{ color: colors.grey }}>Advanced analytics ensure smarter, faster, and more effective business growth decisions.</Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.darkBlue }}>End-to-End Business Support</Typography>
            <Typography sx={{ color: colors.grey }}>From planning to execution, our team provides complete strategic support.</Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.darkBlue }}>Innovation-Focused Growth</Typography>
            <Typography sx={{ color: colors.grey }}>We leverage modern technologies and digital transformation to future-proof your business.</Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.darkBlue }}>Proven Results</Typography>
            <Typography sx={{ color: colors.grey }}>We deliver measurable business performance improvements and sustainable success.</Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* About Section */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}
          >
            About Rohil Technologies
          </Typography>
          <Typography sx={{ color: colors.grey, mb: 2 }}>
            Rohil Technologies delivers innovative software development and business consulting solutions that help organizations streamline operations, improve efficiency, and achieve digital transformation.
          </Typography>
          <Typography variant="body1" sx={{ color: colors.grey, mb: 1, fontWeight: "bold" }}>Our expertise includes:</Typography>
          <Box component="ul" sx={{ pl: 3, color: colors.grey, display: 'flex', flexWrap: 'wrap', gap: '10px 40px' }}>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Business Development</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Software Development</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Mobile App Development</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Web Development</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Digital Marketing</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>CRM & ERP Solutions</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Data Analytics</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>IT Consulting</Typography>
            <Typography component="li" sx={{ flex: '0 0 40%' }}>Business Process Solutions</Typography>
          </Box>
          <Typography sx={{ color: colors.grey, mt: 3 }}>
            We combine technical excellence with strategic business intelligence to empower organizations for long-term digital growth.
          </Typography>

          <Divider sx={{ my: 8 }} />

          {/* Internal Linking */}
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4 }}>
              Explore More
            </Typography>
            <Grid container spacing={2}>
              {internalLinks.map((link, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Link to={link.path} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: colors.primary,
                        "&:hover": { color: colors.darkBlue, textDecoration: "underline" },
                        fontWeight: 500
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
