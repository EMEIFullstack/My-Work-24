import React from "react";
import { Dialog, DialogContent, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, handleClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        },
        paper: {
          sx: {
            width: "553px",
            height: "386px",
            maxWidth: "none",
            borderRadius: "30px !important", // Overriding border-radius precisely to 30px
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
            overflow: "visible !important", // Ensures the close button floats outside the dialog
            position: "relative",
            backgroundColor: "#FFFFFF",
            backgroundImage: "none",
            m: 0,
          },
        },
      }}
    >
      {/* 28x28px Close Button positioned above the Dialog according to Figma */}
      <Box
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: "-35px",
          right: 0,
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
          zIndex: 999,
          "&:hover": {
            backgroundColor: "#F0F0F0",
          },
        }}
      >
        <CloseIcon sx={{ fontSize: "16px", color: "#666666" }} />
      </Box>

      <DialogContent
        sx={{
          p: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden !important",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;