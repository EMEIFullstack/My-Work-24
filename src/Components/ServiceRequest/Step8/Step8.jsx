import { useState } from "react";
import { Box, Typography, TextField, Collapse, styled, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import dayjs from "dayjs";

const Step8Wrapper = styled(Box)`
  /* Main Container - Fully Fluid Height & Width */
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  padding: 32px;
  width: 100%;
  max-width: 1000px;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;

  .sectionTitle {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #111;
    text-align: center;
  }

  .sectionSubtitle {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #888;
    text-align: center;
    margin-bottom: 25px;
  }

  .fieldLabel {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28.8px;
    color: #888;
    margin-bottom: 4px;
  }

  .customInput {
    width: 100%;
    
    .MuiInputBase-root {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #111;
      padding: 0 0 6px 0;
      
      &::before {
        border-bottom: 1px solid #e2e8f0;
      }
      &:hover:not(.Mui-disabled)::before {
        border-bottom: 1px solid #cbd5e1;
      }
      &::after {
        border-bottom: 2px solid #00CD64;
      }
    }

    input {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #111;
    }

    input::placeholder {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #111;
      opacity: 1;
    }
  }

  .dropdownHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 1px solid #e2e8f0;
    cursor: pointer;

    .selectedText,
    .placeholderText {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      color: #111;
    }
  }

  .optionsContainer {
    margin-top: 15px;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 16px 0;
    background: #fff;
  }

  .optionItem {
    padding: 10px 24px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #111;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #f8fafc;
      color: #00CD64;
    }

    &.selected {
      color: #00CD64;
    }
  }

  /* =================================================
     CALENDAR (Fluid & Responsive Grid)
     ================================================= */
  .figmaCalendarCard {
    margin-top: 25px;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 32px;
    background: #ffffff;
    box-sizing: border-box;
  }

  .calendarHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    .monthYearTitle {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 22px;
      color: #111111;

      span {
        font-weight: 400;
        color: #666666;
        margin-left: 6px;
      }
    }

    .navButtons {
      display: flex;
      gap: 8px;
    }
  }

  /* 7 Equal Columns Header */
  .weekDaysGrid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    margin-bottom: 12px;

    .weekDayCell {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #333333;
    }
  }

  /* 7 Equal Columns Days Grid */
  .daysGrid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-top: 1px solid #f0f0f0;
    border-left: 1px solid #f0f0f0;

    .dayCell {
      aspect-ratio: 1 / 0.85; 
      min-height: 80px;
      border-right: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      padding: 10px 12px;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #111111;
      cursor: pointer;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: #f8fafc;
      }

      &.emptyCell {
        cursor: default;
        background-color: #ffffff;
        &:hover {
          background-color: #ffffff;
        }
      }

      /* Selected Active Cell (#00CD64) */
      &.selectedDay {
        background-color: #00CD64 !important;
        color: #ffffff !important;
        font-weight: 700;
      }
    }
  }
`;

const timeOptionsList = [
  "On Exact Date",
  "As Soon As Possible",
  "Within The Next 30 Days",
  "Within The Next 3 Months",
  "In More Than 3 Months",
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Step8 = ({ postcode = "", timeOption = "", selectedDate = null, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [activeDate, setActiveDate] = useState(selectedDate ? dayjs(selectedDate) : null);

  const handleSelectTime = (option) => {
    if (onChange) onChange({ timeOption: option });
    setIsOpen(false);
  };

  const startOfMonth = currentMonth.startOf("month");
  const daysInMonth = currentMonth.daysInMonth();

  // Shift Mon-first index: Dayjs Sunday is 0, Monday is 1
  let firstDayIndex = startOfMonth.day() - 1;
  if (firstDayIndex === -1) firstDayIndex = 6;

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const handleDateClick = (dayNumber) => {
    const newSelected = currentMonth.date(dayNumber);
    setActiveDate(newSelected);
    if (onChange) {
      onChange({
        timeOption: "On Exact Date",
        selectedDate: newSelected.format("YYYY-MM-DD"),
      });
    }
  };

  return (
    <Step8Wrapper>
      {/* 1. LOCATION SECTION */}
      <Typography className="sectionTitle">Where Is The Location?*</Typography>
      <Typography className="sectionSubtitle">
        Please enter postcode and select location from suggestions
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography className="fieldLabel">Postal Code</Typography>
        <TextField
          variant="standard"
          placeholder="Enter postal code"
          value={postcode}
          onChange={(e) => onChange && onChange({ postcode: e.target.value })}
          className="customInput"
          InputProps={{ disableUnderline: false }}
        />
      </Box>

      {/* 2. TIME SECTION */}
      <Typography className="sectionTitle" sx={{ mt: 3 }}>
        When Should The Work Be Done?
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography className="fieldLabel">Time</Typography>

        <Box className="dropdownHeader" onClick={() => setIsOpen(!isOpen)}>
          <Typography className={timeOption ? "selectedText" : "placeholderText"}>
            {timeOption || "Select here"}
          </Typography>
          {isOpen ? (
            <KeyboardArrowUpIcon sx={{ fontSize: 20, color: "#111" }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: 20, color: "#111" }} />
          )}
        </Box>

        <Collapse in={isOpen}>
          <Box className="optionsContainer">
            {timeOptionsList.map((item) => (
              <Box
                key={item}
                className={`optionItem ${timeOption === item ? "selected" : ""}`}
                onClick={() => handleSelectTime(item)}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Collapse>

        {/* Figma Exact Responsive Calendar */}
        {timeOption === "On Exact Date" && (
          <Box className="figmaCalendarCard">
            {/* Header */}
            <Box className="calendarHeader">
              <Typography className="monthYearTitle">
                {currentMonth.format("MMMM")}{" "}
                <span>{currentMonth.format("YYYY")}</span>
              </Typography>
              <Box className="navButtons">
                <IconButton onClick={handlePrevMonth} size="small">
                  <ChevronLeftIcon sx={{ color: "#333" }} />
                </IconButton>
                <IconButton onClick={handleNextMonth} size="small">
                  <ChevronRightIcon sx={{ color: "#333" }} />
                </IconButton>
              </Box>
            </Box>

            {/* Mon-Sun Header Row */}
            <Box className="weekDaysGrid">
              {weekDays.map((day) => (
                <Typography key={day} className="weekDayCell">
                  {day}
                </Typography>
              ))}
            </Box>

            {/* Days Grid */}
            <Box className="daysGrid">
              {Array.from({ length: firstDayIndex }).map((_, index) => (
                <Box key={`empty-${index}`} className="dayCell emptyCell" />
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => {
                const dayNum = index + 1;
                const isSelected =
                  activeDate &&
                  activeDate.isSame(currentMonth.date(dayNum), "day");

                return (
                  <Box
                    key={dayNum}
                    className={`dayCell ${isSelected ? "selectedDay" : ""}`}
                    onClick={() => handleDateClick(dayNum)}
                  >
                    {dayNum}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Step8Wrapper>
  );
};

export default Step8;