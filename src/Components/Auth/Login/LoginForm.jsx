import { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

// Local PNG Asset Imports
import mailIcon from "../../../assets/icons/mail-icon.png";

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

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800 !important;
    font-size: 49px;
    line-height: 60px;
    letter-spacing: -0.02em;

    color: #061418;
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
 /* Email Address */


font-family: 'Inter';
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

  .styledTextField {
    & .MuiOutlinedInput-root {
      border-radius: 8px;
      background-color: #ffffff;
      
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;

color: #919B9B;


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

    & a {


font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-align: right;

color: #00CD64;



      &:hover {
        text-decoration: underline;
      }
    }
  }

  .authButton {
    height: 42px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 17px 32px;
gap: 10px;

background: #00CD64;
border-radius: 63px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #FFFFFF;

    margin-top: 6px;

    &:hover {
      background-color: #00b957;
      box-shadow: none;
    }
  }

  .bottomText {
    
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
/* identical to box height, or 160% */
text-align: center;

color: #64757A;


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
              Submit
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