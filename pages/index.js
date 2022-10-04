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
