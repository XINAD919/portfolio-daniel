import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext"; 
const DarkMode = () => {
  const {theme, toggleTheme}=useContext(ThemeContext)
  return (
    <div className='dark-mode-toggle'>
      <label className='switch'>
        <input
          type='checkbox'
          checked={theme === "Dark" }
          onChange={() => toggleTheme()}
        />
        <span className='slider round' />
      </label>
    </div>
  );
};

export default  DarkMode;
