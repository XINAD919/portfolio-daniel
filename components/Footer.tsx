import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className='flex items-center justify-center gap-4 py-4'>
        <a href='https://github.com/XINAD919' target='__blank'>
          <Image
            src={"Github.svg"}
            alt={"outlook icon"}
            width={30}
            height={30}
          />
        </a>
        <a href='mailto:da_919@hotmail.com' target='__blank'>
          <Image
            src={"Outlook.svg"}
            alt={"outlook icon"}
            width={30}
            height={30}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/daniel-castano-barrera/'
          target='__blank'
        >
          <Image
            src={"Linkedin.svg"}
            alt={"linkedin icon"}
            width={30}
            height={30}
          />
        </a>
        <a href='https://wa.me/573107073803' target='__blank'>
          <Image
            src={"WhatsApp.svg"}
            alt={"outlook icon"}
            width={30}
            height={30}
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
