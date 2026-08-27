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
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #18201d;
    margin-bottom: 6px;
    margin-top: 4px;
  }

  /* SUBTITLE */
  .modalSubtitle {
    font-family: "Inter", sans-serif;
    font-size: 11px;
    color: #7c8785;
    margin-bottom: 22px;
    line-height: 1.3;
  }

  /* OTP INPUT GROUP */
  .otpGroup {
    display: flex;
    justify-content: center;
    gap: 12px;
    width: 100%;
    margin-bottom: 24px;

    & .MuiOutlinedInput-root {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background-color: #ffffff;
      font-family: "Inter", sans-serif;
      font-size: 16px;
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
    height: 40px;
    border-radius: 20px;
    background-color: #00cd64;
    box-shadow: none;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: none;
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
            borderRadius: "20px",
            padding: "28px 24px 24px",
            maxWidth: "340px",
            width: "100%",
            position: "relative",
            overflow: "visible !important", // স্ক্রলবার পুরোপুরি বন্ধ করার জন্য
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
            margin: "16px",
          },
        },
      }}
    >
      <ModalContentWrapper>
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
      </ModalContentWrapper>
    </Dialog>
  );
};

export default OtpVerificationModal;