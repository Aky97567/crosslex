import { type AppProps } from 'next/app';
import '@/styles/globals.css';
import { ClientContextProvider } from '@whitelotus/front-shared';

// import '~/styles/globals.css';
import { makeCrosslexClientContext } from '../context';

const CrosslexApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const context = makeCrosslexClientContext();

  return (
    <ClientContextProvider value={context}>
      <Component {...pageProps} />
    </ClientContextProvider>
  );
};

export default CrosslexApp;
