import '../styles/globals.scss'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <div className="main">
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
