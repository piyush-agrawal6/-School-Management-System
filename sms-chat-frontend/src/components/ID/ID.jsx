import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ID.css';
import { SocketContext } from '../../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div>
      <div>
        <form autoComplete="off">
          <div className="form">
            <div>
              <h3>Enter Name</h3>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me}>
                <div className="button">Copy ID</div>
              </CopyToClipboard>
            </div>
            <div>
              <h3>Meeting ID</h3>
              <input
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <div className="button decline" onClick={leaveCall}>Hang Up</div>
              ) : (
                <div className="button" onClick={() => callUser(idToCall)}>Call</div>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
