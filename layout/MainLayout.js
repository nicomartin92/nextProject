// import Head from 'next/head'
// import {Container} from 'semantic-ui-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer.tsx'
import PanelNav from '../components/PanelNav/PanelNav'

/* Styles */
import '../styles/index.scss'

const layoutStyle = {
  // paddingTop: '7em'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle} className="next">
      <PanelNav items={props} />
      <Header />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
