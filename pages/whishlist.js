import Head from 'next/head'

import Layout from '../layout/MainLayout'

import Grid from '../components/Grid/Grid'

import { connect } from 'react-redux';

import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

// ACTIONS
import {
  addFavorite
} from '../store/actions/actions';

/* Styles comments */
import '../styles/index.scss'

const Whishlist = (props) => {

  return (
    <div>
      <Head>
        <title>@FRmodelcars - My whislist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout carItems={props.cars}>
        <h1>Votre sélection</h1>

        <h1>{RichText.asText(props.home.data.headline)}</h1>
        <p>{RichText.asText(props.home.data.description)}</p>

        <Grid item={props.favorites} isLoading={false} />
      </Layout>
    </div>
  )
}

Whishlist.getInitialProps = async context => {
  const home = await client.getSingle('blog_home')

  return { home }
}

/* export default connect(
  state => state,
  // actions
)(Whishlist); */

const mapStateToProps = (state) => {
  return {
    cars: state.carR.cars,
    favorites: state.carR.favorites
  }
};

export default connect(
  mapStateToProps,
  null
)(Whishlist);
