import Head from "next/head";
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
      </section>
    </Layout>
  );
}
