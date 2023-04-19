import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation("header");
  const router = useRouter();

  const changeTo = router.locale === "es" ? "en" : "es";

  return (
    <div className='w-3/4 mx-auto py-3'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='flex rounded-full h-12 w-12'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src={"d.svg"}
                alt='imagen de la letra D dentron de un circulo'
                width={40}
                height={40}
              />
              Daniel
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <Link href='#AboutMe'>{t("aboutme")}</Link>
          <Link href='#Projects'>{t("projects")}</Link>
          <Link href='#Skills'>{t("skills")}</Link>
          <Link href='#Contact'>{t("contact")}</Link>
          <Link className="flex items-center" href='' locale={changeTo}>
            {t("lang")}
            <svg
              stroke='currentColor'
              fill='none'
              stroke-width='2'
              viewBox='0 0 24 24'
              aria-hidden='true'
              color='#06fbce'
              style={{color: "#06fbce"}}
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Español</title>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
