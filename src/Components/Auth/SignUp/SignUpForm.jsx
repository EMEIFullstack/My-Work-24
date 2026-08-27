import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Local PNG Asset Imports
import userIcon from "../../../assets/icons/user-icon.png";
import mailIcon from "../../../assets/icons/mail-icon.png";
import callIcon from "../../../assets/icons/contact-icon.png";
import locationIcon from "../../../assets/icons/location-icon.png";

const SignUpWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;

  .signUpCard {
    width: 100%;
    max-width: 555px;
    padding: 68px 60px;
    background-color: #ffffff;
    border: 1px solid #c9d1cc;
    border-radius: 18px;
    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.025),
      0 15px 40px rgba(28, 67, 45, 0.05);
    box-sizing: border-box;
  }

  .signUpTitle {
    margin-bottom: 6px;
    text-align: center;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 49px;
    line-height: 60px;
    letter-spacing: -0.02em;

    color: #061418;

    .highlight {
      color: #00cd64;
    }
  }

  .signUpSubtitle {
    margin-bottom: 18px;
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #64757a;
  }

  .signUpForm {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .formRow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .fieldLabel {
    margin-bottom: 4px;
   

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
display: flex;
align-items: center;

color: #001919;


  }

  .styledTextField {
    & .MuiOutlinedInput-root {
      min-height: 30px;
      border-radius: 5px;
      font-family: "Inter", sans-serif;
      font-size: 9px;

      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #00cd64;
      }

      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #00cd64;
      }
    }

    & .MuiOutlinedInput-input {
      padding: 6px 9px;
      height: auto;
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: #dce2df;
    }

    /* Force Adornment visibility & sizing */
    & .MuiInputAdornment-root {
      display: flex !important;
      align-items: center;
      justify-content: center;

      img {
        width: 16px !important;
        height: 16px !important;
        min-width: 16px;
        min-height: 16px;
        object-fit: contain;
        display: block;
      }
    }

    & .MuiIconButton-root {
      padding: 2px;
      color: #7c8785;

      & .MuiSvgIcon-root {
        font-size: 16px;
      }
    }
  }

  .termsLabel {
    margin: 2px 0 0 !important;

    & .MuiCheckbox-root {
      padding: 0 4px 0 0;
    }

    & .MuiTypography-root {
      font-family: "Inter", sans-serif;
      font-size: 8px;
      color: #687572;
    }

    .termsLink {
      color: #00cd64;
    }
  }

  .submitBtn {
    height: 30px;
    margin-top: 5px;
    border-radius: 20px;
    background-color: #00cd64;
    box-shadow: none;
    font-family: "Inter", sans-serif;
    font-size: 9px;
    font-weight: 500;
    text-transform: none;

    &:hover {
      background-color: #00b957;
      box-shadow: none;
    }
  }

  .loginRedirect {
    margin-top: 13px;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 8px;
    color: #8a9390;

    & a {
      color: #00cd64;
      text-decoration: none;
      font-weight: 500;
    }
  }
`;

const SignUpForm = ({ onOpenOtp }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    city: "",
    zip: "",
    password: "",
    confirmPassword: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agreed) {
      alert("Please agree to the Terms and Conditions");
      return;
    }

    if (onOpenOtp) {
      onOpenOtp();
    }
  };

  return (
    <SignUpWrapper>
      <Box className="signUpCard">
        <Typography className="signUpTitle">
          Sign{" "}
          <Box component="span" className="highlight">
            Up
          </Box>
        </Typography>

        <Typography className="signUpSubtitle">
          It is a long established fact that a reader will be
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className="signUpForm">
          <Box className="formRow">
            <Box>
              <Typography className="fieldLabel">First Name</Typography>
              <TextField
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                fullWidth
                size="small"
                required
                className="styledTextField"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={userIcon} alt="user" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            <Box>
              <Typography className="fieldLabel">Last Name</Typography>
              <TextField
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                fullWidth
                size="small"
                required
                className="styledTextField"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={userIcon} alt="user" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography className="fieldLabel">Email Address</Typography>
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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

          <Box>
            <Typography className="fieldLabel">Mobile Number</Typography>
            <TextField
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={callIcon} alt="phone" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box>
            <Typography className="fieldLabel">Address</Typography>
            <TextField
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={locationIcon} alt="location" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>

          <Box>
            <Typography className="fieldLabel">State</Typography>
            <TextField
              select
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                select: {
                  displayEmpty: true,
                  renderValue: (selected) => {
                    if (!selected) {
                      return (
                        <span style={{ color: "#7c8785" }}>Enter state</span>
                      );
                    }
                    return selected;
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Enter state
              </MenuItem>
              <MenuItem value="West Bengal">West Bengal</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Uttarpradesh">Uttar-pradesh</MenuItem>
            </TextField>
          </Box>

          <Box className="formRow">
            <Box>
              <Typography className="fieldLabel">City</Typography>
              <TextField
                select
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                size="small"
                required
                className="styledTextField"
                slotProps={{
                  select: {
                    displayEmpty: true,
                    renderValue: (selected) => {
                      if (!selected) {
                        return (
                          <span style={{ color: "#7c8785" }}>Enter city</span>
                        );
                      }
                      return selected;
                    },
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Enter city
                </MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
              </TextField>
            </Box>

            <Box>
              <Typography className="fieldLabel">Zip</Typography>
              <TextField
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Enter zip"
                fullWidth
                size="small"
                required
                className="styledTextField"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={locationIcon} alt="location" />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography className="fieldLabel">Password</Typography>
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
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
                        aria-label="toggle password visibility"
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

          <Box>
            <Typography className="fieldLabel">Confirm Password</Typography>
            <TextField
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              fullWidth
              size="small"
              required
              className="styledTextField"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
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

          <FormControlLabel
            className="termsLabel"
            control={
              <Checkbox
                size="small"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
            }
            label={
              <Typography>
                I hereby agree to the{" "}
                <Box component="span" className="termsLink">
                  Terms and Conditions
                </Box>
              </Typography>
            }
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="submitBtn"
          >
            Submit
          </Button>
        </Box>

        <Typography className="loginRedirect">
          Already Have An Account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </SignUpWrapper>
  );
};

export default SignUpForm;
