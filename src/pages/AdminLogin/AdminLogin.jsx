import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, Button, IconButton } from "@mui/material";

// Assets Import
import emailIcon from "../../assets/icons/emailIcon.png";
import eyeSlash from "../../assets/icons/eye-slash.png"; 
import greenShape from "../../assets/icons/green shape.png";
import orangeShape from "../../assets/icons/orange shape.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

// Single Modal Import (Only Forgot Password Modal)
import ForgotPasswordModal from "../../Components/ForgotPasswordModal/ForgotPasswordModal";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Forgot Password Modal State
  const [forgotModalOpen, setForgotModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login Data:", { email, password });
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        pt: { xs: "100px", md: "140px" },
        pb: "80px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* 1. TOP-LEFT BACKGROUND DECORATION (Green Glow & Grid) */}
      <Box
        sx={{
          position: "absolute",
          width: "347px",
          height: "347px",
          top: "-102px",
          left: "-87px",
          background:
            "radial-gradient(circle, rgba(0, 205, 100, 0.35) 0%, rgba(211, 224, 236, 0.15) 70%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(0, 205, 100, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 205, 100, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "105px 90px",
            maskImage:
              "radial-gradient(circle at center, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 30%, transparent 80%)",
          },
        }}
      />

      {/* 2. MIDDLE BACKGROUND DECORATION (Header Grid & Yellow Glow) */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Grid lines above the main title */}
        <Box
          sx={{
            width: "436px",
            height: "130px",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 205, 100, 0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 205, 100, 0.22) 1px, transparent 1px)
            `,
            backgroundSize: "109px 109px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Soft Yellow radial glow centered behind title */}
        <Box
          sx={{
            position: "absolute",
            top: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "364px",
            height: "250px",
            background:
              "radial-gradient(ellipse at center, rgba(255, 222, 89, 0.45) 0%, rgba(255, 222, 89, 0.1) 70%, transparent 100%)",
            filter: "blur(50px)",
          }}
        />
      </Box>

      {/* 3. RIGHT-SIDE BACKGROUND DECORATION (Faded Green Glow & Grid) */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          top: "180px",
          right: "-100px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Light green radial glow layer */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0, 205, 100, 0.12) 0%, rgba(0, 205, 100, 0.02) 80%, transparent 100%)",
            filter: "blur(25px)",
          }}
        />

        {/* Subtle grid pattern layer */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(0, 205, 100, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 205, 100, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "115px 115px",
            maskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 70%)",
          }}
        />
      </Box>

      {/* Background Shape Assets */}
      <Box
        component="img"
        src={greenShape}
        alt="shape"
        sx={{
          position: "absolute",
          bottom: "150px",
          left: "-10px",
          width: "70px",
          height: "108px",
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={orangeShape}
        alt="shape"
        sx={{
          position: "absolute",
          top: "45%",
          right: "-10px",
          width: "70px",
          zIndex: 0,
        }}
      />

      {/* Main Login Card Container */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          zIndex: 1,
          width: { xs: "90%", sm: "553px" },
          minHeight: "626px",
          borderRadius: "30px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.04)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: "45px 30px",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "49px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            color: "#000000",
            mt: "10px",
            mb: "15px",
          }}
        >
          Login
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            color: "#666666",
            textAlign: "center",
            maxWidth: "412px",
            px: 2,
            mb: "30px",
          }}
        >
          It is a long established fact that a reader will be
        </Typography>

        <Box sx={{ width: { xs: "90%", sm: "412px" } }}>
          
          {/* Email Address Input Field */}
          <Box sx={{ mb: "15px" }}>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
                mb: "10px",
              }}
            >
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: 0.5 }}>
                      <img
                        src={emailIcon}
                        alt="email"
                        style={{ width: 20, height: 20, objectFit: "contain" }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "55px",
                  borderRadius: "12px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  "& fieldset": { borderColor: "#E5E5E5" },
                },
              }}
            />
          </Box>

          {/* Password Input Field */}
          <Box sx={{ mb: "10px" }}>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
                mb: "10px",
              }}
            >
              Password
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: 0.5 }}>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        disableRipple
                        sx={{ 
                          p: 0.5, 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center" 
                        }}
                      >
                        {showPassword ? (
                          <RemoveRedEyeOutlinedIcon 
                            sx={{ 
                              fontSize: 20, 
                              color: "#8B9696"
                            }} 
                          />
                        ) : (
                          <img
                            src={eyeSlash}
                            alt="hide password"
                            style={{
                              width: 20,
                              height: 20,
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "55px",
                  borderRadius: "12px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  "& fieldset": { borderColor: "#E5E5E5" },
                },
              }}
            />
          </Box>

          {/* Forgot Password Link Trigger */}
          <Box sx={{ textAlign: "right", mb: "25px" }}>
            <Typography
              component="span"
              onClick={() => setForgotModalOpen(true)}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#00CD64",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Forgot Password?
            </Typography>
          </Box>

          {/* Submit Action Button */}
          <Button
            fullWidth
            type="submit"
            sx={{
              width: "100%",
              height: "59px",
              backgroundColor: "#00CD64",
              borderRadius: "63px",
              py: "17px",
              px: "32px",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
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

          {/* Sign Up Navigation Link */}
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              textAlign: "center",
              color: "#666666",
              mt: "22px",
              mb: "10px",
            }}
          >
            Don’t Have An Account?{" "}
            <Typography
              component="span"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "28.8px",
                color: "#00CD64",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Sign Up
            </Typography>
          </Typography>

        </Box>
      </Box>

      {/* Forgot Password Dialog Modal */}
      <ForgotPasswordModal
        open={forgotModalOpen}
        handleClose={() => setForgotModalOpen(false)}
      />
    </Box>
  );
};

export default AdminLogin;