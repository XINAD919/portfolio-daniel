import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div className='w-3/4 mx-auto py-3'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='flex rounded-full h-12 w-12'>
            <Link href='/' className="flex">
              <Image
                src={"d.svg"}
                alt='imagen de la letra D dentron de un circulo'
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className=''>Daniel</div>
        </div>
        <div className='flex gap-4'>
          <Link href='#AboutMe'>About me</Link>
          <Link href='#Projects'>Projects</Link>
          <Link href='#Skills'>Skills</Link>
          <Link href='#Contact'>Contact</Link>
          <select name='idioma' id='idioma'>
            <option value='Es'>
              Es
            </option>
            <option value='En'>En</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
