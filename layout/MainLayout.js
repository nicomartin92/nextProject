// import Head from 'next/head'
// import {Container} from 'semantic-ui-react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer.tsx'
import PanelNav from '../components/PanelNav/PanelNav'
import Autocomplete from '../components/Autocomplete/Autocomplete'
import PageIndicator from '../components/PageIndicator/PageIndicator'

/* Styles */
import '../styles/index.scss'

const layoutStyle = {
  // paddingTop: '7em'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle} className="next">
      <PageIndicator />
      <PanelNav items={props} />
      <Header />
      <Autocomplete items={props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
