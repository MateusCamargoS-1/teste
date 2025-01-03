import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Explore from './components/explore/Explore';
import Messages from './components/messages/Messages';
import Chat from './components/chat/Chat';

import Login from "./components/Login";
import Signup from "./components/Cadastro";

import './styles/global.css';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [chatUser, setChatUser] = useState<string | null>(null);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/explore" element={<PrivateRoute element={<Explore />} />} />
          <Route path="/chat" element={<PrivateRoute element={<Messages setChatUser={setChatUser} />}/>} />
          <Route path="/chat/:user" element={<PrivateRoute element={<Chat user={chatUser} setChatUser={setChatUser} />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
