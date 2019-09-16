import Head from 'next/head'
import {Container} from 'semantic-ui-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer.tsx'

const layoutStyle = {
  // paddingTop: '7em'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
