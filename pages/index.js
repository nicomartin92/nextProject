import Head from 'next/head';

import React from 'react';
import Layout from '../layout/MainLayout.js';

// connect to firebase database
import firebase from '../lib/db.js';

import Link from 'next/link'
// import { getProducts } from '../lib/moltin'
import ProductList from '../components/ProductList';
import GetWhislist from '../components/GetWhislist/GetWhislist';
import Slider from '../components/Slider/Slider';
import CompareImage from '../components/CompareImage/CompareImage';

import { connect } from 'react-redux';

// SELECTORS
import {
  getALLCars,
  getFrenchCars,
  getSold,
  getAvailable,
  getKeep,
  isVisible
} from '../store/selectors/selectors';

// ACTIONS
import {
  addFavorite,
  deleteStock
} from '../store/actions/actions';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
    { id: 3, title: 'car' }
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/cars/[id]" as={`/cars/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <Link href="/status">
      <a>status</a>
    </Link>

    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }
    `}</style>
  </li>
)

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>@FRmodelcars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout carItems={props.cars} stock={props.stock}>
        <h1>title test</h1>

        <GetWhislist />

        <CompareImage
          leftImage={props.cars[2].views[0].image1}
          rightImage={props.cars[6].views[0].image1}
          hover />

        <Slider item={props.cars} view={1} />

        <ul>
          {/* getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          )) */}
        </ul>
        <style jsx>{`
          ul {
            padding: 0;
          }
        `}</style>
      </Layout>
    </div>
  )
}

/* export default connect(
  state => state,
  // actions
)(Home); */

const mapStateToProps = (state) => {
  return {
    allCars: getALLCars(state),
    allFrench: getFrenchCars(state),
    allSold: getSold(state),
    allAvailable: getAvailable(state),
    allKeep: getKeep(state),
    cars: state.carR.cars,
    isVisible: state.carR.visibleContent
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (value) => dispatch(addFavorite(value)),
    deleteStock: (value) => { dispatch(deleteStock(value)) },
    updateGlobalStock: (value) => { dispatch({ type: 'UPDATE__GLOBAL__STOCK', stock: value }) },
    updateCurrentCar: (id) => { dispatch({ type: 'UPDATE__CURRENT__CAR', stock: id }) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

/* const Home = props => (
  <Layout title='FrModelcars'>
    <ProductList {...props} />
  </Layout>
)

Home.getInitialProps = async () => {
  const {data, included: {main_images}} = await getProducts()

  const products = data.map(product => {
    const imageId = product.relationships.main_images
      ? product.relationships.main_images.data.id
      : false

    return {
      ...product,
      image: imageId
        ? main_images.find(img => img.id === imageId).link.href
        : '/static/link.svg'
    }
  })

  return {
    products
  }
} */

// export default Home