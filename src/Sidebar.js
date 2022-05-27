import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import {
  ChatBubbleOutline,
  DonutLargeOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <DonutLargeOutlined />
          <ChatBubbleOutline />
          <MoreHorizOutlined />
        </div>
      </div>
      <div className="sidebar_search"></div>
      <div className="sidebar_chats"></div>
    </div>
  );
}

export default Sidebar;
