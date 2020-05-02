import Head from 'next/head'

import Layout from '../layout/MainLayout'
import '../styles/index.scss';
import Dashboard from '../components/Dashboard/Dashboard'

import { connect } from 'react-redux';

const Status = (props) => {
  return (
    <div>
      <Head>
        <title>@FRmodelcars - tableau de bord</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout carItems={props.carR.cars}>
        <p>This is the Status page</p>
        <Dashboard items={props.carR.cars} />
      </Layout>
    </div>
  )
}

export default connect(
  state => state,
  // actions
)(Status);
