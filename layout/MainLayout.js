import Head from 'next/head'
import {Container} from 'semantic-ui-react'
import Header from '../components/Header'
// import Footer from '../components/Footer'

const layoutStyle = {
  paddingTop: '7em'
}

export default ({children, title=''}) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <title>{title}</title>
    </Head>

    <Header />
    <Container text style={layoutStyle}>
      {children}
    </Container>
  </div>
)

/* export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
} */
