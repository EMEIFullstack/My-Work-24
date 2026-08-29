import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// Local Icon / Asset Imports
import locationIcon from "../../../assets/icons/location-icon.png";
import editIcon from "../../../assets/icons/edit-icon.png"; 

// Navigation Icons
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileWrapper = styled(Box)`
  width: 100%;
  min-height: calc(100vh - 80px); /* Adjust height to accommodate shared header */
  background-color: #f8fafc;
  background-image: radial-gradient(
    circle at 100% 50%,
    rgba(220, 252, 231, 0.4) 0%,
    rgba(248, 250, 252, 0.8) 50%,
    #f8fafc 100%
  );
  display: flex;
  flex-direction: column;
  padding-top:120px;

  .mainContent {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
  }

  .dashboardCard {
    width: 100%;
    max-width: 1050px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
    display: flex;
    min-height: 600px;
    overflow: hidden;
  }

  /* Sidebar styling */
  .sidebar {
    width: 240px;
    border-right: 1px solid #e2e8f0;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .sidebarMenu {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .sidebarBtn {
      justify-content: flex-start;
      border-radius: 30px;
      padding: 10px 20px;
      text-transform: none;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
      gap: 12px;
      color: #64748b;

      &:hover {
        background-color: #f4fbf7;
        color: #00cd64;
      }

      &.active {
        background-color: #00cd64;
        color: #ffffff;

        &:hover {
          background-color: #00b957;
        }
      }

      &.signout {
        background-color: #e8f5e9;
        color: #00cd64;

        &:hover {
          background-color: #c8e6c9;
        }
      }
    }
  }

  /* Profile Details View */
  .contentArea {
    flex: 1;
    padding: 36px 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .pageTitle {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
  }

  .infoBlock {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 24px;
    background-color: #ffffff;
  }

  .profileHeaderBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .userInfo {
      display: flex;
      align-items: center;
      gap: 20px;

      .userName {
        font-family: "Inter", sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
      }

      .userLocation {
        display: flex;
        align-items: center;
        gap: 4px;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: #64748b;
        margin-top: 4px;
      }
    }
  }

  .outlineBtn {
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    text-transform: none;
    color: #64748b;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 13px;
    padding: 6px 16px;

    &:hover {
      border-color: #cbd5e1;
      background-color: #f8fafc;
    }
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    .sectionTitle {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
    }
  }

  /* Grid Layout */
  .infoGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 40px;

    .infoGroup {
      &.fullWidth {
        grid-column: span 2;
      }

      .fieldLabel {
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: #64748b;
        margin-bottom: 4px;
      }

      .fieldValue {
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #1e293b;
      }
    }
  }

  .styledTextField {
    & .MuiOutlinedInput-root {
      border-radius: 9px;
      font-family: "Inter", sans-serif;
      font-size: 14px;
      color: #001919;

      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #00cd64;
      }

      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #00cd64;
      }
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: #dfe5ee;
    }
  }
`;

const UserProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const [profileData, setProfileData] = useState({
    firstName: "Charlie",
    lastName: "Dorwart",
    email: "michelle.rivera@example.com",
    mobile: "(480) 555-0103",
    country: "United States of America",
    city: "California",
    state: "California",
    zip: "81063",
    address: "1901 Thornridge Cir. Shiloh",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleSignOut = () => {
    // Clear logged-in session data
    localStorage.removeItem("isLoggedIn");
    // Optional: emit standard browser event so global header/context updates immediately
    window.dispatchEvent(new Event("storage"));
    // Redirect user to the signup route
    navigate("/signup");
  };

  return (
    <ProfileWrapper>
      {/* Main Dashboard Layout */}
      <Box className="mainContent">
        <Box className="dashboardCard">
          {/* Sidebar Menu */}
          <Box className="sidebar">
            <Box className="sidebarMenu">
              <Button
                className={`sidebarBtn ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
                startIcon={<PersonIcon />}
              >
                My Profile
              </Button>
              <Button
                className={`sidebarBtn ${activeTab === "projects" ? "active" : ""}`}
                onClick={() => setActiveTab("projects")}
                startIcon={<FolderIcon />}
              >
                My Job/Project
              </Button>
              <Button
                className={`sidebarBtn ${activeTab === "notifications" ? "active" : ""}`}
                onClick={() => setActiveTab("notifications")}
                startIcon={<NotificationsIcon />}
              >
                Notifications
              </Button>
            </Box>

            <Button
              className="sidebarBtn signout"
              startIcon={<LogoutIcon />}
              onClick={handleSignOut}
            >
              Sign out
            </Button>
          </Box>

          {/* User Profile Content */}
          <Box className="contentArea">
            <Typography className="pageTitle">My Profile</Typography>

            {/* Profile Header Summary */}
            <Box className="infoBlock profileHeaderBlock">
              <Box className="userInfo">
                <Avatar
                  alt={`${profileData.firstName} ${profileData.lastName}`}
                  src="https://i.pravatar.cc/100?img=12"
                  sx={{ width: 72, height: 72 }}
                />
                <Box>
                  <Typography className="userName">
                    {profileData.firstName} {profileData.lastName}
                  </Typography>
                  <Typography className="userLocation">
                    <img
                      src={locationIcon}
                      alt="location"
                      style={{ width: 14, height: 14 }}
                    />
                    {profileData.address}, {profileData.city} {profileData.zip}
                  </Typography>
                </Box>
              </Box>
              <Button className="outlineBtn" variant="outlined">
                Change Password
              </Button>
            </Box>

            {/* Personal Details Section */}
            <Box className="infoBlock">
              <Box className="sectionHeader">
                <Typography className="sectionTitle">
                  Personal Information
                </Typography>
                <Button
                  className="outlineBtn"
                  variant="outlined"
                  onClick={() => setIsEditing((prev) => !prev)}
                  startIcon={
                    <img
                      src={editIcon}
                      alt="edit"
                      style={{ width: 14, height: 14 }}
                    />
                  }
                >
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </Box>

              {isEditing ? (
                /* Editable View */
                <Box component="form" onSubmit={handleSave} className="infoGrid">
                  <Box className="infoGroup">
                    <Typography className="fieldLabel">First Name</Typography>
                    <TextField
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Last Name</Typography>
                    <TextField
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Email Address</Typography>
                    <TextField
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Contact Number</Typography>
                    <TextField
                      name="mobile"
                      value={profileData.mobile}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Country</Typography>
                    <TextField
                      name="country"
                      value={profileData.country}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">City</Typography>
                    <TextField
                      name="city"
                      value={profileData.city}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">State</Typography>
                    <TextField
                      name="state"
                      value={profileData.state}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">ZIP</Typography>
                    <TextField
                      name="zip"
                      value={profileData.zip}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup fullWidth">
                    <Typography className="fieldLabel">Address Line</Typography>
                    <TextField
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      className="styledTextField"
                    />
                  </Box>

                  <Box className="infoGroup fullWidth">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#00cd64",
                        borderRadius: "20px",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#00b957" },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Box>
              ) : (
                /* Display View */
                <Box className="infoGrid">
                  <Box className="infoGroup">
                    <Typography className="fieldLabel">First Name</Typography>
                    <Typography className="fieldValue">
                      {profileData.firstName}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Last Name</Typography>
                    <Typography className="fieldValue">
                      {profileData.lastName}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Email Address</Typography>
                    <Typography className="fieldValue">
                      {profileData.email}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Contact Number</Typography>
                    <Typography className="fieldValue">
                      {profileData.mobile}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">Country</Typography>
                    <Typography className="fieldValue">
                      {profileData.country}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">City</Typography>
                    <Typography className="fieldValue">
                      {profileData.city}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">State</Typography>
                    <Typography className="fieldValue">
                      {profileData.state}
                    </Typography>
                  </Box>

                  <Box className="infoGroup">
                    <Typography className="fieldLabel">ZIP</Typography>
                    <Typography className="fieldValue">
                      {profileData.zip}
                    </Typography>
                  </Box>

                  <Box className="infoGroup fullWidth">
                    <Typography className="fieldLabel">Address Line</Typography>
                    <Typography className="fieldValue">
                      {profileData.address}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </ProfileWrapper>
  );
};

export default UserProfile;