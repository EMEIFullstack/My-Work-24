import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const WaveTitle = ({
  mainTitle = "",
  highlightTitle = "",
}) => {
  const textRef = useRef(null); 
  const canvasRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const canvas = canvasRef.current;

    if (!textElement || !canvas) return;

    const updateCanvas = () => {
      const textWidth = textElement.offsetWidth;

      // =========================
      // WAVE DESIGN SETTINGS
      // =========================
      const extraWidth = 4;
      const width = textWidth + extraWidth;

      const amplitude = 3.9;
      const wavelength = 38;
      const height = 18;

      const dpr = window.devicePixelRatio || 1;

      // Canvas resolution
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Canvas display size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // =========================
      // WAVE STYLE
      // =========================
      ctx.beginPath();

      ctx.strokeStyle = "#00CD64";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // =========================
      // DRAW WAVE
      // =========================
      for (let x = 0; x <= width; x++) {
        const progress = x / width;

        const wave =
          Math.sin((x / wavelength) * Math.PI * 2) * amplitude;

        const edgeFade = Math.sin(progress * Math.PI);

        const y = 7 + wave * edgeFade;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    };

    updateCanvas();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateCanvas)
        : null;

    resizeObserver?.observe(textElement);

    window.addEventListener("resize", updateCanvas);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateCanvas);
    };
  }, [highlightTitle]);

  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 2,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: "42px",
          lineHeight: 1.1,
          fontWeight: 800,
          color: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {mainTitle}

        <Box
          component="span"
          sx={{
            position: "relative",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: 1,
            overflow: "visible",
          }}
        >
          <Box
            component="span"
            ref={textRef}
            sx={{
              color: "#00CD64",
              fontWeight: 800,
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {highlightTitle}
          </Box>

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",

              // Gap between text and wave
              bottom: "-10px",

              left: "-1px",

              pointerEvents: "none",
              overflow: "visible",
            }}
          />
        </Box>
      </Typography>
    </Box>
  );
};

export default WaveTitle;