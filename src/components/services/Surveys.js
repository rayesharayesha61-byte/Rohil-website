import React from "react";
import { Box, Typography, Container, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import colors from "../Colors";
import { Helmet } from "react-helmet-async";
export default function Surveys() {
  const zigZagSections = [
    {
      title: "About Our Surveys",
      text: "When you want to assess your success, understand customer opinions, or learn more about a product or initiative, you need reliable data and actionable feedback. At Rohil Technologies Operations, we provide professional Business Survey Services for organizations of different sizes and industries. Our survey solutions help businesses collect meaningful information from customers, employees, target audiences, and markets.",
      img: "/service/survey2.png",
      imgLeft: true,
    },
    {
      title: "Accurate, Flexible & Confidential",
      text: "Surveys are an important source of business data and insights. We conduct online and traditional surveys while focusing on accuracy, flexibility, data organization, and confidentiality. Depending on your requirements, we can work with tools such as Google Forms, SurveyMonkey, Checkbox, Zoho Survey, or customized in-house survey platforms.",
      img: "/service/survey1.png",
      imgLeft: false,
    },
  ];

  const surveyServices = [
    {
      title: "Customer Satisfaction Surveys",
      text: "Understand customer experiences, satisfaction levels, expectations, and areas that require improvement.",
      icon: "mdi:account-star-outline",
    },
    {
      title: "Employee Feedback Surveys",
      text: "Collect employee opinions and feedback to understand workplace experiences and identify opportunities for improvement.",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Market Research Surveys",
      text: "Gather valuable market information to understand customer preferences, industry trends, and business opportunities.",
      icon: "mdi:chart-line",
    },
    {
      title: "Product & Service Feedback",
      text: "Measure customer opinions about your products and services and discover ways to improve your offerings.",
      icon: "mdi:message-star-outline",
    },
    {
      title: "Online Business Surveys",
      text: "Create simple and user-friendly online surveys that make collecting responses easier and more efficient.",
      icon: "mdi:poll",
    },
    {
      title: "Custom Survey Solutions",
      text: "Develop customized survey approaches based on your business objectives, audience, questions, and reporting requirements.",
      icon: "mdi:clipboard-text-outline",
    },
  ];

  const benefits = [
    "Customized survey solutions",
    "Simple and user-friendly questionnaires",
    "Structured data collection",
    "Accurate response management",
    "Clear reporting and insights",
    "Business-focused approach",
    "Flexible online and traditional surveys",
    "Confidential handling of survey information",
  ];

  const faqs = [
    {
      question: "What are Business Survey Services?",
      answer:
        "Business Survey Services help organizations collect structured feedback and information from customers, employees, markets, and other target audiences. The collected data can be analyzed to support better business decisions.",
    },
    {
      question: "Can Rohil Technologies create customized surveys?",
      answer:
        "Yes. We can customize survey questions, formats, audiences, data collection methods, and reporting based on your business objectives and information requirements.",
    },
    {
      question: "What types of surveys do you provide?",
      answer:
        "Our survey solutions include customer satisfaction surveys, employee feedback surveys, market research surveys, product and service feedback surveys, online business surveys, and customized research surveys.",
    },
    {
      question: "Do you provide survey data analysis?",
      answer:
        "Yes. Survey responses can be organized and analyzed to identify trends, patterns, customer preferences, employee opinions, and other useful business insights.",
    },
  ];

  return (
    <>
    <Helmet>
  <title>Business Survey Services | Rohil Technologies</title>

  <meta
    name="description"
    content="Rohil Technologies provides professional business survey services, customer feedback, data collection, survey analysis, and reporting solutions. Contact us today."
  />

  <link
    rel="canonical"
    href="https://www.rohiltechnologies.com/operations/survey"
  />
</Helmet>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/survey.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "250px", md: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
            }}
          >
            Business Survey Services
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "750px",
              mx: "auto",
            }}
          >
            Professional survey solutions for collecting valuable feedback,
            business data, and actionable insights.
          </Typography>
        </Box>
      </Box>

      {/* ================= INTRODUCTION ================= */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              textAlign: "center",
              mb: 3,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Business Survey Services
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.9,
              maxWidth: "900px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            Rohil Technologies provides professional Business Survey Services
            to help businesses collect valuable feedback and insights from
            customers, employees, and target audiences. Our solutions support
            better decision-making through structured data collection,
            organized responses, and meaningful analysis. Whether you need to
            understand customer satisfaction, employee opinions, market
            requirements, or product feedback, our survey solutions can be
            customized to your business needs.
          </Typography>
        </Container>
      </Box>

      {/* ================= ZIG ZAG SECTIONS ================= */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          {zigZagSections.map((section, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: section.imgLeft ? "row" : "row-reverse",
                },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
                mb: index !== zigZagSections.length - 1 ? 8 : 0,
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Box
                  component="img"
                  src={section.img}
                  alt={section.title}
                  sx={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: 3,
                    display: "block",
                  }}
                />
              </Box>

              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: colors.darkBlue,
                    mb: 2,
                    fontSize: { xs: "1.7rem", md: "2.2rem" },
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  sx={{
                    color: colors.grey,
                    lineHeight: 1.9,
                  }}
                >
                  {section.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* ================= SURVEY SERVICES ================= */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 2,
            }}
          >
            Our Survey Services
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: colors.grey,
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            We create customized surveys based on your business objectives,
            target audience, and information requirements. Our Business Survey
            Services can support customer research, employee feedback, market
            research, and product or service evaluation.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {surveyServices.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Icon
                  icon={item.icon}
                  width="45"
                  height="45"
                  color={colors.primary}
                />

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: colors.darkBlue,
                    mt: 2,
                    mb: 1.5,
                    fontSize: "1.25rem",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: colors.grey,
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= DATA ANALYSIS ================= */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 3,
              textAlign: "center",
            }}
          >
            Survey Data Analysis
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.9,
              maxWidth: "900px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            Collecting responses is only the first step. Rohil Technologies
            organizes and analyzes survey data to identify important trends,
            patterns, customer preferences, and employee insights. We help
            transform survey responses into useful information that businesses
            can understand and apply. The results can be presented in a clear
            and easy-to-understand format, helping decision-makers identify
            areas of improvement and make more informed business decisions.
          </Typography>
        </Container>
      </Box>

      {/* ================= BENEFITS ================= */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              textAlign: "center",
              mb: 5,
            }}
          >
            Benefits of Business Survey Services
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: colors.lightGrey,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Icon
                  icon="mdi:check-circle-outline"
                  width="25"
                  height="25"
                  color={colors.primary}
                />

                <Typography
                  sx={{
                    color: colors.darkBlue,
                    fontWeight: 600,
                  }}
                >
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= WHY CHOOSE US ================= */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              textAlign: "center",
              mb: 3,
            }}
          >
            Why Choose Rohil Technologies?
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.9,
              maxWidth: "900px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            Rohil Technologies focuses on delivering survey solutions that
            match the specific requirements of each business. From planning
            questionnaires and collecting responses to organizing data and
            presenting useful insights, we follow a structured and
            business-focused approach. Our flexible survey solutions can help
            organizations understand their audiences and use feedback to
            improve products, services, customer experiences, and internal
            processes.
          </Typography>
        </Container>
      </Box>

      {/* ================= FAQ ================= */}
      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              textAlign: "center",
              mb: 5,
            }}
          >
            Frequently Asked Questions
          </Typography>

          {faqs.map((faq, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  fontSize: { xs: "1.15rem", md: "1.35rem" },
                  mb: 1,
                }}
              >
                {faq.question}
              </Typography>

              <Typography
                sx={{
                  color: colors.grey,
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </Typography>

              {index !== faqs.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Container>
      </Box>

      {/* ================= INTERNAL LINKS ================= */}
      <Box sx={{ backgroundColor: colors.lightGrey, py: 7 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4,
            }}
          >
            Explore Our Business Solutions
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              component={Link}
              to="/consulting/business-analytics"
              variant="outlined"
            >
              Business Analytics
            </Button>

            <Button
              component={Link}
              to="/consulting/data-analytics"
              variant="outlined"
            >
              Data Analytics
            </Button>

            <Button
              component={Link}
              to="/consulting/business-consulting"
              variant="outlined"
            >
              Business Consulting
            </Button>

            <Button
              component={Link}
              to="/operations/business-process-solutions"
              variant="outlined"
            >
              Business Process Solutions
            </Button>

            <Button component={Link} to="/contact" variant="outlined">
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: "center",
          backgroundColor: colors.darkBlue,
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Get Started With Our Survey Services
          </Typography>

          <Typography
            sx={{
              mb: 4,
              lineHeight: 1.8,
              opacity: 0.9,
            }}
          >
            Whether you need customer feedback, employee opinions, or market
            insights, Rohil Technologies can help turn survey responses into
            useful information for better business decisions. Get in touch
            with us to discuss your survey requirements and build a
            data-driven solution for your business.
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: colors.primary,
              "&:hover": {
                backgroundColor: colors.primary,
              },
            }}
          >
            Contact Us Today
          </Button>
        </Container>
      </Box>
    </>
  );
}






