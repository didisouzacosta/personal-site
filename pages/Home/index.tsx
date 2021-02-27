import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

const Home = () => {
  const name = "Adriano Souza Costa";

  return (
    <div className={styles.container}>
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
