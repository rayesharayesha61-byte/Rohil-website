import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Link,
  Button,
  Divider,
} from "@mui/material";
import colors from "../Colors";
import { useNavigate, useLocation } from "react-router-dom";

export default function EcommerceSEO() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash === "#internship") {
      const section = document.getElementById("internship-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleScroll = () => {
    navigate("/careers#internship");
  };

  return (
    <>
      {/* ===== Hero Section ===== */}
      <Box sx={{ bgcolor: "#fff" }}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: "url('/mainPage/ecommerce-seo-banner.png')",
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
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              E-Commerce SEO Services
            </Typography>

            <Breadcrumbs
              sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
              separator="›"
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="inherit">E-Commerce SEO</Typography>
            </Breadcrumbs>
          </Box>

          <Box
            sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
          />
        </Box>
      </Box>

      {/* ===== Main Content ===== */}
      <Container sx={{ py: 6 }}>
        {/* Intro Paragraph */}
        <Typography variant="body1" sx={{ color: colors.black, mb: 4 }}>
          Rohil Technologies provides advanced E-Commerce SEO services in
          Virudhunagar and across Tamil Nadu. We help online stores increase
          product visibility, drive organic traffic, improve conversions, and
          grow sales. From product optimization to technical SEO, we offer
          complete strategies that help your store rank higher on Google and
          attract genuine buyers.
        </Typography>

        {/* Why Choose */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Why Choose Rohil Technologies for E-Commerce SEO?
        </Typography>

        <ul style={{ color: colors.black, marginBottom: "2rem" }}>
          <li>Product page and category-level SEO optimization</li>
          <li>Commercial intent keyword research for online shoppers</li>
          <li>Technical SEO fixes for speed, indexing, and performance</li>
          <li>Structured data implementation for rich results</li>
          <li>Conversion rate optimization for higher sales</li>
          <li>Dedicated tracking, reporting, and continuous improvement</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* SEO Services */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Our E-Commerce SEO Services
        </Typography>

        <Box sx={{ color: colors.black }}>
          <Typography sx={{ mb: 2 }}>
            <strong>1. Product Page Optimization:</strong> SEO-friendly titles,
            descriptions, alt tags, specifications, and schema markup to improve
            product visibility.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>2. Category Page Optimization:</strong> Structured category
            names, clean navigation, internal links, and keyword-rich content
            for higher rankings.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>3. Commercial-Intent Keyword Research:</strong> We target
            keywords such as “buy online,” “best price,” “deals Tamil Nadu,” and
            location-based search terms relevant to your store.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>4. Technical SEO:</strong> Improve site speed, fix duplicate
            URLs, optimize mobile layout, enhance Core Web Vitals, and ensure
            smooth crawling.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>5. Product Schema Markup:</strong> Add structured data for
            ratings, pricing, stock availability, shipping, and reviews to
            increase click-through rates.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>6. Conversion Optimization:</strong> Improve product layout,
            CTAs, add-to-cart flow, trust signals, and reduce cart abandonment.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>7. Content Marketing:</strong> Buying guides, product
            comparisons, blogs, seasonal topics, and FAQs that attract organic
            traffic.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            <strong>8. Backlink Building:</strong> High-quality backlinks from
            blogs, influencers, niche directories, and Tamil Nadu business
            listings.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* SEO Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          How E-Commerce SEO Helps Your Online Store Grow
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          Whether you sell fashion, electronics, beauty products, groceries, or
          home essentials, E-Commerce SEO ensures your items appear at the top
          of search results when buyers are ready to make a purchase.
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          Ranking high for category and product keywords leads to more traffic,
          increased sales, and long-term profits without relying only on paid
          ads.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* CTA */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Grow Your Online Store with Professional E-Commerce SEO
        </Typography>

        <Typography sx={{ color: colors.black, mb: 4 }}>
          As a leading E-Commerce SEO company in Virudhunagar, we help small and
          large online stores improve visibility, attract customers, and scale
          their business with long-term organic growth strategies.
        </Typography>

        {/* Internship Link */}
        <Typography sx={{ color: colors.black, mb: 4 }}>
          Students and freshers can join our{" "}
          <Link
            underline="hover"
            onClick={handleScroll}
            style={{ cursor: "pointer" }}
          >
            Digital Marketing Internship Program
          </Link>{" "}
          to learn E-Commerce SEO and Google optimization techniques.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/contact");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          sx={{ borderRadius: 5, px: 4, py: 1.5, fontWeight: "bold" }}
        >
          Get Free E-Commerce SEO Consultation
        </Button>
      </Container>
    </>
  );
}
