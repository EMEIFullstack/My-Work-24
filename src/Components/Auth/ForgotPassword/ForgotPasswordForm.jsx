import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// Local PNG Asset Imports
import mailIcon from "../../../assets/icons/mail-icon.png";

const ForgotPasswordWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: transparent;
  padding: 20px;

  .forgotCard {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 40px 32px;
    max-width: 400px;
    width: 100%;
    border: 1px solid #c9d1cc;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
  }

  .authTitle {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #18201d;
    margin-bottom: 8px;
  }

  .authSubtitle {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: #7c8785;
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
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 6px;
  }

  .styledTextField {
    & .MuiOutlinedInput-root {
      border-radius: 8px;
      background-color: #ffffff;
      font-family: "Inter", sans-serif;
      font-size: 14px;

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

    & .MuiInputAdornment-root {
      display: flex !important;
      align-items: center;
      justify-content: center;

      img {
        width: 16px !important;
        height: 16px !important;
        object-fit: contain;
      }
    }
  }

  .authButton {
    height: 42px;
    border-radius: 20px;
    background-color: #00cd64;
    box-shadow: none;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: none;
    color: #ffffff;
    width: 100%;
    margin-top: 6px;

    &:hover {
      background-color: #00b957;
      box-shadow: none;
    }
  }
`;

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/new-password");
  };

  return (
    <ForgotPasswordWrapper>
      <Box className="forgotCard">
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
      </Box>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPasswordForm;