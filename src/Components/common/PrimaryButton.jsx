import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      disableRipple
      sx={{
        border: '1.5px solid #21C45D',
        color: '#21C45D',
        borderRadius: '100px',
        px: 4,
        py: 1.2,
        fontSize: '15px',
        fontWeight: 600,
        textTransform: 'none',
        background: 'transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: '#21C45D',
          color: '#ffffff',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;