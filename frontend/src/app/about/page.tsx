import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutContent = dynamic(() => import("./AboutComponent"), {
  loading: () => <p>Loading AboutComponent...</p>,
});

const About: NextPage = () => {
  return (
    <>
      {/* Gestione SEO con Head */}
      <Head>
        <title>About - Fit Track Pro</title>
        <meta
          name="description"
          content="Learn more about Fit Track Pro, our mission, and values."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Contenuto della pagina, caricata pigramente */}
      <main>
        <AboutContent />
      </main>
    </>
  );
};

export default About;
