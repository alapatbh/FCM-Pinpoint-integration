import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default props => {
  const [notification, setNotification] = useState("");
  window.addEventListener('fcmNotiification', (e) => {
    let pinpointObj = e.detail;
    console.log(pinpointObj);
    setNotification(pinpointObj["pinpoint.notification.body"]);
  });

  return (
    <div className="component-app">
      <h2>FCM pinpoint integration</h2>
      <p>{notification}</p>
    </div>
  );
}
