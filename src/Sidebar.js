import React from "react";
import { Avatar, IconButton } from "@mui/material";
import "./Sidebar.css";
import {
  ChatBubbleOutline,
  DonutLargeOutlined,
  MoreHorizOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <ChatBubbleOutline />
          </IconButton>
          <IconButton>
            <MoreHorizOutlined />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
