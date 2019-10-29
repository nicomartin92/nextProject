import Head from 'next/head'

import Layout from '../layout/MainLayout'

import Grid from '../components/Grid/Grid'

import { connect } from 'react-redux';

/* Styles */
import '../styles/index.scss'

class Whishlist extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>@FRmodelcars - My whislist</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Layout carItems={this.props.carR.cars}>
          <p>This is the Whishlist page</p>

          <Grid />
        </Layout>
      </div>
    )
  }
}

/* export default connect(
  state => state,
  // actions
)(Whishlist); */

const mapStateToProps = (state) => {
  return {
    favorites: state.carR.favorites
  }
};

export default connect(
  mapStateToProps, 
  null
)(Whishlist);
