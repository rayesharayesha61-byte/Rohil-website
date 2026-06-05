import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  BusinessCenter,
  ManageAccounts,
  Business,
  Settings,
  Dashboard,
  Payment,
  AppSettingsAlt,
  Code,
  PhoneAndroid,
  Web,
  Support,
  Analytics,
  BugReport,
  Language,
  Campaign,
  Brush,
  BarChart,
  People,
  TrendingUp,
  Receipt,
  Build,
  Assessment,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SubscribeSection from "./SubscribeSection";
// import { Link } from "react-router-dom";
// import ScrollToTopLink from "../ScrollToTopLink";
// Navigation data
const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Careers / Internship", link: "/careers" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const services = [
  {
    label: "Consulting",
    icon: <BusinessCenter />,
    subItems: [
      {
        label: "Business Analytics",
        link: "/consulting/business-analytics",
        icon: <Analytics />,
      },
      {
        label: "Business Consulting",
        link: "/consulting/business-consulting",
        icon: <Business />,
      },
      {
        label: "Data Analytics",
        link: "/consulting/data-analytics",
        icon: <BarChart />,
      },
    ],
  },
  {
    label: "Management",
    icon: <ManageAccounts />,
    subItems: [
      {
        label: "IT Management",
        link: "/management/it-management",
        icon: <ManageAccounts />,
      },
      {
        label: "Resource Management",
        link: "/management/resource-management",
        icon: <People />,
      },
    ],
  },
  {
    label: "Business",
    icon: <Business />,
    subItems: [
      {
        label: "Business Development",
        link: "/business/business-development",
        icon: <TrendingUp />,
      },
      {
        label: "Email Marketing",
        link: "/business/email-marketing",
        icon: <Email />,
      },
    ],
  },
  {
    label: "Operations",
    icon: <Settings />,
    subItems: [
      { label: "Audit", link: "/operations/audit", icon: <Receipt /> },
      {
        label: "Business Process Solutions",
        link: "/operations/business-process-solutions",
        icon: <Build />,
      },
      { label: "Survey", link: "/operations/survey", icon: <Assessment /> },
    ],
  },
];

const technologies = [
  {
    label: "Application Development",
    link: "/application-development",
    icon: <AppSettingsAlt />,
  },
  {
    label: "Software Development",
    link: "/software-development",
    icon: <Code />,
  },
  { label: "Mobile Apps", link: "/mobile", icon: <PhoneAndroid /> },
  { label: "Websites", link: "/website", icon: <Web /> },
  {
    label: "App Maintenance & Support",
    link: "/application-maintenance",
    icon: <Support />,
  },
  {
    label: "Business Analysis",
    link: "/business-analysis",
    icon: <Analytics />,
  },
  { label: "Testing", link: "/testing", icon: <BugReport /> },
  { label: "Web Technologies", link: "/web-technologies", icon: <Language /> },
];

const products = [
  { label: "CRM Software", link: "/crm", icon: <Dashboard /> },
  { label: "Billing Software", link: "/billing", icon: <Payment /> },
  { label: "ERP", link: "/erp", icon: <BusinessCenter /> },
  { label: "HRMS", link: "/hrms", icon: <ManageAccounts /> },
];

const digital = [
  {
    label: "Digital Marketing",
    link: "/digital-marketing",
    icon: <Campaign />,
  },
  { label: "Designs", link: "/design", icon: <Brush /> },
];

