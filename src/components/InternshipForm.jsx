import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  TextField,
  Button,
  MenuItem,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import colors from "./Colors";

export default function InternshipForm() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    internshipType: "",
    collegeName: "",
    role: "",
    yearOfPassout: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const SERVICE_ID = "service_g94oloj";
  const TEMPLATE_ID = "template_cvlkbtv";
  const PUBLIC_KEY = "89MslMY5i1CXmPK-d";

  const internshipOptions = [
    "Digital Marketing",
    "Web Development",
    "App Development",
    "AI / ML",
    "UI/UX Design",
    "Full Stack Development",
    "Cloud & DevOps",
    "Data Science",
    "Other",
  ];

  const roleOptions = ["Student", "Working Professional"];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit mobile number required";
    if (!formData.qualification.trim())
      newErrors.qualification = "Qualification required";
    if (!formData.internshipType.trim())
      newErrors.internshipType = "Select internship type";
    if (!formData.collegeName.trim())
      newErrors.collegeName = "College name required";
    if (!formData.role.trim()) newErrors.role = "Please select one option";
    if (!formData.yearOfPassout.trim())
      newErrors.yearOfPassout = "Enter year of passing";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError("Please correct the highlighted fields.");
      return;
    }
    setSubmitError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          qualification: formData.qualification,
          internship_type: formData.internshipType,
          college_name: formData.collegeName,
          role: formData.role,
          year_of_passout: formData.yearOfPassout,
        },
        PUBLIC_KEY
      );

      alert("Application submitted successfully! We will contact you soon.");

      // 🌟 CLEAR FORM FIELDS AFTER SUBMIT
      setFormData({
        name: "",
        email: "",
        mobile: "",
        qualification: "",
        internshipType: "",
        collegeName: "",
        role: "",
        yearOfPassout: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send. Try again!");
    }
  };

  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: 8 }}>
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 3,
              color: colors.darkBlue,
            }}
          >
            Internship Application Form
          </Typography>

          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              background: colors.white,
            }}
          >
            {submitError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {submitError}
              </Alert>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                margin="normal"
                variant="outlined"
                required
                error={!!errors.name}
                helperText={errors.name}
                value={formData.name}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Email ID"
                name="email"
                margin="normal"
                variant="outlined"
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
                margin="normal"
                variant="outlined"
                required
                error={!!errors.mobile}
                helperText={errors.mobile}
                value={formData.mobile}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Qualification"
                name="qualification"
                margin="normal"
                variant="outlined"
                required
                error={!!errors.qualification}
                helperText={errors.qualification}
                value={formData.qualification}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                select
                label="Internship Type"
                name="internshipType"
                margin="normal"
                variant="outlined"
                required
                error={!!errors.internshipType}
                helperText={errors.internshipType}
                value={formData.internshipType}
                onChange={handleChange}
              >
                {internshipOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                label="College / Organization Name"
                name="collegeName"
                margin="normal"
                variant="outlined"
                required
                error={!!errors.collegeName}
                helperText={errors.collegeName}
                value={formData.collegeName}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                select
                label="You are a"
                name="role"
                margin="normal"
                variant="outlined"
                required
                error={!!errors.role}
                helperText={errors.role}
                value={formData.role}
                onChange={handleChange}
              >
                {roleOptions.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                label="Year of Passed Out"
                name="yearOfPassout"
                margin="normal"
                variant="outlined"
                required
                error={!!errors.yearOfPassout}
                helperText={errors.yearOfPassout}
                value={formData.yearOfPassout}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: colors.meroon,
                  color: colors.white,
                  fontWeight: "bold",
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": { bgcolor: colors.primary },
                }}
              >
                Submit
              </Button>
            </form>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
