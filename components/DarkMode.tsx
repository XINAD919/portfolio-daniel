import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const DarkMode = () => {
const [isToggled ,setIsToggled]=useState(true);
const onToggle=()=>{
  setIsToggled(!isToggled);
}
  return (
    <div className='dark-mode-toggle'>
      <label className='switch'>
        <input type='checkbox' checked={isToggled} onChange={onToggle} />
        <span className='slider round' />
      </label>
    </div>
  );
};

export default DarkMode;
