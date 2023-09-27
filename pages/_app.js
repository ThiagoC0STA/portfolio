import App from "next/app";
import "../styles/GlobalStyles.css";
import { LoadingAnimation } from "../components";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <LoadingAnimation />
        <Component {...pageProps} />
      </>
    );
  }
}
