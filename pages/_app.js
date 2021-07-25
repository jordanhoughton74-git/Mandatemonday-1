import Header from '../components/header';
import Footer from '../components/footer';
import Head from "next/head";


import 'bootstrap/dist/css/bootstrap.min.css';


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
    </Head>

  <Header />
  <Component {...pageProps} />
  <Footer />
    </>
  )
}

export default MyApp
