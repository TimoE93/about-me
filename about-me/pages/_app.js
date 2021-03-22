import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
