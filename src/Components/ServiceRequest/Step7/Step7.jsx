import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  styled,
  Container,
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Step7Wrapper = styled(Box)`
  width: 100% !important;
  flex: 0 0 100% !important;
  min-width: 0;

  .projectDetailsCard {
    width: 100% !important;
    max-width: 1137px !important;
    min-height: 400px;

    margin: 0 auto !important;
    padding: 20px 26px !important;

    box-sizing: border-box;

    border: 1px solid #aeb7b2 !important;
    border-radius: 14px !important;

    background: rgba(255, 255, 255, 0.85) !important;
    box-shadow: none !important;
  }

  /* =========================
     HEADER
  ========================= */

  .projectHeader {
    text-align: center;
    margin-bottom: 18px;
  }

  .projectTitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;

    color: #061418;
    margin-top: 40px !important;
  }

  .projectSubtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    /* identical to box height, or 160% */
    text-align: center;

    color: #64757a;
  }

  /* =========================
     DIVIDER
  ========================= */

  .sectionDivider {
    width: 100%;
    height: 1px;

    background: #e5ebe7;

    margin: 0 0 18px;
  }

  /* =========================
     FORM
  ========================= */

  .formField {
    width: 100%;
    margin-bottom: 20px;
  }

  .fieldLabel {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;

    color: #64757a;
  }

  .fieldInput {
    width: 100% !important;

    .MuiOutlinedInput-root {
      min-height: 34px !important;

      border-radius: 0 !important;

      background: transparent !important;

      fieldset {
        border: none !important;
        border-bottom: 1px solid #dfe5e1 !important;
      }

      &:hover fieldset {
        border-bottom: 1px solid #c8d1cb !important;
      }

      &.Mui-focused fieldset {
        border-bottom: 1px solid #00c967 !important;
      }
    }

    .MuiInputBase-input {
      padding: 5px 0 !important;

      font-family: "Montserrat", sans-serif !important;
      font-size: 18px !important;
      font-weight: 400 !important;

      color: #000000 !important;
    }

    .MuiInputBase-input::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #061418 !important;
      opacity: 1 !important;
    }
  }

  /* =========================
   DESCRIPTION SECTION
========================= */

  .descriptionSection {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .descriptionQuestion {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-transform: capitalize;
    color: #061418;
    text-align:center;
    margin-bottom: 18px !important;
  }

  .descriptionLabel {
    font-family: "Inter", sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 23px !important;

    color: #64757a !important;

    margin-bottom: 0px !important;
  }

  .descriptionInput {
    width: 100% !important;

    .MuiInputBase-root {
      width: 100% !important;

      padding: 0 !important;

      font-family: "Inter", sans-serif !important;
      font-size: 16px !important;
      font-weight: 400 !important;

      color: #000000 !important;
    }

    .MuiInputBase-input {
      padding: 8px 0 10px 0 !important;

      font-family: "Inter", sans-serif !important;
      font-size: 16px !important;
      font-weight: 400 !important;

      color: #000000 !important;
    }

    .MuiInputBase-input::placeholder {
      color: #000000 !important;
      opacity: 1 !important;

      font-family: "Inter", sans-serif !important;
      font-size: 16px !important;
      font-weight: 400 !important;
    }

    .MuiInput-underline:before {
      border-bottom: 1px solid #dfe5e1 !important;
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #c8d1cb !important;
    }

    .MuiInput-underline:after {
      border-bottom: 1px solid #00c967 !important;
    }
  }
  /* =========================
     SECOND DIVIDER
  ========================= */

  .uploadDivider {
    width: 100%;
    height: 1px;

    background: #e5ebe7;

    margin: 4px 0 14px;
  }

  /* =========================
     UPLOAD AREA
  ========================= */

  .uploadBox {
    width: 100% !important;

    min-height: 95px !important;

    padding: 10px !important;

    border: 1px dashed #cbd5ce !important;
    border-radius: 8px !important;

    display: flex !important;

    flex-direction: column !important;

    align-items: center !important;
    justify-content: center !important;

    gap: 3px !important;

    background: transparent !important;

    color: #7d8a81 !important;

    text-transform: none !important;

    transition: all 0.2s ease;

    &:hover {
      border-color: #00c967 !important;
      background: #f9fffb !important;
    }
  }

  .uploadIcon {
    width: 35px;
    height: 35px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #e8f8ef;

    margin-bottom: 2px;

    svg {
      width: 30px;
      height: 30px;

      color: #00c967;
    }
  }

  .uploadTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;

    color: #00cd64;
  }

  .uploadDescription {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 29px;

    color: #64757a;
  }

  .fileCount {
    font-family: "Montserrat", sans-serif !important;

    font-size: 7px !important;
    color: #00a955 !important;
  }
`;

const Step7 = ({ title, description, files, onChange }) => {
  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);

    onChange({
      files: selectedFiles,
    });
  };

  return (
    <Container>
      <Step7Wrapper>
        <Paper elevation={0} className="projectDetailsCard">
          {/* HEADER */}
          <Box className="projectHeader">
            <Typography className="projectTitle">Project Title</Typography>

            <Typography className="projectSubtitle">
              Give the project a meaningful title
            </Typography>
          </Box>

          <Box className="sectionDivider" />

          {/* PROJECT TITLE */}
          <Box className="formField">
            <Typography className="fieldLabel">Project Title</Typography>

            <TextField
              fullWidth
              size="small"
              variant="outlined"
              className="fieldInput"
              placeholder="Enter project title here"
              value={title}
              onChange={(event) =>
                onChange({
                  title: event.target.value,
                })
              }
            />
          </Box>

          {/* DESCRIPTION */}
          {/* DESCRIPTION */}
          <Box className="descriptionSection">
            <Typography className="descriptionQuestion">
              Are There Any Other Details You Would Like To Share With The
              Craftsmen?
            </Typography>

            <Typography className="descriptionLabel">Description</Typography>

            <TextField
              fullWidth
              multiline
              minRows={2}
              variant="standard"
              className="descriptionInput"
              placeholder="Enter description here"
              value={description}
              onChange={(event) =>
                onChange({
                  description: event.target.value,
                })
              }
            />
          </Box>
          <Box className="uploadDivider" />

          {/* UPLOAD */}
          <Button component="label" variant="outlined" className="uploadBox">
            <Box className="uploadIcon">
              <CloudUploadOutlinedIcon />
            </Box>

            <Typography className="uploadTitle">Choose file or drag</Typography>

            <Typography className="uploadDescription">
              The acceptable file formats are PNG and JPG files
            </Typography>

            {files.length > 0 && (
              <Typography className="fileCount">
                {files.length} file(s) selected
              </Typography>
            )}

            <input
              hidden
              type="file"
              multiple
              accept=".png,.jpg,.jpeg"
              onChange={handleFiles}
            />
          </Button>
        </Paper>
      </Step7Wrapper>
    </Container>
  );
};

export default Step7;
