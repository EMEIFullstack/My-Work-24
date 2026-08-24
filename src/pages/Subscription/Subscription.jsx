
import { Box, Typography, Container } from "@mui/material";
import WaveTitle from "../../Components/common/WaveTitle";
import PricingCard from "../../Components/common/PricingCard";

const plansData = [
  {
    id: 1,
    title: "Plan Name",
    description: "It is a long established fact that a reader will be distracted by the",
    price: "$120",
    billingCycle: "year",
    features: ["Lorem Ipsum is simply", "Lorem Ipsum is simply", "Lorem Ipsum is simply"],
  },
  {
    id: 2,
    title: "Plan Name",
    description: "It is a long established fact that a reader will be distracted by the",
    price: "$130",
    billingCycle: "year",
    features: ["Lorem Ipsum is simply", "Lorem Ipsum is simply", "Lorem Ipsum is simply"],
  },
  {
    id: 3,
    title: "Plan Name",
    description: "It is a long established fact that a reader will be distracted by the",
    price: "$150",
    billingCycle: "year",
    features: ["Lorem Ipsum is simply", "Lorem Ipsum is simply", "Lorem Ipsum is simply"],
  },
];

const Subscription = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        pt: { xs: "120px", md: "235px" },
        pb: "50px",
        backgroundColor: "#FAFAFA",
      }}
    >
     
      {/* 1. TOP-LEFT BACKGROUND DECORATION (Green Glow & Grid)    */}
     
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
        {/* Grid lines restricted to the area above the main title */}
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

        {/* Soft Golden/Yellow radial glow centered behind title */}
        <Box
          sx={{
            position: "absolute",
            top: "230px",
            left: "70%",
            transform: "translateX(-50%)",
            width: "364px",
            height: "250px",
            background:
              "radial-gradient(ellipse at center, rgba(255, 222, 89, 0.5) 0%, rgba(255, 222, 89, 0.15) 40%, transparent 100%)",
            filter: "blur(110px)",
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
        {/* Light green radial glow layer */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0, 205, 100, 0.12) 0%, rgba(0, 205, 100, 0.02) 50%, transparent 70%)",
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

     
      {/* MAIN CONTENT CONTAINER      */}
    
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1140px",
          mx: "auto",
          px: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header (Title & Description) */}
        <Box sx={{ mb: "49px", textAlign: "center" }}>
          <WaveTitle mainTitle="Subscription" highlightTitle="Plan" />

          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28.8px",
              color: "#666666",
              maxWidth: "600px",
              mx: "auto",
              mt: "15px",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking.
          </Typography>
        </Box>

        {/* Pricing Cards Grid List */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            width: "100%",
          }}
        >
          {plansData.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              billingCycle={plan.billingCycle}
              features={plan.features}
              onSelect={() =>
                alert(`Selected ${plan.title} - ${plan.price}`)
              }
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;