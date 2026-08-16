import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  styled,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Step9Wrapper = styled(Box)`
  /* Outer Card Layout */
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e0e0e0;
  padding: 40px 48px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 24px 16px;
  }

  /* Section Titles */
  .sectionTitle {
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #111111;
    text-align: center;
    margin-bottom: 20px;
  }

  .sectionSubtitle {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #888888;
    text-align: center;
    margin-top: -12px;
    margin-bottom: 28px;
  }

  /* Salutation Custom Radio Buttons */
  .salutationGroup {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .salutationBox {
    margin: 0;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 6px 20px 6px 12px;
    transition: all 0.2s ease-in-out;
    background-color: #ffffff;
    cursor: pointer;

    &:hover {
      border-color: #cbd5e1;
    }

    &.Mui-selected {
      border-color: #00cd64;
      background-color: #f0fdf4;
    }

    .MuiFormControlLabel-label {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 15px;
      color: #111111;
    }

    .MuiRadio-root {
      color: #ccc;
      &.Mui-checked {
        color: #00cd64;
      }
    }
  }

  /* Input Field Styles */
  .fieldWrapper {
    margin-bottom: 24px;
  }

  .fieldLabel {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #888888;
    margin-bottom: 2px;
  }

  .customInput {
    width: 100%;

    .MuiInputBase-root {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #111111;
      padding-bottom: 6px;

      &::before {
        border-bottom: 1px solid #e2e8f0;
      }
      &:hover:not(.Mui-disabled)::before {
        border-bottom: 1px solid #cbd5e1;
      }
      &::after {
        border-bottom: 2px solid #00cd64;
      }
    }

    input::placeholder {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 15px;
      color: #111111;
      opacity: 1;
    }
  }
`;

const salutationOptions = [
  { label: "Mister", value: "Mister" },
  { label: "Woman", value: "Woman" },
  { label: "Not Specified", value: "Not Specified" },
];

const Step9 = ({ formData = {}, onChange }) => {
  const [salutation, setSalutation] = useState(formData.salutation || "Mister");
  const [name, setName] = useState(formData.name || "");
  const [street, setStreet] = useState(formData.street || "");
  const [zipCity, setZipCity] = useState(formData.zipCity || "");
  const [email, setEmail] = useState(formData.email || "");
  const [mobile, setMobile] = useState(formData.mobile || "");

  const handleSalutationChange = (e) => {
    const val = e.target.value;
    setSalutation(val);
    if (onChange) onChange({ salutation: val });
  };

  const handleChange = (field, val) => {
    if (field === "name") setName(val);
    if (field === "street") setStreet(val);
    if (field === "zipCity") setZipCity(val);
    if (field === "email") setEmail(val);
    if (field === "mobile") setMobile(val);

    if (onChange) onChange({ [field]: val });
  };

  return (
    <Step9Wrapper>
      {/* 1. SALUTATION SECTION */}
      <Typography className="sectionTitle">Salutation *</Typography>

      <RadioGroup
        row
        value={salutation}
        onChange={handleSalutationChange}
        className="salutationGroup"
      >
        {salutationOptions.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio size="small" />}
            label={item.label}
            className={`salutationBox ${
              salutation === item.value ? "Mui-selected" : ""
            }`}
          />
        ))}
      </RadioGroup>

      {/* 2. USER DETAILS FORM */}
      <Box className="fieldWrapper">
        <Typography className="fieldLabel">Name*</Typography>
        <TextField
          variant="standard"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="customInput"
          InputProps={{ disableUnderline: false }}
        />
      </Box>

      <Box className="fieldWrapper">
        <Typography className="fieldLabel">Street, No.*</Typography>
        <TextField
          variant="standard"
          placeholder="Enter street name"
          value={street}
          onChange={(e) => handleChange("street", e.target.value)}
          className="customInput"
          InputProps={{ disableUnderline: false }}
        />
      </Box>

      <Box className="fieldWrapper" sx={{ mb: 5 }}>
        <Typography className="fieldLabel">ZIP / City *</Typography>
        <TextField
          variant="standard"
          placeholder="Enter zip/city"
          value={zipCity}
          onChange={(e) => handleChange("zipCity", e.target.value)}
          className="customInput"
          InputProps={{ disableUnderline: false }}
        />
      </Box>

      {/* 3. CONTACT OPTIONS SECTION */}
      <Typography className="sectionTitle">Contact Options</Typography>
      <Typography className="sectionSubtitle">
        your account will be created based on the email address provided
      </Typography>

      <Box className="fieldWrapper">
        <Typography className="fieldLabel">Email *</Typography>
        <TextField
          variant="standard"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="customInput"
          InputProps={{ disableUnderline: false }}
        />
      </Box>

      <Box className="fieldWrapper">
        <Typography className="fieldLabel">Mobiles *</Typography>
        <TextField
          variant="standard"
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          className="customInput"
          InputProps={{ disableUnderline: false }}
        />
      </Box>
    </Step9Wrapper>
  );
};

export default Step9;