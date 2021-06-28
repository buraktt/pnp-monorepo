import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

console.log(serverRuntimeConfig.mySecret)
console.log(publicRuntimeConfig.staticFolder)

export default function Footer() {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  return (
    <Container maxWidth="lg">
      <Grid container justify="center" align="center" spacing={5}>
        <Grid item>
          <Link href="/" locale="en">
            {t('en')}
          </Link>
        </Grid>

        <Grid item>
          <Link href="/" locale="de">
            {t('de')}
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
