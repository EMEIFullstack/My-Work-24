import {
  Card,
  CardActionArea,
  Box,
  Radio,
  Typography,
  styled,
} from "@mui/material";

const CardWrapper = styled(Box)`
  flex: 0 0 140px;

  .optionCard {
    position: relative;

    width: 248px;
    height: 210px;

    border: 1px solid #aeb7b2 !important;
    border-radius: 14px !important;

    box-sizing: border-box;

    background: rgba(255, 255, 255, 0.72);

    box-shadow: 0px 20px 40px rgba(17, 129, 71, 0.05);

    backdrop-filter: blur(8px);

    overflow: hidden;

    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      transform 0.2s ease;

    &.selected {
      border: 1.5px solid #00c967 !important;
      background: #f6fff9 !important;
    }

    &:hover {
      border-color: #00c967 !important;
      transform: translateY(-1px);
    }
  }

  .optionCardAction {
    position: relative;

    width: 100%;
    height: 100%;

    padding: 12px 8px 10px !important;

    display: flex !important;
    flex-direction: column !important;

    align-items: center !important;
    justify-content: center !important;

    box-sizing: border-box;
  }

  .optionRadio {
    position: absolute !important;

    top: 6px;
    left: 5px;

    padding: 0 !important;

    color: #aeb7b2 !important;

    z-index: 2;

    svg {
      width: 18px;
      height: 18px;
    }

    &.Mui-checked {
      color: #00c967 !important;
    }
  }

  .optionIcon {
    width: 70px;
    height: 70px;

    flex-shrink: 0;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #e8f7ee;

    color: #3d5145;

    svg {
      width: 90px;
      height: 90px;
    }
  }

  .optionLabel {
    width: 100%;

    margin-top: 8px !important;

    font-family: "Montserrat", sans-serif !important;

    font-style: normal;

    font-weight: 700 !important;

    font-size: 12px !important;
    line-height: 15px !important;

    text-align: center;

    color: #061418 !important;

    white-space: normal;

    overflow-wrap: normal;
    word-break: normal;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    overflow: hidden;
  }
`;

const OptionCard = ({
  value,
  selectedValue,
  label,
  icon,
  onChange,
}) => {
  const selected = value === selectedValue;

  return (
    <CardWrapper>
      <Card
        elevation={0}
        className={`optionCard ${selected ? "selected" : ""}`}
      >
        <CardActionArea
          className="optionCardAction"
          onClick={() => onChange(value)}
        >
          <Radio
            checked={selected}
            value={value}
            className="optionRadio"
            size="small"
          />

          <Box className="optionIcon">
            {icon}
          </Box>

          <Typography className="optionLabel">
            {label}
          </Typography>
        </CardActionArea>
      </Card>
    </CardWrapper>
  );
};

export default OptionCard;