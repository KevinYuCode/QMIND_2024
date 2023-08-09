import React from "react";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import styles from "../styles/navbar.module.scss";

function _app({ Component, pageProps }: AppProps) {
  return (
    <div className="mainBgColour w-[100dvw] h-[100dvh]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default _app;
