
import { Box, Button, MenuItem, Select, styled, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";



const SearchBarWrapper = styled(Box)`
  .searchBar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 960px;
  max-width: calc(100% - 24px);
  margin: 0;  
  box-sizing: border-box;
   background: rgba(255, 255, 255, 0.75) !important;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
  border-radius: 100px !important;
  padding: 10px 12px 10px 24px !important;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08) !important;

  .field {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;

    .icon {
      font-size: 20px;
      color: #8c9696;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
  }

  .searchField {
    flex: 1.1 1 0%; 

    .searchIconElement {
      font-size: 21px;
      color: #8c9696;
      margin-right: 4px;
    }

    .MuiInput-root,
    .MuiInputBase-root {
      width: 100%;

      &::before,
      &::after {
        border-bottom: none !important;
        display: none !important;
      }
    }
  }

  .dropdownField {
    flex: 1 1 0%;
    /* Added inner right padding so the arrow doesn't hug the divider or button */
    padding-right: 12px;

    .MuiSelect-root,
    .MuiInputBase-root {
      width: 100%;
    }
  }

  .MuiInputBase-root {
    font-size: 14px;
    color: #1a2525;
  }

  .MuiSelect-select {
    font-size: 14px;
    font-weight: 500;
    color: #758282;
    display: flex;
    align-items: center;
    width: 100% !important;
    padding-right: 24px !important;
    background: transparent !important;

    &:focus {
      background: transparent !important;
    }
  }

  .MuiSelect-icon {
    right: 0;
    color: #758282;
  }

  .divider {
    width: 1px;
    height: 28px;
    background: rgba(0, 0, 0, 0.08);
    margin: 0 12px;
    flex-shrink: 0;
  }

  .searchBtn {
    width: 120px;
    height: 48px;
    border-radius: 100px !important;
    border: 1.5px solid #111111 !important;
    background: #ffffff !important;
    color: #111111 !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    text-transform: none !important;
    box-shadow: none !important;
    flex-shrink: 0;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #111111 !important;
      color: #ffffff !important;
    }
  }
}

// Responsive Form Factor Stacking Rules
@media (min-width: 1400px) {
  .searchBar {
    max-width: 980px;
  }
}

@media (max-width: 1200px) {
  .searchBar {
    width: calc(100% - 48px);
    max-width: 900px;
  }
}

@media (max-width: 960px) {
  .searchBar {
    flex-direction: column;
    border-radius: 24px !important;
    padding: 20px !important;
    gap: 16px;
    width: 100%;
    max-width: none;

    .field {
      width: 100% !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding-bottom: 8px;
    }

    .dropdownField {
      padding-right: 0;
    }

    .searchField {
      width: 100% !important;
    }

    .divider {
      display: none !important;
    }

    .searchBtn {
      width: 100%;
      margin-left: 0;
    }
  }
}
`


const SearchBar = () => {
  return (
    <SearchBarWrapper>  
      <Box className="searchBar">
      <div className="field searchField">
        <SearchIcon className="icon searchIconElement" />
        <TextField
          placeholder="Search company"
          variant="standard"
          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
        />
      </div>

      <div className="divider"></div>

      <div className="field dropdownField">
        <LocationOnOutlinedIcon className="icon" />
        <Select
          variant="standard"
          defaultValue=""
          displayEmpty
          disableUnderline
          fullWidth
        >
          <MenuItem value="">Location</MenuItem>
          <MenuItem value="Kolkata">Kolkata</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
        </Select>
      </div>

      <div className="divider"></div>

      <div className="field dropdownField">
        <CalendarMonthOutlinedIcon className="icon" />
        <Select
          variant="standard"
          defaultValue=""
          displayEmpty
          disableUnderline
          fullWidth
        >
          <MenuItem value="">Period</MenuItem>
          <MenuItem value="Today">Today</MenuItem>
          <MenuItem value="Week">This Week</MenuItem>
          <MenuItem value="Month">This Month</MenuItem>
        </Select>
      </div>

      <div className="divider"></div>

      <div className="field dropdownField">
        <FormatListBulletedIcon className="icon" />
        <Select
          variant="standard"
          defaultValue=""
          displayEmpty
          disableUnderline
          fullWidth
        >
          <MenuItem value="">Category</MenuItem>
          <MenuItem value="Construction">Construction</MenuItem>
          <MenuItem value="Materials">Materials</MenuItem>
          <MenuItem value="Tools">Tools</MenuItem>
        </Select>
      </div>

      <Button className="searchBtn" disableElevation>
        Search
      </Button>
    </Box>
    </SearchBarWrapper>
  );
};

export default SearchBar;