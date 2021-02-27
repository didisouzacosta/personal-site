import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import React from "react";

const name = "Adriano Souza Costa";
export const title = "Adriano | iOS and React Native Developer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        Desenvolvedor iOS e React Native
      </header>
      <main>{children}</main>
    </div>
  );
}
