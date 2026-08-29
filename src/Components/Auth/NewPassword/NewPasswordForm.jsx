import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const NewPasswordWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;

  .newPasswordCard {
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

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 49px;
    line-height: 60px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.02em;

    color: #061418;
    & .highlightText{
      color:#00cd64;
    }
  }

  .authSubtitle {
  

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
/* identical to box height, or 160% */
text-align: center;

color: #64757A;


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

    & .MuiIconButton-root {
      padding: 2px;
      color: #7c8785;

      & .MuiSvgIcon-root {
        font-size: 18px;
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

  /* Matches the bottom sign-up link space in LoginForm */
  .bottomText {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    margin-top: 20px;
    visibility: hidden;
  }
`;

const NewPasswordForm = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/login");
  };

  return (
    <NewPasswordWrapper>
      <Box className="newPasswordCard">
        <Typography className="authTitle">
              New <span className="highlightText">Password</span></Typography>

        <Typography className="authSubtitle">
          It is a long established fact that a reader will be
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className="authForm">
          <Box className="fieldGroup">
            <Typography className="fieldLabel">Old Password</Typography>
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Old password"
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        size="small"
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box className="fieldGroup">
            <Typography className="fieldLabel">New Pasword
            </Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
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

          <Box className="fieldGroup">
            <Typography className="fieldLabel">Confirm Password</Typography>
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        size="small"
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
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

        {/* Placeholder to reserve exact vertical space as LoginForm */}
        <Typography className="bottomText">&nbsp;</Typography>
      </Box>
    </NewPasswordWrapper>
  );
};

export default NewPasswordForm;
