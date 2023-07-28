import React from "react";
import { useTheme } from "styled-components";


const WhatsApp = ({ link }) => {
  const theme = useTheme();

  return (
    <a href={link} target='__blank'>
      <svg
        width='38'
        height='38'
        viewBox='0 0 48 53'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 26.5508C0 40.7122 10.7452 52.1924 24 52.1924C37.2548 52.1924 48 40.7122 48 26.5508C48 12.3893 37.2548 0.90918 24 0.90918C10.7452 0.90918 0 12.3893 0 26.5508ZM39.0621 25.5695C39.059 33.9743 32.6595 40.8132 24.7911 40.8166H24.7852C22.3967 40.8157 20.0498 40.1755 17.9653 38.9607L10.4 41.081L12.4246 33.18C11.1757 30.8677 10.5186 28.2447 10.5196 25.5574C10.5228 17.1507 16.9248 10.3111 24.7909 10.3111C28.6086 10.3129 32.1918 11.9007 34.8862 14.7828C37.5806 17.6647 39.0637 21.4955 39.0621 25.5695Z'
          fill={theme.icon}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.8265 37.4587L18.3159 36.2005L18.749 36.4752C20.5702 37.6298 22.6578 38.2408 24.7863 38.2416H24.7911C31.3289 38.2416 36.65 32.5565 36.6526 25.5686C36.6538 22.1824 35.4212 18.9984 33.1817 16.603C30.9422 14.2075 27.964 12.8876 24.7958 12.8865C18.2529 12.8865 12.9318 18.5711 12.9292 25.5584C12.9283 27.953 13.5554 30.285 14.7428 32.3027L15.0248 32.7822L13.8265 37.4587ZM31.4924 28.8522C31.7411 28.9807 31.9091 29.0674 31.9808 29.1953C32.0699 29.3541 32.0699 30.1169 31.7729 31.007C31.4756 31.8969 30.0511 32.7091 29.3659 32.8184C28.7516 32.9166 27.9742 32.9575 27.12 32.6675C26.602 32.4919 25.9379 32.2575 25.0871 31.8649C21.7442 30.3227 19.4851 26.8611 19.0581 26.2069C19.0282 26.161 19.0072 26.129 18.9956 26.1123L18.9927 26.1082C18.804 25.8392 17.5395 24.0367 17.5395 22.1712C17.5395 20.4164 18.3464 19.4965 18.7178 19.0731C18.7432 19.0441 18.7666 19.0174 18.7876 18.993C19.1144 18.6116 19.5008 18.5162 19.7385 18.5162C19.9762 18.5162 20.2141 18.5186 20.4219 18.5297C20.4475 18.5311 20.4742 18.5309 20.5018 18.5307C20.7096 18.5294 20.9686 18.5278 21.2242 19.1837C21.3225 19.4361 21.4664 19.8103 21.6181 20.205C21.925 21.0031 22.264 21.8849 22.3236 22.0125C22.4128 22.2032 22.4722 22.4256 22.3534 22.68C22.3355 22.7181 22.319 22.7541 22.3032 22.7885C22.214 22.9832 22.1483 23.1265 21.9968 23.3155C21.9372 23.3898 21.8756 23.4699 21.814 23.5501C21.6914 23.7097 21.5687 23.8693 21.4619 23.983C21.2834 24.1729 21.0975 24.3791 21.3055 24.7605C21.5136 25.1419 22.2292 26.3894 23.2893 27.3997C24.4288 28.4856 25.4192 28.9446 25.9212 29.1772C26.0192 29.2227 26.0986 29.2595 26.1569 29.2906C26.5133 29.4814 26.7214 29.4495 26.9294 29.1953C27.1374 28.941 27.8208 28.0828 28.0585 27.7014C28.2962 27.3202 28.534 27.3837 28.8608 27.5108C29.1877 27.638 30.9408 28.5596 31.2974 28.7503C31.367 28.7875 31.4321 28.8211 31.4924 28.8522Z'
          fill={theme.icon}
        />
      </svg>
    </a>
  );
};
export default WhatsApp;
