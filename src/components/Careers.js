import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Breadcrumbs,
  Link,
} from "@mui/material";
import colors from "./Colors";
import InternshipForm from "./InternshipForm";

const jobOpenings = [
  {
    title: "Business Development Manager",
    positions: 1,
    requirements: [
      "Minimum 2 year experience in Business Development ",
      "Strong knowledge of B2B Sales",
      "Experience with CRM software",
      "Understanding of sales and marketing principles",
      "Good communication and negotiation skills",
    ],
    benefits: [
      "Attractive salary package",
      "Career growth and learning opportunities",
      "Supportive team environment",
    ],
    responsibilities: [
      "Identify and generate new business opportunities",
      "Build and maintain client relationships",
      "Conduct market research and competitor analysis",
      "Present company products and services",
      "Provide excellent customer service",
    ],
    experience: "3-6 Year",
    location:
      "Virudunagar (Candidates from Virudunagar and surrounding areas only)",
    apply: "Send your resume to admin@rohiltechnologies.com",
  },
  {
    title: "Tele caller - Insight Sales",
    positions: 1,
    requirements: [
      "Female candidates only",
      "Freshers welcome",
      "Strong communication skills",
      "Goal-oriented mindset",
    ],
    benefits: [
      "Attractive salary package",
      "Performance-based bonuses",
    ],
    responsibilities: [
      "Make outbound calls to potential customers",
      "Promote company products and services",
      "Generate leads and schedule appointments for the sales team",
      "Follow up with potential customers",
      "Provide excellent customer service",
    ],
    experience: "1+ Years",
    location:
      "Virudunagar (Candidates from Virudunagar and surrounding areas only)",
    apply: "Send your resume to admin@rohiltechnologies.com",
  },

  {
    title: "Marketing Executive",
    positions: 1,

    requirements: [
      "Freshers welcome",
      "Strong communication and interpersonal skills",
      "Basic knowledge of digital marketing (social media, SEO, ads)",
      "Creative thinking and problem-solving ability",
    ],

    benefits: [
      "Learning-oriented environment",
      "Hands-on experience in real marketing campaigns",
      "Opportunity to grow in digital marketing",
    ],

    responsibilities: [
      "Plan and execute marketing campaigns",
      "Manage social media platforms and content",
      "Generate leads and support sales activities",
      "Coordinate with team for promotions and branding",
    ],

    experience: "0–1 Year (Freshers welcome)",

    location:
      "Virudhunagar (Candidates from nearby areas preferred)",

    apply: "Send your resume to admin@rohiltechnologies.com",
  },
  // {
  //   title: "Digital Marketing Executive",
  //   positions: 2,
  //   requirements: [
  //     "Freshers welcome",
  //     "Strong communication and analytical skills",
  //   ],
  //   benefits: [
  //     "Attractive salary package",
  //     "Learning opportunities in digital marketing",
  //   ],
  //   responsibilities: [
  //     "Develop SEO strategies",
  //     "Manage social media",
  //     "Monitor website traffic and social media performance",
  //   ],
  //   experience: "Minimum 1 Year (Freshers welcome)",
  //   location:
  //     "Virudunagar (Candidates from Virudunagar and surrounding areas only)",
  //   apply: "Send your resume to admin@rohiltechnologies.com",
  // },
  {
    title: "Graphic Designer / Video Editor",
    positions: 1,
    requirements: [
      "Minimum 1 year experience in graphic design",
      "Strong knowledge of Canva, Photoshop, Adobe Illustrator",
      "Video editing skills",
      "Creative mindset and attention to detail",
      "Immediate joiner preferred",
    ],
    benefits: [
      "Attractive salary package",
      "Creative working environment",
      "Opportunity to work on real-time projects",
    ],
    responsibilities: [
      "Design marketing creatives and branding materials",
      "Create and edit videos for social media and promotions",
      "Collaborate with marketing and content teams",
      "Maintain brand consistency across designs",
    ],
    experience: "1 Year",
    location:
      "Virudunagar (Candidates from Virudunagar and surrounding areas only)",
    apply: "Send your resume to admin@rohiltechnologies.com",
  },
];

export default function Careers() {
  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/mainPage/main-career.png')",
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
            Careers / Internship
          </Typography>
          <Breadcrumbs
            sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
            separator="›"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="inherit">Careers / Internship</Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>
      <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
              color: colors.darkBlue,
            }}
          >
            Careers
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mb: 6, color: colors.grey }}
          >
            Current Job Openings
          </Typography>

          {/* Flex container for cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                sx={{
                  flex: "1 1 300px", // min width 300px, grow to fill space
                  maxWidth: 350,
                  p: 4,
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  "&:hover": { boxShadow: "0 12px 32px rgba(0,0,0,0.15)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: colors.darkBlue, mb: 2 }}
                  >
                    {job.title}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>No of positions:</strong> {job.positions}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Experience:</strong> {job.experience}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Location:</strong> {job.location}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Requirements:
                  </Typography>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>
                        <Typography variant="body2">{req}</Typography>
                      </li>
                    ))}
                  </ul>

                  {job.benefits && (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        Benefits:
                      </Typography>
                      <ul>
                        {job.benefits.map((benefit, i) => (
                          <li key={i}>
                            <Typography variant="body2">{benefit}</Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {job.responsibilities && (
                    <>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        Key Responsibilities:
                      </Typography>
                      <ul>
                        {job.responsibilities.map((task, i) => (
                          <li key={i}>
                            <Typography variant="body2">{task}</Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <Typography
                    variant="body2"
                    sx={{ mt: 2, fontWeight: "bold", color: colors.primary }}
                  >
                    How to Apply: {job.apply}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
      <Box id="internship-section">
        <InternshipForm />
      </Box>
    </>
  );
}
