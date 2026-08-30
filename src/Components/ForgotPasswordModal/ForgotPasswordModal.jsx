import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // React Router hook import
import CustomModal from "../common/CustomModal";
import emailIcon from "../../assets/icons/emailIcon.png";

const ForgotPasswordModal = ({ open, handleClose }) => {
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleResetSubmit = (e) => {
    e.preventDefault();
    console.log("Reset Email Sent To:", resetEmail);
    
    // 1. Close the modal
    handleClose();

    // 2. Redirect directly to the New Password page
    navigate("/new-password");
  };

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Box
        component="form"
        onSubmit={handleResetSubmit}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "100%",
            textAlign: "center",
            textTransform: "capitalize",
            color: "#000000",
            mt: "55px",
            mx: "70px",
            mb: "16px",
          }}
        >
          Reset Password
        </Typography>

        
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            textAlign: "center",
            color: "#666666",
            mb: "28px",
          }}
        >
          It is a long established fact that a reader will be
        </Typography>

        {/* Email Field Container */}
        <Box sx={{ width: "412px", textAlign: "left", mb: "24px" }}>
         
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#000000",
              mb: "12px",
            }}
          >
            Email Address
          </Typography>
          
          <TextField
            fullWidth
            placeholder="Enter email address"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={emailIcon}
                      alt="email"
                      style={{ width: 24, height: 24, objectFit: "contain" }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                width: "412px",
                height: "45px",
                borderRadius: "10px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#000000",
                "& fieldset": { borderColor: "#E5E7EB", borderWidth: "1px" },
                "&:hover fieldset": { borderColor: "#00CD64" },
                "&.Mui-focused fieldset": { borderColor: "#00CD64" },
              },
              "& .MuiOutlinedInput-input": {
                padding: "10px 14px",
                "&::placeholder": {
                  color: "#9CA3AF",
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          disableRipple
          sx={{
            width: "412px",
            height: "59px",
            backgroundColor: "#00CD64",
            borderRadius: "63px",
            padding: "17px 32px",
            mb: "60px",
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#00B357",
              boxShadow: "none",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </CustomModal>
  );
};

export default ForgotPasswordModal;