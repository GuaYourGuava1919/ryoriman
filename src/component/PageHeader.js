import React from "react";
import Marquee from "react-fast-marquee";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InputX from "../tool/InputX";

function PageHeader() {
  return (
    <div>
      <div className="header">
        <div className="header__marquee">
          <VolumeUpIcon />
          <Marquee>
            <h4>打開小當家，使用更便利</h4>
          </Marquee>
        </div>
        <div className="header__title">
          <div className="header__titleName">
            <h2>今天我想來點...</h2>
            <NotificationsIcon
              style={{ marginRight: "15px", fontSize: "30px" }}
            />
          </div>
          <InputX />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
