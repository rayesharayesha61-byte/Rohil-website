// src/components/ClientsCarousel.js
import React, { useState, useEffect } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "./Colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ClientsCarousel() {
  const clients = [
    {
      name: "Arun Pandi",
      company: "Crystal Tours And Travels",
      location: "Madurai",
      logo: "/clients/crystal.png",
      rating: 5,
      testimonial:
        "Rohil Technologies created an elegant website for our travel business. Our online bookings increased remarkably after the redesign.",
    },
    {
      name: "Ganavel",
      company: "SouthernCabz",
      location: "Madurai",
      logo: "/clients/SouthernCabz.png",
      rating: 5,
      testimonial:
        "Our taxi booking system is now fully automated. The website and support from Rohil Technologies have been outstanding.",
    },
    {
      name: "Stephen",
      company: "Aaris Agencies",
      location: "Coimbatore",
      logo: "/clients/Aaris.png",
      rating: 4,
      testimonial:
        "From design to delivery, the process was seamless. They understood our business and built a site that perfectly fits our brand.",
    },
    {
      name: "Victoriya Vimalarasi",
      company: "Dreams Footware",
      location: "Coimbatore",
      logo: "/clients/DreamsFootware.png",
      rating: 5,
      testimonial:
        "My eCommerce site looks amazing and works flawlessly. Sales have improved since going live—thank you Rohil Technologies!",
    },
    {
      name: "Appadurai",
      company: "Kavin Travels",
      location: "Madurai",
      logo: "/clients/Kavin.png",
      rating: 4,
      testimonial:
        "They delivered a professional travel website with smooth booking functionality. Excellent communication and quick turnaround.",
    },
    {
      name: "Princy",
      company: "Hire EBI",
      location: "Madurai",
      logo: "/clients/Hireebi.png",
      rating: 5,
      testimonial:
        "Our recruitment portal is now live thanks to Rohil Technologies. Great design, and the team was very responsive throughout.",
    },
    {
      name: "Radha Krishnan",
      company: "Eswari Pyrotech MRK Crackers",
      location: "Virudhunagar",
      logo: "/clients/eswari.png",
      rating: 5,
      testimonial:
        "They modernized our cracker business website beautifully. The site is fast, mobile-friendly, and easy to manage.",
    },
    {
      name: "Radha Krishnan",
      company: "Karamani Crackers",
      location: "KeelaThiruthangal",
      logo: "/clients/karamani.png",
      rating: 4,
      testimonial:
        "Excellent service and creative design! The website brought us more seasonal orders and brand visibility online.",
    },
    {
      name: "Mano Priyan",
      company: "Sivasurya Crackers",
      location: "KeelaThiruthangal",
      logo: "/clients/sivasurya.png",
      rating: 5,
      testimonial:
        "Very satisfied with the professional design and quick deployment. Rohil Technologies exceeded our expectations.",
    },
    {
      name: "Siva Subramaniyan",
      company: "Loyal Land Properties - Website",
      location: "Virudhunagar",
      logo: "/clients/llp.png",
      rating: 5,
      testimonial:
        "The team created an elegant property listing website. It’s user-friendly and visually appealing. Highly recommended!",
    },
    {
      name: "Siva Subramaniyan",
      company: "Loyal Land Properties - Application",
      location: "Virudhunagar",
      logo: "/clients/llp.png",
      rating: 5,
      testimonial:
        "Their mobile app solution made property management easier. Smooth performance and timely delivery!",
    },
    {
      name: "Alis Wall | Ceiling",
      company: "Alis Wall | Ceiling",
      location: "Coimbatore",
      logo: "/clients/alis.png",
      rating: 4,
      testimonial:
        "We loved the clean and creative website design. It perfectly showcases our interior design projects.",
    },
    {
      name: "Muthu Mahesh",
      company: "Mage Freight & Transport L.L.C",
      location: "Fujairah, Dubai",
      logo: "/clients/freight.png",
      rating: 5,
      testimonial:
        "The logistics website they built improved our global presence. Outstanding service and technical expertise.",
    },
    {
      name: "Muthu Mahesh",
      company: "Mage Freight & Transport L.L.C",
      location: "Fujairah, Dubai",
      logo: "/clients/freight.png",
      rating: 5,
      testimonial:
        "Their digital marketing service helped us reach international clients. Great teamwork and clear results!",
    },
    {
      name: "J. Sofia DeepanRaj",
      company: "Rohil Technologies",
      location: "Virudhunagar",
      logo: "/clients/RohileTech.jpeg",
      rating: 5,
      testimonial:
        "The CRM solution streamlined our customer management and follow-ups. It improved internal coordination and helped us track leads and projects efficiently with complete transparency.",
    },
    {
      name: "J. Sofia DeepanRaj",
      company: "Rohil Nextgen",
      location: "Virudhunagar",
      logo: "/clients/rohilNextGen.jpg",
      rating: 5,
      testimonial:
        "The Rohil NextGen mobile app is smooth, responsive, and easy to use. It allows us to manage business activities on the go and has greatly improved our operational flexibility.",
    },
    {
      name: "J. Sofia DeepanRaj",
      company: "Rohil Technologies",
      location: "Virudhunagar",
      logo: "/clients/RohileTech.jpeg",
      rating: 5,
      testimonial:
        "The retail billing software is fast, reliable, and user-friendly. It simplified billing, inventory tracking, and reporting, making daily operations more efficient and error-free.",
    },

    {
      name: "K. Ayyar Pandiyan",
      company: "AA Enterprises",
      location: "Rajapalayam",
      logo: "/clients/AA.png",
      rating: 5,
      testimonial:
        "Our industrial supply website now attracts consistent leads. Rohil Technologies truly understands business needs.",
    },
    {
      name: "Sridhar Kanagaraj",
      company: "Sivakasi Nachiyar Crackers",
      location: "Sivakasi",
      logo: "/clients/nachiyar.png",
      rating: 5,
      testimonial:
        "Their creative approach and technical strength made our eCommerce store a big success during festival season!",
    },
    {
      name: "Surenthar",
      company: "RM Gold Exchange",
      location: "Thirupur",
      logo: "/clients/RMGold.jpg",
      rating: 5,
      testimonial:
        "The website developed for our gold exchange is professional, secure, and easy for customers to use. It clearly displays gold rates and builds trust with our clients. We are very satisfied with the overall design and performance.",
    },
    {
      name: "Ajith Kumar",
      company: "Tenkasi AK Interiors",
      location: "Tenkasi",
      logo: "/clients/akinterior.jpg",
      rating: 5,
      testimonial:
        "The website perfectly represents our interior design work with a clean, modern, and professional look. It showcases our projects beautifully and has helped us attract more customer inquiries. We are extremely happy with the design and overall performance.",
    },
    {
      name: "S.Syed Abuthakir",
      company: "SSA Tours & Travels",
      location: "Virudhunagar",
      logo: "/clients/carlogo.png",
      rating: 5,
      testimonial:
        "The mobile app developed for our tours and travels business is user-friendly, fast, and reliable. It helps customers easily book services and has improved our operational efficiency. We truly appreciate the professional approach and timely delivery.",
    },
    {
      name: "Er.Babu.M",
      company: "Lakshmiharam Builders & Developers",
      location: "Virudhunagar",
      logo: "/clients/lakshmikaram.jpeg",
      rating: 5,
      testimonial:
        "The website developed for our construction business is professional, well-structured, and visually impressive. It clearly showcases our projects and has strengthened our brand presence online.",
    },
    {
      name: "Er.Babu.M",
      company: "Lakshmiharam Builders & Developers",
      location: "Virudhunagar",
      logo: "/clients/lakshmikaram.jpeg",
      rating: 5,
      testimonial:
        "Their digital marketing services helped us reach a wider audience and connect with international clients. The team delivered measurable results through strategic campaigns and excellent coordination.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = clients.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <Box
      sx={{
        py: { xs: 2, md: 4 },
        backgroundColor: "#f8fafc",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: colors.darkBlue,
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            mb: 1,
          }}
        >
          What Our Clients Say
        </Typography>

        {clients.map((client, index) => (
          <Box
            key={index}
            sx={{
              display: index === current ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              background: "#fff",
              borderRadius: 4,
              p: { xs: 3, sm: 4 },
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              position: "relative",
            }}
          >
            {/* Quotes Icon */}
            <Icon
              icon="mdi:format-quote-open"
              width="42"
              style={{
                color: colors.primary,
                opacity: 0.4,
                position: "absolute",
                top: 18,
                right: 20,
              }}
            />

            {/* Logo */}
            <Box
              component="img"
              src={client.logo}
              alt={client.company}
              sx={{
                width: { xs: "80%", sm: "60%" },
                height: "auto",
                maxHeight: { xs: 80, md: 100 },
                objectFit: "contain",
                mb: 2.5,
              }}
            />

            {/* Rating Stars */}
            <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  icon={star <= client.rating ? "bx:bxs-star" : "bx:star"}
                  width="24"
                  height="24"
                  style={{ color: "#f5b100" }}
                />
              ))}
            </Box>

            {/* Testimonial */}
            <Typography
              variant="body1"
              component="body1"
              sx={{
                color: colors.grey2,
                fontStyle: "italic",
                lineHeight: 1.6,
                mb: 3,
                px: { xs: 1, sm: 2 },
                fontSize: "1.1rem",
              }}
            >
              “{client.testimonial}”
            </Typography>

            {/* Name + Company */}
            <Typography
              variant="body1"
              component="body1"
              sx={{ fontWeight: 600, color: colors.darkBlue, fontSize: "1rem" }}
            >
              {client.name}
            </Typography>
            <Typography sx={{ color: colors.grey }}>
              {client.company} — {client.location}
            </Typography>
          </Box>
        ))}

        {/* Navigation */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translateY(-50%)",
            background: "#fff",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translateY(-50%)",
            background: "#fff",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
