import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "./styles.module.css";

const name = "Adriano Souza Costa";
const title = "Adriano | Desenvolvedor mobile Swift/React Native";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={title} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://landing-page-nassi-atelie.vercel.app/"
        ></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={title}></meta>
        <meta property="og:image" content="/images/profile.jpg"></meta>

        {/* Twitter */}
        <meta property="twitter:card" content="/images/profile.jpg"></meta>
        <meta
          property="twitter:url"
          content="https://landing-page-nassi-atelie.vercel.app/"
        ></meta>
        <meta property="twitter:title" content={title}></meta>
        <meta property="twitter:description" content={title}></meta>
        <meta property="twitter:image" content="/images/profile.jpg"></meta>
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={styles.borderCircle}
          height={144}
          width={144}
          alt={name}
          objectFit="cover"
        />
        <h1 data-testid="title" className={styles.heading}>
          {name}
        </h1>
        <p data-testid="subtitle" className={styles.subHeading}>
          Desenvolvedor iOS e React Native
        </p>
      </header>
      <section className={styles.infos}>
        <p data-testid="about">
          Além de um cara legal, trabalho criando soluções mobile utilizando
          Swift e React Native sempre com muito interesse em UI/UX. Levo a vida
          devagar curtindo muito 🐶 🎮 🍿 ☕
        </p>
        <Link href="https://dev.to/didisouzacosta" replace={false}>
          <a data-testid="social-link" target="_blank" rel="noreferrer">
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
          <a data-testid="social-link" target="_blank" rel="noreferrer">
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
          <a data-testid="social-link" target="_blank" rel="noreferrer">
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
