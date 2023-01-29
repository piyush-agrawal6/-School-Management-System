import React from 'react';
import VideoPlayer from './components/Video/Video';
import ID from './components/ID/ID';
import Call from './components/Call/call';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div>
      <Header />
      <ID>
        <Call />
      </ID>
      <VideoPlayer />
    </div>
  );
}

