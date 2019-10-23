import Head from 'next/head'

import Layout from '../layout/MainLayout'

import { connect } from 'react-redux';

import Search from '../components/Search/Search';

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
          carItems={this.props.carR.cars}>
          <p>This is the List page bla bla</p>
          <Search />
        </Layout>
      </div>
    )
  }
}

export default connect(
  state => state,
  // actions
)(List);