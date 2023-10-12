import React from "react";

const DeviceContext = React.createContext();

export default function Device({ children }) {
  const [selectedChar, setSelectedChar] = React.useState([]);
  const [sendBtnClicked, setSendBtnClicked] = React.useState(false);
  const audioFile =
    "https://scrimba.com/blobs/sha1:c97c89e0d0db2db19bd5f375b4184482aaa3c58f.wav";

  function handleCharClick(char) {
    if (!sendBtnClicked) {
      setSelectedChar((prev) => [...prev, char]);
    } else {
      handleResetBtn();
      setSelectedChar((prev) => [...prev, char]);
    }
  }

  function handleResetBtn() {
    setSelectedChar([]);
    setSendBtnClicked(false);
  }

  function playNotificationSound() {
    const audio = new Audio(audioFile);
    audio.play();
  }

  function handleSendBtn() {
    setTimeout(() => {
      setSendBtnClicked(true);
      playNotificationSound();
    }, 2000);
  }

  return (
    <DeviceContext.Provider
      value={{
        handleCharClick,
        handleResetBtn,
        handleSendBtn,
        selectedChar,
        sendBtnClicked,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
}

export { DeviceContext };
