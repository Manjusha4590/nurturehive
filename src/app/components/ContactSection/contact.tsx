"use client";

import React, {  useState } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  FormHelperText,
  TextField,
  Input,
  Snackbar,
  Alert,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { url } from "inspector";
import axios from "axios";
import { error } from "console";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormErrors>>({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isValid, setIsvalid] = useState(true);   
  const [open, setOpen] = useState(false); //snakbar visbility
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const API_GATEWAY_ENDPOINT =
    "https://8ybzo5pnt3.execute-api.us-east-1.amazonaws.com/prod/form";

  const url = "https://jsonplaceholder.typicode.com/posts"; //testing url

  function validateForm() {
    setIsvalid(true)
    const newErrors: Partial<FormErrors> = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      setIsvalid(false);
    }
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter valid Email";
      setIsvalid(false);
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Please enter a message";
      setIsvalid(false);
    }
    setErrors(newErrors);       
    return !isValid
   
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    
  };

  const handleSubmitMessage = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post(API_GATEWAY_ENDPOINT, formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (res.status === 200) {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        }
        setErrors({});
        setOpen(true);
      } catch (error) {
        setMessage("An error occurred. Please try again later.");
         setFormData({ name: "", email: "", message: "" });
        setOpen(true);
      }
    }
   
  };
 
  return (
    <>
      <Box id="contact" className="contact-section">
        <Box
          className="contact"
          sx={{ backgroundImage: "url(/images/contact-bg.svg)" }}
        >
          <h2>Contact Us</h2>
          <Box
            component="form"
            id="contactForm"
            className="contact-form"
            onSubmit={handleSubmitMessage}
          >
            <Box className="left-column">
              <Box className="form-group">
                <label htmlFor="name">Name</label>
                <TextField
                  fullWidth
                  name="name"
                  variant="outlined"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "white",
                  }}
                />
                {/* {errors.name && <span style={{color:"red"}}>{errors.name}</span>} */}
                {!isValid && (
                  <span id="nameError" className="error-message">
                    {errors.name}
                  </span>
                )}
              </Box>
              <Box className="form-group">
                <label htmlFor="email">Email</label>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Email"
                  sx={{
                    backgroundColor: "white",
                  }}
                  onChange={handleChange}
                />
                {!isValid && (
                  <span id="emailError" className="error-message">
                    {errors.email}
                  </span>
                )}
              </Box>
            </Box>
            <Box className="right-column">
              <Box className="form-group">
                <label htmlFor="message">Message</label>
                <TextField
                  multiline
                  rows={4}
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  sx={{
                    backgroundColor: "white",
                  }}
                  onChange={handleChange}
                />
                {!isValid && (
                  <span id="messageError" className="error-message">
                    {errors.message}
                  </span>
                )}
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                padding: "10px 20px",
                borderRadius: "32px",
                fontWeight: "bold",
                alignSelf: "center",
                width: "fit-content",
              }}
            >
              Send Message
            </Button>
          </Box>
          <Snackbar
            id="formStatus"
            className="form-status"
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Alert
              severity={success ? "success" : "error"}
              className={success ? "success" : "error"}
            >
              {message}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
