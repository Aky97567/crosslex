import { useEffect } from 'react';
import { type AppProps } from 'next/app';
import '@/styles/globals.css';
import { ClientContextProvider } from '@whitelotus/front-shared';
import { migrateStorage } from '@whitelotus/front-features';

// import '~/styles/globals.css';
import { makeCrosslexClientContext } from '../context';

const CrosslexApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const context = makeCrosslexClientContext();

  useEffect(() => { migrateStorage(); }, []);

  return (
    <ClientContextProvider value={context}>
      <Component {...pageProps} />
    </ClientContextProvider>
  );
};

export default CrosslexApp;
