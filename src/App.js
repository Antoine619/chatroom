import React from 'react';
import Username from './Username.js';
import './chatLog.js';
import chatMsgInput from './chatMsgInput.js';
import './App.css';

function App() {

  return (
    <div className="chat-container">
      <Username />
      <chatLog />
      <chatMsgInput />
    </div>
  );
}

export default App;