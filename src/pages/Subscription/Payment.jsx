import React, { useState } from "react";
import { Box, Typography, Container, TextField, InputAdornment, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NameIcon from "../../assets/icons/name.png";
import CardIcon from "../../assets/icons/card.png";
import GreenShape from "../../assets/icons/green shape.png";
import OrangeShape from "../../assets/icons/orange shape.png";
// import PaymentSuccess from "../../pages/Subscription/PaymentSuccess"; 

const Payment = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        pt: { xs: "120px", md: "200px" },
        pb: "50px",
        backgroundColor: "#FAFAFA",
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
          top: 95,
          left: "45%",
          transform: "translateX(-50%)",
          width: "400px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
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

        <Box
          sx={{
            position: "absolute",
            top: "230px",
            left: "70%",
            transform: "translateX(-50%)",
            width: "364px",
            height: "250px",
            background:
              "radial-gradient(ellipse at center, rgba(255, 222, 89, 0.5) 0%, rgba(255, 222, 89, 0.15) 70%, transparent 100%)",
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
          top: "350px",
          right: "-120px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0, 205, 100, 0.12) 0%, rgba(0, 205, 100, 0.02) 80%, transparent 100%)",
            filter: "blur(25px)",
          }}
        />

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

      {/* GREEN SHAPE (LEFT SIDE) */}
      <Box
        component="img"
        src={GreenShape}
        alt="Green Shape"
        sx={{
          position: "absolute",
          left: 0,
          top: "735px",
          transform: "translateY(-50%)",
          width: "60px",
          height: "108px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ORANGE SHAPE (RIGHT SIDE) */}
      <Box
        component="img"
        src={OrangeShape}
        alt="Orange Shape"
        sx={{
          position: "absolute",
          right: 0,
          top: "460px",
          transform: "translateY(-50%)",
          width: "58px",
          height: "59px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: "1140px", mx: "auto", px: 2, position: "relative", zIndex: 2 }}>
        {/* Header Section */}
        <Box sx={{ mb: "15px", textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "36px", md: "49px" },
              lineHeight: "100%",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Payment
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28.8px",
            color: "#666666",
            textAlign: "center",
            maxWidth: "600px",
            mx: "auto",
            mb: "49px",
          }}
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking.
        </Typography>

        {/* Main Content Outer Container */}
        <Box
          sx={{
            maxWidth: "1140px",
            minHeight: "685px",
            mx: "auto",
            borderRadius: "40px",
            border: "1px solid #E5E5E5",
            backgroundColor: "#FFFFFF",
            p: 0,
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: { xs: "40px", md: "97px" },
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Payment Form Section (Left Side) */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { md: "538px" },
              marginLeft: { md: "61px" },
              marginTop: { md: "60px" },
              marginBottom: { md: "62px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "100%",
                mb: 3,
              }}
            >
              Payment
            </Typography>

            {/* Input Fields Container */}
            <Box sx={{ mb: 2.5 }}>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", mb: 1 }}>
                Name On Card
              </Typography>
              <TextField
                fullWidth
                name="cardName"
                placeholder="Enter your name"
                value={formData.cardName}
                onChange={handleChange}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={NameIcon} alt="Name Icon" style={{ width: 24, height: 24, objectFit: "contain" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />
            </Box>

            <Box sx={{ mb: 2.5 }}>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", mb: 1 }}>
                Card Number
              </Typography>
              <TextField
                fullWidth
                name="cardNumber"
                placeholder="Enter card number"
                value={formData.cardNumber}
                onChange={handleChange}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={CardIcon} alt="Card Icon" style={{ width: 24, height: 24, objectFit: "contain" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", mb: 1 }}>
                  Expire Date
                </Typography>
                <TextField
                  fullWidth
                  name="expireDate"
                  placeholder="Enter expire date"
                  value={formData.expireDate}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", mb: 1 }}>
                  CVV
                </Typography>
                <TextField
                  fullWidth
                  name="cvv"
                  placeholder="Enter CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
              </Box>
            </Box>

            {/* Total Order Summary Box */}
            <Box
              sx={{
                width: "100%",
                height: "71px",
                borderRadius: "8px",
                border: "1px solid #D6E8E8",
                backgroundColor: "#EBF8F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,
                mb: "20px",
              }}
            >
              <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px" }}>
                Total Order
              </Typography>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#00CD64" }}>
                {selectedPlan?.price}
              </Typography>
            </Box>

            {/* Payment Submission Button */}
            <Button
              fullWidth
              sx={{
                height: "59px",
                backgroundColor: "#00CD64",
                borderRadius: "63px",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#00B357" },
              }}
            >
              Proceed To Pay
            </Button>
          </Box>

          {/* Selected Plan Details Card (Right Side) */}
          <Box
            sx={{
              width: { xs: "100%", md: "360px" },
              height: { md: "441px" },
              borderRadius: "32px",
              marginTop: { md: "50px" },
              marginRight: { md: "51px" },
              marginBottom: { md: "170px" },
              border: "1px solid #D6E8E8",
              pt: "36px",
              pr: "26px",
              pb: "33px",
              pl: "27px",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              opacity: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                textAlign: "left",
                textTransform: "capitalize",
                mb: 1,
              }}
            >
              {selectedPlan?.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#666666",
                textAlign: "left",
                mb: 2,
              }}
            >
              {selectedPlan?.description}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                color: "#00CD64",
                textAlign: "left",
                mb: 3,
              }}
            >
              {selectedPlan?.price}
              <Typography component="span" sx={{ fontSize: "16px", color: "#666" }}>
                /{selectedPlan?.billingCycle}
              </Typography>
            </Typography>

            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "16px", mb: 2 }}>
              Include in plan
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {selectedPlan?.features?.map((feature, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ color: "#00CD64", fontSize: "20px" }} />
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "#666" }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Payment;

