import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Box } from "@mui/material";
import { Fab } from "@mui/material";
import { Icon } from "@iconify/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";
import AboutCompany from "./components/AboutCompany";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import ApplicationDev from "./components/technologies/ApplicationDev";
import SoftwareDev from "./components/technologies/SoftwareDev";
import MobileApps from "./components/technologies/MobileApps";
import WebTechnologies from "./components/technologies/WebTechnologies";
import AppMaintenance from "./components/technologies/AppMaintenance";
import BusinessAnalysis from "./components/technologies/BusinessAnalysis";
import Testing from "./components/technologies/Testing";
import WebDevelopment from "./components/technologies/WebDevelopment";
import BusinessAnalysisService from "./components/services/BusinessAnalysis";
import BusinessConsulting from "./components/services/BusinessConsulting";
import DataAnalytics from "./components/services/DataAnalytics";
import ItManagement from "./components/services/ItManagement";
import ResourceManagement from "./components/services/ResourceManagement";
import BusinessDevelopment from "./components/services/BusinessDevelopment";
import EmailMarketing from "./components/services/EmailMarketing";
import Audit from "./components/services/Audit";
import BusinessProcessSolution from "./components/services/BusinessProcessSolution";
import Surveys from "./components/services/Surveys";
import DigitalMarketing from "./components/services/DigitalMarketing";
import Designs from "./components/services/Designs";
import CRM from "./components/products/CRM";
import BillingSoftware from "./components/products/BillingSoftware";
import ERP from "./components/products/ERP";
import HRMS from "./components/products/HRMS";
import Blog from "./components/Blog";
import colors from "./components/Colors";
import ChatBot from "./components/ChatBot";
import Loader from "./components/Loader";
import Seo from "./components/services/Seo";
import SEM from "./components/services/SEM";
import EcommerceSEO from "./components/services/EcommerceSEO";
import VideoSEO from "./components/services/VideoSEO";
import { HelmetProvider } from "react-helmet-async";
function FloatingButtons() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* Back to Top Button */}
      <Fab
        aria-label="scroll to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: colors.darkBlue,
          color: colors.white,
          "&:hover": {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Icon icon="mdi:arrow-up" width={24} />
      </Fab>
      {/* Hackathon Floating Button */}
      {/* <Fab
        aria-label="go to hackathon"
        onClick={() => {
          navigate("/blog");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        sx={{
          position: "fixed",
          marginRight: 2,
          bottom: 90, // Positioned above the "Back to Top" button
          right: 16,
          backgroundColor: colors.white,
          color: colors.white,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: colors.white,
          },
          borderRadius: 0, // Remove circular shape to show image squarely
          width: 48,
          height: 48,
          minWidth: 48,
          minHeight: 48,
        }}
      >
        <img
          src="/excitingnews.png"
          alt="CODE FEST Hackathon"
          style={{ width: 100, height: 100, objectFit: "contain" }}
        />
      </Fab> */}
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
    <Router>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        {/* Spacer to prevent content from being hidden behind fixed header */}
        <Box
          component="main"
          sx={{
            flex: 1,
            pt: { xs: 8, md: 10 }, // Adjust based on header height
          }}
        >
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/home" element={<FirstPage />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route
              path="/application-development"
              element={<ApplicationDev />}
            />
            <Route path="/software-development" element={<SoftwareDev />} />
            <Route path="/mobile" element={<MobileApps />} />
            <Route path="/website" element={<WebTechnologies />} />
            <Route
              path="/application-maintenance"
              element={<AppMaintenance />}
            />
            <Route path="/business-analysis" element={<BusinessAnalysis />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/web-technologies" element={<WebDevelopment />} />
            <Route
              path="/consulting/business-analytics"
              element={<BusinessAnalysisService />}
            />
            <Route
              path="/consulting/business-consulting"
              element={<BusinessConsulting />}
            />
            <Route
              path="/consulting/data-analytics"
              element={<DataAnalytics />}
            />
            <Route
              path="/management/it-management"
              element={<ItManagement />}
            />
            <Route
              path="/management/resource-management"
              element={<ResourceManagement />}
            />
            <Route
              path="/business/business-development"
              element={<BusinessDevelopment />}
            />
            <Route
              path="/business/email-marketing"
              element={<EmailMarketing />}
            />
            <Route path="/operations/audit" element={<Audit />} />
            <Route
              path="/operations/business-process-solutions"
              element={<BusinessProcessSolution />}
            />
            <Route path="/operations/survey" element={<Surveys />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/design" element={<Designs />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/billing" element={<BillingSoftware />} />
            <Route path="/erp" element={<ERP />} />
            <Route path="/hrms" element={<HRMS />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/digital-marketing/seo" element={<Seo />} />
            <Route path="/digital-marketing/sem" element={<SEM />} />
            <Route path="/digital-marketing/ecommerce-seo" element={<EcommerceSEO />} />
            <Route path="/digital-marketing/video-seo" element={<VideoSEO />} />
          </Routes>
        </Box>
        <ChatBot />
        <FloatingButtons />
        <Footer />
      </Box>
    </Router>
    </HelmetProvider>
  );
}
 