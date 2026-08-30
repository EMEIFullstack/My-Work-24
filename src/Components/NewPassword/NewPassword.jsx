import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, Button, IconButton } from "@mui/material";

// Common Component Import
import WaveTitle from "../common/WaveTitle";

// Assets Import
import eyeSlash from "../../assets/icons/eye-slash.png"; 
import greenShape from "../../assets/icons/green shape.png";
import orangeShape from "../../assets/icons/orange shape.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const NewPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Password Submitted");
  };

  // Icon Wrapper Style to ensure exact alignment
  const renderEyeIcon = (showState) => (
    <Box 
      sx={{ 
        width: 20, 
        height: 20, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
      }}
    >
      {showState ? (
        <RemoveRedEyeOutlinedIcon sx={{ fontSize: 20, color: "#919B9B" }} />
      ) : (
        <img src={eyeSlash} alt="Hide password" style={{ width: 20, height: 20, display: "block" }} />
      )}
    </Box>
  );

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
      <Box component="img" src={greenShape} alt="shape" sx={{ position: "absolute", bottom: "150px", left: "-10px", width: "70px", height:"108px", zIndex: 0 }} />
      <Box component="img" src={orangeShape} alt="shape" sx={{ position: "absolute", top: "45%", right: "-10px", width: "70px", zIndex: 0 }} />

      {/* Main Form Card */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          zIndex: 1,
          width: { xs: "90%", sm: "553px" },
          borderRadius: "30px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.04)",
          display: "flex",
          flexDirection: "column",
          pt: "80px",
          alignItems: "center",
          p: "45px 30px",
          boxSizing: "border-box",
        }}
      >
        <WaveTitle 
          mainTitle="New" 
          highlightTitle="Password" 
        />

        <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#666666", mt: "10px", mb: "30px", textAlign: "center" }}>
          It is a long established fact that a reader will be
        </Typography>

        <Box sx={{ width: "100%", maxWidth: "412px" }}>
          {/* Old Password Input */}
          <Typography sx={{ fontWeight: 500, mb: "8px" }}>Old Password</Typography>
          <TextField
            fullWidth
            type={showOld ? "text" : "password"}
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowOld(!showOld)} edge="end" sx={{ p: "8px" }}>
                      {renderEyeIcon(showOld)}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: "20px", "& .MuiOutlinedInput-root": { height: "50px", borderRadius: "10px" } }}
          />

          {/* New Password Input */}
          <Typography sx={{ fontWeight: 500, mb: "8px" }}>New Password</Typography>
          <TextField
            fullWidth
            type={showNew ? "text" : "password"}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowNew(!showNew)} edge="end" sx={{ p: "8px" }}>
                      {renderEyeIcon(showNew)}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: "20px", "& .MuiOutlinedInput-root": { height: "50px", borderRadius: "10px" } }}
          />

          {/* Confirm Password Input */}
          <Typography sx={{ fontWeight: 500, mb: "8px" }}>Confirm Password</Typography>
          <TextField
            fullWidth
            type={showConfirm ? "text" : "password"}
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirm(!showConfirm)} edge="end" sx={{ p: "8px" }}>
                      {renderEyeIcon(showConfirm)}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: "30px", "& .MuiOutlinedInput-root": { height: "50px", borderRadius: "10px" } }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            sx={{
              height: "55px",
              backgroundColor: "#00CD64",
              color: "#FFF",
              borderRadius: "60px",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#00B357" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewPassword;