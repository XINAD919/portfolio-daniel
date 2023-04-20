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
          <Link className='flex items-center' href='' locale={changeTo}>
            {t("lang")}
            <Image src={"/Lang.svg"} alt='lang icon' width={19} height={19} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
