import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Avatar,
  TextField,
  IconButton,
  InputAdornment,
  Chip,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// Material UI & Feather Icons
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";

const DashboardWrapper = styled(Box)`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: #f8fafc;
  background-image: radial-gradient(
    circle at 100% 50%,
    rgba(220, 252, 231, 0.4) 0%,
    rgba(248, 250, 252, 0.8) 50%,
    #f8fafc 100%
  );
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  box-sizing: border-box;

  .mainContent {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 20px;
  }

  .dashboardCard {
    width: 100%;
    max-width: 1080px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    min-height: 680px;
    overflow: hidden;
  }

  /* Sidebar styling */
  .sidebar {
    width: 230px;
    border-right: 1px solid #e2e8f0;
    padding: 28px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .sidebarMenu {
      display: flex;
      flex-direction: column;
      gap: 10px;
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

  /* Main Right Content Section */
  .contentArea {
    flex: 1;
    padding: 32px 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .topHeaderRow {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pageTitle {
      font-family: "Montserrat", sans-serif;
      font-size: 22px;
      font-weight: 800;
      color: #061418;
    }

    .addProjectBtn {
      background-color: #00cd64;
      color: #ffffff;
      border-radius: 30px;
      text-transform: none;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      padding: 8px 24px;
      font-size: 14px;
      box-shadow: none;

      &:hover {
        background-color: #00b957;
        box-shadow: none;
      }
    }
  }

  /* Project Description Card Banner */
  .projectSummaryCard {
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 20px 24px;
    background-color: #ffffff;

    .projectHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;

      .titleBox {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .projectTitle {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #0f172a;
        line-height: 1.3;
      }

      .pendingChip {
        background-color: #fff7ed;
        color: #f97316;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 600;
        border-radius: 12px;
        height: 24px;
      }
    }

    .projectDescription {
      font-family: "Inter", sans-serif;
      font-size: 13px;
      line-height: 20px;
      color: #64748b;
    }
  }

  /* Secondary Navigation Tabs */
  .subNavigationTabs {
    border-bottom: 1px solid #e2e8f0;

    .MuiTab-root {
      text-transform: none;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #64748b;
      min-width: 90px;
      padding: 8px 16px;

      &.Mui-selected {
        color: #00cd64;
        font-weight: 700;
      }
    }

    .MuiTabs-indicator {
      background-color: #00cd64;
      height: 3px;
      border-radius: 3px 3px 0 0;
    }
  }

  /* Chat System Split Box */
  .chatBoxContainer {
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 0;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    overflow: hidden;
    min-height: 420px;
    background-color: #ffffff;
  }

  /* Left Chat Users List */
  .chatUsersCol {
    border-right: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;

    .searchWrapper {
      padding: 12px 14px;
      border-bottom: 1px solid #f1f5f9;

      .MuiOutlinedInput-root {
        border-radius: 10px;
        font-size: 13px;
        background-color: #f8fafc;

        & fieldset {
          border-color: #e2e8f0;
        }
      }
    }

    .usersList {
      flex: 1;
      max-height: 360px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .userCard {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      cursor: pointer;
      border-bottom: 1px solid #f8fafc;
      transition: all 0.2s ease;

      &:hover {
        background-color: #f8fafc;
      }

      &.selected {
        background-color: #f1fdf5;
      }

      .avatarBox {
        position: relative;

        .onlineDot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 8px;
          height: 8px;
          background-color: #00cd64;
          border: 2px solid #ffffff;
          border-radius: 50%;
        }
      }

      .userInfo {
        flex: 1;
        overflow: hidden;

        .nameRow {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .userName {
            font-family: "Inter", sans-serif;
            font-weight: 700;
            font-size: 13px;
            color: #0f172a;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .timeStamp {
            font-family: "Inter", sans-serif;
            font-size: 11px;
            color: #94a3b8;
          }
        }

        .snippet {
          font-family: "Inter", sans-serif;
          font-size: 12px;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  /* Right Active Chat Window */
  .chatWindowCol {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px;
    background-color: #ffffff;

    .chatHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f5f9;

      .headerUser {
        display: flex;
        align-items: center;
        gap: 12px;

        .name {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: #0f172a;
        }

        .status {
          font-family: "Inter", sans-serif;
          font-size: 12px;
          color: #94a3b8;
        }
      }
    }

    .chatBody {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
      overflow-y: auto;
    }

    /* Deliverable Information Card */
    .deliverableCard {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #ffffff;

      .infoItem {
        .label {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          color: #94a3b8;
          margin-bottom: 2px;
        }
        .value {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #0f172a;
        }
      }

      .expiredBadge {
        background-color: #ef4444;
        color: #ffffff;
        font-family: "Inter", sans-serif;
        font-size: 11px;
        font-weight: 600;
        border-radius: 12px;
        height: 22px;
        padding: 0 10px;
      }
    }

    .timeSeparator {
      font-family: "Inter", sans-serif;
      font-size: 11px;
      color: #94a3b8;
      text-align: left;
      margin: 4px 0;
    }

    /* Price Input / Proposal Card */
    .proposedPriceBox {
      background-color: #f8fafc;
      border-radius: 14px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      .proposalLabel {
        font-family: "Inter", sans-serif;
        font-size: 11px;
        color: #94a3b8;
      }

      .priceDisplay {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 15px;
        color: #0f172a;
      }

      .btnGroup {
        display: flex;
        gap: 10px;

        .submitBtn {
          background-color: #00cd64;
          color: #ffffff;
          border-radius: 20px;
          text-transform: none;
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 13px;
          padding: 6px 20px;
          box-shadow: none;

          &:hover {
            background-color: #00b957;
            box-shadow: none;
          }
        }

        .discardBtn {
          border: 1px solid #ef4444;
          color: #ef4444;
          border-radius: 20px;
          text-transform: none;
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 13px;
          padding: 6px 20px;

          &:hover {
            background-color: #fef2f2;
          }
        }
      }
    }

    /* Messages Thread */
    .messagesList {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .chatBubble {
        background-color: #00cd64;
        color: #ffffff;
        padding: 8px 14px;
        border-radius: 14px 14px 0 14px;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        align-self: flex-end;
        max-width: 75%;
      }
    }

    /* Bottom Input Bar */
    .chatInputBar {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #f8fafc;
      border-radius: 24px;
      padding: 4px 6px 4px 16px;
      border: 1px solid #e2e8f0;

      .inputField {
        flex: 1;
        font-family: "Inter", sans-serif;
        font-size: 13px;

        & .MuiInputBase-input {
          padding: 6px 0;
          font-size: 13px;
        }

        & fieldset {
          border: none;
        }
      }

      .sendIconButton {
        background-color: #00cd64;
        color: #ffffff;
        width: 36px;
        height: 36px;

        &:hover {
          background-color: #00b957;
        }
      }
    }
  }
`;

