import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext"; 
const DarkMode = () => {
  const {theme, toggleTheme}=useContext(ThemeContext)
  return (
    <div className='flex flex-row-reverse switch-button'>
      <label className='switch'htmlFor="switch-button">
        <input
          type='checkbox'
          id='switch-button'
          name='switch-button'
          placeholder="switch"
          checked={theme === "Dark" }
          onChange={() => toggleTheme()}
          readOnly
        />
        <span className='slider round' />
      </label>
    </div>
  );
};

export default  DarkMode;
