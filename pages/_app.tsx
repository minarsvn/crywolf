import 'styles/global.css';
import 'styles/nprogress.css';
import type { AppProps } from 'next/app';
import NProgress from '../components/nprogress';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
            <NProgress />
      </ThemeProvider>
  );
}
