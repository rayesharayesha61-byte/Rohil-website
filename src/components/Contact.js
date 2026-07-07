import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Breadcrumbs,
  Link,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";

import { motion } from "framer-motion";
import {  Phone, Email, WhatsApp } from "@mui/icons-material";
import colors from "./Colors";
import { Icon } from "@iconify/react";
// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\+?\d{10,}$/.test(formData.mobile.replace(/\s/g, ""))) {
      newErrors.mobile = "Mobile number must be valid (10+ digits)";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const contactInfo = [
    {
      id: 1,
      title: "Address",
      value:
        "1st Floor, Canara Bank Building, Madura Coats Colony, Sivagami Puram, Virudhunagar-626001. | UAE",
      icon: <Icon icon="mdi:map-marker" width={28} height={28} />,
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 9751867879 (or) +91 7824928339",
      icon: <Icon icon="mdi:phone" width={28} height={28} />,
    },
    {
      id: 3,
      title: "Email",
      value: "rohiltechnologies@gmail.com",
      icon: <Icon icon="mdi:email" width={28} height={28} />,
    },
  ];

  // WhatsApp Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError("Please fix the errors below to submit.");
      return;
    }
    setErrors({});
    setSubmitError("");
    const phoneNumber = "919751867879"; // Replace with your WhatsApp number
    const text = `Hello, I'm ${formData.name}.
Email: ${formData.email}
Mobile: ${formData.mobile}
Message: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/mainPage/main-contact.png')",
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
            Contact US
          </Typography>
          <Breadcrumbs
            sx={{ justifyContent: "center", display: "flex", color: "#fff" }}
            separator="›"
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="inherit">Contact US</Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>
      <Box sx={{ bgcolor: "#f5f7fa", py: 4 }}>
        <Container maxWidth="lg">
          {/* Section Title */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: colors.darkBlue,
                mb: 6,
              }}
            >
              Contact Us
            </Typography>
          </motion.div>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: colors.darkBlue }}
            >
              Get in Touch with Rohil Technologies
            </Typography>
            <Typography sx={{ color: "#444", lineHeight: 1.8 }}>
              Rohil Technologies is a leading software and web development
              company based in Virudhunagar, Tamil Nadu. Whether you need a
              professional website, mobile app, ERP, billing software, or SEO
              services, our team is here to help. You can contact us through
              phone, email, WhatsApp, or by visiting our office. We respond
              quickly and ensure friendly, professional support.
            </Typography>
          </Box>

          {/* Contact Info Cards */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            mb={6}
          >
            {contactInfo.map((item) => (
              <Card
                key={item.id}
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  "&:hover .icon-bg": {
                    bgcolor: colors.meroon,
                    transform: "rotate(15deg) scale(1.1)",
                  },
                }}
              >
                <Box
                  className="icon-bg"
                  sx={{
                    bgcolor: colors.primary,
                    color: colors.white,
                    p: 2,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: colors.meroon }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: colors.black }}>
                    {item.value}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>

          {/* WhatsApp Contact Form */}
          <Card
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
              maxWidth: 700,
              mx: "auto",
              background: colors.white,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: colors.darkBlue, mb: 3, fontWeight: "bold" }}
            >
              Send a Message via WhatsApp
            </Typography>
            {submitError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {submitError}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                margin="normal"
                required
                error={!!errors.name}
                helperText={errors.name}
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                error={!!errors.email}
                helperText={errors.email}
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                type="tel"
                variant="outlined"
                margin="normal"
                required
                error={!!errors.mobile}
                helperText={errors.mobile}
                value={formData.mobile}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
                error={!!errors.message}
                helperText={errors.message}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                startIcon={<Icon icon="mdi:whatsapp" width={24} height={24} />}
                sx={{
                  mt: 2,
                  bgcolor: colors.meroon,
                  color: colors.white,
                  fontWeight: "bold",
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 3,
                  "&:hover": { bgcolor: colors.primary },
                }}
              >
                Send via WhatsApp
              </Button>
            </form>
          </Card>
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              sx={{ color: colors.darkBlue, mb: 3, fontWeight: "bold" }}
            >
              Find Us on Google Maps
            </Typography>

            <Box sx={{ borderRadius: 3, overflow: "hidden", height: "350px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.0081782459893!2d77.9552722!3d9.5945627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e92e1d2827dd61b%3A0x9d5c3ab3c6f73659!2sRohil%20Technologies!5e0!3m2!1sen!2sin!4v1746714301791!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
          
        </Container>
      </Box>
    </>
  );
};

export default Contact;