const Footer = () => {
  const navigate = useNavigate();
  const linkStyle = {
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": { color: "#1976d2" },
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const allSubServices = services.flatMap((category) => category.subItems);

  return (
    <Box
      sx={{
        background: "#111",
        color: "#fff",
        py: { xs: 4, md: 6 },
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        {/* ====== Main Footer Sections ====== */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {/* Company Info */}
          <Box sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Rohil Technologies
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              At Rohil Technologies, we deliver innovative and end-to-end
              software development solutions designed to help businesses
              overcome challenges, enhance efficiency, and achieve sustainable
              digital growth.
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              By combining advanced technologies with proven IT strategies, we
              simplify business processes, reduce operational costs, and empower
              our clients to stay ahead in today’s fast-evolving digital
              landscape.
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {[
                {
                  IconComp: Facebook,
                  url: "https://www.facebook.com/share/1NPqzNiC1r/",
                },
                { IconComp: Twitter, url: "https://x.com/technologi38332" },
                {
                  IconComp: Instagram,
                  url: "https://www.instagram.com/rohiltechnologies/",
                },
                { IconComp: LinkedIn, url: "" },
              ].map(({ IconComp, url }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#1976d2" },
                    borderRadius: 1,
                    transition: "all 0.3s ease",
                  }}
                >
                  <IconComp />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flexBasis: { xs: "100%", sm: "45%", md: "16%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Quick Links
            </Typography>
            <List disablePadding>
              {pages.map((item) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ py: 0.5 }}
                  onClick={() => {
                    navigate(item.link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  // component={ScrollToTopLink}
                  // to={item.link}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: linkStyle }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Services */}
          <Box sx={{ flexBasis: { xs: "100%", sm: "45%", md: "16%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Services
            </Typography>
            <List disablePadding>
              {allSubServices.map((subItem) => (
                <ListItem
                  key={subItem.label}
                  disablePadding
                  sx={{ py: 0.5 }}
                  onClick={() => {
                    navigate(subItem.link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  // component={ScrollToTopLink}
                  // to={subItem.link}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                    {subItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={subItem.label}
                    primaryTypographyProps={{ sx: linkStyle }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Technologies */}
          <Box sx={{ flexBasis: { xs: "100%", sm: "45%", md: "25%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Technologies
            </Typography>
            <List disablePadding>
              {technologies.map((item) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ py: 0.5 }}
                  onClick={() => {
                    navigate(item.link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  // component={ScrollToTopLink}
                  // to={item.link}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: linkStyle }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Products */}
          <Box sx={{ flexBasis: { xs: "100%", sm: "45%", md: "16%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Products
            </Typography>
            <List disablePadding>
              {products.map((item) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ py: 0.5 }}
                  onClick={() => {
                    navigate(item.link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  //                 component={ScrollToTopLink}
                  // to={item.link}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: linkStyle }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Digital */}
          <Box sx={{ flexBasis: { xs: "100%", sm: "45%", md: "16%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Digital
            </Typography>
            <List disablePadding>
              {digital.map((item) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ py: 0.5 }}
                  onClick={() => {
                    navigate(item.link);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  //                component={ScrollToTopLink}
                  // to={item.link}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: linkStyle }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Contact Info */}
          <Box
            sx={{ flexBasis: { xs: "100%", md: "25%" }, mt: { xs: 4, md: 0 } }}
          >
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              Contact Info
            </Typography>
            <List disablePadding>
              <ListItem disablePadding sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                  <Phone />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      +91 78249 28339 <br /> +91 97518 67879
                    </>
                  }
                  primaryTypographyProps={{
                    sx: { color: "#fff", opacity: 0.9 },
                  }}
                />
              </ListItem>

              <ListItem disablePadding sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary="admin@rohiltechnologies.com"
                  primaryTypographyProps={{
                    sx: { color: "#fff", opacity: 0.9 },
                  }}
                />
              </ListItem>

              <ListItem disablePadding sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText
                  primary="1st Floor, Canara Bank Building, Madura Coats Colony, Sivagami Puram, Virudhunagar - 626001. | UAE"
                  primaryTypographyProps={{
                    sx: { color: "#fff", opacity: 0.9 },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          {/* Query Button */}
          {/* <Box sx={{ flexBasis: { xs: "100%", md: "25%" } }}>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 700 }}>
              For Any Queries
            </Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
              }}
              sx={{
                mt: 1,
                backgroundColor: "#1976d2",
                color: "#fff",
                borderRadius: 2,
                fontWeight: 700,
                textTransform: "none",
                py: 1.5,
                boxShadow: 2,
                "&:hover": { backgroundColor: "#1565c0", boxShadow: 3 },
              }}
            >
              Contact Now
            </Button>
          </Box> */}
          {/* Subscribe Section */}
          <SubscribeSection />
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2026 Rohil Technologies. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
