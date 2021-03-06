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
import Survey from '../components/Survey/Survey';

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
  const domain = location.protocol + '//' + window.location.host + '/static';

  return (
    <div>
      <Head>
        <title>@FRmodelcars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <!-- Meta data PWA  --> */}
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
        {/* <!-- End of Meta data PWA  --> */}
      </Head>

      <Layout carItems={props.cars} stock={props.stock}>
        <h1>Bienvenue sur FRModelcars</h1>

        <GetWhislist />

        <CompareImage
          leftImage={domain + props.cars[2].views[0].image1}
          rightImage={domain + props.cars[31].views[0].image1}
          hover />

        <section className="banner__text">
          <div className="content">
            <h2>Pourquoi FRModelcars ?</h2>
            <p>Nous sommes avant tout un site de passionnés. Nous y présentons des modèles rares y mithyques.</p>
            <p>Nous donnons une estimation du marché pour chaque modèle. Si vous recherchez un modèle en particulier où si vous voulez en connaître sa côte, veuillez nous en faire part.</p>
          </div>
          <div className="image">
            <img lodaing="lazy" src={`/static${props.cars[28].image}`} />
            <p>Venez découvrir le {props.cars[28].version}.</p>
          </div>
        </section>

        <Slider item={props.cars} view={1} />

        <Survey item={props.survey[0]} survey={'survey'} />

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
    isVisible: state.carR.visibleContent,
    survey: state.carR.survey
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