import React from 'react';

interface MessageCardProps {
  name: string;
  lastMessage: string;
  onClick: () => void;
}

const MessageCard: React.FC<MessageCardProps> = ({ name, lastMessage, onClick }) => {
  return (
    <div className="message-card" onClick={onClick}>
      <img src="./assets/perfil.png" alt="User" />
      <div>
        <h3>{name}</h3>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

export default MessageCard;
