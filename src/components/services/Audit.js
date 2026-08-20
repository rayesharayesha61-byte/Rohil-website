// src/components/Audit.js

import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";

export default function Audit() {
  const zigZagSections = [
    {
      title: "Enhancing Confidence Through Accurate Audits",
      text: "At Rohil Technologies, our audit services are designed to enhance organizational confidence by ensuring transparency, accuracy, and compliance. We assess processes, identify potential risks, and help strengthen internal systems for improved operational excellence.",
      img: "/service/audit1.png",
      imgLeft: true,
    },
    {
      title: "Delivering Accuracy and Trust",
      text: "Our experienced auditors use advanced data analytics and technology-driven methodologies to ensure that every audit report is accurate, insightful, and aligned with the latest compliance standards. We focus on building trust and ensuring our clients meet financial, legal, and governance expectations.",
      img: "/service/audit2.png",
      imgLeft: false,
    },
  ];

  const services = [
    {
      title: "Independent Audits",
      text: "We perform unbiased, independent audits with a strong focus on compliance, outcomes, and business improvement.",
      icon: "mdi:shield-check-outline",
    },
    {
      title: "Deep Insights",
      text: "Our audits evaluate systems, identify risks, and offer valuable insights to support strategic decision-making.",
      icon: "mdi:chart-line",
    },
    {
      title: "Enhanced Quality",
      text: "Combining skilled professionals and technology, we ensure superior audit quality and reliability.",
      icon: "mdi:star-outline",
    },
    {
      title: "Accuracy & Trust",
      text: "We provide accurate, transparent results that enhance your organization's financial and operational credibility.",
      icon: "mdi:handshake-outline",
    },
  ];

  const auditServices = [
    {
      title: "Technical SEO Audit",
      text: "We check the technical foundation of your website, including crawlability, indexing, sitemap configuration, robots.txt, URL structure, redirects, broken links, and other technical factors that can affect search engine accessibility.",
    },
    {
      title: "On-Page SEO Analysis",
      text: "Our audit reviews page titles, meta descriptions, headings, keyword relevance, content structure, image optimization, internal linking, and other on-page elements to identify opportunities for better search performance.",
    },
    {
      title: "Website Performance Audit",
      text: "Page speed and website performance can directly influence user experience. We analyse loading performance, Core Web Vitals, image usage, scripts, and other elements that may slow down your website.",
    },
    {
      title: "Mobile & User Experience Review",
      text: "With a large number of users accessing websites through mobile devices, responsive design is essential. We review mobile usability, navigation, readability, layout, and overall user experience across different screen sizes.",
    },
    {
      title: "Content & Keyword Analysis",
      text: "We evaluate whether your website content matches the search intent of your target audience. Our analysis identifies content gaps, keyword opportunities, duplicate content concerns, and areas where existing pages can provide more useful information.",
    },
    {
      title: "Website Security & Best Practices",
      text: "We also review essential website security and implementation factors, including HTTPS, security-related issues, redirects, and other best-practice considerations that can affect website reliability.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/audit.png')",
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
          {/* SEO H1 */}

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Website Audit Services | Rohil Technologies
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Identify Website Issues. Improve Performance. Grow Online.
          </Typography>
        </Box>
      </Box>

      {/* ================= INTRODUCTION ================= */}

      <Container sx={{ py: 6 }}>
        <Typography
          variant="body1"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          A well-performing website needs more than an attractive design.
          Technical issues, slow loading speeds, poor on-page optimization,
          broken links, and weak content can affect your search visibility
          and user experience.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: colors.grey,
            lineHeight: 1.8,
          }}
        >
          At Rohil Technologies, our website audit services help businesses
          identify these issues and understand exactly what needs to be
          improved. We analyse your website from technical, SEO, content,
          performance, and usability perspectives to create a clear roadmap
          for improvement.
        </Typography>
      </Container>

      {/* ================= ZIGZAG SECTIONS ================= */}

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
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: colors.darkBlue,
                  fontSize: { xs: "28px", md: "36px" },
                }}
              >
                {section.title}
              </Typography>

              <Typography
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

      {/* ================= COMPREHENSIVE WEBSITE AUDIT ================= */}

      <Box sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
        <Container>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 3,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Comprehensive Website Audit Services
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.8,
              textAlign: "center",
              maxWidth: "900px",
              mx: "auto",
              mb: 6,
            }}
          >
            Our website audit process examines the important factors that
            influence your website's visibility, performance, and overall
            effectiveness.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {auditServices.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "100%",
                    sm: "47%",
                    md: "30%",
                  },
                  p: 3,
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  boxShadow: 2,
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: colors.darkBlue,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: colors.grey,
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= EXISTING SERVICES ================= */}

      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 6,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Why Choose Our Audit Services
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
                  flex: {
                    xs: "100%",
                    sm: "48%",
                    md: "23%",
                  },
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  transition: "all 0.3s",
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
                  variant="h3"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    color: colors.darkBlue,
                    mb: 1,
                    mt: 2,
                    fontSize: "20px",
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

          <Divider sx={{ my: 6 }} />

          {/* ================= OUR APPROACH ================= */}

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Our Approach to Audits
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Our audit approach integrates accuracy, technology, and compliance.
            We focus on evaluating operational systems, detecting
            inefficiencies, ensuring data security, and mitigating risks to
            strengthen your organization's overall performance.
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 3,
              color: colors.grey,
              lineHeight: 2,
            }}
          >
            <li>Compliance with IT laws and governance standards</li>
            <li>
              Identification of inefficiencies in systems and management
            </li>
            <li>Minimization of risks to information assets</li>
            <li>Strengthening internal processes and transparency</li>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* ================= WHY ROHIL ================= */}

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Why Choose Rohil Technologies for a Website Audit?
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.darkBlue,
              }}
            >
              Expert Auditors
            </Typography>

            <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
              Our professionals combine experience and innovation to deliver
              accurate and insightful audit outcomes.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.darkBlue,
              }}
            >
              Technology-Driven Approach
            </Typography>

            <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
              Using cutting-edge tools and analytics, we provide data-backed
              audit reports that drive improvement and compliance.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.darkBlue,
              }}
            >
              Transparent Reporting
            </Typography>

            <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
              Every audit report we deliver is structured, transparent, and
              aligned with your organization's objectives and governance goals.
            </Typography>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* ================= GROWTH ================= */}

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 3,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Turn Audit Insights Into Website Growth
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Whether you have a new website or an established online presence,
            regular auditing can help you discover technical problems and
            optimization opportunities before they affect your growth.
          </Typography>

          <Typography
            sx={{
              color: colors.grey,
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            Rohil Technologies combines technology, SEO knowledge, and
            practical analysis to help businesses build websites that are
            technically sound, user-friendly, and search-engine ready.
          </Typography>

          

          {/* ================= GET AUDIT ================= */}

          <Box
            sx={{
              backgroundColor: colors.lightGrey,
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              mb: 6,
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 2,
                fontSize: { xs: "28px", md: "36px" },
              }}
            >
              Get Your Website Audited
            </Typography>

            <Typography
              sx={{
                color: colors.grey,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Want to know what is holding your website back?
            </Typography>

            <Typography
              sx={{
                color: colors.grey,
                lineHeight: 1.8,
              }}
            >
              Get in touch with Rohil Technologies for a professional website
              audit and discover actionable ways to improve your website's
              performance, visibility, and user experience.
            </Typography>
          </Box>

          {/* ================= FAQ ================= */}

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: colors.darkBlue,
              mb: 4,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 1,
              }}
            >
              What is a website audit?
            </Typography>

            <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
              A website audit is a detailed analysis of your website's
              technical SEO, content, performance, usability, security,
              and search engine optimization.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 1,
              }}
            >
              Why is a website audit important?
            </Typography>

            <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
              A website audit helps identify technical problems, SEO issues,
              performance limitations, content gaps, and usability problems
              that may affect your website's visibility and user experience.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 1,
              }}
            >
              How often should a website be audited?
            </Typography>

            <Typography sx={{ color: colors.grey, lineHeight: 1.8 }}>
              Regular website audits can help businesses identify new
              technical issues and optimization opportunities as their
              website, content, and technology environment evolve.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}