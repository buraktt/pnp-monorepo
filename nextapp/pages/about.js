import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Button from '@material-ui/core/Button'
import Layout from '../components/Layout/Layout'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default function About() {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  return (
    <Layout title={t('about')}>
      <h1>{t('test')}</h1>
      <Link href="/" locale={locale} passHref>
        <Button color="primary" variant="contained">
          {t('home')}
        </Button>
      </Link>
    </Layout>
  )
}
