import 'styles/global.css';
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
      <NextNProgress
  color="#05f559"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
