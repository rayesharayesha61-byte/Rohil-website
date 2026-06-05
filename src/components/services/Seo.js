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

export default function Seo() {
  const navigate = useNavigate();
  const location = useLocation(); // You missed this

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
            backgroundImage: "url('/mainPage/seo-page.png')",
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
             Rohil Technologies SEO Services
            </Typography>
            <Breadcrumbs
              sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
              separator="›"
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="inherit">SEO</Typography>
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
          Rohil Technologies offers the best SEO services in Virudhunagar,
          helping businesses increase website traffic, boost Google rankings,
          and attract high-quality leads. Our SEO experts use proven strategies
          including on-page optimization, technical SEO, keyword research, and
          link building to grow your online presence organically.
        </Typography>

        {/* Why Choose Us */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Why Choose Rohil Technologies for SEO Services?
        </Typography>
        <ul style={{ color: colors.black, marginBottom: "2rem" }}>
          <li>Proven SEO strategies tailored for your business growth</li>
          <li>Local SEO expertise for Virudhunagar-based companies</li>
          <li>Transparent process with monthly performance reports</li>
          <li>Affordable SEO packages for startups and SMEs</li>
          <li>Dedicated SEO specialists with years of experience</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* Core SEO Services */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Our SEO Services in Virudhunagar
        </Typography>

        <Box sx={{ color: colors.black }}>
          <Typography sx={{ mb: 2 }}>
            <strong>1. On-Page SEO Optimization:</strong> Improve your website
            content, structure, titles, meta tags, and internal linking for
            maximum visibility.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>2. Technical SEO:</strong> Fix website speed, mobile
            responsiveness, indexing issues, schema markup, XML sitemap,
            robots.txt, and more for better search engine crawling.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>3. Keyword Research:</strong> Identify high-intent keywords
            that bring real customers and improve organic reach.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>4. Content Optimization:</strong> SEO-friendly blogs,
            service pages, and landing pages that rank higher on Google.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>5. Local SEO (Google Maps Ranking):</strong> Optimize your
            Google Business Profile, local citations, and reviews to rank for
            “near me” searches.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            <strong>6. Off-Page SEO & Link Building:</strong> High-authority
            backlinks that boost domain authority and improve long-term ranking.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* SEO Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          SEO Services in Virudhunagar
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          Our SEO service helps your business appear in Google Maps, local
          searches, and “near me” keywords. Whether you own a shop, clinic, real
          estate agency, or service business, we ensure customers find you
          faster.
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          We optimize your Google Business Profile, build citations, improve
          reviews, and target local keywords like “digital marketing company in
          Virudhunagar”, “SEO agency near me”, and “best SEO services
          Virudhunagar.”
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Call To Action */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Boost Your Google Ranking with Our SEO Experts
        </Typography>

        <Typography sx={{ color: colors.black, mb: 4 }}>
          Ready to grow your business with a trusted SEO company in
          Virudhunagar? Rohil Technologies provides complete SEO solutions that
          deliver long-term results. Contact us today for a free SEO analysis
          and customized strategy.
        </Typography>

        {/* Call To Action */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Boost Your Google Ranking with Our SEO Experts
        </Typography>

        <Typography sx={{ color: colors.black, mb: 2 }}>
          Ready to grow your business with a trusted SEO company in
          Virudhunagar? Rohil Technologies provides complete SEO solutions that
          deliver long-term results.
        </Typography>

        {/* Internship Link */}
        <Typography sx={{ color: colors.black, mb: 4 }}>
          Students and freshers can also join our{" "}
          <Link
            underline="hover"
            onClick={handleScroll}
            style={{ cursor: "pointer" }}
          >
            Digital Marketing Internship Program
          </Link>{" "}
          to gain practical experience in SEO and digital marketing.
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
          Get Free SEO Consultation
        </Button>
      </Container>
    </>
  );
}
