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

export default function VideoSEO() {
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
            backgroundImage: "url('/mainPage/video-seo-page.png')",
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
              Video SEO Services in Virudhunagar
            </Typography>

            <Breadcrumbs
              sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
              separator="›"
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="inherit">Video SEO</Typography>
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
          Video SEO services in Virudhunagar are essential for businesses aiming
          to grow through YouTube, Facebook, Instagram Reels, and Google video
          search. At Rohil Technologies, we provide powerful Video SEO
          strategies that increase visibility, boost watch time, improve
          engagement, and rank your videos higher on YouTube and Google.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Keyword Research Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Smart Video Keyword Research
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          We identify trending keywords, high-intent video search phrases, and
          Tamil Nadu–specific search terms to help your videos rank higher. We
          also optimize for YouTube suggested videos to boost organic reach.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>Trending YouTube keyword analysis</li>
          <li>Competitor keyword research</li>
          <li>Long-tail and topic-based keyword selection</li>
          <li>State-specific Tamil Nadu search term optimization</li>
          <li>Suggested video & browse feature optimization</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Titles & Descriptions ===== */}

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Titles & Descriptions That Rank Better
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          Our experts craft keyword-rich titles and detailed video descriptions
          that make your videos easier for YouTube and Google to understand and
          promote.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>SEO-optimized titles with primary keywords</li>
          <li>High-engagement description writing</li>
          <li>Keyword density maintained naturally</li>
          <li>SEO-friendly hashtags & tags</li>
          <li>Optimized first 150 characters for YouTube ranking</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Thumbnail Optimization ===== */}

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          High-CTR Thumbnail Design
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          We design attention-grabbing thumbnails using bold text, bright
          colors, and high-quality visuals to greatly increase your
          click-through rate.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>Custom thumbnail design</li>
          <li>High-contrast color combinations</li>
          <li>Bold fonts for maximum visibility</li>
          <li>Emotion-driven visuals that get clicks</li>
          <li>Brand-consistent layout & logo placements</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Audience Retention ===== */}

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Audience Retention & Video Structure
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          Higher retention → higher ranking. We optimize your video structure,
          hooks, and flow to keep viewers watching longer, directly improving
          your YouTube search ranking.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>Strong hook in first 5 seconds</li>
          <li>Clear and structured content flow</li>
          <li>Retention-optimized scripting</li>
          <li>Engagement triggers (CTA, polls, comments)</li>
          <li>Viewer psychology-based editing guidance</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Technical SEO ===== */}

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Technical Video SEO
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          We optimize filenames, add subtitles, choose correct categories, apply
          keyword tagging, create chapters, playlists, end screens, and info
          cards to increase visibility.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>SEO-friendly video filenames</li>
          <li>Closed captions & subtitles</li>
          <li>Category & playlist optimization</li>
          <li>End screen and info card strategy</li>
          <li>Video chapters with keyword-rich titles</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Business Benefits ===== */}

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Why Your Business Needs Video SEO
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          Whether you're promoting products, services, training programs, or
          brand videos, Video SEO helps your business get organic reach across
          Tamil Nadu and beyond—without spending on ads.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>Organic visibility on YouTube & Google</li>
          <li>Higher watch time and audience retention</li>
          <li>More leads & customer inquiries</li>
          <li>Improved brand authority and trust</li>
          <li>Long-term video growth without ads</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ===== Analytics ===== */}

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Performance Tracking & Analytics
        </Typography>

        <Typography sx={{ color: colors.black, mb: 3 }}>
          We continually track impressions, clicks, watch-time, audience
          demographics, and keyword rankings to improve your video growth every
          week.
        </Typography>

        <Box component="ul" sx={{ color: colors.black, pl: 3, mb: 4 }}>
          <li>YouTube analytics monitoring</li>
          <li>Audience demographics insights</li>
          <li>Keyword rank tracking</li>
          <li>CTR & engagement improvement</li>
          <li>Weekly performance reporting</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* CTA */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
        >
          Boost Your Visibility with Professional Video SEO
        </Typography>

        <Typography sx={{ color: colors.black, mb: 4 }}>
          Our expert team at Rohil Technologies helps your videos rank higher,
          gain organic views, and convert viewers into customers.
        </Typography>

        <Typography sx={{ color: colors.black, mb: 4 }}>
          Students and freshers can join our{" "}
          <Link
            underline="hover"
            onClick={handleScroll}
            style={{ cursor: "pointer" }}
          >
            Digital Marketing Internship Program
          </Link>{" "}
          to learn Video SEO and YouTube optimization practically.
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
          Get Free Video SEO Consultation
        </Button>
      </Container>
    </>
  );
}
