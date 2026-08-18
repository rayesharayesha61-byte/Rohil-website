// src/components/services/EmailMarketing.js
import React from "react";
import { Box, Typography, Container, Grid, Divider, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function EmailMarketing() {
  const zigZagSections = [
    {
      title: "Bulk Email Marketing Solutions",
      text: "At Rohil Technologies, we offer comprehensive bulk email marketing solutions to help you reach a wider audience efficiently. Our targeted email campaigns are designed to enhance your business's customer engagement and boost conversions while ensuring high deliverability rates. From promotional blasts to regular newsletters, we ensure your message resonates with your audience.",
      img: "/service/emailMarketing2.png",
      imgLeft: true,
    },
    {
      title: "Email Campaign Management",
      text: "Our professional email campaign management services handle everything from strategy and content creation to execution and analytics. We create visually appealing, mobile-responsive email templates that align with your brand, perform A/B testing to optimize subject lines and content, and provide detailed reporting to track open rates, click-throughs, and overall campaign performance.",
      img: "/service/emailMarketing1.png",
      imgLeft: false,
    },
    {
      title: "Email Automation Services",
      text: "Streamline your marketing workflows with our advanced email automation services. We set up smart drip campaigns, welcome series, abandoned cart reminders, and post-purchase follow-ups. Our automated workflows reduce manual effort while ensuring consistent engagement, delivering the right message to the right person at the perfect time.",
      img: "/service/emailMarketing2.png",
      imgLeft: true,
    },
    {
      title: "Lead Nurturing & Customer Engagement",
      text: "Transform prospects into loyal customers with our lead nurturing strategies. We segment your audience based on demographics and behavior to deliver highly personalized content. By providing value and building relationships over time, our customer engagement email marketing strategies help increase ROI and customer retention.",
      img: "/service/emailMarketing1.png",
      imgLeft: false,
    }
  ];

  const typesOfCampaigns = [
    { title: "Promotional Emails", icon: "mdi:sale" },
    { title: "Newsletter Campaigns", icon: "mdi:newspaper-variant-outline" },
    { title: "Lead Nurturing Emails", icon: "mdi:account-heart-outline" },
    { title: "Transactional Emails", icon: "mdi:receipt-text-outline" },
    { title: "Automated Workflows", icon: "mdi:robot-outline" },
  ];

  const processSteps = [
    { title: "Audience Segmentation", text: "Grouping subscribers for targeted messaging." },
    { title: "Campaign Planning", text: "Defining goals, timelines, and email strategies." },
    { title: "Content Creation", text: "Designing templates and writing compelling copy." },
    { title: "Automation Setup", text: "Configuring triggers and automated sequences." },
    { title: "Performance Tracking", text: "Monitoring open rates, clicks, and conversions." },
  ];

  const benefits = [
    { title: "Better Customer Engagement", icon: "mdi:account-group-outline" },
    { title: "Increased ROI", icon: "mdi:chart-line" },
    { title: "Lead Generation", icon: "mdi:account-arrow-right-outline" },
    { title: "Customer Retention", icon: "mdi:shield-check-outline" },
  ];

  const tools = ["Mailchimp", "HubSpot", "Zoho Campaigns", "Sendinblue", "ActiveCampaign"];

  const faqs = [
    {
      question: "What is email marketing and why is it important?",
      answer: "Email marketing is a digital marketing strategy that involves sending emails to prospects and customers. It's important because it directly reaches your audience, builds relationships, and has one of the highest ROIs among marketing channels."
    },
    {
      question: "How do you improve email open rates?",
      answer: "We improve open rates by crafting compelling subject lines, segmenting your audience for relevance, personalizing the email content, and testing the best send times."
    },
    {
      question: "Can you help set up automated email sequences?",
      answer: "Yes, our email automation services cover setting up drip campaigns, welcome emails, abandoned cart sequences, and re-engagement workflows."
    }
  ];

  const internalLinks = [
    { name: "Home", path: "/" },
    { name: "Business Development", path: "/business/business-development" },
    { name: "Business Analytics", path: "/business/data-analytics" },
    { name: "Website Development", path: "/software-development" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Contact Us", path: "/contact" },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Email Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "Rohil Technologies",
          "url": "https://www.rohiltechnologies.com"
        },
        "areaServed": "India"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
    <Helmet>
  <title>Email Marketing Services | Rohil Technologies</title>

  <meta
    name="description"
    content="Rohil Technologies provides result-driven email marketing services to help businesses engage customers, generate leads, and increase conversions."
  />

  <link
    rel="canonical"
    href="https://www.rohiltechnologies.com/business/email-marketing"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <script type="application/ld+json">
    {JSON.stringify(schemaData)}
  </script>
</Helmet>

      {/* ===== Hero Section ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/emailMarketing.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "350px", md: "450px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, backgroundColor: "rgba(0, 0, 0, 0.5)", p: 4, borderRadius: 2 }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: { xs: "2.2rem", md: "3.5rem" } }}
          >
            Email Marketing Services
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" }, mt: 1, fontWeight: 300 }}
          >
            Boost Your Email Campaign Performance
          </Typography>
          <Button 
            variant="contained" 
            component={Link} 
            to="/contact" 
            sx={{ 
              mt: 3, 
              backgroundColor: colors.primary, 
              '&:hover': { backgroundColor: colors.darkBlue },
              fontWeight: "bold",
              px: 4,
              py: 1.5
            }}
          >
            Get Free Email Marketing Consultation
          </Button>
        </Box>
      </Box>
<Container sx={{ py: 7, textAlign: "center" }}>
  <Typography
    variant="h2"
    component="h2"
    sx={{
      fontWeight: "bold",
      color: colors.darkBlue,
      mb: 3,
      fontSize: { xs: "2rem", md: "2.5rem" },
    }}
  >
    Professional Email Marketing Solutions
  </Typography>

  <Typography
    sx={{
      color: colors.grey,
      maxWidth: "850px",
      mx: "auto",
      fontSize: "1.1rem",
      lineHeight: 1.8,
    }}
  >
    Connect with your audience, build lasting relationships, and drive
    measurable business growth with professional email marketing services
    from Rohil Technologies. We help businesses create meaningful email
    campaigns that reach the right audience with relevant and engaging
    messages.
  </Typography>

  <Typography
    sx={{
      color: colors.grey,
      maxWidth: "850px",
      mx: "auto",
      mt: 3,
      fontSize: "1.1rem",
      lineHeight: 1.8,
    }}
  >
    Our customized email marketing strategies are designed around your
    business goals, target audience, and customer journey. From campaign
    planning and content creation to automation and performance tracking,
    we manage the complete email marketing process.
  </Typography>
</Container>
      {/* ===== Overview Section ===== */}
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 3, fontSize: "2.5rem" }}>
          Email Marketing Strategy
        </Typography>
        <Typography sx={{ color: colors.grey, maxWidth: "800px", mx: "auto", fontSize: "1.1rem", lineHeight: 1.8 }}>
          Email marketing remains one of the most effective digital channels to support business growth. 
          Whether you need bulk email marketing services for businesses in India or automated email marketing solutions globally, 
          Rohil Technologies provides comprehensive strategies. We help you connect directly with your audience, 
          build lasting relationships, and drive sustainable revenue growth through professional email marketing services.
        </Typography>
      </Container>

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
                style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h2"
                sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue, fontSize: "2.2rem" }}
              >
                {section.title}
              </Typography>
              <Typography sx={{ color: colors.grey, lineHeight: 1.8, fontSize: "1.05rem" }}>
                {section.text}
              </Typography>
            </Box>
          </Box>
          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 8 }} />}
        </Container>
      ))}

      {/* ===== Types & Benefits Section ===== */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: 8, mt: 4 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4, fontSize: "2rem" }}>
                Types of Email Campaigns
              </Typography>
              <Grid container spacing={2}>
                {typesOfCampaigns.map((type, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, transition: "0.3s", "&:hover": { transform: "translateY(-3px)", boxShadow: 3 } }}>
                      <Icon icon={type.icon} width={30} height={30} color={colors.primary} />
                      <Typography sx={{ fontWeight: "bold", color: colors.darkBlue }}>{type.title}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4, fontSize: "2rem" }}>
                Business Benefits
              </Typography>
              <Grid container spacing={2}>
                {benefits.map((benefit, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, backgroundColor: "#fff", borderRadius: 2, boxShadow: 1, transition: "0.3s", "&:hover": { transform: "translateY(-3px)", boxShadow: 3 } }}>
                      <Icon icon={benefit.icon} width={30} height={30} color={colors.primary} />
                      <Typography sx={{ fontWeight: "bold", color: colors.darkBlue }}>{benefit.title}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===== Process & Tools Section ===== */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: colors.darkBlue, mb: 6, fontSize: "2.2rem" }}>
          Our Email Marketing Process
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {processSteps.map((step, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box sx={{ textAlign: "center", p: 4, border: `1px solid ${colors.lightGrey}`, borderRadius: 3, height: "100%", backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <Typography variant="h1" sx={{ color: colors.primary, opacity: 0.15, mb: -4, fontSize: "5rem", fontWeight: "bold" }}>0{i + 1}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2, position: "relative", zIndex: 1 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: colors.grey }}>{step.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4, fontSize: "1.8rem" }}>
            Tools & Platforms We Use
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            {tools.map((tool, i) => (
              <Box key={i} sx={{ px: 4, py: 1.5, backgroundColor: colors.lightGrey, borderRadius: 8, fontWeight: "bold", color: colors.darkBlue, border: "1px solid #e0e0e0" }}>
                {tool}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* ===== Why Choose Us Section ===== */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
        <Container>
          <Typography variant="h2" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 6, textAlign: "center", fontSize: "2.5rem" }}>
            Why Choose Rohil Technologies
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3, height: "100%", boxShadow: 2 }}>
                <Icon icon="mdi:target" width={40} height={40} color={colors.primary} style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}>Targeted Campaigns</Typography>
                <Typography sx={{ color: colors.grey }}>We deliver personalized messages to the right audience segment, ensuring stronger engagement and higher conversion rates.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3, height: "100%", boxShadow: 2 }}>
                <Icon icon="mdi:chart-bar" width={40} height={40} color={colors.primary} style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}>Proven Results & Case Studies</Typography>
                <Typography sx={{ color: colors.grey }}>Our campaigns consistently demonstrate increased ROI, open rates, and click-through metrics for businesses across industries.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3, height: "100%", boxShadow: 2 }}>
                <Icon icon="mdi:lifebuoy" width={40} height={40} color={colors.primary} style={{ marginBottom: "16px" }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}>Comprehensive Support</Typography>
                <Typography sx={{ color: colors.grey }}>From initial strategy formulation to execution and performance tracking, we offer end-to-end professional email marketing services.</Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button 
              variant="contained" 
              component={Link} 
              to="/contact" 
              size="large"
              sx={{ backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.darkBlue }, fontWeight: "bold", px: 4, py: 1.5 }}
            >
              Start Your Email Campaign Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ===== FAQ Section ===== */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 6, textAlign: "center", fontSize: "2.2rem" }}>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2, boxShadow: 1, '&:before': { display: 'none' }, borderRadius: 2, overflow: "hidden" }}>
              <AccordionSummary
                expandIcon={<Icon icon="mdi:chevron-down" width={24} />}
                sx={{ backgroundColor: "#f8f9fa", p: 2 }}
              >
                <Typography sx={{ fontWeight: "bold", color: colors.darkBlue, fontSize: "1.1rem" }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography sx={{ color: colors.grey, lineHeight: 1.7 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      <Divider />
<Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
  <Container>
    <Typography
      variant="h2"
      component="h2"
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        color: colors.darkBlue,
        mb: 5,
      }}
    >
      Our Email Marketing Approach
    </Typography>

    <Grid container spacing={2}>
  {[
    "Understand your business goals and target audience",
    "Develop a suitable email marketing strategy",
    "Create engaging and relevant email content",
    "Segment audiences for better targeting",
    "Set up automated customer journeys",
    "Monitor campaign performance",
    "Analyze engagement and conversion data",
    "Continuously improve future campaigns",
  ].map((item, index) => (
    <Grid
      item
      xs={6}
      sm={6}
      md={3}
      key={index}
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: {
            xs: "180px",
            sm: "190px",
            md: "210px",
          },
          backgroundColor: "#fff",
          p: {
            xs: 2,
            sm: 3,
          },
          borderRadius: 2,
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxSizing: "border-box",

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 3,
          },
        }}
      >
        <Icon
          icon="mdi:check-circle-outline"
          width={32}
          height={32}
          color={colors.primary}
        />

        <Typography
          component="h3"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: colors.darkBlue,
            fontSize: {
              xs: "0.85rem",
              sm: "0.95rem",
              md: "1rem",
            },
            lineHeight: 1.4,
          }}
        >
          {item}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>
  </Container>
