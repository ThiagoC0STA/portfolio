import App from "next/app";
import "../styles/GlobalStyles.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
