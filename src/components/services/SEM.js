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

export default function SEM() {
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
            backgroundImage: "url('/mainPage/sem-page.png')",
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
              Rohil Technologies SEM Services
            </Typography>

            <Breadcrumbs
              sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
              separator="›"
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="inherit">SEM</Typography>
            </Breadcrumbs>
          </Box>

          <Box
            sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
          />
        </Box>
      </Box>

      {/* ===== Main Content ===== */}
      <Container sx={{ py: 6 }}>
        {/* Intro */}
        <Typography variant="body1" sx={{ color: colors.black, mb: 4 }}>
          Rohil Technologies provides high-performing SEM (Search Engine
          Marketing) services that help businesses get instant visibility, quick
          traffic, and quality leads through Google Ads. We manage keyword
          research, ad creation, bidding strategy, targeting, and complete
          campaign optimization for maximum ROI.
        </Typography>

        {/* Why Choose Us */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Why Choose Rohil Technologies for SEM Services?
        </Typography>

        <ul style={{ color: colors.black, marginBottom: "2rem" }}>
          <li>Instant visibility on Google search results</li>
          <li>Expert keyword targeting for higher conversions</li>
          <li>Complete campaign setup and performance optimization</li>
          <li>Transparent reporting with real-time analytics</li>
          <li>Budget-friendly SEM plans for all business sizes</li>
        </ul>

        <Divider sx={{ my: 4 }} />

        {/* Our SEM Services */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Our SEM Services in Virudhunagar & Tamil Nadu
        </Typography>

        <Box sx={{ color: colors.black }}>
          <Typography sx={{ mb: 2 }}>
            <strong>1. Google Search Ads:</strong> Appear instantly at the top
            of Google results for your most valuable keywords.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>2. Display Ads:</strong> Reach customers across millions of
            websites, apps, and YouTube.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>3. Remarketing Ads:</strong> Re-engage visitors who have
            previously visited your website and convert them into customers.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>4. Lead Generation Campaigns:</strong> Get high-quality
            leads for services, training programs, and IT solutions.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>5. E-Commerce Sales Ads:</strong> Boost product sales with
            targeted Shopping Ads and conversion-focused campaigns.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            <strong>6. Budget Optimization:</strong> We minimize wasted ads,
            focus on high-conversion keywords, and increase ROI.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            <strong>7. Competitor Analysis:</strong> Track competitor ads,
            bidding patterns, and create better-performing ad strategies.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* SEM Content Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          How SEM Helps Your Business Grow
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          SEM helps your business appear instantly when customers search for
          services like “best digital marketing company”, “software training”,
          “IT company near me”, or “web development services”.
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          By targeting high-intent keywords, your business receives calls,
          enquiries, and leads immediately, even if your website is new.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* CTA */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Grow Your Business with High-Converting Google Ads
        </Typography>

        <Typography sx={{ color: colors.black, mb: 4 }}>
          Our expert SEM team at Rohil Technologies delivers fast results,
          budget-optimized ads, and transparent reporting. Start your marketing
          journey today with a trusted SEM company in Virudhunagar.
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
          to learn SEM and Google Ads professionally.
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
          Get Free SEM Consultation
        </Button>
      </Container>
    </>
  );
}
