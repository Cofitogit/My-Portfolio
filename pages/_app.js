import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Head from 'next/head';
import Script from 'next/script';
import '../global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>cofitodev WEB</title>
      </Head>

      <Script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js' />
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.js' />

      <Component {...pageProps} />
    </>
  );
}
