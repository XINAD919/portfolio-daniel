import Head from "next/head";
import Link from "next/link";
import PublicLayout from "../components/PublicLayout";

export default function Home() {
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
        <section className='h-screen' id='AboutMe'>
          <div className='flex flex-row justify-between h-screen py-24'>
            <div className='flex flex-col justify-end'>
              <h1 className='text-8xl mb-12'>
                Hola, <br /> Soy Daniel
              </h1>
              <div className='action_buttons flex gap-8'>
                <Link href='' className='border border-black px-4 py-2'>
                  Download CV, icon
                </Link>
                <Link href='' className='border border-black px-4 py-2'>
                  Hire me
                </Link>
              </div>
            </div>
            <div className='w-1/2'><div className="relative">
              </div></div>
          </div>
        </section>
        <section className='h-screen' id='Projects'>
          projects
        </section>
        <section className='h-screen' id='Skills'>
          skills
        </section>
        <section className='h-screen' id='Contact'>
          contact
        </section>
      </PublicLayout>
    </>
  );
}
