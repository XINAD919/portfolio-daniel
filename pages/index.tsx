import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import DownloadButton from "../components/DownloadButton";
import PublicLayout from "../components/PublicLayout";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid #bbe1fa;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 1rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 1px solid #bbe1fa;
    border-radius: 100%;
  }
`;

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Portfolio Daniel</title>
        <meta
          name='description'
          content='portfolio page Daniel Castaño made by Daniel Castaño'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PublicLayout>
        <section className='h-screen'>
          <div className='flex flex-row justify-between h-screen py-24'>
            <div className='flex flex-col justify-end'>
              <h1 className='text-8xl mb-12 self-center'>{t("h1")}</h1>
              <div className='action_buttons flex gap-8'>
                <DownloadButton fileName='CV Daniel' />
                <Link
                  href={`#${t("links.contact")}`}
                  className='border-button px-4 py-2'
                >
                  {t("contact.title")}
                </Link>
              </div>
            </div>
            <div className=' w-1/2 max-h-96'>
              <ImageContainer className='hidden md:block' />
            </div>
          </div>
        </section>
        <section className='h-screen' id={`${t("links.about")}`}>
          <h2 className='text-center'>{t("about.title")}</h2>
        </section>
        <section className='h-screen' id={`${t("links.projects")}`}>
          <h2 className='text-center'>{t("projects.title")}</h2>
        </section>
        <section className='h-screen' id={`${t("links.skills")}`}>
          <h2 className='text-center'>{t("skills.title")}</h2>
        </section>
        <section className='h-screen' id={`${t("links.contact")}`}>
          <h2 className='text-center'>{t("contact.title")}</h2>
        </section>
      </PublicLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common", "header"])),
  },
});
