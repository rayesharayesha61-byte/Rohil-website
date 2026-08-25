

// src/components/BusinessProcessSolution.js

import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function BusinessProcessSolution() {
  const zigZagSections = [
    {
      title: "Seamless Business Services for Your Organization",
      text: "At Rohil Technologies, we provide end-to-end business process solutions that help organizations streamline operations, improve productivity, reduce operational costs, and maintain process accuracy. Our solutions are designed around your business workflow, allowing your teams to focus on strategic growth while routine processes are managed efficiently.",
      img: "/service/businessProcess1.png",
      alt: "Business process solutions for organizations",
      imgLeft: true,
    },
    {
      title: "Empowering Businesses Through Outsourcing Excellence",
      text: "Our Business Process Outsourcing (BPO) services provide flexible and scalable support for both core and non-core business operations. From payroll and data processing to customer support and administrative services, we help businesses improve efficiency, maintain service quality, and achieve better customer satisfaction.",
      img: "/service/businessProcess2.png",
      alt: "Business process outsourcing services",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Back Office",
      text: "We manage HR, accounting, administrative, and back-office operations to help your internal processes run smoothly and efficiently.",
      icon: "mdi:office-building-outline",
    },
    {
      title: "Call Centre",
      text: "Our call centre solutions handle customer inquiries, communication, and support while helping businesses improve customer relationships.",
      icon: "mdi:phone-in-talk-outline",
    },
    {
      title: "Payroll",
      text: "Accurate payroll processing including wage calculations, deductions, tax-related data, employee records, and payroll reporting.",
      icon: "mdi:cash-check",
    },
    {
      title: "Leave Management",
      text: "Efficient leave tracking and management helps businesses maintain accurate employee records and streamline approval workflows.",
      icon: "mdi:calendar-check-outline",
    },
    {
      title: "Coupon Processing",
      text: "We support coupon processing, redemption tracking, barcode management, and related data handling to improve operational efficiency.",
      icon: "mdi:ticket-percent-outline",
    },
    {
      title: "Loan Processing",
      text: "Our loan processing support includes document verification, data processing, compliance checks, and workflow management.",
      icon: "mdi:bank-outline",
    },
    {
      title: "Data Processing",
      text: "We transform raw business data into structured information that helps teams improve reporting, accuracy, and decision-making.",
      icon: "mdi:database-cog-outline",
    },
    {
      title: "Virtual Assistants",
      text: "Our virtual assistants provide remote support for scheduling, research, administrative tasks, customer communication, and daily operations.",
      icon: "mdi:account-tie-outline",
    },
    {
      title: "Startup Support",
      text: "We help startups establish efficient processes, manage resources, streamline operations, and build a strong foundation for growth.",
      icon: "mdi:rocket-launch-outline",
    },
  ];

  return (
    <>
      {/* =========================
          HERO SECTION
      ========================== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/businessProcess.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            xs: "250px",
            md: "400px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: 2,
          }}
        >
          {/* Only ONE H1 on the page */}
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.2rem",
              },
              lineHeight: 1.2,
            }}
          >
            Business Process Solutions
          </Typography>

          <Typography
            component="p"
            sx={{
              mt: 2,
              maxWidth: "750px",
              mx: "auto",
              fontSize: {
                xs: "0.95rem",
                md: "1.1rem",
              },
            }}
          >
            Streamline your business operations with scalable, efficient, and
            technology-driven business process solutions.
          </Typography>
        </Box>
      </Box>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 3,
          }}
        >
          Business Process Solutions for Smarter Operations
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Rohil Technologies provides business process solutions that help
          organizations simplify operations, reduce manual work, improve
          accuracy, and increase overall productivity. Our services combine
          technology, process management, and operational expertise to create
          efficient workflows that support your business objectives.
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
          }}
        >
          Whether you need business process outsourcing, data processing,
          payroll support, customer service, virtual assistance, or workflow
          management, our solutions can be customized to match your business
          requirements. We focus on creating reliable and scalable processes
          that help your organization save time, reduce operational costs, and
          deliver better customer experiences.
        </Typography>
      </Container>

      {/* =========================
          ZIGZAG SECTIONS
      ========================== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} maxWidth="lg" sx={{ py: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: section.imgLeft ? "row" : "row-reverse",
              },
              gap: {
                xs: 4,
                md: 6,
              },
              alignItems: "center",
            }}
          >
            {/* Image */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={section.img}
                alt={section.alt}
                loading="lazy"
                sx={{
                  width: "100%",
                  display: "block",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
              }}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.2rem",
                  },
                }}
              >
                {section.title}
              </Typography>

              <Typography
                component="p"
                sx={{
                  color: colors.grey,
                  lineHeight: 1.8,
                }}
              >
                {section.text}
              </Typography>
            </Box>
          </Box>

          {index < zigZagSections.length - 1 && (
            <Divider sx={{ mt: 8 }} />
          )}
        </Container>
      ))}

      {/* =========================
          SERVICES SECTION
      ========================== */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.lightGrey,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 2,
            }}
          >
            Our Business Process Services
          </Typography>

          <Typography
            component="p"
            sx={{
              textAlign: "center",
              maxWidth: "850px",
              mx: "auto",
              color: colors.grey,
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            Our business process outsourcing and support services are designed
            to reduce repetitive work, improve operational efficiency, and
            provide reliable support for your organization.
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
            {services.map((item, i) => (
              <Box
                key={i}
                component="article"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
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
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: colors.darkBlue,
                    mb: 1,
                    mt: 2,
                    fontSize: "1.25rem",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  component="p"
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

      {/* =========================
          PROCESS AUTOMATION
      ========================== */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 3,
          }}
        >
          Process Automation and Workflow Management
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Automating repetitive business processes can help organizations
          reduce manual effort, minimize errors, and improve productivity.
          Rohil Technologies helps businesses transform repetitive activities
          into structured digital workflows that are easier to manage and
          monitor.
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
          }}
        >
          From approvals and notifications to data entry, document workflows,
          reporting, and task management, our business process solutions can
          help your teams work more efficiently while maintaining better
          visibility across daily operations.
        </Typography>
      </Container>

      {/* =========================
          WHY CHOOSE US
      ========================== */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.lightGrey,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 3,
            }}
          >
            Why Choose Rohil Technologies?
          </Typography>

          <Typography
            component="p"
            sx={{
              color: colors.grey,
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Rohil Technologies combines technology, operational expertise, and
            strategic insight to deliver reliable and cost-effective business
            process outsourcing services. Our solutions are designed to align
            with your business objectives while improving process efficiency,
            accuracy, and customer satisfaction.
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 3,
              color: colors.grey,
            }}
          >
            <Typography component="li" sx={{ mb: 1 }}>
              Increased efficiency and reduced operational costs
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              Improved customer satisfaction through dedicated support
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              Advanced data security and compliance practices
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              Scalable solutions that adapt to your business needs
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              Continuous process optimization for better ROI
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              Flexible support for growing businesses
            </Typography>

            <Typography component="li">
              Reliable technical and operational support
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =========================
          BUSINESS BENEFITS
      ========================== */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 3,
          }}
        >
          Benefits of Business Process Outsourcing
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          Outsourcing selected business processes allows organizations to
          focus on their core activities while experienced teams manage
          supporting operations. With the right processes and technology in
          place, businesses can improve productivity, control costs, and scale
          operations more effectively.
        </Typography>

        <Box component="ul" sx={{ pl: 3, color: colors.grey }}>
          <Typography component="li" sx={{ mb: 1 }}>
            Reduce repetitive manual tasks
          </Typography>

          <Typography component="li" sx={{ mb: 1 }}>
            Improve business process accuracy
          </Typography>

          <Typography component="li" sx={{ mb: 1 }}>
            Increase operational productivity
          </Typography>

          <Typography component="li" sx={{ mb: 1 }}>
            Improve customer support and communication
          </Typography>

          <Typography component="li" sx={{ mb: 1 }}>
            Access scalable operational support
          </Typography>

          <Typography component="li">
            Focus internal teams on strategic business activities
          </Typography>
        </Box>
      </Container>

      {/* =========================
          INTERNAL LINKS
      ========================== */}
      <Box
        component="section"
        sx={{
          backgroundColor: colors.lightGrey,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4,
            }}
          >
            Explore Our Services
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 3,
            }}
          >
            <Typography component="li" sx={{ mb: 1 }}>
              <Link
                to="/about"
                style={{
                  color: colors.primary,
                  textDecoration: "none",
                }}
              >
                Learn more about Rohil Technologies
              </Link>
            </Typography>

            

            <Typography component="li" sx={{ mb: 1 }}>
              <Link
                to="/software-development"
                style={{
                  color: colors.primary,
                  textDecoration: "none",
                }}
              >
                Explore our software development services
              </Link>
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              <Link
                to="/web-technologies"
                style={{
                  color: colors.primary,
                  textDecoration: "none",
                }}
              >
                Explore our web development services
              </Link>
            </Typography>

            <Typography component="li" sx={{ mb: 1 }}>
              <Link
                to="/mobile"
                style={{
                  color: colors.primary,
                  textDecoration: "none",
                }}
              >
                Explore our mobile app development services
              </Link>
            </Typography>

          

            <Typography component="li" sx={{ mb: 1 }}>
              <Link
                to="/blog"
                style={{
                  color: colors.primary,
                  textDecoration: "none",
                }}
              >
                Read our latest technology blogs
              </Link>
            </Typography>

            <Typography component="li">
              <Link
                to="/contact"
                style={{
                  color: colors.primary,
                  textDecoration: "none",
                }}
              >
                Contact Rohil Technologies
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =========================
          FAQ
      ========================== */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 4,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 1,
          }}
        >
          What are business process solutions?
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Business process solutions help organizations improve and manage
          their daily operations through process optimization, automation,
          outsourcing, data management, and operational support.
        </Typography>

        <Typography
          component="h4"
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 1,
          }}
        >
          What business processes can you manage?
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          We provide support for back-office operations, call centre services,
          payroll processing, leave management, coupon processing, loan
          processing, data processing, virtual assistance, and startup
          support.
        </Typography>

        <Typography
          component="h4"
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 1,
          }}
        >
          Can your business process solutions be customized?
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          Yes. Our solutions can be customized according to your existing
          workflows, business requirements, operational goals, and growth
          plans.
        </Typography>

        <Typography
          component="h4"
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            mb: 1,
          }}
        >
          How can business process outsourcing improve efficiency?
        </Typography>

        <Typography
          component="p"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
          }}
        >
          Business process outsourcing can reduce repetitive work, improve
          process accuracy, provide specialized operational support, and
          allow internal teams to focus on important business activities.
        </Typography>
      </Container>

      {/* =========================
          CTA
      ========================== */}
      <Box
        component="section"
        sx={{
          py: 8,
          textAlign: "center",
          backgroundColor: colors.darkBlue,
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Transform Your Business Processes
          </Typography>

          <Typography
            component="p"
            sx={{
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Improve productivity, reduce operational costs, and build a more
            efficient and scalable workplace with Rohil Technologies business
            process solutions.
          </Typography>

          <Link
            to="/contact"
            style={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Contact us to discuss your business requirements
          </Link>
        </Container>
      </Box>
    </>
  );
}

