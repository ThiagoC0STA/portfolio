import Head from "next/head";
import {
  Header,
  Main,
  About,
  Experience,
  Offer,
  Works,
  Contact,
  Footer,
} from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thiago Costa</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <Main />
      <About />
      <Experience />
      <Offer />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
