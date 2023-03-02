import Head from "next/head";
import Link from "next/link";
import PublicLayout from "../components/PublicLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PublicLayout>
        <section className='h-screen' id='AboutMe'>
          <div className='flex flex-row justify-between'>
            <div className=''>
              <h1>Hola Soy Daniel</h1>
              <div className='action_buttons flex gap-8'>
                <Link href=''>Download CV, icon</Link>
                <Link href=''>Hire me</Link>
              </div>
            </div>
            <div className=''>Imagen aqui</div>
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
