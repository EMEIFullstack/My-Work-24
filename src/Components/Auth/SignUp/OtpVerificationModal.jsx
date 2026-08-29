import { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const ModalContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
   & .MuiBackdrop-root {
    background-color: rgba(6, 20, 24, 0.4);
    backdrop-filter: blur(4px);
  }
  .modalForm {
    width: 100%;
  }

  /* ABSOLUTE CLOSE BUTTON (Floating Outside Corner) */
  .closeBtn {
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: #ffffff;
    color: #4a4a4a;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    padding: 5px;
    z-index: 20;

    &:hover {
      background-color: #f8f8f8;
    }

    & .MuiSvgIcon-root {
      font-size: 14px;
    }
  }

  /* TITLE */
  .modalTitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;

    color: #061418;
    align-self: stretch;
    margin-bottom: 6px;
    margin-top: 4px;
  }

  /* SUBTITLE */
  .modalSubtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #64757a;
    align-self: stretch;
    margin-bottom: 22px;
  }

  /* OTP INPUT GROUP */
  .otpGroup {
    display: flex;
    justify-content: center;
    gap: 18px;
    width: 100%;
    margin-bottom: 24px;

    & .MuiOutlinedInput-root {
      width: 76px;
      height: 76px;
      border-radius: 10px;
      background-color: #ffffff;
      font-family: "Inter", sans-serif;
      font-size: 22px;
      font-weight: 600;
      color: #18201d;

      & fieldset {
        border-color: #e2e8e5;
      }

      &:hover fieldset {
        border-color: #00cd64;
      }

      &.Mui-focused fieldset {
        border-color: #00cd64;
        border-width: 1px;
      }
    }

    & .MuiOutlinedInput-input {
      text-align: center;
      padding: 0;
    }
  }

  /* SUBMIT BUTTON */
  .submitBtn {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px 32px;
    gap: 10px;
    background: #00cd64;
    border-radius: 63px;
    align-self: stretch;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #ffffff;

    width: 100%;

    &:hover {
      background-color: #00b957;
      box-shadow: none;
    }
  }
`;

const OtpVerificationModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      alert("Please enter complete OTP");
      return;
    }

    onClose();
    navigate("/login");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          },
        },
        paper: {
          sx: {
            borderRadius: "18px",
            padding: "68px 60px",
            maxWidth: "555px", // Matches signUpCard max-width
            width: "100%", // Expands paper to fill max width
            position: "relative",
            overflow: "visible !important",
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
            margin: "16px",
            boxSizing: "border-box",
          },
        },
      }}
    >
      <ModalContentWrapper>
        <Box className="modalForm">
          {/* CLOSE BUTTON */}
          <IconButton onClick={onClose} className="closeBtn">
            <CloseIcon />
          </IconButton>

          {/* TITLE */}
          <Typography className="modalTitle">Verify Email OTP</Typography>

          {/* SUBTITLE */}
          <Typography className="modalSubtitle">
            It is a long established fact that a reader will be
          </Typography>

          {/* OTP INPUTS */}
          <Box className="otpGroup">
            {otp.map((value, index) => (
              <TextField
                key={index}
                id={`otp-${index}`}
                value={value}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                inputProps={{
                  maxLength: 1,
                }}
              />
            ))}
          </Box>

          {/* SUBMIT BUTTON */}
          <Button
            onClick={handleSubmit}
            variant="contained"
            className="submitBtn"
          >
            Submit
          </Button>
        </Box>
      </ModalContentWrapper>
    </Dialog>
  );
};

export default OtpVerificationModal;
