import Head from 'next/head'

import Layout from '../layout/MainLayout'
import Dashboard from '../components/Dashboard/Dashboard'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class Status extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>@FRmodelcars - tableau de bord</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout carItems={this.props.carR.cars}>
          <p>This is the Status page</p>
          <Dashboard items={this.props.carR.cars} />
        </Layout>
      </div>
    )
  }
}

export default connect(
  state => state,
  // actions
)(Status);
