import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title = "PokemonApp" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Snayder Charaña" />
        <meta
          name="description"
          content="Información sobre el pokémon XXXXXX"
        />
        <meta name="keywords" content={`${title}, pokemon, pokdex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
