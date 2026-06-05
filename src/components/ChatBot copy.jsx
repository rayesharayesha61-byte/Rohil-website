import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "./Colors";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! Welcome to Rohil Technologies. I'm your AI Assistant, here to provide insights on our innovative software solutions, consulting services, and career opportunities. How may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");
  const chatEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotReply = (text) => {
    const msg = text.toLowerCase().trim();

    // Greetings
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey"))
      return "Greetings! At Rohil Technologies, we specialize in cutting-edge software development, business consulting, and digital transformation. What specific area interests you—our services, technologies, or career opportunities?";

    // CRM
    if (msg.includes("crm"))
      return "Our CRM streamlines lead tracking, sales automation, and client engagement with seamless integrations. Interested in implementation details or a demo?";

    // Billing Software (Retail/Wholesale)
    if (
      msg.includes("billing") ||
      msg.includes("retail") ||
      msg.includes("wholesale")
    )
      return "Rohil's Billing Software offers inventory management, POS integration, and GST compliance for retail/wholesale. Ready for a customized quote?";

    // ERP
    if (msg.includes("erp"))
      return "Our ERP unifies finance, HR, supply chain, and inventory on a scalable platform. How can we tailor it to your industry?";

    // HRMS
    if (msg.includes("hrms"))
      return "Our HRMS handles recruitment, payroll, reviews, and compliance with secure analytics. Explore integration options?";

    // Consulting - Business Management & Business Consulting
    if (
      msg.includes("consult") ||
      msg.includes("business consulting") ||
      msg.includes("management consulting") ||
      msg.includes("business management")
    )
      return "We deliver strategic consulting to optimize operations, cut costs, and drive growth. What's your key challenge?";

    // Data Analytics
    if (msg.includes("data") || msg.includes("analytics"))
      return "Transform data into insights with advanced tools, predictive models, and real-time dashboards. Share your goals for recommendations.";

    // IT Management
    if (msg.includes("it management") || msg.includes("infrastructure"))
      return "Our IT services include cloud migration, cybersecurity, and 24/7 monitoring for scalable infrastructure. Specific project in mind?";

    // Resource Management
    if (msg.includes("resource"))
      return "Optimize workforce allocation and tracking with intuitive dashboards and forecasting. What are your current pain points?";

    // Business Development & Email Marketing
    if (msg.includes("business development"))
      return "We focus on market expansion, partnerships, and revenue strategies. How can we accelerate your objectives?";
    if (msg.includes("email marketing"))
      return "Targeted campaigns with automation, A/B testing, and analytics—GDPR compliant. What's your strategy?";

    // Digital Marketing
    if (msg.includes("digital marketing") || msg.includes("marketing"))
      return "Expertise in SEO, PPC, social media, and content for leads and ROI. Tell me about your audience.";

    // Technologies - Application Development, Software Development
    if (
      msg.includes("application development") ||
      msg.includes("software development")
    )
      return "Full-stack development with agile methods for secure, scalable solutions. What's your app vision?";

    // Mobile Apps
    if (msg.includes("mobile") || msg.includes("app"))
      return "Cross-platform apps with native-like performance on iOS and Android, including UI/UX and store optimization. Describe your idea!";

    // Websites / Web Development
    if (
      msg.includes("website") ||
      msg.includes("web development") ||
      msg.includes("web technologies")
    )
      return "Responsive sites with modern frameworks and SEO for top UX and rankings. Need an audit?";

    // App Maintenance & Support
    if (msg.includes("maintenance") || msg.includes("support"))
      return "Proactive monitoring, fixes, and 24/7 assistance to minimize downtime. How can we help your stack?";

    // Business Analysis & Testing
    if (msg.includes("business analysis") || msg.includes("testing"))
      return "Analysis for requirements/risks; testing (manual/automated) to ensure quality. Specific challenge?";

    // Design / UI-UX / Figma / Adobe XD
    if (
      msg.includes("design") ||
      msg.includes("ui") ||
      msg.includes("ux") ||
      msg.includes("figma") ||
      msg.includes("adobe xd") ||
      msg.includes("adapt")
    )
      return "Intuitive UI/UX prototypes for cross-device experiences. Share your brief!";

    // Careers / Job Openings
    if (
      msg.includes("career") ||
      msg.includes("job") ||
      msg.includes("opening")
    )
      return "Openings: Business Development Executive (Female only), Software Trainee, Digital Marketing Executive (SEO/PPC). Apply at admin@rohiltechnologies.com. Interested in one?";

    // Blog
    if (msg.includes("blog"))
      return "Insights on tech trends and strategies at https://www.rohiltechnologies.com/blog. What topic?";

    // Contact Info
    if (
      msg.includes("contact") ||
      msg.includes("reach") ||
      msg.includes("email") ||
      msg.includes("phone")
    )
      return "Connect via https://www.rohiltechnologies.com/contact";

    // Technologies General
    if (msg.includes("technology") || msg.includes("tech"))
      return "Our stack includes modern frameworks, databases, cloud services, and more—chosen for reliability and innovation. Curious about specifics?";

    // Pricing / Cost Related Queries
    if (
      msg.includes("price") ||
      msg.includes("cost") ||
      msg.includes("pricing") ||
      msg.includes("quote") ||
      msg.includes("budget") ||
      msg.includes("fee") ||
      msg.includes("rate")
    )
      return "Our pricing is flexible and customized to your project scope for optimal value. Share details on service type and scale for a tailored quote. Connect with sales for a free consultation?";

    // Default fallback
    return "Thanks for reaching out! Specify software (e.g., CRM, ERP), consulting, tech, or careers for targeted help.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);
    const reply = getBotReply(input);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 700);
  };

  return (
    <>
      {/* Floating Button */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 90,
          right: 16,
          backgroundColor: colors.darkBlue,
          color: colors.white,
          "&:hover": { backgroundColor: colors.primary },
          width: 60,
          height: 60,
          boxShadow: 4,
          zIndex: 1200,
        }}
      >
        <Icon icon={open ? "mdi:close" : "mdi:chat"} width={28} />
      </IconButton>

      {/* Chat Window */}
      {open && (
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: isMobile ? 0 : 160,
            right: isMobile ? 0 : 16,
            width: isMobile ? "100%" : 320,
            height: isMobile ? "100%" : 420,
            display: "flex",
            flexDirection: "column",
            borderRadius: isMobile ? 0 : 3,
            overflow: "hidden",
            backgroundColor: colors.white,
            zIndex: 1200,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              backgroundColor: colors.darkBlue,
              color: colors.white,
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: 16 }}>
              Rohil Technologies AI Assistant
            </Typography>
            {isMobile && (
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ color: colors.white }}
              >
                <Icon icon="mdi:close" />
              </IconButton>
            )}
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              p: 1.5,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              backgroundColor: "#fafafa",
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.from === "user"
                      ? colors.primary
                      : colors.accentPurple + "20",
                  color: msg.from === "user" ? colors.white : colors.darkBlue,
                  borderRadius: 2,
                  px: 1.5,
                  py: 1,
                  maxWidth: "75%",
                  boxShadow: 1,
                  fontSize: 14,
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  hyphens: "auto",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.4,
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
            <div ref={chatEndRef} />
          </Box>

          {/* Input */}
          <Box
            sx={{
              display: "flex",
              borderTop: "1px solid #ddd",
              p: 1,
              backgroundColor: colors.white,
            }}
          >
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <IconButton
              onClick={handleSend}
              sx={{ color: colors.primary, ml: 1 }}
            >
              <Icon icon="mdi:send" width={24} />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
}
