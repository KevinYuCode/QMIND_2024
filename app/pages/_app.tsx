import React from "react";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

function _app({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default _app;
