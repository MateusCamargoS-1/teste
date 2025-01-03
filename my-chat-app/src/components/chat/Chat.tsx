import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachmentIcon from '@mui/icons-material/Attachment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import perfil from '../../assets/perfil.png';

interface ChatProps {
  setChatUser: React.Dispatch<React.SetStateAction<string | null>>;
  isChatScreen: boolean;
}

const Chat: React.FC<ChatProps> = ({ setChatUser }) => {
  const { user } = useParams();  // Obtém o parâmetro 'user' da URL
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, `⠀${message}`]);
      setMessage('');
    }
  };

   // Função para voltar para a tela de mensagens
   const handleBackClick = () => {
    setChatUser(null); // Limpa o estado do usuário do chat
    navigate('/chat'); // Navega para a tela de mensagens
  };

  return (
    <div className="chat-container" style={{ padding: '20px', backgroundColor: '#F7F7F7', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Cabeçalho */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #ddd' }}>
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={perfil} alt="User" style={{ width: 40, borderRadius: '50%', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{user}</span>
        </div>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      {/* Mensagens */}
      <div style={{ flex: 1, overflowY: 'scroll', marginTop: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: msg.startsWith('⠀') ? 'right' : 'left' }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: msg.startsWith('⠀') ? '#DCF8C6' : '#ffffff',
                color: msg.startsWith('⠀') ? '#000' : '#4B4B4B',
                borderRadius: '15px',
                padding: '8px 15px',
                maxWidth: '70%',
                wordBreak: 'break-word',
                boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              {msg}
            </Box>
          </div>
        ))}
      </div>

      {/* Rodapé - Campo de mensagem */}
      <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
        <IconButton>
          <AttachmentIcon />
        </IconButton>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva uma mensagem..."
          style={{ marginRight: '10px', borderRadius: '20px' }}
        />
        <IconButton onClick={sendMessage}>
          <EmojiEmotionsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
