// components/Loader.js
import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import colors from "./Colors";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: colors.darkBlue,
        color: colors.white,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/logo512.png" // Replace with your logo path
          alt="Rohil Technologies"
          style={{ width: 120, height: 120 }}
        />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          height: "4px",
          backgroundColor: colors.accentYellow,
          borderRadius: "2px",
          marginTop: "20px",
        }}
      />
      <Typography variant="body1" sx={{ mt: 3, letterSpacing: 1 }}>
        Loading...
      </Typography>
    </Box>
  );
}
