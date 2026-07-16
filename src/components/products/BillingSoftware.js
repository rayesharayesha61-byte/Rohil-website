// src/components/BillingSoftware.js
import React from "react";
import { Box, Typography, Container, Divider,Button,Grid,Paper } from "@mui/material";
import colors from "../Colors";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function BillingSoftware() {
  // ===== ZigZag Sections for Billing Software Features =====
  const zigZagSections = [
    {
      title: "Easy Billing",
      text: "Simplify your invoicing process with Rohil Technologies Billing Software — an intuitive and efficient platform designed for accuracy and ease of use. Generate professional invoices in just a few clicks, reduce manual errors, and streamline your workflow. Our system ensures fast, error-free billing that saves valuable time and enhances productivity, allowing you to focus on growing your business while maintaining clear, transparent, and professional financial transactions with your clients at every stage.",
      img: "/products/billing1.png",
      imgLeft: true,
    },
    {
      title: "Financial Insights",
      text: "Gain complete visibility into your business performance with advanced financial insights. Track revenue, expenses, and cash flow in real time to make data-driven decisions that improve profitability. With detailed analytics and reporting tools, you can identify trends, forecast growth, and optimize your business strategy. This financial intelligence empowers your company to maintain better control, ensure sustainable growth, and achieve financial stability with greater confidence and accuracy across all billing operations.",
      img: "/products/billing2.png",
      imgLeft: false,
    },
    {
      title: "Customer Management",
      text: "Efficiently manage your customer information with centralized access to detailed profiles, payment history, and transaction records. Rohil Technologies Billing Software helps you maintain stronger relationships by ensuring smooth communication and timely updates. Improve client satisfaction through organized data management and personalized billing experiences. With an easily searchable customer database, your team can quickly access relevant information, streamline operations, and deliver a professional, reliable experience that builds loyalty and long-term business success.",
      img: "/products/billing3.png",
      imgLeft: true,
    },
    {
      title: "Recurring Billing",
      text: "Automate your subscription and service-based invoicing with seamless recurring billing functionality. Schedule regular invoices, reduce manual effort, and maintain consistent cash flow without worrying about missed payments. Our system ensures accuracy and reliability while enhancing client convenience. With Rohil Technologies’ smart billing automation, you can manage ongoing client relationships efficiently, improve payment consistency, and focus on delivering exceptional services instead of repetitive administrative tasks, boosting overall business efficiency and customer satisfaction.",
      img: "/products/billing4.png",
      imgLeft: false,
    },
    {
      title: "Payment Integration",
      text: "Integrate your billing system with popular and secure payment gateways to enable smooth, online transactions. Provide your clients with multiple payment options, from credit cards to digital wallets, and ensure quick, hassle-free collections. Rohil Technologies Billing Software simplifies your payment process, reduces delays, and improves cash flow. By combining automation and flexibility, it ensures secure financial transactions, promotes client convenience, and enhances your overall business performance through faster and more efficient payment management.",
      img: "/products/billing5.png",
      imgLeft: true,
    },
    {
      title: "Cloud Backup",
      text: "Secure your business data with reliable cloud-based backup solutions. Access invoices, reports, and customer details from anywhere, anytime, ensuring uninterrupted operations. Our cloud infrastructure keeps your financial information safe, encrypted, and instantly retrievable. Whether you’re working remotely or on-site, your billing data remains protected from loss or damage. This flexibility helps you maintain business continuity, enhance team collaboration, and improve productivity while keeping your sensitive data safe within a modern, scalable billing system.",
      img: "/products/billing6.png",
      imgLeft: false,
    },
  ];

  // ===== Grid Sections (Additional Benefits for Billing Software) =====
  const gridSections = [
    {
      title: "Additional Benefits",
      items: [
        {
          title: "Improve Accuracy",
          text: "Reduce billing errors and ensure precise invoicing for all transactions, enhancing client trust and maintaining professionalism.",
          icon: "mdi:check-circle-outline",
        },
        {
          title: "Save Time",
          text: "Automate repetitive billing tasks to free up time for strategic business activities, boosting overall efficiency.",
          icon: "mdi:clock-outline",
        },
        {
          title: "Enhanced Cash Flow",
          text: "Monitor and optimize revenue streams with timely invoicing and integrated payment options to maintain healthy cash flow.",
          icon: "mdi:currency-usd",
        },
        {
          title: "Customer Satisfaction",
          text: "Deliver professional and timely invoices, improving transparency, trust, and overall client satisfaction.",
          icon: "mdi:account-heart-outline",
        },
        {
          title: "Secure Data",
          text: "Protect sensitive financial and customer information with secure cloud storage and advanced access controls.",
          icon: "mdi:shield-lock-outline",
        },
        {
          title: "Scalable Solution",
          text: "Easily expand and adapt the billing system as your business grows, supporting more clients, transactions, and teams effortlessly.",
          icon: "mdi:database-plus",
        },
      ],
    },
  ];
const services = [
  {
    title: "About Us",
    description: "Learn more about Rohil Technologies.",
    icon: "mdi:account-group",
    path: "/about",
  },
  
  {
    title: "Web Development",
    description: "Modern responsive website solutions.",
    icon: "mdi:web",
    path: "/web-technologies",
  },
  {
    title: "Mobile App Development",
    description: "Android & iOS app development.",
    icon: "mdi:cellphone",
    path: "/mobile",
  },
 
  

 
];
  return (
    <>
      {/* ===== Hero Banner ===== */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/products/billing.png')",
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
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
       <Typography
  component="h1"
  variant="h2"
  sx={{
    fontWeight: "bold",
    fontSize: { xs: "2rem", md: "3rem" },
  }}
>
  Smart Billing Software for Modern Businesses
</Typography>
        </Box>
      </Box>

      {/* ===== Zigzag Sections ===== */}
      {zigZagSections.map((section, index) => (
        <Container key={index} sx={{ py: 5 }}>
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
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{ mb: 3, fontWeight: "bold", color: colors.darkBlue }}
              >
                {section.title}
              </Typography>
              <Typography sx={{ color: colors.grey }}>
                {section.text}
              </Typography>
            </Box>
          </Box>
          {index < zigZagSections.length - 1 && <Divider sx={{ mt: 8 }} />}
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
      <Container sx={{ py: { xs: 6, md: 8 } }}>
  <Typography
    component="h2"
    variant="h3"
    sx={{
      fontWeight: 700,
      color: colors.darkBlue,
      textAlign: "center",
      mb: 3,
    }}
  >
    Simplify Your Billing with Rohil Technologies
  </Typography>

  <Typography
    sx={{
      maxWidth: "900px",
      mx: "auto",
      textAlign: "center",
      color: colors.grey,
      lineHeight: 1.9,
      fontSize: "1.05rem",
    }}
  >
    Rohil Technologies Billing Software is a powerful and easy-to-use
    solution designed for retail stores, supermarkets, pharmacies,
    restaurants, wholesale businesses, and service providers. Our software
    enables GST-compliant billing, inventory management, customer
    management, sales reporting, and real-time business analytics to improve
    productivity and business growth.
  </Typography>
</Container>
<Box
  sx={{
    py: { xs: 5, md: 8 },
    background: "#f8fbff",
  }}
>
  <Container maxWidth="lg"
  sx={{
    px:{xs:2,sm:3,md:0}
  }}>
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        fontWeight: 700,
        color: colors.darkBlue,
        mb: 2,
        fontSize: { xs: "2rem", md: "3rem" },
      }}
    >
      Explore More Services
    </Typography>

    <Typography
      sx={{
        textAlign: "center",
        color: colors.grey,
        maxWidth: 700,
        mx: "auto",
        mb: 5,
        px: 2,
      }}
    >
      Discover our innovative technology solutions designed to help your
      business grow faster and smarter.
    </Typography>

    <Grid container spacing={{xs:2.5,sm:3,md:4}}>
      {services.map((item, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Paper
            component={Link}
            to={item.path}
            elevation={3}
            sx={{
              textDecoration: "none",
              borderRadius: 4,
              p: 4,
              height: "100%",
              mb:{xs:2,sm:0},
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 8,
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#eef5ff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Icon
                icon={item.icon}
                width={42}
                color={colors.primary}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: colors.darkBlue,
                mb: 2,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: colors.grey,
                mb: 4,
                flexGrow: 1,
              }}
            >
              {item.description}
            </Typography>

            <Button
              component={Link}
              to={item.path}
              variant="contained"
              fullWidth
              endIcon={<Icon icon="mdi:arrow-right" />}
              sx={{
                borderRadius: "30px",
                py: 1.3,
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: colors.primary,
                "&:hover": {
                  backgroundColor: colors.darkBlue,
                },
              }}
            >
              Learn More
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
<Box
  sx={{
    py: 10,
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.darkBlue} 100%)`,
    color: "#fff",
    textAlign: "center",
    borderRadius: 4,
    mx: { xs: 2, md: 6 },
    my: 8,
  }}
>
  <Container maxWidth="md">
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 2,
      }}
    >
      Ready to Simplify Your Billing?
    </Typography>

    <Typography
      sx={{
        fontSize: "1.1rem",
        lineHeight: 1.8,
        opacity: 0.9,
        mb: 5,
      }}
    >
      Automate invoicing, manage inventory, generate GST-compliant bills,
      and track your business performance with Rohil Technologies Billing
      Software.
    </Typography>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Button
        component={Link}
        to="/contact"
        variant="contained"
        sx={{
          bgcolor: "#fff",
          color: colors.primary,
          px: 4,
          py: 1.5,
          borderRadius: "30px",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#f5f5f5",
          },
        }}
      >
        Request Demo
      </Button>

      <Button
        component={Link}
        to="/services"
        variant="outlined"
        sx={{
          borderColor: "#fff",
          color: "#fff",
          px: 4,
          py: 1.5,
          borderRadius: "30px",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            borderColor: "#fff",
            bgcolor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        Explore Services
      </Button>
    </Box>
  </Container>
</Box>
    </>
  );
}
