import { Box, Typography, IconButton, styled } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

const SummaryWrapper = styled(Box)`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  padding: 32px 36px;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  box-sizing: border-box;

  /* Section Title Bar */
  .sectionHeader {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      #d1ffe7 0%,
      rgba(209, 255, 231, 0) 100%
    );
    margin-top: 28px;
    margin-bottom: 20px;

    &:first-of-type {
      margin-top: 0;
    }

    .headerIcon {
      color: #00c967;
      font-size: 20px;
    }

    .headerTitle {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      color: #00c967;
    }
  }

  /* Summary Item Row */
  .summaryRow {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 18px;
    padding-bottom: 4px;

    .itemLeft {
      flex: 1;
      padding-right: 12px;
    }

    .itemQuestion {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      text-transform: capitalize;
      color: #111111;
      margin-bottom: 6px;
    }

    .itemAnswer {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16 px;
      line-height: 28.8px;
      color: #666666;
      word-break: break-word;
    }

    /* Edit Button Style */
    .editBtn {
      background-color: #d1ffe7;
      color: #00c967;
      padding: 6px;
      width: 32px;
      height: 32px;
      transition: all 0.2s ease;

      &:hover {
        background-color: #00c967;
        color: #ffffff;
      }

      svg {
        font-size: 18px;
      }
    }
  }
`;

const Step10 = ({ formData = {}, onEditStep }) => {
  // Safe default value helper
  const getValue = (val, fallback = "N/A") => (val ? val : fallback);

  return (
    <SummaryWrapper>
      {/* =========================================
          1. PROJECT DESCRIPTION
      ========================================= */}
      <Box className="sectionHeader">
        <DescriptionOutlinedIcon className="headerIcon" />
        <Typography className="headerTitle">Project Description</Typography>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            What cleaning work needs to be done?
          </Typography>
          <Typography className="itemAnswer">
            {getValue(formData.floorWork, "Window")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("start", 1)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            How Many Floors Are The Rooms In The Apartment Or House Spread Over?
          </Typography>
          <Typography className="itemAnswer">
            {getValue(formData.floorType, "1")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("start", 2)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            How Big Are The Rooms?
          </Typography>
          <Typography className="itemAnswer">
            {getValue(formData.floorCondition, "2")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("start", 3)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            How Big Is The Area In Total?
          </Typography>
          <Typography className="itemAnswer">
            {formData.measurement ? `${formData.measurement} m²` : "255 m²"}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("start", 4)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            How Many Floor-To-Ceiling Windows Do You Have?
          </Typography>
          <Typography className="itemAnswer">
            {getValue(formData.quantity, "1")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("start", 5)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            Are There Any Other Details You Would Like To Share With The Craftsmen?
          </Typography>
          <Typography className="itemAnswer">
            {getValue(formData.description, "Dummy content")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("start", 7)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      {/* =========================================
          2. EXECUTION
      ========================================= */}
      <Box className="sectionHeader">
        <BuildOutlinedIcon className="headerIcon" />
        <Typography className="headerTitle">Execution</Typography>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">Date Of Execution</Typography>
          <Typography className="itemAnswer">
            {getValue(formData.selectedDate, "25 Aug, 2026")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("date")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">
            Location Of The Work Place
          </Typography>
          <Typography className="itemAnswer">
            {getValue(formData.postcode, "7412 Schanans")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("date")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      {/* =========================================
          3. CONTACT DETAILS
      ========================================= */}
      <Box className="sectionHeader">
        <ContactsOutlinedIcon className="headerIcon" />
        <Typography className="headerTitle">Contact Details</Typography>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">Name</Typography>
          <Typography className="itemAnswer">
            {formData.salutation ? `${formData.salutation} ` : ""}
            {getValue(formData.name, "Mr. Micheal Joesp")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("contact")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">Street Name</Typography>
          <Typography className="itemAnswer">
            {getValue(formData.street, "7412 Schanans")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("contact")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">Zip Code</Typography>
          <Typography className="itemAnswer">
            {getValue(formData.zipCity, "741253")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("contact")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">Email Address</Typography>
          <Typography className="itemAnswer">
            {getValue(formData.email, "demomail@gmail.com")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("contact")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>

      <Box className="summaryRow">
        <Box className="itemLeft">
          <Typography className="itemQuestion">Mobile Number</Typography>
          <Typography className="itemAnswer">
            {getValue(formData.mobile, "123456789")}
          </Typography>
        </Box>
        <IconButton
          className="editBtn"
          onClick={() => onEditStep && onEditStep("contact")}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>
    </SummaryWrapper>
  );
};

export default Step10;