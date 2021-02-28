import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "./styles.module.css";

const name = "Adriano Souza Costa";
const title = "Adriano | iOS and React Native Developer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Desenvolvedor mobile utilizando Swift e React Native"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="/images/profile.png" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.png"
          className={styles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={styles.heading}>{name}</h1>
        <p className={styles.subHeading}>Desenvolvedor iOS e React Native</p>
      </header>
      <section className={styles.infos}>
        <p>
          Além de um cara legal, trabalho criando soluções mobile utilizando
          Swift e React Native (também tenho um dedido no design rsrs). E levo a
          vida devagar curtindo muito 🐶 🎮 🍿 ☕
        </p>
        <Link href="https://dev.to/didisouzacosta" replace={false}>
          <a target="_blank" rel="noreferrer">
            <Image
              priority
              src="/icons/devto_icon.png"
              height={44}
              width={44}
              alt="Dev.to"
            />
          </a>
        </Link>
        <Link href="https://github.com/didisouzacosta">
          <a target="_blank" rel="noreferrer">
            <Image
              priority
              src="/icons/github_icon.png"
              height={44}
              width={44}
              alt="Github"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/adrianosouzacosta/">
          <a target="_blank" rel="noreferrer">
            <Image
              priority
              src="/icons/linkedin_icon.png"
              height={44}
              width={44}
              alt="Linkedin"
            />
          </a>
        </Link>
      </section>
    </div>
  );
};

export default Home;
