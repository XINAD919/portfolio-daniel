import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import DarkMode from "./DarkMode";
import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import D from "./icons/D";
import Lang from "./icons/Lang";

const Header = () => {
  const { t } = useTranslation("header");
  const router = useRouter();
  const changeTo = router.locale === "es" ? "en" : "es";

  return (
    <div className='md:w-3/4 md:mx-auto md:py-3'>
      <div className='md:flex hidden justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='flex rounded-full h-12 w-12'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src={"D.svg"}
                alt='imagen de la letra D dentron de un circulo'
                width={40}
                height={40}
              />
              Daniel
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <Link href={`#${t("links.about")}`}>{t("aboutme")}</Link>
          <Link href={`#${t("links.projects")}`}>{t("projects")}</Link>
          <Link href={`#${t("links.skills")}`}>{t("skills")}</Link>
          <Link href={`#${t("links.contact")}`}>{t("contact")}</Link>
          <Link className='flex items-center' href='' locale={changeTo}>
            <Image src={"lang.svg"} alt='lang icon' width={19} height={19} />
            {t("lang")}
          </Link>
          <DarkMode />
        </div>
      </div>
      <HeaderMovile />
    </div>
  );
};
const HeaderMovile = () => {
  const { t } = useTranslation("header");
  const router = useRouter();
  const changeTo = router.locale === "es" ? "en" : "es";
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='md:hidden sm:flex mx-2 w-11/12 fixed'>
      <div className='flex justify-between  items-center w-full min-w-fit relative'>
        <div className='flex rounded-full h-12 w-12'>
          <Link href='/' className='flex items-center gap-2'>
            <D />
            Daniel
          </Link>
        </div>
        <div className='flex flex-row-reverse gap-4'>
          <Hamburger onClick={toggler} />
          <Link className='flex items-center' href='' locale={changeTo}>
            <Lang />
            {t("lang")}
          </Link>
          <DarkMode />
        </div>
      </div>
      <div className={`${toggleMenu ? "hidden" : ""} top-14 w-full absolute`}>
        <div className='flex flex-col items-center text-left'>
          <Link className='w-fit' href={`#${t("links.about")}`}>
            {t("aboutme")}
          </Link>
          <Link className='w-fit' href={`#${t("links.projects")}`}>
            {t("projects")}
          </Link>
          <Link className='w-fit' href={`#${t("links.skills")}`}>
            {t("skills")}
          </Link>
          <Link className='w-fit' href={`#${t("links.contact")}`}>
            {t("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