</Box>
<Container sx={{ py: 8 }}>
  <Typography
    variant="h2"
    component="h2"
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      color: colors.darkBlue,
      mb: 3,
      fontSize: { xs: "2rem", md: "2.5rem" },
    }}
  >
    Benefits of Email Marketing
  </Typography>

  <Typography
    sx={{
      textAlign: "center",
      maxWidth: "850px",
      mx: "auto",
      color: colors.grey,
      lineHeight: 1.8,
      mb: 5,
      px: { xs: 1, md: 0 },
    }}
  >
    A well-planned email strategy can help businesses maintain regular
    customer communication while supporting long-term growth. It can
    improve customer engagement, strengthen brand relationships, generate
    qualified leads, promote products or services, and encourage repeat
    business.
  </Typography>

 <Grid container spacing={2}>
  {[
    {
      title: "Better Customer Engagement",
      icon: "mdi:account-group-outline",
    },
    {
        title: "Lead Generation",
        icon: "mdi:account-arrow-right-outline",
      },
    {
      title: "Customer Retention",
      icon: "mdi:account-heart-outline",
    },
    {
      title: "Increased Conversions",
      icon: "mdi:chart-line",
    },
  ].map((benefit, index) => (
    <Grid item xs={6} sm={6} md={3} key={index}>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "145px", sm: "170px", md: "190px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
          boxSizing: "border-box",

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 5,
          },
        }}
      >
        <Icon
          icon={benefit.icon}
          width={35}
          height={35}
          color={colors.primary}
        />

        <Typography
          component="h3"
          sx={{
            mt: 1.5,
            fontWeight: "bold",
            color: colors.darkBlue,
            fontSize: {
              xs: "0.85rem",
              sm: "1rem",
              md: "1.1rem",
            },
            lineHeight: 1.4,
          }}
        >
          {benefit.title}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>
