import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import Explore from './components/explore/Explore';
import Messages from './components/messages/Messages';
import Chat from './components/chat/Chat';

import './styles/global.css';

const App = () => {
  const [chatUser, setChatUser] = useState<string | null>(null);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/chat" element={<Messages setChatUser={setChatUser} />} />
          <Route path="/chat/:user" element={<Chat user={chatUser} setChatUser={setChatUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
