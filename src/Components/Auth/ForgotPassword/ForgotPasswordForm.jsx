import {
  Dialog,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// Local PNG Asset Imports
import mailIcon from "../../../assets/icons/mail-icon.png";

const StyledDialog = styled(Dialog)`
  & .MuiBackdrop-root {
    background-color: rgba(6, 20, 24, 0.4);
    backdrop-filter: blur(4px);
  }

  & .MuiPaper-root {
    background-color: #ffffff;
    border-radius: 18px;
    padding: 40px 32px;
    max-width: 555px;
    width: 100%;
    border: 1px solid #c9d1cc;
    box-shadow: 0 15px 40px rgba(28, 67, 45, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    overflow: visible;
    margin: 16px;
  }

  .closeBtn {
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: #ffffff;
    color: #64757a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 6px;

    &:hover {
      background-color: #f5f5f5;
      color: #061418;
    }
  }

  .authTitle {
    margin-bottom: 6px;
    text-align: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #061418;
  }

  .authSubtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height, or 160% */
    text-align: center;

    color: #64757a;
    margin-bottom: 24px;
  }

  .authForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .fieldGroup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .fieldLabel {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    display: flex;
    align-items: center;

    color: #001919;

    margin-bottom: 6px;
  }

  && .styledTextField {
    width: 100%;

    & .MuiOutlinedInput-root {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;

      color: #919b9b;

      & fieldset {
        border-color: #e0e6e3;
      }

      &:hover fieldset {
        border-color: #00cd64;
      }

      &.Mui-focused fieldset {
        border-color: #00cd64;
        border-width: 1px;
      }
    }

    & .MuiOutlinedInput-input::placeholder {
      color: #919b9b;
      opacity: 1;
    }

    & .MuiInputAdornment-root {
      display: flex !important;
      align-items: center;
      justify-content: center;

      img {
        width: 24px !important;
        height: 24px !important;
        object-fit: contain;
      }
    }
  }

  && .authButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 17px 32px;
    gap: 10px;
    background: #00cd64;
    border-radius: 63px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #ffffff;
    flex-grow: 0;
    text-transform: none;
    box-shadow: none;
    margin-top: 6px;
    width: 100%;

    &:hover {
      background-color: #00b957;
      box-shadow: none;
    }
  }
`;

const ForgotPasswordForm = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    navigate("/new-password"); // Navigate directly to NewPassword route
  };

  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <IconButton aria-label="close" onClick={onClose} className="closeBtn">
        <CloseIcon size="small" />
      </IconButton>

      <Typography className="authTitle">Reset Password</Typography>

      <Typography className="authSubtitle">
        It is a long established fact that a reader will be
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="authForm">
        <Box className="fieldGroup">
          <Typography className="fieldLabel">Email Address</Typography>
          <TextField
            type="email"
            placeholder="Enter email address"
            fullWidth
            size="small"
            required
            className="styledTextField"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={mailIcon} alt="mail" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <Button type="submit" variant="contained" className="authButton">
          Submit
        </Button>
      </Box>
    </StyledDialog>
  );
};

export default ForgotPasswordForm;
