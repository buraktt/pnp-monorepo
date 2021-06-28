import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useEffect } from 'react'
import theme from '../theme'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
