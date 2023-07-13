import React from 'react'
import { useTheme } from 'styled-components';

const Lang = () => {
  const theme=useTheme()
  return (
    <svg
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      aria-hidden='true'
      stroke={theme.icon}
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
      ></path>
    </svg>
  );
}

export default Lang