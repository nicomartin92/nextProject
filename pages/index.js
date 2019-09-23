import Head from 'next/head';

import React from 'react';
import Layout from '../layout/MainLayout.js'

import Link from 'next/link'
// import { getProducts } from '../lib/moltin'
import ProductList from '../components/ProductList'

import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/rootReducer';
// import actions from '../store/actions';

export const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

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

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Home = props => {
  return (
    <div>
      <Head>
        <title>@FRmodelcars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout carItems={props.carR.cars} stock={props.carR.stock}>
        <h1>title test</h1>
        <ul>
          {getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }
  
          ul {
            padding: 0;
          }
  
          li {
            list-style: none;
            margin: 5px 0;
          }
  
          a {
            text-decoration: none;
            color: blue;
          }
  
          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    </div>
  )
}

export default connect(
  state => state,
  // actions
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