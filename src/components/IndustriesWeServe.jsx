import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "./Colors";
import industryContent from "./IndustryContent";

const industries = [
  { name: "Education", icon: "mdi:school" },
  { name: "Health Care", icon: "mdi:heart-pulse" },
  { name: "Accounting", icon: "mdi:calculator" },
  { name: "Finance", icon: "mdi:currency-usd" },
  { name: "Shopping / Retail", icon: "mdi:cart" },
  { name: "Ecommerce", icon: "mdi:store" },
  { name: "Social Media", icon: "mdi:thumb-up" },
  { name: "GIS", icon: "mdi:map-marker-radius" },
  { name: "Human Resources", icon: "mdi:account-group" },
  { name: "Ticketing", icon: "mdi:ticket" },
  { name: "Construction", icon: "mdi:crane" },
  { name: "Food & Beverages", icon: "mdi:food" },
  { name: "FMCG", icon: "mdi:package-variant" },
  { name: "Manufacturing", icon: "mdi:factory" },
];

// CONTENT DATA

export default function IndustriesWeServe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selected, setSelected] = useState(industries[0].name);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Auto scroll desktop
  useEffect(() => {
    if (!isMobile) {
      const el = document.getElementById(`industry-${selected}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selected, isMobile]);

  const Sidebar = () => (
    <Box
      sx={{
        width: { xs: 280, md: 320 },
        bgcolor: "#ffffff",
        borderRadius: { xs: 0, md: "20px" },
        boxShadow: { md: "0 12px 40px rgba(0,0,0,0.08)" },
        border: { md: "1px solid #e6e8f0" },
        maxHeight: { md: 500 },
        overflowY: "auto",
        p: 3,
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: 700, mb: 2, color: colors.darkBlue }}
      >
        Select Industry
      </Typography>

      <List disablePadding>
        {industries.map((ind) => (
          <ListItemButton
            id={`industry-${ind.name}`}
            key={ind.name}
            selected={selected === ind.name}
            onClick={() => {
              setSelected(ind.name);
              if (isMobile) setDrawerOpen(false);
            }}
            sx={{
              borderRadius: "12px",
              mb: 1.2,
              py: 2,
              transition: "0.3s",
              "&.Mui-selected": {
                bgcolor: `${colors.primary}15`,
                color: colors.primary,
                borderLeft: `4px solid ${colors.primary}`,
              },
              "&:hover": { bgcolor: "#f5f8ff" },
            }}
          >
            <Icon
              icon={ind.icon}
              width={22}
              height={22}
              style={{ marginRight: 14 }}
            />

            <ListItemText
              primary={ind.name}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const content = industryContent[selected];

  return (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5, mt: 2 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 2,
          color: colors.darkBlue,
        }}
      >
        Industries We Serve
      </Typography>

      {isMobile && (
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              bgcolor: colors.primary,
              color: "#fff",
              width: 58,
              height: 58,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          gap: { xs: 0, md: 5 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {!isMobile && <Sidebar />}

        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          anchor="left"
          PaperProps={{ sx: { width: 280 } }}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Sidebar />
        </Drawer>

        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={5}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "20px",
              bgcolor: "#fff",
              border: "1px solid #ececec",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              {content.heading}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              {content.intro}
            </Typography>

            {content.sections.map((sec, idx) => (
              <Box key={idx} mb={4}>
                {sec.title && (
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: colors.darkBlue,
                    }}
                  >
                    {sec.title}
                  </Typography>
                )}

                {sec.text ? (
                  <Typography sx={{ lineHeight: 1.7 }}>{sec.text}</Typography>
                ) : (
                  <ul style={{ paddingLeft: "20px" }}>
                    {sec.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
