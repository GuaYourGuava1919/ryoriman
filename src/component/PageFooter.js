import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import SettingsIcon from "@mui/icons-material/Settings";

function PageFooter() {
  return (
    <div>
      <div className="footer">
        <div className="toRecipe">
          <IconButton aria-label="delete" className="footerbottun">
            <MenuBookIcon />
            <div className="text-sm">食譜</div>
          </IconButton>
        </div>
        <div className="toFridge">
          <IconButton aria-label="delete" className="footerbottun">
            <KitchenIcon />
            <div className="text-sm">冰箱</div>
          </IconButton>
        </div>
        <div className="tpHomePage">
          <IconButton aria-label="delete" className="footerbottun">
            <HomeIcon />
            <div className="text-sm">首頁</div>
          </IconButton>
        </div>
        <div className="toPersonalInfo">
          <IconButton aria-label="delete" className="footerbottun">
            <FaceIcon />
            <div className="text-sm">我的</div>
          </IconButton>
        </div>
        <div className="toSettimg">
          <IconButton aria-label="delete" className="footerbottun">
            <SettingsIcon />
            <div className="text-sm">設定</div>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
