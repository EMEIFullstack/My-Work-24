import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

import mailIcon from "../../../assets/icons/mail-icon.png";
import ForgotPasswordForm from "../ForgotPassword/ForgotPasswordForm";
import { useState } from "react";

const LoginWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;

  .loginCard {
    width: 100%;
    max-width: 550px;
    background-color: #ffffff;
    border-radius: 18px;
    padding: 40px 32px;
    border: 1px solid #c9d1cc;
    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.025),
      0 15px 40px rgba(28, 67, 45, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .authTitle {
    margin-bottom: 6px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 800 !important;
    font-size: 49px;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: #061418;
  }

  .authSubtitle {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
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
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #001919;
    margin-bottom: 6px;
  }

  && .styledTextField {
    width: 100%;

    & .MuiOutlinedInput-root {
      border-radius: 8px;
      background-color: #ffffff;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #001919;

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

    & .MuiIconButton-root {
      padding: 2px;
      color: #7c8785;

      & .MuiSvgIcon-root {
        font-size: 18px;
      }
    }
  }

  .forgotRow {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: -8px;

    .forgotLink {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #00cd64;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  && .authButton {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px 32px;
    background: #00cd64;
    border-radius: 63px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    text-transform: none;
    box-shadow: none;
    margin-top: 6px;
    width: 100%;

    &:hover {
      background-color: #00b957;
      box-shadow: none;
    }
  }

  .bottomText {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #64757a;
    margin-top: 20px;

    & a {
      color: #00cd64;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store mock login flag in localStorage for static state handling
    localStorage.setItem("isLoggedIn", "true");
    // Redirect user straight to user profile route
    navigate("/profile");
  };

  return (
    <LoginWrapper>
      <Box className="loginCard">
        <Typography className="authTitle">Login</Typography>

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

          <Box className="fieldGroup">
            <Typography className="fieldLabel">Password</Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box className="forgotRow">
            <button
              type="button"
              className="forgotLink"
              onClick={() => setIsForgotOpen(true)}
            >
              Forgot Password?
            </button>
          </Box>

          <Button type="submit" variant="contained" className="authButton">
            Submit
          </Button>
        </Box>

        <Typography className="bottomText">
          Don't Have An Account? <Link to="/usersignup">Sign Up</Link>
        </Typography>
      </Box>

      {/* Reset Password Modal Component */}
      <ForgotPasswordForm
        open={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
        onSubmitSuccess={() => {
          setIsForgotOpen(false);
        }}
      />
    </LoginWrapper>
  );
};

export default LoginForm;