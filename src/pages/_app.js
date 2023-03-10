import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import '@/styles/globals.css';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
const progress = new ProgressBar({
  size: 4,
  color: '#FF385C',
  className: 'z-50',
  delay: 100,
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
