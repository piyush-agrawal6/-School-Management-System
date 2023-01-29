import React, { useContext } from 'react';
import { SocketContext } from '../../Context';
import './Video.css';

const VideoPlayer = () => {
  const { callAccepted, myVideo, userVideo, callEnded, stream } = useContext(SocketContext);

  return (
    <div className="video">
      {stream && (
        <div>
          <div item xs={12} md={6}>
            <video className="player" playsInline muted ref={myVideo} autoPlay />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <div>
            <video className="player" playsInline ref={userVideo} autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
