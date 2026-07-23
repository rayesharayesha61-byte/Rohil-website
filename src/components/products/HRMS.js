// src/components/HRMS.js
import React from "react";
import { Box, Typography, Container, Divider ,Grid,Paper,Chip} from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";
   import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
export default function HRMS() {
  // ===== ZigZag Sections for HRMS Features =====
  const zigZagSections = [
    {
      title: "Employee Management Simplified",
      text: "Rohil Technologies HRMS simplifies how organizations manage their workforce. From employee records and document management to department mapping and job history, everything is centralized in one secure system. Gain instant access to employee data, reduce manual errors, and ensure complete transparency across departments with an intuitive and efficient employee management platform.",
      img: "/products/hrms1.png",
      imgLeft: true,
    },
    {
      title: "Automated Payroll Processing",
      text: "Automate your payroll cycle with precision and accuracy. The HRMS platform handles salary computation, deductions, reimbursements, and tax compliance automatically. Rohil Technologies ensures seamless integration between attendance, leave, and payroll modules, eliminating manual work and errors. Generate payslips in seconds and ensure every employee is paid correctly and on time, every month.",
      img: "/products/hrms2.png",
      imgLeft: false,
    },
    {
      title: "Attendance & Leave Tracking",
      text: "Monitor and manage attendance effortlessly through biometric, web, or mobile tracking systems. The HRMS provides real-time visibility into employee presence, shift schedules, and leave status. Automated approval workflows and smart notifications simplify leave management, allowing HR teams to plan resources efficiently while maintaining consistent workforce productivity and transparency.",
      img: "/products/hrms3.png",
      imgLeft: true,
    },
    {
      title: "Performance Management",
      text: "Drive growth through structured performance reviews and continuous feedback. Rohil HRMS helps define measurable KPIs, automate appraisal cycles, and track individual and team progress. With integrated analytics, managers can evaluate productivity trends, identify top performers, and encourage career development—creating a culture of accountability, engagement, and excellence across the organization.",
      img: "/products/hrms4.png",
      imgLeft: false,
    },
    {
      title: "Recruitment & Onboarding",
      text: "Simplify hiring with an end-to-end recruitment and onboarding solution. From job postings to interview tracking and offer generation, every step is automated. Rohil Technologies HRMS ensures a smooth candidate experience with digital onboarding, reducing manual paperwork and saving time. Empower HR teams to bring new employees onboard faster and more efficiently than ever before.",
      img: "/products/hrms5.png",
      imgLeft: true,
    },
    {
      title: "Analytics & Employee Insights",
      text: "Transform workforce data into actionable insights with powerful analytics dashboards. The HRMS system helps HR teams track key trends such as attrition, attendance, and engagement levels. Rohil Technologies’ intelligent reporting tools enable data-driven decisions, helping organizations identify areas for improvement and optimize human capital strategies with confidence and clarity.",
      img: "/products/hrms6.png",
      imgLeft: false,
    },
  ];

  // ===== Grid Sections (Additional Benefits for HRMS) =====
  const gridSections = [
    {
      title: "Additional Benefits",
      items: [
        {
          title: "Data Security & Privacy",
          text: "Protect sensitive employee information with advanced encryption and role-based access control.",
          icon: "mdi:shield-lock-outline",
        },
        {
          title: "Employee Self-Service",
          text: "Allow employees to manage their profiles, view payslips, apply for leaves, and track attendance on their own.",
          icon: "mdi:account-badge-outline",
        },
        {
          title: "Regulatory Compliance",
          text: "Stay compliant with local labor laws, PF, ESI, and tax regulations automatically.",
          icon: "mdi:scale-balance",
        },
        {
          title: "Mobile Accessibility",
          text: "Access HRMS features anywhere, anytime through a responsive web and mobile-friendly interface.",
          icon: "mdi:cellphone-check",
        },
        {
          title: "Customizable Workflows",
          text: "Easily configure approval chains, notifications, and workflows to suit your organization’s unique policies.",
          icon: "mdi:cog-outline",
        },
        {
          title: "Seamless Integration",
          text: "Integrate HRMS with existing ERP, accounting, or attendance systems to achieve a unified business environment.",
          icon: "mdi:link-variant",
        },
      ],
    },
  ];

  return (
    <>
 
<Helmet>
  <title>
    HRMS Software Solutions | Human Resource Management System | Rohil Technologies
  </title>

  <meta
    name="description"
    content="Rohil Technologies provides HRMS software solutions for employee management, payroll, attendance, leave tracking, recruitment, onboarding, performance management and HR automation."
  />

  <meta
    name="keywords"
    content="HRMS Software, Human Resource Management System, Payroll Software, Attendance Management, Employee Management, Leave Management, HR Software"
  />

  <link
    rel="canonical"
    href="https://www.rohiltechnologies.com/hrms"
  />
  <script type="application/ld+json">
{`
{
 "@context":"https://schema.org",
 "@type":"Service",
 "name":"HRMS Software",
 "provider":{
   "@type":"Organization",
   "name":"Rohil Technologies",
   "url":"https://www.rohiltechnologies.com"
 },
 "serviceType":"Human Resource Management Software",
 "areaServed":"Worldwide"
}
`}
</script>
<link
rel="canonical"
href="https://www.rohiltechnologies.com/hrms"
/>
</Helmet>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/products/hrms.png')",
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
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
         <Typography
  component="h1"
  variant="h2"
  sx={{
    fontWeight: "bold",
    fontSize: { xs: "2rem", md: "3rem" },
  }}
>
  HRMS Software Solutions
</Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: 5 }}>
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

      {/* ===== Grid Sections ===== */}
      {gridSections.map((section, idx) => (
        <Box key={idx} sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
          <Container>
            <Typography
            component="h2"
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 6,
              }}
            >
              {section.title}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 4,
              }}
            >
              {section.items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
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
                  component="h3"
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
        </Box>
      ))}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
  <Container maxWidth="lg">
    <Grid container spacing={6} alignItems="center">
      <Grid item xs={12} md={7}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            color: colors.darkBlue,
            mb: 3,
          }}
        >
          HRMS Software Solutions for Modern Businesses
        </Typography>

        <Typography
          sx={{
            color: colors.grey,
            lineHeight: 1.9,
            mb: 3,
          }}
        >
          Manage your workforce efficiently with Rohil Technologies HRMS
          Software, a smart and scalable solution designed to simplify human
          resource management. Automate employee records, attendance, leave,
          payroll, recruitment, and performance management through one secure
          cloud platform.
        </Typography>

        <Typography
          sx={{
            color: colors.grey,
            lineHeight: 1.9,
          }}
        >
          Whether you are a startup, SME, or enterprise, our Human Resource
          Management System improves productivity, reduces manual work, and
          streamlines HR operations from hiring to employee exit.
        </Typography>
      </Grid>

      <Grid item xs={12} md={5}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            height: "100%",
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            sx={{
              fontWeight: 700,
              color: colors.darkBlue,
              mb: 3,
            }}
          >
            Key Features
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            {[
              "Employee Management",
              "Attendance",
              "Leave Management",
              "Payroll",
              "Recruitment",
              "Performance",
              "Self Service",
              "Expense",
              "Analytics",
              
            ].map((feature) => (
              <Chip
                key={feature}
                label={feature}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>

    <Typography
      sx={{
        mt: 5,
        color: colors.grey,
        lineHeight: 2,
      }}
    >
      Our HRMS software integrates seamlessly with business processes,
      automating workflows while ensuring compliance with organizational
      policies. Employees can access payslips, update profiles, apply for
      leave, and track attendance through a secure self-service portal.
    </Typography>

    <Typography
      sx={{
        mt: 3,
        color: colors.grey,
        lineHeight: 2,
      }}
    >
      Rohil Technologies delivers customizable HRMS solutions for startups,
      SMEs, and enterprises. Improve workforce management, save administrative
      time, and enhance employee experience with a scalable HR platform.
    </Typography>
  </Container>
</Box>
<Box
  sx={{
    py: { xs: 6, md: 8 },
    bgcolor: colors.lightGrey,
  }}
>
  <Container maxWidth="lg">
    <Typography
      component="h2"
      variant="h4"
      sx={{
        textAlign: "center",
        fontWeight: 700,
        color: colors.darkBlue,
        mb: 5,
      }}
    >
      Explore More Services
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(4,1fr)",
        },
        gap: 2,
      }}
    >
      {[
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Web Development", path: "/web-technologies" },
        { name: "Mobile Apps", path: "/mobile" },
        { name: "ERP Solutions", path: "/erp" },
        { name: "CRM Software", path: "/crm" },
     
        { name: "SEO Services", path: "/digital-marketing/seo" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" },
      ].map((item) => (
        <Paper
          key={item.name}
          component={Link}
          to={item.path}
          elevation={2}
          sx={{
            p: 2,
            textAlign: "center",
            textDecoration: "none",
            color: colors.darkBlue,
            fontWeight: 600,
            borderRadius: 3,
            transition: ".3s",

            "&:hover": {
              bgcolor: colors.primary,
              color: "#fff",
              transform: "translateY(-5px)",
            },
          }}
        >
          {item.name}
        </Paper>
      ))}
    </Box>
  </Container>
</Box>
    </>
  );
}
