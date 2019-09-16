import Head from 'next/head'

import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class List extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>@FRmodelcars - page de catégorie</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout
          title="FrModelcar - page de catégorie"
          itemPanel={this.props.carR.cars}>
          <p>This is the List page</p>
        </Layout>
      </div>
    )
  }
}

export default connect(
  state => state,
  // actions
)(List);