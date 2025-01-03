import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import Explore from './components/explore/Explore';
import Messages from './components/messages/Messages';
import Chat from './components/chat/Chat';
import FooterMenu from './components/FooterMenu';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Rota padrão */}
          <Route path="/" element={<Navigate to="/profile" />} />
          
          {/* Outras rotas */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/chat" element={<Messages />} />
          <Route path="/chat/:user" element={<Chat />} />
        </Routes>

        <FooterMenu />
      </div>
    </Router>
  );
};

export default App;
