import { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

// Local PNG Asset Imports
import mailIcon from "../../../assets/icons/mail-icon.png";

const LoginWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: transparent;
  padding: 20px;

  .loginCard {
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

    & a {
      font-family: "Inter", sans-serif;
      font-size: 12px;
      color: #00cd64;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
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

  .bottomText {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    color: #7c8785;
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

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
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
            <Link to="/forgot-password">Forgot Password?</Link>
          </Box>

          <Button type="submit" variant="contained" className="authButton">
            Login
          </Button>
        </Box>

        <Typography className="bottomText">
          Don't Have An Account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </LoginWrapper>
  );
};

export default LoginForm;