import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { title } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.about}`}>
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
    </Layout>
  );
}
