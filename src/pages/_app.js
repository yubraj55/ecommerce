import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Component users="Ram" {...pageProps} />
  </>
}
