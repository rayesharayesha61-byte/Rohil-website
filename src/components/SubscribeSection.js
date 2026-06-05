import React, { useRef, useState } from "react"; // CHANGE: Added useRef (for form) and useState (for loading)
import emailjs from "@emailjs/browser"; // NEW: Import for sending emails
import {
  Box,
  Typography,
  Button,
  TextField,
  Fade,
  useTheme,
  useMediaQuery,
  InputAdornment,
  CircularProgress, // NEW: For a spinning loader
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import colors from "./Colors";

// NEW: Add your credentials here (replace with real ones)
const SERVICE_ID = "service_4xr2xsr"; 
const TEMPLATE_ID = "template_1flhbbi"; // From Step 1
const PUBLIC_KEY = "89MslMY5i1CXmPK-d"; // From Step 2

const SubscribeSection = () => { 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const formRef = useRef(); // NEW: Points to the form for EmailJS
  const [isLoading, setIsLoading] = useState(false); // NEW: Tracks if sending

  const handleSubscribe = async (e) => {
    // CHANGE: Made async for await
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsLoading(true); // NEW: Show loading spinner

    try {
      // NEW: Send email with EmailJS (replaces mailto)
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      alert(
        "Subscription successful! Thank you for subscribing to Rohil Technologies. We'll be in touch soon!"
      );
      e.target.reset(); // Clear the field
    } catch (error) {
      console.error("Failed to send:", error); // Logs to browser console for debugging
      alert("Oops! Try again or email admin@rohiltechnologies.com directly.");
    } finally {
      setIsLoading(false); // NEW: Hide loading
    }
  };

  return (
    <Box
      sx={{
        flexBasis: { xs: "100%", md: "25%" },
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.darkBlue} 100%)`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        color: colors.white,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
          animation: "shimmer 2s infinite",
        },
        "@keyframes shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      }}
    >
      <Fade in timeout={800}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 800,
            fontSize: { xs: "1.5rem", md: "1.75rem" },
            letterSpacing: "-0.025em",
            position: "relative",
            zIndex: 1,
          }}
        >
          Subscribe for Updates
        </Typography>
      </Fade>

      <Fade in timeout={1000}>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            opacity: 0.95,
            lineHeight: 1.6,
            fontSize: { xs: "0.95rem", md: "1rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          Stay informed on Rohil Technologies’ latest products, services,
          innovations, and insights to keep ahead in trends.
        </Typography>
      </Fade>

      <Fade in timeout={1200}>
        <Box
          ref={formRef} // NEW: Links form to EmailJS
          component="form"
          onSubmit={handleSubscribe}
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <TextField
            type="email"
            name="email" // IMPORTANT: Matches {{email}} in your template
            placeholder="Enter your email"
            required
            variant="outlined"
            fullWidth
            disabled={isLoading} // NEW: Locks input while sending
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ mr: 0.5 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={
                      isLoading ? (
                        <CircularProgress size={20} color="inherit" /> // NEW: Spinner
                      ) : (
                        <SendIcon />
                      )
                    }
                    disabled={isLoading} // NEW: Locks button
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      background: `linear-gradient(45deg, ${colors.accentOrange} 30%, ${colors.accentYellow} 90%)`,
                      color: colors.white,
                      fontWeight: 700,
                      textTransform: "none",
                      boxShadow: "0 2px 12px rgba(255, 106, 0, 0.3)",
                      minWidth: { xs: "auto", md: 120 },
                      px: { xs: 1.5, md: 2 },
                      py: 0.75,
                      fontSize: { xs: "0.875rem", md: "0.95rem" },
                      "&:hover": {
                        background: `linear-gradient(45deg, ${colors.accentRed} 30%, ${colors.accentOrange} 90%)`,
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 16px rgba(255, 106, 0, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isMobile ? "" : isLoading ? "Sending..." : "Subscribe"}{" "}
                    {/* NEW: Changes text */}
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: colors.white,
                pr: 0,
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
                "&.Mui-focused": {
                  borderColor: colors.white,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
                "& fieldset": { border: "none" },
                ...(isLoading && { opacity: 0.7 }), // NEW: Dims during load
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": { color: colors.white },
              },
              "& .MuiInputBase-input": {
                color: colors.white,
                "&::placeholder": {
                  color: "rgba(255, 255, 255, 0.6)",
                  opacity: 1,
                },
              },
            }}
          />
        </Box>
      </Fade>

      {/* Subtle decorative element */}
      <Box
        sx={{
          position: "absolute",
          bottom: -20,
          right: -20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          opacity: 0.5,
        }}
      />
    </Box>
  );
};

export default SubscribeSection;
