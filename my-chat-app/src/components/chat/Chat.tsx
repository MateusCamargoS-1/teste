import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, IconButton, Box, Menu, MenuItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachmentIcon from "@mui/icons-material/Attachment";
import SendIcon from '@mui/icons-material/Send';

import perfil from "../../assets/perfil.png";

interface ChatProps {
  user: string | null;
  setChatUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const Chat: React.FC<ChatProps> = ({ setChatUser }) => {
  const { user } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, `⠀${message}`]);
      setMessage("");
    }
  };

  const handleBackClick = () => {
    setChatUser(null);
    navigate("/chat");
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleBlockUser = () => {
    console.log("Usuário bloqueado");
    handleMenuClose();
  };

  const handleDeleteUser = () => {
    console.log("Usuário excluído");
    handleMenuClose();
  };

  return (
    <div
      className="chat-container"
      style={{
        padding: "0",
        backgroundColor: "#F7F7F7",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="header-chat"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "10px",
          borderBottom: "1px solid #ddd",
          backgroundColor: "#FFF",
          zIndex: 1,
          padding: "10px 20px",
        }}
      >
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={perfil}
            alt="User"
            style={{ width: 40, borderRadius: "50%", marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>{user}</span>
        </div>
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleBlockUser}>Bloquear</MenuItem>
          <MenuItem onClick={handleDeleteUser}>Excluir</MenuItem>
        </Menu>
      </div>

      <div
        style={{
          flex: 1,
          marginTop: "55px",
          padding: " 0 20px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              textAlign: msg.startsWith("⠀") ? "right" : "left",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: msg.startsWith("⠀") ? "#DCF8C6" : "#ffffff",
                color: msg.startsWith("⠀") ? "#000" : "#4B4B4B",
                borderRadius: "15px",
                padding: "8px 15px",
                maxWidth: "70%",
                wordBreak: "break-word",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {msg}
            </Box>
          </div>
        ))}
      </div>

      <div
        className="footer-chat"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #ddd",
          backgroundColor: "#FFF",
          paddingTop: "10px",
          zIndex: 1,
          padding: "10px 20px",
        }}
      >
        <IconButton>
          <AttachmentIcon />
        </IconButton>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva uma mensagem..."
          style={{ marginRight: "10px", borderRadius: "20px" }}
        />
        <IconButton onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
