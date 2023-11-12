import Header from '@/Components/Header/Header';
import ResHeader from '@/Components/Header/Responsive';
import { Datahandler } from '@/Context api/Productcontext';
import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import "@/styles/slider.css"
import Footer from '@/Components/Footer/Footer';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <Datahandler>
          <Component {...pageProps} />
        </Datahandler>
        <Footer />
      </SessionProvider>
    </>
  )
}