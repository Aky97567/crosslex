import { type AppProps } from 'next/app';

import { ClientContextProvider } from '@whitelotus/front-shared';

// import '~/styles/globals.css';
import { makeCrossplexClientContext } from '../context';

const CrossplexApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const context = makeCrossplexClientContext();

  return (
    <ClientContextProvider value={context}>
      <Component {...pageProps} />
    </ClientContextProvider>
  );
};

export default CrossplexApp;
