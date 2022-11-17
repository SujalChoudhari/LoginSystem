import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      

      <Navbar/>

      <Component {...pageProps} />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
    </>
  )
}

export default MyApp
