import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
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
  ExpandLess,
  ExpandMore,
  ArrowRight,
  BarChart,
  People,
  TrendingUp,
  Email,
  Receipt,
  Build,
  Assessment,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "./Colors";
import { useNavigate } from "react-router-dom";

// Menu data
const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Products", link: "/" }, // placeholder link
  { label: "Services", link: "/" }, // placeholder link
  { label: "Technologies", link: "/" }, // placeholder link
  { label: "Digital", link: "/" }, // placeholder link
  { label: "Careers", link: "/careers" },
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

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorServices, setAnchorServices] = useState(null);
  const [anchorTechnologies, setAnchorTechnologies] = useState(null);
  const [anchorProducts, setAnchorProducts] = useState(null);
  const [anchorDigital, setAnchorDigital] = useState(null);

  const [anchorConsulting, setAnchorConsulting] = useState(null);
  const [anchorManagement, setAnchorManagement] = useState(null);
  const [anchorBusiness, setAnchorBusiness] = useState(null);
  const [anchorOperations, setAnchorOperations] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [digitalOpen, setDigitalOpen] = useState(false);

  const [consultingOpen, setConsultingOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [operationsOpen, setOperationsOpen] = useState(false);

  const anchorEls = [
    anchorConsulting,
    anchorManagement,
    anchorBusiness,
    anchorOperations,
  ];
  const setAnchorEls = [
    setAnchorConsulting,
    setAnchorManagement,
    setAnchorBusiness,
    setAnchorOperations,
  ];

  const subIsOpens = [
    consultingOpen,
    managementOpen,
    businessOpen,
    operationsOpen,
  ];
  const subToggles = [
    () => setConsultingOpen((prev) => !prev),
    () => setManagementOpen((prev) => !prev),
    () => setBusinessOpen((prev) => !prev),
    () => setOperationsOpen((prev) => !prev),
  ];

  const closeTimeouts = useRef({});

  const handleMouseEnterItem = (e, index) => {
    if (closeTimeouts.current[index]) {
      clearTimeout(closeTimeouts.current[index]);
      delete closeTimeouts.current[index];
    }
    setAnchorEls[index](e.currentTarget);
  };

  const handleMouseLeaveItem = (index) => {
    closeTimeouts.current[index] = setTimeout(() => {
      setAnchorEls[index](null);
      delete closeTimeouts.current[index];
    }, 150);
  };

  const handleMouseEnterSub = (index) => {
    if (closeTimeouts.current[index]) {
      clearTimeout(closeTimeouts.current[index]);
      delete closeTimeouts.current[index];
    }
  };

  const handleMouseLeaveSub = (index) => {
    closeTimeouts.current[index] = setTimeout(() => {
      setAnchorEls[index](null);
      delete closeTimeouts.current[index];
    }, 150);
  };

  const handleNavigate = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    color: colors.black,
    fontWeight: "bold",
    textTransform: "none",
    // fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.2rem" },
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    px: { xs: 1, sm: 1.5 },
    "&:hover": {
      color: colors.white,
      backgroundColor: colors.darkBlue,
      borderRadius: 1,
    },
  };

  const drawerItemStyle = {
    color: colors.black,
    fontWeight: "bold",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
    "&:hover": {
      backgroundColor: colors.darkBlue,
      color: colors.white,
    },
  };

  const handleMobileNavigate = (link) => {
    handleNavigate(link);
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: colors.white, boxShadow: 2 }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 1, sm: 2, md: 4 },
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="/logo.png"
          alt="Logo"
          sx={{ height: 50, mr: 2, cursor: "pointer" }}
          onClick={() => handleNavigate("/")}
        />

        {/* Desktop Menu */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {pages.map((page) => {
              if (page.label === "Products") {
                return (
                  <Button
                    key={page.label}
                    sx={buttonStyle}
                    onClick={(e) => setAnchorProducts(e.currentTarget)}
                  >
                    {page.label} ▼
                  </Button>
                );
              }
              if (page.label === "Services") {
                return (
                  <Button
                    key={page.label}
                    sx={buttonStyle}
                    onClick={(e) => setAnchorServices(e.currentTarget)}
                  >
                    {page.label} ▼
                  </Button>
                );
              }
              if (page.label === "Technologies") {
                return (
                  <Button
                    key={page.label}
                    sx={buttonStyle}
                    onClick={(e) => setAnchorTechnologies(e.currentTarget)}
                  >
                    {page.label} ▼
                  </Button>
                );
              }
              if (page.label === "Digital") {
                return (
                  <Button
                    key={page.label}
                    sx={buttonStyle}
                    onClick={(e) => setAnchorDigital(e.currentTarget)}
                  >
                    {page.label} ▼
                  </Button>
                );
              }
              return (
                <Button
                  key={page.label}
                  onClick={() => handleNavigate(page.link)}
                  sx={buttonStyle}
                >
                  {page.label}
                </Button>
              );
            })}

            {/* Dropdowns */}
            <Menu
              anchorEl={anchorServices}
              open={Boolean(anchorServices)}
              onClose={() => setAnchorServices(null)}
              MenuListProps={{ onMouseLeave: () => setAnchorServices(null) }}
            >
              {services.map((item, index) => (
                <React.Fragment key={item.label}>
                  <MenuItem
                    onMouseEnter={(e) => handleMouseEnterItem(e, index)}
                    onMouseLeave={() => handleMouseLeaveItem(index)}
                    sx={drawerItemStyle}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    {item.label}
                    <ArrowRight sx={{ ml: "auto", color: "inherit" }} />
                  </MenuItem>
                  {item.subItems && (
                    <Menu
                      anchorEl={anchorEls[index]}
                      open={Boolean(anchorEls[index])}
                      onClose={() => setAnchorEls[index](null)}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onMouseEnter={() => handleMouseEnterSub(index)}
                      onMouseLeave={() => handleMouseLeaveSub(index)}
                    >
                      {item.subItems.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => handleNavigate(subItem.link)}
                          sx={drawerItemStyle}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            {subItem.icon}
                          </ListItemIcon>
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </React.Fragment>
              ))}
            </Menu>

            <Menu
              anchorEl={anchorTechnologies}
              open={Boolean(anchorTechnologies)}
              onClose={() => setAnchorTechnologies(null)}
              MenuListProps={{
                onMouseLeave: () => setAnchorTechnologies(null),
              }}
            >
              {technologies.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleNavigate(item.link)}
                  sx={drawerItemStyle}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>

            <Menu
              anchorEl={anchorProducts}
              open={Boolean(anchorProducts)}
              onClose={() => setAnchorProducts(null)}
              MenuListProps={{ onMouseLeave: () => setAnchorProducts(null) }}
            >
              {products.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleNavigate(item.link)}
                  sx={drawerItemStyle}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>

            <Menu
              anchorEl={anchorDigital}
              open={Boolean(anchorDigital)}
              onClose={() => setAnchorDigital(null)}
              MenuListProps={{ onMouseLeave: () => setAnchorDigital(null) }}
            >
              {digital.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleNavigate(item.link)}
                  sx={drawerItemStyle}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: colors.black }} />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: colors.white,
              width: "80%",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: colors.black }} />
            </IconButton>
          </Box>
          <List>
            {pages
              .filter(
                (page) =>
                  !["Products", "Services", "Technologies", "Digital"].includes(
                    page.label
                  )
              )
              .map((page) => (
                <ListItem
                  key={page.label}
                  button
                  onClick={() => handleMobileNavigate(page.link)}
                  sx={drawerItemStyle}
                >
                  <ListItemText primary={page.label} />
                </ListItem>
              ))}
            {/* Mobile Submenus */}
            {[
              {
                title: "Services",
                items: services,
                open: servicesOpen,
                toggle: () => setServicesOpen(!servicesOpen),
              },
              {
                title: "Technologies",
                items: technologies,
                open: technologiesOpen,
                toggle: () => setTechnologiesOpen(!technologiesOpen),
              },
              {
                title: "Products",
                items: products,
                open: productsOpen,
                toggle: () => setProductsOpen(!productsOpen),
              },
              {
                title: "Digital",
                items: digital,
                open: digitalOpen,
                toggle: () => setDigitalOpen(!digitalOpen),
              },
            ].map((menu) => (
              <React.Fragment key={menu.title}>
                <ListItem button onClick={menu.toggle} sx={drawerItemStyle}>
                  <ListItemText primary={menu.title} />
                  {menu.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={menu.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.title === "Services"
                      ? services.map((topItem, index) => (
                          <React.Fragment key={topItem.label}>
                            <ListItem
                              button
                              onClick={subToggles[index]}
                              sx={{ pl: 4, ...drawerItemStyle }}
                            >
                              <ListItemIcon
                                sx={{ color: "inherit", minWidth: 36 }}
                              >
                                {topItem.icon}
                              </ListItemIcon>
                              <ListItemText primary={topItem.label} />
                              {subIsOpens[index] ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </ListItem>
                            <Collapse
                              in={subIsOpens[index]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {topItem.subItems.map((subItem) => (
                                  <ListItem
                                    key={subItem.label}
                                    button
                                    onClick={() =>
                                      handleMobileNavigate(subItem.link)
                                    }
                                    sx={{ pl: 7, ...drawerItemStyle }}
                                  >
                                    <ListItemIcon
                                      sx={{ color: "inherit", minWidth: 36 }}
                                    >
                                      {subItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={subItem.label} />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          </React.Fragment>
                        ))
                      : menu.items.map((item) => (
                          <ListItem
                            key={item.label}
                            button
                            onClick={() => handleMobileNavigate(item.link)}
                            sx={{ pl: 4, ...drawerItemStyle }}
                          >
                            <ListItemIcon
                              sx={{ color: "inherit", minWidth: 36 }}
                            >
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
