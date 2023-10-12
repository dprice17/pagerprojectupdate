import React from "react";
import { DeviceContext } from "./Device";

export default function Pager() {
  const { selectedChar, sendBtnClicked } = React.useContext(DeviceContext);

  return (
    <div className="pager-container">
      <h2>Pager</h2>
      <div className="pager-screen">{sendBtnClicked && selectedChar}</div>
    </div>
  );
}
