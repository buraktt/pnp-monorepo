import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grid: {
    height: '90vh'
  }
}))

export default function Layout({ title, children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth="sm">
        <Grid
          container
          align="center"
          justify="center"
          direction="column"
          spacing={5}
          className={classes.grid}>
          <Grid item>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </div>
  )
}