const initialChatUsers = [
  { id: 1, name: "Craig Bergson", avatar: "https://i.pravatar.cc/100?img=11", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: true },
  { id: 2, name: "Aspen Carder", avatar: "https://i.pravatar.cc/100?img=5", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 3, name: "James George", avatar: "https://i.pravatar.cc/100?img=13", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 4, name: "James Lubin", avatar: "https://i.pravatar.cc/100?img=8", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 5, name: "Aspen Herwitz", avatar: "https://i.pravatar.cc/100?img=9", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 6, name: "Corey Stanton", avatar: "https://i.pravatar.cc/100?img=14", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 7, name: "Marilyn Rosser", avatar: "https://i.pravatar.cc/100?img=24", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 8, name: "Kadin Schleifer", avatar: "https://i.pravatar.cc/100?img=33", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
  { id: 9, name: "Nolan Sepulveda", avatar: "https://i.pravatar.cc/100?img=60", snippet: "Lorem Ipsum is simply dummy text", time: "12:00 pm", isOnline: false },
];

const MyJobsProjects = () => {
  const navigate = useNavigate();

  // Dynamic States
  const [activeSubTab, setActiveSubTab] = useState(1); // 1 = Message
  const [selectedUserId, setSelectedUserId] = useState(2); // Aspen Carder selected
  const [searchQuery, setSearchQuery] = useState("");
  const [proposedPrice, setProposedPrice] = useState("2,800");
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const activeUser = initialChatUsers.find((u) => u.id === selectedUserId) || initialChatUsers[1];

  // Search Filter for Chat Users
  const filteredUsers = initialChatUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Send Message Handler
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    setChatMessages((prev) => [...prev, messageText]);
    setMessageText("");
  };

  // Submit Proposal Handler
  const handleSubmitProposal = () => {
    setProposalSubmitted(true);
  };

  // Discard Proposal Handler
  const handleDiscardProposal = () => {
    setProposedPrice("");
    setProposalSubmitted(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("storage"));
    navigate("/signup");
  };

  return (
    <DashboardWrapper>
      {}
      <Box className="mainContent">
        <Box className="dashboardCard">
          {/* Left Sidebar Navigation */}
          <Box className="sidebar">
            <Box className="sidebarMenu">
              <Button
                className="sidebarBtn"
                onClick={() => navigate("/profile")}
                startIcon={<PersonIcon />}
              >
                My Profile
              </Button>
              <Button className="sidebarBtn active" startIcon={<FolderIcon />}>
                My Job/Project
              </Button>
              <Button className="sidebarBtn" startIcon={<NotificationsIcon />}>
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

          {/* Right Main Content Area */}
          <Box className="contentArea">
            {/* Top Page Title & Action */}
            <Box className="topHeaderRow">
              <Typography className="pageTitle">My Job/Project</Typography>
              <Button className="addProjectBtn" variant="contained">
                Add Project
              </Button>
            </Box>

            {/* Project Banner Card */}
            <Box className="projectSummaryCard">
              <Box className="projectHeader">
                <Box className="titleBox">
                  <Typography className="projectTitle">
                    Lorem Ipsum is<br />Simply Dummy
                  </Typography>
                  <Chip label="Pending" className="pendingChip" size="small" />
                </Box>
                <IconButton size="small">
                  <MoreVertIcon fontSize="small" sx={{ color: "#94a3b8" }} />
                </IconButton>
              </Box>
              <Typography className="projectDescription">
                Standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>

            {/* Navigation Sub-Tabs */}
            <Box className="subNavigationTabs">
              <Tabs
                value={activeSubTab}
                onChange={(e, val) => setActiveSubTab(val)}
              >
                <Tab label="Overview" />
                <Tab label="Message" />
                <Tab label="Proposal" />
                <Tab label="Invite" />
              </Tabs>
            </Box>

            {/* Chat Section Grid */}
            <Box className="chatBoxContainer">
              {/* Left Column: Users List */}
              <Box className="chatUsersCol">
                <Box className="searchWrapper">
                  <TextField
                    placeholder="Search Chat"
                    fullWidth
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon fontSize="small" sx={{ color: "#94a3b8" }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Box>

                <Box className="usersList">
                  {filteredUsers.map((user) => (
                    <Box
                      key={user.id}
                      className={`userCard ${
                        selectedUserId === user.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedUserId(user.id)}
                    >
                      <Box className="avatarBox">
                        <Avatar src={user.avatar} sx={{ width: 36, height: 36 }} />
                        {user.isOnline && <Box className="onlineDot" />}
                      </Box>
                      <Box className="userInfo">
                        <Box className="nameRow">
                          <Typography className="userName">{user.name}</Typography>
                          <Typography className="timeStamp">{user.time}</Typography>
                        </Box>
                        <Typography className="snippet">{user.snippet}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Right Column: Active Chat Window */}
              <Box className="chatWindowCol">
                <Box>
                  {/* Chat Header */}
                  <Box className="chatHeader">
                    <Box className="headerUser">
                      <Avatar src={activeUser.avatar} sx={{ width: 36, height: 36 }} />
                      <Box>
                        <Typography className="name">{activeUser.name}</Typography>
                        <Typography className="status">
                          {activeUser.isOnline ? "Online" : "Offline"}
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton size="small">
                      <MoreVertIcon fontSize="small" sx={{ color: "#94a3b8" }} />
                    </IconButton>
                  </Box>

                  {/* Chat Body Details */}
                  <Box className="chatBody">
                    {/* Deliverable Info Card */}
                    <Box className="deliverableCard">
                      <Box className="infoItem">
                        <Typography className="label">Deliverable Price</Typography>
                        <Typography className="value">$ 3,200 USD</Typography>
                      </Box>
                      <Box className="infoItem">
                        <Typography className="label">Date</Typography>
                        <Typography className="value">May 10, 2024</Typography>
                      </Box>
                      <Chip label="Expired" className="expiredBadge" size="small" />
                    </Box>

                    <Typography className="timeSeparator">04:00 pm</Typography>

                    {/* Proposal / Price Input Card */}
                    <Box className="proposedPriceBox">
                      <Typography className="proposalLabel">
                        Submit Your Proposed Price
                      </Typography>
                      <Typography className="priceDisplay">
                        $ {proposedPrice || "0"}
                      </Typography>
                      <Box className="btnGroup">
                        <Button
                          className="submitBtn"
                          variant="contained"
                          onClick={handleSubmitProposal}
                        >
                          {proposalSubmitted ? "Submitted" : "Submit"}
                        </Button>
                        <Button
                          className="discardBtn"
                          variant="outlined"
                          onClick={handleDiscardProposal}
                        >
                          Discard
                        </Button>
                      </Box>
                    </Box>

                    {/* Chat Messages */}
                    {chatMessages.length > 0 && (
                      <Box className="messagesList">
                        {chatMessages.map((msg, idx) => (
                          <Box key={idx} className="chatBubble">
                            {msg}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Bottom Input Area */}
                <Box className="chatInputBar">
                  <TextField
                    className="inputField"
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                  />
                  <IconButton size="small">
                    <ImageIcon fontSize="small" sx={{ color: "#94a3b8" }} />
                  </IconButton>
                  <IconButton
                    className="sendIconButton"
                    onClick={handleSendMessage}
                  >
                    <SendIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardWrapper>
  );
};

export default MyJobsProjects;