</Container>
<Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
  <Container sx={{ textAlign: "center" }}>
    <Typography
      variant="h3"
      component="h2"
      sx={{
        fontWeight: "bold",
        color: colors.darkBlue,
        mb: 3,
      }}
    >
      Grow Your Business with Smarter Email Communication
    </Typography>

    <Typography
      sx={{
        maxWidth: "850px",
        mx: "auto",
        color: colors.grey,
        lineHeight: 1.8,
        fontSize: "1.1rem",
      }}
    >
      Whether you are looking to improve customer engagement, nurture leads,
      promote your services, or build a stronger digital presence, Rohil
      Technologies can help you develop an effective email marketing
      strategy.
    </Typography>

    <Typography
      sx={{
        maxWidth: "850px",
        mx: "auto",
        mt: 2,
        color: colors.grey,
        lineHeight: 1.8,
        fontSize: "1.1rem",
      }}
    >
      Partner with Rohil Technologies for customized email marketing
      solutions designed around your business objectives and audience.
      Let us help you turn email communication into a valuable channel for
      sustainable business growth.
    </Typography>

    <Button
      variant="contained"
      component={Link}
      to="/contact"
      sx={{
        mt: 4,
        backgroundColor: colors.primary,
        "&:hover": {
          backgroundColor: colors.darkBlue,
        },
        fontWeight: "bold",
        px: 5,
        py: 1.5,
      }}
    >
      Get Started With Email Marketing
    </Button>
  </Container>
</Box>
      {/* ===== Internal Linking ===== */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 4, fontSize: "1.8rem" }}>
          Explore More Services
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
      </Container>
    </>
  );
}
