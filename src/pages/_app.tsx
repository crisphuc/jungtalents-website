import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin]
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
