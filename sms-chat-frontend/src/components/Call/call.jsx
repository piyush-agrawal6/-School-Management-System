import React, { useContext } from 'react';
import './call.css';
import { SocketContext } from '../../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="call">
          <h3>Call from {call.name ? call.name : 'unknown'}</h3>
          <div className="button" onClick={answerCall}>Answer</div>
          <div className="button decline" onClick={leaveCall}>Decline</div>
        </div>
      )}
    </>
  );
};

export default Notifications;
