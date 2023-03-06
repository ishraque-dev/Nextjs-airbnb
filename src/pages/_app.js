import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
