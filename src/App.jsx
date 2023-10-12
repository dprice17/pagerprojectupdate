import React from "react";
import Pager from "./components/Pager";
import Phone from "./components/Phone";
import Device from "./components/Device";

export default function App() {
  return (
    <div className="container">
      <Device>
        <Pager />
        <Phone />
      </Device>
    </div>
  );
}
