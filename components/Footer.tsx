import React from "react";
import Image from "next/image";
import GitHub from "./icons/GitHub";
import Outlook from "./icons/Outlook";
import Linkedin from "./icons/Linkedin";
import WhatsApp from "./icons/WhatsApp";
const Footer = () => {
  return (
    <div>
      <footer className='flex items-center justify-center gap-4 py-4'>
        <GitHub link={"https://github.com/XINAD919"} />
        <Outlook link={"mailto:da_919@hotmail.com"} />
        <Linkedin
          link={"https://www.linkedin.com/in/daniel-castano-barrera/"}
        />
        <WhatsApp link={"https://wa.me/573107073803"} />
      </footer>
    </div>
  );
};

export default Footer;
