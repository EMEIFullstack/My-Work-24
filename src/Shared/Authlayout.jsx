import { Box } from "@mui/material";


const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#fcfefb",
      }}
    >
      {/* ================= AUTH CONTENT ================= */}

      <Box
        sx={{
          minHeight: "calc(100vh - 150px)",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          padding: "100px 20px 70px",

          boxSizing: "border-box",

          backgroundColor: "#fcfefb",

          backgroundImage: `
            radial-gradient(
              circle at 0% 0%,
              rgba(32, 198, 90, 0.08),
              transparent 40%
            ),
            radial-gradient(
              circle at 100% 100%,
              rgba(245, 166, 106, 0.08),
              transparent 40%
            ),
            linear-gradient(
              to right,
              rgba(220, 226, 222, 0.3) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(220, 226, 222, 0.3) 1px,
              transparent 1px
            )
          `,

          backgroundSize: `
            100% 100%,
            100% 100%,
            60px 60px,
            60px 60px
          `,
        }}
      >
        {children}
      </Box>

      {/* ================= FOOTER ================= */}

    </Box>
  );
};

export default AuthLayout;