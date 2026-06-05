// src/components/DigitalMarketing.js
import React from "react";
import { useEffect } from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";
import Seo from "./Seo";
import { useNavigate } from "react-router-dom";

export default function DigitalMarketing() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ===== Main SEO/Marketing Sections =====
  const zigZagSections = [
    {
      title: "SEO (Search Engine Optimization)",
      text: "We optimize your website with proven SEO strategies to improve your rankings on search engines. By enhancing content, metadata, and technical aspects, we drive more organic traffic to your site and increase visibility, ensuring potential customers find your business easily and boosting your online presence across competitive markets.",
      img: "/service/digitalMarketing1.png",
      link: "/digital-marketing/seo",
      imgLeft: true,
    },
    {
      title: "SEM (Search Engine Marketing)",
      text: "Our SEM services combine paid search campaigns, strategic bidding, and targeted ad placements to increase visibility and attract high-quality leads. By leveraging search engine platforms effectively, we help your business achieve faster results, maximize ROI, and ensure that your ads reach the right audience at the right time.",
      img: "/service/digitalMarketing2.png",
      link: "/digital-marketing/sem",
      imgLeft: false,
    },
    // {
    //   title: "Local SEO",
    //   text: "We optimize your business for local search queries so that potential customers nearby can discover your services easily. By improving location-specific keywords, Google Business profiles, and map listings, we help your business attract more local traffic, drive footfall, and generate leads from the communities you serve.",
    //   img: "/service/digitalMarketing3.png",
    //   link: "/digital-marketing/local-seo",
    //   imgLeft: true,
    // },
    {
      title: "E-Commerce SEO",
      text: "Our E-Commerce SEO strategies enhance your online store’s visibility in search engines, driving organic traffic to product pages. We optimize product listings, categories, metadata, and site speed to boost conversions, increase sales, and help your e-commerce business gain a competitive edge in crowded online marketplaces.",
      img: "/service/digitalMarketing4.png",
      link: "/digital-marketing/ecommerce-seo",
      imgLeft: false,
    },
    {
      title: "Video SEO",
      text: "We optimize your video content for platforms like YouTube and social media to improve visibility and engagement. By optimizing titles, descriptions, tags, and thumbnails, we increase video reach, drive organic views, and boost audience interaction, helping your brand grow through effective video marketing strategies.",
      img: "/service/digitalMarketing5.png",
      link: "/digital-marketing/video-seo",
      imgLeft: true,
    },
  ];

  // ===== Grid-style Services Sections =====
  const gridSections = [
    {
      title: "Social Media & Channel Services",
      items: [
        {
          title: "Social Media Marketing",
          text: "We create targeted campaigns and social media strategies that enhance your brand presence, engage audiences, and generate leads across multiple platforms, including Facebook, Instagram, and LinkedIn.",
          icon: "mdi:facebook",
        },
        {
          title: "Paid Social Media",
          text: "Our paid social campaigns boost visibility and engagement through strategic advertising on platforms like Facebook, Instagram, and Twitter, ensuring maximum ROI for your ad spend.",
          icon: "mdi:twitter",
        },
        {
          title: "Social Commerce",
          text: "Leverage social platforms to sell products directly to consumers, streamlining the buying process and increasing revenue through interactive and shoppable content.",
          icon: "mdi:shopping",
        },
        {
          title: "Influencer Marketing",
          text: "Partner with influencers to create authentic content that builds credibility, increases brand awareness, and expands your reach to targeted audiences effectively.",
          icon: "mdi:account-star-outline",
        },
        {
          title: "Community Marketing",
          text: "Build and nurture communities around your brand to foster engagement, loyalty, and meaningful interactions with customers, turning them into advocates for your business.",
          icon: "mdi:account-group-outline",
        },
      ],
    },
    {
      title: "Channel Specific Services",
      items: [
        {
          title: "YouTube Marketing",
          text: "Promote your brand through engaging video content on YouTube. Leverage SEO-optimized videos and targeted advertising to increase visibility and conversions.",
          icon: "mdi:youtube",
        },
        {
          title: "Facebook Ads Campaign",
          text: "Target your ideal audience with precision using Facebook's ad tools to drive leads, conversions, and brand awareness effectively.",
          icon: "mdi:facebook",
        },
        {
          title: "Instagram Marketing",
          text: "Enhance your brand’s visibility and engagement on Instagram with creative posts, stories, and paid ads that resonate with your audience.",
          icon: "mdi:instagram",
        },
        {
          title: "Google SEM",
          text: "Boost search engine visibility using Google Ads, leveraging paid campaigns to attract qualified traffic, increase conversions, and maximize ROI.",
          icon: "mdi:google",
        },
        {
          title: "Shopify Marketing",
          text: "Enhance your Shopify store sales through marketing strategies designed to increase traffic, conversions, and overall online store performance.",
          icon: "mdi:shopify",
        },
        {
          title: "LinkedIn Marketing",
          text: "Connect with decision-makers and professionals through targeted LinkedIn campaigns. Build authority, generate quality B2B leads, and grow your business network effectively.",
          icon: "mdi:linkedin",
        },
      ],
    },
    {
      title: "Industry & Purpose Services",
      items: [
        {
          title: "Music Promotion",
          text: "Promote music across platforms and reach a global audience with marketing campaigns tailored for musicians and music brands.",
          icon: "mdi:music-note-outline",
        },
        {
          title: "Podcast Marketing",
          text: "Grow your podcast audience with targeted promotion, sponsorship strategies, and content marketing to increase listenership.",
          icon: "mdi:podcast",
        },
        {
          title: "Book & E-Book Marketing",
          text: "Promote books effectively online to increase visibility, sales, and readership with digital marketing campaigns designed for authors.",
          icon: "mdi:book-open-outline",
        },
        {
          title: "Mobile App Marketing",
          text: "Increase app installs, engagement, and retention through targeted campaigns across multiple digital channels to maximize app growth.",
          icon: "mdi:cellphone-link",
        },
      ],
    },
    {
      title: "Methods & Techniques",
      items: [
        {
          title: "Video Marketing",
          text: "Create engaging video content for your brand to drive conversions, increase awareness, and capture audience attention effectively.",
          icon: "mdi:video-outline",
        },
        {
          title: "E-Commerce Marketing",
          text: "Optimize your e-commerce store with marketing strategies to increase traffic, conversions, and overall revenue effectively.",
          icon: "mdi:cart-outline",
        },
        {
          title: "E-mail Marketing",
          text: "Engage customers with personalized email campaigns designed to nurture leads and maintain customer relationships.",
          icon: "mdi:email-outline",
        },
        {
          title: "E-mail Automations",
          text: "Automate email campaigns to deliver timely and relevant content that nurtures leads and improves customer retention efficiently.",
          icon: "mdi:autorenew",
        },
        {
          title: "Guest Posting",
          text: "Increase brand visibility and authority by publishing high-quality guest posts on reputable websites relevant to your industry.",
          icon: "mdi:file-document-outline",
        },
      ],
    },
    {
      title: "Analytics & Strategy",
      items: [
        {
          title: "Marketing Strategy",
          text: "Develop comprehensive marketing strategies tailored to your business goals to ensure measurable growth and brand recognition.",
          icon: "mdi:lightbulb-outline",
        },
        {
          title: "Marketing Concept & Ideation",
          text: "Brainstorm and generate innovative marketing concepts that resonate with your audience and differentiate your brand effectively.",
          icon: "mdi:brain",
        },
        {
          title: "Marketing Advice",
          text: "Receive expert recommendations to optimize your marketing campaigns, improve performance, and achieve business objectives efficiently.",
          icon: "mdi:account-tie-outline",
        },
        {
          title: "Web Analytics",
          text: "Track and analyze website performance using advanced tools to make data-driven marketing decisions and optimize conversions.",
          icon: "mdi:chart-line",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          text: "Optimize your website and marketing funnels to improve conversions, maximize ROI, and enhance user experience across all digital touchpoints.",
          icon: "mdi:swap-horizontal-bold",
        },
      ],
    },
  ];

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/service/digitalMarketing.png')",
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
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Digital Marketing
          </Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: { xs: 6, md: 10 } }}>
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
                loading="lazy"
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              {/* This is now a proper H2/H3 heading */}
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
              >
                {section.title}
              </Typography>

              <Typography sx={{ color: colors.grey, mb: 3 }}>
                {section.text}
              </Typography>

              {/* This creates a real internal link - fixes "dead end" error */}
              <Typography
                component="a"
                href={section.link}
                sx={{
                  color: colors.primary,
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  "&:hover": { color: colors.darkBlue },
                }}
              >
                Learn more about {section.title} →
              </Typography>
            </Box>
          </Box>

          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 10 }} />}
        </Container>
      ))}

      {/* ===== Grid Sections ===== */}
      {gridSections.map((section, idx) => (
        <Box key={idx} sx={{ backgroundColor: colors.lightGrey, py: 8 }}>
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
    </>
  );
}
