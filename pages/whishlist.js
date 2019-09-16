import Head from 'next/head'

import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class Whishlist extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>@FRmodelcars - Mes préférés</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout itemPanel={this.props.carR.cars}>
          <p>This is the Whishlist page</p>
        </Layout>
      </div>
    )
  }
}

export default connect(
  state => state,
  // actions
)(Whishlist);
