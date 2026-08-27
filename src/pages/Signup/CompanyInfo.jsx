import React from "react";

import companyIcon from "../../assets/icons/companyInfo.png";
import emailIcon from "../../assets/icons/mail-icon.png";
import contactIcon from "../../assets/icons/contact-icon.png";
import employeesIcon from "../../assets/icons/employeeIcon.png";

import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputAdornment,
  Button,
} from "@mui/material";

import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";

const CompanyInfo = ({ formData, handleChange }) => {
  /* =========================================================
     FILE UPLOAD
  ========================================================= */

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files?.[0];

    if (!file) return;

    handleChange({
      target: {
        name: fieldName,
        value: file.name,
        type: "text",
      },
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState(false);

  return (
    <Box sx={formWrapper}>

      {/* =====================================================
          ROW 1
      ===================================================== */}

      {/* COMPANY NAME */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Company Name
        </Typography>

        <TextField
          fullWidth
          name="companyName"
          value={formData.companyName || ""}
          onChange={handleChange}
          placeholder="Enter company name"
          sx={inputStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="img"
                    src={companyIcon}
                    alt="Company"
                    sx={{
                      width: "23px",
                      height: "23px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

      </Box>

      {/* EMAIL */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Email Address
        </Typography>

        <TextField
          fullWidth
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Enter email address"
          sx={inputStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="img"
                    src={emailIcon}
                    alt="Email"
                    sx={{
                      width: "23px",
                      height: "23px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

      </Box>

      {/* =====================================================
          ROW 2
      ===================================================== */}

      {/* CONTACT NUMBER */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Contact Number
        </Typography>

        <TextField
          fullWidth
          name="contactNumber"
          value={formData.contactNumber || ""}
          onChange={handleChange}
          placeholder="Enter contact number"
          sx={inputStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="img"
                    src={contactIcon}
                    alt="Contact"
                    sx={{
                      width: "23px",
                      height: "23px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

      </Box>

      {/* EMPLOYEES */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Number Of Employees
        </Typography>

        <TextField
          fullWidth
          name="employees"
          type="number"
          value={formData.employees || ""}
          onChange={handleChange}
          placeholder="Enter total number of employee"
          sx={inputStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="img"
                    src={employeesIcon}
                    alt="Employees"
                    sx={{
                      width: "23px",
                      height: "23px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

      </Box>

      {/* =====================================================
          ROW 3
      ===================================================== */}

      {/* SERVICES */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Select Services
        </Typography>

        <Select
          fullWidth
          displayEmpty
          name="services"
          value={formData.services || ""}
          onChange={handleChange}
          IconComponent={KeyboardArrowDown}
          sx={selectStyle}
        >

          <MenuItem value="">
            <span style={{ color: "#A5B0AD" }}>
              Choose your services
            </span>
          </MenuItem>

          <MenuItem value="Construction">
            Construction
          </MenuItem>

          <MenuItem value="Plumbing">
            Plumbing
          </MenuItem>

          <MenuItem value="Electrical">
            Electrical
          </MenuItem>

          <MenuItem value="Painting">
            Painting
          </MenuItem>

        </Select>

      </Box>

      {/* VAT NUMBER */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Vat Number
        </Typography>

        <TextField
          fullWidth
          name="vatNumber"
          value={formData.vatNumber || ""}
          onChange={handleChange}
          placeholder="Enter VAT number"
          sx={inputStyle}
        />

      </Box>

      {/* =====================================================
          COMPANY DESCRIPTION
      ===================================================== */}

      <Box
        sx={{
          ...formField,
          gridColumn: "1 / -1",
        }}
      >

        <Typography sx={fieldLabel}>
          Company Description
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={3}
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Enter description"
          sx={textareaStyle}
        />

      </Box>

      {/* =====================================================
          PROFILE PICTURE
      ===================================================== */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Upload Company Profile Picture
        </Typography>

        <Box sx={uploadBox}>

          <Typography sx={uploadText}>
            {formData.profilePicture ||
              "Upload profile picture"}
          </Typography>

          <Button
            component="label"
            sx={uploadButton}
          >
            Upload

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(event) =>
                handleFileChange(
                  event,
                  "profilePicture"
                )
              }
            />

          </Button>

        </Box>

      </Box>

      {/* =====================================================
          REGISTRATION DOCUMENT
      ===================================================== */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Upload Registration Document
        </Typography>

        <Box sx={uploadBox}>

          <Typography sx={uploadText}>
            {formData.registrationDocument ||
              "Upload registration document"}
          </Typography>

          <Button
            component="label"
            sx={uploadButton}
          >
            Upload

            <input
              hidden
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(event) =>
                handleFileChange(
                  event,
                  "registrationDocument"
                )
              }
            />

          </Button>

        </Box>

      </Box>

      {/* =====================================================
          PASSWORD
      ===================================================== */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Password
        </Typography>

        <TextField
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password || ""}
          onChange={handleChange}
          placeholder="Enter password"
          sx={inputStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">

                  <Box
                    component="button"
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    sx={{
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >

                    {showPassword ? (
                      <VisibilityOutlined
                        sx={{
                          width: "20px",
                          height: "20px",
                          color: "#A7B2AF",
                        }}
                      />
                    ) : (
                      <VisibilityOffOutlined
                        sx={{
                          width: "20px",
                          height: "20px",
                          color: "#A7B2AF",
                        }}
                      />
                    )}

                  </Box>

                </InputAdornment>
              ),
            },
          }}
        />

      </Box>

      {/* =====================================================
          CONFIRM PASSWORD
      ===================================================== */}

      <Box sx={formField}>

        <Typography sx={fieldLabel}>
          Confirm Password
        </Typography>

        <TextField
          fullWidth
          name="confirmPassword"
          type={
            showConfirmPassword
              ? "text"
              : "password"
          }
          value={formData.confirmPassword || ""}
          onChange={handleChange}
          placeholder="Enter confirm password"
          sx={inputStyle}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">

                  <Box
                    component="button"
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    sx={{
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >

                    {showConfirmPassword ? (
                      <VisibilityOutlined
                        sx={{
                          width: "20px",
                          height: "20px",
                          color: "#A7B2AF",
                        }}
                      />
                    ) : (
                      <VisibilityOffOutlined
                        sx={{
                          width: "20px",
                          height: "20px",
                          color: "#A7B2AF",
                        }}
                      />
                    )}

                  </Box>

                </InputAdornment>
              ),
            },
          }}
        />

      </Box>

      {/* =====================================================
          TERMS AND CONDITIONS
      ===================================================== */}

      <Box sx={termsWrapper}>

        <FormControlLabel
          sx={termsStyle}

          control={
            <Checkbox
              name="terms"
              checked={Boolean(formData.terms)}
              onChange={handleChange}
            />
          }

          label={
            <>
              I hereby agree to{" "}

              <Box
                component="span"
                sx={termsLink}
              >
                General Terms and Conditions
              </Box>
            </>
          }
        />

      </Box>

    </Box>
  );
};


/* =========================================================
   FORM WRAPPER
========================================================= */

const formWrapper = {
  width: "100%",



  display: "grid",

  gridTemplateColumns:
    "repeat(2, minmax(0, 1fr))",

  columnGap: "14px",

  rowGap: "11px",

  boxSizing: "border-box",

  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
    rowGap: "12px",
  },
};


/* =========================================================
   FORM FIELD
========================================================= */

const formField = {

  width: "100%",

  minWidth: 0,

};


/* =========================================================
   FIELD LABEL

   Figma:
   Inter / 500 / 16px / 24px
   #001919
========================================================= */

const fieldLabel = {

  width: "100%",

  minHeight: "24px",

  marginBottom: "5px",

  fontFamily: "'Inter', sans-serif",

  fontStyle: "normal",

  fontWeight: 500,

  fontSize: "16px",

  lineHeight: "24px",

  display: "flex",

  alignItems: "center",

  color: "#001919",

  whiteSpace: "nowrap",

  "@media (max-width: 600px)": {

    fontSize: "14px",

  },

};


/* =========================================================
   INPUT
========================================================= */

const inputStyle = {

  "& .MuiOutlinedInput-root": {

    height: "48px",

    borderRadius: "5px",

    fontFamily: "'Inter', sans-serif",

    fontSize: "14px",

    color: "#001919",

    backgroundColor: "#FFFFFF",

    "& fieldset": {

      borderColor: "#DCE5E2",

      borderWidth: "1px",

    },

    "&:hover fieldset": {

      borderColor: "#C7D4D0",

    },

    "&.Mui-focused fieldset": {

      borderColor: "#00CD64",

    },

  },


  "& .MuiInputBase-input": {

    padding: "0 12px",

    fontFamily: "'Inter', sans-serif",

    fontSize: "14px",

    color: "#001919",

    "&::placeholder": {

      color: "#A5B0AD",

      opacity: 1,

    },

  },


  "& .MuiInputAdornment-root": {

    color: "#9DA8A8",

    "& svg": {

      fontSize: "23px",

      color: "#9DA8A8",

    },

  },

};


/* =========================================================
   TEXTAREA
========================================================= */

const textareaStyle = {

  "& .MuiOutlinedInput-root": {

    minHeight: "89px",

    borderRadius: "5px",

    alignItems: "flex-start",

    "& fieldset": {

      borderColor: "#DCE5E2",

    },

    "&:hover fieldset": {

      borderColor: "#C7D4D0",

    },

    "&.Mui-focused fieldset": {

      borderColor: "#00CD64",

    },

  },


  "& textarea": {

    fontFamily: "'Inter', sans-serif",

    fontSize: "14px",

    color: "#001919",

    padding: "12px",

    "&::placeholder": {

      color: "#A5B0AD",

      opacity: 1,

    },

  },

};


/* =========================================================
   SELECT
========================================================= */

const selectStyle = {

  width: "100%",

  height: "48px",

  borderRadius: "5px",

  fontFamily: "'Inter', sans-serif",

  fontSize: "14px",

  color: "#001919",


  "& .MuiOutlinedInput-notchedOutline": {

    borderColor: "#DCE5E2",

  },


  "&:hover .MuiOutlinedInput-notchedOutline": {

    borderColor: "#C7D4D0",

  },


  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {

    borderColor: "#00CD64",

  },


  "& .MuiSelect-select": {

    padding: "0 12px",

    display: "flex",

    alignItems: "center",

    height: "48px",

    boxSizing: "border-box",

  },


  "& .MuiSelect-icon": {

    color: "#A5B0AD",

  },

};


/* =========================================================
   UPLOAD BOX
========================================================= */

const uploadBox = {

  width: "100%",

  height: "32px",

  display: "flex",

  alignItems: "center",

  border: "1px solid #DCE5E2",

  borderRadius: "5px",

  overflow: "hidden",

  backgroundColor: "#FFFFFF",

  boxSizing: "border-box",

};


/* =========================================================
   UPLOAD TEXT
========================================================= */

const uploadText = {

  flex: 1,

  paddingLeft: "12px",

  fontFamily: "'Inter', sans-serif",

  fontSize: "11px",

  fontWeight: 400,

  lineHeight: "16px",

  color: "#A5B0AD",

  overflow: "hidden",

  textOverflow: "ellipsis",

  whiteSpace: "nowrap",

  boxSizing: "border-box",

};


/* =========================================================
   UPLOAD BUTTON
========================================================= */

const uploadButton = {

  width: "66px",

  minWidth: "66px",

  height: "28px",

  marginRight: "3px",

  padding: 0,

  borderRadius: "3px",

  backgroundColor: "#00CD64",

  color: "#FFFFFF",

  fontFamily: "'Inter', sans-serif",

  fontSize: "11px",

  fontWeight: 500,

  lineHeight: "16px",

  textTransform: "none",

  boxShadow: "none",

  "&:hover": {

    backgroundColor: "#00CD64",

    boxShadow: "none",

  },

};


/* =========================================================
   TERMS
========================================================= */

const termsWrapper = {

  gridColumn: "1 / -1",

  borderTop: "1px solid #E7ECEA",

  paddingTop: "14px",

  marginTop: "2px",

};


/* =========================================================
   TERMS STYLE
========================================================= */

const termsStyle = {

  margin: 0,

  display: "flex",

  alignItems: "center",


  "& .MuiCheckbox-root": {

    padding: 0,

    marginRight: "6px",

    color: "#D7E0DD",

    "&.Mui-checked": {

      color: "#00CD64",

    },

    "& .MuiSvgIcon-root": {

      fontSize: "16px",

    },

  },


  "& .MuiFormControlLabel-label": {

    fontFamily: "'Inter', sans-serif",

    fontStyle: "normal",

    fontWeight: 400,

    fontSize: "14px",

    lineHeight: "24px",

    display: "flex",

    alignItems: "center",

    color: "#001919",

    whiteSpace: "nowrap",

    "@media (max-width: 600px)": {

      fontSize: "11px",

      whiteSpace: "normal",

    },

  },

};


/* =========================================================
   TERMS LINK
========================================================= */

const termsLink = {

  fontWeight: 500,

  textDecoration: "underline",

  marginLeft: "3px",

};


/* =========================================================
   EXPORT
========================================================= */

export default CompanyInfo;