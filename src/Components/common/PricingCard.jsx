import React from "react";
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PricingCard = ({ title, description, price, billingCycle, features, onSelect }) => {
  return (
    <Box
      sx={{
        flex: "1 1 320px",
        maxWidth: "360px",
        minHeight: "605px",
        border: "1px solid #E0E0E0",
        borderRadius: "24px",
        backgroundColor: "#FFFFFF",
        padding: "40px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "100%",
            textAlign: "center",
            textTransform: "capitalize",
            color: "#111111",
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28.8px",
            color: "#666666",
            mb: 3,
            px: 1,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 4 }}>
          <Typography
            component="span"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "100%",
              textTransform: "capitalize",
              color: "#00CD64",
            }}
          >
            {price}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "100%",
              textTransform: "lowercase",
              color: "#111111",
            }}
          >
            /{billingCycle}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "28.8px",
            color: "#111111",
            textAlign: "left",
            mb: 1.5,
          }}
        >
          Included in plan
        </Typography>

        <List disablePadding>
          {features.map((feature, index) => (
            <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: "28px" }}>
                <CheckCircleRoundedIcon sx={{ color: "#00CD64", fontSize: "20px" }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "28.8px",
                    color: "#555555",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Button
        onClick={onSelect}
        sx={{
          width: "100%",
          maxWidth: "287px",
          height: "59px",
          borderRadius: "63px",
          padding: "17px 32px",
          backgroundColor: "#00CD64",
          color: "#FFFFFF",
          textTransform: "none",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "100%",
          textAlign: "center",
          "&:hover": {
            backgroundColor: "#00B357",
          },
        }}
      >
        Select Plan
      </Button>
    </Box>
  );
};

export default PricingCard;