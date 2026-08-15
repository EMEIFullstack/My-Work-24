import React from "react";

import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";

import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";


// =========================================================
// NEW YORK LOCATION
// =========================================================

const position = [40.713, -74.006];


// =========================================================
// CUSTOM LOCATION ICON
// =========================================================

const locationIcon = new L.DivIcon({
  className: "custom-location-marker",

  html: `
    <div class="location-marker">
      <div class="location-marker-pin"></div>
      <div class="location-marker-dot"></div>
    </div>
  `,

  iconSize: [32, 42],
  iconAnchor: [16, 42],
});


// =========================================================
// MAP CENTER
// =========================================================

const MapPosition = () => {

  const map = useMap();

  React.useEffect(() => {

    map.setView(position, 12);

  }, [map]);

  return null;

};


// =========================================================
// ADD LOCATION
// =========================================================

const AddLocation = ({
  formData,
  handleChange,
  onBack,
  onNext,
}) => {

  return (

    <Box sx={locationWrapper}>

      {/* =================================================
          TITLE
      ================================================= */}

      <Typography sx={locationTitle}>
        Add Company Location
      </Typography>


      {/* =================================================
          MAP
      ================================================= */}

      <Box sx={mapWrapper}>

        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={true}
          style={{
            width: "100%",
            height: "100%",
          }}
        >

          <MapPosition />


          {/* =================================================
              MAP TILES
          ================================================= */}

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />


          {/* =================================================
              FIGMA STYLE GREEN CIRCLE
          ================================================= */}

          <Circle
            center={position}
            radius={850}
            pathOptions={{
              color: "rgba(0, 205, 100, 0.18)",
              fillColor: "rgba(0, 205, 100, 0.14)",
              fillOpacity: 1,
              weight: 1,
            }}
          />


          {/* =================================================
              LOCATION MARKER
          ================================================= */}

          <Marker
            position={position}
            icon={locationIcon}
          />

        </MapContainer>


        {/* =================================================
            SEARCH BOX
        ================================================= */}

        <TextField
          fullWidth
          placeholder="Location placeholder"
          sx={locationSearch}
          slotProps={{
            input: {

              startAdornment: (

                <InputAdornment position="start">

                  <LocationOnOutlined
                    sx={{
                      fontSize: "17px",
                      color: "#8C9995",
                    }}
                  />

                </InputAdornment>

              ),

            },
          }}
        />

      </Box>


      {/* =================================================
          BUTTONS
      ================================================= */}
<Box sx={buttonWrapper}>

  {/* BACK BUTTON */}
  <Button
    type="button"
    onClick={onBack}
    disableRipple
    sx={backButton}
  >
    Back
  </Button>


  {/* NEXT BUTTON */}
  <Button
    type="button"
    onClick={onNext}
    disableRipple
    sx={nextButton}
  >
    Next
  </Button>

</Box>


    </Box>

  );

};


// =========================================================
// MAIN WRAPPER
// =========================================================

const locationWrapper = {
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
  fontFamily: "'Montserrat', sans-serif",

  paddingBottom: "0px",
  marginBottom: "0px",
};

// =========================================================
// TITLE
// =========================================================
const locationTitle = {
  width: "100%",
  whiteSpace: "nowrap",

  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "29px",

  textTransform: "capitalize",
  color: "#061418",

  margin: 0,
  marginBottom: "12px",
};


// =========================================================
// MAP WRAPPER
// =========================================================
const mapWrapper = {
  position: "relative",

  width: "100%",
  height: "305px",

  overflow: "hidden",

  borderRadius: "12px",

  boxSizing: "border-box",

  "& .leaflet-container": {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
  },



  "& .leaflet-container": {

    width: "100%",

    height: "100%",

    borderRadius: "12px",

    backgroundColor: "#EEF1EF",

  },

  /*
   * Make OpenStreetMap look much closer
   * to the light Figma design.
   */

  "& .leaflet-tile-pane": {

    filter:
      "grayscale(100%) brightness(1.08) contrast(0.78) saturate(0.35)",

  },

  "& .leaflet-control-attribution": {

    fontSize: "8px",

    background: "rgba(255,255,255,0.55)",

  },

};


// =========================================================
// SEARCH BOX
// =========================================================

const locationSearch = {

  position: "absolute",

  top: "10px",

  left: "10px",

  width: "205px",

  zIndex: 1000,

  backgroundColor: "#FFFFFF",

  borderRadius: "7px",

  "& .MuiOutlinedInput-root": {

    height: "38px",

    borderRadius: "7px",

    fontFamily: "'Inter', sans-serif",

    fontSize: "11px",

    color: "#001919",

    backgroundColor: "#FFFFFF",

    boxShadow:
      "0 2px 8px rgba(0,0,0,0.08)",

    "& fieldset": {

      border: "none",

    },

  },

  "& .MuiInputBase-input": {

    padding: "0 8px 0 0",

    fontFamily: "'Inter', sans-serif",

    fontSize: "11px",

    color: "#001919",

    "&::placeholder": {

      color: "#A5B0AD",

      opacity: 1,

    },

  },

};


// =========================================================
// BUTTON WRAPPER
// =========================================================

const buttonWrapper = {

  width: "100%",

  display: "flex",

  justifyContent: "space-between",

  alignItems: "center",

  marginTop: "16px",

};


// =========================================================
// BACK BUTTON
// =========================================================

const backButton = {

  width: "90px",

  height: "32px",

  borderRadius: "18px",

  border: "1px solid #A5B0AD",

  backgroundColor: "#FFFFFF",

  color: "#00CD64",

  fontFamily: "'Inter', sans-serif",

  fontSize: "10px",

  fontWeight: 500,

  lineHeight: "16px",

  textTransform: "none",

  boxShadow: "none",

  "&:hover": {

    backgroundColor: "#FFFFFF",

    borderColor: "#00CD64",

    boxShadow: "none",

  },

};


// =========================================================
// NEXT BUTTON
// =========================================================

const nextButton = {

  width: "90px",

  height: "32px",

  borderRadius: "18px",

  backgroundColor: "#00CD64",

  color: "#FFFFFF",

  fontFamily: "'Inter', sans-serif",

  fontSize: "10px",

  fontWeight: 500,

  lineHeight: "16px",

  textTransform: "none",

  boxShadow: "none",

  "&:hover": {

    backgroundColor: "#00CD64",

    boxShadow: "none",

  },

};


export default AddLocation;