import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Avatar, Grid, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import perfil from "../../assets/perfil.png";
import FooterMenu from "../FooterMenu";
import { useNavigate } from "react-router-dom";

interface MessagesProps {
  setChatUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const useStyles = makeStyles({
  messageCard: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "12px",
    borderRadius: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
    marginLeft: "15px", // Adicionando margem nas laterais
    marginRight: "15px", // Adicionando margem nas laterais
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  avatar: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontWeight: 600,
    color: "#212121",
  },
  lastMessage: {
    color: "#757575",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginTop: 4,
    maxWidth: "200px", // Limite de largura para a última mensagem
  },
  moreButton: {
    marginLeft: "auto",
  },
  noMessagesText: {
    textAlign: "center",
    color: "#B0BEC5",
    fontSize: "20px",
    marginTop: "50px",
  },
  gridContainer: {
    marginTop: "20px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  searchInput: {
    width: "300px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
    },
  },
});

const Messages: React.FC<MessagesProps> = ({ setChatUser }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = React.useState<string | null>(null);
  const navigate = useNavigate(); // Usando useNavigate para navegar entre as telas

  const messages = [
    {
      id: 1,
      name: "Gabrielzin",
      lastMessage:
        "E ai, gata. tudo bem? Isso é uma conversa longa que será cortada.",
    },
    { id: 2, name: "Fela", lastMessage: "Que delicia hein" },
    { id: 3, name: "Fulano", lastMessage: "Como vai?" },
    {
      id: 4,
      name: "Ciclano",
      lastMessage: "Tech geek, procurando alguém para trocar ideias.",
    },
    // Adicione mais mensagens conforme necessário
  ];

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    userName: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(userName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleChatClick = (userName: string) => {
    setChatUser(userName); // Salva o usuário do chat
    navigate(`/chat/${userName}`); // Redireciona para a tela do chat
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Adicionando o useEffect para atualizar a tela quando for navegada
  useEffect(() => {
    // Aqui você pode resetar ou limpar qualquer estado se necessário.
    // Exemplo: setSelectedUser(null) se precisar resetar o menu
  }, []); // Esse array vazio garante que a função seja chamada apenas uma vez quando o componente for montado

  return (
    <>
      <div
        className="messages-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Título com ícone e busca */}
        <div className={classes.titleContainer}>
          <TextField
            variant="outlined"
            placeholder="Buscar mensagens"
            className={classes.searchInput}
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <Search sx={{ color: "#B0BEC5", marginLeft: 1 }} />
              ),
            }}
          />
        </div>

        {messages.length === 0 ? (
          <Typography className={classes.noMessagesText}>
            Nenhuma conversa
          </Typography>
        ) : (
          <Grid container spacing={2} className={classes.gridContainer}>
            {messages
              .filter((message) =>
                message.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((message) => (
                <Grid item xs={12} sm={6} md={4} key={message.id}>
                  <Card
                    className={classes.messageCard}
                    onClick={() => handleChatClick(message.name)} // Redireciona para a tela de chat
                    style={{ borderRadius: 15 }}
                  >
                    <Avatar
                      alt={message.name}
                      src={perfil} // Substitua com a URL da foto do usuário
                      className={classes.avatar}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6" className={classes.name}>
                        {message.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.lastMessage}
                      >
                        {message.lastMessage}
                      </Typography>
                    </CardContent>
                    <IconButton
                      className={classes.moreButton}
                      onClick={(e) => handleMenuClick(e, message.name)}
                    >
                      <MoreVert />
                    </IconButton>
                  </Card>

                  <Menu
                    anchorEl={anchorEl}
                    open={selectedUser === message.name}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Bloquear</MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      Excluir conversa
                    </MenuItem>
                  </Menu>
                </Grid>
              ))}
          </Grid>
        )}
      </div>
      <FooterMenu />
    </>
  );
};

export default Messages;
