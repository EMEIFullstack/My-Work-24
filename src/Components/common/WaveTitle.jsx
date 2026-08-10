import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

// --- Sub-Component: WaveTitle ---
// Renders a main title with a dynamically underlined green wave effect on the highlighted title
const WaveTitle = ({ mainTitle = "", highlightTitle = "" }) => {
  // References to measure the target text width and draw on HTML5 Canvas
  const textRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const canvas = canvasRef.current;
    if (!textElement || !canvas) return;

    // Function to calculate dimensions and draw the SVG-like sine wave
    const updateCanvas = () => {
      const width = textElement.offsetWidth;
      const height = 20; // Canvas height reserved for wave rendering
      const dpr = window.devicePixelRatio || 1; // Handles high-DPI (Retina) screen crispness

      // Scale canvas resolution to prevent blurry lines on high-res displays
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height); // Clear previous frame before redraw

      // ---  Wave Customization Controls ---
      const wavelength = 65; // Controls wave density (lower = more waves, higher = flatter)
      const amplitude = 2.5; // Controls wave height/depth peak
      const startY = 10;     // Center vertical axis inside canvas

      ctx.beginPath();
      ctx.strokeStyle = '#00CD64'; // Brand green stroke color
      ctx.lineWidth = 3.5;         // Thickness of wave stroke
      ctx.lineCap = 'round';       // Smooth rounded edges at start and end points

      // Mathematical sine wave calculation across text width
      for (let x = 0; x <= width; x++) {
        const y = startY + Math.sin((x / wavelength) * Math.PI * 2) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    // Initial canvas render call
    updateCanvas();
    
    // Automatically recalculates canvas width when screen resizes or font changes
    const resizeObserver = new ResizeObserver(() => updateCanvas());
    resizeObserver.observe(textElement);

    // Cleanup observer on component unmount
    return () => resizeObserver.disconnect();
  }, [highlightTitle]);

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 800,
          color: '#111',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {/* Regular Title Text */}
        {mainTitle}{' '}
        
        {/* Highlighted Text Wrapper with Absolute Canvas Container */}
        <Box
          component="span"
          sx={{
            position: 'relative',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Highlighted Green Text Element */}
          <Box component="span" ref={textRef} sx={{ color: '#00CD64', fontWeight: 800 }}>
            {highlightTitle}
          </Box>

          {/* Dynamic Wave Canvas Element Overlay */}
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              bottom: -10,
              left: 0,
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Typography>
    </Box>
  );
};

export default WaveTitle;