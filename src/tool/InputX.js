import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function InputX() {
  return (
    <div className="inputX">
      <input type="text" placeholder="來找找有沒有你要的食譜！" />
      <button className="inputX_submit">
        <SearchIcon style={{ color: "white" }} />
      </button>
    </div>
  );
}

export default InputX;
