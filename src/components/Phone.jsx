import React from "react";
import { v4 as uuidv4 } from "uuid";
import phoneCharacters from "./phoneCharacters";
import { DeviceContext } from "./Device";

export default function Phone() {
  const { handleCharClick, handleResetBtn, handleSendBtn, selectedChar } =
    React.useContext(DeviceContext);

  return (
    <div className="phone-container">
      <h2>Phone</h2>
      <div className="phone-screen">{selectedChar}</div>
      <div className="phone-button-container">
        {phoneCharacters.map((char) => (
          <button
            key={uuidv4()}
            className="char-btns"
            onClick={() => handleCharClick(char)}
          >
            {char}
          </button>
        ))}
      </div>
      <div className="reset-send-btn-container">
        <button className="reset-btn" onClick={handleResetBtn}>
          RESET
        </button>
        <button className="send-btn" onClick={handleSendBtn}>
          SEND
        </button>
      </div>
    </div>
  );
}
